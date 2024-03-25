import ContainerStyle from "../components/ComponentTemplates/BasicComponents/ContainerComponents/ContainerStyle";

const ContainerExport = (container) => {
  let upper = `<div style:${ContainerStyle(container.props)}"> \n`;
  let lower = "</div> \n";

  return {
    upper,
    lower,
  };
};

export default ContainerExport;
