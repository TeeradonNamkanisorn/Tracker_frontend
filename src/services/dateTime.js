const formattedInputDateTime = (enUsDateTime) => {
  const splitted = enUsDateTime.split(", ");
  const dates = splitted[0];
  const datesSplitted = dates.split("/");
  const year = datesSplitted[2];
  const month = datesSplitted[1];
  const day = datesSplitted[0];

  const times = splitted[1];
  const timesSplitted = times.split(":");
  const hour = timesSplitted[0];
  const minute = timesSplitted[1];

  return `${year}-${month}-${day}T${hour}:${minute}`;
};

export { formattedInputDateTime };
