export const addToLocalStore = (user) => {
  localStorage.setItem('user', JSON.stringify(user));
};

export const getLocalStorage = () => {
  return localStorage.getItem('user')
    ? JSON.parse(localStorage.getItem('user'))
    : null;
};

export const removeFromLocalStorage = () => {
  localStorage.removeItem('user');
};
