import ImageStyle from "../components/ComponentTemplates/BasicComponents/ImageComponents/ImageStyle";
import StyleParser from "./StyleParser";

const ImageExport = (component) => {
  const style = StyleParser(ImageStyle(component.props, true));
  const className = component.name + component.id;

  let upper = `<img src="${component.props.src}" class="${className}"/> \n`;
  let lower = "";

  return {
    upper,
    lower,
    classStyle: style,
  };
};

export default ImageExport;
