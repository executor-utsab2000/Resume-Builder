export default function setNestedObject(obj, path, value) {
  const keys = path.replace(/\]/g, "").split("[");
  let current = obj;

  keys.forEach((key, index) => {
    if (index === keys.length - 1) {
      current[key] = value;
    } else {
      if (!current[key]) {
        current[key] = isNaN(keys[index + 1]) ? {} : [];
      }
      current = current[key];
    }
  });
}
