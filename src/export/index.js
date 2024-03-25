import RootExport from "./rootExport";
import BodyExport from "./BodyExport";
import LinkExport from "./LinkExport";
import TitleExport from "./TitleExport";
import ParagraphExport from "./ParagraphExport";
import ContainerExport from "./ContainerExport";
import ImageExport from "./ImageExport";
import OrderedListExport from "./OrderedListExport";
import UnorderedListExport from "./UnorderedListExport";

const ExportData = (componentTree) => {
  let textToExport = "";

  //recursive function to traverse the component tree

  const traverseComponentTree = (component) => {
    const { upper, lower } = GetComponentExport(component);

    textToExport += upper;

    if (component.children) {
      component.children.forEach((child) => {
        traverseComponentTree(child);
      });
    }

    textToExport += lower;
  };

  traverseComponentTree(componentTree);

  DownloadFile(textToExport);
};

const GetComponentExport = (component) => {
  //removes Template from the componentType
  const rawType = component.type.replace("Template", "");

  const exportFunction = `${rawType}Export`;

  const exportData = eval(exportFunction)(component);

  return { upper: exportData.upper, lower: exportData.lower };
};

const DownloadFile = (textToExport) => {
  const element = document.createElement("a");
  const file = new Blob([textToExport], { type: "text/plain" });
  element.href = URL.createObjectURL(file);
  element.download = "exportedCode.vue";
  document.body.appendChild(element);
  element.click();
};

export default ExportData;
