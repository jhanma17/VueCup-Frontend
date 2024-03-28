const textStyle = (props, toExport = false) => {
  let fontSize = props.size;

  if (toExport) {
    fontSize = fontSize * 5;
  }

  return {
    fontFamily: props.fontFamily,
    fontSize: props.size + "px",
    color: props.color,
    ...formattedFontStyle(props),
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
