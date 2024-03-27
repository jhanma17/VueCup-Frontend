import TextStyle from "../components/ComponentTemplates/BasicComponents/TextComponents/TextStyle.js";
import StyleParser from "./StyleParser.js";

const LinkExport = (component) => {
  const style = StyleParser(TextStyle(component.props));

  let upper = `<a :style="${style}"> \n
                ${component.props.text}  \n
              `;
  let lower = "</a> \n";

  return {
    upper,
    lower,
  };
};

export default LinkExport;
