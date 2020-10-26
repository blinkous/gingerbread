export const addToLocalStorage = (key, value, hoursToExpiry = 1) => {
  let expiry = new Date();

  if (typeof hoursToExpiry === "number") {
    expiry.setHours(expiry.getHours() + hoursToExpiry);
    expiry = expiry.getTime();
  } else {
    expiry = null;
  }

  /* Add the item to localStorage with an expiry time */
  localStorage.setItem(key, JSON.stringify({ value, expiry }));
};

export const getFromLocalStorage = (key) => {
  const itemRetrieved = JSON.parse(localStorage.getItem(key));

  /* If the item was found in localStorage and it has not expired yet, return the value */
  if (itemRetrieved) {
    return itemRetrieved.value; /* TESTING-ONLY */
    const date = new Date();
    if (
      itemRetrieved.expiry === null ||
      date.getTime() <= itemRetrieved.expiry
    ) {
      return itemRetrieved.value;
    } else {
      localStorage.removeItem(key);
    }
  }

  return null;
};
