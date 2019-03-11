# utils
各种小工具大集合

### cookie.js => Cookie

调用方法：

```js
import Cookie from './cookie.js'

// 设置 cookie
Cookie.set(key, value, time)

// 获取 cookie
Cookie.get(key)

// 删除 cookie
Cookie.del(key)
```

### format.js => Format

调用方法：

```js
import Format from './format.js'

// 小于 10 补 0
Format.zeroize(n)
```