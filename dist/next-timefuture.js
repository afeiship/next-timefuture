(function () {

  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('next-js-core2');
  var pad = function (inValue) {
    var value = inValue.toString()
    return value[1] ? value : '0' + value;
  };

  nx.timefuture = function (inValue, inNow) {
    if (inValue) {
      var now = inNow ? new Date(inNow) : new Date();
      var publish = (new Date(String(inValue).replace(/-/g, '/')));
      var dayTs = 24 * 60 * 60 * 1000;
      var nowTs = now.getTime();
      var publishTs = publish.getTime();
      var isToday = publish.getDate() == now.getDate();
      var isTomorrow = (new Date(nowTs + dayTs)).getDate() == publish.getDate();
      var isAfterTomorrow = (new Date(nowTs + dayTs * 2)).getDate() == publish.getDate();
      var isMonth = publish.getMonth() == now.getMonth();
      var isYear = publish.getYear() == now.getYear();
      var diff_s = (publishTs - nowTs) / 1000;
      var diff_m = diff_s / 60;
      var diff_h = diff_m / 60;
      var hours_minutes = pad(publish.getHours()) + ':' + pad(publish.getMinutes());

      switch (true) {
        case diff_s > 0 && diff_s < 60 * 5:
          return pad(Math.floor(diff_s / 60)) + '分' + pad(parseInt(diff_s) % 60) + '秒后';
        case diff_s >= 5 * 60 && isToday:
          return '今天' + hours_minutes;
        case isTomorrow:
          return '明天' + hours_minutes;
        case isAfterTomorrow:
          return '后天' + hours_minutes;
        case isYear:
          return pad(publish.getMonth() + 1) + '-' + pad(publish.getDate()) + ' ' + hours_minutes;
        default:
          return inValue.slice(0, 10);
      }
    }
    return inValue;
  };


  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.timefuture;
  }

}());
