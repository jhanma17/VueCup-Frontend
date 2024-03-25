import TextStyle from "../components/ComponentTemplates/BasicComponents/TextComponents/TextStyle.js";

const BodyExport = (component) => {
  let upper = `<span style:${TextStyle(component.props)}"> \n
                ${component.props.text}  \n
              `;
  let lower = "</span> \n";

  return {
    upper,
    lower,
  };
};

export default BodyExport;
