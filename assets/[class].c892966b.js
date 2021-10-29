import{d as e,r as t,c as s,p as l,g as n,o as r,b as a,f as o,e as d,w as i,t as c,F as u,A as p,h as m,z as v,m as y,n as h,k as f,l as b,C as g,D as k,M as x,I as w}from"./vendor.79db57bd.js";import{_ as T,m as $,h as _}from"./SourceButton.vue_vue&type=script&setup=true&lang.21b57d7d.js";import{i as M,u as H,_ as L,b as j}from"./index.ba443a5e.js";import{_ as q,a as C,t as A,b as E,c as Z,d as D,p as S}from"./See.vue_vue&type=script&setup=true&lang.bf06c5a6.js";import{_ as I,a as P}from"./chevron-down.046bf525.js";import{a as B,b as V,D as R}from"./headlessui.esm.5f2b3dc4.js";function z(e){return`${"static"===e.scope?"s-":""}${e.name}`}const F={key:0},N={class:"text-gray-800 dark:text-gray-100 py-2 text-md font-bold uppercase flex gap-1 items-center"},O={class:"sr-only"},U=m(" Properties "),G={class:"space-x-1 text-gray-200 text-sm font-semibold uppercase"},J={key:0,class:"inline-flex items-center justify-center w-6 h-6 rounded-md bg-discord-blurple-500"},K={key:1,class:"inline-flex items-center justify-center w-6 h-6 rounded-md bg-discord-blurple-500"},Q={key:2,class:"inline-flex items-center justify-center w-6 h-6 rounded-md bg-discord-red-500"},W={key:3,class:"inline-flex items-center justify-center w-6 h-6 rounded-md bg-discord-red-500"},X={key:1},Y={class:"text-gray-800 dark:text-gray-100 py-2 text-md font-bold uppercase flex gap-1 items-center"},ee={class:"sr-only"},te=m(" Methods "),se={class:"space-x-1 text-gray-200 text-sm font-semibold uppercase"},le={key:0,class:"inline-flex items-center justify-center w-6 h-6 rounded-md bg-discord-blurple-500"},ne={key:1,class:"inline-flex items-center justify-center w-6 h-6 rounded-md bg-discord-blurple-500"},re={key:2,class:"inline-flex items-center justify-center w-6 h-6 rounded-md bg-discord-red-500"},ae={key:3,class:"inline-flex items-center justify-center w-6 h-6 rounded-md bg-discord-red-500"},oe={key:2},de={class:"text-gray-800 dark:text-gray-100 py-2 text-md font-bold uppercase flex gap-1 items-center"},ie={class:"sr-only"},ce=m(" Events "),ue={key:0,class:"\n\t\t\t\t\t\t\t\ttext-gray-200 text-sm\n\t\t\t\t\t\t\t\tfont-semibold\n\t\t\t\t\t\t\t\tuppercase\n\t\t\t\t\t\t\t\tinline-flex\n\t\t\t\t\t\t\t\titems-center\n\t\t\t\t\t\t\t\tjustify-center\n\t\t\t\t\t\t\t\tw-6\n\t\t\t\t\t\t\t\th-6\n\t\t\t\t\t\t\t\trounded-md\n\t\t\t\t\t\t\t\tbg-discord-red-500\n\t\t\t\t\t\t\t"};var pe=e({props:{properties:{type:Array,required:!1},methods:{type:Array,required:!1},events:{type:Array,required:!1}},setup(e){const f=e,b=y(h).greater("lg"),g=t(!1),k=s((()=>{var e;return M.value?f.properties:null==(e=f.properties)?void 0:e.filter((e=>"private"!==e.access))})),x=s((()=>{var e;return M.value?f.methods:null==(e=f.methods)?void 0:e.filter((e=>"private"!==e.access))})),w=s((()=>{var e;return M.value?f.events:null==(e=f.events)?void 0:e.filter((e=>"private"!==e.access))})),T=e=>{const t=document.getElementById(`doc-for-${e}`);null==t||t.scrollIntoView({behavior:"smooth",block:"start"})};return l(b,(()=>g.value=!0),{immediate:!0}),(t,s)=>{const l=I,y=P,h=n("router-link");return r(),a("div",{class:["grid sm:grid-cols-2 mb-10",e.events&&e.events.length?"md:grid-cols-3":null]},[o(k)&&o(k).length?(r(),a("div",F,[d(o(R),{"default-open":g.value},{default:i((({open:e})=>[d(o(B),{class:"focus:outline-none",tabindex:"-1"},{default:i((()=>[d("div",N,[d("button",{class:"leading-3 rounded-md p-1 focus:outline-none focus-visible:ring-1 focus-visible:ring-white","aria-expanded":e},[d("span",O,c(e?"Shrink":"Expand"),1),d(l,{class:["inline-block",{hidden:e}],"aria-hidden":"true"},null,8,["class"]),d(y,{class:["inline-block",{hidden:!e}],"aria-hidden":"true"},null,8,["class"])],8,["aria-expanded"]),U])])),_:2},1024),d(o(V),{as:"ul",class:"no-list !mt-0 pl-2"},{default:i((()=>[(r(!0),a(u,null,p(o(k),(e=>(r(),a("li",{key:o(z)(e),class:"\n\t\t\t\t\t\t\tcursor-pointer\n\t\t\t\t\t\t\tmb-14\n\t\t\t\t\t\t\tborder-l-4 border-transparent\n\t\t\t\t\t\t\trounded-sm\n\t\t\t\t\t\t\thover:border-l-4 hover:border-discord-blurple-500\n\t\t\t\t\t\t",onClick:t=>T(o(z)(e))},[d(h,{to:{name:"docs-source-tag-class-class",query:{scrollTo:o(z)(e)}},class:"mx-2"},{default:i((()=>[m(c(e.name),1)])),_:2},1032,["to"]),d("span",G,["static"===e.scope?(r(),a("span",J,"S")):v("",!0),e.abstract?(r(),a("span",K,"A")):v("",!0),e.deprecated?(r(),a("span",Q,"D")):v("",!0),"private"===e.access?(r(),a("span",W,"P")):v("",!0)])],8,["onClick"])))),128))])),_:1})])),_:1},8,["default-open"])])):v("",!0),o(x)&&o(x).length?(r(),a("div",X,[d(o(R),{"default-open":g.value},{default:i((({open:e})=>[d(o(B),{class:"focus:outline-none",tabindex:"-1"},{default:i((()=>[d("div",Y,[d("button",{class:"leading-3 rounded-md p-1 focus:outline-none focus-visible:ring-1 focus-visible:ring-white","aria-expanded":e},[d("span",ee,c(e?"Shrink":"Expand"),1),d(l,{class:["inline-block",{hidden:e}],"aria-hidden":"true"},null,8,["class"]),d(y,{class:["inline-block",{hidden:!e}],"aria-hidden":"true"},null,8,["class"])],8,["aria-expanded"]),te])])),_:2},1024),d(o(V),{as:"ul",class:"no-list !mt-0 pl-2"},{default:i((()=>[(r(!0),a(u,null,p(o(x),(e=>(r(),a("li",{key:o(z)(e),class:"\n\t\t\t\t\t\t\tcursor-pointer\n\t\t\t\t\t\t\tborder-l-4 border-transparent\n\t\t\t\t\t\t\trounded-sm\n\t\t\t\t\t\t\thover:border-l-4 hover:border-discord-blurple-500\n\t\t\t\t\t\t",onClick:t=>T(o(z)(e))},[d(h,{to:{name:"docs-source-tag-class-class",query:{scrollTo:o(z)(e)}},class:"mx-2"},{default:i((()=>[m(c(e.name),1)])),_:2},1032,["to"]),d("span",se,["static"===e.scope?(r(),a("span",le,"S")):v("",!0),e.abstract?(r(),a("span",ne,"A")):v("",!0),e.deprecated?(r(),a("span",re,"D")):v("",!0),"private"===e.access?(r(),a("span",ae,"P")):v("",!0)])],8,["onClick"])))),128))])),_:1})])),_:1},8,["default-open"])])):v("",!0),o(w)&&o(w).length?(r(),a("div",oe,[d(o(R),{"default-open":g.value},{default:i((({open:e})=>[d(o(B),{class:"focus:outline-none",tabindex:"-1"},{default:i((()=>[d("div",de,[d("button",{class:"leading-3 rounded-md p-1 focus:outline-none focus-visible:ring-1 focus-visible:ring-white","aria-expanded":e},[d("span",ie,c(e?"Shrink":"Expand"),1),d(l,{class:["inline-block",{hidden:e}],"aria-hidden":"true"},null,8,["class"]),d(y,{class:["inline-block",{hidden:!e}],"aria-hidden":"true"},null,8,["class"])],8,["aria-expanded"]),ce])])),_:2},1024),d(o(V),{as:"ul",class:"no-list !mt-0 pl-2"},{default:i((()=>[(r(!0),a(u,null,p(o(w),(e=>(r(),a("li",{key:e.name,class:"\n\t\t\t\t\t\t\tcursor-pointer\n\t\t\t\t\t\t\tborder-l-4 border-transparent\n\t\t\t\t\t\t\trounded-sm\n\t\t\t\t\t\t\thover:border-l-4 hover:border-discord-blurple-500\n\t\t\t\t\t\t",onClick:t=>T(`e-${e.name}`)},[d(h,{to:{name:"docs-source-tag-class-class",query:{scrollTo:`e-${e.name}`}},class:"mx-2"},{default:i((()=>[m(c(e.name),1)])),_:2},1032,["to"]),e.deprecated?(r(),a("span",ue,"D")):v("",!0)],8,["onClick"])))),128))])),_:1})])),_:1},8,["default-open"])])):v("",!0)],2)}}});const me={class:"flex items-center"},ve={class:"inline-block mr-2"},ye={class:"space-x-2 text-gray-200 text-sm font-semibold uppercase pt-6"},he={key:0,class:"inline-flex items-center px-2.5 py-0.5 rounded-md bg-discord-blurple-500"},fe={key:1,class:"inline-flex items-center px-2.5 py-0.5 rounded-md bg-discord-blurple-500"},be={key:2,class:"inline-flex items-center px-2.5 py-0.5 rounded-md bg-discord-red-500"},ge={key:3,class:"inline-flex items-center px-2.5 py-0.5 rounded-md bg-discord-red-500"},ke={class:"grid pl-2.5"},xe={class:"font-semibold mt-3"},we=m(" Type: "),Te={key:1,class:"mt-3"},$e=m(" Default: "),_e=d("div",{class:"w-full pr-32 lg:pr-96"},[d("div",{class:"h-px bg-gradient-to-r from-gray-500 rounded-full"})],-1);var Me=e({props:{prop:{type:null,required:!0}},setup(e){const t=e,l=f(),y=b(),h=H(),g=s((()=>h.state.docs)),k=s((()=>{var e;return $(null!=(e=Z(t.prop.description,g.value,l,y))?e:"")})),x=s((()=>"string"==typeof t.prop.deprecated?$(Z(t.prop.deprecated,g.value,l,y)):"")),w=s((()=>`${"static"===t.prop.scope?"s-":""}${t.prop.name}`));return(t,s)=>{var l;const y=n("router-link");return r(),a(u,null,[d("div",{id:`doc-for-${o(w)}`,class:"scroll-to mb-8"},[d(T,{class:"float-right mt-8",meta:e.prop.meta},null,8,["meta"]),d("div",me,[d("h3",ve,[d(y,{to:{name:"docs-source-tag-class-class",query:{scrollTo:o(w)}}},{default:i((()=>[m("."+c(e.prop.name),1)])),_:1},8,["to"])]),d("span",ye,["static"===e.prop.scope?(r(),a("span",he,"Static")):v("",!0),e.prop.readonly?(r(),a("span",fe,"Read-only")):v("",!0),e.prop.deprecated?(r(),a("span",be,"Deprecated")):v("",!0),"private"===e.prop.access?(r(),a("span",ge,"Private")):v("",!0)])]),e.prop.deprecated&&o(x)?(r(),a("p",{key:0,class:"noprose warn !mt-1.5 !mb-2.5",innerHTML:o(x)},null,8,["innerHTML"])):v("",!0),d("div",ke,[d("p",{class:"noprose",innerHTML:o(k)},null,8,["innerHTML"]),e.prop.props&&e.prop.props.length>0?(r(),a(q,{key:0,parameters:e.prop.props},null,8,["parameters"])):v("",!0),d("div",xe,[we,(r(!0),a(u,null,p(e.prop.type,(t=>(r(),a(C,{key:o(A)(t),names:t,nullable:e.prop.nullable},null,8,["names","nullable"])))),128))]),e.prop.default?(r(),a("div",Te,[$e,d("code",null,c(e.prop.default),1)])):v("",!0),(null==(l=e.prop.see)?void 0:l.length)?(r(),a(E,{key:2,see:e.prop.see},null,8,["see"])):v("",!0)])],8,["id"]),_e],64)}}});const He={class:"grid"},Le={class:"overflow-x-auto lg:custom-scroll"},je={class:"relative"},qe={class:"my-0 javascript"};var Ce=e({props:{code:{type:String,required:!0}},setup(e){const s=e,l=t(),n=t(!1),i=g((e=>{e(),n.value=!1}),1e3),{show:c,hide:u}=k(l,{theme:"discord",content:"Copied",trigger:"manual",hideOnClick:!1}),p=async()=>{try{await navigator.clipboard.writeText(s.code),c()}catch{}n.value=!0,i(u)};return(t,s)=>{const i=L,c=j;return r(),a("div",He,[d("div",Le,[d("div",je,[d("pre",qe,[d("code",{innerHTML:o(_).highlight(e.code,{language:"javascript"}).value},null,8,["innerHTML"])]),d("button",{ref:l,class:"\n\t\t\t\t\t\tabsolute\n\t\t\t\t\t\tright-0\n\t\t\t\t\t\ttop-0\n\t\t\t\t\t\tmt-4\n\t\t\t\t\t\tmr-4\n\t\t\t\t\t\tinline-block\n\t\t\t\t\t\thover:text-white\n\t\t\t\t\t\tfocus:outline-none\n\t\t\t\t\t\tfocus-visible:ring-1 focus-visible:ring-gray-200\n\t\t\t\t\t","aria-label":"Copy code"},[n.value?(r(),a(c,{key:1,class:"fill-current text-discord-green-600 dark:text-discord-green-500","aria-hidden":"true",onClick:p})):(r(),a(i,{key:0,class:"fill-current text-gray-700 dark:text-gray-200","aria-hidden":"true",onClick:p}))],512)])])])}}});const Ae={class:"flex items-center"},Ee={class:"inline-block mr-2"},Ze=m(") "),De={class:"space-x-2 text-gray-200 text-sm font-semibold uppercase pt-6"},Se={key:0,class:"inline-flex items-center px-2.5 py-0.5 rounded-md bg-discord-blurple-500"},Ie={key:1,class:"inline-flex items-center px-2.5 py-0.5 rounded-md bg-discord-blurple-500"},Pe={key:2,class:"inline-flex items-center px-2.5 py-0.5 rounded-md bg-discord-red-500"},Be={key:3,class:"inline-flex items-center px-2.5 py-0.5 rounded-md bg-discord-red-500"},Ve={class:"grid pl-2.5"},Re={class:"font-semibold mt-3"},ze=m(" Returns: "),Fe={key:0},Ne={key:1},Oe={class:"mt-3"},Ue={key:1,class:"font-semibold"},Ge=m(" Throws: "),Je={key:2,class:"font-semibold"},Ke=m(" Emits: "),Qe={key:0},We={key:3,class:"font-semibold mt-3"},Xe=m(" Examples: "),Ye=d("div",{class:"w-full pr-32 lg:pr-96"},[d("div",{class:"h-px bg-gradient-to-r from-gray-500 rounded-full"})],-1);var et=e({props:{method:{type:null,required:!0}},setup(e){const t=e,l=f(),y=b(),h=H(),g=s((()=>h.state.docs)),k=s((()=>{var e;return $(Z(null!=(e=t.method.description)?e:"No description.",g.value,l,y))})),x=s((()=>"string"==typeof t.method.deprecated?$(Z(t.method.deprecated,g.value,l,y)):"")),w=s((()=>{var e;return $(Z(null!=(e=t.method.returns.description)?e:t.method.returnsDescription,g.value,l,y))})),_=s((()=>t.method.params?t.method.params.filter((e=>!e.name.includes("."))):null)),M=s((()=>t.method.emits?t.method.emits.map((e=>S(e,g.value))):null)),L=s((()=>`${"static"===t.method.scope?"s-":""}${t.method.name}`));return(t,s)=>{var l,y;const h=n("router-link");return r(),a(u,null,[d("div",{id:`doc-for-${o(L)}`,class:"scroll-to mb-8"},[d(T,{class:"float-right mt-9",meta:e.method.meta},null,8,["meta"]),d("div",Ae,[d("h3",Ee,[d(h,{to:{name:"docs-source-tag-class-class",query:{scrollTo:o(L)}}},{default:i((()=>[m(" ."+c(e.method.name)+"(",1),(r(!0),a(u,null,p(o(_),(e=>(r(),a("span",{key:e.name,class:["method-param text-discord-blurple-560 dark:text-discord-blurple-300 opacity-90 dark:opacity-75",e.optional?"optional":""]},c(e.variable?"...":"")+c(e.name),3)))),128)),Ze])),_:1},8,["to"])]),d("span",De,["static"===e.method.scope?(r(),a("span",Se,"Static")):v("",!0),e.method.abstract?(r(),a("span",Ie,"Abstract")):v("",!0),e.method.deprecated?(r(),a("span",Pe,"Deprecated")):v("",!0),"private"===e.method.access?(r(),a("span",Be,"Private")):v("",!0)])]),e.method.deprecated&&o(x)?(r(),a("p",{key:0,class:"noprose warn !mt-1.5 !mb-2.5",innerHTML:o(x)},null,8,["innerHTML"])):v("",!0),d("div",Ve,[d("p",{class:"noprose",innerHTML:o(k)},null,8,["innerHTML"]),e.method.params?(r(),a(q,{key:0,parameters:e.method.params},null,8,["parameters"])):v("",!0),d("div",Re,[ze,e.method.returns&&Array.isArray(e.method.returns)?(r(),a("span",Fe,[(r(!0),a(u,null,p(e.method.returns,(e=>(r(),a(C,{key:o(A)(e),names:e},null,8,["names"])))),128))])):e.method.returns&&!Array.isArray(e.method.returns)?(r(),a("span",Ne,[(r(!0),a(u,null,p(e.method.returns.types||e.method.returns,(t=>(r(),a(C,{key:o(A)(t),names:t,variable:e.method.returns.variable,nullable:e.method.returns.nullable},null,8,["names","variable","nullable"])))),128))])):(r(),a(D,{key:2,type:["void"]})),d("div",Oe,[e.method.returns&&!Array.isArray(e.method.returns)&&e.method.returns.description||e.method.returnsDescription?(r(),a("p",{key:0,class:"noprose",innerHTML:o(w)},null,8,["innerHTML"])):v("",!0)])]),e.method.throws?(r(),a("div",Ue,[Ge,(r(!0),a(u,null,p(e.method.throws,(e=>(r(),a(C,{key:e,names:e},null,8,["names"])))),128))])):v("",!0),o(M)&&o(M).length?(r(),a("div",Je,[Ke,o(M).length>1?(r(),a("ul",Qe,[(r(!0),a(u,null,p(o(M),(e=>(r(),a("li",{key:e.text},[d(h,{to:e.link},{default:i((()=>[m(c(e.text),1)])),_:2},1032,["to"])])))),128))])):(r(),a(h,{key:1,to:o(M)[0].link},{default:i((()=>[m(c(o(M)[0].text),1)])),_:1},8,["to"]))])):v("",!0),(null==(l=e.method.examples)?void 0:l.length)?(r(),a("div",We,[Xe,(r(!0),a(u,null,p(e.method.examples,(e=>(r(),a(Ce,{key:e,code:e.trim()},null,8,["code"])))),128))])):v("",!0),(null==(y=e.method.see)?void 0:y.length)?(r(),a(E,{key:4,see:e.method.see},null,8,["see"])):v("",!0)])],8,["id"]),Ye],64)}}});const tt={class:"flex items-center"},st={class:"inline-block mr-2"},lt={class:"text-gray-200 text-sm font-semibold uppercase pt-6"},nt={key:0,class:"inline-flex items-center px-2.5 py-0.5 rounded-md bg-discord-red-500"},rt={class:"grid pl-2.5"},at=d("div",{class:"w-full pr-32 lg:pr-96"},[d("div",{class:"h-px bg-gradient-to-r from-gray-500 rounded-full"})],-1);var ot=e({props:{event:{type:null,required:!0}},setup(e){const t=e,l=f(),p=b(),y=H(),h=s((()=>y.state.docs)),g=s((()=>$(Z(t.event.description,h.value,l,p)))),k=s((()=>"string"==typeof t.event.deprecated?$(Z(t.event.deprecated,h.value,l,p)):""));return(t,s)=>{var l;const p=n("router-link");return r(),a(u,null,[d("div",{id:`doc-for-e-${e.event.name}`,class:"scroll-to mb-8"},[d(T,{class:"float-right mt-8",meta:e.event.meta},null,8,["meta"]),d("div",tt,[d("h3",st,[d(p,{to:{name:"docs-source-tag-class-class",query:{scrollTo:`e-${e.event.name}`}}},{default:i((()=>[m(c(e.event.name),1)])),_:1},8,["to"])]),d("span",lt,[e.event.deprecated?(r(),a("span",nt,"Deprecated")):v("",!0)])]),e.event.deprecated&&o(k)?(r(),a("p",{key:0,class:"noprose warn !mt-1.5 !mb-2.5",innerHTML:o(k)},null,8,["innerHTML"])):v("",!0),d("div",rt,[d("p",{class:"noprose",innerHTML:o(g)},null,8,["innerHTML"]),e.event.params&&e.event.params.length?(r(),a(q,{key:0,parameters:e.event.params},null,8,["parameters"])):v("",!0),(null==(l=e.event.see)?void 0:l.length)?(r(),a(E,{key:1,see:e.event.see},null,8,["see"])):v("",!0)])],8,["id"]),at],64)}}});const dt={class:"mx-auto py-16 px-4 sm:px-8 lg:py-8 w-full"},it={class:"prose prose-discord dark:prose-light break-words-legacy mx-auto max-w-4xl lg:max-w-full"},ct={class:"font-bold !mt-3"},ut={key:0},pt=m(" extends "),mt={key:1},vt=m(" implements "),yt={key:1,class:"grid"},ht=d("h2",{class:"!mt-3"},"Constructor",-1),ft=m(");"),bt={key:2,class:"!mt-4"},gt={key:3},kt={key:4};var xt=e({setup(e){var l;_.configure({ignoreUnescapedHTML:!0});const n=f(),i=b(),y=H(),h=t(),g=s((()=>y.state.docs)),k=null==(l=g.value)?void 0:l.classes.find((e=>e.name===i.params.class)),L=s((()=>$(Z(null==k?void 0:k.description,g.value,n,i)))),j=s((()=>(null==k?void 0:k.construct)&&k.construct.params?k.construct.params.filter((e=>!e.name.includes("."))):null)),E=s((()=>{if(!(null==k?void 0:k.props))return null;let e=k.props;return M.value||(e=e.filter((e=>"private"!==e.access))),e.sort(((e,t)=>`${"static"===e.scope?"ZZZ":""}${e.name}`.localeCompare(`${"static"===t.scope?"ZZZ":""}${t.name}`)))})),S=s((()=>{if(!(null==k?void 0:k.methods))return null;let e=k.methods;return M.value||(e=e.filter((e=>"private"!==e.access))),e.sort(((e,t)=>`${"static"===e.scope?"ZZZ":""}${e.name}`.localeCompare(`${"static"===t.scope?"ZZZ":""}${t.name}`)))}));return x((()=>{const e=document.getElementById(`doc-for-${i.query.scrollTo}`);null==e||e.scrollIntoView({behavior:"smooth",block:"start"});const t=document.getElementById("container");!i.query.scrollTo&&t&&t.scrollTop>200&&t.scrollTo({top:0,behavior:"smooth"}),h.value&&_.highlightElement(h.value)})),w((()=>i.query.scrollTo),(()=>{const e=document.getElementById(`doc-for-${i.query.scrollTo}`);null==e||e.scrollIntoView({behavior:"smooth",block:"start"})})),(e,t)=>{var s,l,n,i,y,f,b,x,w,$,_,M,H,Z,I,P,B,V,R,F,N;return r(),a("div",dt,[d(T,{class:"float-right mt-2",meta:null==(s=o(k))?void 0:s.meta},null,8,["meta"]),d("div",it,[d("h1",{id:`doc-for-${null==(l=o(k))?void 0:l.name}`,class:"!mb-3"},c(null==(n=o(k))?void 0:n.name),9,["id"]),d("p",ct,[(null==(i=o(k))?void 0:i.extends)?(r(),a("span",ut,[pt,"string"==typeof(null==(y=o(k))?void 0:y.extends[0])?(r(),a(D,{key:0,type:null==(f=o(k))?void 0:f.extends},null,8,["type"])):(r(!0),a(u,{key:1},p(null==(b=o(k))?void 0:b.extends,(e=>(r(),a(C,{key:o(A)(e),names:e},null,8,["names"])))),128))])):v("",!0),(null==(x=o(k))?void 0:x.implements)?(r(),a("span",mt,[vt,"string"==typeof(null==(w=o(k))?void 0:w.implements[0])?(r(),a(D,{key:0,type:null==($=o(k))?void 0:$.implements},null,8,["type"])):(r(!0),a(u,{key:1},p(null==(_=o(k))?void 0:_.implements,(e=>(r(),a(C,{key:o(A)(e),names:e},null,8,["names"])))),128))])):v("",!0)]),(null==(M=o(k))?void 0:M.description)?(r(),a("p",{key:0,class:"!mb-2",innerHTML:o(L)},null,8,["innerHTML"])):v("",!0),(null==(H=o(k))?void 0:H.construct)?(r(),a("div",yt,[ht,d("pre",{ref:h,class:"javascript"},[d("code",null,[m("new "+c(null==(Z=o(g))?void 0:Z.global)+"."+c(null==(I=o(k))?void 0:I.name)+"(",1),(r(!0),a(u,null,p(o(j),((e,t)=>{var s,l;return r(),a("span",{key:e.name},c(e.name)+c((null!=(l=null==(s=o(j))?void 0:s.length)?l:1)-1!==t?", ":""),1)})),128)),ft])],512),o(k).construct.params?(r(),a(q,{key:0,parameters:o(k).construct.params},null,8,["parameters"])):v("",!0)])):v("",!0),d(pe,{class:"mt-3",properties:null==(P=o(k))?void 0:P.props,methods:null==(B=o(k))?void 0:B.methods,events:null==(V=o(k))?void 0:V.events},null,8,["properties","methods","events"]),o(E)&&o(E).length?(r(),a("h2",bt,"Properties")):v("",!0),(r(!0),a(u,null,p(o(E),(e=>(r(),a(Me,{key:o(z)(e),prop:e},null,8,["prop"])))),128)),o(S)&&o(S).length?(r(),a("h2",gt,"Methods")):v("",!0),(r(!0),a(u,null,p(o(S),(e=>(r(),a(et,{key:o(z)(e),method:e},null,8,["method"])))),128)),(null==(R=o(k))?void 0:R.events)&&(null==(F=o(k))?void 0:F.events.length)?(r(),a("h2",kt,"Events")):v("",!0),(r(!0),a(u,null,p(null==(N=o(k))?void 0:N.events,(e=>(r(),a(ot,{key:`e-${e.name}`,event:e},null,8,["event"])))),128))])])}}});export{xt as default};
