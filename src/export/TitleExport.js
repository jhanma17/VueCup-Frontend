import TextStyle from "../components/ComponentTemplates/BasicComponents/TextComponents/TextStyle.js";
import StyleParser from "./StyleParser.js";

const TitleExport = (component) => {
  const style = StyleParser(TextStyle(component.props));

  let upper = `<h1 :style="${style}"> \n
                ${component.props.text}  \n
              `;
  let lower = "</h1> \n";

  return {
    upper,
    lower,
  };
};

export default TitleExport;
