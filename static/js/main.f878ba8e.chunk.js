(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{103:function(e,t,a){e.exports={Container:"TextField_Container__1CrSF"}},105:function(e,t,a){e.exports={Container:"Button_Container__3lL_e"}},107:function(e,t,a){e.exports={Container:"ResultScreen_Container__111sF"}},108:function(e,t,a){e.exports={Container:"OtherInfo_Container__qaHr8"}},109:function(e,t,a){e.exports=a(282)},114:function(e,t,a){},22:function(e,t,a){e.exports={Container:"MainInfo_Container__1zQjB",Icon:"MainInfo_Icon__1Z1Uf",weatherBox:"MainInfo_weatherBox__19Wwe",WeatherTitle:"MainInfo_WeatherTitle__2Gh4T",Temperature:"MainInfo_Temperature__1JZUB",MainTemperature:"MainInfo_MainTemperature__GO7Qj"}},281:function(e,t,a){},282:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(21),c=a.n(o),i=(a(114),a(56)),s=a.n(i),l=a(61),u=a(100),m=a(15),h=a(16),p=a(18),f=a(17),d=a(19),b=a(57),v=a.n(b),w=a(34),O=a.n(w),_=a(102),j=a.n(_),g=a(58),C=a.n(g),y=function(e){function t(){return Object(m.a)(this,t),Object(p.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return r.a.createElement("section",{className:C.a.Container},r.a.createElement(O.a,{disabled:!0,className:C.a.Input,value:this.props.location,inputProps:{"aria-label":"Location"}}),r.a.createElement(j.a,null))}}]),t}(n.Component),E=a(40),x=a(5),S=a.n(x),N=a(104),T=a.n(N),I=a(103),k=a.n(I),L=function(e){function t(){return Object(m.a)(this,t),Object(p.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this.props,t=(e.className,Object(E.a)(e,["className"]));return r.a.createElement("div",{className:S()(k.a.Container,this.props.className)},r.a.createElement(T.a,Object.assign({fullWidth:!0},t)))}}]),t}(n.Component),B=a(106),M=a.n(B),W=a(105),A=a.n(W),P=function(e){function t(){return Object(m.a)(this,t),Object(p.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this.props,t=(e.className,e.children),a=Object(E.a)(e,["className","children"]);return r.a.createElement("div",{className:S()(A.a.Container,this.props.className)},r.a.createElement(M.a,Object.assign({color:"primary",variant:"contained"},a),t))}}]),t}(n.Component),F=a(59),H=a.n(F),R=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(p.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).state={text:""},a.handleOnChange=function(e){a.setState({text:e.target.value})},a.onSubmit=function(){a.props.onSubmit(a.state.text)},a}return Object(d.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this.state.text;return r.a.createElement("main",{className:H.a.Container},r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement(L,{autoFocus:!0,className:H.a.TextField,id:"LocationInput",label:"Location",placeholder:"Location",value:e,onChange:this.handleOnChange,inputProps:{"aria-label":"Search Box"}}),r.a.createElement(P,{type:"submit",onClick:this.onSubmit},"Search")))}}]),t}(n.Component),D=a(24),U=a.n(D),J=a(107),Q=a.n(J),q=(a(280),a(41)),G=a.n(q);U.a.locale("pt-br");var V=function(e){function t(){return Object(m.a)(this,t),Object(p.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this.props.location;return r.a.createElement("section",{className:G.a.Container},r.a.createElement("h1",{className:G.a.Header},"".concat(e.name,", ").concat(e.country)),r.a.createElement("h4",{className:G.a.Subtitle},U()().format("LLLL")))}}]),t}(n.Component),Z=a(60),z=a.n(Z),K=(a(281),a(22)),$=a.n(K),X=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(a=Object(p.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(o)))).setIcon=function(){var e=a.props.weatherId,t="wi wi-owm-".concat(e);return r.a.createElement("i",{className:S()(t,$.a.Icon)})},a.formatTemperature=function(e){return e.toFixed(0).toString().substr(0,2)+"\xbaC"},a}return Object(d.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this.props,t=e.weather,a=e.temp,n=e.tempMin,o=e.tempMax;return r.a.createElement("section",{className:$.a.Container},r.a.createElement("div",{className:$.a.weatherBox},"M\xednima",r.a.createElement("h4",{className:$.a.Temperature},this.formatTemperature(n))),r.a.createElement("div",{className:$.a.weatherBox},this.setIcon(),r.a.createElement("h4",{className:S()($.a.Temperature,$.a.MainTemperature)},this.formatTemperature(a)),r.a.createElement("h4",{className:$.a.WeatherTitle},z.a.startCase(z.a.toLower(t)))),r.a.createElement("div",{className:$.a.weatherBox},"M\xe1xima",r.a.createElement("h4",{className:$.a.Temperature},this.formatTemperature(o))))}}]),t}(n.Component),Y=a(108),ee=a.n(Y),te=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(p.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).formatTime=function(e){return U()(new Date(1e3*e)).format("LT")},a}return Object(d.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this.props,t=e.humidity,a=e.sunrise,n=e.sunset;return r.a.createElement("section",{className:ee.a.Container},r.a.createElement("h4",null,"Umidade: ",t,"%"),r.a.createElement("h4",null,"Nascer do Sol: ",this.formatTime(a)),r.a.createElement("h4",null,"P\xf4r do Sol: ",this.formatTime(n)))}}]),t}(n.Component);U.a.locale("pt-BR");var ae=function(e){function t(){return Object(m.a)(this,t),Object(p.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this.props.data;return r.a.createElement("main",{className:Q.a.Container},r.a.createElement(V,{location:{name:e.name,country:e.city.country}}),r.a.createElement(X,{weatherId:e.weather[0].id,weather:e.list[0].weather[0].description,temp:e.main.temp,tempMax:e.main.temp_max,tempMin:e.main.temp_min}),r.a.createElement("hr",null),r.a.createElement(te,{humidity:e.main.humidity,sunrise:e.sys.sunrise,sunset:e.sys.sunset}))}}]),t}(n.Component),ne="https://api.openweathermap.org/data/2.5",re="638a471aca7521703a926ad9c4c08eec",oe=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(p.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).state={location:void 0,loading:!1,weatherData:void 0},a.locationSubmit=function(){var e=Object(u.a)(s.a.mark(function e(t){var n,r;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.setState({location:t,loading:!0});case 2:return e.prev=2,e.next=5,v.a.get("".concat(ne,"/weather?q=").concat(t,"&APPID=").concat(re));case 5:return n=e.sent.data,e.next=8,v.a.get("".concat(ne,"/forecast?id=").concat(n.id,"&APPID=").concat(re,"&lang=pt"));case 8:r=e.sent.data,console.log("Response from Open Weather: ",Object(l.a)({},n,r)),a.setState({weatherData:Object(l.a)({},n,r),loading:!1}),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(2),a.setState({loading:!1});case 16:case"end":return e.stop()}},e,this,[[2,13]])}));return function(t){return e.apply(this,arguments)}}(),a}return Object(d.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this.state,t=e.location,a=e.loading,n=e.weatherData;return n?r.a.createElement(ae,{data:n}):a&&t?r.a.createElement(y,{location:t}):r.a.createElement(R,{onSubmit:this.locationSubmit})}}]),t}(n.Component),ce=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function ie(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}c.a.render(r.a.createElement(oe,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/weather-app",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/weather-app","/service-worker.js");ce?(function(e,t){fetch(e).then(function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):ie(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):ie(t,e)})}}()},41:function(e,t,a){e.exports={Container:"HeaderInfo_Container__2iQKx",Header:"HeaderInfo_Header__2V_Li",Subtitle:"HeaderInfo_Subtitle__3uIty"}},58:function(e,t,a){e.exports={Container:"LoadingScreen_Container__R1Vjg",Input:"LoadingScreen_Input__2HBTl"}},59:function(e,t,a){e.exports={Container:"SearchScreen_Container__1aeni",TextField:"SearchScreen_TextField__3gl3c",Button:"SearchScreen_Button__1l5ET"}}},[[109,1,2]]]);
//# sourceMappingURL=main.f878ba8e.chunk.js.map