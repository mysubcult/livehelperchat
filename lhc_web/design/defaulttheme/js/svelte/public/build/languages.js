import{c as e,S as t,i as n,f as l,s as a,a as o,e as s,b as c,n as i,d as r,g as d,o as u,h as g,j as p,k as b,t as m,l as f,m as h,p as _,q as w,r as v,u as x,v as y,w as k,x as $,y as C,z as B,A as j,B as O,C as Q,D as E,E as I,F as A,G as D,H as W,I as L}from"./i18n.RPKIGFjc.js";function N(e,t,n){const l=e.slice();return l[9]=t[n],l[11]=n,l}function S(e){let t,n=g(e[2][e[0]]),l=[];for(let t=0;t<n.length;t+=1)l[t]=M(N(e,n,t));return{c(){for(let e=0;e<l.length;e+=1)l[e].c();t=s()},m(e,n){for(let t=0;t<l.length;t+=1)l[t]&&l[t].m(e,n);c(e,t,n)},p(e,a){if(21&a){let o;for(n=g(e[2][e[0]]),o=0;o<n.length;o+=1){const s=N(e,n,o);l[o]?l[o].p(s,a):(l[o]=M(s),l[o].c(),l[o].m(t.parentNode,t))}for(;o<l.length;o+=1)l[o].d(1);l.length=n.length}},d(e){e&&r(t),p(l,e)}}}function M(e){let t,n,l,a,o,s,i,d,u=e[4](e[9])+"";return{c(){t=b("li"),n=b("a"),l=b("i"),l.textContent="",a=m(" ["),o=m(u),s=m("]"),f(l,"class","material-icons me-0"),f(n,"class","nav-link"),f(n,"href",i="#lang-"+e[0]+"-"+e[11]),f(n,"aria-controls",d="lang-"+e[0]+"-"+e[11]),f(n,"role","tab"),f(n,"data-bs-toggle","tab"),f(t,"class","nav-item"),f(t,"role","presentation")},m(e,i){c(e,t,i),h(t,n),h(n,l),h(n,a),h(n,o),h(n,s)},p(e,t){5&t&&u!==(u=e[4](e[9])+"")&&_(o,u),1&t&&i!==(i="#lang-"+e[0]+"-"+e[11])&&f(n,"href",i),1&t&&d!==(d="lang-"+e[0]+"-"+e[11])&&f(n,"aria-controls",d)},d(e){e&&r(t)}}}function T(e){let t,n,l,a,o,s,i=e[3]("user_account.add_translation")+"";return{c(){t=b("li"),n=b("a"),l=b("i"),l.textContent="",a=m(i),f(l,"class","material-icons"),f(n,"class","nav-link"),f(n,"href","#addlanguage"),f(t,"class","nav-item")},m(i,r){c(i,t,r),h(t,n),h(n,l),h(n,a),o||(s=w(n,"click",e[5]),o=!0)},p(e,t){8&t&&i!==(i=e[3]("user_account.add_translation")+"")&&_(a,i)},d(e){e&&r(t),o=!1,s()}}}function z(e){let t,n,l=e[2][e[0]]&&S(e),a=!e[1]&&T(e);return{c(){l&&l.c(),t=o(),a&&a.c(),n=s()},m(e,o){l&&l.m(e,o),c(e,t,o),a&&a.m(e,o),c(e,n,o)},p(e,[o]){e[2][e[0]]?l?l.p(e,o):(l=S(e),l.c(),l.m(t.parentNode,t)):l&&(l.d(1),l=null),e[1]?a&&(a.d(1),a=null):a?a.p(e,o):(a=T(e),a.c(),a.m(n.parentNode,n))},i:i,o:i,d(e){e&&(r(t),r(n)),l&&l.d(e),a&&a.d(e)}}}function F(e,t,n){let l,a;d(e,v,(e=>n(2,l=e))),d(e,x,(e=>n(3,a=e)));let{init_langauges:o=-1}=t,{identifier:s="identifier"}=t,{disable_new:c=!1}=t,i=[];return u((()=>{o>-1?y(v,l[s]=void 0!==window[s+o]?window[s+o]:[],l):l[s]||y(v,l[s]=[],l),window.replaceDepartments&&(i=window.replaceDepartments)})),e.$$set=e=>{"init_langauges"in e&&n(6,o=e.init_langauges),"identifier"in e&&n(0,s=e.identifier),"disable_new"in e&&n(1,c=e.disable_new)},[s,c,l,a,function(e){var t=[];return e.languages.forEach((function(e){2==e.length&&t.push(e)})),e.dep_ids&&e.dep_ids.forEach((function(e){t.push(i[e]?i[e]:e)})),t.length>0?t.join(", "):e.languages.join(", ")},function(){v.update((e=>(e[s].push({message:"",fallback_message:"",languages:[],dialect:{},dep_ids:[]}),e))),setTimeout((function(){jQuery("#"+s+"-tabs > lhc-multilanguage-tab > li:eq("+(l[s].length-1)+") a").tab("show")}),250)},o]}class R extends t{constructor(e){super(),n(this,e,F,z,a,{init_langauges:6,identifier:0,disable_new:1})}get init_langauges(){return this.$$.ctx[6]}set init_langauges(e){this.$$set({init_langauges:e}),l()}get identifier(){return this.$$.ctx[0]}set identifier(e){this.$$set({identifier:e}),l()}get disable_new(){return this.$$.ctx[1]}set disable_new(e){this.$$set({disable_new:e}),l()}}function q(e,t,n){const l=e.slice();return l[5]=t[n],l[7]=n,l}function V(e,t,n){const l=e.slice();return l[8]=t[n],l[7]=n,l}function H(e,t){let n,l,a,s,i,d=t[1]("bbcode.font_size")+"",u=10+t[7]+"";return{key:e,first:null,c(){n=b("a"),l=m(d),a=o(),s=m(u),i=m("pt"),f(n,"class","dropdown-item"),f(n,"href","#"),f(n,"data-selector",t[0]),f(n,"onclick","return lhinst.handleBBCode($(this))"),f(n,"data-bbcode-end","fs"),f(n,"data-bbcode","fs"+(10+t[7])),k(n,"font-size",10+t[7]+"pt"),this.first=n},m(e,t){c(e,n,t),h(n,l),h(n,a),h(n,s),h(n,i)},p(e,a){t=e,2&a&&d!==(d=t[1]("bbcode.font_size")+"")&&_(l,d),1&a&&f(n,"data-selector",t[0])},d(e){e&&r(n)}}}function P(e){let t;return{c(){t=b("div"),f(t,"class","float-start ms-1 mb-1 color-item"),f(t,"data-color",e[5]),k(t,"background-color","#"+e[5])},m(e,n){c(e,t,n)},p:i,d(e){e&&r(t)}}}function J(e){let t,n,l,a,s,d,u,v,x,y,j,O,Q,E,I,A,D,W,L,N,S,M,T,z,F,R,J,U,K,X,Y,Z,ee,te,ne,le,ae,oe,se,ce,ie,re,de,ue,ge,pe,be,me,fe,he,_e,we,ve,xe,ye,ke,$e,Ce,Be,je,Oe,Qe,Ee,Ie,Ae,De,We,Le=e[1]("bbcode.font_size")+"",Ne=[],Se=new Map,Me=e[1]("bbcode.color")+"",Te=e[1]("bbcode.apply")+"",ze=g(Array(7));const Fe=e=>e[7];for(let t=0;t<ze.length;t+=1){let n=V(e,ze,t),l=Fe(n);Se.set(l,Ne[t]=H(l,n))}let Re=g(["c00000","cf4c6d","ff0000","ffc000","ffff00","89c748","00b050","48c3c7","00b0f0","0070c0","002060","5c2585"]),qe=[];for(let t=0;t<12;t+=1)qe[t]=P(q(e,Re,t));return{c(){t=b("div"),n=b("div"),l=b("button"),a=b("strike"),a.textContent="S",d=o(),u=b("button"),v=m('"'),y=o(),j=b("button"),O=b("i"),O.textContent="ondemand_video",E=o(),I=b("button"),A=b("i"),A.textContent="code",W=o(),L=b("button"),N=b("b"),N.textContent="B",M=o(),T=b("button"),z=b("i"),z.textContent="I",R=o(),J=b("button"),U=b("u"),U.textContent="U",X=o(),Y=b("div"),Z=b("div"),ee=b("button"),te=m(Le),ne=o(),le=b("div");for(let e=0;e<Ne.length;e+=1)Ne[e].c();ae=o(),oe=b("div"),se=b("button"),ce=m(Me),ie=o(),re=b("div"),de=b("div"),ge=o(),pe=b("div"),be=b("div");for(let e=0;e<12;e+=1)qe[e].c();me=o(),fe=b("div"),he=b("button"),_e=m(Te),xe=o(),ye=b("div"),ke=b("button"),$e=b("i"),$e.textContent="attach_file",Be=o(),je=b("button"),Oe=b("i"),Oe.textContent="",Qe=o(),Ee=b("button"),Ie=b("i"),Ie.textContent="visibility",f(l,"type","button"),f(l,"class","btn btn-outline-secondary"),f(l,"data-selector",e[0]),f(l,"data-bbcode","s"),f(l,"onclick","lhinst.handleBBCode(jQuery(this))"),f(l,"title",s=e[1]("bbcode.strike")),f(u,"type","button"),f(u,"class","btn btn-outline-secondary"),f(u,"data-selector",e[0]),f(u,"data-bbcode","quote"),f(u,"onclick","lhinst.handleBBCode(jQuery(this))"),f(u,"title",x=e[1]("bbcode.quote")),f(O,"class","material-icons me-0"),f(j,"type","button"),f(j,"class","btn btn-outline-secondary"),f(j,"data-selector",e[0]),f(j,"data-bbcode","youtube"),f(j,"onclick","lhinst.handleBBCode(jQuery(this))"),f(j,"title",Q=e[1]("bbcode.youtube")),f(A,"class","material-icons me-0"),f(I,"type","button"),f(I,"class","btn btn-outline-secondary"),f(I,"data-selector",e[0]),f(I,"data-bbcode","html"),f(I,"onclick","lhinst.handleBBCode(jQuery(this))"),f(I,"title",D=e[1]("bbcode.html_code")),f(L,"type","button"),f(L,"class","btn btn-outline-secondary"),f(L,"data-selector",e[0]),f(L,"data-bbcode","b"),f(L,"onclick","lhinst.handleBBCode(jQuery(this))"),f(L,"title",S=e[1]("bbcode.bold")),f(T,"type","button"),f(T,"class","btn btn-outline-secondary"),f(T,"data-selector",e[0]),f(T,"data-bbcode","i"),f(T,"onclick","lhinst.handleBBCode(jQuery(this))"),f(T,"title",F=e[1]("bbcode.italic")),f(J,"type","button"),f(J,"class","btn btn-outline-secondary"),f(J,"data-selector",e[0]),f(J,"data-bbcode","u"),f(J,"onclick","lhinst.handleBBCode(jQuery(this))"),f(J,"title",K=e[1]("bbcode.underline")),f(n,"class","btn-group btn-group-sm me-2"),f(n,"role","group"),f(ee,"class","btn btn-outline-secondary dropdown-toggle btn-sm"),f(ee,"type","button"),f(ee,"data-bs-toggle","dropdown"),f(ee,"aria-haspopup","true"),f(ee,"aria-expanded","false"),f(le,"class","dropdown-menu"),f(Z,"class","dropdown me-2"),f(se,"class","btn btn-outline-secondary dropdown-toggle btn-sm"),f(se,"type","button"),f(se,"data-bs-toggle","dropdown"),f(se,"aria-haspopup","true"),f(se,"aria-expanded","false"),f(de,"id",ue="color-picker-chat-"+G(e[0])),f(be,"class","col-12 text-center ms-2 pb-0 pe-2"),f(pe,"class","row"),f(he,"class","btn btn-outline-secondary w-100 btn-xs"),f(he,"type","button"),f(he,"id",we="color-apply-"+G(e[0])),f(he,"data-bbcode","color=00FF00"),f(he,"data-selector",e[0]),f(he,"onclick","lhinst.handleBBCode($(this))"),f(he,"data-bbcode-end","color"),f(fe,"class","pe-2 ps-2"),f(re,"class",ve="dropdown-menu keepopen downdown-menu-color-"+G(e[0])),k(re,"width","128px"),f(oe,"class","dropdown"),f(Y,"class","btn-group btn-group-sm me-2"),f(Y,"role","group"),f($e,"class","material-icons me-0"),f(ke,"type","button"),f(ke,"class","btn btn-outline-secondary"),f(ke,"data-selector",e[0]),f(ke,"title",Ce=e[1]("bbcode.insert_image_or_file")),f(Oe,"class","material-icons me-0"),f(je,"type","button"),f(je,"class","btn btn-outline-secondary"),f(je,"data-selector",e[0]),f(Ie,"class","material-icons me-0"),f(Ee,"type","button"),f(Ee,"class","btn btn-outline-secondary"),f(Ee,"data-selector",e[0]),f(Ee,"title",Ae=e[1]("bbcode.preview")),f(ye,"class","btn-group btn-group-sm me-2"),f(ye,"role","group"),f(t,"class","btn-toolbar pb-2")},m(o,s){c(o,t,s),h(t,n),h(n,l),h(l,a),h(n,d),h(n,u),h(u,v),h(n,y),h(n,j),h(j,O),h(n,E),h(n,I),h(I,A),h(n,W),h(n,L),h(L,N),h(n,M),h(n,T),h(T,z),h(n,R),h(n,J),h(J,U),h(t,X),h(t,Y),h(Y,Z),h(Z,ee),h(ee,te),h(Z,ne),h(Z,le);for(let e=0;e<Ne.length;e+=1)Ne[e]&&Ne[e].m(le,null);h(Y,ae),h(Y,oe),h(oe,se),h(se,ce),h(oe,ie),h(oe,re),h(re,de),h(re,ge),h(re,pe),h(pe,be);for(let e=0;e<12;e+=1)qe[e]&&qe[e].m(be,null);h(re,me),h(re,fe),h(fe,he),h(he,_e),h(t,xe),h(t,ye),h(ye,ke),h(ke,$e),h(ye,Be),h(ye,je),h(je,Oe),h(ye,Qe),h(ye,Ee),h(Ee,Ie),De||(We=[w(ke,"click",e[2]),w(je,"click",e[3]),w(Ee,"click",e[4])],De=!0)},p(e,[t]){1&t&&f(l,"data-selector",e[0]),2&t&&s!==(s=e[1]("bbcode.strike"))&&f(l,"title",s),1&t&&f(u,"data-selector",e[0]),2&t&&x!==(x=e[1]("bbcode.quote"))&&f(u,"title",x),1&t&&f(j,"data-selector",e[0]),2&t&&Q!==(Q=e[1]("bbcode.youtube"))&&f(j,"title",Q),1&t&&f(I,"data-selector",e[0]),2&t&&D!==(D=e[1]("bbcode.html_code"))&&f(I,"title",D),1&t&&f(L,"data-selector",e[0]),2&t&&S!==(S=e[1]("bbcode.bold"))&&f(L,"title",S),1&t&&f(T,"data-selector",e[0]),2&t&&F!==(F=e[1]("bbcode.italic"))&&f(T,"title",F),1&t&&f(J,"data-selector",e[0]),2&t&&K!==(K=e[1]("bbcode.underline"))&&f(J,"title",K),2&t&&Le!==(Le=e[1]("bbcode.font_size")+"")&&_(te,Le),3&t&&(ze=g(Array(7)),Ne=$(Ne,t,Fe,1,e,ze,Se,le,B,H,null,V)),2&t&&Me!==(Me=e[1]("bbcode.color")+"")&&_(ce,Me),1&t&&ue!==(ue="color-picker-chat-"+G(e[0]))&&f(de,"id",ue),2&t&&Te!==(Te=e[1]("bbcode.apply")+"")&&_(_e,Te),1&t&&we!==(we="color-apply-"+G(e[0]))&&f(he,"id",we),1&t&&f(he,"data-selector",e[0]),1&t&&ve!==(ve="dropdown-menu keepopen downdown-menu-color-"+G(e[0]))&&f(re,"class",ve),1&t&&f(ke,"data-selector",e[0]),2&t&&Ce!==(Ce=e[1]("bbcode.insert_image_or_file"))&&f(ke,"title",Ce),1&t&&f(je,"data-selector",e[0]),1&t&&f(Ee,"data-selector",e[0]),2&t&&Ae!==(Ae=e[1]("bbcode.preview"))&&f(Ee,"title",Ae)},i:i,o:i,d(e){e&&r(t);for(let e=0;e<Ne.length;e+=1)Ne[e].d();p(qe,e),De=!1,C(We)}}}function G(e){for(var t=0,n=0;n<e.length;n++){t=(t<<5)-t+e.charCodeAt(n),t&=t}return t}function U(e,t,n){let l;d(e,x,(e=>n(1,l=e)));let{selector:a=""}=t;u((()=>{var e=new ColorPicker({dom:document.getElementById("color-picker-chat-"+G(a)),value:"#0F0"});e.addEventListener("change",(function(t){jQuery("#color-apply-"+G(a)).attr("data-bbcode","color="+e.getValue("hex"))})),jQuery(".downdown-menu-color-"+G(a)).on("click",(function(e){if(jQuery(this).parent().is(".show")){var t=jQuery(e.target);return!t.hasClass("keepopen")&&!t.parents(".keepopen").length}})),jQuery(".downdown-menu-color-"+G(a)+" .color-item").on("click",(function(){e.setValue(jQuery(this).attr("data-color"))}))}));return e.$$set=e=>{"selector"in e&&n(0,a=e.selector)},[a,l,e=>{window.lhcSelector=a,lhc.revealModal({hidecallback(){jQuery(".embed-into").removeClass("embed-into")},showcallback(){jQuery(window.lhcSelector).addClass("embed-into")},title:l("bbcode.insert_image_or_file"),iframe:!0,height:500,url:WWW_DIR_JAVASCRIPT+"file/attatchfileimg"})},e=>{window.lhcSelector=a,lhc.revealModal({url:WWW_DIR_JAVASCRIPT+"/chat/bbcodeinsert/0/(mode)/editor"})},e=>lhc.revealModal({loadmethod:"post",datapost:{msg:jQuery(a).val()},url:WWW_DIR_JAVASCRIPT+"chat/previewmessage"})]}customElements.define("lhc-multilanguage-tab",e(R,{init_langauges:{},identifier:{},disable_new:{type:"Boolean"}},[],[],!1));class K extends t{constructor(e){super(),n(this,e,U,J,a,{selector:0})}get selector(){return this.$$.ctx[0]}set selector(e){this.$$set({selector:e}),l()}}function X(e,t,n){const l=e.slice();return l[10]=t[n],l}function Y(e,t,n){const l=e.slice();return l[13]=t[n][0],l[14]=t[n][1],l}function Z(e){let t,n,l,a,s,i,d,u,g=e[14]+"";function p(...t){return e[7](e[13],...t)}return{c(){t=b("li"),n=b("label"),l=b("input"),s=m(g),i=o(),f(l,"class","me-1"),f(l,"name","selector-department_id-0"),f(l,"type","radio"),l.value=a=e[13],f(t,"data-stoppropagation","true"),f(t,"class","search-option-item")},m(e,a){c(e,t,a),h(t,n),h(n,l),h(n,s),h(t,i),d||(u=w(l,"change",p),d=!0)},p(t,n){e=t,4&n&&a!==(a=e[13])&&(l.value=a),4&n&&g!==(g=e[14]+"")&&_(s,g)},d(e){e&&r(t),d=!1,u()}}}function ee(e){let t,n=""==e[3]||e[14].includes(e[3]),l=n&&Z(e);return{c(){l&&l.c(),t=s()},m(e,n){l&&l.m(e,n),c(e,t,n)},p(e,a){12&a&&(n=""==e[3]||e[14].includes(e[3])),n?l?l.p(e,a):(l=Z(e),l.c(),l.m(t.parentNode,t)):l&&(l.d(1),l=null)},d(e){e&&r(t),l&&l.d(e)}}}function te(e){let t,n=g(e[0]),l=[];for(let t=0;t<n.length;t+=1)l[t]=ne(X(e,n,t));return{c(){for(let e=0;e<l.length;e+=1)l[e].c();t=s()},m(e,n){for(let t=0;t<l.length;t+=1)l[t]&&l[t].m(e,n);c(e,t,n)},p(e,a){if(39&a){let o;for(n=g(e[0]),o=0;o<n.length;o+=1){const s=X(e,n,o);l[o]?l[o].p(s,a):(l[o]=ne(s),l[o].c(),l[o].m(t.parentNode,t))}for(;o<l.length;o+=1)l[o].d(1);l.length=n.length}},d(e){e&&r(t),p(l,e)}}}function ne(e){let t,n,l,a,s,i,d,u,g,p,v,x=(e[2][e[10]]?e[2][e[10]]:e[10])+"";function y(...t){return e[8](e[10],...t)}return{c(){t=b("span"),n=m(x),l=o(),a=b("span"),a.textContent="delete",s=o(),i=b("input"),g=o(),f(a,"class","material-icons text-warning me-0"),f(i,"type","hidden"),f(i,"name",d="dep_ids["+e[1]+"][]"),i.value=u=e[10],f(t,"role","tabpanel"),f(t,"title","Click to remove"),f(t,"class","badge bg-secondary m-1 action-image")},m(e,o){c(e,t,o),h(t,n),h(t,l),h(t,a),h(t,s),h(t,i),h(t,g),p||(v=w(t,"click",y),p=!0)},p(t,l){e=t,5&l&&x!==(x=(e[2][e[10]]?e[2][e[10]]:e[10])+"")&&_(n,x),2&l&&d!==(d="dep_ids["+e[1]+"][]")&&f(i,"name",d),1&l&&u!==(u=e[10])&&(i.value=u)},d(e){e&&r(t),p=!1,v()}}}function le(e){let t,n,l,a,s,d,u,m,_,v,x,y,k,$,C,B,O,Q,E,I,A,D,W,L,N=g(Object.entries(e[2])),S=[];for(let t=0;t<N.length;t+=1)S[t]=ee(Y(e,N,t));let M=e[0]&&te(e);return{c(){t=b("div"),n=b("div"),n.innerHTML="<label>Department filter</label>",l=o(),a=b("div"),s=b("div"),d=b("div"),u=b("ul"),m=b("li"),_=b("button"),_.textContent="Choose department",v=o(),x=b("ul"),y=b("li"),k=b("input"),$=o(),C=b("div"),B=o(),O=b("li"),Q=b("ul"),E=b("li"),E.innerHTML='<label><input class="me-1" checked="checked" type="radio" value="0"/>Any</label>',I=o();for(let e=0;e<S.length;e+=1)S[e].c();A=o(),D=b("div"),M&&M.c(),f(n,"class","col-12"),f(_,"type","button"),f(_,"class","btn btn-light btn-block btn-sm dropdown-toggle btn-department-dropdown show"),f(_,"data-bs-toggle","dropdown"),f(_,"aria-expanded","true"),f(k,"type","text"),f(k,"class","form-control input-sm"),f(C,"class","selected-items-filter"),f(y,"class","btn-block-department-filter"),f(E,"data-stoppropagation","true"),f(E,"class","search-option-item font-weight-bold"),f(Q,"class","list-unstyled dropdown-lhc"),f(O,"class","dropdown-result"),f(x,"class","dropdown-menu"),f(x,"role","menu"),f(x,"data-popper-placement","top-start"),f(m,"class","dropdown w-100"),f(u,"class","nav"),f(d,"class","btn-block-department"),f(s,"class","form-group"),f(a,"class","col-4"),f(D,"class","col-8"),f(t,"class","row")},m(o,i){c(o,t,i),h(t,n),h(t,l),h(t,a),h(a,s),h(s,d),h(d,u),h(u,m),h(m,_),h(m,v),h(m,x),h(x,y),h(y,k),j(k,e[3]),h(y,$),h(y,C),h(x,B),h(x,O),h(O,Q),h(Q,E),h(Q,I);for(let e=0;e<S.length;e+=1)S[e]&&S[e].m(Q,null);h(t,A),h(t,D),M&&M.m(D,null),W||(L=w(k,"input",e[6]),W=!0)},p(e,[t]){if(8&t&&k.value!==e[3]&&j(k,e[3]),28&t){let n;for(N=g(Object.entries(e[2])),n=0;n<N.length;n+=1){const l=Y(e,N,n);S[n]?S[n].p(l,t):(S[n]=ee(l),S[n].c(),S[n].m(Q,null))}for(;n<S.length;n+=1)S[n].d(1);S.length=N.length}e[0]?M?M.p(e,t):(M=te(e),M.c(),M.m(D,null)):M&&(M.d(1),M=null)},i:i,o:i,d(e){e&&r(t),p(S,e),M&&M.d(),W=!1,L()}}}function ae(e,t,n){const l=O();let{selected_departments:a=[]}=t,{index_block:o=0}=t,s={},c="";function i(e){-1===a.indexOf(parseInt(e))&&l("department_select",{dep_id:parseInt(e)})}function r(e){l("department_unselect",{dep_id:parseInt(e)})}u((()=>{n(2,s=window.replaceDepartments)}));return e.$$set=e=>{"selected_departments"in e&&n(0,a=e.selected_departments),"index_block"in e&&n(1,o=e.index_block)},[a,o,s,c,i,r,function(){c=this.value,n(3,c)},(e,t)=>{i(e)},(e,t)=>r(e)]}e(K,{selector:{}},[],[],!0);class oe extends t{constructor(e){super(),n(this,e,ae,le,a,{selected_departments:0,index_block:1})}get selected_departments(){return this.$$.ctx[0]}set selected_departments(e){this.$$set({selected_departments:e}),l()}get index_block(){return this.$$.ctx[1]}set index_block(e){this.$$set({index_block:e}),l()}}function se(e,t,n){const l=e.slice();return l[25]=t[n],l[26]=t,l[27]=n,l}function ce(e,t,n){const l=e.slice();return l[28]=t[n],l[29]=t,l[30]=n,l}function ie(e,t,n){const l=e.slice();return l[31]=t[n],l[32]=t,l[33]=n,l}function re(e,t,n){const l=e.slice();return l[34]=t[n],l}function de(e){let t,n,l=g(e[7][e[0]]),a=[];for(let t=0;t<l.length;t+=1)a[t]=ye(se(e,l,t));const o=e=>E(a[e],1,1,(()=>{a[e]=null}));return{c(){for(let e=0;e<a.length;e+=1)a[e].c();t=s()},m(e,l){for(let t=0;t<a.length;t+=1)a[t]&&a[t].m(e,l);c(e,t,l),n=!0},p(e,n){if(16383&n[0]){let s;for(l=g(e[7][e[0]]),s=0;s<l.length;s+=1){const o=se(e,l,s);a[s]?(a[s].p(o,n),Q(a[s],1)):(a[s]=ye(o),a[s].c(),Q(a[s],1),a[s].m(t.parentNode,t))}for(A(),s=l.length;s<a.length;s+=1)o(s);I()}},i(e){if(!n){for(let e=0;e<l.length;e+=1)Q(a[e]);n=!0}},o(e){a=a.filter(Boolean);for(let e=0;e<a.length;e+=1)E(a[e]);n=!1},d(e){e&&r(t),p(a,e)}}}function ue(e){let t,n,l,a;function o(...t){return e[15](e[25],...t)}return{c(){t=b("div"),n=b("a"),n.innerHTML='<i class="material-icons me-0"></i>',f(n,"class","btn btn-sm btn-danger d-block"),f(t,"class","col-1")},m(e,s){c(e,t,s),h(t,n),l||(a=w(n,"click",o),l=!0)},p(t,n){e=t},d(e){e&&r(t),l=!1,a()}}}function ge(e){let t,n=g(e[4]),l=[];for(let t=0;t<n.length;t+=1)l[t]=me(ie(e,n,t));return{c(){for(let e=0;e<l.length;e+=1)l[e].c();t=s()},m(e,n){for(let t=0;t<l.length;t+=1)l[t]&&l[t].m(e,n);c(e,t,n)},p(e,a){if(3541&a[0]){let o;for(n=g(e[4]),o=0;o<n.length;o+=1){const s=ie(e,n,o);l[o]?l[o].p(s,a):(l[o]=me(s),l[o].c(),l[o].m(t.parentNode,t))}for(;o<l.length;o+=1)l[o].d(1);l.length=n.length}},d(e){e&&r(t),p(l,e)}}}function pe(e){let t,n,l,a,s,i,d,u,g,p,v,x,y,k,$=e[34].lang_name+"",C=e[34].short_code+"";function B(...t){return e[21](e[25],e[34],...t)}return{c(){t=b("br"),n=o(),l=b("label"),a=b("input"),u=o(),g=m($),p=m(" ["),v=m(C),x=m("]"),f(a,"name",s=e[2]?e[2]:"languages["+e[27]+"][]"),f(a,"type","checkbox"),a.value=i=e[34].short_code,a.checked=d=e[25].languages.indexOf(e[34].short_code)>-1,f(l,"class","fs12 mb-0")},m(e,o){c(e,t,o),c(e,n,o),c(e,l,o),h(l,a),h(l,u),h(l,g),h(l,p),h(l,v),h(l,x),y||(k=w(a,"click",B),y=!0)},p(t,n){e=t,4&n[0]&&s!==(s=e[2]?e[2]:"languages["+e[27]+"][]")&&f(a,"name",s),16&n[0]&&i!==(i=e[34].short_code)&&(a.value=i),145&n[0]&&d!==(d=e[25].languages.indexOf(e[34].short_code)>-1)&&(a.checked=d),16&n[0]&&$!==($=e[34].lang_name+"")&&_(g,$),16&n[0]&&C!==(C=e[34].short_code+"")&&_(v,C)},d(e){e&&(r(t),r(n),r(l)),y=!1,k()}}}function be(e){let t,n,l,a,s,i,d,u,g,p,v,x,y,$,C,B,j=e[34].lang_name+"",O=e[34].lang_code+"";function Q(...t){return e[20](e[25],e[34],...t)}let E=e[34].short_code&&pe(e);return{c(){t=b("div"),n=b("label"),l=b("input"),d=o(),u=m(j),g=m(" ["),p=m(O),v=m("]"),x=o(),E&&E.c(),y=o(),$=b("br"),f(l,"name",a=e[2]?e[2]:"languages["+e[27]+"][]"),f(l,"type","checkbox"),l.value=s=e[34].lang_code,l.checked=i=e[25].languages.indexOf(e[34].lang_code)>-1,f(n,"class","fs12 mb-0"),k(t,"display",e[31].show_dialect?"block":"none")},m(e,a){c(e,t,a),h(t,n),h(n,l),h(n,d),h(n,u),h(n,g),h(n,p),h(n,v),h(t,x),E&&E.m(t,null),h(t,y),h(t,$),C||(B=w(l,"click",Q),C=!0)},p(n,o){e=n,4&o[0]&&a!==(a=e[2]?e[2]:"languages["+e[27]+"][]")&&f(l,"name",a),16&o[0]&&s!==(s=e[34].lang_code)&&(l.value=s),145&o[0]&&i!==(i=e[25].languages.indexOf(e[34].lang_code)>-1)&&(l.checked=i),16&o[0]&&j!==(j=e[34].lang_name+"")&&_(u,j),16&o[0]&&O!==(O=e[34].lang_code+"")&&_(p,O),e[34].short_code?E?E.p(e,o):(E=pe(e),E.c(),E.m(t,y)):E&&(E.d(1),E=null),16&o[0]&&k(t,"display",e[31].show_dialect?"block":"none")},d(e){e&&r(t),E&&E.d(),C=!1,B()}}}function me(e){let t,n,l,a,s,i,d,u,v,x,y,$,B,O,Q=e[31].lang.name+"";function E(){e[17].call(a,e[31],e[26],e[27])}function I(...t){return e[18](e[25],e[31],...t)}function A(...t){return e[19](e[31],e[32],e[33],...t)}let D=g(e[31].items),W=[];for(let t=0;t<D.length;t+=1)W[t]=be(re(e,D,t));return{c(){t=b("div"),n=b("div"),l=b("label"),a=b("input"),s=o(),i=m(Q),d=o(),u=b("a"),v=b("i"),v.textContent="list",y=o();for(let e=0;e<W.length;e+=1)W[e].c();$=o(),f(a,"type","checkbox"),a.__value="on",j(a,a.__value),f(l,"class","fs12 mb-0"),f(v,"class","material-icons me-0"),f(u,"title",x=e[8]("user_account.see_all_variations")),f(t,"class","col-3"),k(t,"display","*"==e[6]||e[25].dialect&&e[25].dialect[e[31].lang.id]&&""==e[6]||""!=e[6]&&!0===e[31].lang.name.toLowerCase().includes(e[6].toLowerCase())?"block":"none")},m(o,r){c(o,t,r),h(t,n),h(n,l),h(l,a),a.checked=e[25].dialect[e[31].lang.id],h(l,s),h(l,i),h(n,d),h(n,u),h(u,v),h(t,y);for(let e=0;e<W.length;e+=1)W[e]&&W[e].m(t,null);h(t,$),B||(O=[w(a,"change",E),w(a,"change",I),w(v,"click",A)],B=!0)},p(n,l){if(e=n,145&l[0]&&(a.checked=e[25].dialect[e[31].lang.id]),16&l[0]&&Q!==(Q=e[31].lang.name+"")&&_(i,Q),256&l[0]&&x!==(x=e[8]("user_account.see_all_variations"))&&f(u,"title",x),2197&l[0]){let n;for(D=g(e[31].items),n=0;n<D.length;n+=1){const a=re(e,D,n);W[n]?W[n].p(a,l):(W[n]=be(a),W[n].c(),W[n].m(t,$))}for(;n<W.length;n+=1)W[n].d(1);W.length=D.length}209&l[0]&&k(t,"display","*"==e[6]||e[25].dialect&&e[25].dialect[e[31].lang.id]&&""==e[6]||""!=e[6]&&!0===e[31].lang.name.toLowerCase().includes(e[6].toLowerCase())?"block":"none")},d(e){e&&r(t),p(W,e),B=!1,C(O)}}}function fe(e){let t,n;return t=new oe({props:{index_block:e[27],selected_departments:e[25].dep_ids}}),t.$on("department_select",(function(...t){return e[22](e[25],...t)})),t.$on("department_unselect",(function(...t){return e[23](e[25],...t)})),{c(){D(t.$$.fragment)},m(e,l){W(t,e,l),n=!0},p(n,l){e=n;const a={};129&l[0]&&(a.selected_departments=e[25].dep_ids),t.$set(a)},i(e){n||(Q(t.$$.fragment,e),n=!0)},o(e){E(t.$$.fragment,e),n=!1},d(e){L(t,e)}}}function he(e){let t,n,l,a,s,i,d,u,w,v=e[8]("user_account.messages")+"",x=g(e[5]),y=[];for(let t=0;t<x.length;t+=1)y[t]=xe(ce(e,x,t));const k=e=>E(y[e],1,1,(()=>{y[e]=null}));return{c(){t=b("ul"),n=b("li"),l=b("a"),a=m(v),s=o(),i=b("div"),d=b("div"),u=b("div");for(let e=0;e<y.length;e+=1)y[e].c();f(l,"class","nav-link active"),f(l,"href","#main-extension-lang-"+e[27]),f(l,"aria-controls","main-extension-lang-"+e[27]),f(l,"role","tab"),f(l,"data-bs-toggle","tab"),f(n,"role","presentation"),f(n,"class","nav-item"),f(t,"class","nav nav-pills"),f(t,"role","tablist"),f(u,"class","row"),f(d,"role","tabpanel"),f(d,"class","tab-pane active"),f(d,"id","main-extension-lang-"+e[27]),f(i,"class","tab-content")},m(e,o){c(e,t,o),h(t,n),h(n,l),h(l,a),c(e,s,o),c(e,i,o),h(i,d),h(d,u);for(let e=0;e<y.length;e+=1)y[e]&&y[e].m(u,null);w=!0},p(e,t){if((!w||256&t[0])&&v!==(v=e[8]("user_account.messages")+"")&&_(a,v),161&t[0]){let n;for(x=g(e[5]),n=0;n<x.length;n+=1){const l=ce(e,x,n);y[n]?(y[n].p(l,t),Q(y[n],1)):(y[n]=xe(l),y[n].c(),Q(y[n],1),y[n].m(u,null))}for(A(),n=x.length;n<y.length;n+=1)k(n);I()}},i(e){if(!w){for(let e=0;e<x.length;e+=1)Q(y[e]);w=!0}},o(e){y=y.filter(Boolean);for(let e=0;e<y.length;e+=1)E(y[e]);w=!1},d(e){e&&(r(t),r(s),r(i)),p(y,e)}}}function _e(e){let t,n,l,a,s,i,d,u,g,p,m=e[28].name_literal&&ve(e);function _(){e[24].call(s,e[28],e[26],e[27])}return l=new K({props:{selector:"#"+e[28].name+"-"+e[27]}}),{c(){t=b("div"),m&&m.c(),n=o(),D(l.$$.fragment),a=o(),s=b("textarea"),f(s,"class","form-control"),f(s,"rows","2"),f(s,"id",i=e[28].name+"-"+e[27]),f(s,"name",d=e[28].name+"["+e[27]+"]"),f(t,"class","form-group")},m(o,i){c(o,t,i),m&&m.m(t,null),h(t,n),W(l,t,null),h(t,a),h(t,s),j(s,e[25][e[28].bind_name]),u=!0,g||(p=w(s,"input",_),g=!0)},p(a,o){(e=a)[28].name_literal?m?m.p(e,o):(m=ve(e),m.c(),m.m(t,n)):m&&(m.d(1),m=null);const c={};32&o[0]&&(c.selector="#"+e[28].name+"-"+e[27]),l.$set(c),(!u||32&o[0]&&i!==(i=e[28].name+"-"+e[27]))&&f(s,"id",i),(!u||32&o[0]&&d!==(d=e[28].name+"["+e[27]+"]"))&&f(s,"name",d),161&o[0]&&j(s,e[25][e[28].bind_name])},i(e){u||(Q(l.$$.fragment,e),u=!0)},o(e){E(l.$$.fragment,e),u=!1},d(e){e&&r(t),m&&m.d(),L(l),g=!1,p()}}}function we(e){let t,n,l=e[28].name+"";return{c(){t=b("h4"),n=m(l)},m(e,l){c(e,t,l),h(t,n)},p(e,t){32&t[0]&&l!==(l=e[28].name+"")&&_(n,l)},i:i,o:i,d(e){e&&r(t)}}}function ve(e){let t,n,l=e[28].name_literal+"";return{c(){t=b("label"),n=m(l)},m(e,l){c(e,t,l),h(t,n)},p(e,t){32&t[0]&&l!==(l=e[28].name_literal+"")&&_(n,l)},d(e){e&&r(t)}}}function xe(e){let t,n,l,a,s,i;const d=[we,_e],u=[];function g(e,t){return"header_block"===e[28].type?0:1}return n=g(e),l=u[n]=d[n](e),{c(){t=b("div"),l.c(),a=o(),f(t,"class",s="col-"+(e[28].column?e[28].column:"12"))},m(e,l){c(e,t,l),u[n].m(t,null),h(t,a),i=!0},p(e,o){let c=n;n=g(e),n===c?u[n].p(e,o):(A(),E(u[c],1,1,(()=>{u[c]=null})),I(),l=u[n],l?l.p(e,o):(l=u[n]=d[n](e),l.c()),Q(l,1),l.m(t,a)),(!i||32&o[0]&&s!==(s="col-"+(e[28].column?e[28].column:"12")))&&f(t,"class",s)},i(e){i||(Q(l),i=!0)},o(e){E(l),i=!1},d(e){e&&r(t),u[n].d()}}}function ye(e){let t,n,l,a,s,i,d,u,g,p,m,_,v,x,y,$,C="tab-pane"==e[3]&&ue(e),B=e[4]&&ge(e),O=e[1]&&fe(e),D=e[5].length>0&&he(e);return{c(){t=b("div"),n=b("div"),C&&C.c(),l=o(),a=b("div"),s=b("input"),d=o(),u=b("div"),g=b("div"),B&&B.c(),p=o(),O&&O.c(),m=o(),D&&D.c(),_=o(),f(s,"type","text"),f(s,"placeholder",i=e[8]("user_account.search_language")),f(s,"class","form-control form-control-sm"),f(a,"class","col-11"),f(n,"class","row mb-1"),f(g,"class","row"),k(g,"max-height","200px"),k(g,"overflow-y","scroll"),f(u,"class","form-group"),f(t,"role","tabpanel"),f(t,"class",e[3]),f(t,"id",v="lang-"+e[0]+"-"+e[27])},m(o,i){c(o,t,i),h(t,n),C&&C.m(n,null),h(n,l),h(n,a),h(a,s),j(s,e[6]),h(t,d),h(t,u),h(u,g),B&&B.m(g,null),h(t,p),O&&O.m(t,null),h(t,m),D&&D.m(t,null),h(t,_),x=!0,y||($=w(s,"input",e[16]),y=!0)},p(e,a){"tab-pane"==e[3]?C?C.p(e,a):(C=ue(e),C.c(),C.m(n,l)):C&&(C.d(1),C=null),(!x||256&a[0]&&i!==(i=e[8]("user_account.search_language")))&&f(s,"placeholder",i),64&a[0]&&s.value!==e[6]&&j(s,e[6]),e[4]?B?B.p(e,a):(B=ge(e),B.c(),B.m(g,null)):B&&(B.d(1),B=null),e[1]?O?(O.p(e,a),2&a[0]&&Q(O,1)):(O=fe(e),O.c(),Q(O,1),O.m(t,m)):O&&(A(),E(O,1,1,(()=>{O=null})),I()),e[5].length>0?D?(D.p(e,a),32&a[0]&&Q(D,1)):(D=he(e),D.c(),Q(D,1),D.m(t,_)):D&&(A(),E(D,1,1,(()=>{D=null})),I()),(!x||8&a[0])&&f(t,"class",e[3]),(!x||1&a[0]&&v!==(v="lang-"+e[0]+"-"+e[27]))&&f(t,"id",v)},i(e){x||(Q(O),Q(D),x=!0)},o(e){E(O),E(D),x=!1},d(e){e&&r(t),C&&C.d(),B&&B.d(),O&&O.d(),D&&D.d(),y=!1,$()}}}function ke(e){let t,n,l=e[7][e[0]]&&de(e);return{c(){l&&l.c(),t=s()},m(e,a){l&&l.m(e,a),c(e,t,a),n=!0},p(e,n){e[7][e[0]]?l?(l.p(e,n),129&n[0]&&Q(l,1)):(l=de(e),l.c(),Q(l,1),l.m(t.parentNode,t)):l&&(A(),E(l,1,1,(()=>{l=null})),I())},i(e){n||(Q(l),n=!0)},o(e){E(l),n=!1},d(e){e&&r(t),l&&l.d(e)}}}function $e(e,t,n){let l,a;d(e,v,(e=>n(7,l=e))),d(e,x,(e=>n(8,a=e)));let{init_langauges:o=-1}=t,{identifier:s="identifier"}=t,{enable_department:c=!1}=t,{language_field_name:i=null}=t,{tab_class:r="tab-pane"}=t,g=null,p=[],b="*";function m(e){v.update((t=>(t[s].splice(t[s].indexOf(e),1),t))),jQuery("#"+s+"-tabs a:first").tab("show")}function f(e,t){!0===e.dialect[t.lang.id]?(t.items.forEach((function(t){""!=t.short_code&&-1===e.languages.indexOf(t.short_code)&&e.languages.push(t.short_code),-1===e.languages.indexOf(t.lang_code)&&e.languages.push(t.lang_code)})),v.update((t=>(t[s][t[s].indexOf(e)]=e,t)))):(t.items.forEach((function(t){var n=null;""!=t.short_code&&(n=e.languages.indexOf(t.short_code))>-1&&e.languages.splice(n,1),(n=e.languages.indexOf(t.lang_code))>-1&&e.languages.splice(n,1)})),v.update((t=>(t[s][t[s].indexOf(e)]=e,t))))}function h(e,t){var n=e.languages.indexOf(t);n>-1?e.languages.splice(n,1):e.languages.push(t),v.update((t=>(t[s][t[s].indexOf(e)]=e,t)))}function _(e,t){v.update((n=>(n[s][n[s].indexOf(t)].dep_ids.push(e.detail.dep_id),n)))}function w(e,t){v.update((n=>(n[s][n[s].indexOf(t)].dep_ids.splice(n[s][n[s].indexOf(t)].dep_ids.indexOf(e.detail.dep_id),1),n)))}u((()=>{n(4,g=window.languageDialects),o>-1?(y(v,l[s]=void 0!==window[s+o]?window[s+o]:[],l),n(6,b="")):l[s]||y(v,l[s]=[],l),void 0!==window[s+"Fields"]&&n(5,p=window[s+"Fields"]),v.update((e=>(e[s].forEach((e=>{g.forEach((t=>{!function(e,t){void 0===e.dialect&&(e.dialect=[]);var n=!0;t.items.forEach((function(t){(-1===e.languages.indexOf(t.lang_code)||""!=t.short_code&&-1===e.languages.indexOf(t.short_code))&&(n=!1)})),e.dialect[t.lang.id]=n}(e,t)}))})),e)))}));return e.$$set=e=>{"init_langauges"in e&&n(14,o=e.init_langauges),"identifier"in e&&n(0,s=e.identifier),"enable_department"in e&&n(1,c=e.enable_department),"language_field_name"in e&&n(2,i=e.language_field_name),"tab_class"in e&&n(3,r=e.tab_class)},[s,c,i,r,g,p,b,l,a,m,f,h,_,w,o,(e,t)=>m(e),function(){b=this.value,n(6,b)},function(e,t,a){t[a].dialect[e.lang.id]=this.checked,v.set(l),n(0,s)},(e,t,n)=>f(e,t),(e,t,l,a)=>n(4,t[l].show_dialect=!e.show_dialect,g),(e,t,n)=>h(e,t.lang_code),(e,t,n)=>h(e,t.short_code),(e,t)=>{_(t,e)},(e,t)=>{w(t,e)},function(e,t,a){t[a][e.bind_name]=this.value,v.set(l),n(0,s)}]}e(oe,{selected_departments:{},index_block:{}},[],[],!0);class Ce extends t{constructor(e){super(),n(this,e,$e,ke,a,{init_langauges:14,identifier:0,enable_department:1,language_field_name:2,tab_class:3},null,[-1,-1])}get init_langauges(){return this.$$.ctx[14]}set init_langauges(e){this.$$set({init_langauges:e}),l()}get identifier(){return this.$$.ctx[0]}set identifier(e){this.$$set({identifier:e}),l()}get enable_department(){return this.$$.ctx[1]}set enable_department(e){this.$$set({enable_department:e}),l()}get language_field_name(){return this.$$.ctx[2]}set language_field_name(e){this.$$set({language_field_name:e}),l()}get tab_class(){return this.$$.ctx[3]}set tab_class(e){this.$$set({tab_class:e}),l()}}customElements.define("lhc-multilanguage-tab-content",e(Ce,{init_langauges:{},identifier:{},enable_department:{type:"Boolean"},language_field_name:{},tab_class:{}},[],[],!1));export{R as LHCMultilanguageTab,Ce as LHCMultilanguageTabContent};
//# sourceMappingURL=languages.js.map
