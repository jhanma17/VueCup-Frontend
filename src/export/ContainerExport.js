import ContainerStyle from "../components/ComponentTemplates/BasicComponents/ContainerComponents/ContainerStyle";
import StyleParser from "./StyleParser";

const ContainerExport = (component) => {
  const style = StyleParser(ContainerStyle(component.props, true));

  let upper = `<div :style="${style}"> \n`;
  let lower = "</div> \n";

  return {
    upper,
    lower,
  };
};

export default ContainerExport;
