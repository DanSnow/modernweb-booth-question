(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{66:function(t,n,e){"use strict";e.r(n),e.d(n,"start",function(){return s});var r=e(67),o=e(68);function s(t){let n=!1;const e=new r.a(o.length);e.next_question(o.shift()),t.write(e.render());let s="";t.on("data",r=>{if(n)return;if("\b"===r?s=s.slice(0,-1):s+=r,t.write(r),!s.endsWith("\r"))return;const{correct:u,message:i}=e.input(s);if(t.write("\n"+i),s="",u){const r=o.shift();r?(e.next_question(r),t.write(e.render())):(t.write(e.end()),n=!0)}else t.write(e.render())})}},67:function(t,n,e){"use strict";e.d(n,"a",function(){return v}),e.d(n,"c",function(){return k}),e.d(n,"d",function(){return y}),e.d(n,"b",function(){return q}),e.d(n,"e",function(){return J});var r=e(69);const o=new Array(32);o.fill(void 0),o.push(void 0,null,!0,!1);let s=o.length;function u(t){s===o.length&&o.push(o.length+1);const n=s;return s=o[n],o[n]=t,n}let i=null;function c(){return null!==i&&i.buffer===r.j.buffer||(i=new Int32Array(r.j.buffer)),i}let a=new TextDecoder("utf-8"),f=null;function l(){return null!==f&&f.buffer===r.j.buffer||(f=new Uint8Array(r.j.buffer)),f}function w(t,n){return a.decode(l().subarray(t,t+n))}let h,p=0,d=new TextEncoder("utf-8");function g(t){return o[t]}function b(t){const n=g(t);return function(t){t<36||(o[t]=s,s=t)}(t),n}h="function"==typeof d.encodeInto?function(t){let n=t.length,e=r.c(n),o=0;{const n=l();for(;o<t.length;o++){const r=t.charCodeAt(o);if(r>127)break;n[e+o]=r}}if(o!==t.length){t=t.slice(o),e=r.d(e,n,n=o+3*t.length);const s=l().subarray(e+o,e+n);o+=d.encodeInto(t,s).written}return p=o,e}:function(t){let n=t.length,e=r.c(n),o=0;{const n=l();for(;o<t.length;o++){const r=t.charCodeAt(o);if(r>127)break;n[e+o]=r}}if(o!==t.length){const s=d.encode(t.slice(o));e=r.d(e,n,n=o+s.length),l().set(s,e+o),o+=s.length}return p=o,e};class v{static __wrap(t){const n=Object.create(v.prototype);return n.ptr=t,n}free(){const t=this.ptr;this.ptr=0,r.a(t)}constructor(t){const n=r.g(t);return v.__wrap(n)}next_question(t){r.h(this.ptr,u(t))}render(){r.i(8,this.ptr);const t=c(),n=w(t[2],t[3]).slice();return r.b(t[2],1*t[3]),n}input(t){return b(r.f(this.ptr,h(t),p))}end(){r.e(8,this.ptr);const t=c(),n=w(t[2],t[3]).slice();return r.b(t[2],1*t[3]),n}}const k=function(t,n){const e=JSON.stringify(g(n)),r=h(e),o=p;c()[t/4+0]=r,c()[t/4+1]=o},y=function(t){b(t)},q=function(t,n){return u(JSON.parse(w(t,n)))},J=function(t,n){throw new Error(w(t,n))}},68:function(t){t.exports=JSON.parse('[{"question":"Rust 1.0 在哪一年釋出？\\r\\n1. 2012 年 2. 2013 年 3. 2014 年 4. 2015 年","answer":"4"},{"question":"Rust.tw 的聚會時間在什麼時候？\\r\\n1. 每個月的最後一個星期六晚上七點半 2. 每個月的最後一個星期六晚上八點半 3. 每個月的最後一個星期六晚上九點半 4. 每個月的最後一個星期六晚上十點半","answer":"1"},{"question":"以 Rust 開發的瀏覽器引擎叫什麼名字？\\r\\n1. Doge 2. Servo 3. Gecko 4. Wow","answer":"2"},{"question":"2016年stackoverflow most loved language 是？\\r\\n1. Rust 2. Python 3. JavaScript 4. Kotlin 5. php","answer":"1"},{"question":"2017年stackoverflow most loved language 是？\\r\\n1. Python 2. Rust 3. JavaScript 4. Kotlin 5. php","answer":"2"},{"question":"2018年stackoverflow most loved language 是？\\r\\n1. JavaScript 2. Python 3. Rust 4. Kotlin 5. php","answer":"3"},{"question":"2019年stackoverflow most loved language 是？\\r\\n1. Kotlin 2. Python 3. JavaScript 4. Rust 5. php","answer":"4"},{"question":"Facebook 用 Rust 開發的區塊鏈數位貨幣叫做？\\r\\n1. LibreOffice 2. Doge 3. Libra 4. Facebook Coin","answer":"3"}]')},69:function(t,n,e){"use strict";var r=e.w[t.i];t.exports=r;e(67);r.k()}}]);