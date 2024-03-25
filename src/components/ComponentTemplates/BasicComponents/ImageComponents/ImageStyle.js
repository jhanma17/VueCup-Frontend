const imageStyle = (props) => {
  let width = props.width;
  let height = props.height;
  if (props.widthMode == "%") {
    width = 100;
  }
  if (props.heightMode == "%") {
    height = 100;
  }
  if (props.widthMode == "vw") {
    width = 384 * ((width * 5) / 100);
  }
  if (props.heightMode == "vh") {
    height = 216 * ((height * 5) / 100);
  }
  return {
    width:
      props.widthMode == "auto"
        ? "auto"
        : width + (props.widthMode === "vw" ? "px" : props.widthMode),
    height:
      props.heightMode == "auto"
        ? "auto"
        : height + (props.heightMode === "vh" ? "px" : props.heightMode),
    display: props.display,
    position: props.position,
    top: props.top + "px",
    left: props.left + "px",
    right: props.right + "px",
    bottom: props.bottom + "px",
    flexDirection: props.flexDirection,
    justifyContent: props.justifyContent,
    alignItems: props.alignItems,
    flexGrow: props.grow,
    flexShrink: props.shrink,
    objectFit: props.fitMode.toLowerCase(),
    objectRepeat: props.repeatMode.toLowerCase(),
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

export default imageStyle;
