(this.webpackJsonpmerkezvericom=this.webpackJsonpmerkezvericom||[]).push([[0],{20:function(t,e,a){},21:function(t,e,a){},31:function(t,e,a){"use strict";a.r(e);var i=a(1),s=a.n(i),r=a(14),n=a.n(r),c=(a(20),a(21),a.p+"static/media/logo_without_slogan.62426980.svg"),l=a(0);var o=function(){return Object(l.jsx)("div",{children:Object(l.jsxs)("header",{class:"navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow",children:[Object(l.jsx)("a",{class:"navbar-brand col-md-3 col-lg-2 me-0 px-3",href:"/",children:Object(l.jsx)("img",{src:c,className:"image",alt:"Logo"})}),Object(l.jsx)("button",{class:"navbar-toggler position-absolute d-md-none collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#sidebarMenu","aria-controls":"sidebarMenu","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(l.jsx)("span",{class:"navbar-toggler-icon"})}),Object(l.jsx)("ul",{class:"navbar-nav px-3 d-none d-md-block",children:Object(l.jsx)("li",{class:"nav-item text-nowrap",children:Object(l.jsxs)("a",{class:"nav-link",href:"https://twitter.com/merkezveri",children:[Object(l.jsx)("i",{class:"fab fa-twitter navbar-icon"})," @merkezveri"]})})})]})})},d=a(8);var m=function(t){return Object(l.jsx)(s.a.Fragment,{children:Object(l.jsx)("li",{class:"nav-item",children:Object(l.jsxs)(d.b,{class:"nav-link",to:"/data/".concat(t.item.id),children:[Object(l.jsx)("i",{class:"far fa-file-alt me-1"}),t.item.name]})})})},b=[{id:"1",name:"Gayri Safi Yurti\xe7i Has\u0131la",flourish_id:"5361729",category:"\xdcretim \u0130statistikleri",category_id:"collapseUretim"},{id:"2",name:"Sanayi \xdcretim Endeksii",flourish_id:"5373609",category:"\xdcretim \u0130statistikleri",category_id:"collapseUretim"},{id:"3",name:"\u0130malat Sanayi Kapasite Kullan\u0131m Oranlar\u0131",flourish_id:"3",category:"\xdcretim \u0130statistikleri",category_id:"collapseUretim"},{id:"4",name:"\u0130malat Sanayi Kapasite Kullan\u0131m Oranlar\u0131",flourish_id:"4",category:"Yat\u0131r\u0131m \u0130statistikleri",category_id:"collapseYat\u0131r\u0131m"},{id:"5",name:"Konut Fiyat Endeksi",flourish_id:"5",category:"Yat\u0131r\u0131m \u0130statistikleri",category_id:"collapseYat\u0131r\u0131m"},{id:"6",name:"Kurulan ve Kapanan \u015eirket",flourish_id:"6",category:"Yat\u0131r\u0131m \u0130statistikleri",category_id:"collapseYat\u0131r\u0131m"}];var j=function(){return Object(l.jsx)("nav",{id:"sidebarMenu",class:"col-md-3 col-lg-2 d-md-block sidebar collapse ",children:Object(l.jsxs)("div",{class:"position-sticky pt-3",children:[Object(l.jsx)("h6",{class:"sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-2 text-muted",children:Object(l.jsx)("span",{children:"\u0130statistikler"})}),Object(l.jsx)("ul",{class:"nav flex-column bg-light mb-2",children:b.map((function(t){return Object(l.jsx)(m,{item:t})}))})]})})};function u(t){var e="<iframe src='https://flo.uri.sh/visualisation/"+t.flourish_id+"/embed' title='Interactive or visual content' frameborder='0' scrolling='no' style='width:100%;height:600px;' sandbox='allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation'></iframe><div style='width:100%!;margin-top:4px!important;text-align:right!important;'><a class='flourish-credit' href='https://public.flourish.studio/visualisation/"+t.flourish_id+"/?utm_source=embed&utm_campaign=visualisation/"+t.flourish_id+"' target='_top' style='text-decoration:none!important'><img alt='Made with Flourish' src='https://public.flourish.studio/resources/made_with_flourish.svg' style='width:105px!important;height:16px!important;border:none!important;margin:0!important;'> </a></div>";return Object(l.jsx)("div",{dangerouslySetInnerHTML:{__html:e||""}})}var h=function(t){var e="https://twitter.com/intent/tweet?url="+window.location.href+"&text="+encodeURI(t.item.name)+"&via=merkezveri";return Object(l.jsx)(s.a.Fragment,{children:Object(l.jsxs)("main",{class:"col-md-9 ms-sm-auto col-lg-10 px-md-4",children:[Object(l.jsxs)("div",{class:"d-flex justify-content-between mt-4",children:[Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{class:"h2mt-4",children:t.item.name}),Object(l.jsxs)("p",{class:"fw-light fst-italic",children:["- ",t.item.category]})]}),Object(l.jsx)("div",{children:Object(l.jsxs)("a",{class:"btn btn-sm btn-primary",href:e,target:"_blank",rel:"noreferrer",role:"button",children:[Object(l.jsx)("i",{class:"fab fa-twitter navbar-icon"})," Twitter ile payla\u015f!"]})})]}),Object(l.jsx)(u,{flourish_id:t.item.flourish_id})]})})},p=a(2);var x=function(){return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(p.a,{path:"/",component:o}),Object(l.jsx)("div",{class:"container-fluid",children:Object(l.jsxs)("div",{class:"row",children:[Object(l.jsx)(p.a,{path:"/",component:j}),Object(l.jsx)(p.a,{exact:!0,path:"/",render:function(){return Object(l.jsx)(h,{item:b[0]})}}),Object(l.jsx)(p.a,{path:"/data/:id",render:function(t){var e=b.find((function(e){return e.id===t.match.params.id}));return Object(l.jsx)(h,{item:e})}})]})})]})},f=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,32)).then((function(e){var a=e.getCLS,i=e.getFID,s=e.getFCP,r=e.getLCP,n=e.getTTFB;a(t),i(t),s(t),r(t),n(t)}))};n.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(d.a,{children:Object(l.jsx)(x,{})})}),document.getElementById("root")),f()}},[[31,1,2]]]);
//# sourceMappingURL=main.d5f74896.chunk.js.map