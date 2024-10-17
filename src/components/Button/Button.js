import "./Button.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Button({
  to,
  href,
  primary = false,
  white = false,
  black = false,
  outline = false,
  small = false,
  medium = false,
  large = false,
  enormous = false,
  full = false,
  children,
  className = "",
  leftIcon,
  rightIcon,
  onClick,
  ...passProps
}) {
  let Comp = "button";
  const props = {
    onClick,
    ...passProps,
  };

  if (href) {
    props.href = href;
    Comp = "a";
  }

  const classes = [
    "button",
    className,
    primary ? "button--primary" : "",
    white ? "button--white" : "",
    black ? "button--black" : "",
    outline ? "button--outline" : "",
    small ? "button--small" : "",
    medium ? "button--medium" : "",
    large ? "button--large" : "",
    enormous ? "button--enormous" : "",
    full ? "button--full" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <Comp className={classes} {...props}>
      {leftIcon && (
        <span className="icon">
          <FontAwesomeIcon icon={rightIcon} />
        </span>
      )}
      <span className="title">{children}</span>
      {rightIcon && (
        <span className="icon">
          <FontAwesomeIcon icon={rightIcon} />
        </span>
      )}
    </Comp>
  );
}

export default Button;
