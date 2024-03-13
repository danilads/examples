import React, { useEffect, useRef, useCallback } from "react";
import Resizer from "column-resizer";

export const Ex01 = ({ resizable = true }) => {
  const tableRef = useRef(null);
  const resizerRef = useRef(null);

  const enableResize = useCallback(() => {
    if (!resizerRef.current) {
      resizerRef.current = new Resizer(tableRef.current, { disable: false });
    } else {
      resizerRef.current.reset({ disable: false });
    }
  }, []);

  const disableResize = useCallback(() => {
    if (resizerRef.current) {
      resizerRef.current.reset({ disable: true });
    }
  }, []);

  useEffect(() => {
    if (resizable) {
      enableResize();
    }

    return () => {
      if (resizable) {
        disableResize();
      }
    };
  }, [resizable, enableResize, disableResize]);

  return (
    <table ref={tableRef} cellSpacing="0">
      <thead>
        <tr>
          <th rowspan="1">Column-1</th>
          <th rowSpan="2">Column-2</th>
          <th rowSpan="2">Column-3</th>
          <th rowSpan="2">Column-4</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>C1</td>
          <td>C2</td>
          <td>C3</td>
          <td>C4</td>
        </tr>
        <tr>
          <td>D1</td>
          <td>D2</td>
          <td>D3</td>
          <td>D4</td>
        </tr>
        <tr>
          <td>E1</td>
          <td>E2</td>
          <td>E3</td>
          <td>E4</td>
        </tr>
      </tbody>
    </table>
  );
};
