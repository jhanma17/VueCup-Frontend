const imageStyle = (props, toExport = false) => {
  let width = props.width;
  let height = props.height;
  if (props.widthMode == "%" && !toExport) {
    width = 100;
  }
  if (props.heightMode == "%" && !toExport) {
    height = 100;
  }
  if (props.widthMode == "vw" && !toExport) {
    width = 384 * ((width * 5) / 100);
  }
  if (props.heightMode == "vh" && !toExport) {
    height = 216 * ((height * 5) / 100);
  }
  return {
    width:
      props.widthMode == "auto"
        ? "auto"
        : width +
          (props.widthMode === "vw" && !toExport ? "px" : props.widthMode),
    height:
      props.heightMode == "auto"
        ? "auto"
        : height +
          (props.heightMode === "vh" && !toExport ? "px" : props.heightMode),
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
