import React from "react";
import PropTypes from "prop-types";

const shapes = {
  CircleBorder24: "rounded-radius24",
  RoundedBorder8: "rounded-radius8",
};
const variants = {
  FillYellow900: "bg-yellow_900 text-white_A700",
  OutlineGray301:
    "bg-white_A700 border border-gray_301 border-solid shadow-bs text-gray_900",
};
const sizes = {
  sm: "lg:p-[11px] xl:p-[13px] p-[14px] 3xl:p-[17px]",
  md: "lg:p-[14px] xl:p-[16px] p-[18px] 3xl:p-[22px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant,
  size,
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${shapes[shape] || ""} ${
        variants[variant] || ""
      } ${sizes[size] || ""} common-button `}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["CircleBorder24", "RoundedBorder8"]),
  variant: PropTypes.oneOf(["FillYellow900", "OutlineGray301"]),
  size: PropTypes.oneOf(["sm", "md"]),
};
Button.defaultProps = {
  className: "",
  shape: "CircleBorder24",
  variant: "FillYellow900",
  size: "sm",
};

export { Button };
