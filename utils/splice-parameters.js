export default (params) => {
  if (!Object.keys(params).length) return "";
  let url = "";
  for (const key in params) {
    url += `&${key}=${params[key]}`;
  }
  return url.replace(/^&/, "?");
};
