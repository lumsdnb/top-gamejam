import{S as s,i as e,s as t,t as c,g as a,f as l,d as r,e as n,k as o,c as i,a as d,n as u,b as h,E as v,M as f,Q as p,T as g,N as m,W as w,l as E,x as N,j as I,m as b,X as k,o as D,u as q,v as T,r as $,w as z,Y as V,H as y,F as A,h as j,G as S,Z as O,_ as U,$ as M,a0 as x,a1 as G,V as B}from"./vendor-09e2d04d.js";/* empty css                                             */import{g as P}from"./stores-3749ea87.js";function _(s){let e;return{c(){e=c("#")},l(s){e=a(s,"#")},m(s,t){l(s,e,t)},d(s){s&&r(e)}}}function R(s){let e;return{c(){e=c("b")},l(s){e=a(s,"b")},m(s,t){l(s,e,t)},d(s){s&&r(e)}}}function F(s){let e;return{c(){e=n("span"),this.h()},l(s){e=i(s,"SPAN",{class:!0}),d(e).forEach(r),this.h()},h(){h(e,"class","indicator -inactive svelte-elif8u")},m(s,t){l(s,e,t)},d(s){s&&r(e)}}}function H(s){let e;return{c(){e=n("span"),this.h()},l(s){e=i(s,"SPAN",{class:!0}),d(e).forEach(r),this.h()},h(){h(e,"class","indicator -active svelte-elif8u")},m(s,t){l(s,e,t)},d(s){s&&r(e)}}}function Q(s){let e,t,c,a,E,N,I,b,k,D=s[0]&&_(),q=s[1]&&R();function T(s,e){return s[2]?H:F}let $=T(s),z=$(s);return{c(){e=n("div"),D&&D.c(),t=o(),q&&q.c(),c=o(),a=n("img"),N=o(),z.c(),this.h()},l(s){e=i(s,"DIV",{class:!0});var l=d(e);D&&D.l(l),t=u(l),q&&q.l(l),c=u(l),a=i(l,"IMG",{src:!0,alt:!0,class:!0}),N=u(l),z.l(l),l.forEach(r),this.h()},h(){a.src!==(E="/static/assets/note.png")&&h(a,"src","/static/assets/note.png"),h(a,"alt",""),h(a,"class","svelte-elif8u"),h(e,"class","note svelte-elif8u")},m(s,r){l(s,e,r),D&&D.m(e,null),v(e,t),q&&q.m(e,null),v(e,c),v(e,a),v(e,N),z.m(e,null),k=!0},p(s,[a]){s[0]?D||(D=_(),D.c(),D.m(e,t)):D&&(D.d(1),D=null),s[1]?q||(q=R(),q.c(),q.m(e,c)):q&&(q.d(1),q=null),$!==($=T(s))&&(z.d(1),z=$(s),z&&(z.c(),z.m(e,null)))},i(s){k||(f((()=>{b&&b.end(1),I||(I=p(e,g,{y:-5,duration:100})),I.start()})),k=!0)},o(s){I&&I.invalidate(),b=m(e,w,{duration:60}),k=!1},d(s){s&&r(e),D&&D.d(),q&&q.d(),z.d(),s&&b&&b.end()}}}function W(s,e,t){let{sharp:c=!1}=e,{flat:a=!1}=e,{active:l=!1}=e;return s.$$set=s=>{"sharp"in s&&t(0,c=s.sharp),"flat"in s&&t(1,a=s.flat),"active"in s&&t(2,l=s.active)},[c,a,l]}class X extends s{constructor(s){super(),e(this,s,W,Q,t,{sharp:0,flat:1,active:2})}}function Y(s,e,t){const c=s.slice();return c[4]=e[t],c[6]=t,c}function Z(s){let e,t,c,a;return t=new X({}),{c(){e=n("div"),I(t.$$.fragment),c=o(),this.h()},l(s){e=i(s,"DIV",{class:!0});var a=d(e);b(t.$$.fragment,a),c=u(a),a.forEach(r),this.h()},h(){h(e,"class",k(`n${s[6]}`)+" svelte-pf7cq8")},m(s,r){l(s,e,r),D(t,e,null),v(e,c),a=!0},i(s){a||(N(t.$$.fragment,s),a=!0)},o(s){q(t.$$.fragment,s),a=!1},d(s){s&&r(e),T(t)}}}function C(s){let e,t,c=s[1].includes(s[0].letters[s[6]]),a=c&&Z(s);return{c(){a&&a.c(),e=E()},l(s){a&&a.l(s),e=E()},m(s,c){a&&a.m(s,c),l(s,e,c),t=!0},p(s,t){1&t&&(c=s[1].includes(s[0].letters[s[6]])),c?a?1&t&&N(a,1):(a=Z(s),a.c(),N(a,1),a.m(e.parentNode,e)):a&&($(),q(a,1,1,(()=>{a=null})),z())},i(s){t||(N(a),t=!0)},o(s){q(a),t=!1},d(s){a&&a.d(s),s&&r(e)}}}function J(s){let e,t,c,a,f,p,g,m,w,E,I,b,k,D,T,y,A,j,S,O,U,M,x=Array(7),G=[];for(let l=0;l<x.length;l+=1)G[l]=C(Y(s,x,l));const B=s=>q(G[s],1,1,(()=>{G[s]=null}));return{c(){e=n("div"),t=n("div"),c=n("img"),f=o(),p=n("div"),g=n("div"),m=n("div"),w=o(),E=n("div"),I=o(),b=n("div"),k=o(),D=n("div"),T=o(),y=n("div"),A=o(),j=n("div"),S=o(),O=n("div"),U=o();for(let s=0;s<G.length;s+=1)G[s].c();this.h()},l(s){e=i(s,"DIV",{id:!0,class:!0});var a=d(e);t=i(a,"DIV",{id:!0,class:!0});var l=d(t);c=i(l,"IMG",{src:!0,alt:!0,class:!0}),l.forEach(r),f=u(a),p=i(a,"DIV",{id:!0,class:!0});var n=d(p);g=i(n,"DIV",{id:!0,class:!0});var o=d(g);m=i(o,"DIV",{class:!0}),d(m).forEach(r),w=u(o),E=i(o,"DIV",{class:!0}),d(E).forEach(r),I=u(o),b=i(o,"DIV",{class:!0}),d(b).forEach(r),k=u(o),D=i(o,"DIV",{class:!0}),d(D).forEach(r),T=u(o),y=i(o,"DIV",{class:!0}),d(y).forEach(r),A=u(o),j=i(o,"DIV",{class:!0}),d(j).forEach(r),S=u(o),O=i(o,"DIV",{class:!0}),d(O).forEach(r),o.forEach(r),U=u(n);for(let e=0;e<G.length;e+=1)G[e].l(n);n.forEach(r),a.forEach(r),this.h()},h(){c.src!==(a="/assets/clef-white.png")&&h(c,"src","/assets/clef-white.png"),h(c,"alt","chef"),h(c,"class","svelte-pf7cq8"),h(t,"id","clef"),h(t,"class","svelte-pf7cq8"),h(m,"class","block b1 svelte-pf7cq8"),h(E,"class","block b2 svelte-pf7cq8"),h(b,"class","block b3 svelte-pf7cq8"),h(D,"class","block b4 svelte-pf7cq8"),h(y,"class","block b5 svelte-pf7cq8"),h(j,"class","block b6 svelte-pf7cq8"),h(O,"class","block b7 svelte-pf7cq8"),h(g,"id","grid-lines"),h(g,"class","svelte-pf7cq8"),h(p,"id","grid-notes"),h(p,"class","svelte-pf7cq8"),h(e,"id","container"),h(e,"class","svelte-pf7cq8")},m(s,a){l(s,e,a),v(e,t),v(t,c),v(e,f),v(e,p),v(p,g),v(g,m),v(g,w),v(g,E),v(g,I),v(g,b),v(g,k),v(g,D),v(g,T),v(g,y),v(g,A),v(g,j),v(g,S),v(g,O),v(p,U);for(let e=0;e<G.length;e+=1)G[e].m(p,null);M=!0},p(s,[e]){if(3&e){let t;for(x=Array(7),t=0;t<x.length;t+=1){const c=Y(s,x,t);G[t]?(G[t].p(c,e),N(G[t],1)):(G[t]=C(c),G[t].c(),N(G[t],1),G[t].m(p,null))}for($(),t=x.length;t<G.length;t+=1)B(t);z()}},i(s){if(!M){for(let s=0;s<x.length;s+=1)N(G[s]);M=!0}},o(s){G=G.filter(Boolean);for(let e=0;e<G.length;e+=1)q(G[e]);M=!1},d(s){s&&r(e),V(G,s)}}}function K(s,e,t){let c;y(s,P,(s=>t(0,c=s))),c.currentScale;let a=c.enteredNotes;return c.enteredNoteTypes,[c,a]}class L extends s{constructor(s){super(),e(this,s,K,J,t,{})}}var ss="/_app/assets/arrow.3a33413e.svg";function es(s){let e,t,f,p,g,m,w,E,N,I,b,k,D,q,T,$,z,V,y,U,M,x,G,B,P,_,R,F,H=s[2][s[0]]+"",Q=s[3][s[1]]+"";return{c(){e=n("div"),t=n("button"),f=n("img"),g=o(),m=n("div"),w=n("button"),E=n("img"),I=o(),b=n("span"),k=n("span"),D=c(H),q=o(),T=n("span"),$=c(Q),z=o(),V=n("button"),y=n("img"),M=o(),x=n("button"),G=n("img"),P=o(),_=n("div"),this.h()},l(s){e=i(s,"DIV",{class:!0});var c=d(e);t=i(c,"BUTTON",{class:!0});var l=d(t);f=i(l,"IMG",{class:!0,src:!0,alt:!0}),l.forEach(r),g=u(c),m=i(c,"DIV",{class:!0});var n=d(m);w=i(n,"BUTTON",{class:!0});var o=d(w);E=i(o,"IMG",{class:!0,src:!0,alt:!0}),o.forEach(r),I=u(n),b=i(n,"SPAN",{class:!0});var h=d(b);k=i(h,"SPAN",{});var v=d(k);D=a(v,H),v.forEach(r),q=u(h),T=i(h,"SPAN",{class:!0});var p=d(T);$=a(p,Q),p.forEach(r),h.forEach(r),z=u(n),V=i(n,"BUTTON",{class:!0});var N=d(V);y=i(N,"IMG",{class:!0,src:!0,alt:!0}),N.forEach(r),n.forEach(r),M=u(c),x=i(c,"BUTTON",{class:!0});var A=d(x);G=i(A,"IMG",{class:!0,src:!0,alt:!0}),A.forEach(r),c.forEach(r),P=u(s),_=i(s,"DIV",{}),d(_).forEach(r),this.h()},h(){h(f,"class","up arrow shade svelte-18jqzz4"),f.src!==(p=ss)&&h(f,"src","/_app/assets/arrow.3a33413e.svg"),h(f,"alt","up arrow"),h(t,"class","svelte-18jqzz4"),h(E,"class","left arrow shade svelte-18jqzz4"),E.src!==(N=ss)&&h(E,"src","/_app/assets/arrow.3a33413e.svg"),h(E,"alt","down arrow"),h(w,"class","svelte-18jqzz4"),h(T,"class","note-type svelte-18jqzz4"),h(b,"class","current-note svelte-18jqzz4"),h(y,"class","right arrow shade svelte-18jqzz4"),y.src!==(U=ss)&&h(y,"src","/_app/assets/arrow.3a33413e.svg"),h(y,"alt","up arrow"),h(V,"class","svelte-18jqzz4"),h(m,"class","middle svelte-18jqzz4"),h(G,"class","down arrow shade svelte-18jqzz4"),G.src!==(B=ss)&&h(G,"src","/_app/assets/arrow.3a33413e.svg"),h(G,"alt","down arrow"),h(x,"class","svelte-18jqzz4"),h(e,"class","panel svelte-18jqzz4")},m(c,a){l(c,e,a),v(e,t),v(t,f),v(e,g),v(e,m),v(m,w),v(w,E),v(m,I),v(m,b),v(b,k),v(k,D),v(b,q),v(b,T),v(T,$),v(m,z),v(m,V),v(V,y),v(e,M),v(e,x),v(x,G),l(c,P,a),l(c,_,a),R||(F=[A(t,"click",s[8]),A(w,"click",s[9]),A(V,"click",s[10]),A(x,"click",s[11])],R=!0)},p(s,[e]){1&e&&H!==(H=s[2][s[0]]+"")&&j(D,H),2&e&&Q!==(Q=s[3][s[1]]+"")&&j($,Q)},i:S,o:S,d(s){s&&r(e),s&&r(P),s&&r(_),R=!1,O(F)}}}function ts(s,e,t){let c=["c","d","e","f","g","a","b"],a=["","♯","♭"],{currentNote:l=0}=e,{currentNoteType:r=0}=e;const n=()=>{new Audio("../static/sounds/click-high.wav").play()},o=()=>{t(0,l++,l),n(),l>=c.length&&t(0,l=0)},i=()=>{t(0,l--,l),n(),l<0&&t(0,l=c.length-1)},d=()=>{t(1,r++,r),n(),r>=a.length&&t(1,r=0)},u=()=>{t(1,r--,r),n(),r<0&&t(1,r=a.length-1)};return s.$$set=s=>{"currentNote"in s&&t(0,l=s.currentNote),"currentNoteType"in s&&t(1,r=s.currentNoteType)},[l,r,c,a,o,i,d,u,()=>o(),()=>u(),()=>d(),()=>i()]}class cs extends s{constructor(s){super(),e(this,s,ts,es,t,{currentNote:0,currentNoteType:1})}}function as(s){let e,t,f,p,g,m,w,E,k,$,z,V,y,j,S,B,P,_,R,F,H,Q,W,X,Y,Z,C,J,K,L;function ss(e){s[4](e)}function es(e){s[5](e)}let ts={};return void 0!==s[0]&&(ts.currentNote=s[0]),void 0!==s[1]&&(ts.currentNoteType=s[1]),t=new cs({props:ts}),U.push((()=>M(t,"currentNote",ss))),U.push((()=>M(t,"currentNoteType",es))),{c(){e=n("div"),I(t.$$.fragment),g=o(),m=n("div"),w=n("button"),E=c("delete note"),k=o(),$=n("div"),z=n("button"),V=c("place note"),y=o(),j=n("audio"),B=o(),P=n("audio"),R=o(),F=n("audio"),Q=o(),W=n("audio"),Y=o(),Z=n("audio"),this.h()},l(s){e=i(s,"DIV",{class:!0});var c=d(e);b(t.$$.fragment,c),g=u(c),m=i(c,"DIV",{class:!0});var l=d(m);w=i(l,"BUTTON",{class:!0});var n=d(w);E=a(n,"delete note"),n.forEach(r),k=u(l),$=i(l,"DIV",{id:!0,class:!0});var o=d($);z=i(o,"BUTTON",{class:!0});var h=d(z);V=a(h,"place note"),h.forEach(r),o.forEach(r),l.forEach(r),c.forEach(r),y=u(s),j=i(s,"AUDIO",{id:!0,src:!0}),d(j).forEach(r),B=u(s),P=i(s,"AUDIO",{id:!0,src:!0}),d(P).forEach(r),R=u(s),F=i(s,"AUDIO",{id:!0,src:!0}),d(F).forEach(r),Q=u(s),W=i(s,"AUDIO",{id:!0,src:!0}),d(W).forEach(r),Y=u(s),Z=i(s,"AUDIO",{id:!0,src:!0}),d(Z).forEach(r),this.h()},h(){h(w,"class","delete svelte-1901oaw"),h(z,"class","submit-note shade svelte-1901oaw"),h($,"id","submit-container"),h($,"class","svelte-1901oaw"),h(m,"class","text-button-panel svelte-1901oaw"),h(e,"class","container svelte-1901oaw"),h(j,"id","audio-correct"),j.src!==(S="../static/sounds/correct.wav")&&h(j,"src","../static/sounds/correct.wav"),h(P,"id","audio-incorrect"),P.src!==(_="../static/sounds/incorrect.wav")&&h(P,"src","../static/sounds/incorrect.wav"),h(F,"id","audio-click-high"),F.src!==(H="../static/sounds/click-high.wav")&&h(F,"src","../static/sounds/click-high.wav"),h(W,"id","audio-click"),W.src!==(X="../static/sounds/click.wav")&&h(W,"src","../static/sounds/click.wav"),h(Z,"id","audio-msg-click"),Z.src!==(C="../static/sounds/msg-click.wav")&&h(Z,"src","../static/sounds/msg-click.wav")},m(c,a){l(c,e,a),D(t,e,null),v(e,g),v(e,m),v(m,w),v(w,E),v(m,k),v(m,$),v($,z),v(z,V),l(c,y,a),l(c,j,a),l(c,B,a),l(c,P,a),l(c,R,a),l(c,F,a),l(c,Q,a),l(c,W,a),l(c,Y,a),l(c,Z,a),J=!0,K||(L=[A(w,"click",s[3]),A(z,"click",(function(){x(s[2](s[0],s[1]))&&s[2](s[0],s[1]).apply(this,arguments)}))],K=!0)},p(e,[c]){s=e;const a={};!f&&1&c&&(f=!0,a.currentNote=s[0],G((()=>f=!1))),!p&&2&c&&(p=!0,a.currentNoteType=s[1],G((()=>p=!1))),t.$set(a)},i(s){J||(N(t.$$.fragment,s),J=!0)},o(s){q(t.$$.fragment,s),J=!1},d(s){s&&r(e),T(t),s&&r(y),s&&r(j),s&&r(B),s&&r(P),s&&r(R),s&&r(F),s&&r(Q),s&&r(W),s&&r(Y),s&&r(Z),K=!1,O(L)}}}function ls(s,e,t){let c;y(s,P,(s=>t(6,c=s))),c.currentScale;let a=0,l=0;return[a,l,(s,e)=>{console.table(s,e),console.info(c.letterPositions[s]);let t=c.letterPositions[s];if(!1===c.enteredNotes.includes(c.letters[s])){switch(l){case 1:t++,t>=12&&(t=0);break;case 2:t--,t<=0&&(t=12)}console.warn("id is"+t),c.enteredNotes.push(c.letters[s]),c.enteredNoteTypes.push(e),c.enteredNotesAsID.push(t),console.log(`note${t} has been entered`),console.warn(t);new Audio(`../static/sounds/note${t}.wav`).play()}console.log(c.enteredNotes),P.set(c)},s=>{console.log("removing note"),c.enteredNotes.splice(-1,1),c.enteredNoteTypes.splice(-1,1),P.set(c);document.querySelector("#audio-click").play()},function(s){a=s,t(0,a)},function(s){l=s,t(1,l)}]}class rs extends s{constructor(s){super(),e(this,s,ls,as,t,{})}}function ns(s){let e,t,f,p,g,m,w,E,N,I,b;return{c(){e=n("div"),t=n("div"),f=n("img"),g=c("\r\n    +25"),m=o(),w=n("div"),E=n("a"),N=c("continue"),this.h()},l(s){e=i(s,"DIV",{id:!0,class:!0});var c=d(e);t=i(c,"DIV",{id:!0,class:!0});var l=d(t);f=i(l,"IMG",{class:!0,src:!0,alt:!0}),g=a(l,"\r\n    +25"),l.forEach(r),m=u(c),w=i(c,"DIV",{id:!0});var n=d(w);E=i(n,"A",{class:!0,"sveltekit:prefetch":!0,href:!0});var o=d(E);N=a(o,"continue"),o.forEach(r),n.forEach(r),c.forEach(r),this.h()},h(){h(f,"class","gold svelte-156en7r"),f.src!==(p="/static/assets/gold-icon.png")&&h(f,"src","/static/assets/gold-icon.png"),h(f,"alt","gold"),h(t,"id","span-1-col"),h(t,"class","svelte-156en7r"),h(E,"class","continue-button shade svelte-156en7r"),h(E,"sveltekit:prefetch",""),h(E,"href","/levels"),h(w,"id","span-2-col"),h(e,"id","container"),h(e,"class","svelte-156en7r")},m(c,a){l(c,e,a),v(e,t),v(t,f),v(t,g),v(e,m),v(e,w),v(w,E),v(E,N),I||(b=A(E,"click",s[0]),I=!0)},p:S,i:S,o:S,d(s){s&&r(e),I=!1,b()}}}function os(s,e,t){let c;y(s,P,(s=>t(1,c=s)));return[()=>{B(P,c.enteredNotesAsID=[],c),B(P,c.enteredNotes=[],c),B(P,c.enteredNoteTypes=[],c),c.finishedTutorial&&B(P,c.tutorialState=7,c),B(P,c.tutorialState+=1,c),B(P,c.wonRound=!1,c)}]}class is extends s{constructor(s){super(),e(this,s,os,ns,t,{})}}export{rs as M,L as N,is as R};
