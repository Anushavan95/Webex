export function isStringJson(data) {
  try {
    JSON.parse(data);
  } catch (err) {
    return false;
  }
  return true;
}

export function setInStorage(key, data, type = "local") {
  let forStorage =
    typeof data === "object" || Array.isArray(data)
      ? JSON.stringify(data)
      : data;

  if (type.toLowerCase() === "local") {
    window.localStorage.setItem(key, forStorage);
  } else {
    window.sessionStorage.setItem(key, forStorage);
  }
}

export function getOfStorage(key, type = "local") {
  if (type.toLowerCase() === "local") {
    if (isStringJson(window.localStorage.getItem(key))) {
      return JSON.parse(window.localStorage.getItem(key));
    }

    return window.localStorage.getItem(key);
  }

  if (isStringJson(window.sessionStorage.getItem(key))) {
    return JSON.parse(window.sessionStorage.getItem(key));
  }

  return window.sessionStorage.getItem(key);
}

export default {
  isStringJson: isStringJson,
  setInStorage: setInStorage,
  getOfStorage: getOfStorage,
};
