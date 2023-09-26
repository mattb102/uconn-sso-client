const buildUrl = require('build-url');
const util = require('./util');

const getLoginUrl = (cas) => {
  let baseUrl = _getCasBaseUrl(cas);

  let queryParams = !util.isParamExistsInUrl(cas.redirectUrl, 'status')
    ? {
        service: buildUrl(cas.redirectUrl, {
          queryParams: { status: 'in_process' },
        }),
      }
    : {
        service: buildUrl(cas.redirectUrl),
      };
  return buildUrl(baseUrl, {
    path: 'login',
    queryParams: queryParams,
  })
};

const getValidateUrl = (cas, ticket) => {
  let baseUrl = _getCasBaseUrl(cas);
  let queryParams = {
    service: cas.redirectUrl,
    ticket: ticket,
  };

  let path = 'serviceValidate'; 

  return buildUrl(baseUrl, {
    path: path,
    queryParams: queryParams,
  });
};

const _getCasBaseUrl = (cas) => {
    return 'https://' + cas.endpoint + cas.path;
};

export { getLoginUrl, getValidateUrl };

