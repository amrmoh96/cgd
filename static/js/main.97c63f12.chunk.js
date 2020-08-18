(this.webpackJsonpchd=this.webpackJsonpchd||[]).push([[0],{18:function(e,t,a){e.exports=a(35)},23:function(e,t,a){},24:function(e,t,a){},25:function(e,t,a){},26:function(e,t,a){},27:function(e,t,a){},35:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(15),l=a.n(o),i=(a(23),a(7));a(24),a(25);var c=function(e){var t=e.user,a=e.onLogin,n=e.onPasswordChange,o=e.onUsernameChange,l=e.isWaiting;return r.a.createElement("div",{className:"login"},r.a.createElement("h1",{className:"login__title"},"LOGIN"),r.a.createElement("div",{className:"login__box"},r.a.createElement("form",null,r.a.createElement("div",{className:"login__input"},r.a.createElement("input",{type:"text",placeholder:"username",value:t.username||"",onChange:o})),r.a.createElement("div",{className:"login__input"},r.a.createElement("input",{type:"password",placeholder:"password",value:t.password||"",onChange:n})),r.a.createElement("button",{type:"button",onClick:function(){return a(t)},className:"login__button",disabled:l},"Login")),r.a.createElement("a",{className:"login__forget__password__link",href:"/"},"Forget password?")),r.a.createElement("p",{className:"login__signup"},"Don't have an account"," ",r.a.createElement("b",null,r.a.createElement("u",null,"Sign Up now"))),r.a.createElement("p",{className:"login__copyrights"},"\xa9 Copy rights 2020-2021 reserved"))},s=a(16),d=a(1),u=(a(26),function(e){var t=e.onSignOut;return r.a.createElement("div",{className:"navbar"},r.a.createElement("h2",null,"Welcome"),r.a.createElement("button",{className:"navbar__signout",onClick:t},"Sign Out"))}),m=(a(27),function(e){var t=e.data;return r.a.createElement("div",{className:"dashboard__table"},r.a.createElement("table",{cellPadding:"0",cellSpacing:"0"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"label"),r.a.createElement("th",null,"bannedwidth"),r.a.createElement("th",null,"recived bandwidth"),r.a.createElement("th",null,"transmit bandwidth"),r.a.createElement("th",null,"active connection count"))),r.a.createElement("tbody",null,t.map((function(e,t){return r.a.createElement("tr",{key:t},r.a.createElement("td",null,e.label),r.a.createElement("td",null,Math.round(e.bandwidth/1e3)," MB"),r.a.createElement("td",null,Math.round(e.recived_bandwidth/1024)," MB"),r.a.createElement("td",null,Math.round(e.transmit_bandwidth/1024)," MB"),r.a.createElement("td",null,e.active_conn_count))})))))}),g=a(9),h=a.n(g),p=function(){var e=function(){return window.localStorage.getItem("token")};return Object(n.useEffect)((function(){fetch("http://128.199.0.16:3000/users/line-graph",{method:"GET",headers:{authorization:"bearer ".concat(e())}}).then((function(e){return e.json()})).then((function(e){console.log(e);var t=document.getElementById("lineChart");new h.a(t,{type:"line",data:{labels:e.message.time,datasets:[{label:"total",data:e.message.total,backgroundColor:"#0374ff",borderColor:"#0374ff",borderWidth:3,fill:!1,pointBackgroundColor:"#fff",pointBorderColor:"#0374ff",pointBorderWidth:2},{label:"recived",data:e.message.recived,backgroundColor:"#f00",borderColor:"#f00",borderWidth:3,fill:!1,pointBackgroundColor:"#fff",pointBorderColor:"#f00",pointBorderWidth:2},{label:"recived",data:e.message.transmited,backgroundColor:"#25c2a0",borderColor:"#25c2a0",borderWidth:3,fill:!1,pointBackgroundColor:"#fff",pointBorderColor:"#25c2a0",pointBorderWidth:2}]},options:{maintainAspectRatio:!1,scales:{yAxes:[{ticks:{beginAtZero:!0,display:!1}}]}}})})),fetch("http://128.199.0.16:3000/users/pie-chart",{method:"GET",headers:{authorization:"bearer ".concat(e())}}).then((function(e){return e.json()})).then((function(e){console.log(e);var t=document.getElementById("cpuPieChart");new h.a(t,{type:"pie",data:{labels:["Used CPU","Unused CPU"],datasets:[{data:[e.message.cpu.percent_used,100-e.message.cpu.percent_used],backgroundColor:["red","lightgrey"]}]},options:{maintainAspectRatio:!1,scales:{yAxes:[{ticks:{beginAtZero:!0,display:!1},gridLines:{display:!1}}],xAxes:[{ticks:{beginAtZero:!0,display:!1},gridLines:{display:!1}}]}}});var a=document.getElementById("ramPieChart");new h.a(a,{type:"pie",data:{labels:["Used RAM","Unused RAM"],datasets:[{data:[e.message.ram.percent_used,100-e.message.ram.percent_used],backgroundColor:["red","lightgrey"]}]},options:{maintainAspectRatio:!1,scales:{yAxes:[{ticks:{beginAtZero:!0,display:!1},gridLines:{display:!1}}],xAxes:[{ticks:{beginAtZero:!0,display:!1},gridLines:{display:!1}}]}}});var n=document.getElementById("diskPieChart");new h.a(n,{type:"pie",data:{labels:e.message.disk.map((function(e){return e.path})),datasets:[{data:e.message.disk.map((function(e){return e.percent_used})),backgroundColor:["blue","green"]}]},options:{maintainAspectRatio:!1,scales:{yAxes:[{ticks:{beginAtZero:!0,display:!1},gridLines:{display:!1}}],xAxes:[{ticks:{beginAtZero:!0,display:!1},gridLines:{display:!1}}]}}})}))}),[]),r.a.createElement("div",{className:"dashboard__charts"},r.a.createElement("div",{className:"chart__container"},r.a.createElement("canvas",{id:"lineChart"})),r.a.createElement("div",{className:"chart__container"},r.a.createElement("canvas",{id:"cpuPieChart"})),r.a.createElement("div",{className:"chart__container"},r.a.createElement("canvas",{id:"ramPieChart"})),r.a.createElement("div",{className:"chart__container"},r.a.createElement("canvas",{id:"diskPieChart"})))},f=function(e){var t=e.onSignOut,a=Object(n.useState)([]),o=Object(i.a)(a,2),l=o[0],c=o[1];Object(n.useEffect)((function(){fetch("http://128.199.0.16:3000/users/table-view",{method:"GET",headers:{authorization:"bearer ".concat(s())}}).then((function(e){return e.json()})).then((function(e){return c(e.message)}))}),[]);var s=function(){return window.localStorage.getItem("token")};return r.a.createElement(r.a.Fragment,null,r.a.createElement(u,{onSignOut:t}),r.a.createElement("div",{className:"body__wrapper"},r.a.createElement("div",{className:"sidebar"}),r.a.createElement("div",{className:"dashboard"},r.a.createElement(p,null),r.a.createElement(m,{data:l}))))},b=function(e){var t=e.onSignOut;return r.a.createElement(s.a,null,r.a.createElement("div",null,r.a.createElement(d.c,null,r.a.createElement(d.a,{path:"/"},r.a.createElement(f,{onSignOut:t})))))};var E=function(){var e=Object(n.useState)({username:"",password:""}),t=Object(i.a)(e,2),a=t[0],o=t[1],l=Object(n.useState)(!1),s=Object(i.a)(l,2),d=s[0],u=s[1],m=Object(n.useState)(!1),g=Object(i.a)(m,2),h=g[0],p=g[1];Object(n.useEffect)((function(){f()?E():u(!1)}),[d]);var f=function(){if(window.localStorage.token&&null!=window.localStorage.token)return window.localStorage.token},E=function(){u(!0)};return r.a.createElement(r.a.Fragment,null,d?r.a.createElement(b,{onSignOut:function(){window.localStorage.removeItem("token"),u(!1),o({})}}):r.a.createElement(c,{user:a,onLogin:function(){p(!0),fetch("http://128.199.0.16:3000/users/login",{method:"POST",body:JSON.stringify({email:a.username,password:a.password}),headers:{"Content-type":"application/json; charset=UTF-8"}}).then((function(e){return e.json()})).then((function(e){console.log(e),p(!1),void 0!==e.message.token&&(window.localStorage.setItem("token",e.message.token),E())}))},onUsernameChange:function(e){o({username:e.target.value,password:a.password})},onPasswordChange:function(e){o({username:a.username,password:e.target.value})},isWaiting:h}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(E,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[18,1,2]]]);
//# sourceMappingURL=main.97c63f12.chunk.js.map