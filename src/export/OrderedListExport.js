import OrderedListStyle from "../components/ComponentTemplates/BasicComponents/ListComponents/OrderedListStyle";
import StyleParser from "./StyleParser";

const OrderedListExport = (component) => {
  const style = StyleParser(OrderedListStyle(component.props));
  const className = component.name + component.id;

  let upper = `<ol class="${className}"> \n`;
  let lower = "</ol> \n";

  return {
    upper,
    lower,
    classStyle: style,
  };
};

export default OrderedListExport;
