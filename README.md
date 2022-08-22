方便前端小伙伴开发微信公众号业务，获取code

usage:

import {code,getCode} from 'wechat-oauth-by-frontend'

getCode({
    appid:'your appid',
    redirect_uri:'your redirect_uri',
    scope:'wechat scope type "snsapi_userinfo / snsapi_base"'
})
