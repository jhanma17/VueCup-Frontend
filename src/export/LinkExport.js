import TextStyle from "../components/ComponentTemplates/BasicComponents/TextComponents/TextStyle.js";
import StyleParser from "./StyleParser.js";

const LinkExport = (component) => {
  const style = StyleParser(TextStyle(component.props));
  const className = component.name + component.id;

  let upper = `<a class="${className}"> \n
                ${component.props.text}  \n
              `;
  let lower = "</a> \n";

  return {
    upper,
    lower,
    classStyle: style,
  };
};

export default LinkExport;
