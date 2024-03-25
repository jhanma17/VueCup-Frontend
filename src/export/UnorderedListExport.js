import UnorderedListStyle from "../components/ComponentTemplates/BasicComponents/ListComponents/UnorderedListStyle";

const UnorderedListExport = (orderedList) => {
  let upper = `<ol style:${UnorderedListStyle(orderedList.props)}"> \n`;
  let lower = "</ol> \n";

  return {
    upper,
    lower,
  };
};

export default UnorderedListExport;
