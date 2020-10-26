export const addToLocalStorage = (key, value, hoursToExpiry = 1) => {
  const expiry = new Date();
  expiry.setHours(expiry.getHours() + hoursToExpiry);

  /* Add the item to localStorage with an expiry time */
  localStorage.setItem(
    key,
    JSON.stringify({ value, expiry: expiry.getTime() })
  );
};

export const getFromLocalStorage = (key) => {
  const itemRetrieved = JSON.parse(localStorage.getItem(key));

  /* If the item was found in localStorage and it has not expired yet, return the value */
  if (itemRetrieved) {
    const date = new Date();
    if (date.getTime() <= itemRetrieved.expiry) {
      return itemRetrieved.value;
    } else {
      localStorage.removeItem(key);
    }
  }

  return null;
};
