import ImageStyle from "../components/ComponentTemplates/BasicComponents/ImageComponents/ImageStyle";
import StyleParser from "./StyleParser";

const ImageExport = (component) => {
  const style = StyleParser(ImageStyle(component.props, true));

  let upper = `<img src="${component.props.src}" :style="${style}"/> \n`;
  let lower = "";

  return {
    upper,
    lower,
  };
};

export default ImageExport;
