import TextStyle from "../components/ComponentTemplates/BasicComponents/TextComponents/TextStyle.js";
import StyleParser from "./StyleParser.js";

const BodyExport = (component) => {
  const style = StyleParser(TextStyle(component.props, true));
  const className = component.name + component.id;

  let upper = `<span class="${className}"> \n
                ${component.props.text}  \n
              `;
  let lower = "</span> \n";

  return {
    upper,
    lower,
    classStyle: style,
  };
};

export default BodyExport;
