"use strict";(self.webpackChunkgilanis=self.webpackChunkgilanis||[]).push([[17,383],{6522:function(e,s,a){a.d(s,{Z:function(){return c}});a(2791);var n=a(2125),t=a(498),i={"chef-content":"Chef_chef-content__XGC6L","chef-content-quote":"Chef_chef-content-quote__1xjnG","chef-sign":"Chef_chef-sign__LKVl+",h1:"Chef_h1__jnv6K"},r=a(184),c=function(){return(0,r.jsxs)("section",{className:"app-bg app-wrapper section-padding ".concat(i.chef),children:[(0,r.jsx)("figure",{className:"app-wrapper_img app-wrapper_img-reverse",children:(0,r.jsx)("img",{src:n.W.chef,alt:"Head Chef at Gilani's"})}),(0,r.jsxs)("div",{className:"app-wrapper_info",children:[(0,r.jsx)(t.Z,{title:"Chef's Word"}),(0,r.jsx)("h1",{style:{marginLeft:"0"},className:"headtext-cormorant ".concat(i.h1),children:"What we believe in"}),(0,r.jsxs)("div",{className:i["chef-content"],children:[(0,r.jsxs)("figure",{style:{marginLeft:"0"},className:i["chef-content-quote"],children:[(0,r.jsx)("img",{src:n.W.quote,alt:"quotation marks"}),(0,r.jsx)("figcaption",{className:"p-opensans",children:"As a boss, as a CEO, as a creative director, as a chef, I've learned that failure will always come."})]}),(0,r.jsx)("blockquote",{style:{marginLeft:"0"},className:"p-opensans",children:"I've learned to give it a big squeeze, smile at it, humble myself to it and then use it as a springboard to send me on my way to strength, success, and fulfillment.Whatever you do, do with determination. You have one life to live;do your work with passion and give your best. Whether you want to be a chef, doctor or father, be passionate to get the best result."}),(0,r.jsxs)("div",{className:i["chef-sign"],children:[(0,r.jsx)("p",{children:"Arash Gilani"}),(0,r.jsx)("p",{className:"p-opensans",children:"Chef & Current Owner"}),(0,r.jsx)("img",{src:n.W.sign,alt:"signature"})]})]})]})]})}},4383:function(e,s,a){a.r(s),a.d(s,{default:function(){return p}});var n=a(885),t=a(2791),i=a(6030),r="Intro_video__LO4Nd",c="Intro_video-overlay__ZuOm5",l="Intro_video-overlay-circle__GSJ+h",o=a(9126),u=a(8288),d=a(2532),m=a(184),p=function(){var e=(0,i.v9)((function(e){return e.auth.isAuth})),s=(0,t.useState)(!1),a=(0,n.Z)(s,2),p=a[0],h=a[1],f=(0,t.useRef)();return(0,m.jsxs)("section",{className:r,children:[(0,m.jsx)("video",{src:e?d:u,ref:f,controls:!1,type:"video/mp4",loop:!0,muted:!0}),(0,m.jsx)("div",{className:"".concat(c," flex-center"),children:(0,m.jsxs)("div",{onClick:function(){h((function(e){return!e})),p?f.current.pause():f.current.play()},className:"".concat(l," flex-center"),children:[p&&(0,m.jsx)(o.wRS,{size:30,color:"#fff"}),!p&&(0,m.jsx)(o.mz0,{size:30,color:"#fff"})]})})]})}},9143:function(e,s,a){a.d(s,{Z:function(){return k}});var n=a(2791),t=a(6030),i=a(6871),r=a(8368),c=a(6515),l="SpecialMenu_specialmenu__1QgvJ",o="SpecialMenu_specialmenu-title__fXIGQ",u="SpecialMenu_specialmenu-menu__CtKou",d="SpecialMenu_specialmenu-menu-heading__5rKxr",m="SpecialMenu_specialmenu-menu-dishes__AY92D",p="SpecialMenu_specialmenu-menu-juices__022J1",h="SpecialMenu_specialmenu-menu-lists__f2+Wv",f=a(498),x="SpecialMenuItem_specialmenuitem__tQ3cz",g="SpecialMenuItem_specialmenuitem-head__v479B",j="SpecialMenuItem_specialmenuitem-name__u+irL",_="SpecialMenuItem_specialmenuitem-desc__PjqYF",v="SpecialMenuItem_specialmenuitem-tags__lDgMy",b="SpecialMenuItem_seperator__BGd6S",N="SpecialMenuItem_specialmenuitem-price__goc0U",y="SpecialMenuItem_specialmenuitem-actions__KmbDr",w=a(6974),G=a(3504),C=a(184),S=function(e){var s=(0,t.v9)((function(e){return e.auth.isAuth})),a=(0,t.I0)(),n=new Intl.NumberFormat(navigator.language,{style:"currency",currency:"GBP"}).format(e.price.toFixed(2)),i="/home/".concat(e.id);return(0,C.jsxs)("li",{className:"".concat(x),children:[(0,C.jsxs)("div",{className:g,children:[(0,C.jsx)("div",{className:j,children:(0,C.jsx)("h2",{className:"p-cormorant",children:e.title})}),(0,C.jsxs)("div",{style:{gap:"2rem"},className:"flex-center",children:[(0,C.jsx)("div",{className:b}),(0,C.jsx)("div",{className:N,children:(0,C.jsx)("p",{className:"p-cormorant",children:n})})]})]}),s&&(0,C.jsx)("div",{className:_,children:(0,C.jsx)("p",{className:"p-opensans",style:{color:"#ccc"},children:e.desc})}),(0,C.jsxs)("div",{className:v,children:[(0,C.jsx)("p",{className:"p-opensans",style:{color:"#AAA"},children:e.tags}),s&&(0,C.jsxs)("div",{className:y,children:[(0,C.jsx)(G.rU,{to:i,children:"View More"}),(0,C.jsx)("button",{type:"button",className:"custom-button",onClick:function(){a(w.c.addItem({id:e.id,quantity:1,title:e.title,price:e.price,total:e.price}))},children:"Add"})]})]})]},e.id)},k=function(){var e=(0,t.v9)((function(e){return e.menu.juices})),s=(0,t.v9)((function(e){return e.menu.dishes})),a=(0,t.v9)((function(e){return e.auth.isAuth})),x=(0,t.I0)(),g=(0,i.s0)(),j=(0,c.Z)(),_=j.sendRequest,v=j.error;return(0,n.useEffect)((function(){_({url:"https://react-tester-9d1b5-default-rtdb.europe-west1.firebasedatabase.app/dishes.json"},(function(e){var s=Object.keys(e).map((function(s){return{id:s,desc:e[s].desc,title:e[s].title,tags:e[s].tags,price:e[s].price}}));x(r.w.addDishes(s))}))}),[_,x]),(0,n.useEffect)((function(){_({url:"https://react-tester-9d1b5-default-rtdb.europe-west1.firebasedatabase.app/juices.json"},(function(e){var s=Object.keys(e).map((function(s){return{id:s,desc:e[s].desc,title:e[s].title,tags:e[s].tags,price:e[s].price}}));x(r.w.addJuices(s))}))}),[_,x]),(0,C.jsxs)("section",{className:"flex-center section-padding ".concat(l),id:"menu",children:[(0,C.jsxs)("div",{className:o,children:[(0,C.jsx)(f.Z,{title:"Menu that fits your palette"}),(0,C.jsx)("h1",{className:"headtext-cormorant",children:"Gilani's Special"})]}),(0,C.jsxs)("div",{className:u,children:[(0,C.jsxs)("div",{style:{marginRight:"10rem"},className:"flex-center ".concat(p),children:[(0,C.jsx)("p",{className:d,children:"Juices"}),v&&(0,C.jsxs)("p",{className:"p-opensans",children:[v.message," Unable To Load Juice Menu... please try again!"]}),!v&&(0,C.jsx)("ul",{className:h,children:e.map((function(e){var s=e.id,a=e.title,n=e.tags,t=e.price,i=e.desc;return(0,C.jsx)(S,{id:s,title:a,desc:i,tags:n,price:t},s)}))})]}),(0,C.jsxs)("div",{className:"flex-center ".concat(m),children:[(0,C.jsx)("p",{className:d,children:"Dishes"}),v&&(0,C.jsxs)("p",{className:"p-opensans",children:[v.message," Unable To Load Dishes Menu... please try again!"]}),!v&&(0,C.jsx)("ul",{className:h,children:s.map((function(e){var s=e.id,a=e.title,n=e.tags,t=e.price,i=e.desc;return(0,C.jsx)(S,{id:s,title:a,desc:i,tags:n,price:t},s)}))})]})]}),!a&&(0,C.jsx)("div",{style:{marginTop:"15px"},children:(0,C.jsx)("button",{type:"button",className:"custom-button",onClick:function(){g("/auth",{replace:!0})},children:"View More"})})]})}},2017:function(e,s,a){a.r(s),a.d(s,{default:function(){return q}});var n=a(2791),t="AboutUs_aboutus__hbUKE",i="AboutUs_aboutus-overlay__9NvqH",r="AboutUs_aboutus-content__kxoBl",c="AboutUs_aboutus-content-about__iy0j7",l="AboutUs_aboutus-content-about-knife__djBSs",o="AboutUs_aboutus-content-history__WMqp8",u=a(2125),d=a(6871),m=a(184),p=function(){var e=(0,d.s0)(),s=function(){e("/about-us",{replace:!0})};return(0,m.jsxs)("section",{className:"section-padding app-bg  flex-center ".concat(t),id:"about",children:[(0,m.jsx)("figure",{className:"flex-center ".concat(i),children:(0,m.jsx)("img",{src:u.W.G,alt:"Gilani's letter Logo"})}),(0,m.jsxs)("div",{className:"flex-center ".concat(r),children:[(0,m.jsxs)("div",{className:c,children:[(0,m.jsx)("h1",{className:"headtext-cormorant",children:"About Us"}),(0,m.jsx)("img",{src:u.W.spoon,alt:"spoon",className:"spoon-img"}),(0,m.jsx)("p",{className:"p-opensans",children:"For over 65 years the foremost and the fashionable have been dropping in. A filling lunch of traditional italian dishes, Pasta meats and vegetables and a flute of fizz with friends, before the theatre. Gilani's is relaxed, witty but serious about delivering the real Italian experience."}),(0,m.jsx)("button",{onClick:s,type:"button",className:"custom-button",children:"Know More"})]}),(0,m.jsx)("div",{className:"flex-center ".concat(l),children:(0,m.jsx)("img",{src:u.W.knife,alt:"about_knife"})}),(0,m.jsxs)("div",{className:o,children:[(0,m.jsx)("h1",{className:"headtext-cormorant",children:"Our History"}),(0,m.jsx)("img",{src:u.W.spoon,alt:"spoon",className:"spoon-img"}),(0,m.jsx)("p",{className:"p-opensans",children:"Gilani's Restaurant was founded in 1957 in London, UK. Our journey into the restaurant business in London started over 65 years ago, with the opening our first location, as an authentic Italian restaurant in Portobello."}),(0,m.jsx)("button",{onClick:s,type:"button",className:"custom-button",children:"Know More"})]})]})]})},h=a(6522),f=a(498),x=function(){return(0,m.jsxs)("section",{className:"section-padding app-bg app-wrapper",id:"contact",children:[(0,m.jsxs)("div",{className:"app-wrapper_info",children:[(0,m.jsx)(f.Z,{title:"Contact"}),(0,m.jsx)("h1",{className:"headtext-cormorant",style:{margin:"2rem 0"},children:"Find Us"}),(0,m.jsxs)("div",{className:"app-wrapper_content",style:{marginLeft:0},children:[(0,m.jsx)("p",{className:"p-opensans",children:"255 Portobello Rd, London W11 1LT"}),(0,m.jsx)("p",{className:"p-cormorant",style:{color:"#DCCA87",margin:"2rem 0"},children:"Opening Hours"}),(0,m.jsx)("p",{className:"p-opensans",children:"Mon - Fri: 11:00 am - 00:00 am"}),(0,m.jsx)("p",{className:"p-opensans",children:"Sat - Sun: 11:00 am - 11:00 pm"})]}),(0,m.jsx)("button",{onClick:function(){window.location="https://www.google.com/maps/place/255+Portobello+Rd,+London/@51.5176414,-0.2087429,17z/data=!3m1!4b1!4m5!3m4!1s0x4876101e88f522f9:0x921707592bee8c34!8m2!3d51.5176414!4d-0.2065489?hl=en"},className:"custom-button",style:{marginTop:"2rem",marginLeft:0},children:"Visit Us"})]}),(0,m.jsx)("figure",{className:"app-wrapper_img",children:(0,m.jsx)("img",{src:u.W.findus,alt:"find us"})})]})},g=a(9126),j="Gallery_gallery__RNraJ",_="Gallery_gallery-content__RdL2o",v="Gallery_gallery-images__wjRFs",b="Gallery_gallery-images-container__BSmIi",N="Gallery_gallery-images-card__G+USP",y="Gallery_gallery-image-icon__ap+8s",w="Gallery_gallery-images-arrows__JrT26",G="Gallery_gallery-arrows-icon__5IwPD",C=function(){var e=(0,n.useRef)(null),s=function(s){var a=e.current;"left"===s?a.scrollLeft-=300:a.scrollRight+=300},a=[u.W.gallery01,u.W.gallery02,u.W.gallery03,u.W.gallery04];return(0,m.jsxs)("section",{className:"".concat(j," flex-center section-padding"),children:[(0,m.jsxs)("div",{className:_,children:[(0,m.jsx)(f.Z,{title:"Social Media"}),(0,m.jsx)("h1",{style:{marginTop:"2rem",marginLeft:0},className:"headtext-cormorant",children:"Photo Gallery"}),(0,m.jsxs)("p",{className:"p-opensans",style:{color:"#AAA",marginTop:"2rem",marginLeft:0},children:[" ","Check out the latests images from customers who have visited Gilani's Restaurant."]}),(0,m.jsx)("button",{onClick:function(){window.location="https://instagram.com"},className:"custom-button",type:"button",children:"View More"})]}),(0,m.jsxs)("div",{className:v,children:[(0,m.jsx)("div",{className:b,ref:e,children:a.map((function(e,s){return(0,m.jsxs)("div",{className:"flex-center ".concat(N),children:[(0,m.jsx)("img",{src:e,alt:"gallery"}),(0,m.jsx)(g.Vs6,{className:y})]},"gallery-image-".concat(s+1))}))}),(0,m.jsxs)("div",{className:w,children:[(0,m.jsx)(g.i1r,{className:G,onClick:function(){return s("left")}}),(0,m.jsx)(g.UE1,{className:G,onClick:function(){return s("right")}})]})]})]})},S="Header_header__HXQOm",k=function(){var e=(0,d.s0)();return(0,m.jsxs)("section",{className:"app-wrapper section-padding ".concat(S),id:"home",children:[(0,m.jsxs)("div",{className:"app-wrapper_info",children:[(0,m.jsx)(f.Z,{title:"Chase the new flavour"}),(0,m.jsx)("h1",{children:"the pearl of Italian cuisine"}),(0,m.jsx)("p",{className:"p-opensans",children:"Gilani's has been serving its home-styled italian cuisine and feeding the hungry masses for over 65 years, a haven for authentically made Lasagna, bolognese, parmigiana and more. Gilani's has been under the watchful eye of world renowned Massimo Bottura for the last 15 years."}),(0,m.jsx)("button",{onClick:function(){e("/auth",{replace:!0})},className:"custom-button",children:"Explore Menu"})]}),(0,m.jsx)("figure",{className:"app-wrapper_img",children:(0,m.jsx)("img",{src:u.W.welcome,alt:"header img"})})]})},A=a(4383),M="Laurels_laurel-awards__h6dtI",L="Laurels_laurels-awards-card__YLcpU",U="Laurels_laurels-awards-card-content__284-p",W=[{imgUrl:u.W.award01,id:"Ga2",title:"Rising Star",subtitle:"Named the UK's Best Restaurant in 2021. "},{imgUrl:u.W.award02,id:"Ga1",title:"Bib Gourmond",subtitle:"A #5 ranking in Harden's Best of 2020"},{imgUrl:u.W.award03,id:"Ga4",title:"Outstanding Chef",subtitle:"Named UK's best chef in 2019."},{imgUrl:u.W.award05,id:"Ga3",title:"AA Hospitality",subtitle:"Gilani's hold 5 AA rosettes since 2020"}],I=function(e){var s=e.award,a=s.imgUrl,n=s.title,t=s.subtitle;return(0,m.jsxs)("div",{className:L,children:[(0,m.jsx)("img",{src:a,alt:"award"}),(0,m.jsxs)("div",{className:U,children:[(0,m.jsx)("p",{style:{color:"#DCCA87"},className:"p-cormorant",children:n}),(0,m.jsx)("p",{className:"p-cormorant",children:t})]})]})},R=function(){return(0,m.jsxs)("section",{className:"app-bg app-wrapper section-padding",id:"awards",children:[(0,m.jsxs)("div",{className:"app-wrapper_info",children:[(0,m.jsx)(f.Z,{title:"Awards & Recognition"}),(0,m.jsx)("h1",{className:"headtext-cormorant",children:" Our Laurels"}),(0,m.jsx)("div",{className:M,children:W.map((function(e){return(0,m.jsx)(I,{award:e},e.title)}))})]}),(0,m.jsx)("figure",{className:"app-wrapper_img",children:(0,m.jsx)("img",{src:u.W.laurels,alt:"resturant awards"})})]})},Z=a(9143),q=function(){return(0,m.jsxs)(n.Fragment,{children:[(0,m.jsx)(k,{}),(0,m.jsx)(p,{}),(0,m.jsx)(Z.Z,{}),(0,m.jsx)(h.Z,{}),(0,m.jsx)(A.default,{}),(0,m.jsx)(R,{}),(0,m.jsx)(C,{}),(0,m.jsx)(x,{})]})}},6515:function(e,s,a){var n=a(5861),t=a(885),i=a(7757),r=a.n(i),c=a(2791),l=function(e){return new Promise((function(s,a){setTimeout((function(){a(new Error("Request Failed! Session Timeout after ".concat(e," seconds")))}),1e3*e)}))};s.Z=function(){var e=(0,c.useState)(!1),s=(0,t.Z)(e,2),a=s[0],i=s[1],o=(0,c.useState)(!1),u=(0,t.Z)(o,2),d=u[0],m=u[1],p=(0,c.useCallback)(function(){var e=(0,n.Z)(r().mark((function e(s,a){var n,t,c,o,u,d,p;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i(!0),e.prev=1,t=s.url,c=s.method,o=s.headers,u=s.body,e.next=5,Promise.race([fetch(t,{method:null!==c&&void 0!==c?c:"GET",body:null!==(n=JSON.stringify(u))&&void 0!==n?n:null,headers:null!==o&&void 0!==o?o:{}}),l(10)]);case 5:if((d=e.sent).ok){e.next=8;break}throw new Error("".concat(d.status,"! Sorry, Your request failed to execute."));case 8:return e.next=10,d.json();case 10:p=e.sent,a(p),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(1),m(e.t0);case 17:i(!1);case 18:case"end":return e.stop()}}),e,null,[[1,14]])})));return function(s,a){return e.apply(this,arguments)}}(),[]);return{isLoading:a,error:d,sendRequest:p}}},2532:function(e,s,a){e.exports=a.p+"static/media/altVideo.36c5728bf04092b56a95.mp4"},8288:function(e,s,a){e.exports=a.p+"static/media/meal.a1b6c6dc67dfa2f99343.mp4"}}]);
//# sourceMappingURL=17.949fed7d.chunk.js.map