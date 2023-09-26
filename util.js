const isEmpty = (obj) => {
  return (
    obj === undefined ||
    obj === null ||
    obj.toString().replace(/\s/g, '') === ''
  );
};

const getCurrentUrl = (withoutTicket = true) => {
  let url = window.location.href;
  if (withoutTicket) {
    return url.replace(/(^|[&?])ticket(=[^&]*)?/, '');
  }
  return url;
};

const getParamFromCurrentUrl = (param) => {
  return new URL(window.location.href).searchParams.get(param);
};

const isParamExistsInUrl = (url, param) => {
  const value = new URL(url).searchParams.get(param);
  return value !== null;
};

export {
  isEmpty,
  getCurrentUrl,
  getParamFromCurrentUrl,
  isParamExistsInUrl,
};

