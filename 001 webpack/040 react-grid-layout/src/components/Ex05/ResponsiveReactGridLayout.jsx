// @flow
import * as React from "react";
import isEqual from "lodash.isequal";

import {
  cloneLayout,
  synchronizeLayoutWithChildren,
  validateLayout,
  noop
} from "./utils";
import {
  getBreakpointFromWidth,
  getColsFromBreakpoint,
  findOrGenerateResponsiveLayout
} from "./responsiveUtils";
import ReactGridLayout from "./ReactGridLayout";

/**
 * Get a value of margin or containerPadding.
 *
 * @param  {Array | Object} param Margin | containerPadding, e.g. [10, 10] | {lg: [10, 10], ...}.
 * @param  {String} breakpoint   Breakpoint: lg, md, sm, xs and etc.
 * @return {Array}
 */
function getIndentationValue(
  param,
  breakpoint
){
  // $FlowIgnore TODO fix this typedef
  if (param == null) return null;
  // $FlowIgnore TODO fix this typedef
  return Array.isArray(param) ? param : param[breakpoint];
}





export default class ResponsiveReactGridLayout extends React.Component {
  static defaultProps = {
    breakpoints: { lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 },
    cols: { lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 },
    containerPadding: { lg: null, md: null, sm: null, xs: null, xxs: null },
    layouts: {},
    margin: [10, 10],
    onBreakpointChange: noop,
    onLayoutChange: noop,
    onWidthChange: noop
  };

  state = this.generateInitialState();

  generateInitialState() {
    const { width, breakpoints, layouts, cols } = this.props;
    const breakpoint = getBreakpointFromWidth(breakpoints, width);
    const colNo = getColsFromBreakpoint(breakpoint, cols);
    // verticalCompact compatibility, now deprecated
    const compactType =
      this.props.verticalCompact === false ? null : this.props.compactType;
    // Get the initial layout. This can tricky; we try to generate one however possible if one doesn't exist
    // for this layout.
    const initialLayout = findOrGenerateResponsiveLayout(
      layouts,
      breakpoints,
      breakpoint,
      breakpoint,
      colNo,
      compactType
    );

    return {
      layout: initialLayout,
      breakpoint: breakpoint,
      cols: colNo
    };
  }

  static getDerivedStateFromProps(
    nextProps,
    prevState) {
    if (!isEqual(nextProps.layouts, prevState.layouts)) {
      // Allow parent to set layouts directly.
      const { breakpoint, cols } = prevState;

      // Since we're setting an entirely new layout object, we must generate a new responsive layout
      // if one does not exist.
      const newLayout = findOrGenerateResponsiveLayout(
        nextProps.layouts,
        nextProps.breakpoints,
        breakpoint,
        breakpoint,
        cols,
        nextProps.compactType
      );
      return { layout: newLayout, layouts: nextProps.layouts };
    }

    return null;
  }

  componentDidUpdate(prevProps) {
    // Allow parent to set width or breakpoint directly.
    if (
      this.props.width != prevProps.width ||
      this.props.breakpoint !== prevProps.breakpoint ||
      !isEqual(this.props.breakpoints, prevProps.breakpoints) ||
      !isEqual(this.props.cols, prevProps.cols)
    ) {
      this.onWidthChange(prevProps);
    }
  }

  // wrap layouts so we do not need to pass layouts to child
  onLayoutChange = (layout) => {
    this.props.onLayoutChange(layout, {
      ...this.props.layouts,
      [this.state.breakpoint]: layout
    });
  };

  /**
   * When the width changes work through breakpoints and reset state with the new width & breakpoint.
   * Width changes are necessary to figure out the widget widths.
   */
  onWidthChange(prevProps) {
    const { breakpoints, cols, layouts, compactType } = this.props;
    const newBreakpoint =
      this.props.breakpoint ||
      getBreakpointFromWidth(this.props.breakpoints, this.props.width);

    const lastBreakpoint = this.state.breakpoint;
    const newCols = getColsFromBreakpoint(newBreakpoint, cols);
    const newLayouts = { ...layouts };

    // Breakpoint change
    if (
      lastBreakpoint !== newBreakpoint ||
      prevProps.breakpoints !== breakpoints ||
      prevProps.cols !== cols
    ) {
      // Preserve the current layout if the current breakpoint is not present in the next layouts.
      if (!(lastBreakpoint in newLayouts))
        newLayouts[lastBreakpoint] = cloneLayout(this.state.layout);

      // Find or generate a new layout.
      let layout = findOrGenerateResponsiveLayout(
        newLayouts,
        breakpoints,
        newBreakpoint,
        lastBreakpoint,
        newCols,
        compactType
      );

      // This adds missing items.
      layout = synchronizeLayoutWithChildren(
        layout,
        this.props.children,
        newCols,
        compactType
      );

      // Store the new layout.
      newLayouts[newBreakpoint] = layout;

      // callbacks
      this.props.onLayoutChange(layout, newLayouts);
      this.props.onBreakpointChange(newBreakpoint, newCols);

      this.setState({
        breakpoint: newBreakpoint,
        layout: layout,
        cols: newCols
      });
    }

    const margin = getIndentationValue(this.props.margin, newBreakpoint);
    const containerPadding = getIndentationValue(
      this.props.containerPadding,
      newBreakpoint
    );

    //call onWidthChange on every change of width, not only on breakpoint changes
    this.props.onWidthChange(
      this.props.width,
      margin,
      newCols,
      containerPadding
    );
  }

  render() {
    /* eslint-disable no-unused-vars */
    const {
      breakpoint,
      breakpoints,
      cols,
      layouts,
      margin,
      containerPadding,
      onBreakpointChange,
      onLayoutChange,
      onWidthChange,
      ...other
    } = this.props;
    /* eslint-enable no-unused-vars */

    return (
      <ReactGridLayout
        {...other}
        // $FlowIgnore should allow nullable here due to DefaultProps
        margin={getIndentationValue(margin, this.state.breakpoint)}
        containerPadding={getIndentationValue(
          containerPadding,
          this.state.breakpoint
        )}
        onLayoutChange={this.onLayoutChange}
        layout={this.state.layout}
        cols={this.state.cols}
      />
    );
  }
}
