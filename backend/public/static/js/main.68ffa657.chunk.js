(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{55:function(n,t,e){},81:function(n,t,e){"use strict";e.r(t);var a=e(1),i=e.n(a),o=e(27),c=e.n(o),r=e(32),l=(e(55),e(4)),s=e(3),p=e(10),x=e(18),b=e(9),h=e.n(b),j=e(8),f=e(13),d=e(24),u=e(45),g=e.n(u),m=new URL("http://localhost:8000"),O=g.a.create({baseURL:m.toString(),"Content-Type":"application/json"});function v(){return y.apply(this,arguments)}function y(){return(y=Object(d.a)(h.a.mark((function n(){var t;return h.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,O.get("/getall/transfer");case 3:return t=n.sent,n.abrupt("return",t.data);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}function S(){return w.apply(this,arguments)}function w(){return(w=Object(d.a)(h.a.mark((function n(){var t;return h.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,O.get("/getall/deposit");case 3:return t=n.sent,n.abrupt("return",t.data);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}function F(n){return k.apply(this,arguments)}function k(){return(k=Object(d.a)(h.a.mark((function n(t){var e;return h.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,O.post("/transfer/add",t);case 3:return e=n.sent,n.abrupt("return",e.status);case 7:return n.prev=7,n.t0=n.catch(0),console.log(n.t0),n.abrupt("return",n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}function C(n){return z.apply(this,arguments)}function z(){return(z=Object(d.a)(h.a.mark((function n(t){var e;return h.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,O.post("/deposit/add",t);case 3:return e=n.sent,n.abrupt("return",e.status);case 7:return n.prev=7,n.t0=n.catch(0),console.log(n.t0),n.abrupt("return",n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}var N=h.a.mark(I),T=h.a.mark(A),H=h.a.mark(B),q="GET_DEPOSITS",D="GET_DEPOSITS_SUCCESS",E="GET_DEPOSITS_ERROR",_="ADD_DEPOSIT",R=function(){return{type:q}};function I(){var n;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(f.a)(S);case 3:return n=t.sent,t.next=6,Object(f.b)({type:D,payload:n});case 6:t.next=12;break;case 8:return t.prev=8,t.t0=t.catch(0),t.next=12,Object(f.b)({type:E,payload:t.t0});case 12:case"end":return t.stop()}}),N,null,[[0,8]])}function A(n){return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(f.a)(C,n);case 3:return t.sent,t.next=6,Object(f.b)({type:"ADD_DEPOSIT_SUCCESS"});case 6:t.next=10;break;case 8:t.prev=8,t.t0=t.catch(0);case 10:case"end":return t.stop()}}),T,null,[[0,8]])}function B(){return h.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(f.c)(q,I);case 2:return n.next=4,Object(f.c)(_,A);case 4:case"end":return n.stop()}}),H)}var P={data:[],loading:!1,error:null};var G,U,L,J,M,Y,K,Q,V,W,X,Z,$,nn,tn,en,an,on,cn,rn,ln,sn,pn,xn,bn,hn,jn=e.p+"static/media/title.24f1b867.svg",fn=e(0),dn=s.a.div(G||(G=Object(l.a)(["\n    width: 100%;\n"]))),un=s.a.p(U||(U=Object(l.a)(["\n  width: 100%;\n  margin: auto;\n  margin-top: 80px;\n\n  font-family: Spoqa Han Sans Neo;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 50px;\n  line-height: 0px;\n  \n  text-align: center;\n\n  color: #2F69FF;\n"]))),gn=s.a.img(L||(L=Object(l.a)(["\n  position: relative;\n\n  width: 56px;\n  height: 56px;\n  top: -30px;\n  left: 50%;\n  margin-left: -28px;\n  margin-top: 0px;\n"]))),mn=s.a.div(J||(J=Object(l.a)(["\n  width: 100%;\n  margin-left: 0px;\n\n  font-family: Spoqa Han Sans Neo;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 30px;\n  line-height: 0px;\n\n  color: #2F69FF;\n\n  text-align: center;\n"]))),On=function(n){var t=n.explan;return Object(fn.jsxs)(dn,{children:[Object(fn.jsx)(un,{children:"\ud604\uc11c\xa0\xa0\xa0\xa0\xa0\xa0\uc740\ud589"}),Object(fn.jsx)(gn,{src:jn}),Object(fn.jsx)(mn,{children:t})]})},vn=e(22),yn=s.a.div(M||(M=Object(l.a)(["\n    position: relative;\n    width: 266px;\n    height: 30px;\n    left: 15px;\n    top: 9px;\n\n    font-family: Spoqa Han Sans Neo;\n    font-style: normal;\n    font-weight: bold;\n    font-size: 20px;\n    line-height: 0px;\n\n    display: flex;\n    align-items: center;\n\n    color: #505791;\n"]))),Sn=function(n){var t=n.onClick;return Object(fn.jsx)(yn,{onClick:t,children:"\uc774\uc804"})},wn=s.a.div(Y||(Y=Object(l.a)(["\n    position: relative;\n    width: 360px;\n    height: ",";\n\n    background: #F0F0F0;\n    border: 0.1px solid #2F69FF;\n    box-sizing: border-box;\n    border-radius: 20px;\n\n    margin: auto;\n"])),(function(n){return n.height})),Fn=function(n){var t=n.children,e=n.height,a=n.onClick;return Object(fn.jsx)(wn,{onClick:a,height:e,children:t})},kn=s.a.div(K||(K=Object(l.a)(["\n    display: inline-block;\n    margin-left: 34px;\n    margin-top: 50px;\n    margin-right: 19px;\n"]))),Cn=s.a.div(Q||(Q=Object(l.a)(["\n    width: 116px;\n    height: 116px;\n    background: #DBDBDB;\n    border: 1px solid #2F69FF;\n    box-sizing: border-box;\n    border-radius: 10px;\n    margin-bottom: 0px;\n\n    >img{\n        width: 95px;\n        height: 95px;\n        margin-left: 10px;\n        margin-top: 10px;\n    }\n"]))),zn=s.a.div(V||(V=Object(l.a)(["\n    margin-top: 19px;\n    font-family: Spoqa Han Sans Neo;\n    font-style: normal;\n    font-weight: bold;\n    font-size: 20px;\n    line-height: 0px;\n\n    text-align: center;\n\n    color: #000000;\n\n"]))),Nn=function(n){var t=n.icon,e=n.text,a=n.onClick;return Object(fn.jsxs)(kn,{onClick:function(){a(e)},children:[Object(fn.jsx)(Cn,{children:Object(fn.jsx)("img",{src:t})}),Object(fn.jsxs)(zn,{children:[e," \uc740\ud589"]})]})},Tn=e.p+"static/media/nh.de4000cb.svg",Hn=e.p+"static/media/sh.46b18506.svg",qn=s.a.div(W||(W=Object(l.a)(["\n    width: 235px;\n    height: 70px;\n\n    margin:0 auto;\n    margin-top: 81px;\n    margin-bottom: 16px;\n\n    font-family: Spoqa Han Sans Neo;\n    font-style: normal;\n    font-weight: bold;\n    font-size: 30px;\n    line-height: 35px;\n\n    text-align: center;\n\n    color: #2F69FF;\n"]))),Dn=function(n){var t=n.onClick;return Object(fn.jsxs)("div",{children:[Object(fn.jsx)(qn,{children:"\ub3c8\uc744 \uc778\ucd9c\ud560 \uc740\ud589\uc744\n\uc120\ud0dd \ud574\uc8fc\uc138\uc694"}),Object(fn.jsxs)(Fn,{height:"427px",children:[Object(fn.jsx)(Nn,{icon:Tn,text:"\ub18d\ud611",onClick:t}),Object(fn.jsx)(Nn,{icon:Hn,text:"\uc2e0\ud55c",onClick:t})]})]})},En=s.a.div(X||(X=Object(l.a)(["\n    margin: 0 auto;\n    margin-left: 15px;\n    margin-top: ",";\n    width: 360px;\n    height: 59px;\n\n    background: #2F69FF;\n    border: 0.1px solid #2F69FF;\n    box-sizing: border-box;\n    border-radius: 10px;\n"])),(function(n){return n.mt})),_n=s.a.p(Z||(Z=Object(l.a)(["\n    font-family: Spoqa Han Sans Neo;\n    font-style: normal;\n    font-weight: bold;\n    font-size: 22px;\n    line-height: 35px;\n    color: #FFFFFF;\n\n    margin-top: 10px;\n    margin-left: 0px;\n\n    text-align: center;\n"]))),Rn=function(n){var t=n.text,e=n.onClick,a=n.mt;return Object(fn.jsx)(En,{mt:a,onClick:e,children:Object(fn.jsx)(_n,{children:t})})},In=s.a.div($||($=Object(l.a)(["\n    width: 247px;\n    height: 35px;\n\n    margin-top: 83px;\n    margin-bottom: 0px;\n    margin-left: 20px;\n\n    font-family: Spoqa Han Sans Neo;\n    font-style: normal;\n    font-weight: bold;\n    font-size: 26px;\n    line-height: 35px;\n\n    color: #2F69FF;\n"]))),An=s.a.div(nn||(nn=Object(l.a)(["\n    width: 247px;\n    height: 35px;\n\n    margin-top: 1px;\n    margin-bottom: 20px;\n    margin-left: 20px;\n\n    font-family: Spoqa Han Sans Neo;\n    font-style: normal;\n    font-weight: bold;\n    font-size: 22px;\n    line-height: 35px;\n\n    color: #112364;\n"]))),Bn=s.a.div(tn||(tn=Object(l.a)(["\n    margin-top: 9px;\n    margin-left: 21px;\n\n    font-family: Spoqa Han Sans Neo;\n    font-style: normal;\n    font-weight: bold;\n    font-size: 26px;\n    line-height: 35px;\n\n    display: flex;\n    align-items: center;\n\n    color: #2F69FF;\n"]))),Pn=s.a.input(en||(en=Object(l.a)(["\n    margin-left: 14px;\n    border: 0px;\n    border-bottom: 1px solid #112364;\n    margin-top: 10px;\n\n    background-color: transparent;\n\n    width:300px;\n    height: 30px;\n\n    font-family: Spoqa Han Sans Neo;\n    font-style: normal;\n    font-weight: bold;\n    font-size: 22px;\n    line-height: 35px;\n\n    &:focus{\n        outline: none;\n    }\n"]))),Gn=function(n){var t=n.titleText,e=n.nextClick,i=n.subText,o=Object(a.useState)(""),c=Object(p.a)(o,2),r=c[0],l=c[1];return Object(fn.jsxs)("div",{children:[Object(fn.jsx)(In,{children:t}),Object(fn.jsxs)(An,{children:[""===r?0:r," \uc6d0\uc744 ",i]}),Object(fn.jsxs)(Fn,{height:"106px",children:[Object(fn.jsx)(Bn,{children:"\ub3c8"}),Object(fn.jsx)(Pn,{type:"number",onChange:function(n){l(n.target.value)},autoFocus:!0,placeholder:"\ud544\uc218\ub85c \uc785\ub825"})]}),Object(fn.jsx)(Rn,{mt:"320px",text:"\ub2e4\uc74c",onClick:function(){e(r)}})]})},Un=s.a.div(an||(an=Object(l.a)(["\n    width: 350px;\n    height: 35px;\n\n    margin-top: 83px;\n    margin-bottom: 0px;\n    margin-left: 20px;\n\n    font-family: Spoqa Han Sans Neo;\n    font-style: normal;\n    font-weight: bold;\n    font-size: 26px;\n    line-height: 35px;\n\n    color: #2F69FF;\n"]))),Ln=s.a.div(on||(on=Object(l.a)(["\n    width: 350px;\n    height: 35px;\n\n    margin-top: 1px;\n    margin-bottom: 20px;\n    margin-left: 20px;\n\n    font-family: Spoqa Han Sans Neo;\n    font-style: normal;\n    font-weight: bold;\n    font-size: 22px;\n    line-height: 35px;\n\n    color: #112364;\n"]))),Jn=s.a.div(cn||(cn=Object(l.a)(["\n  >div{\n      margin-bottom: 20px;\n  }\n"]))),Mn=s.a.div(rn||(rn=Object(l.a)(["\n    margin-top: 9px;\n    margin-left: 21px;\n\n    font-family: Spoqa Han Sans Neo;\n    font-style: normal;\n    font-weight: bold;\n    font-size: 26px;\n    line-height: 35px;\n\n    display: flex;\n    align-items: center;\n\n    color: #2F69FF;\n"]))),Yn=s.a.input(ln||(ln=Object(l.a)(["\n    margin-left: 14px;\n    border: 0px;\n    border-bottom: 1px solid #112364;\n    margin-top: 10px;\n\n    background-color: transparent;\n\n    width:300px;\n    height: 30px;\n\n    font-family: Spoqa Han Sans Neo;\n    font-style: normal;\n    font-weight: bold;\n    font-size: 22px;\n    line-height: 35px;\n\n    &:focus{\n        outline: none;\n    }\n"]))),Kn=function(n){var t=n.nextClick,e=n.subText,i=Object(a.useState)(""),o=Object(p.a)(i,2),c=o[0],r=o[1],l=Object(a.useState)(""),s=Object(p.a)(l,2),x=s[0],b=s[1],h=Object(a.useState)(""),j=Object(p.a)(h,2),f=j[0],d=j[1];return Object(fn.jsxs)("div",{children:[Object(fn.jsx)(Un,{children:"\ub3c8\uc744 \ubc1b\uc744 \uacc4\uc88c\ub97c \uc801\uc5b4\uc8fc\uc138\uc694."}),Object(fn.jsx)(Ln,{children:e}),Object(fn.jsxs)(Jn,{children:[Object(fn.jsxs)(Fn,{height:"106px",children:[Object(fn.jsx)(Mn,{children:"\uc740\ud589 \uc774\ub984"}),Object(fn.jsx)(Yn,{type:"text",onChange:function(n){r(n.target.value)},autoFocus:!0,placeholder:"\uc608) \ub18d\ud611\uc740\ud589"})]}),Object(fn.jsxs)(Fn,{height:"106px",children:[Object(fn.jsx)(Mn,{children:"\uacc4\uc88c \ubc88\ud638"}),Object(fn.jsx)(Yn,{type:"text",onChange:function(n){b(n.target.value)},autoFocus:!0,placeholder:"\uc608) 123-1234123-123"})]}),Object(fn.jsxs)(Fn,{height:"106px",children:[Object(fn.jsx)(Mn,{children:"\uc608\uae08\uc8fc"}),Object(fn.jsx)(Yn,{type:"text",onChange:function(n){d(n.target.value)},autoFocus:!0,placeholder:"\uc608) \uac15\ud604\uc11c"})]})]}),Object(fn.jsx)(Rn,{mt:"68px",text:"\ub2e4\uc74c",onClick:function(){t({bank_name:c,account_number:x,name:f})}})]})},Qn=s.a.div(sn||(sn=Object(l.a)(["\n    width: 48px;\n    height: 35px;\n\n    font-family: Spoqa Han Sans Neo;\n    font-style: normal;\n    font-weight: bold;\n    font-size: 26px;\n    line-height: 35px;\n\n    color: #2F69FF;\n    margin: auto;\n    margin-top: 83px;\n    margin-bottom: 0px;\n    text-align: center;\n"]))),Vn=s.a.div(pn||(pn=Object(l.a)(["\n    width: 200px;\n    height: 35px;\n\n    font-family: Spoqa Han Sans Neo;\n    font-style: normal;\n    font-weight: bold;\n    font-size: 22px;\n    line-height: 35px;\n    color: #112364;\n    text-align: center;\n    margin: auto;\n    margin-top: 1px;\n    margin-bottom: 9px;\n"]))),Wn=s.a.div(xn||(xn=Object(l.a)(["\n    width: 339px;\n    height: 337px;\n    margin-left:16px;\n    margin-top:27px;\n"]))),Xn=s.a.span(bn||(bn=Object(l.a)(["\n    font-family: Spoqa Han Sans Neo;\n    font-style: normal;\n    font-weight: bold;\n    font-size: 22px;\n    line-height: 35px;\n\n    color: #FF0909;\n"]))),Zn=s.a.span(hn||(hn=Object(l.a)(["\n    font-family: Spoqa Han Sans Neo;\n    font-style: normal;\n    font-weight: bold;\n    font-size: 22px;\n    line-height: 35px;\n\n    color: #494F65;\n\n    white-space: pre-line;\n"]))),$n=function(n){var t=n.onClick,e=n.amount,a=n.text;return Object(fn.jsxs)("div",{children:[Object(fn.jsx)(Qn,{children:"\ud655\uc778"}),Object(fn.jsx)(Vn,{children:"\ud55c\ubc88 \ud655\uc778 \ud574\uc8fc\uc138\uc694."}),Object(fn.jsx)(Fn,{height:"424px",children:Object(fn.jsxs)(Wn,{children:[Object(fn.jsx)(Xn,{children:e}),Object(fn.jsx)(Zn,{children:a})]})}),Object(fn.jsx)(Rn,{onClick:t,text:"\uc0dd\uc131",mt:"17px"})]})},nt=h.a.mark(rt),tt=h.a.mark(lt),et=h.a.mark(st),at="GET_TRANSFERS",it="GET_TRANSFERS_SUCCESS",ot="GET_TRANSFERS_ERROR",ct="ADD_TRANSER";function rt(){var n;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(f.a)(v);case 3:return n=t.sent,t.next=6,Object(f.b)({type:it,payload:n});case 6:t.next=12;break;case 8:return t.prev=8,t.t0=t.catch(0),t.next=12,Object(f.b)({type:ot,payload:t.t0});case 12:case"end":return t.stop()}}),nt,null,[[0,8]])}function lt(n){return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(f.a)(F,n);case 3:return t.sent,t.next=6,Object(f.b)({type:"ADD_TRANSFER_SUCCESS"});case 6:t.next=10;break;case 8:t.prev=8,t.t0=t.catch(0);case 10:case"end":return t.stop()}}),tt,null,[[0,8]])}function st(){return h.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(f.c)(at,rt);case 2:return n.next=4,Object(f.c)(ct,lt);case 4:case"end":return n.stop()}}),et)}var pt={data:[],loading:!1,error:null};var xt,bt,ht,jt,ft,dt,ut,gt,mt,Ot,vt,yt,St,wt,Ft,kt,Ct,zt,Nt,Tt,Ht,qt,Dt,Et,_t,Rt,It,At,Bt,Pt,Gt,Ut,Lt=function(n){var t,e=n.history,i=Object(x.b)(),o=function(){e.push("/")},c=Object(a.useState)({onClick:o}),r=Object(p.a)(c,2),l=r[0],s=r[1],b=function(n){s({onClick:n})},h=Object(a.useState)({}),f=Object(p.a)(h,2),d=f[0],u=f[1],g=Object(a.useState)(0),m=Object(p.a)(g,2),O=m[0],v=m[1],y=function(n,t,e){u(Object(j.a)(Object(j.a)({},d),{},Object(vn.a)({},n,t))),v(e+1),b((function(){v(e),b(0===e?o:function(){v(e-1)})}))},S=function(){var n;i((n=d,Object(j.a)(Object(j.a)({},n),{},{type:ct}))),e.push({pathname:"/success",state:{titleText:"\ub3c8 \uc62e\uae30\uae30"}})};return Object(fn.jsxs)("div",{children:[Object(fn.jsx)(Sn,{onClick:l.onClick}),Object(fn.jsx)(On,{explan:"\ub3c8 \uc62e\uae30\uae30"}),(t=O,console.log(t),0===t?Object(fn.jsx)(Dn,{onClick:function(n){y("sbank_name",n,t)}}):1===t?Object(fn.jsx)(Gn,{titleText:"\ud604\uc11c\uc758 (".concat(d.sbank_name,") \uacc4\uc88c\uc5d0\uc11c"),subText:"\ucd9c\uae08 \ud560\uac8c\uc694.",nextClick:function(n){y("amount",n,t)}}):2===t?Object(fn.jsx)(Kn,{subText:"\ube44\uc6cc \ub450\uba74 \ud604\uc11c\uac00 \uc54c\uc544\uc11c \uac00\uc838\uac11\ub2c8\ub2e4.",nextClick:function(n){!function(n,t){u(Object(j.a)(Object(j.a)({},d),n)),v(t+1),b((function(){v(t),b((function(){v(t-1)}))}))}(n,t)}}):3===t?Object(fn.jsx)($n,{onClick:S,amount:d.amount,text:"\uc6d0\uc744\n\ud604\uc11c\uc758 ".concat(d.sbank_name," \uacc4\uc88c\uc5d0\uc11c\n\n ").concat(d.name," ").concat(d.bank_name,"\n            ").concat(d.account_number," \uc73c\ub85c \n \uc62e\uae38\uac8c\uc694.")}):void 0)]})},Jt=e.p+"static/media/timer.d3e68b14.svg",Mt=s.a.p(xt||(xt=Object(l.a)(["\n    margin-top:34px;\n    margin-left:24px;\n    margin-bottom: 0px;\n    font-family: Spoqa Han Sans Neo;\n    font-style: normal;\n    font-weight: bold;\n    font-size: 20px;\n    line-height: 0px;\n\n    color: #2F69FF;\n"]))),Yt=s.a.div(bt||(bt=Object(l.a)(["\n    display: inline-block;\n    height: 116px;\n    padding-top: 28px;\n    >img{\n        width: 60px;\n        height: 60px;\n    }\n"]))),Kt=s.a.div(ht||(ht=Object(l.a)(["\n    display: inline-block;\n    height: 88px;\n    width: 100px;\n\n    margin-left: 8px;\n"]))),Qt=s.a.p(jt||(jt=Object(l.a)(["\n    width: 266px;\n    height: 30px;\n    \n    float:left;\n    margin: 0 auto;\n    margin-top:34px;\n    margin-bottom: 0px;\n\n    font-family: Spoqa Han Sans Neo;\n    font-style: normal;\n    font-weight: bold;\n    font-size: 20px;\n    line-height: 0px;\n    color: #505791;\n"]))),Vt=s.a.p(ft||(ft=Object(l.a)(["\n    width: 266px;\n    height: 30px;\n\n    float:left;\n    margin: 0 auto;\n    margin-top:5px;\n    margin-bottom: 0px;\n\n    font-family: Spoqa Han Sans Neo;\n    font-style: normal;\n    font-weight: bold;\n    font-size: 25px;\n    line-height: 0px;\n\n    color: #2F69FF;\n"]))),Wt=function(n){var t=n.dDay;return Object(fn.jsxs)(Fn,{height:"150px",children:[Object(fn.jsx)(Mt,{children:"\uc0c1\ud658"}),Object(fn.jsx)(Yt,{children:Object(fn.jsx)("img",{src:Jt})}),Object(fn.jsxs)(Kt,{children:[Object(fn.jsx)(Qt,{children:"\ub0a8\uc740 \uc0c1\ud658 \uae30\uac04\uae4c\uc9c0"}),null!==t?Object(fn.jsxs)(Vt,{children:[t," \ub0a8\uc74c"]}):Object(fn.jsx)(Vt,{children:"\uc5c6\uc74c"})]})]})},Xt=s.a.div(dt||(dt=Object(l.a)(["\n    width: 343px;\n    height: 116px;\n\n    background: #DBDBDB;\n    border: 1px solid #2F69FF;\n    box-sizing: border-box;\n    border-radius: 10px;\n\n    margin-bottom:20px;\n    margin-left: 7px;\n"]))),Zt=s.a.div(ut||(ut=Object(l.a)(["\n    display: inline-block;\n    width: 64px;\n    height: 116px;\n    margin-left: 0px;\n    >img{\n        position: relative;\n        top: -26px;\n        width: 64px;\n        height: 64px;\n    }\n"]))),$t=s.a.div(gt||(gt=Object(l.a)(["\n    display: inline-block;\n    width: 80px;\n    height:116px;\n"]))),ne=s.a.div(mt||(mt=Object(l.a)(["\n    height: 29px;\n    width: 137px;\n    font-family: Spoqa Han Sans Neo;\n    font-style: normal;\n    font-weight: bold;\n    font-size: 25px;\n    line-height: 0px;\n    float: left;\n    margin-top: 30px;\n\n    color: #2F69FF;\n"]))),te=s.a.p(Ot||(Ot=Object(l.a)(["\n    width: 225px;\n    height: 40px;\n\n    float: left;\n    margin-top: 0px;\n\n    font-family: Spoqa Han Sans Neo;\n    font-style: normal;\n    font-weight: bold;\n    font-size: 15px;\n    line-height: 20px;\n    color: #112364;\n\n    white-space: pre-line;\n"]))),ee=function(n){var t=n.icon,e=n.mainText,a=n.subText,i=n.onClick;return Object(fn.jsxs)(Xt,{onClick:i,children:[Object(fn.jsx)(Zt,{children:Object(fn.jsx)("img",{src:t})}),Object(fn.jsxs)($t,{children:[Object(fn.jsx)(ne,{children:e}),Object(fn.jsx)(te,{children:a})]})]})},ae=e.p+"static/media/check.1bf6e89a.svg",ie=e.p+"static/media/next.06aad6d2.svg",oe=function(n){try{var t=n.deadline,e=new Date,a=new Date(t);a.setDate(a.getDate()+1),a.setHours(0),a.setSeconds(0);var i=a.getTime()-e.getTime(),o=i/864e5;if(o<=1){i/=1e3;var c=parseInt(i/3600);i%=3600;var r=parseInt(i/60),l=parseInt(i%60);return"".concat(c,"\uc2dc\uac04 ").concat(r,"\ubd84 ").concat(l,"\ucd08")}return parseInt(o)+"\uc77c"}catch(s){return-1}},ce=function(n){var t=new Date(n),e=t.getFullYear(),a=t.getMonth()+1,i=t.getDate();return"".concat(e,"\ub144 ").concat(a,"\uc6d4 ").concat(i,"\uc77c")},re=e.p+"static/media/transfer.b34c8a14.svg",le=e.p+"static/media/bank.51e76f65.svg",se=s.a.div(vt||(vt=Object(l.a)(["\n\n"]))),pe=s.a.div(yt||(yt=Object(l.a)(["\n  >div{\n      margin-bottom: 8px;\n  }\n"]))),xe=s.a.div(St||(St=Object(l.a)(["\n  display: inline-block;\n  >img{\n    margin-top: 10px;\n    margin-bottom: 10px;\n    margin-left: 15px;\n    width: 48px;\n    height: 48px;\n  }\n"]))),be=s.a.img(wt||(wt=Object(l.a)(["\n  position: absolute;\n  width: 48px;\n  height: 48px;\n  left: 312px;\n  top: 10px;\n"]))),he=s.a.div(Ft||(Ft=Object(l.a)(["\n  display:inline-block;\n  width:63px;\n  height: 72px;\n\n  margin-top:21px;\n  margin-left: 93px;\n  \n  vertical-align: top;\n  font-family: Spoqa Han Sans Neo;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 25px;\n\n  color: #2F69FF;\n"]))),je=s.a.div(kt||(kt=Object(l.a)(["\n  margin-top: 37px;\n  margin-bottom: 46px;\n  margin-left: 45px;\n  width: 271px;\n\n  font-family: Spoqa Han Sans Neo;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 30px;\n  line-height: 0px;\n\n  display: flex;\n  align-items: center;\n  text-align: center;\n\n  color: #2F69FF;\n\n"]))),fe=function(n){var t=n.history,e=Object(x.b)(),i=Object(x.c)((function(n){return n.deposits})).data,o=Object(a.useState)(oe(i[0])),c=Object(p.a)(o,2),r=c[0],l=c[1],s=Object(a.useRef)(null);Object(a.useEffect)((function(){e(R())}),[e]),Object(a.useEffect)((function(){return l(oe(i[0])),s.current=setInterval((function(){l(oe(i[0]))}),1e3),function(){clearInterval(s.current)}}),[i]);return Object(fn.jsxs)(se,{children:[Object(fn.jsx)(On,{}),Object(fn.jsxs)(pe,{children:[Object(fn.jsx)(Wt,{dDay:r}),Object(fn.jsxs)(Fn,{onClick:function(){t.push("/check")},height:"68px",children:[Object(fn.jsx)(xe,{children:Object(fn.jsx)("img",{src:ae})}),Object(fn.jsx)(he,{children:"\uc870\ud68c"}),Object(fn.jsx)(be,{src:ie})]}),Object(fn.jsxs)(Fn,{height:"427px",children:[Object(fn.jsx)(je,{children:"\ubb34\uc5c7\uc744 \ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?"}),Object(fn.jsx)(ee,{onClick:function(){t.push("/transfer")},icon:re,mainText:"\ub3c8 \uc62e\uae30\uae30",subText:"\ud604\uc7ac \uc4f0\uc2dc\uace0 \uacc4\uc2dc\ub294 \ud604\uc11c \ud1b5\uc7a5\uc5d0\uc11c\n\uc6d0\ud558\ub294 \uacf3\uc73c\ub85c \ub3c8\uc744 \uc62e\uae38\uc218 \uc788\uc2b5\ub2c8\ub2e4."}),Object(fn.jsx)(ee,{onClick:function(){t.push("/deposit")},icon:le,mainText:"\uc785\uae08 \uc694\uccad",subText:"\ub3c8\uc744 \ube4c\ub9bd\ub2c8\ub2e4.\n\uae30\ud55c\ub0b4\uc5d0 \ub3c8\uc744 \uac1a\uc544\uc57c \ud569\ub2c8\ub2e4."})]})]})]})},de=s.a.div(Ct||(Ct=Object(l.a)(["\n    width: 360px;\n    height: 106px;\n    background: #F0F0F0;\n    border: 0.1px solid #2F69FF;\n    box-sizing: border-box;\n    border-radius: 20px;\n\n    margin: auto;\n    margin-bottom: 19px;\n"]))),ue=s.a.div(zt||(zt=Object(l.a)(["\n    position: relative;\n    left: 2.78%;\n    right: 12.5%;\n    top: 8.49%;\n    bottom: 58.49%;\n\n    font-family: Spoqa Han Sans Neo;\n    font-style: normal;\n    font-weight: bold;\n    font-size: 22px;\n    line-height: 35px;\n\n    display: flex;\n    align-items: center;\n\n    color: #2F69FF;\n\n    margin-bottom: 0px;\n"]))),ge=s.a.div(Nt||(Nt=Object(l.a)(["\n    position: relative;\n    left: 2.78%;\n    right: 4.44%;\n    top: 10px;\n\n    font-family: Spoqa Han Sans Neo;\n    font-style: normal;\n    font-weight: bold;\n    font-size: 20px;\n    line-height: 25px;\n\n\n    color: #494F65;\n    margin-top: 0px;\n"]))),me=function(n){var t=n.deposit,e=Object(a.useState)(oe(t)),i=Object(p.a)(e,2),o=i[0],c=i[1],r=Object(a.useRef)(null);return Object(a.useEffect)((function(){return c(oe(t)),r.current=setInterval((function(){c(oe(t))}),1e3),function(){clearInterval(r.current)}}),[t]),Object(fn.jsxs)(de,{children:[Object(fn.jsxs)(ue,{children:[ce(t.createdAt)," \ube4c\ub9b0 ",t.amount]}),Object(fn.jsxs)(ge,{children:[ce(t.deadline),"\uae4c\uc9c0 ",o," \ub0a8\uc558\uc2b5\ub2c8\ub2e4."]})]})},Oe=s.a.p(Tt||(Tt=Object(l.a)(["\n    position: relative;\n    width: 156px;\n    height: 35px;\n    left: 111px;\n    top: 107px;\n    margin-top: 0px;\n\n    font-family: Spoqa Han Sans Neo;\n    font-style: normal;\n    font-weight: bold;\n    font-size: 26px;\n    line-height: 35px;\n\n    display: flex;\n    align-items: center;\n    text-align: center;\n\n    color: #2F69FF;\n"]))),ve=s.a.p(Ht||(Ht=Object(l.a)(["\n    position: relative;\n    width: 46px;\n    height: 35px;\n    left: 166px;\n    top: 80px;\n    margin-top:0px;\n    margin-bottom: 95px;\n\n    font-family: Spoqa Han Sans Neo;\n    font-style: normal;\n    font-weight: bold;\n    font-size: 30px;\n    line-height: 35px;\n\n    display: flex;\n    align-items: center;\n    text-align: center;\n\n    color: #112364;\n"]))),ye=function(n){var t=n.history,e=Object(x.b)(),i=Object(x.c)((function(n){return n.deposits})).data;Object(a.useEffect)((function(){e(R())}),[]);return Object(fn.jsxs)("div",{children:[Object(fn.jsx)(Sn,{onClick:function(){t.goBack()}}),Object(fn.jsx)(On,{explan:"\uc870\ud68c"}),Object(fn.jsx)(Oe,{children:"\ub0a8\uc740 \uc0c1\ud658 \uac1c\uc218"}),Object(fn.jsxs)(ve,{children:[i.length,"\uac1c"]}),i.map((function(n){return Object(fn.jsx)(me,{deposit:n},n.id)}))]})},Se=function(n){var t=n.onClick,e=n.amount,a=n.text,i=n.deadline;return Object(fn.jsxs)("div",{children:[Object(fn.jsx)(we,{children:"\ud655\uc778"}),Object(fn.jsx)(Fe,{children:"\ud55c\ubc88 \ud655\uc778 \ud574\uc8fc\uc138\uc694."}),Object(fn.jsx)(Fn,{height:"424px",children:Object(fn.jsxs)(ke,{children:[Object(fn.jsx)(Ce,{children:e}),Object(fn.jsx)(ze,{children:a}),Object(fn.jsxs)(Ce,{children:[i," \uae4c\uc9c0"]}),Object(fn.jsx)(ze,{children:" \ub3c8\uc744 \uc0c1\ud658\ud560\uac8c\uc694."})]})}),Object(fn.jsx)(Rn,{onClick:t,text:"\uc0dd\uc131",mt:"17px"})]})},we=s.a.div(qt||(qt=Object(l.a)(["\n    width: 48px;\n    height: 35px;\n\n    font-family: Spoqa Han Sans Neo;\n    font-style: normal;\n    font-weight: bold;\n    font-size: 26px;\n    line-height: 35px;\n\n    color: #2F69FF;\n    margin: auto;\n    margin-top: 83px;\n    margin-bottom: 0px;\n    text-align: center;\n"]))),Fe=s.a.div(Dt||(Dt=Object(l.a)(["\n    width: 200px;\n    height: 35px;\n\n    font-family: Spoqa Han Sans Neo;\n    font-style: normal;\n    font-weight: bold;\n    font-size: 22px;\n    line-height: 35px;\n    color: #112364;\n    text-align: center;\n    margin: auto;\n    margin-top: 1px;\n    margin-bottom: 9px;\n"]))),ke=s.a.div(Et||(Et=Object(l.a)(["\n    width: 339px;\n    height: 337px;\n    margin-left:16px;\n    margin-top:27px;\n"]))),Ce=s.a.span(_t||(_t=Object(l.a)(["\n    font-family: Spoqa Han Sans Neo;\n    font-style: normal;\n    font-weight: bold;\n    font-size: 22px;\n    line-height: 35px;\n\n    color: #FF0909;\n"]))),ze=s.a.span(Rt||(Rt=Object(l.a)(["\n    font-family: Spoqa Han Sans Neo;\n    font-style: normal;\n    font-weight: bold;\n    font-size: 22px;\n    line-height: 35px;\n\n    color: #494F65;\n\n    white-space: pre-line;\n"]))),Ne=s.a.div(It||(It=Object(l.a)(["\n    width: 300px;\n    height: 35px;\n\n    font-family: Spoqa Han Sans Neo;\n    font-style: normal;\n    font-weight: bold;\n    font-size: 26px;\n    line-height: 35px;\n\n    color: #2F69FF;\n\n    margin-left: 20px;\n    margin-top: 83px;\n    margin-bottom: 0px;\n"]))),Te=s.a.div(At||(At=Object(l.a)(["\n    width: 300px;\n    height: 35px;\n\n    font-family: Spoqa Han Sans Neo;\n    font-style: normal;\n    font-weight: bold;\n    font-size: 22px;\n    line-height: 35px;\n\n    margin-left: 20px;\n    margin-top: 1px;\n    margin-bottom: 10px;\n\n    color: #112364;\n"]))),He=s.a.div(Bt||(Bt=Object(l.a)(["\n    margin-top: 9px;\n    margin-left: 21px;\n\n    font-family: Spoqa Han Sans Neo;\n    font-style: normal;\n    font-weight: bold;\n    font-size: 26px;\n    line-height: 35px;\n\n    display: flex;\n    align-items: center;\n\n    color: #2F69FF;\n"]))),qe=s.a.input(Pt||(Pt=Object(l.a)(["\n    margin-left: 14px;\n    border: 0px;\n    border-bottom: 1px solid #112364;\n    margin-top: 10px;\n\n    background-color: transparent;\n\n    width:300px;\n    height: 30px;\n\n    font-family: Spoqa Han Sans Neo;\n    font-style: normal;\n    font-weight: bold;\n    font-size: 22px;\n    line-height: 35px;\n\n    &:focus{\n        outline: none;\n    }\n"]))),De=function(n){var t=n.amount,e=n.nextClick,i=Object(a.useState)("222"),o=Object(p.a)(i,2),c=o[0],r=o[1];return Object(fn.jsxs)("div",{children:[Object(fn.jsxs)(Ne,{children:[ce(c)," \uae4c\uc9c0"]}),Object(fn.jsx)(Te,{children:"".concat(t,"\uc6d0\uc744 \uc0c1\ud658 \ud560\uac8c\uc694.")}),Object(fn.jsxs)(Fn,{height:"106px",children:[Object(fn.jsx)(He,{children:"\ub0a0\uc9dc"}),Object(fn.jsx)(qe,{type:"date",onChange:function(n){r(n.target.value)},autoFocus:!0})]}),Object(fn.jsx)(Rn,{onClick:function(){e(c)},text:"\ub2e4\uc74c",mt:"320px"})]})},Ee=function(n){var t,e=n.history,i=Object(x.b)(),o=function(){e.push("/")},c=Object(a.useState)({onClick:o}),r=Object(p.a)(c,2),l=r[0],s=r[1],b=function(n){s({onClick:n})},h=Object(a.useState)({}),f=Object(p.a)(h,2),d=f[0],u=f[1],g=Object(a.useState)(1),m=Object(p.a)(g,2),O=m[0],v=m[1],y=function(n,t,e){u(Object(j.a)(Object(j.a)({},d),{},Object(vn.a)({},n,t))),v(e+1),b((function(){v(e),b(1===e?o:function(){v(e-1)})}))},S=function(){var n;i((n=d,Object(j.a)(Object(j.a)({},n),{},{type:_}))),e.push({pathname:"/success",state:{titleText:"\ub300\ucd9c"}})};return Object(fn.jsxs)("div",{children:[Object(fn.jsx)(Sn,{onClick:l.onClick}),Object(fn.jsx)(On,{explan:"\ub300\ucd9c"}),(t=O,1===t?Object(fn.jsx)(Gn,{titleText:"\ud604\uc11c\uc5d0\uac8c",subText:"\ube4c\ub9b4\uac8c\uc694.",nextClick:function(n){y("amount",n,t)}}):2===t?Object(fn.jsx)(Kn,{subText:"\uc740\ud589 \uc774\ub984\uacfc \uacc4\uc88c\ubc88\ud638\ub294 \ud544\uc218 \uc785\ub2c8\ub2e4.",nextClick:function(n){!function(n,t){u(Object(j.a)(Object(j.a)({},d),n)),v(t+1),b((function(){v(t),b((function(){v(t-1)}))}))}(n,t)}}):3==t?Object(fn.jsx)(De,{nextClick:function(n){y("deadline",n,t)},amount:d.amount}):4===t?Object(fn.jsx)(Se,{onClick:S,amount:d.amount,text:"\uc6d0\uc744\n\n".concat(d.name," ").concat(d.bank_name,"\n            ").concat(d.account_number,"\uc73c\ub85c\n            \uc785\uae08 \ud560\uac8c\uc694.\n\n"),deadline:d.deadline}):void 0)]})},_e=s.a.div(Gt||(Gt=Object(l.a)(["\n    width: 339px;\n    height: 328px;\n\n    font-family: Spoqa Han Sans Neo;\n    font-style: normal;\n    font-weight: bold;\n    font-size: 22px;\n    line-height: 35px;\n\n    text-align: center;\n    white-space: pre-line;\n\n    margin: auto;\n    margin-top: 100px;\n    margin-bottom: 0px;\n"]))),Re=function(n){var t=n.location,e=n.history,i=function(){e.push("/")},o=Object(a.useState)(4),c=Object(p.a)(o,2),r=c[0],l=c[1],s=Object(a.useRef)(null);return Object(a.useEffect)((function(){s.current=setTimeout((function(){l(r-1)}),1e3),0===r&&i()}),[r]),Object(fn.jsxs)("div",{children:[Object(fn.jsx)(On,{explan:t.state.titleText}),Object(fn.jsx)(_e,{children:"\ucd95\ud558 \ub4dc\ub9bd\ub2c8\ub2e4.\n\ud604\uc11c\uc5d0\uac8c \uc2e0\uccad\ud588\ub2e4\ub294\n\uba54\uc2dc\uc9c0\ub97c \ubcf4\ub0b4\uba74\n\n\n \uc54c\uc544\uc11c \ud574\ub4dc\ub9bd\ub2c8\ub2e4."}),Object(fn.jsx)(Rn,{text:"\ud648 (".concat(r-1,"\ucd08 \ud6c4\uc5d0 \uc790\ub3d9)"),mt:"200px",onClick:i})]})},Ie=e(11);var Ae=s.a.div(Ut||(Ut=Object(l.a)(["\n  width: 390px;\n  height: 844px;\n  margin: 0 auto;\n  box-shadow: 0 1px 10px rgb(0 0 0 / 20%);\n  overflow: hidden;\n"]))),Be=function(){return Object(fn.jsxs)(Ae,{children:[Object(fn.jsx)(Ie.a,{path:"/",exact:!0,component:fe}),Object(fn.jsx)(Ie.a,{path:"/check",component:ye}),Object(fn.jsx)(Ie.a,{path:"/transfer",component:Lt}),Object(fn.jsx)(Ie.a,{path:"/deposit",component:Ee}),Object(fn.jsx)(Ie.a,{path:"/success",component:Re})]})},Pe=function(n){n&&n instanceof Function&&e.e(3).then(e.bind(null,82)).then((function(t){var e=t.getCLS,a=t.getFID,i=t.getFCP,o=t.getLCP,c=t.getTTFB;e(n),a(n),i(n),o(n),c(n)}))},Ge=e(20),Ue=e(28),Le=h.a.mark(Me),Je=Object(Ge.b)({transfers:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:pt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case at:return Object(j.a)(Object(j.a)({},n),{},{loading:!1});case it:return Object(j.a)(Object(j.a)({},n),{},{loading:!0,data:t.payload});case ot:return Object(j.a)(Object(j.a)({},n),{},{loading:!0,error:t.error});default:return n}},deposits:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case q:return Object(j.a)(Object(j.a)({},n),{},{loading:!1});case D:return Object(j.a)(Object(j.a)({},n),{},{loading:!0,data:t.payload});case E:return Object(j.a)(Object(j.a)({},n),{},{loading:!0,error:t.error});default:return n}}});function Me(){return h.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(Ue.a)([st(),B()]);case 2:case"end":return n.stop()}}),Le)}var Ye=Je,Ke=e(50),Qe=Object(Ke.a)(),Ve=Object(Ge.d)(Ye,Object(Ge.a)(Qe));Qe.run(Me),c.a.render(Object(fn.jsx)(i.a.StrictMode,{children:Object(fn.jsx)(r.a,{children:Object(fn.jsx)(x.a,{store:Ve,children:Object(fn.jsx)(Be,{})})})}),document.getElementById("root")),Pe()}},[[81,1,2]]]);
//# sourceMappingURL=main.68ffa657.chunk.js.map