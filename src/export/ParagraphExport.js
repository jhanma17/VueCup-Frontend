import TextStyle from "../components/ComponentTemplates/BasicComponents/TextComponents/TextStyle.js";

const ParagraphExport = (body) => {
  let upper = `<p style:${TextStyle(body.props)}"> \n
                ${body.props.text}  \n
              `;
  let lower = "</p> \n";

  return {
    upper,
    lower,
  };
};

export default ParagraphExport;
