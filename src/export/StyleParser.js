const objectToText = (obj) => {
  let text = "{";
  let keys = Object.keys(obj);

  for (let i = 0; i < keys.length; i++) {
    //if find a capital letter, replace it with a lowercase letter and add a dash before it
    let formattedKey = keys[i].replace(/([A-Z])/g, "-$1").toLowerCase();

    text += formattedKey + ": " + obj[keys[i]];
    if (i < keys.length - 1) {
      text += "; \n";
    }
  }

  text += "}";
  console.log(text);
  return text;
};

export default objectToText;
