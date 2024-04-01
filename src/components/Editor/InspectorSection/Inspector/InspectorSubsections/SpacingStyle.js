const spacingStyle = (props, toExport = false) => {
  let marginTop = props.marginTop;
  let marginBottom = props.marginBottom;
  let marginRight = props.marginRight;
  let marginLeft = props.marginLeft;
  let paddingTop = props.paddingTop;
  let paddingBottom = props.paddingBottom;
  let paddingRight = props.paddingRight;
  let paddingLeft = props.paddingLeft;

  if (toExport) {
    marginTop = marginTop * 5;
    marginBottom = marginBottom * 5;
    marginRight = marginRight * 5;
    marginLeft = marginLeft * 5;
    paddingTop = paddingTop * 5;
    paddingBottom = paddingBottom * 5;
    paddingRight = paddingRight * 5;
    paddingLeft = paddingLeft * 5;
  }

  return {
    marginTop: marginTop + "px",
    marginBottom: marginBottom + "px",
    marginRight: marginRight + "px",
    marginLeft: marginLeft + "px",
    paddingTop: paddingTop + "px",
    paddingBottom: paddingBottom + "px",
    paddingRight: paddingRight + "px",
    paddingLeft: paddingLeft + "px",
  };
};

export default spacingStyle;
