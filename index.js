import getUrlSearchParams from './utils/get-url-search-params';
export const code = getUrlSearchParams('code') || '';
const state = getUrlSearchParams('state') || '';

export async function getCode({
  appid,
  redirect_uri = encodeURIComponent(location.href),
  scope = 'snsapi_userinfo'
}) {
  const { default: spliceParameters } = await import(
    './utils/splice-parameters'
  );
  const wechatAuthUrl = 'https://open.weixin.qq.com/connect/oauth2/authorize';

  const authConfigs = {
    appid,
    redirect_uri,
    response_type: 'code',
    scope,
    state
  };
  location.href =
    wechatAuthUrl + spliceParameters(authConfigs) + '#wechat_redirect';
}
