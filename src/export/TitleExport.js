import TextStyle from "../components/ComponentTemplates/BasicComponents/TextComponents/TextStyle.js";
import StyleParser from "./StyleParser.js";

const TitleExport = (component) => {
  const style = StyleParser(TextStyle(component.props));
  const className = component.name + component.id;

  let upper = `<h1 class="${className}"> \n
                ${component.props.text}  \n
              `;
  let lower = "</h1> \n";

  return {
    upper,
    lower,
    classStyle: style,
  };
};

export default TitleExport;
