import TextStyle from "../components/ComponentTemplates/BasicComponents/TextComponents/TextStyle.js";
import StyleParser from "./StyleParser.js";

const ParagraphExport = (component) => {
  const style = StyleParser(TextStyle(component.props));

  let upper = `<p :style="${style}"> \n
                ${component.props.text}  \n
              `;
  let lower = "</p> \n";

  return {
    upper,
    lower,
  };
};

export default ParagraphExport;
