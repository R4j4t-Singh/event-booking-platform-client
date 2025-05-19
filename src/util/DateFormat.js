const dateFormat = (timestamp) => {
  const date = new Date(timestamp);
  return date.toDateString() + " " + date.toLocaleTimeString();
};

export { dateFormat };
