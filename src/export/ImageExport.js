import ImageStyle from "../components/ComponentTemplates/BasicComponents/ImageComponents/ImageStyle";

const ImageExport = (image) => {
  let upper = `<img :src="${image.props.src}" style:${ImageStyle(
    image.props
  )}"/> \n`;
  let lower = "";

  return {
    upper,
    lower,
  };
};

export default ImageExport;
