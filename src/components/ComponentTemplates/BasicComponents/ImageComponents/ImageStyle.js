import ImageStyle from "../../../Editor/InspectorSection/Inspector/InspectorSubsections/ImageStyle";
import SizingStyle from "../../../Editor/InspectorSection/Inspector/InspectorSubsections/SizingStyle";
import SpacingStyle from "../../../Editor/InspectorSection/Inspector/InspectorSubsections/SpacingStyle";

const imageStyle = (props, toExport = false) => {
  return {
    ...SizingStyle(props, toExport),
    ...ImageStyle(props),
    ...SpacingStyle(props, toExport),
  };
};

export default imageStyle;
