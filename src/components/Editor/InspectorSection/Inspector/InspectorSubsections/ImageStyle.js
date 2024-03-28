const imageStyle = (props, toExport = false) => {
  return {
    objectFit: props.fitMode.toLowerCase(),
  };
};

export default imageStyle;
