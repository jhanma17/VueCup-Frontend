import ContainerStyle from "../components/ComponentTemplates/BasicComponents/ContainerComponents/ContainerStyle";

const ContainerExport = (component) => {
  let upper = `<div style:${ContainerStyle(component.props)}"> \n`;
  let lower = "</div> \n";

  return {
    upper,
    lower,
  };
};

export default ContainerExport;
