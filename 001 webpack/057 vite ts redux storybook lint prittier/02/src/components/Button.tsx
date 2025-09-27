import { type FC, useEffect, useState } from "react";
import { clsx } from "clsx";
import "./Button.scss";
import { SVG_React_Logo } from "svg/SVG_React_Logo";

interface Props {
  title?: string;
  disabled?: boolean;
  isLoadingAnimation?: boolean;
  size?: "Small" | "Large";
  type?: "Primary" | "Gradient" | "Secondary" | "Outline" | "Text";
  onClick?:
    | ((
        event?: React.MouseEvent<HTMLButtonElement>,
        setSpinner?: (val: boolean) => void,
      ) => void)
    | (() => void);
  icon?: React.ReactNode;
  isArrow?: boolean;
}

export const Button: FC<Props> = ({
  title,
  disabled,
  onClick,
  isLoadingAnimation,
  size = "Small",
  type = "Primary",
  icon,
  isArrow,
}) => {
  const [spinner, setSpinner] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(disabled);


  useEffect(() => {
      if (disabled !== buttonDisabled) {
        setButtonDisabled(disabled);
      }
    }, [buttonDisabled, disabled]);
  
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (!onClick) return;

    if (isLoadingAnimation) {
      (
        onClick as (
          event: React.MouseEvent<HTMLButtonElement>,
          setSpinner: (val: boolean) => void,
        ) => void
      )(event, (val: boolean) => {
        setSpinner(val);
        setButtonDisabled(val);
      });
    } else {
      (onClick as () => void)();
    }
  };

  return (
    <button
      disabled={buttonDisabled}
      className={clsx(
        "component-button",
        size === "Small" ? "component-button-small" : "component-button-large",
        type === "Primary" && "component-button-primary",
        type === "Gradient" && "component-button-gradient",
        type === "Secondary" && "component-button-secondary",
        type === "Outline" && "component-button-outline",
        type === "Text" && "component-button-text",
        spinner && "component-button-spinner",
        buttonDisabled && "component-button-disabled",
        icon && !title && size === "Small" && "component-button-asIconSmall",
        icon && !title && size === "Large" && "component-button-asIconLarge",
      )}
      onClick={handleClick}
    >
      {icon ? <div className="component-button-icon">{icon}</div> : null}
      {title}
      {isArrow ? <SVG_React_Logo height="20px" width="20px" /> : null}
    </button>
  );
};
