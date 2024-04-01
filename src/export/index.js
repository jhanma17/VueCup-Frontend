import RootExport from "./RootExport";
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

  let styleToExport = "<style> \n";

  //recursive function to traverse the component tree

  const traverseComponentTree = (component) => {
    const { upper, lower, classStyle } = GetComponentExport(component);

    textToExport += upper;

    const className = component.name + component.id;

    if (component.type != "RootTemplate") {
      styleToExport += `.${className} \n ${classStyle} \n `;
    }

    if (component.children && component.children.length > 0) {
      component.children.forEach((child) => {
        traverseComponentTree(child);
      });
    }

    textToExport += lower;
  };

  traverseComponentTree(componentTree[0]);

  styleToExport += "</style> \n";

  DownloadFile(textToExport + styleToExport);
};

const GetComponentExport = (component) => {
  //prevents unused imports
  const imports = {
    RootExport,
    BodyExport,
    LinkExport,
    TitleExport,
    ParagraphExport,
    ContainerExport,
    ImageExport,
    OrderedListExport,
    UnorderedListExport,
  };

  //removes Template from the componentType
  const rawType = component.type.replace("Template", "");

  const exportFunction = `${rawType}Export`;

  const exportData = imports[exportFunction](component);

  return {
    upper: exportData.upper,
    lower: exportData.lower,
    classStyle: exportData.classStyle,
  };
};

const DownloadFile = async (textToExport) => {
  const file = new Blob([textToExport], { type: "text/plain" });

  const supportsFileSystemAccess =
    "showSaveFilePicker" in window &&
    (() => {
      try {
        return window.self === window.top;
      } catch {
        return false;
      }
    })();
  if (supportsFileSystemAccess) {
    try {
      const handle = await showSaveFilePicker({
        suggestedName: "exportedCode.vue",
        types: [
          {
            accept: { "text/plain": [".vue"] },
          },
        ],
      });

      const writable = await handle.createWritable();
      await writable.write(file);
      await writable.close();
    } catch (err) {
      if (err.name !== "AbortError") {
        console.error(err.name, err.message);
        return;
      }
    }
  } else {
    const element = document.createElement("a");
    element.href = URL.createObjectURL(file);
    element.download = "exportedCode.vue";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  }
};

export default ExportData;
