Rand = function () {

  this.str = function (length) {

    var text = '',
      i,
      possible = 'abcdefghijklmnopqrstuvwxyz'

    length = length || 10

    for (i = 0; i < length; i = i + 1) {

      text = text + possible.charAt(Math.floor(Math.random() * possible.length))

    }

    return text
  }
  //
  // num: function (max, min) {
  //
  //   max = max || 999999
  //   min = min || 1
  //
  //   return Math.round(Math.random() * (max - min) + min)
  //
  // }
}
