import ContainerStyle from "../components/ComponentTemplates/BasicComponents/ContainerComponents/ContainerStyle";
import StyleParser from "./StyleParser";

const ContainerExport = (component) => {
  const style = StyleParser(ContainerStyle(component.props, true));
  const className = component.name + component.id;

  let upper = `<div class="${className}"> \n`;
  let lower = "</div> \n";

  return {
    upper,
    lower,
    classStyle: style,
  };
};

export default ContainerExport;
