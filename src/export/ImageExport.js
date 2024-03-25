import ImageStyle from "../components/ComponentTemplates/BasicComponents/ImageComponents/ImageStyle";

const ImageExport = (component) => {
  let upper = `<img :src="${component.props.src}" style:${ImageStyle(
    component.props
  )}"/> \n`;
  let lower = "";

  return {
    upper,
    lower,
  };
};

export default ImageExport;
