import{d as u,t as K,c as p,a as m,w as d,b as c,u as e,r as T,f,e as J,o as X,v as S,m as B,j as Z,q as ee,ah as te,Q as oe,U as z}from"./iframe-c4IY6zQp.js";import{u as ae,b as ne}from"./useForwardPropsEmits-T2W0pCxY.js";import{c as F}from"./createContext-cRkaqZ4A.js";import{u as re}from"./useDirection-Cgdaowgg.js";import{a as ie,u as h,k as se}from"./useForwardExpose-Cr5jnkZA.js";import{P as R}from"./Primitive-jOHN3RPP.js";import{u as le}from"./useSingleOrMultipleValue-BxcWNtAy.js";import{a as $}from"./utils-DFIdVO4u.js";import{u as de}from"./useArrowNavigation-B5rxJs06.js";import{u as Q}from"./useId--nAmYTv4.js";import{G as ce}from"./g-icon-chevron-down-CYOVy53M.js";import{G as ue}from"./GIcon-BXuKvWrh.js";import{P as pe}from"./Presence-B-TJz0M4.js";import"./preload-helper-DKj51lX3.js";import"./ConfigProvider-C_xfuhRi.js";import"./isValueEqualOrExist-DvmIGGK4.js";import"./nullish-CHIgUVhi.js";import"./ohash.D__AXeF1-Cq3NGnZa.js";const[L,me]=F("CollapsibleRoot");var fe=u({__name:"CollapsibleRoot",props:{defaultOpen:{type:Boolean,required:!1,default:!1},open:{type:Boolean,required:!1,default:void 0},disabled:{type:Boolean,required:!1},unmountOnHide:{type:Boolean,required:!1,default:!0},asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},emits:["update:open"],setup(n,{expose:i,emit:o}){const t=n,r=ie(t,"open",o,{defaultValue:t.defaultOpen,passive:t.open===void 0}),{disabled:s,unmountOnHide:_}=K(t);return me({contentId:"",disabled:s,open:r,unmountOnHide:_,onOpenToggle:()=>{s.value||(r.value=!r.value)}}),i({open:r}),h(),(g,b)=>(m(),p(e(R),{as:g.as,"as-child":t.asChild,"data-state":e(r)?"open":"closed","data-disabled":e(s)?"":void 0},{default:d(()=>[c(g.$slots,"default",{open:e(r)})]),_:3},8,["as","as-child","data-state","data-disabled"]))}}),ge=fe,Ae=u({inheritAttrs:!1,__name:"CollapsibleContent",props:{forceMount:{type:Boolean,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},emits:["contentFound"],setup(n,{emit:i}){const o=n,t=i,a=L();a.contentId||(a.contentId=Q(void 0,"reka-collapsible-content"));const r=T(),{forwardRef:s,currentElement:_}=h(),g=T(0),b=T(0),y=f(()=>a.open.value),A=T(y.value),v=T();J(()=>{var l;return[y.value,(l=r.value)==null?void 0:l.present]},async()=>{await ee();const l=_.value;if(!l)return;v.value=v.value||{transitionDuration:l.style.transitionDuration,animationName:l.style.animationName},l.style.transitionDuration="0s",l.style.animationName="none";const I=l.getBoundingClientRect();b.value=I.height,g.value=I.width,A.value||(l.style.transitionDuration=v.value.transitionDuration,l.style.animationName=v.value.animationName)},{immediate:!0});const C=f(()=>A.value&&a.open.value);return X(()=>{requestAnimationFrame(()=>{A.value=!1})}),se(_,"beforematch",l=>{requestAnimationFrame(()=>{a.onOpenToggle(),t("contentFound")})}),(l,I)=>(m(),p(e(pe),{ref_key:"presentRef",ref:r,present:l.forceMount||e(a).open.value,"force-mount":!0},{default:d(({present:D})=>{var M;return[S(e(R),B(l.$attrs,{id:e(a).contentId,ref:e(s),"as-child":o.asChild,as:l.as,hidden:D?void 0:e(a).unmountOnHide.value?"":"until-found","data-state":C.value?void 0:e(a).open.value?"open":"closed","data-disabled":(M=e(a).disabled)!=null&&M.value?"":void 0,style:{"--reka-collapsible-content-height":`${b.value}px`,"--reka-collapsible-content-width":`${g.value}px`}}),{default:d(()=>[!e(a).unmountOnHide.value||D?c(l.$slots,"default",{key:0}):Z("v-if",!0)]),_:2},1040,["id","as-child","as","hidden","data-state","data-disabled","style"])]}),_:3},8,["present"]))}}),ve=Ae,_e=u({__name:"CollapsibleTrigger",props:{asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"button"}},setup(n){const i=n;h();const o=L();return(t,a)=>{var r,s;return m(),p(e(R),{type:t.as==="button"?"button":void 0,as:t.as,"as-child":i.asChild,"aria-controls":e(o).contentId,"aria-expanded":e(o).open.value,"data-state":e(o).open.value?"open":"closed","data-disabled":(r=e(o).disabled)!=null&&r.value?"":void 0,disabled:(s=e(o).disabled)==null?void 0:s.value,onClick:e(o).onOpenToggle},{default:d(()=>[c(t.$slots,"default")]),_:3},8,["type","as","as-child","aria-controls","aria-expanded","data-state","data-disabled","disabled","onClick"])}}}),be=_e;const[V,he]=F("AccordionRoot");var ye=u({__name:"AccordionRoot",props:{collapsible:{type:Boolean,required:!1,default:!1},disabled:{type:Boolean,required:!1,default:!1},dir:{type:String,required:!1},orientation:{type:String,required:!1,default:"vertical"},unmountOnHide:{type:Boolean,required:!1,default:!0},asChild:{type:Boolean,required:!1},as:{type:null,required:!1},type:{type:String,required:!1},modelValue:{type:null,required:!1},defaultValue:{type:null,required:!1}},emits:["update:modelValue"],setup(n,{emit:i}){const o=n,t=i,{dir:a,disabled:r,unmountOnHide:s}=K(o),_=re(a),{modelValue:g,changeModelValue:b,isSingle:y}=le(o,t),{forwardRef:A,currentElement:v}=h();return he({disabled:r,direction:_,orientation:o.orientation,parentElement:v,isSingle:y,collapsible:o.collapsible,modelValue:g,changeModelValue:b,unmountOnHide:s}),(C,l)=>(m(),p(e(R),{ref:e(A),"as-child":C.asChild,as:C.as},{default:d(()=>[c(C.$slots,"default",{modelValue:e(g)})]),_:3},8,["as-child","as"]))}}),Ce=ye,P=(function(n){return n.Open="open",n.Closed="closed",n})(P||{});const[H,Ie]=F("AccordionItem");var ke=u({__name:"AccordionItem",props:{disabled:{type:Boolean,required:!1},value:{type:String,required:!0},unmountOnHide:{type:Boolean,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},setup(n,{expose:i}){const o=n,t=V(),a=f(()=>t.isSingle.value?o.value===t.modelValue.value:Array.isArray(t.modelValue.value)&&t.modelValue.value.includes(o.value)),r=f(()=>t.disabled.value||o.disabled),s=f(()=>r.value?"":void 0),_=f(()=>a.value?P.Open:P.Closed);i({open:a,dataDisabled:s});const{currentRef:g,currentElement:b}=h();Ie({open:a,dataState:_,disabled:r,dataDisabled:s,triggerId:"",currentRef:g,currentElement:b,value:f(()=>o.value)});function y(A){var I;const v=A.target;if(Array.from(((I=t.parentElement.value)==null?void 0:I.querySelectorAll("[data-reka-collection-item]"))??[]).findIndex(D=>D===v)===-1)return null;de(A,v,t.parentElement.value,{arrowKeyOptions:t.orientation,dir:t.direction.value,focus:!0})}return(A,v)=>(m(),p(e(ge),{"data-orientation":e(t).orientation,"data-disabled":s.value,"data-state":_.value,disabled:r.value,open:a.value,as:o.as,"as-child":o.asChild,"unmount-on-hide":e(t).unmountOnHide.value,onKeydown:te(y,["up","down","left","right","home","end"])},{default:d(()=>[c(A.$slots,"default",{open:a.value})]),_:3},8,["data-orientation","data-disabled","data-state","disabled","open","as","as-child","unmount-on-hide"]))}}),Te=ke,qe=u({__name:"AccordionContent",props:{forceMount:{type:Boolean,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},setup(n){const i=n,o=V(),t=H();return h(),(a,r)=>(m(),p(e(ve),{role:"region","as-child":i.asChild,as:a.as,"force-mount":i.forceMount,"aria-labelledby":e(t).triggerId,"data-state":e(t).dataState.value,"data-disabled":e(t).dataDisabled.value,"data-orientation":e(o).orientation,style:{"--reka-accordion-content-width":"var(--reka-collapsible-content-width)","--reka-accordion-content-height":"var(--reka-collapsible-content-height)"},onContentFound:r[0]||(r[0]=s=>e(o).changeModelValue(e(t).value.value))},{default:d(()=>[c(a.$slots,"default")]),_:3},8,["as-child","as","force-mount","aria-labelledby","data-state","data-disabled","data-orientation"]))}}),xe=qe,we=u({__name:"AccordionHeader",props:{asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"h3"}},setup(n){const i=n,o=V(),t=H();return h(),(a,r)=>(m(),p(e(R),{as:i.as,"as-child":i.asChild,"data-orientation":e(o).orientation,"data-state":e(t).dataState.value,"data-disabled":e(t).dataDisabled.value},{default:d(()=>[c(a.$slots,"default")]),_:3},8,["as","as-child","data-orientation","data-state","data-disabled"]))}}),Be=we,Re=u({__name:"AccordionTrigger",props:{asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},setup(n){const i=n,o=V(),t=H();t.triggerId||(t.triggerId=Q(void 0,"reka-accordion-trigger"));function a(){const r=o.isSingle.value&&t.open.value&&!o.collapsible;t.disabled.value||r||o.changeModelValue(t.value.value)}return(r,s)=>(m(),p(e(be),{id:e(t).triggerId,ref:e(t).currentRef,"data-reka-collection-item":"",as:i.as,"as-child":i.asChild,"aria-disabled":e(t).disabled.value||void 0,"aria-expanded":e(t).open.value||!1,"data-disabled":e(t).dataDisabled.value,"data-orientation":e(o).orientation,"data-state":e(t).dataState.value,disabled:e(t).disabled.value,onClick:a},{default:d(()=>[c(r.$slots,"default")]),_:3},8,["id","as","as-child","aria-disabled","aria-expanded","data-disabled","data-orientation","data-state","disabled"]))}}),De=Re;const k=u({__name:"Accordion",props:{collapsible:{type:Boolean},disabled:{type:Boolean},dir:{},orientation:{},unmountOnHide:{type:Boolean},asChild:{type:Boolean},as:{},type:{},modelValue:{},defaultValue:{}},emits:["update:modelValue"],setup(n,{emit:i}){const a=ae(n,i);return(r,s)=>(m(),p(e(Ce),B(e(a),{class:"flex flex-col gap-3"}),{default:d(()=>[c(r.$slots,"default")]),_:3},16))}});k.__docgenInfo=Object.assign({displayName:k.name??k.__name},{exportName:"default",displayName:"Accordion",description:"",tags:{},slots:[{name:"default"}],sourceFiles:["/Users/lord/Documents/Documentation/gwindui.github.io/src/components/accordion/Accordion.vue"]});const q=u({__name:"AccordionContent",props:{forceMount:{type:Boolean},asChild:{type:Boolean},as:{},class:{}},setup(n){const i=n,o=f(()=>{const{class:t,...a}=i;return a});return(t,a)=>(m(),p(e(xe),B(o.value,{class:"overflow-hidden px-3 !text-omicron text-black-600 transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"}),{default:d(()=>[oe("div",{class:z(e($)("pb-4 pt-0",i.class))},[c(t.$slots,"default")],2)]),_:3},16))}});q.__docgenInfo=Object.assign({displayName:q.name??q.__name},{exportName:"default",displayName:"AccordionContent",description:"",tags:{},slots:[{name:"default"}],sourceFiles:["/Users/lord/Documents/Documentation/gwindui.github.io/src/components/accordion/AccordionContent.vue"]});const x=u({__name:"AccordionItem",props:{disabled:{type:Boolean},value:{},unmountOnHide:{type:Boolean},asChild:{type:Boolean},as:{},class:{}},setup(n){const i=n,o=ne(i);return(t,a)=>(m(),p(e(Te),B(e(o),{class:e($)("rounded-md bg-white border border-black-200 flex flex-col",i.class)}),{default:d(()=>[c(t.$slots,"default")]),_:3},16,["class"]))}});x.__docgenInfo=Object.assign({displayName:x.name??x.__name},{exportName:"default",displayName:"AccordionItem",description:"",tags:{},slots:[{name:"default"}],sourceFiles:["/Users/lord/Documents/Documentation/gwindui.github.io/src/components/accordion/AccordionItem.vue"]});const w=u({__name:"AccordionTrigger",props:{asChild:{type:Boolean},as:{},class:{}},setup(n){const i=f(()=>({"flex flex-1 items-center justify-between p-3 !text-omicron text-black-600 font-bold transition-all cursor-pointer data-[state=open]:text-lime-500 [&[data-state=open]>svg]:rotate-180":!0})),o=f(()=>({"w-[30px] text-black-60 shrink-0 transition-transform duration-200":!0})),t=n,a=f(()=>{const{class:r,...s}=t;return s});return(r,s)=>(m(),p(e(Be),{class:"flex"},{default:d(()=>[S(e(De),B(a.value,{class:e($)(i.value,t.class)}),{default:d(()=>[c(r.$slots,"default"),c(r.$slots,"icon",{},()=>[S(e(ue),{class:z([e($)(o.value),"w-6"]),icon:e(ce)},null,8,["class","icon"])])]),_:3},16,["class"])]),_:3}))}});w.__docgenInfo=Object.assign({displayName:w.name??w.__name},{exportName:"default",displayName:"AccordionTrigger",description:"",tags:{},slots:[{name:"default"},{name:"icon"}],sourceFiles:["/Users/lord/Documents/Documentation/gwindui.github.io/src/components/accordion/AccordionTrigger.vue"]});const Le={title:"Components/Accordion",component:k,tags:["autodocs"],parameters:{docs:{description:{component:"\n**Accordion** adalah komponen lipat-buka (*collapsible*) untuk menampilkan konten yang dapat diperluas atau diciutkan. Digunakan untuk FAQ, menu navigasi bersarang, atau konten tersembunyi.\n\nTerdiri dari sub-komponen:\n- **`Accordion`** — root container, mendukung mode `single` atau `multiple`\n- **`AccordionItem`** — setiap section accordion (butuh prop `value` unik)\n- **`AccordionTrigger`** — tombol yang membuka/menutup konten\n- **`AccordionContent`** — konten yang ditampilkan saat item terbuka\n\n### Penggunaan Dasar\n```vue\n<Accordion type=\"single\" collapsible>\n  <AccordionItem value=\"item-1\">\n    <AccordionTrigger>Apakah bisa diakses?</AccordionTrigger>\n    <AccordionContent>Ya, komponen ini mengikuti pola WAI-ARIA.</AccordionContent>\n  </AccordionItem>\n</Accordion>\n```\n\n### Props `Accordion`\n| Prop | Tipe | Default | Deskripsi |\n|------|------|---------|-----------|\n| `type` | `'single' | 'multiple'` | `'single'` | Mode single: satu item terbuka; multiple: bisa banyak |\n| `collapsible` | `boolean` | `false` | (mode single) Izinkan menutup item yang sudah terbuka |\n| `defaultValue` | `string` | — | Nilai item yang terbuka secara default |\n\n### Props `AccordionItem`\n| Prop | Tipe | Deskripsi |\n|------|------|-----------|\n| `value` | `string` | Identifikasi unik item (wajib) |\n| `disabled` | `boolean` | Nonaktifkan item ini |\n                "}}}},O={args:{default:`
                  <AccordionItem value="item-1">
                <AccordionTrigger>Is it accessible?</AccordionTrigger>
                <AccordionContent> Yes. It adheres to the WAI-ARIA design pattern. </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
                <AccordionTrigger>Is it accessible?</AccordionTrigger>
                <AccordionContent> Yes. It adheres to the WAI-ARIA design pattern. </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
                <AccordionTrigger>Is it accessible?</AccordionTrigger>
                <AccordionContent> Yes. It adheres to the WAI-ARIA design pattern. </AccordionContent>
            </AccordionItem>
      `},render:n=>({components:{Accordion:k,AccordionContent:q,AccordionItem:x,AccordionTrigger:w},setup(){return{args:n}},template:`
        <Accordion type="single" collapsible v-bind="args">
             ${n.default}
        </Accordion>
      `})},N={args:{default:`
            <AccordionItem value="item-1">
                <AccordionTrigger>Is it accessible?</AccordionTrigger>
                <AccordionContent> Yes. It adheres to the WAI-ARIA design pattern. </AccordionContent>
            </AccordionItem>
      `},render:n=>({components:{Accordion:k,AccordionContent:q,AccordionItem:x,AccordionTrigger:w},setup(){return{args:n}},template:`
        <Accordion type="single" collapsible v-bind="args">
             ${n.default}
        </Accordion>
      `})};var j,E,W;O.parameters={...O.parameters,docs:{...(j=O.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    default: \`
                  <AccordionItem value="item-1">
                <AccordionTrigger>Is it accessible?</AccordionTrigger>
                <AccordionContent> Yes. It adheres to the WAI-ARIA design pattern. </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
                <AccordionTrigger>Is it accessible?</AccordionTrigger>
                <AccordionContent> Yes. It adheres to the WAI-ARIA design pattern. </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
                <AccordionTrigger>Is it accessible?</AccordionTrigger>
                <AccordionContent> Yes. It adheres to the WAI-ARIA design pattern. </AccordionContent>
            </AccordionItem>
      \`
  },
  render: (args: {
    default: string;
  }) => ({
    components: {
      Accordion,
      AccordionContent,
      AccordionItem,
      AccordionTrigger
    },
    setup() {
      return {
        args
      };
    },
    template: \`
        <Accordion type="single" collapsible v-bind="args">
             \${args.default}
        </Accordion>
      \`
  })
}`,...(W=(E=O.parameters)==null?void 0:E.docs)==null?void 0:W.source}}};var Y,G,U;N.parameters={...N.parameters,docs:{...(Y=N.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    default: \`
            <AccordionItem value="item-1">
                <AccordionTrigger>Is it accessible?</AccordionTrigger>
                <AccordionContent> Yes. It adheres to the WAI-ARIA design pattern. </AccordionContent>
            </AccordionItem>
      \`
  },
  render: (args: {
    default: string;
  }) => ({
    components: {
      Accordion,
      AccordionContent,
      AccordionItem,
      AccordionTrigger
    },
    setup() {
      return {
        args
      };
    },
    template: \`
        <Accordion type="single" collapsible v-bind="args">
             \${args.default}
        </Accordion>
      \`
  })
}`,...(U=(G=N.parameters)==null?void 0:G.docs)==null?void 0:U.source}}};const Je=["Group","Single"];export{O as Group,N as Single,Je as __namedExportsOrder,Le as default};
