export function getFromStorage(key) {
  if (!key) {
    return null;
  }
  try {
    const valueStr = localStorage.getItem(key);
    if (valueStr) {
      console.log(valueStr);
      return JSON.parse(valueStr);
    }
    return null;
  } catch (err) {
    return null;
  }
}
export function setInStorage(key, obj) {
  if (!key) {
    console.error("Key missing:error");
  }
  try {
    localStorage.setItem(key, JSON.stringify(obj));
  } catch (err) {
    console.err(err);
  }
}
