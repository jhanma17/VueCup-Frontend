const borderStyle = (props, toExport = false) => {
  let borderWidth = props.borderWidth;
  let borderRadius = props.borderRadius;

  if (toExport) {
    borderWidth = borderWidth * 5;
    borderRadius = borderRadius * 5;
  }

  const borderTop = props.borderTop
    ? props.borderWidth + "px " + props.borderStyle + " " + props.borderColor
    : "none";

  const borderBottom = props.borderBottom
    ? props.borderWidth + "px " + props.borderStyle + " " + props.borderColor
    : "none";

  const borderLeft = props.borderLeft
    ? props.borderWidth + "px " + props.borderStyle + " " + props.borderColor
    : "none";

  const borderRight = props.borderRight
    ? props.borderWidth + "px " + props.borderStyle + " " + props.borderColor
    : "none";

  return {
    borderWidth: props.borderWidth + "px",
    borderColor: props.borderColor,
    borderStyle: props.borderStyle,
    borderRadius: props.borderRadius + "px",
    borderTop: borderTop,
    borderBottom: borderBottom,
    borderLeft: borderLeft,
    borderRight: borderRight,
  };
};

export default borderStyle;
