(this["webpackJsonpreact_phone-catalog"]=this["webpackJsonpreact_phone-catalog"]||[]).push([[0],Array(26).concat([function(e,t,c){},,,,,,,,function(e,t,c){},function(e,t,c){},,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var a=c(27),n=c.n(a),s=c(6),i=c(3),r=c(7),l=c(4),o=c(5),j=c.n(o),d=c(1),u=c.n(d),b=(c(34),c(10));var m=function(e){return function(e){return fetch("https://mate-academy.github.io/react_phone-catalog/_new/products"+e).then((function(e){if(!e.ok)throw new Error;return e.json()}))}(e)},h=function(){return m(".json")},_=function(e){return m("/".concat(e,".json"))},p=function(e){for(var t=Object(b.a)(e),c=t.length-1;c>0;c-=1){var a=Math.floor(Math.random()*(c+1)),n=[t[a],t[c]];t[c]=n[0],t[a]=n[1]}return t},O=function(e,t){return Object(b.a)(e).sort((function(e,c){var a=e.fullPrice-e.price,n=c.fullPrice-c.price;switch(t){case"new":return c.price-e.price;case"hotPrice":return n-a;case"name":return e.name.localeCompare(c.name);case"price":return e.price-c.price;default:return c.year-e.year}}))},f=(c(35),c(8)),x=c.n(f),v=c(11);function N(e,t){var c=Object(d.useState)((function(){try{var c=e?localStorage.getItem(e):null;return c?JSON.parse(c):t}catch(a){return t}})),a=Object(l.a)(c,2),n=a[0],s=a[1];return[n,function(t){s(t),e&&localStorage.setItem(e,JSON.stringify(t))}]}var g=function(e,t){switch(t.type){case"UPDATE_QUANTITY":case"ADD_TO_CART":case"REMOVE_FROM_CART":return Object(v.a)(Object(v.a)({},e),{},{cartItems:t.payload});case"UPDATE_PRICE":return Object(v.a)(Object(v.a)({},e),{},{totalCost:t.payload});case"UPDATE_FAVORITES":return Object(v.a)(Object(v.a)({},e),{},{favoriteItems:t.payload});default:return e}},y=c(0),C={totalCost:0,cartItems:[],favoriteItems:[]},S=u.a.createContext(C),I=u.a.createContext((function(e){})),w=function(e){var t=e.children,c=function(e,t){var c=JSON.parse(localStorage.getItem(e)||JSON.stringify(t)),a=Object(d.useReducer)(g,c),n=Object(l.a)(a,2),s=n[0],i=n[1];return Object(d.useEffect)((function(){localStorage.setItem(e,JSON.stringify(s))}),[e,s]),[s,i]}("CartStorage",C),a=Object(l.a)(c,2),n=a[0],s=a[1];return Object(y.jsx)(I.Provider,{value:s,children:Object(y.jsx)(S.Provider,{value:n,children:t})})},k=(c(37),function(e){var t=e.data,c=e.discount,a=void 0===c||c,n=t.image,i=t.name,r=t.price,l=t.fullPrice,o=t.screen,j=t.capacity,u=t.ram,b=t.phoneId,m=Object(d.useContext)(I),h=Object(d.useContext)(S),_=h.cartItems,p=h.favoriteItems,O=_.some((function(e){return e.id===b})),f=p.some((function(e){return e.phoneId===b}));return Object(y.jsxs)("div",{className:"productCard",children:[Object(y.jsxs)(s.b,{to:"/phones/".concat(b),className:"productCard__link",children:[Object(y.jsx)("div",{className:"productCard__image image",children:Object(y.jsx)("img",{src:"_new/".concat(n),alt:i,className:"image__item"})}),Object(y.jsx)("div",{className:"productCard__nameWrapper",children:Object(y.jsx)("span",{className:"productCard__name",children:i})}),Object(y.jsx)("div",{className:"productCard__prices price",children:a?Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)("span",{className:"price__current",children:r}),Object(y.jsx)("span",{className:"price__old",children:l})]}):Object(y.jsx)("span",{className:"price__current",children:l})}),Object(y.jsx)("span",{className:"productCard__underline"}),Object(y.jsxs)("div",{className:"productCard__specs details",children:[Object(y.jsxs)("div",{className:"details__parts",children:[Object(y.jsx)("p",{className:"details__part",children:"Screen"}),Object(y.jsx)("p",{className:"details__part",children:"Capacity"}),Object(y.jsx)("p",{className:"details__part",children:"RAM"})]}),Object(y.jsxs)("div",{className:"details__values",children:[Object(y.jsx)("p",{className:"details__value",children:o}),Object(y.jsx)("p",{className:"details__value",children:j}),Object(y.jsx)("p",{className:"details__value",children:u})]})]})]}),Object(y.jsxs)("div",{className:"productCard__buttons",children:[Object(y.jsx)("button",{type:"button",onClick:function(){m(O?{type:"ADD_TO_CART",payload:_.map((function(e){return e.id===b?{id:b,quantity:e.quantity+1,product:t,discount:a}:e}))}:{type:"ADD_TO_CART",payload:_.concat({id:b,quantity:1,product:t,discount:a})})},className:x()("productCard__button-add",{"productCard__button-add--includes":O}),children:O?"Added to cart":"Add to cart"}),Object(y.jsx)("button",{className:"productCard__button-favorite",type:"button","data-cy":"addToFavorite","aria-label":"add-to-favorite",onClick:function(){m(f?{type:"UPDATE_FAVORITES",payload:p.filter((function(e){return e.phoneId!==b}))}:{type:"UPDATE_FAVORITES",payload:p.concat(t)})},children:Object(y.jsx)("span",{className:x()("icon icon-hearth",{"icon-hearth--selected":f})})})]})]})}),T=function(e){var t=e.slideNumber,c=e.items,a=e.discount,n=void 0===a||a;return Object(y.jsx)("div",{className:"slider__list",style:{transform:"translateX(-".concat(100*t,"%)")},"data-cy":"cardsContainer",children:c.map((function(e){return Object(y.jsx)("div",{className:"slider__item",children:Object(y.jsx)(k,{data:e,discount:n})},e.id)}))})},A=function(e){var t=e.title,c=e.items,a=e.discount,n=void 0===a||a,s=Object(d.useState)(0),i=Object(l.a)(s,2),r=i[0],o=i[1],j=Object(d.useState)(4),u=Object(l.a)(j,2),b=u[0],m=u[1],h=Object(d.useRef)(null),_=function(){var e=Object(d.useState)([0,0]),t=Object(l.a)(e,2),c=t[0],a=t[1];return Object(d.useLayoutEffect)((function(){function e(){a([window.innerWidth,window.innerHeight])}return window.addEventListener("resize",e),e(),function(){return window.removeEventListener("resize",e)}}),[]),c}(),p=Object(l.a)(_,1)[0],O=Math.ceil((c.length-b)/b);Object(d.useEffect)((function(){!function(e){if(e.current){var t=e.current.getBoundingClientRect().width,c=Math.round(t);c<560&&m(1),c>=560&&c<605&&m(2),c<=848&&c>605&&m(3),c>848&&m(4)}}(h)}),[p]);var f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=r+e;t<0&&(t=0),t>=O&&(t=O),o(t)};return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsxs)("div",{className:"block-header",children:[Object(y.jsx)("h3",{className:"block-header__title",children:t}),Object(y.jsxs)("div",{className:"block-header__arrows arrows",children:[Object(y.jsx)("button",{type:"button",className:"arrows__arrow arrows__arrow--left",onClick:function(){return f(-1)},"aria-label":"previously",disabled:0===r}),Object(y.jsx)("button",{type:"button",className:"arrows__arrow arrows__arrow--right",onClick:function(){return f(1)},"aria-label":"next",disabled:r===O})]})]}),Object(y.jsx)("div",{ref:h,className:"slider",children:Object(y.jsx)(T,{slideNumber:r,items:c,discount:n})})]})};A.defaultProps={discount:!0};var P,D=c.p+"static/media/category-phones.af93d992.png",E=c.p+"static/media/category-tablets.51782e18.png",R=c.p+"static/media/category-accessories.e47d6d6d.png";!function(e){e.Home="home",e.Phones="phones",e.Tablets="tablets",e.Accessories="accessories"}(P||(P={}));var L,F=[{pathTo:"/",title:P.Home},{pathTo:"/phones",title:P.Phones},{pathTo:"/tablets",title:P.Tablets},{pathTo:"/accessories",title:P.Accessories}],q=[{pathTo:"/phones",title:"Mobile ".concat(P.Phones),subtitle:"95 models",imgPath:D,bgColorImg:"#FCDBC1",width:"386px",height:"457px",top:"8px",left:"73px"},{pathTo:"/tablets",title:P.Tablets,subtitle:"24 models",imgPath:E,bgColorImg:"#89939A",width:"546px",height:"546px",top:"20px",left:"22px"},{pathTo:"/accessories",title:P.Accessories,subtitle:"100 models",imgPath:R,bgColorImg:"#ac385e",width:"auto",height:"300px",top:"68px",left:"43px"}],B=(c(38),function(e){var t=e.category,c=t.pathTo,a=t.title,n=t.subtitle,i=t.imgPath,r=t.bgColorImg,l=t.width,o=t.height,j=t.top,d=t.left;return Object(y.jsxs)(s.b,{to:c,className:"item__link",children:[Object(y.jsx)("div",{className:"item__imgContainer",style:{backgroundColor:r},children:Object(y.jsx)("img",{src:i,alt:a,style:{width:l,height:o,top:j,left:d},className:"item__img"})}),Object(y.jsx)("h3",{className:"item__title",children:"".concat(a.charAt(0).toUpperCase()).concat(a.slice(1))}),Object(y.jsx)("span",{className:"item__subtitle",children:n})]})}),M=(c(39),function(){return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)("h3",{className:"block-header__title",children:"Shop by category"}),Object(y.jsx)("div",{className:"shopByCategory categories",children:Object(y.jsx)("ul",{className:"categories__list list","data-cy":"categoryLinksContainer",children:q.map((function(e){return Object(y.jsx)("li",{className:"list__item item",children:Object(y.jsx)(B,{category:e})},e.title)}))})})]})}),U=(c(26),c.p+"static/media/left-arrow.081ebe62.svg"),V=c.p+"static/media/right-arrow.7365d53e.svg",J=function(e){var t=e.direction,c=e.moveSlide;return Object(y.jsx)("button",{type:"button",className:"next"===t?"btn-slide next":"btn-slide prev",onClick:c,children:Object(y.jsx)("img",{src:"next"===t?V:U,alt:"next"})})},z=function(e){var t=e.dataSlider,c=Object(d.useState)(1),a=Object(l.a)(c,2),n=a[0],s=a[1];return Object(d.useEffect)((function(){var e=setInterval((function(){s((function(e){var c=(e+1)%t.length;switch(c){case 0:return t.length;case t.length:return 0;default:return c}}))}),5e3);return function(){clearInterval(e)}}),[]),Object(y.jsxs)("div",{className:"container-slider",children:[t.map((function(e,t){return Object(y.jsx)("div",{className:n===t+1?"slide active-anim":"slide",children:Object(y.jsx)("img",{src:"".concat(e),alt:e})},e)})),Object(y.jsx)(J,{moveSlide:function(){n!==t.length?s(n+1):n===t.length&&s(1)},direction:"next"}),Object(y.jsx)(J,{moveSlide:function(){1!==n?s(n-1):1===n&&s(t.length)},direction:"prev"}),Object(y.jsx)("ul",{className:"container-dots dots__list",children:t.map((function(e,t){return Object(y.jsx)("li",{className:"dots__item",children:Object(y.jsx)("button",{type:"button","aria-label":"dot",onClick:function(){return function(e){s(e)}(t+1)},className:x()("dot",{"dot--active":n===t+1})})},e)}))})]})},H=[c.p+"static/media/banner-accessories.bdd2e0fc.png",c.p+"static/media/banner-phones.b4eeda8b.png",c.p+"static/media/banner-tablets.a962057c.png"],W=[{value:"age",label:"Newest"},{value:"name",label:"Alphabetically"},{value:"price",label:"Cheapest"}],Y=[{value:"all",label:"all"},{value:"4",label:"4"},{value:"8",label:"8"},{value:"16",label:"16"}],$=function(){var e=Object(d.useState)([]),t=Object(l.a)(e,2),c=t[0],a=t[1],n=Object(d.useState)([]),s=Object(l.a)(n,2),i=s[0],o=s[1],u=function(){var e=Object(r.a)(j.a.mark((function e(){var t,c,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h();case 3:t=e.sent,c=O(t,"hotPrice"),n=O(t,"new"),a(c),o(n),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),window.console.log("some error");case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}();return Object(d.useEffect)((function(){u()}),[]),Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(z,{dataSlider:H}),Object(y.jsx)("div",{className:"block hotPrices",children:Object(y.jsx)(A,{title:"Hot prices",items:c})}),Object(y.jsx)("div",{className:"block shopByCategory",children:Object(y.jsx)(M,{})}),Object(y.jsx)("div",{className:"block brandNew",children:Object(y.jsx)(A,{title:"Brand new models",items:i,discount:!1})})]})},G=(c(40),function(){return Object(y.jsx)("div",{className:"Loader",children:Object(y.jsx)("div",{className:"Loader__content"})})});!function(e){e.Newest="age",e.Alphabetically="name",e.Cheapest="price"}(L||(L={}));c(41);var Q=function(e){var t=e.options,c=e.selectOption,a=e.localStorageName,n=e.localValueStart,s=void 0===n?"0":n,i=e.width,r=Object(d.useState)(!1),o=Object(l.a)(r,2),j=o[0],u=o[1],b=N(a,s),m=Object(l.a)(b,2),h=m[0],_=m[1],p=Object(d.useState)(t[+h]),O=Object(l.a)(p,2),f=O[0],v=O[1],g=Object(d.useRef)(null);Object(d.useEffect)((function(){var e=function(e){g.current&&!g.current.contains(e.target)&&u(!1)};return window.addEventListener("click",e),function(){window.removeEventListener("click",e)}}));var C=function(e){return!!f&&f.value===e.value};return Object(y.jsxs)("div",{className:"dropdown",style:{width:"".concat(i,"px")},children:[Object(y.jsxs)("div",{className:"dropdown__input",onClick:function(){u(!j)},"aria-hidden":"true",ref:g,children:[Object(y.jsx)("div",{className:"dropdown__selectedValue",children:f.label}),Object(y.jsx)("div",{className:"dropdown__tools",children:Object(y.jsx)("div",{className:x()("dropdown__tool",{"dropdown__tool--active":j})})})]}),j&&Object(y.jsx)("div",{className:"dropdown__menu",children:t.map((function(e,t){return Object(y.jsx)("div",{onClick:function(){return function(e,t){v(e),_(String(t)),e.value!==(null===f||void 0===f?void 0:f.value)&&c(e.value)}(e,t)},"aria-hidden":"true",className:x()("dropdown__menuItem",{"dropdown__menuItem--selected":C(e)}),children:e.label},e.value)}))})]})};c(42);var X,Z=function(e){var t=e.data;return Object(y.jsx)("ul",{className:"products__list","data-cy":"productList",children:t.map((function(e){return Object(y.jsx)("li",{className:"products__item",children:Object(y.jsx)(k,{data:e})},e.id)}))})},K=(c(43),function(e){var t=e.items,c=e.itemsPerPage,a=c||t.length,n=Object(s.d)(),r=Object(l.a)(n,2),o=r[0],j=r[1],d=Object(i.m)(),u=+(o.get("page")||"1"),b=Math.ceil(t.length/a),m=u*a,h=m-a,_=t.slice(h,m),p=function(e,t){e.preventDefault();var c=u;if("prev"===t)c-=1;else c+=1;c<1||c>b||(o.set("page",String(c)),j(o))},O=function(e,t){for(var c=[],a=e;a<=t;a+=1)c.push(a);return c}(0,b-1);return Object(y.jsxs)("div",{className:"pagination",children:[Object(y.jsx)(Z,{data:_}),!!c&&Object(y.jsxs)("ul",{className:"pagination__links",children:[Object(y.jsx)("li",{className:x()("pagination__itemLi",{"pagination__itemLi--disabled":1===u}),"data-cy":"paginationLeft",children:Object(y.jsx)(s.b,{to:"".concat(d.pathname,"?").concat(o.toString()),className:"pagination__link pagination__link--prev",onClick:function(e){return p(e,"prev")},"aria-disabled":1===u,children:"<"})}),O.map((function(e){return Object(y.jsx)("li",{className:x()("pagination__itemLi",{"pagination__itemLi--active":e+1===u}),children:Object(y.jsx)(s.b,{className:"pagination__link",to:"".concat(d.pathname,"?").concat(o.toString()),onClick:function(e){return function(e){e.preventDefault();var t=+e.currentTarget.innerHTML;t!==u&&(o.set("page",String(t)),j(o))}(e)},children:e+1})},e)})),Object(y.jsx)("li",{className:x()("pagination__itemLi",{"pagination__itemLi--disabled":u===b}),"data-cy":"paginationRight",children:Object(y.jsx)(s.b,{to:"".concat(d.pathname,"?").concat(o.toString()),className:"pagination__link pagination__link--next",onClick:function(e){return p(e,"next")},children:">"})})]})]})});!function(e){e.All="all",e.Four="4",e.Eight="8",e.Sixteen="16"}(X||(X={}));c(44);var ee=c.p+"static/media/home.d4c29e4f.svg",te=(c(45),function(e){var t,c=e.page,a=e.name,n=Object(i.q)().phoneId,r="".concat((t=c).charAt(0).toUpperCase()+t.slice(1));return Object(y.jsxs)("div",{className:"breadcrumbs",children:[Object(y.jsx)(s.b,{to:"/",className:"breadcrumbs__home",children:Object(y.jsx)("img",{src:ee,alt:"img_Link"})}),n?Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(s.b,{to:"/".concat(c),className:"breadcrumbs__link",children:r}),Object(y.jsx)("span",{className:"breadcrumbs__text",children:a})]}):Object(y.jsx)("span",{className:"breadcrumbs__text",children:r})]})});function ce(e,t){if(!t||!t.length)return e;var c=t.toLowerCase();return Object(b.a)(e).filter((function(e){var t=e.name,a=e.price,n=e.fullPrice,s=e.screen,i=e.capacity,r=e.ram;return t.toLowerCase().includes(c)||String(a).toLowerCase().includes(c)||String(n).toLowerCase().includes(c)||s.toLowerCase().includes(c)||i.toLowerCase().includes(c)||r.toLowerCase().includes(c)}))}var ae,ne=function(){return Object(y.jsx)("h2",{children:"No matching products in the query"})},se=function(){var e=Object(d.useState)(null),t=Object(l.a)(e,2),c=t[0],a=t[1],n=Object(d.useState)(!1),i=Object(l.a)(n,2),o=i[0],u=i[1],b=Object(d.useState)(null),m=Object(l.a)(b,2),_=m[0],p=m[1],f=N("sorting",L.Newest),x=Object(l.a)(f,2),v=x[0],g=x[1],C=Object(s.d)(),S=Object(l.a)(C,2),I=S[0],w=S[1],k=N("perPage",X.All),T=Object(l.a)(k,2),A=T[0],P=T[1],D=I.get("query"),E=function(){var e=Object(r.a)(j.a.mark((function e(){var t,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,u(!0),e.next=4,h();case 4:t=e.sent,c=O(t,v),a(c),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),p("something went wrong");case 12:return e.prev=12,u(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,9,12,15]])})));return function(){return e.apply(this,arguments)}}(),R=function(e){if(c){var t=O(c,e);g(e),a(t)}return null},F=function(){return c&&ce(c,D).length?ce(c,D):[]};return Object(d.useEffect)((function(){F()}),[c,D]),Object(d.useEffect)((function(){E()}),[]),Object(d.useEffect)((function(){R(v)}),[v]),Object(d.useEffect)((function(){!function(){I.set("sort",v),I.set("perPage",A);var e=I.get("page"),t="all"===I.get("perPage"),c=t&&I.has("page");t||"1"===e||I.set("page","1"),c&&I.delete("page");var a=I.get("sort"),n=I.get("perPage");"age"===a&&"all"===n&&(I.delete("sort"),I.delete("perPage"),I.delete("page")),w(I)}()}),[v,A]),Object(y.jsx)(y.Fragment,{children:c?Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)("div",{className:"breadcrumbsContainer",children:Object(y.jsx)(te,{page:"Phone"})}),Object(y.jsx)("h1",{className:"pageTitle",children:"Mobile phones"}),!!F().length&&Object(y.jsx)("h4",{className:"subTitle",children:"".concat(F().length," models")}),F().length?Object(y.jsxs)(y.Fragment,{children:[Object(y.jsxs)("div",{className:"product__selection",children:[Object(y.jsxs)("div",{className:"product__sorting",children:[Object(y.jsx)("div",{className:"product__title",children:"Sort by"}),Object(y.jsx)(Q,{options:W,selectOption:R,localStorageName:"dropdownOption",localValueStart:"0",width:176})]}),Object(y.jsxs)("div",{className:"product__sorting",children:[Object(y.jsx)("div",{className:"product__title",children:"Items on page"}),Object(y.jsx)(Q,{options:Y,selectOption:P,localStorageName:"itemsOnPage",localValueStart:"0",width:128})]})]}),Object(y.jsx)(K,{items:ce(c,D),itemsPerPage:+A})]}):Object(y.jsx)(ne,{}),!!_&&Object(y.jsx)("p",{children:_})]}):o&&Object(y.jsx)(G,{})})},ie=function(){return Object(y.jsx)("h1",{children:"Tablets"})},re=function(){return Object(y.jsx)("h1",{children:"Accessories"})},le=(c(46),c(47),function(e){var t=e.title,c=e.text;return Object(y.jsxs)("div",{className:"description__block",children:[Object(y.jsx)("h3",{className:"description__subtitle",children:t}),c.map((function(e){return Object(y.jsx)("p",{className:"description__text",children:e},e)}))]})}),oe=function(e){var t=e.description;return Object(y.jsx)("ul",{className:"description__list",children:t.map((function(e){var t=e.title,c=e.text;return Object(y.jsx)("li",{className:"description__listItem",children:Object(y.jsx)(le,{title:t,text:c})},t)}))})},je=(c(48),function(e){var t=e.screen,c=e.resolution,a=e.processor,n=e.ram,s=e.capacity,i=e.camera,r=e.zoom,l=e.cell,o=(void 0===l?[]:l).join(", ");return Object(y.jsxs)("ul",{className:"specification__list",children:[Object(y.jsxs)("li",{className:"specification__listItem",children:[Object(y.jsx)("span",{className:"specification__name",children:"Screen"}),Object(y.jsx)("span",{className:"specification__value",children:t})]}),Object(y.jsxs)("li",{className:"specification__listItem",children:[Object(y.jsx)("span",{className:"specification__name",children:"Resolution"}),Object(y.jsx)("span",{className:"specification__value",children:c})]}),Object(y.jsxs)("li",{className:"specification__listItem",children:[Object(y.jsx)("span",{className:"specification__name",children:"Processor"}),Object(y.jsx)("span",{className:"specification__value",children:a})]}),Object(y.jsxs)("li",{className:"specification__listItem",children:[Object(y.jsx)("span",{className:"specification__name",children:"RAM"}),Object(y.jsx)("span",{className:"specification__value",children:n})]}),Object(y.jsxs)("li",{className:"specification__listItem",children:[Object(y.jsx)("span",{className:"specification__name",children:"Built in memory"}),Object(y.jsx)("span",{className:"specification__value",children:s})]}),Object(y.jsxs)("li",{className:"specification__listItem",children:[Object(y.jsx)("span",{className:"specification__name",children:"Camera"}),Object(y.jsx)("span",{className:"specification__value",children:i})]}),Object(y.jsxs)("li",{className:"specification__listItem",children:[Object(y.jsx)("span",{className:"specification__name",children:"Zoom"}),Object(y.jsx)("span",{className:"specification__value",children:r})]}),Object(y.jsxs)("li",{className:"specification__listItem",children:[Object(y.jsx)("span",{className:"specification__name",children:"Cell"}),Object(y.jsx)("span",{className:"specification__value",children:o})]})]})}),de=(c(49),c(50),function(){var e=Object(i.o)();return Object(y.jsx)("button",{className:"back",type:"button",onClick:function(){e(-1)},children:"Back"})}),ue=function(e){var t=e.phoneDetails,c=e.phoneId,a=e.phoneData,n=t.id,i=t.name,r=t.images,o=t.colorsAvailable,j=t.capacityAvailable,u=t.screen,b=t.capacity,m=t.camera,h=t.resolution,_=t.processor,p=t.ram,O=t.description,f=t.zoom,N=t.cell,g=t.priceDiscount,C=t.priceRegular,w=t.namespaceId,k=t.color,T=Object(d.useContext)(S),A=T.cartItems,P=T.favoriteItems,D=Object(d.useContext)(I),E=Object(d.useState)("_new/".concat(r[0])),R=Object(l.a)(E,2),L=R[0],F=R[1];Object(d.useEffect)((function(){F("_new/".concat(r[0]))}),[r]);var q=A.some((function(e){return e.id===c})),B=P.some((function(e){return e.phoneId===n}));return Object(y.jsxs)("div",{className:"phoneDetails",children:[Object(y.jsxs)("nav",{className:"phoneDetails__nav",children:[Object(y.jsx)("div",{className:"phoneDetails__navBreadcrumbs",children:Object(y.jsx)(te,{page:"phones",name:i})}),Object(y.jsx)("div",{className:"phoneDetails__navBack",children:Object(y.jsx)(de,{"data-cy":"backButton"})})]}),Object(y.jsx)("h1",{className:"phoneDetails__title",children:i}),Object(y.jsxs)("section",{className:"phoneDetails__section",children:[Object(y.jsxs)("div",{className:"phoneDetails__photos",children:[Object(y.jsx)("div",{className:"phoneDetails__photosSmall",children:Object(y.jsx)("ul",{className:"phoneDetails__listItems",children:r.map((function(e){return Object(y.jsx)("li",{className:"phoneDetails__listItem",children:Object(y.jsx)("button",{className:"phoneDetails__listItemButton",type:"button",onClick:function(){return function(e){var t="_new/".concat(e);F(t)}(e)},children:Object(y.jsx)("img",{src:"_new/".concat(e),alt:"",className:"phoneDetails__listItemImage"})})},e)}))})}),Object(y.jsx)("div",{className:"phoneDetails__photo",children:Object(y.jsx)("img",{src:L,alt:"",className:"phoneDetails__photoBig"})})]}),Object(y.jsxs)("div",{className:"phoneDetails__info",children:[Object(y.jsxs)("div",{className:"phoneDetails__infoSelect infoSelect",children:[Object(y.jsx)("h5",{className:"infoSelect__text",children:"Available colors"}),Object(y.jsx)("ul",{className:"infoSelect__colors colorsList",children:o.map((function(e){return Object(y.jsx)("li",{className:"colorsList__item",children:Object(y.jsx)(s.b,{to:"../".concat(w,"-").concat(b.toLowerCase(),"-").concat(e),className:"infoSelect__color",style:{backgroundColor:e}})},e)}))}),Object(y.jsx)("span",{className:"infoSelect__underline"}),Object(y.jsx)("h5",{className:"infoSelect__text",children:"Select capacity"}),Object(y.jsx)("ul",{className:"infoSelect__capacities",children:j.map((function(e){return Object(y.jsx)("li",{className:"infoSelect__capacity",children:Object(y.jsx)(s.b,{to:"../".concat(w,"-").concat(e.toLowerCase(),"-").concat(k),className:x()("infoSelect__capacitiesBtn",{"infoSelect__capacitiesBtn--selected":b===e}),children:e})},e)}))}),Object(y.jsx)("span",{className:"infoSelect__underline infoSelect__underline--mb32"}),Object(y.jsxs)("div",{className:"infoSelect__price",children:[Object(y.jsx)("span",{className:"infoSelect__priceDiscount",children:"$".concat(g)}),Object(y.jsx)("span",{className:"infoSelect__priceRegular",children:"$".concat(C)})]}),Object(y.jsxs)("div",{className:"infoSelect__buttonsWrapper",children:[Object(y.jsx)("button",{onClick:function(){D(q?{type:"ADD_TO_CART",payload:A.map((function(e){return e.id===n?Object(v.a)(Object(v.a)({},e),{},{quantity:e.quantity+1}):e}))}:{type:"ADD_TO_CART",payload:A.concat({id:c,quantity:1,product:a[a.findIndex((function(e){return e.phoneId===n}))],discount:!0})})},type:"button",className:x()("infoSelect__btnAddToCart",{"infoSelect__btnAddToCart--includes":q}),children:q?"Added to cart":"Add to cart"}),Object(y.jsx)("button",{className:"infoSelect__button-favorite","data-cy":"addToFavorite",type:"button","aria-label":"add-to-favorite",onClick:function(){D(B?{type:"UPDATE_FAVORITES",payload:P.filter((function(e){return e.phoneId!==n}))}:{type:"UPDATE_FAVORITES",payload:P.concat(a[a.findIndex((function(e){return e.phoneId===n}))])})},children:Object(y.jsx)("span",{className:x()("icon icon-hearth",{"icon-hearth--selected":B})})})]}),Object(y.jsxs)("ul",{className:"infoSelect__list",children:[Object(y.jsxs)("li",{className:"infoSelect__listItem",children:[Object(y.jsx)("span",{className:"infoSelect__listTitle",children:"Screen"}),Object(y.jsx)("span",{className:"infoSelect__listSpecs",children:u})]}),Object(y.jsxs)("li",{className:"infoSelect__listItem",children:[Object(y.jsx)("span",{className:"infoSelect__listTitle",children:"Resolution"}),Object(y.jsx)("span",{className:"infoSelect__listSpecs",children:h})]}),Object(y.jsxs)("li",{className:"infoSelect__listItem",children:[Object(y.jsx)("span",{className:"infoSelect__listTitle",children:"Processor"}),Object(y.jsx)("span",{className:"infoSelect__listSpecs",children:_})]}),Object(y.jsxs)("li",{className:"infoSelect__listItem",children:[Object(y.jsx)("span",{className:"infoSelect__listTitle",children:"RAM"}),Object(y.jsx)("span",{className:"infoSelect__listSpecs",children:p})]})]})]}),Object(y.jsx)("div",{className:"phoneDetails__infoId",children:Object(y.jsx)("h5",{className:"phoneDetails__infoIdText",children:"ID: 802390"})})]}),Object(y.jsxs)("div",{className:"phoneDetails__description description","data-cy":"productDescription",children:[Object(y.jsx)("h2",{className:"description__title",children:"About"}),Object(y.jsx)("span",{className:"infoSelect__underline infoSelect__underline--mb32"}),Object(y.jsx)(oe,{description:O})]}),Object(y.jsxs)("div",{className:"phoneDetails__specification specification",children:[Object(y.jsx)("h2",{className:"specification__title",children:"Tech specs"}),Object(y.jsx)("span",{className:"infoSelect__underline"}),Object(y.jsx)(je,{screen:u,resolution:h,processor:_,ram:p,capacity:b,camera:m,zoom:f,cell:N})]})]})]})},be=function(){window.scroll({top:0,behavior:"smooth"})},me=function(){var e=Object(i.q)().phoneId,t=void 0===e?"":e,c=Object(d.useState)(),a=Object(l.a)(c,2),n=a[0],s=a[1],o=Object(d.useState)([]),u=Object(l.a)(o,2),b=u[0],m=u[1],O=Object(d.useState)(!1),f=Object(l.a)(O,2),x=f[0],v=f[1],N=Object(d.useState)(null),g=Object(l.a)(N,2),C=g[0],S=g[1],I=Object(i.o)(),w=function(){var e=Object(r.a)(j.a.mark((function e(){var c,a,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,v(!0),e.next=4,_(t);case 4:return c=e.sent,e.next=7,h();case 7:a=e.sent,n=p(a),s(c),m(n),e.next=17;break;case 13:e.prev=13,e.t0=e.catch(0),S("Phone was not found"),setTimeout((function(){I("..")}),3500);case 17:return e.prev=17,v(!1),e.finish(17);case 20:case"end":return e.stop()}}),e,null,[[0,13,17,20]])})));return function(){return e.apply(this,arguments)}}();return Object(d.useEffect)((function(){if(t){var e=setTimeout((function(){be()}),300);return w(),function(){return clearTimeout(e)}}}),[t]),Object(y.jsxs)(y.Fragment,{children:[x&&Object(y.jsx)(G,{}),n&&!C&&Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(ue,{phoneDetails:n,phoneData:b,phoneId:t}),Object(y.jsx)(A,{title:"You may also like",items:b})]}),C&&Object(y.jsx)("h1",{children:"".concat(C)})]})},he=(c(51),c(52),function(){return Object(y.jsx)("div",{className:"logo",children:Object(y.jsx)(s.b,{to:"/",className:"logo__link","aria-label":"logo"})})});!function(e){e.Github="github",e.Contacts="contacts",e.Rights="rights"}(ae||(ae={}));var _e=[{pathTo:"/github",title:ae.Github},{pathTo:"/contacts",title:ae.Contacts},{pathTo:"/rights",title:ae.Rights}],pe=(c(53),function(){return Object(y.jsxs)("div",{className:"backToTop",children:[" ",Object(y.jsx)("button",{type:"button",className:"backToTop__icon","aria-label":"Back to top",onClick:be})]})}),Oe=(c(54),function(){return Object(y.jsx)("footer",{className:"footer",children:Object(y.jsx)("div",{className:"container container--vertical-middle",children:Object(y.jsxs)("div",{className:"footer__items",children:[Object(y.jsx)("div",{className:"footer__item",children:Object(y.jsx)(he,{})}),Object(y.jsx)("div",{className:"footer__item",children:Object(y.jsx)("div",{className:"footer__links",children:_e.map((function(e){var t=e.pathTo,c=e.title;return Object(y.jsx)(s.b,{to:t,className:"footer__link",children:c},c)}))})}),Object(y.jsx)("div",{className:"footer__item",children:Object(y.jsx)(pe,{})})]})})})}),fe=(c(55),c(56),function(e){return e.map((function(e){return e.quantity})).reduce((function(e,t){return e+t}),0)}),xe=function(){var e=Object(i.m)().pathname,t=Object(d.useContext)(S).cartItems,c=fe(t);return Object(y.jsx)("div",{className:"cart",children:Object(y.jsx)(s.b,{to:"cart",className:x()("cart__link",{"cart__link--active":"/cart"===e,"cart__link--contain":c>0}),children:!!c&&Object(y.jsx)("div",{className:"cart__linkValue",children:c})})})},ve=(c(57),function(){var e=Object(i.m)().pathname,t=Object(d.useContext)(S).favoriteItems;return Object(y.jsx)("div",{className:"favorites",children:Object(y.jsx)(s.b,{to:"favorites",className:x()("favorites__link",{"favorites__link--active":"/favorites"===e,"favorites__link--contain":!!t.length}),children:!!t.length&&Object(y.jsx)("div",{className:"favorites__linkValue",children:t.length})})})}),Ne=(c(58),function(e){var t=e.to,c=e.text;return Object(y.jsx)(s.c,{to:t,className:function(e){var t=e.isActive;return x()("nav__list__link",{"nav__list__link--active":t})},children:c})}),ge=(c(59),function(e){var t=e.setIsNav,c=e.isNav;return Object(y.jsx)("button",{type:"button",className:"btn",onClick:function(){return t((function(e){return!e}))},children:Object(y.jsx)("div",{className:c?"btn__burgerClose":"btn__burger"})})}),ye=function(){var e=Object(d.useState)(!1),t=Object(l.a)(e,2),c=t[0],a=t[1],n=Object(i.m)();return Object(d.useEffect)((function(){a(!1)}),[n]),Object(y.jsxs)("nav",{className:"nav",children:[Object(y.jsx)(ge,{setIsNav:a,isNav:c}),Object(y.jsx)("ul",{className:x()("nav__list",{"nav__list--active":c}),children:F.map((function(e){var t=e.pathTo,c=e.title;return Object(y.jsx)("li",{className:"nav__listItem",children:Object(y.jsx)(Ne,{to:t,text:c})},c)}))})]})},Ce=c(28),Se=c.n(Ce);function Ie(e,t){for(var c=new URLSearchParams(t),a=function(){var e=Object(l.a)(s[n],2),t=e[0],a=e[1];null===a?c.delete(t):Array.isArray(a)?(c.delete(t),a.forEach((function(e){return c.append(t,e.toString())}))):c.set(t,a.toString())},n=0,s=Object.entries(e);n<s.length;n++)a();return c.toString()}c(61);var we=function(){var e=Object(s.d)(),t=Object(l.a)(e,2),c=t[0],a=t[1],n=c.get("query")||"",r=Object(d.useState)(n),o=Object(l.a)(r,2),j=o[0],u=o[1],b=Object(i.m)().pathname,m="Search in ".concat(b.slice(1)),h=Se()((function(e){a(Ie({query:e||null},c))}),500);return Object(y.jsx)("div",{className:"search",children:Object(y.jsx)("form",{className:"search__form",onSubmit:function(e){e.preventDefault()},children:Object(y.jsx)("div",{className:"search__control control",children:Object(y.jsxs)("label",{children:[Object(y.jsx)("input",{type:"text",className:"control__input",placeholder:m,value:j,onChange:function(e){var t=e.target.value;u(t),h(t)}}),Object(y.jsx)("span",{className:"control__icons control__icons--search",style:{pointerEvents:"all"},children:j.length>0?Object(y.jsx)("button",{"aria-label":"clear search","data-cy":"searchDelete",type:"button",className:"control__delete",onClick:function(){a(Ie({query:null},c)),u("")},children:Object(y.jsx)("span",{className:"control__icon control__icon--deleteIcon"})}):Object(y.jsx)("i",{className:"control__icon control__icon--searchLoop"})})]})})})})},ke=function(){var e=Object(i.m)().pathname,t="/cart"!==e,c=["/phones","/tablets","/accessories","/favorites"].includes(e);return Object(y.jsx)("header",{className:"header page__section",children:Object(y.jsxs)("div",{className:"header__content content-header",children:[Object(y.jsxs)("div",{className:" content-header__part content-header__part--left",children:[Object(y.jsx)(he,{}),t&&Object(y.jsx)(ye,{})]}),Object(y.jsxs)("div",{className:" content-header__part content-header__part--right",children:[c&&Object(y.jsx)(we,{}),Object(y.jsx)(ve,{}),Object(y.jsx)(xe,{})]})]})})},Te=function(){return Object(y.jsxs)("div",{className:"App",children:[Object(y.jsx)(ke,{}),Object(y.jsx)("main",{className:"main",children:Object(y.jsx)("div",{className:"container",children:Object(y.jsx)(i.a,{})})}),Object(y.jsx)(Oe,{})]})},Ae=(c(62),function(e){var t=e.product,c=e.quantity,a=void 0===c?1:c,n=e.id,s=e.discount,i=void 0===s||s,r=t.image,l=t.price,o=t.fullPrice,j=t.name,u=Object(d.useContext)(I),b=Object(d.useContext)(S).cartItems,m=function(e){u({type:"UPDATE_QUANTITY",payload:b.map((function(t){return t.id===n?Object(v.a)(Object(v.a)({},t),{},{quantity:"increase"===e?t.quantity+1:t.quantity-1}):t}))})},h=(i?l:o)*a;return Object(y.jsxs)("div",{className:"cartItem",children:[Object(y.jsxs)("div",{className:"cartItem__block",children:[Object(y.jsx)("button",{className:"cartItem__buttonRemove",type:"button","aria-label":"remove","data-cy":"cartDeleteButton",onClick:function(){return e=n,void u({type:"REMOVE_FROM_CART",payload:b.filter((function(t){return t.id!==e}))});var e}}),Object(y.jsx)("div",{className:"cartItem__imgContainer",children:Object(y.jsx)("img",{src:"_new/".concat(r),alt:"",className:"cartItem__img"})}),Object(y.jsx)("p",{className:"cartItem__title",children:j})]}),Object(y.jsxs)("div",{className:"cartItem__block cartItem__block--next",children:[Object(y.jsxs)("div",{className:"cartItem__buttons",children:[Object(y.jsx)("button",{className:"cartItem__button cartItem__button--decrease",type:"button","aria-label":"decrease",disabled:1===a,onClick:function(){return m("decrease")}}),Object(y.jsx)("span",{children:a}),Object(y.jsx)("button",{className:"cartItem__button cartItem__button--increase",type:"button","aria-label":"increase",onClick:function(){return m("increase")}})]}),Object(y.jsx)("div",{className:"cartItem__price",children:"$".concat(h)})]})]})}),Pe=(c(63),function(){var e=Object(d.useContext)(S).cartItems;return Object(y.jsx)("ul",{className:"cartItems__list",children:e.map((function(e){return Object(y.jsx)("li",{className:"cartItems__listItem",children:Object(y.jsx)(Ae,{id:e.id,product:e.product,quantity:e.quantity,discount:e.discount})},e.id)}))})}),De=(c(64),function(){var e=Object(d.useContext)(S),t=e.cartItems,c=e.totalCost,a=Object(d.useContext)(I),n=Object(d.useState)(!1),s=Object(l.a)(n,2),i=s[0],r=s[1],o=fe(t);return Object(d.useEffect)((function(){!function(){var e=t.map((function(e){var t=e.product,c=t.price,a=t.fullPrice;return(e.discount?c:a)*e.quantity})).reduce((function(e,t){return e+t}),0);a({type:"UPDATE_PRICE",payload:e})}()}),[t]),Object(d.useEffect)((function(){var e=setTimeout((function(){r(!1)}),3e3);return function(){clearTimeout(e)}}),[i]),Object(y.jsx)("div",{className:"cartPage__total totalCart",children:Object(y.jsxs)("div",{className:"totalCart__container",children:[Object(y.jsx)("h1",{className:"totalCart__price",children:"$".concat(c)}),Object(y.jsx)("h4",{className:"totalCart__subtitle",children:"Total for ".concat(o," items")}),Object(y.jsx)("span",{className:"totalCart__line"}),i?Object(y.jsx)("div",{className:"totalCart__message",children:"We are sorry but this feature is not implemented yet"}):Object(y.jsx)("button",{className:"totalCart__btn",type:"button",onClick:function(){return r(!0)},children:"Checkout"})]})})}),Ee=(c(65),function(){var e=Object(d.useContext)(S).cartItems;return Object(y.jsxs)("section",{className:"cartPage",children:[Object(y.jsx)("div",{className:"cartPage__backLink",children:Object(y.jsx)(de,{})}),Object(y.jsx)("h1",{className:"cartPage__title",children:"Cart"}),e.length?Object(y.jsxs)("div",{className:"cartPage__content",children:[Object(y.jsx)(Pe,{}),Object(y.jsx)(De,{})]}):Object(y.jsx)("h1",{children:"Your cart is empty"})]})}),Re=(c(66),function(){var e=Object(d.useContext)(S).favoriteItems,t=Object(s.d)(),c=Object(l.a)(t,1)[0].get("query"),a=ce(e,c),n=c&&!a.length;return Object(y.jsxs)("section",{className:"favoritesPage",children:[Object(y.jsx)("div",{className:"favoritesPage__breadcrumbs",children:Object(y.jsx)(te,{page:"Favorites"})}),Object(y.jsx)("h1",{className:"favoritesPage__title",children:"Favorites"}),!e.length&&Object(y.jsx)("h2",{children:"Favorites is Empty now"}),a.length?Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)("h4",{className:"favoritesPage__subtitle",children:"".concat(a.length," items")}),Object(y.jsx)(Z,{data:a})]}):n&&Object(y.jsx)(ne,{})]})}),Le=function(){return Object(y.jsx)(w,{children:Object(y.jsx)(s.a,{children:Object(y.jsx)(i.d,{children:Object(y.jsxs)(i.b,{path:"/",element:Object(y.jsx)(Te,{}),children:[Object(y.jsx)(i.b,{index:!0,element:Object(y.jsx)($,{})}),Object(y.jsxs)(i.b,{path:"phones",children:[Object(y.jsx)(i.b,{index:!0,element:Object(y.jsx)(se,{})}),Object(y.jsx)(i.b,{path:":phoneId",element:Object(y.jsx)(me,{})})]}),Object(y.jsx)(i.b,{path:"tablets",element:Object(y.jsx)(ie,{})}),Object(y.jsx)(i.b,{path:"accessories",element:Object(y.jsx)(re,{})}),Object(y.jsx)(i.b,{path:"cart",element:Object(y.jsx)(Ee,{})}),Object(y.jsx)(i.b,{path:"favorites",element:Object(y.jsx)(Re,{})}),Object(y.jsx)(i.b,{path:"*",element:Object(y.jsx)("p",{children:"Page not found"})})]})})})})};n.a.render(Object(y.jsx)(Le,{}),document.getElementById("root"))}]),[[67,1,2]]]);
//# sourceMappingURL=main.d668cea8.chunk.js.map