(function () {

  var global = global || this || self || window;
  var nx = global.nx || require('next-js-core2');

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

      switch (true) {
        case diff_s > 0 && diff_s < 60 * 5:
          return Math.floor(diff_s / 60) + '分' + parseInt(diff_s) % 60 + '秒后';
        case diff_s >= 5 * 60 && isToday:
          return '今天' + publish.getHours() + ':' + publish.getMinutes();
        case isTomorrow:
          return '明天' + publish.getHours() + ':' + publish.getMinutes();
        case isAfterTomorrow:
          return '后天' + publish.getHours() + ':' + publish.getMinutes();
        case isYear:
          return (publish.getMonth() + 1) + '-' + publish.getDate();
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