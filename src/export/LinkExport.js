import TextStyle from "../components/ComponentTemplates/BasicComponents/TextComponents/TextStyle.js";

const LinkExport = (component) => {
  let upper = `<a style:${TextStyle(component.props)}"> \n
                ${component.props.text}  \n
              `;
  let lower = "</a> \n";

  return {
    upper,
    lower,
  };
};

export default LinkExport;
