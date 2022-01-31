(this["webpackJsonpts-portfolio"]=this["webpackJsonpts-portfolio"]||[]).push([[0],{18:function(t,e,n){},21:function(t,e,n){},23:function(t,e,n){},24:function(t,e,n){},25:function(t,e,n){},26:function(t,e,n){"use strict";n.r(e);var o=n(2),r=n(9),i=n(30),a=n(29),s=n(1),c=function(t){var e=t.text;return Object(s.jsx)("p",{children:e})},u=n(28),l=(n(18),function(t){var e=t.text,n=t.href;return n.indexOf("http")>-1?Object(s.jsx)("p",{children:Object(s.jsx)("a",{href:n,title:e,target:"_blank",rel:"noreferrer",children:e})}):Object(s.jsx)("p",{children:Object(s.jsx)(u.a,{to:n,title:e,children:e})})}),h=n(12),m=n(31),f=(n(21),function(t){return t.startsWith("cd ")}),d=Object(m.a)((function(t){var e=t.matches,n=t.history,r=Object(o.useState)(""),i=Object(h.a)(r,2),a=i[0],c=i[1];return Object(s.jsxs)("form",{className:"command-line",onSubmit:function(t){t.preventDefault();var o=function(t){return function(e){return e.command===t}}(f(a)?a.substr(3).toLowerCase():a.toLowerCase()),r=e.find(o);r&&(r.url.indexOf("http")>-1?(window.open(r.url),c("")):n&&n.push(r.url))},children:[Object(s.jsx)("span",{children:Object(s.jsx)("input",{type:"text",autoFocus:window.innerWidth>1024,value:a,onChange:function(t){c(t.currentTarget.value)},onKeyDown:function(t){if(9===t.keyCode){t.preventDefault();var n=f(a)?a.substr(3):a;e.forEach((function(t){t.command.startsWith(n.toLowerCase())&&c(t.command)}))}}})}),Object(s.jsx)("input",{type:"submit",style:{display:"none"}})]})})),p=(n(23),function(t){var e,n=t.text,o=t.commandMatches,r=t.links,i=n.map((function(t,e){return Object(s.jsx)(c,{text:t},e)}));return r&&(e=r.map((function(t,e){return Object(s.jsx)(l,{text:t.text,href:t.href},e)}))),e?Object(s.jsxs)("div",{children:[i,Object(s.jsx)("div",{className:"link-container",children:e}),Object(s.jsx)(d,{matches:o})]}):Object(s.jsxs)("div",{children:[i,Object(s.jsx)(d,{matches:o})]})}),b={text:["Hi, I'm Kia Farhang, a software developer in Austin, Texas currently working for DataStax.","You can navigate this site using the links below - or, if you'd like, use the command line at the bottom of the screen.",'Type the name of the page you\'d like to visit. \n        To access the "about" page, type "about" and press enter.','"../" will take you up one level.',"If you'd rather just see my resume, click the 'resume' link below."],links:[{text:"about",href:"about"},{text:"portfolio",href:"portfolio"},{text:"resume",href:"https://github.com/KiaFarhang/ts-portfolio/blob/master/kia-farhang-resume.pdf"}],commands:[{command:"about",url:"about"},{command:"portfolio",url:"portfolio"},{command:"resume",url:"https://github.com/KiaFarhang/ts-portfolio/blob/master/kia-farhang-resume.pdf"}]},x=function(){return Object(s.jsx)(p,{text:b.text,links:b.links,commandMatches:b.commands})},j={text:["I grew up in Minnesota, where I studied journalism in college.","That took me to Southern California, where I started coding and eventually switched careers.","I prefer back-end, test-driven development whenever possible.","Outside of work, I enjoy reading, writing fiction (it's bad), playing video games and taking bike rides."],links:[{text:"home",href:""},{text:"portfolio",href:"portfolio"},{text:"resume",href:"https://github.com/KiaFarhang/ts-portfolio/blob/master/kia-farhang-resume.pdf"},{text:"linkedin",href:"https://www.linkedin.com/in/kia-farhang-68423966/"}],commands:[{command:"../",url:"../"},{command:"home",url:""},{command:"portfolio",url:"portfolio"},{command:"resume",url:"https://github.com/KiaFarhang/ts-portfolio/blob/master/kia-farhang-resume.pdf"},{command:"linkedin",url:"https://www.linkedin.com/in/kia-farhang-68423966/"}]},g=function(){return Object(s.jsx)(p,{text:j.text,links:j.links,commandMatches:j.commands})},w={text:["Here are a few of my recent projects.",'You can also use the "github" command to open my GitHub profile.'],links:[{text:"home",href:""},{text:"about",href:"about"},{text:"github",href:"https://github.com/kiafarhang"},{text:"opensecrets",href:"portfolio/opensecrets"}],commands:[{command:"../",url:"../"},{command:"home",url:""},{command:"about",url:"about"},{command:"github",url:"https://github.com/kiafarhang"},{command:"opensecrets",url:"portfolio/opensecrets"}]},k={text:["This is a Go client for the OpenSecrets federal campaign finance REST API.","It handles firing requests and marshalling the (pretty ugly/nested) JSON response into nice structs users\n        can work with.","I mostly wrote it to get some experience with Go."],links:[{text:"portfolio",href:"../portfolio"},{text:"repo",href:"https://github.com/sa-express-news/UIL-bracket-17"}],commands:[{command:"../",url:"../portfolio"},{command:"portfolio",url:"../portfolio"},{command:"repo",url:"https://github.com/KiaFarhang/opensecrets"}]},v=function(t){var e=t.match;t.location,t.history;return Object(s.jsxs)("div",{children:[Object(s.jsx)(a.a,{exact:!0,path:e.url,render:function(){return Object(s.jsx)(p,{text:w.text,links:w.links,commandMatches:w.commands})}}),Object(s.jsx)(a.a,{path:"".concat(e.url,"/opensecrets"),render:function(){return Object(s.jsx)(p,{text:k.text,links:k.links,commandMatches:k.commands})}})]})},O=(n(24),function(){return Object(s.jsx)(i.a,{children:Object(s.jsxs)("div",{children:[Object(s.jsx)(a.a,{exact:!0,path:"/",component:x}),Object(s.jsx)(a.a,{path:"/about",component:g}),Object(s.jsx)(a.a,{path:"/portfolio",component:v})]})})}),y=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function I(t){navigator.serviceWorker.register(t).then((function(t){t.onupdatefound=function(){var e=t.installing;e&&(e.onstatechange=function(){"installed"===e.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))})}})).catch((function(t){console.error("Error during service worker registration:",t)}))}n(25);r.render(Object(s.jsx)(O,{}),document.getElementById("node")),function(){if("serviceWorker"in navigator){if(new URL(".",window.location.toString()).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat(".","/service-worker.js");y?function(t){fetch(t).then((function(e){404===e.status||-1===e.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(t){t.unregister().then((function(){window.location.reload()}))})):I(t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t):I(t)}))}}()}},[[26,1,2]]]);
//# sourceMappingURL=main.0a396ac6.chunk.js.map