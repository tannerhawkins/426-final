(this["webpackJsonp426-final"]=this["webpackJsonp426-final"]||[]).push([[0],{445:function(e,t,n){"use strict";(function(e){var o=n(8),c=n(23),a=n(471),i=n(475).google,r=["https://www.googleapis.com/auth/calendar.readonly"],s="token.json";function l(e){i.calendar({version:"v3",auth:e}).events.list({calendarId:"primary",timeMin:(new Date).toISOString(),maxResults:10,singleEvents:!0,orderBy:"startTime"},(function(e,t){if(e)return console.log("The API returned an error: "+e);var n=t.data.items;n.length?(console.log("Upcoming 10 events:"),n.map((function(e,t){var n=e.start.dateTime||e.start.date;console.log("".concat(n," - ").concat(e.summary))}))):console.log("No upcoming events found.")}))}c.readFile("credentials.json",(function(t,n){if(t)return console.log("Error loading client secret file:",t);console.log(JSON.parse(n)),function(t,n){var o=t.web.client_secret,l=t.web.client_id,u=t.web.redirect_uris,d=new i.auth.OAuth2(l,o,u[0]);c.readFile(s,(function(t,o){if(t)return function(t,n){var o=t.generateAuthUrl({access_type:"offline",scope:r});console.log("Authorize this app by visiting this url:",o);var i=a.createInterface({input:e.stdin,output:e.stdout});i.question("Enter the code from that page here: ",(function(e){i.close(),t.getToken(e,(function(e,o){if(e)return console.error("Error retrieving access token",e);t.setCredentials(o),c.writeFile(s,JSON.stringify(o),(function(e){if(e)return console.error(e);console.log("Token stored to",s)})),n(t)}))}))}(d,n);d.setCredentials(JSON.parse(o)),n(d)}))}(JSON.parse(n),l)})),t.a=function(){return Object(o.jsx)("div",{children:Object(o.jsx)("button",{onClick:"authorize"})})}}).call(this,n(9))},450:function(e,t,n){},451:function(e,t,n){},487:function(e,t){},489:function(e,t){},515:function(e,t){},517:function(e,t){},537:function(e,t){},539:function(e,t){},567:function(e,t){},569:function(e,t){},570:function(e,t){},575:function(e,t){},577:function(e,t){},596:function(e,t){},608:function(e,t){},611:function(e,t){},811:function(e,t,n){"use strict";n.r(t);var o=n(10),c=n.n(o),a=n(444),i=n.n(a),r=(n(450),n(13)),s=(n(451),n(12)),l=n.n(s),u=n(62),d=n(63),f=n.n(d),j=n(8);var b=function(){var e,t,n,c=Object(o.useState)(""),a=Object(r.a)(c,2),i=a[0],s=a[1],d=Object(o.useState)(null),b=Object(r.a)(d,2),p=b[0],g=b[1],h=Object(o.useState)(null),m=Object(r.a)(h,2),O=(m[0],m[1]),v=Object(o.useState)(null),w=Object(r.a)(v,2),x=(w[0],w[1]),y=Object(o.useState)(null),S=Object(r.a)(y,2),k=(S[0],S[1]),E=Object(o.useState)(null),I=Object(r.a)(E,2),N=(I[0],I[1]),T=Object(o.useState)(null),B=Object(r.a)(T,2),C=B[0],F=B[1],_=Object(o.useState)("imperial"),J=Object(r.a)(_,2),P=J[0],z=(J[1],Object(o.useState)(null)),A=Object(r.a)(z,2),L=A[0],M=A[1],D=Object(o.useState)(null),H=Object(r.a)(D,2),R=H[0],U=H[1],Y=Object(o.useState)(0),q=Object(r.a)(Y,2),V=q[0],X=q[1],Z="cf0cdab436e7a78c55ebf2423ebb5eab";function G(){return(G=Object(u.a)(l.a.mark((function o(){return l.a.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:if(!(null!=e&null!=t)){o.next=12;break}return o.prev=1,document.getElementById("loader").style.visibility="visible",o.next=5,f.a.get("https://api.openweathermap.org/data/2.5/weather?lat=".concat(e,"&lon=").concat(t,"&appid=").concat(Z,"&units=").concat(P)).then((function(e){g(e),k((n=e).data.main.temp_min),n.data.main.temp_min,N(n.data.main.temp_max),n.data.main.temp_max,F(n.data.main.temp),n.data.main.temp,M(n.data.weather[0].main),n.data.weather[0].main,U(n.data.weather[0].description),n.data.weather[0].description}));case 5:document.getElementById("loader").style.visibility="hidden",o.next=12;break;case 8:o.prev=8,o.t0=o.catch(1),document.getElementById("loader").style.visibility="hidden",console.log(o.t0);case 12:case"end":return o.stop()}}),o,null,[[1,8]])})))).apply(this,arguments)}function K(n){O(n.coords.latitude),x(n.coords.longitude),e=n.coords.latitude,t=n.coords.longitude,null!=e&null!=t?(s("Your location is ".concat(e,", ").concat(t)),null==p&&function(){G.apply(this,arguments)}()):W()}function Q(){s("Please allow use of location or enter zip code to see weather."),console.log("Please allow use of location or enter zip code to see weather.")}function W(){navigator.geolocation?(console.log("getting"),navigator.geolocation.getCurrentPosition(K,Q)):s("Your browser doesn't support geolocation, please enter city or zipcode.")}return 0===V&&(window.addEventListener("load",W,{once:!0}),X(1)),Object(o.useEffect)((function(){document.getElementById("location").innerText=i})),Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{className:"title",id:"location"}),Object(j.jsxs)("div",{id:"weatherBox",children:[Object(j.jsx)("div",{id:"weatherImage"}),Object(j.jsx)("div",{children:C}),Object(j.jsx)("div",{children:L}),Object(j.jsx)("div",{children:R})]})]})};var p=function(){return Object(j.jsx)("div",{id:"loader",className:"loader center",children:Object(j.jsx)("i",{className:"fa fa-spinner fa-spin fa-5x"})})};var g=function(){var e=new Date,t=Object(o.useState)("".concat(e.getHours()%12,":").concat(e.getMinutes())),n=Object(r.a)(t,2),c=n[0],a=n[1];return Object(o.useEffect)((function(){var t=e.getMinutes();1==t.toString().length&&(t="0".concat(t)),a("".concat(e.getHours()%12,":").concat(t))})),Object(j.jsx)("div",{id:"time",children:c})};var h=function(){var e="2R53iX0gPy4uF4HNx8VhyTJ6yNZ9dCT3",t=("https://api.nytimes.com/svc/topstories/v2/us.json?api-key=".concat(e),Object(o.useState)(null)),n=Object(r.a)(t,2),c=n[0],a=n[1],i=null;function s(){return(s=Object(u.a)(l.a.mark((function t(){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(null!=c||null!=i){t.next=10;break}return t.prev=1,t.next=4,f.a.get("https://api.nytimes.com/svc/topstories/v2/us.json?api-key=".concat(e)).then((function(e){a(e),i=e}));case 4:t.next=10;break;case 6:t.prev=6,t.t0=t.catch(1),console.log("error"),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[1,6]])})))).apply(this,arguments)}return window.addEventListener("load",(function(){return s.apply(this,arguments)}),{once:!0}),Object(j.jsx)("div",{id:"news"})},m=n(445),O=["./images/1.jpg","./images/2.jpg","./images/3.jpg","./images/4.jpg"];var v=function(){var e=Object(o.useState)(0),t=Object(r.a)(e,2),n=t[0],c=t[1];return setTimeout((function(){var e;c((e=n)+1===O.length?0:e+1)}),1e4),console.log(window.location.href),Object(j.jsxs)("div",{className:"App",style:{backgroundImage:"url(".concat(O[n],")"),backgroundRepeat:"no-repeat",backgroundSize:"cover"},children:[Object(j.jsx)(b,{}),Object(j.jsx)(p,{}),Object(j.jsx)(g,{}),Object(j.jsx)(h,{}),Object(j.jsx)(m.a,{})]})},w=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,812)).then((function(t){var n=t.getCLS,o=t.getFID,c=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),o(e),c(e),a(e),i(e)}))};i.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(v,{})}),document.getElementById("root")),w()},99:function(e,t){}},[[811,1,2]]]);
//# sourceMappingURL=main.9b44165d.chunk.js.map