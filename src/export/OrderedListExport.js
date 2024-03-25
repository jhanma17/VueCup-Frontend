import OrderedListStyle from "../components/ComponentTemplates/BasicComponents/ListComponents/OrderedListStyle";

const OrderedListExport = (component) => {
  let upper = `<ol style:${OrderedListStyle(component.props)}"> \n`;
  let lower = "</ol> \n";

  return {
    upper,
    lower,
  };
};

export default OrderedListExport;
