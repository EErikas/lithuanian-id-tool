var qe=Object.defineProperty;var Re=(e,t,n)=>t in e?qe(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var he=(e,t,n)=>(Re(e,typeof t!="symbol"?t+"":t,n),n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function n(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(o){if(o.ep)return;o.ep=!0;const l=n(o);fetch(o.href,l)}})();function N(){}function Ie(e){return e()}function $e(){return Object.create(null)}function le(e){e.forEach(Ie)}function ke(e){return typeof e=="function"}function Pe(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function Fe(e){return Object.keys(e).length===0}function Me(e,...t){if(e==null){for(const r of t)r(void 0);return N}const n=e.subscribe(...t);return n.unsubscribe?()=>n.unsubscribe():n}function Oe(e,t,n){e.$$.on_destroy.push(Me(t,n))}function s(e,t){e.appendChild(t)}function L(e,t,n){e.insertBefore(t,n||null)}function H(e){e.parentNode&&e.parentNode.removeChild(e)}function ge(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function h(e){return document.createElement(e)}function b(e){return document.createTextNode(e)}function v(){return b(" ")}function We(){return b("")}function fe(e,t,n,r){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}function k(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function Ge(e){return Array.from(e.childNodes)}function w(e,t){t=""+t,e.data!==t&&(e.data=t)}function pe(e,t){e.value=t??""}function De(e,t,n){for(let r=0;r<e.options.length;r+=1){const o=e.options[r];if(o.__value===t){o.selected=!0;return}}(!n||t!==void 0)&&(e.selectedIndex=-1)}function Ke(e){const t=e.querySelector(":checked");return t&&t.__value}let ve;function ue(e){ve=e}const ie=[],Ne=[];let se=[];const Ae=[],Ue=Promise.resolve();let be=!1;function Ve(){be||(be=!0,Ue.then(Se))}function de(e){se.push(e)}const me=new Set;let re=0;function Se(){if(re!==0)return;const e=ve;do{try{for(;re<ie.length;){const t=ie[re];re++,ue(t),Ye(t.$$)}}catch(t){throw ie.length=0,re=0,t}for(ue(null),ie.length=0,re=0;Ne.length;)Ne.pop()();for(let t=0;t<se.length;t+=1){const n=se[t];me.has(n)||(me.add(n),n())}se.length=0}while(ie.length);for(;Ae.length;)Ae.pop()();be=!1,me.clear(),ue(e)}function Ye(e){if(e.fragment!==null){e.update(),le(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(de)}}function Je(e){const t=[],n=[];se.forEach(r=>e.indexOf(r)===-1?t.push(r):n.push(r)),n.forEach(r=>r()),se=t}const Qe=new Set;function Xe(e,t){e&&e.i&&(Qe.delete(e),e.i(t))}function ce(e){return(e==null?void 0:e.length)!==void 0?e:Array.from(e)}function Ze(e,t,n){const{fragment:r,after_update:o}=e.$$;r&&r.m(t,n),de(()=>{const l=e.$$.on_mount.map(Ie).filter(ke);e.$$.on_destroy?e.$$.on_destroy.push(...l):le(l),e.$$.on_mount=[]}),o.forEach(de)}function xe(e,t){const n=e.$$;n.fragment!==null&&(Je(n.after_update),le(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function et(e,t){e.$$.dirty[0]===-1&&(ie.push(e),Ve(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function tt(e,t,n,r,o,l,c=null,f=[-1]){const u=ve;ue(e);const i=e.$$={fragment:null,ctx:[],props:l,update:N,not_equal:o,bound:$e(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(u?u.$$.context:[])),callbacks:$e(),dirty:f,skip_bound:!1,root:t.target||u.$$.root};c&&c(i.root);let A=!1;if(i.ctx=n?n(e,t.props||{},(m,j,...I)=>{const O=I.length?I[0]:j;return i.ctx&&o(i.ctx[m],i.ctx[m]=O)&&(!i.skip_bound&&i.bound[m]&&i.bound[m](O),A&&et(e,m)),j}):[],i.update(),A=!0,le(i.before_update),i.fragment=r?r(i.ctx):!1,t.target){if(t.hydrate){const m=Ge(t.target);i.fragment&&i.fragment.l(m),m.forEach(H)}else i.fragment&&i.fragment.c();t.intro&&Xe(e.$$.fragment),Ze(e,t.target,t.anchor),Se()}ue(u)}class nt{constructor(){he(this,"$$");he(this,"$$set")}$destroy(){xe(this,1),this.$destroy=N}$on(t,n){if(!ke(n))return N;const r=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return r.push(n),()=>{const o=r.indexOf(n);o!==-1&&r.splice(o,1)}}$set(t){this.$$set&&!Fe(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const rt="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(rt);const oe=[];function ot(e,t){return{subscribe:ze(e,t).subscribe}}function ze(e,t=N){let n;const r=new Set;function o(f){if(Pe(e,f)&&(e=f,n)){const u=!oe.length;for(const i of r)i[1](),oe.push(i,e);if(u){for(let i=0;i<oe.length;i+=2)oe[i][0](oe[i+1]);oe.length=0}}}function l(f){o(f(e))}function c(f,u=N){const i=[f,u];return r.add(i),r.size===1&&(n=t(o,l)||N),f(e),()=>{r.delete(i),r.size===0&&n&&(n(),n=null)}}return{set:o,update:l,subscribe:c}}function it(e,t,n){const r=!Array.isArray(e),o=r?[e]:e;if(!o.every(Boolean))throw new Error("derived() expects stores as input, got a falsy value");const l=t.length<2;return ot(n,(c,f)=>{let u=!1;const i=[];let A=0,m=N;const j=()=>{if(A)return;m();const O=t(r?i[0]:i,c,f);l?c(O):m=ke(O)?O:N},I=o.map((O,E)=>Me(O,M=>{i[E]=M,A&=~(1<<E),u&&j()},()=>{A|=1<<E}));return u=!0,j(),function(){le(I),m(),u=!1}})}const Be={en:{"homepage.title":"Lithuanian ID Number Tool","homepage.introHeader":"What is it?","homepage.introText":"This tool checks and generates personal codes followingthe rules for creating a personal code of the Republic of Lithuania","homepage.noticeHeader":"Notice","homepage.noticeText":[`This website is designed for educational and informational purposes only.
       The ID codes generated by the tool are supposed to be random, any resemblance to a real ID is unintended.`,"The site creator shall not be liable for any misuse or unauthorized use of the provided resources.","Data entered/generated on this site is not stored anywhere."],"homepage.entryPlaceholder":"Personal ID Code","button.check":"Check","button.generate":"Generate","error.header":"Error","error.wrongLength":"Wrong format! The personal ID code consists of <strong>11</strong> digits.","error.notNumber":"Wrong format! The personal ID code consists of 11 <strong>digits</strong>.","error.wrongCheckDigit":"Wrong check digit (should be <strong>{{correctAnswer}}</strong>)!","error.wrongFirstDigit":"Wrong first digit! The first digit can range from 1 to 6 (odd for males, even for females)","results.header":"Decoding Results","results.genderHeader":"Gender","results.birthDateHeader":"Date of Birth","results.birthOrderHeader":"Previous Entry Count","gender.male":"Male","gender.female":"Female","exception.month":"Rare exception for elderly people who cannot recall their birth month, in such cases month is replaced with 0.","exception.day":"Rare exception for elderly people who cannot recall their birth date, in such cases day is replaced with 0."},lt:{"homepage.title":"Lietuvos asmens kodo įrankiai","homepage.introHeader":"Kas tai?","homepage.introText":"Šis įrankis tikrina ir generuoja asmens kodus pagal Lietuvos Respublikos asmens kodo sudarymo taisykles","homepage.noticeHeader":"Pastaba","homepage.noticeText":[`Ši svetainė skirta tik edukaciniais ir informaciniais tikslais.
       Įrankio sugeneruoti Asmens kodai turėtų būti atsitiktiniai, bet koks panašumas į egzistuojantį a/k yra nenumatytas.`,"Svetainės kūrėjas neatsako už netinkamą ar neteisėtą pateiktų išteklių naudojimą.","Šioje svetainėje įvesti/sugeneruoti duomenys niekur nesaugomi."],"homepage.entryPlaceholder":"Asmens kodas","button.check":"Tikrinti","button.generate":"Generuoti","error.header":"Klaida","error.wrongLength":"Neteisingas formatas! Asmens kodas susideda iš <strong>11</strong> skaitmenų.","error.notNumber":"Neteisingas formatas! Asmens kodas susideda iš 11 <strong>skaitmenų</strong>.","error.wrongCheckDigit":"Neteisingas kontrolinis skaitmuo (turėtų būti <strong>{{correctAnswer}}</strong>)!","error.wrongFirstDigit":"Neteisingas pirmasis skaitmuo! Pirmasis skaitmuo gali būti nuo 1 iki 6 (nelyginiai vyrams, lyginiai moterims)","results.header":"A/k iššifravimo rezultatai","results.genderHeader":"Lytis","results.birthDateHeader":"Gimimo data","results.birthOrderHeader":"Tą dieną gimusių asmenų eilės numeris","gender.male":"Vyras","gender.female":"Moteris","exception.month":"Reta išimtis suteikiama vyresnio amžiaus žmonėms neprisimenantiems savo gimimo mėnesio. Tokiuose koduose vietoje mėnesio skaitmenų įrašomi 0.","exception.day":"Reta išimtis suteikiama vyresnio amžiaus žmonėms neprisimenantiems savo gimimo dienos. Tokiuose koduose vietoje dienos skaitmenų įrašomi 0."}},_e=ze("en"),st=Object.keys(Be);function lt(e,t,n){if(!t)throw new Error("no key provided to $t()");if(!e)throw new Error(`no translation for key "${t}"`);let r=Be[e][t];if(!r)throw new Error(`no translation found for ${e}.${t}`);return Object.keys(n).map(o=>{const l=new RegExp(`{{${o}}}`,"g");r=r.replace(l,n[o])}),r}const at=it(_e,e=>(t,n={})=>lt(e,t,n)),ut=[[1,2,3,4,5,6,7,8,9,1],[3,4,5,6,7,8,9,1,2,3]],ct=["gender.male","gender.female"],ft=(e,t)=>{let n=0;for(let r=0;r<10;r++)n+=e[r]*t[r];return n%11},ye=(e,t=0)=>{if(t===2)return 0;const n=ft(e,ut[t]);return n!==10?n:ye(e,t+1)},Te=(e,t)=>{const n=Math.ceil(e),r=Math.floor(t);return Math.floor(Math.random()*(r-n+1)+n)},dt=()=>{const e=new Date(new Date().getTime()-Math.random()*1e12),t=[Te(1,6),String(e.getFullYear()%100).padStart(2,"0"),String(e.getMonth()).padStart(2,"0"),String(e.getDate()).padStart(2,"0"),String(Te(1,999)).padStart(3,"0")].join(""),n=ye([...t].map(Number));return t+String(n)},ht=e=>{if(e.length!==11)return{error:"error.wrongLength"};if(isNaN(e))return{error:"error.notNumber"};const t=[...e].map(Number),n=+(t[0]%2===0);let r=0;switch(t[0]){case 1:case 2:r=1800;break;case 3:case 4:r=1900;break;case 5:case 6:r=2e3;break;default:return{error:"error.wrongFirstDigit"}}const o=ye(t);if(o!==t[10])return{error:"error.wrongCheckDigit",correctAnswer:o};r+=Number(e.slice(1,3));const l=e.slice(3,5),c=e.slice(5,7),f={exceptions:[],date:[r,l,c].join("-")};return l==="00"&&f.exceptions.push("exception.month"),c==="00"&&f.exceptions.push("exception.day"),{error:null,gender:ct[n],dateOfBirth:f,birthOrder:Number(e.slice(7,10))}};function He(e,t,n){const r=e.slice();return r[8]=t[n],r}function je(e,t,n){const r=e.slice();return r[11]=t[n][0],r[12]=t[n][1],r}function mt(e,t,n){const r=e.slice();return r[15]=t[n],r}function gt(e){let t;return{c(){t=h("option"),t.textContent=`${e[15].toUpperCase()} `,t.__value=e[15],pe(t,t.__value)},m(n,r){L(n,t,r)},p:N,d(n){n&&H(t)}}}function pt(e){let t,n=e[2]("error.header")+"",r,o,l,c,f=e[2](e[1].error,{correctAnswer:e[1].correctAnswer})+"";return{c(){t=h("h2"),r=b(n),o=b("!"),l=v(),c=h("p")},m(u,i){L(u,t,i),s(t,r),s(t,o),L(u,l,i),L(u,c,i),c.innerHTML=f},p(u,i){i&4&&n!==(n=u[2]("error.header")+"")&&w(r,n),i&6&&f!==(f=u[2](u[1].error,{correctAnswer:u[1].correctAnswer})+"")&&(c.innerHTML=f)},d(u){u&&(H(t),H(l),H(c))}}}function bt(e){return{c:N,m:N,p:N,d:N}}function _t(e){let t,n=e[2]("results.header")+"",r,o,l,c,f,u=e[2]("results.genderHeader")+"",i,A,m,j=e[2](e[1].gender)+"",I,O,E,M,Y=e[2]("results.birthDateHeader")+"",S,D,P,J=e[1].dateOfBirth.date+"",z,Q,W,G=Array.from({length:e[1].dateOfBirth.exceptions.length},Ce).join(", ")+"",ee,X,B,K,Z=e[2]("results.birthOrderHeader")+"",U,ae,V,q=e[1].birthOrder+"",x,te,R,F=ce(Object.entries(e[1].dateOfBirth.exceptions)),y=[];for(let d=0;d<F.length;d+=1)y[d]=Ee(je(e,F,d));return{c(){t=h("h2"),r=b(n),o=v(),l=h("table"),c=h("tr"),f=h("th"),i=b(u),A=v(),m=h("td"),I=b(j),O=v(),E=h("tr"),M=h("th"),S=b(Y),D=v(),P=h("td"),z=b(J),Q=v(),W=h("sup"),ee=b(G),X=v(),B=h("tr"),K=h("th"),U=b(Z),ae=v(),V=h("td"),x=b(q),te=v();for(let d=0;d<y.length;d+=1)y[d].c();R=We(),k(f,"class","svelte-1hzqyyb"),k(m,"class","svelte-1hzqyyb"),k(M,"class","svelte-1hzqyyb"),k(P,"class","svelte-1hzqyyb"),k(K,"class","svelte-1hzqyyb"),k(V,"class","svelte-1hzqyyb"),k(l,"class","svelte-1hzqyyb")},m(d,_){L(d,t,_),s(t,r),L(d,o,_),L(d,l,_),s(l,c),s(c,f),s(f,i),s(c,A),s(c,m),s(m,I),s(l,O),s(l,E),s(E,M),s(M,S),s(E,D),s(E,P),s(P,z),s(P,Q),s(P,W),s(W,ee),s(l,X),s(l,B),s(B,K),s(K,U),s(B,ae),s(B,V),s(V,x),L(d,te,_);for(let g=0;g<y.length;g+=1)y[g]&&y[g].m(d,_);L(d,R,_)},p(d,_){if(_&4&&n!==(n=d[2]("results.header")+"")&&w(r,n),_&4&&u!==(u=d[2]("results.genderHeader")+"")&&w(i,u),_&6&&j!==(j=d[2](d[1].gender)+"")&&w(I,j),_&4&&Y!==(Y=d[2]("results.birthDateHeader")+"")&&w(S,Y),_&2&&J!==(J=d[1].dateOfBirth.date+"")&&w(z,J),_&2&&G!==(G=Array.from({length:d[1].dateOfBirth.exceptions.length},Ce).join(", ")+"")&&w(ee,G),_&4&&Z!==(Z=d[2]("results.birthOrderHeader")+"")&&w(U,Z),_&2&&q!==(q=d[1].birthOrder+"")&&w(x,q),_&6){F=ce(Object.entries(d[1].dateOfBirth.exceptions));let g;for(g=0;g<F.length;g+=1){const C=je(d,F,g);y[g]?y[g].p(C,_):(y[g]=Ee(C),y[g].c(),y[g].m(R.parentNode,R))}for(;g<y.length;g+=1)y[g].d(1);y.length=F.length}},d(d){d&&(H(t),H(o),H(l),H(te),H(R)),ge(y,d)}}}function Ee(e){let t,n,r=Number(e[11])+1+"",o,l,c=e[2](e[12])+"",f;return{c(){t=h("p"),n=h("sup"),o=b(r),l=v(),f=b(c)},m(u,i){L(u,t,i),s(t,n),s(n,o),s(t,l),s(t,f)},p(u,i){i&2&&r!==(r=Number(u[11])+1+"")&&w(o,r),i&6&&c!==(c=u[2](u[12])+"")&&w(f,c)},d(u){u&&H(t)}}}function Le(e){let t,n=e[8]+"",r;return{c(){t=h("p"),r=b(n)},m(o,l){L(o,t,l),s(t,r)},p(o,l){l&4&&n!==(n=o[8]+"")&&w(r,n)},d(o){o&&H(t)}}}function kt(e){let t,n,r=e[2]("homepage.title")+"",o,l,c,f,u,i,A,m=e[2]("homepage.introHeader")+"",j,I,O,E=e[2]("homepage.introText")+"",M,Y,S,D,P,J,z,Q,W=e[2]("button.check")+"",G,ee,X,B=e[2]("button.generate")+"",K,Z,U,ae,V,q=e[2]("homepage.noticeHeader")+"",x,te,R,F,y=ce(st),d=[];for(let a=0;a<y.length;a+=1)d[a]=gt(mt(e,y,a));function _(a,$){return a[1].error===null?_t:a[1].error===void 0?bt:pt}let g=_(e),C=g(e),ne=ce(e[2]("homepage.noticeText")),T=[];for(let a=0;a<ne.length;a+=1)T[a]=Le(He(e,ne,a));return{c(){t=h("div"),n=h("div"),o=b(r),l=v(),c=h("div"),f=h("select");for(let a=0;a<d.length;a+=1)d[a].c();u=v(),i=h("main"),A=h("h2"),j=b(m),I=v(),O=h("p"),M=b(E),Y=v(),S=h("div"),D=h("input"),J=v(),z=h("div"),Q=h("button"),G=b(W),ee=v(),X=h("button"),K=b(B),Z=v(),U=h("div"),C.c(),ae=v(),V=h("h2"),x=b(q),te=v();for(let a=0;a<T.length;a+=1)T[a].c();k(n,"class","site-name"),e[3]===void 0&&de(()=>e[6].call(f)),k(c,"class","select-wrapper"),k(t,"class","navbar"),k(D,"type","text"),k(D,"class","form-input"),k(D,"pattern","[0-9]11"),k(D,"maxlength","11"),k(D,"placeholder",P=e[2]("homepage.entryPlaceholder")),k(D,"title","Only numbers from 0 to 9, up to 11 characters"),k(z,"class","form-buttons"),k(S,"class","input-form")},m(a,$){L(a,t,$),s(t,n),s(n,o),s(t,l),s(t,c),s(c,f);for(let p=0;p<d.length;p+=1)d[p]&&d[p].m(f,null);De(f,e[3],!0),L(a,u,$),L(a,i,$),s(i,A),s(A,j),s(i,I),s(i,O),s(O,M),s(i,Y),s(i,S),s(S,D),pe(D,e[0]),s(S,J),s(S,z),s(z,Q),s(Q,G),s(z,ee),s(z,X),s(X,K),s(i,Z),s(i,U),C.m(U,null),s(i,ae),s(i,V),s(V,x),s(i,te);for(let p=0;p<T.length;p+=1)T[p]&&T[p].m(i,null);R||(F=[fe(f,"change",e[6]),fe(D,"input",e[7]),fe(Q,"click",e[5]),fe(X,"click",e[4])],R=!0)},p(a,[$]){if($&4&&r!==(r=a[2]("homepage.title")+"")&&w(o,r),$&8&&De(f,a[3]),$&4&&m!==(m=a[2]("homepage.introHeader")+"")&&w(j,m),$&4&&E!==(E=a[2]("homepage.introText")+"")&&w(M,E),$&4&&P!==(P=a[2]("homepage.entryPlaceholder"))&&k(D,"placeholder",P),$&1&&D.value!==a[0]&&pe(D,a[0]),$&4&&W!==(W=a[2]("button.check")+"")&&w(G,W),$&4&&B!==(B=a[2]("button.generate")+"")&&w(K,B),g===(g=_(a))&&C?C.p(a,$):(C.d(1),C=g(a),C&&(C.c(),C.m(U,null))),$&4&&q!==(q=a[2]("homepage.noticeHeader")+"")&&w(x,q),$&4){ne=ce(a[2]("homepage.noticeText"));let p;for(p=0;p<ne.length;p+=1){const we=He(a,ne,p);T[p]?T[p].p(we,$):(T[p]=Le(we),T[p].c(),T[p].m(i,null))}for(;p<T.length;p+=1)T[p].d(1);T.length=ne.length}},i:N,o:N,d(a){a&&(H(t),H(u),H(i)),ge(d,a),C.d(),ge(T,a),R=!1,le(F)}}}const Ce=(e,t)=>t+1;function vt(e,t,n){let r,o;Oe(e,at,m=>n(2,r=m)),Oe(e,_e,m=>n(3,o=m));let l="",c={};function f(){n(0,l=dt())}function u(){n(1,c=ht(l))}function i(){o=Ke(this),_e.set(o)}function A(){l=this.value,n(0,l)}return[l,c,r,o,f,u,i,A]}class yt extends nt{constructor(t){super(),tt(this,t,vt,kt,Pe,{})}}new yt({target:document.getElementById("app")});