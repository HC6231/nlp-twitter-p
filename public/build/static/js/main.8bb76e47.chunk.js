/*!

=========================================================
* Argon Design System React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
(this.webpackJsonpnlp=this.webpackJsonpnlp||[]).push([[0],{219:function(e,a,t){"use strict";t.r(a);var n=t(1),r=t.n(n),l=t(30),c=t.n(l),s=t(32),m=t(15),o=(t(95),t(96),t(97),t(17)),u=t.n(o),i=t(31),E=t(13),p=t(81),d=t(82),b=t(89),g=t(88),f=t(221),h=t(222),v=t(223),y=t(244),N=t(224),x=t(225),w=t(226),O=t(227),j=t(228),T=t(243),S=function(e){Object(b.a)(t,e);var a=Object(g.a)(t);function t(){return Object(p.a)(this,t),a.apply(this,arguments)}return Object(d.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(f.a,{className:"navbar-horizontal navbar-dark bg-primary",expand:"lg"},r.a.createElement(h.a,null,r.a.createElement(v.a,{href:"#pablo",onClick:function(e){return e.preventDefault()}},r.a.createElement("h4",{className:"text-white"},r.a.createElement("i",{className:"fab fa-twitter text-white mr-2"}),"NLP Twitter Analysis")),r.a.createElement("button",{"aria-controls":"navbar-primary","aria-expanded":!1,"aria-label":"Toggle navigation",className:"navbar-toggler","data-target":"#navbar-primary","data-toggle":"collapse",id:"navbar-primary",type:"button"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement(y.a,{navbar:!0,toggler:"#navbar-primary"},r.a.createElement("div",{className:"navbar-collapse-header"},r.a.createElement(N.a,null,r.a.createElement(x.a,{className:"collapse-brand",xs:"6"},r.a.createElement(s.b,{to:"/"},r.a.createElement("h4",{className:"text-dark"},r.a.createElement("i",{className:"fab fa-twitter text-dark mr-2"}),"NLP Twitter Analysis"))),r.a.createElement(x.a,{className:"collapse-close",xs:"6"},r.a.createElement("button",{"aria-controls":"navbar-primary","aria-expanded":!1,"aria-label":"Toggle navigation",className:"navbar-toggler","data-target":"#navbar-primary","data-toggle":"collapse",id:"navbar-primary",type:"button"},r.a.createElement("span",null),r.a.createElement("span",null))))),r.a.createElement(w.a,{className:"ml-lg-auto",navbar:!0},r.a.createElement(O.a,null,r.a.createElement(j.a,{href:"#pablo",onClick:function(e){return e.preventDefault()}},"Annotation Tool")),r.a.createElement(T.a,{nav:!0},r.a.createElement(j.a,{"aria-expanded":!1,"aria-haspopup":!0,"data-toggle":"dropdown",href:"#pablo",id:"navbar-primary_dropdown_1",onClick:function(e){return e.preventDefault()},role:"button"},"About us")))))))}}]),t}(r.a.Component),k=t(229),A=t(230),I=t(231),C=t(232),H=t(233),D=t(84),P=t(234),z=function(e){var a=Object(n.useState)(""),t=Object(E.a)(a,2),l=t[0],c=t[1];return r.a.createElement(n.Fragment,null,r.a.createElement(k.a,null,r.a.createElement(N.a,null,r.a.createElement(x.a,{md:"12"},r.a.createElement(A.a,null,r.a.createElement(I.a,{className:"mb-4"},r.a.createElement(C.a,{placeholder:"type your #hashtag",type:"text",value:l,onChange:function(e){c(e.target.value)}}),r.a.createElement(H.a,{addonType:"append"},r.a.createElement(D.a,null,r.a.createElement("i",{className:"ni ni-zoom-split-in"}))),r.a.createElement(P.a,{className:"ml-3",color:"default",type:"button",onClick:function(a){a.preventDefault(),e.setHashtag(l)}},"Search")))))))},F=t(238),V=t(235),L=t(236),U=t(237);function G(){return r.a.createElement(n.Fragment,null,r.a.createElement(V.a,{body:!0,outline:!0,color:"default"},r.a.createElement(L.a,{className:"font-weight-600"},"Instruction for Use"),r.a.createElement(U.a,null,r.a.createElement("ul",null,r.a.createElement("li",null,"Input a Twitter #hashtag"),r.a.createElement("li",null,"Wait for the system to fetch 50 tweets and analyze sentiment"),r.a.createElement("li",null,"The system will show General Sentiment, Positive/Negative Tweets, Chart Analysis"))),r.a.createElement(U.a,{className:"ml-auto"},r.a.createElement("small",{className:"mr-auto text-muted"},"Project by Yulong He, Haoran Chen, Henry Zhou, Samantha Han"))),r.a.createElement(F.a,{hover:!0,className:"mt-4"}))}function R(e){var a=Object(n.useState)(""),t=Object(E.a)(a,2),l=t[0],c=t[1];return e.setHashtag(l),r.a.createElement(n.Fragment,null,r.a.createElement(N.a,null,r.a.createElement(x.a,null,r.a.createElement(z,{setHashtag:c}))),r.a.createElement(N.a,null,r.a.createElement(x.a,null,r.a.createElement(G,null))))}var J=t(49),_={labels:["POSITIVE","NEGATIVE","NEUTRAL"],datasets:[{label:"Sentiment",backgroundColor:["rgba(75, 192, 192, 0.2)","rgba(255, 99, 132, 0.2)","rgba(255, 206, 86, 0.2)"],borderColor:["rgba(75, 192, 192, 1)","rgba(255, 99, 132, 1)","rgba(255, 206, 86, 1)"],data:[0,0,0]}]},B=function(e){return e.data?_.datasets[0].data=[e.data.POSITIVE,e.data.NEGATIVE,e.data.NEUTRAL]:_.datasets[0].data=[0,0,0],r.a.createElement("div",null,r.a.createElement("h5",null,e.tag.toUpperCase()," Sentiment Distribution"),r.a.createElement("hr",null),r.a.createElement(N.a,{className:"mt-5"},r.a.createElement(x.a,{xs:"12",sm:"6"},r.a.createElement(J.b,{data:_,options:{title:{display:!1,text:"#".concat(e.tag," Sentiment Distribution"),fontSize:20},legend:{display:!1,position:"top"}}})),r.a.createElement(x.a,{xs:"12",sm:"6"},r.a.createElement(J.a,{data:_,options:{title:{display:!1,text:"#".concat(e.tag," Sentiment Distribution"),fontSize:20},legend:{display:!1,position:"top"},scales:{yAxes:[{ticks:{reverse:!1,min:0,stepSize:1}}]}}}))))},W=t(239),Y=t(240),Z=t(241),q=t(242),K=function(e){switch(e){case"POSITIVE":return"success";case"NEGATIVE":return"danger";case"NEUTRAL":default:return"secondary"}},M=function(e){var a=[];return e.data&&(a=e.data.map((function(e){return console.log(e),r.a.createElement(V.a,null,r.a.createElement(W.a,null,r.a.createElement(Y.a,{className:"py-2"},r.a.createElement(Z.a,{href:"#",color:K(e.tag)},e.tag)),r.a.createElement(U.a,null,e.tweet)))}))),r.a.createElement("div",{className:"container mt-5 mb-5"},r.a.createElement("h5",null,"Related Tweets"),r.a.createElement("hr",null),r.a.createElement(q.a,null,a))};function Q(e){return r.a.createElement(n.Fragment,null,r.a.createElement(N.a,null,r.a.createElement(x.a,null,r.a.createElement(B,{data:e.data.counter,tag:e.tag}))),r.a.createElement(N.a,null,r.a.createElement(x.a,null,r.a.createElement(M,{data:e.data.tagged}))))}var X=t(86),$=t.n(X),ee={height:"100px"};function ae(){return r.a.createElement("div",{className:"d-flex justify-content-center"},r.a.createElement("img",{src:$.a,alt:"loader",style:ee}))}var te=t(87),ne=t.n(te),re="".concat("").concat("/api/tagTweets/"),le=function(){var e=Object(i.a)(u.a.mark((function e(a){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ne.a.get("".concat(re).concat(a,"/").concat(25));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();function ce(){var e=Object(n.useState)(""),a=Object(E.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)([]),s=Object(E.a)(c,2),m=s[0],o=s[1],p=Object(n.useState)(!1),d=Object(E.a)(p,2),b=d[0],g=d[1],f=Object(n.useState)(!1),v=Object(E.a)(f,2),y=v[0],N=v[1];Object(n.useEffect)((function(){if(""!==t)try{(function(){var e=Object(i.a)(u.a.mark((function e(a){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return g(!0),e.next=3,le(a);case 3:t=e.sent,o(t.data),g(!1),N(!0);case 7:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}})()(t)}catch(e){throw e}}),[t]);return r.a.createElement("div",null,r.a.createElement(S,null),r.a.createElement(h.a,{className:"mt-5"},r.a.createElement(R,{setHashtag:l}),b?r.a.createElement(ae,null):y?r.a.createElement(Q,{data:m,tag:t}):r.a.createElement(n.Fragment,null)))}c.a.render(r.a.createElement(s.a,null,r.a.createElement(m.d,null,r.a.createElement(m.b,{path:"/",exact:!0,render:function(e){return r.a.createElement(ce,e)}}),r.a.createElement(m.a,{to:"/"}))),document.getElementById("root"))},86:function(e,a,t){e.exports=t.p+"static/media/loader.6100eaad.svg"},90:function(e,a,t){e.exports=t(219)},95:function(e,a,t){},96:function(e,a,t){},97:function(e,a,t){}},[[90,1,2]]]);
//# sourceMappingURL=main.8bb76e47.chunk.js.map