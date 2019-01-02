export const createSelectOptions = (data = []) => {
  return data.map((item) => {
    return { value: item, label: item };
  });
};

export const splitMultiOptionLimit = (data) => {
  return data.split(',').map((item) => {
    return item.trim();
  }).filter((item) => item);
};

export const optionLimit = (data, limit) => {
  if(limit) {
    return data.slice(0, limit);
  } else {
    return data;
  }
};
