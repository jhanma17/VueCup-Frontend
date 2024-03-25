import TextStyle from "../components/ComponentTemplates/BasicComponents/TextComponents/TextStyle.js";

const BodyExport = (body) => {
  let upper = `<span style:${TextStyle(body.props)}"> \n
                ${body.props.text}  \n
              `;
  let lower = "</span> \n";

  return {
    upper,
    lower,
  };
};

export default BodyExport;
