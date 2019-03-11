class Format {
  // 小于 10 补 0
  // 必传 n (type: number | string)
  // 返回值 type 为 string
  static zeroize (n) {
    if (typeof n === 'number') {
      return n < 10 ? '0' + n : '' + n
    } else if (typeof n === 'string' && Number(n)) {
      let m = +n
      return m < 10 ? '0' + m : '' + m
    } else {
      return ''
    }
  }
}

export default Format