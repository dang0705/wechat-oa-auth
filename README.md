方便前端小伙伴开发微信公众号业务，获取 code

## 使用:

```
import {code,getCode} from 'wechat-oauth-by-frontend'

!code
? getCode({
appid:'your appid',
redirect_uri:'your redirect_uri',
scope:'wechat scope type "snsapi_userinfo / snsapi_base"'
})
: getOpenid(code) /*your custom function 2 get openid*/
```
