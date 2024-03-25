import TextStyle from "../components/ComponentTemplates/BasicComponents/TextComponents/TextStyle.js";
import StyleParser from "./StyleParser.js";

const BodyExport = (component) => {
  const style = StyleParser(TextStyle(component.props));

  let upper = `<span style:${style}"> \n
                ${component.props.text}  \n
              `;
  let lower = "</span> \n";

  return {
    upper,
    lower,
  };
};

export default BodyExport;
