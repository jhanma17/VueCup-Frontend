import UnorderedListStyle from "../components/ComponentTemplates/BasicComponents/ListComponents/UnorderedListStyle";
import StyleParser from "./StyleParser";

const UnorderedListExport = (component) => {
  const style = StyleParser(UnorderedListStyle(component.props));
  const className = component.name + component.id;

  let upper = `<ol class="${className}"> \n`;
  let lower = "</ol> \n";

  return {
    upper,
    lower,
    classStyle: style,
  };
};

export default UnorderedListExport;
