import UnorderedListStyle from "../components/ComponentTemplates/BasicComponents/ListComponents/UnorderedListStyle";

const UnorderedListExport = (component) => {
  let upper = `<ol style:${UnorderedListStyle(component.props)}"> \n`;
  let lower = "</ol> \n";

  return {
    upper,
    lower,
  };
};

export default UnorderedListExport;
