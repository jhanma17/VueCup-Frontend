import UnorderedListStyle from "../components/ComponentTemplates/BasicComponents/ListComponents/UnorderedListStyle";
import StyleParser from "./StyleParser";

const UnorderedListExport = (component) => {
  const style = StyleParser(UnorderedListStyle(component.props));

  let upper = `<ol style:${style}"> \n`;
  let lower = "</ol> \n";

  return {
    upper,
    lower,
  };
};

export default UnorderedListExport;
