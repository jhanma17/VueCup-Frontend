const backgroundStyle = (props, toExport = false) => {
  return {
    backgroundColor: props.backgroundColor,
    backgroundImage: `url(${props.backgroundImage})`,
  };
};

export default backgroundStyle;
