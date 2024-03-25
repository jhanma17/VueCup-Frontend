import OrderedListStyle from "../components/ComponentTemplates/BasicComponents/ListComponents/OrderedListStyle";
import StyleParser from "./StyleParser";

const OrderedListExport = (component) => {
  const style = StyleParser(OrderedListStyle(component.props));

  let upper = `<ol style:${style}"> \n`;
  let lower = "</ol> \n";

  return {
    upper,
    lower,
  };
};

export default OrderedListExport;
