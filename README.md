方便前端小伙伴开发微信公众号业务，获取 code

## 使用:

import {code,getCode} from 'wechat-oauth-by-frontend'

getCode({</br>
appid:'your appid',</br>
redirect_uri:'your redirect_uri',</br>
scope:'wechat scope type "snsapi_userinfo / snsapi_base"'</br>
})
