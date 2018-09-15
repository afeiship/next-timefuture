# next-timefuture
> Time future for next

## install:
```bash
npm install -S afeiship/next-timefuture --registry=https://registry.npm.taobao.org
```

## usage:
```js
var nxTimefuture = require('next-timefuture');
var str = nxTimefuture('2017-03-15 13:10:45');
console.log(str);
```



## rules:
+ https://github.com/hezhaoyun/zhenbao/wiki/Friendly-Time-Showing

```conf
将来	5分钟内	M分S秒后
今天	今天HH:MM
明天	明天HH:MM
后天	后天HH:MM
今年	mm-ddd HH:MM
更晚	YYYY-mm-dd
```


## resouces:
+ https://www.cnblogs.com/moqiutao/p/4875946.html
