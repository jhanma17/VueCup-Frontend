import TextStyle from "../components/ComponentTemplates/BasicComponents/TextComponents/TextStyle.js";

const LinkExport = (body) => {
  let upper = `<a style:${TextStyle(body.props)}"> \n
                ${body.props.text}  \n
              `;
  let lower = "</a> \n";

  return {
    upper,
    lower,
  };
};

export default LinkExport;
