(this["webpackJsonp426-final"]=this["webpackJsonp426-final"]||[]).push([[0],{21:function(e,t,n){},22:function(e,t,n){},43:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),o=n(16),s=n.n(o),l=(n(21),n(2)),r=(n(22),n(4)),i=n.n(r),d=n(5),u=n(6),m=n.n(u);var b=function(e){for(var t=e+"=",n=decodeURIComponent(document.cookie).split(";"),c=0;c<n.length;c++){for(var a=n[c];" "==a.charAt(0);)a=a.substring(1);if(0==a.indexOf(t))return a.substring(t.length,a.length)}return document.cookie="".concat(e,"=block"),"block"},f=n(0);var p=function(){var e,t,n,a=Object(c.useState)(""),o=Object(l.a)(a,2),s=(o[0],o[1]),r=Object(c.useState)(null),u=Object(l.a)(r,2),p=u[0],j=u[1],y=Object(c.useState)(null),h=Object(l.a)(y,2),g=(h[0],h[1]),O=Object(c.useState)(null),w=Object(l.a)(O,2),k=(w[0],w[1]),v=Object(c.useState)(null),x=Object(l.a)(v,2),E=(x[0],x[1]),I=Object(c.useState)(null),B=Object(l.a)(I,2),S=(B[0],B[1]),C=Object(c.useState)(null),_=Object(l.a)(C,2),N=_[0],D=_[1],T=Object(c.useState)("imperial"),z=Object(l.a)(T,2),A=z[0],P=z[1],R=Object(c.useState)(null),F=Object(l.a)(R,2),H=F[0],L=F[1],M=Object(c.useState)(null),U=Object(l.a)(M,2),J=U[0],W=U[1],Y=Object(c.useState)(0),V=Object(l.a)(Y,2),X=(V[0],V[1],Object(c.useState)(null)),Z=Object(l.a)(X,2),q=Z[0],G=Z[1],K="cf0cdab436e7a78c55ebf2423ebb5eab";function Q(e){if(null!=e){for(var t=e.split(" "),n=0;n<t.length;n++)t[n]=t[n][0].toUpperCase()+t[n].substr(1);return t.join(" ")}}function $(e){if(null!=e)return e.toString().split(".")[0]+"&#176"}function ee(e){if(new Date<q)switch(e){case"Clear":return"fa-sun";case"Clouds":return"fa-cloud-sun";case"Drizzle":return"fa-cloud-sun-rain";case"Rain":return"fa-cloud-showers-heavy";case"Thunderstorm":return"fa-bolt";case"Snow":return"fa-snowflake"}else switch(e){case"Clear":return"fa-moon";case"Clouds":return"fa-cloud-moon";case"Drizzle":return"fa-cloud-moon-rain";case"Rain":return"fa-cloud-showers-heavy";case"Thunderstorm":return"fa-bolt";case"Snow":return"fa-snowflake"}}function te(){return(te=Object(d.a)(i.a.mark((function c(){return i.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:if(!(null!=e&null!=t)){c.next=12;break}return c.prev=1,document.getElementById("loader").style.display="block",c.next=5,m.a.get("https://api.openweathermap.org/data/2.5/weather?lat=".concat(e,"&lon=").concat(t,"&appid=").concat(K,"&units=").concat(A)).then((function(e){j(e),E((n=e).data.main.temp_min),n.data.main.temp_min,S(n.data.main.temp_max),n.data.main.temp_max,D(n.data.main.temp),n.data.main.temp,L(n.data.weather[0].main),n.data.weather[0].main,W(n.data.weather[0].description),n.data.weather[0].description,G(new Date(1e3*n.data.sys.sunset))}));case 5:document.getElementById("loader").style.display="none",c.next=12;break;case 8:c.prev=8,c.t0=c.catch(1),document.getElementById("loader").style.display="none",console.log(c.t0);case 12:case"end":return c.stop()}}),c,null,[[1,8]])})))).apply(this,arguments)}function ne(n){g(n.coords.latitude),k(n.coords.longitude),e=n.coords.latitude,t=n.coords.longitude,null!=e&null!=t?(s("Your location is ".concat(e,", ").concat(t)),null==p&&function(){te.apply(this,arguments)}()):ae()}function ce(){s("Please allow use of location or enter zip code to see weather."),console.log("Please allow use of location or enter zip code to see weather.")}function ae(){navigator.geolocation?navigator.geolocation.getCurrentPosition(ne,ce):s("Your browser doesn't support geolocation, please enter city or zipcode.")}return b("weather"),Object(c.useEffect)((function(){document.getElementById("weatherBox").innerHTML='\n        <div id="weatherImage">\n        <i class="fa '.concat(ee(H),'"></i>\n        <div class="temp">').concat($(N),'</div>\n        </div>\n        <div class="weatherInfo">\n        <div>').concat(Q(J),"</div>\n        </div>"),null!=H&&(document.getElementById("weatherBox").style.display="flex"),ae(),document.getElementById("weather").style.display=b("weather")})),document.getElementById("hide_weather").onclick=function(){"block"==document.getElementById("weather").style.display?(document.cookie="weather=none",document.getElementById("weather").style.display="none",document.getElementById("toggle_temp").style.display="none",document.getElementById("toggle_temp").setAttribute("data-shown","hidden")):(document.cookie="weather=block",document.getElementById("weather").style.display="block",document.getElementById("toggle_temp").style.display="block",document.getElementById("toggle_temp").setAttribute("data-shown","shown"))},document.getElementById("toggle_temp").onclick=function(){"imperial"==A?(P("metric"),D(5*(N-32)/9)):(P("imperial"),D(9*N/5+32))},Object(f.jsx)("div",{children:Object(f.jsxs)("div",{id:"weatherBox",style:{display:"none"},children:[Object(f.jsxs)("div",{id:"weatherImage",children:[Object(f.jsx)("i",{className:"fa ".concat(ee(H))}),Object(f.jsx)("div",{className:"temp",children:$(N)})]}),Object(f.jsx)("div",{className:"weatherInfo",children:Object(f.jsx)("div",{children:Q(J)})})]})})};var j=function(){return Object(f.jsx)("div",{id:"loader",className:"center",children:Object(f.jsx)("i",{className:"fa fa-spin fa-spinner fa-5x"})})};var y,h,g,O=function(){var e=new Date,t=Object(c.useState)("".concat(e.getHours()%12,":").concat(e.getMinutes())),n=Object(l.a)(t,2),a=n[0],o=n[1];return b("clock"),document.getElementById("hide_clock").onclick=function(){"block"==document.getElementById("clock").style.display?(document.cookie="clock=none",document.getElementById("clock").style.display="none"):(document.cookie="clock=block",document.getElementById("clock").style.display="block")},Object(c.useEffect)((function(){var t=e.getMinutes();1==t.toString().length&&(t="0".concat(t));var n=e.getHours();n>12&&(n-=12),o("".concat(n,":").concat(t)),document.getElementById("clock").style.display=b("clock")})),Object(f.jsx)("div",{id:"time",children:a})};var w=function(){var e="2R53iX0gPy4uF4HNx8VhyTJ6yNZ9dCT3",t=("https://api.nytimes.com/svc/topstories/v2/us.json?api-key=".concat(e),Object(c.useState)(0)),n=Object(l.a)(t,2),a=n[0],o=n[1],s=Object(c.useState)(null),r=Object(l.a)(s,2),u=r[0],p=r[1],j=Object(c.useState)(null),O=Object(l.a)(j,2),w=O[0],k=O[1],v=Object(c.useState)(null),x=Object(l.a)(v,2),E=x[0],I=x[1],B=null;function S(){return C.apply(this,arguments)}function C(){return(C=Object(d.a)(i.a.mark((function t(){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(null!=y||null!=B){t.next=10;break}return t.prev=1,t.next=4,m.a.get("https://api.nytimes.com/svc/topstories/v2/us.json?api-key=".concat(e)).then((function(e){y=e.data.results.map((function(e){return e.title})),h=e.data.results.map((function(e){return e.url})),g=e.data.results.map((function(e){return e.abstract})),B=e.data.results.map((function(e){return e.title})),p(e.data.results[0].title),k(e.data.results[0].url),I(e.data.results[0].abstract)}));case 4:t.next=10;break;case 6:t.prev=6,t.t0=t.catch(1),console.log("error"),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[1,6]])})))).apply(this,arguments)}return window.addEventListener("load",S,{once:!0}),document.getElementById("hide_news").onclick=function(){"block"==document.getElementById("news").style.display?(document.cookie="news=none",document.getElementById("news").style.display="none"):(document.cookie="news=block",document.getElementById("news").style.display="block")},Object(c.useEffect)((function(){S(),setTimeout((function(){var e=function(e){return e+1===y.length?(o(0),0):(o(e+1),e+1)}(a);p(y[e]),k(h[e]),I(g[e])}),3e4),document.getElementById("news").style.display=b("news")})),Object(f.jsxs)("div",{id:"news",children:[Object(f.jsx)("h1",{id:"title",children:Object(f.jsx)("a",{href:"".concat(w),target:"_blank",children:u})}),Object(f.jsx)("h4",{id:"abstract",children:E})]})};var k=function(){var e=new Date,t=e.getDay();function n(e){switch(e){case 0:return"sunday";case 1:return"monday";case 2:return"tuesday";case 3:return"wednesday";case 4:return"thursday";case 5:return"friday";case 6:return"saturday"}}return Object(c.useEffect)((function(){document.getElementById("week").style.display=function(e){for(var t=e+"=",n=decodeURIComponent(document.cookie).split(";"),c=0;c<n.length;c++){for(var a=n[c];" "==a.charAt(0);)a=a.substring(1);if(0==a.indexOf(t))return a.substring(t.length,a.length)}return document.cookie="week=flex","flex"}("week")})),document.getElementById("hide_week").onclick=function(){"flex"==document.getElementById("week").style.display?(document.cookie="week=none",document.getElementById("week").style.display="none"):(document.cookie="week=flex",document.getElementById("week").style.display="flex")},Object(f.jsx)("div",{id:"week",children:function(){for(var c,a=[],o=0,s=e.getDate(),l=t;-1!=l;l=(c=l)+1>6?0==t?-1:0:c+1==t?-1:c+1){var r=n(l);a.push(Object(f.jsxs)("div",{id:"".concat(r),className:"weekday",children:[Object(f.jsxs)("div",{className:"dateWeekday",children:[Object(f.jsx)("div",{className:"dateDay",children:s+o}),Object(f.jsx)("div",{className:"weekDayTitle",children:r.charAt(0).toUpperCase()+r.slice(1)})]}),Object(f.jsx)("div",{className:"weekEvents"})]},r)),o++}return a}()})},v=["./images/1.jpg","./images/2.jpg","./images/3.jpg","./images/4.jpg"];v.forEach((function(e){var t=document.createElement("link");t.rel="preload",t.href=e,t.as="image",document.head.appendChild(t)}));var x=function(){var e=Object(c.useState)(0),t=Object(l.a)(e,2),n=t[0],a=t[1];return Object(c.useEffect)((function(){setTimeout((function(){var e;a((e=n)+1===v.length?0:e+1)}),6e4)})),document.body.style.backgroundImage="url(".concat(v[n],")"),document.body.style.backgroundRepeat="no-repeat",document.body.style.backgroundSize="cover",Object(f.jsxs)("div",{id:"App",className:"App",children:[Object(f.jsxs)("div",{id:"clockWeather",children:[Object(f.jsx)("div",{id:"clock",children:Object(f.jsx)(O,{})}),Object(f.jsxs)("div",{id:"weather",children:[Object(f.jsx)(j,{}),Object(f.jsx)(p,{})]})]}),Object(f.jsx)(w,{}),Object(f.jsx)(k,{})]})},E=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,44)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,o=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),o(e),s(e)}))};s.a.render(Object(f.jsx)(a.a.StrictMode,{children:Object(f.jsx)(x,{})}),document.getElementById("root")),E()}},[[43,1,2]]]);
//# sourceMappingURL=main.ee642475.chunk.js.map