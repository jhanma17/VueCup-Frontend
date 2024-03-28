const objectToText = (obj) => {
  let text = "{";
  let keys = Object.keys(obj);

  for (let i = 0; i < keys.length; i++) {
    text += keys[i] + ": '" + obj[keys[i]] + "'";
    if (i < keys.length - 1) {
      text += ", ";
    }
  }

  text += "}";
  return text;
};

export default objectToText;
