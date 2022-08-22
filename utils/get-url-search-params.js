let [, search] = location.search.split("?");
const urlParams = URLSearchParams ? new URLSearchParams(search) : null;
const paramsObj = {};
export default (params) => {
  if (params) {
    const getParams = (params) =>
      urlParams
        ? urlParams.has(params)
          ? urlParams.get(params)
          : null
        : ((params) => {
            const reg = new RegExp("(^|&)" + params + "=([^&]*)(&|$)");
            const r = search.match(reg);
            if (r != null) return unescape(r[2]);
            return null;
          })(params);

    const iterateParams = (params) => {
      params.forEach(
        (param) => (paramsObj[param] = decodeURIComponent(getParams(param)))
      );
      return paramsObj;
    };
    return Array.isArray(params) ? iterateParams(params) : getParams(params);
  } else {
    search.split("&").forEach((param) => {
      const [key, value] = param.split("=");
      paramsObj[key] = decodeURIComponent(value);
    });
    return paramsObj;
  }
};
