import OrderedListStyle from "../components/ComponentTemplates/BasicComponents/ListComponents/OrderedListStyle";

const OrderedListExport = (orderedList) => {
  let upper = `<ol style:${OrderedListStyle(orderedList.props)}"> \n`;
  let lower = "</ol> \n";

  return {
    upper,
    lower,
  };
};

export default OrderedListExport;
