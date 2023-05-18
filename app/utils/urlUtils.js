import qs from "query-string";

export const oldAppendQueryParams = (url, paramsObj) => {
  let newUrl;
  const paramsArr = [];
  Object.keys(paramsObj).forEach((key) => {
    if (Array.isArray(paramsObj[key])) {
      paramsObj[key].forEach((paramsVal) => {
        paramsArr.push(`${key}[]=${paramsVal}`);
      });
    } else {
      paramsArr.push(`${key}=${paramsObj[key]}`);
    }
  });
  newUrl = `${url}?${paramsArr.join("&")}`;
  return newUrl;
};

export const parseQueryParams = (url, options = {}) =>
  qs.parse(url.toString(), { ...options });

export const appendQueryParams = (
  url,
  queryParams,
  queryOptions = {},
  options = {}
) =>
  qs.stringifyUrl(
    {
      url: url,
      query: queryParams,
      ...(queryOptions && queryOptions),
    },
    { ...options }
  );
