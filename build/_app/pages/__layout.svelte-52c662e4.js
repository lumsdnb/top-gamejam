import{S as s,i as a,s as t,e,t as l,c,a as r,g as h,d as i,b as o,D as v,f as n,E as f,k as m,n as u,F as p,l as q,G as d,H as E,I as k,j as b,m as $,o as A,J as L,x as I,u as g,v as x}from"../chunks/vendor-09e2d04d.js";import{p as H}from"../chunks/stores-479d6723.js";import{g as N}from"../chunks/stores-68f61374.js";function S(s){let a,t,m;return{c(){a=e("li"),t=e("a"),m=l("Levels"),this.h()},l(s){a=c(s,"LI",{class:!0});var e=r(a);t=c(e,"A",{"sveltekit:prefetch":!0,href:!0,class:!0});var l=r(t);m=h(l,"Levels"),l.forEach(i),e.forEach(i),this.h()},h(){o(t,"sveltekit:prefetch",""),o(t,"href","/levels"),o(t,"class","svelte-q6tamq"),o(a,"class","svelte-q6tamq"),v(a,"active","/levels"===s[2].path)},m(s,e){n(s,a,e),f(a,t),f(t,m)},p(s,t){4&t&&v(a,"active","/levels"===s[2].path)},d(s){s&&i(a)}}}function j(s){let a,t,v,q,E,k,b,$,A;return{c(){a=e("nav"),t=e("button"),v=e("img"),E=m(),k=e("h1"),b=l("bard.io"),this.h()},l(s){a=c(s,"NAV",{id:!0,class:!0});var e=r(a);t=c(e,"BUTTON",{class:!0});var l=r(t);v=c(l,"IMG",{src:!0,alt:!0,id:!0,class:!0}),l.forEach(i),E=u(e),k=c(e,"H1",{class:!0});var o=r(k);b=h(o,"bard.io"),o.forEach(i),e.forEach(i),this.h()},h(){v.src!==(q="/static/assets/menu-icon-mobile.png")&&o(v,"src","/static/assets/menu-icon-mobile.png"),o(v,"alt","Menu Button"),o(v,"id","menu-icon"),o(v,"class","svelte-q6tamq"),o(t,"class","svelte-q6tamq"),o(k,"class","svelte-q6tamq"),o(a,"id","mobile-nav"),o(a,"class","svelte-q6tamq")},m(e,l){n(e,a,l),f(a,t),f(t,v),f(a,E),f(a,k),f(k,b),$||(A=p(t,"click",s[3]),$=!0)},p:d,d(s){s&&i(a),$=!1,A()}}}function M(s){let a,t,q,d,E,k,b,$,A,L,I,g,x=s[1].tutorialState>=7&&U(s);return{c(){a=e("div"),t=e("ul"),q=e("li"),d=e("a"),E=l("Home"),k=m(),x&&x.c(),b=m(),$=e("li"),A=e("a"),L=l("About"),this.h()},l(s){a=c(s,"DIV",{id:!0,class:!0});var e=r(a);t=c(e,"UL",{id:!0,class:!0});var l=r(t);q=c(l,"LI",{class:!0});var o=r(q);d=c(o,"A",{"sveltekit:prefetch":!0,href:!0,class:!0});var v=r(d);E=h(v,"Home"),v.forEach(i),o.forEach(i),k=u(l),x&&x.l(l),b=u(l),$=c(l,"LI",{class:!0});var n=r($);A=c(n,"A",{"sveltekit:prefetch":!0,href:!0,class:!0});var f=r(A);L=h(f,"About"),f.forEach(i),n.forEach(i),l.forEach(i),e.forEach(i),this.h()},h(){o(d,"sveltekit:prefetch",""),o(d,"href","/"),o(d,"class","svelte-q6tamq"),o(q,"class","svelte-q6tamq"),v(q,"active","/"===s[2].path),o(A,"sveltekit:prefetch",""),o(A,"href","/about"),o(A,"class","svelte-q6tamq"),o($,"class","svelte-q6tamq"),v($,"active","/about"===s[2].path),o(t,"id","modal-inner"),o(t,"class","svelte-q6tamq"),o(a,"id","modal"),o(a,"class","svelte-q6tamq")},m(e,l){n(e,a,l),f(a,t),f(t,q),f(q,d),f(d,E),f(t,k),x&&x.m(t,null),f(t,b),f(t,$),f($,A),f(A,L),I||(g=p(a,"click",s[4]),I=!0)},p(s,a){4&a&&v(q,"active","/"===s[2].path),s[1].tutorialState>=7?x?x.p(s,a):(x=U(s),x.c(),x.m(t,b)):x&&(x.d(1),x=null),4&a&&v($,"active","/about"===s[2].path)},d(s){s&&i(a),x&&x.d(),I=!1,g()}}}function U(s){let a,t,m;return{c(){a=e("li"),t=e("a"),m=l("Levels"),this.h()},l(s){a=c(s,"LI",{class:!0});var e=r(a);t=c(e,"A",{"sveltekit:prefetch":!0,href:!0,class:!0});var l=r(t);m=h(l,"Levels"),l.forEach(i),e.forEach(i),this.h()},h(){o(t,"sveltekit:prefetch",""),o(t,"href","/levels"),o(t,"class","svelte-q6tamq"),o(a,"class","svelte-q6tamq"),v(a,"active","/levels"===s[2].path)},m(s,e){n(s,a,e),f(a,t),f(t,m)},p(s,t){4&t&&v(a,"active","/levels"===s[2].path)},d(s){s&&i(a)}}}function V(s){let a,t,p,E,k,b,$,A,L,I,g,x,H,N,U=s[1].tutorialState>=6&&S(s);let V=j(s),B=s[0]&&M(s);return{c(){a=e("nav"),t=e("ul"),U&&U.c(),p=m(),E=e("li"),k=e("a"),b=e("h1"),$=l("bard.io"),A=m(),L=e("li"),I=e("a"),g=l("About"),x=m(),V.c(),H=m(),B&&B.c(),N=q(),this.h()},l(s){a=c(s,"NAV",{class:!0});var e=r(a);t=c(e,"UL",{class:!0});var l=r(t);U&&U.l(l),p=u(l),E=c(l,"LI",{class:!0});var o=r(E);k=c(o,"A",{"sveltekit:prefetch":!0,href:!0,class:!0});var v=r(k);b=c(v,"H1",{});var n=r(b);$=h(n,"bard.io"),n.forEach(i),v.forEach(i),o.forEach(i),A=u(l),L=c(l,"LI",{class:!0});var f=r(L);I=c(f,"A",{"sveltekit:prefetch":!0,href:!0,class:!0});var m=r(I);g=h(m,"About"),m.forEach(i),f.forEach(i),l.forEach(i),e.forEach(i),x=u(s),V.l(s),H=u(s),B&&B.l(s),N=q(),this.h()},h(){o(k,"sveltekit:prefetch",""),o(k,"href","/"),o(k,"class","svelte-q6tamq"),o(E,"class","svelte-q6tamq"),v(E,"active","/"===s[2].path),o(I,"sveltekit:prefetch",""),o(I,"href","/about"),o(I,"class","svelte-q6tamq"),o(L,"class","svelte-q6tamq"),v(L,"active","/about"===s[2].path),o(t,"class","svelte-q6tamq"),o(a,"class","desktop-nav svelte-q6tamq")},m(s,e){n(s,a,e),f(a,t),U&&U.m(t,null),f(t,p),f(t,E),f(E,k),f(k,b),f(b,$),f(t,A),f(t,L),f(L,I),f(I,g),n(s,x,e),V.m(s,e),n(s,H,e),B&&B.m(s,e),n(s,N,e)},p(s,[a]){s[1].tutorialState>=6?U?U.p(s,a):(U=S(s),U.c(),U.m(t,p)):U&&(U.d(1),U=null),4&a&&v(E,"active","/"===s[2].path),4&a&&v(L,"active","/about"===s[2].path),V.p(s,a),s[0]?B?B.p(s,a):(B=M(s),B.c(),B.m(N.parentNode,N)):B&&(B.d(1),B=null)},i:d,o:d,d(s){s&&i(a),U&&U.d(),s&&i(x),V.d(s),s&&i(H),B&&B.d(s),s&&i(N)}}}function B(s,a,t){let e,l;E(s,N,(s=>t(1,e=s))),E(s,H,(s=>t(2,l=s)));let c=!1;return[c,e,l,()=>{t(0,c=!0)},()=>{t(0,c=!1)}]}class D extends s{constructor(s){super(),a(this,s,B,V,t,{})}}function G(s){let a,t,l,h;a=new D({});const v=s[1].default,f=k(v,s,s[0],null);return{c(){b(a.$$.fragment),t=m(),l=e("main"),f&&f.c(),this.h()},l(s){$(a.$$.fragment,s),t=u(s),l=c(s,"MAIN",{class:!0});var e=r(l);f&&f.l(e),e.forEach(i),this.h()},h(){o(l,"class","svelte-10xlxqk")},m(s,e){A(a,s,e),n(s,t,e),n(s,l,e),f&&f.m(l,null),h=!0},p(s,[a]){f&&f.p&&(!h||1&a)&&L(f,v,s,s[0],h?a:-1,null,null)},i(s){h||(I(a.$$.fragment,s),I(f,s),h=!0)},o(s){g(a.$$.fragment,s),g(f,s),h=!1},d(s){x(a,s),s&&i(t),s&&i(l),f&&f.d(s)}}}function T(s,a,t){let{$$slots:e={},$$scope:l}=a;return s.$$set=s=>{"$$scope"in s&&t(0,l=s.$$scope)},[l,e]}class w extends s{constructor(s){super(),a(this,s,T,G,t,{})}}export{w as default};
