import BackgroundStyle from "../../../Editor/InspectorSection/Inspector/InspectorSubsections/BackgroundStyle";
import BorderStyle from "../../../Editor/InspectorSection/Inspector/InspectorSubsections/BorderStyle";
import SizingStyle from "../../../Editor/InspectorSection/Inspector/InspectorSubsections/SizingStyle";
import SpacingStyle from "../../../Editor/InspectorSection/Inspector/InspectorSubsections/SpacingStyle";

const containerStyle = (props, toExport = false) => {
  return {
    ...SizingStyle(props, toExport),
    ...SpacingStyle(props, toExport),
    ...BackgroundStyle(props, toExport),
    ...BorderStyle(props, toExport),
  };
};

export default containerStyle;
