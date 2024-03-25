import TextStyle from "../components/ComponentTemplates/BasicComponents/TextComponents/TextStyle.js";

const TitleExport = (component) => {
  let upper = `<h1 style:${TextStyle(component.props)}"> \n
                ${component.props.text}  \n
              `;
  let lower = "</h1> \n";

  return {
    upper,
    lower,
  };
};

export default TitleExport;
