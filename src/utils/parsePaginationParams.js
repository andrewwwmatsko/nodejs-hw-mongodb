const parseInterger = (value, defaultValue) => {
  if (typeof value !== 'string') return defaultValue;

  if (Number.isNaN(parseInt(value))) return defaultValue;

  return parseInt(value);
};

export const parsePaginationParams = ({ page, perPage }) => {
  const parsedPage = parseInterger(page, 1);
  const parsedPerPage = parseInterger(perPage, 10);

  return {
    page: parsedPage,
    perPage: parsedPerPage,
  };
};
