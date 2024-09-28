export const setDataOnLocalStorage = (name, value) => {
  localStorage.setItem(name, value);
};

export const getDataFromLocalStorage = (name) => {
  return localStorage.getItem(name);
};
