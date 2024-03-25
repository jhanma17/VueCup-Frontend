import TextStyle from "../components/ComponentTemplates/BasicComponents/TextComponents/TextStyle.js";

const TitleExport = (body) => {
  let upper = `<h1 style:${TextStyle(body.props)}"> \n
                ${body.props.text}  \n
              `;
  let lower = "</h1> \n";

  return {
    upper,
    lower,
  };
};

export default TitleExport;
