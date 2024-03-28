import TextStyle from "../../../Editor/InspectorSection/Inspector/InspectorSubsections/TextStyle";
import SpacingStyle from "../../../Editor/InspectorSection/Inspector/InspectorSubsections/SpacingStyle";

const textStyle = (props, toExport) => {
  return {
    ...TextStyle(props, toExport),
    ...SpacingStyle(props, toExport),
  };
};

export default textStyle;
