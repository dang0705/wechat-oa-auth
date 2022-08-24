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
: getOpenid(code) /*your custom function to get openid*/
```

| prop         | type   | desc                                          | default                           |
| ------------ | ------ | --------------------------------------------- | --------------------------------- |
| appid        | String | your appid                                    |                                   |
| redirect_uri | String | your redirect_uri                             | encodeURIComponent(location.href) |
| scope        | String | scop type<br/> snsapi_userinfo or snsapi_base | snsapi_userinfo                   |
