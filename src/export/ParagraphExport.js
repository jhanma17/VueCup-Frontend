import TextStyle from "../components/ComponentTemplates/BasicComponents/TextComponents/TextStyle.js";
import StyleParser from "./StyleParser.js";

const ParagraphExport = (component) => {
  const style = StyleParser(TextStyle(component.props, true));
  const className = component.name + component.id;

  let upper = `<p class="${className}"> \n
                ${component.props.text}  \n
              `;
  let lower = "</p> \n";

  return {
    upper,
    lower,
    classStyle: style,
  };
};

export default ParagraphExport;
