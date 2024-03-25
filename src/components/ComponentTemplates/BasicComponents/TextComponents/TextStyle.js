const textStyle = (props) => {
  return {
    fontFamily: props.fontFamily,
    fontSize: props.size + "px",
    color: props.color,
    ...formattedFontStyle(props),
    marginTop: props.marginTop + "px",
    marginBottom: props.marginBottom + "px",
    marginRight: props.marginRight + "px",
    marginLeft: props.marginLeft + "px",
    paddingTop: props.paddingTop + "px",
    paddingBottom: props.paddingBottom + "px",
    paddingRight: props.paddingRight + "px",
    paddingLeft: props.paddingLeft + "px",
  };
};

const formattedFontStyle = (props) => {
  //separate the font style into fontStyle and fontWeight
  let fontStyle = props.fontStyle || "normal";
  let fontWeight = "normal";
  if (fontStyle.includes("Bold")) {
    fontWeight = "bold";
  }
  if (fontStyle.includes("Italic")) {
    fontStyle = "italic";
  }
  return {
    fontStyle: fontStyle,
    fontWeight: fontWeight,
  };
};

export default textStyle;
