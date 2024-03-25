import TextStyle from "../components/ComponentTemplates/BasicComponents/TextComponents/TextStyle.js";

const ParagraphExport = (component) => {
  let upper = `<p style:${TextStyle(component.props)}"> \n
                ${component.props.text}  \n
              `;
  let lower = "</p> \n";

  return {
    upper,
    lower,
  };
};

export default ParagraphExport;
