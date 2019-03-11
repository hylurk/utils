class Cookie {
  // 获取 cookie
  // 必传：key
  static get (key) {
    if (!key) return
    const reg = new RegExp('(^| )' + key + '=([^;]*)(;|$)')
    let arr = document.cookie.match(reg)
    if (arr && arr.length) {
      return unescape(arr[2])
    } else {
      return null
    }
  }
  // 设置 cookie
  // 必传：key, value
  // 可选：time
  static set (key, value, time) {
    if (!key) return
    value = value || ''
    if (time && Number(time)) {
      let expires = Number(time) * 24 * 60 * 60 * 1000
      let date = new Date(+new Date() + expires)
      document.cookie = key + '=' + escape(value) + ';expires=' + date.toUTCString()
    } else {
      document.cookie = key + '=' + escape(value)
    }
  }
  // 删除 cookie
  // 必传：key
  static del (key) {
    this.set(key, ' ', -1)
  }
}

export default Cookie
