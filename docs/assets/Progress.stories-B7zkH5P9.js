import{d as V,e as P,f as U,c as b,a as x,w as h,b as M,u as e,q as z,m as O,U as _,v as X,X as G}from"./iframe-c4IY6zQp.js";import{u as H}from"./useForwardPropsEmits-T2W0pCxY.js";import{c as J}from"./createContext-cRkaqZ4A.js";import{i as A}from"./nullish-CHIgUVhi.js";import{u as B,a as N}from"./useForwardExpose-Cr5jnkZA.js";import{P as I}from"./Primitive-jOHN3RPP.js";import{a as k}from"./utils-DFIdVO4u.js";import"./preload-helper-DKj51lX3.js";const m=100,[K,Q]=J("ProgressRoot"),v=a=>typeof a=="number";function W(a,n){return A(a)||v(a)&&!Number.isNaN(a)&&a<=n&&a>=0?a:(console.error(`Invalid prop \`value\` of value \`${a}\` supplied to \`ProgressRoot\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${m} if no \`max\` prop is set)
  - \`null\`  or \`undefined\` if the progress is indeterminate.

Defaulting to \`null\`.`),null)}function Y(a){return v(a)&&!Number.isNaN(a)&&a>0?a:(console.error(`Invalid prop \`max\` of value \`${a}\` supplied to \`ProgressRoot\`. Only numbers greater than 0 are valid max values. Defaulting to \`${m}\`.`),m)}var Z=V({__name:"ProgressRoot",props:{modelValue:{type:[Number,null],required:!1},max:{type:Number,required:!1,default:m},getValueLabel:{type:Function,required:!1,default:(a,n)=>v(a)?`${Math.round(a/n*m)}%`:void 0},getValueText:{type:Function,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},emits:["update:modelValue","update:max"],setup(a,{emit:n}){const s=a,u=n;B();const r=N(s,"modelValue",u,{passive:s.modelValue===void 0}),t=N(s,"max",u,{passive:s.max===void 0});P(()=>r.value,async o=>{const l=W(o,s.max);l!==o&&(await z(),r.value=l)},{immediate:!0}),P(()=>s.max,o=>{const l=Y(s.max);l!==o&&(t.value=l)},{immediate:!0});const i=U(()=>A(r.value)?"indeterminate":r.value===t.value?"complete":"loading");return Q({modelValue:r,max:t,progressState:i}),(o,l)=>{var y;return x(),b(e(I),{"as-child":o.asChild,as:o.as,"aria-valuemax":e(t),"aria-valuemin":0,"aria-valuenow":v(e(r))?e(r):void 0,"aria-valuetext":(y=o.getValueText)==null?void 0:y.call(o,e(r),e(t)),"aria-label":o.getValueLabel(e(r),e(t)),role:"progressbar","data-state":i.value,"data-value":e(r)??void 0,"data-max":e(t)},{default:h(()=>[M(o.$slots,"default",{modelValue:e(r)})]),_:3},8,["as-child","as","aria-valuemax","aria-valuenow","aria-valuetext","aria-label","data-state","data-value","data-max"])}}}),ee=Z,ae=V({__name:"ProgressIndicator",props:{asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},setup(a){const n=a,s=K();return B(),(u,r)=>{var t;return x(),b(e(I),O(n,{"data-state":e(s).progressState.value,"data-value":((t=e(s).modelValue)==null?void 0:t.value)??void 0,"data-max":e(s).max.value}),{default:h(()=>[M(u.$slots,"default")]),_:3},16,["data-state","data-value","data-max"])}}}),re=ae;const f=V({__name:"Progress",props:{modelValue:{},max:{},getValueLabel:{type:Function},getValueText:{type:Function},asChild:{type:Boolean},as:{},class:{}},emits:["update:modelValue","update:max"],setup(a,{emit:n}){const s=a,r=H(s,n);return(t,i)=>(x(),b(e(ee),{modelValue:e(r).modelValue,"onUpdate:modelValue":i[0]||(i[0]=o=>e(r).modelValue=o),max:e(r).max,getValueLabel:e(r).getValueLabel,getValueText:e(r).getValueText,class:_(e(k)("relative overflow-hidden bg-black-200 h-[10px] rounded-full w-full sm:h-5",s.class))},{default:h(()=>[X(e(re),{class:_(e(k)("bg-lime-500 rounded-full w-full h-full transition-transform duration-[660ms] ease-[cubic-bezier(0.65, 0, 0.35, 1)]")),style:G(`transform: translateX(-${100-Number(e(r).modelValue)/Number(e(r).max)*100}%)`)},null,8,["class","style"])]),_:1},8,["modelValue","max","getValueLabel","getValueText","class"]))}});f.__docgenInfo=Object.assign({displayName:f.name??f.__name},{exportName:"default",displayName:"Progress",description:"",tags:{},sourceFiles:["/Users/lord/Documents/Documentation/gwindui.github.io/src/components/progress/Progress.vue"]});const de={title:"Components/Progress",component:f,tags:["autodocs"],parameters:{docs:{description:{component:'\n**Progress** adalah komponen bilah kemajuan (*progress bar*) yang menunjukkan seberapa jauh suatu proses telah selesai. Berguna untuk status upload, proses loading, atau langkah-langkah formulir.\n\n### Penggunaan Dasar\n```vue\n<Progress :model-value="60" :max="100" />\n```\n\n### Props Utama\n| Prop | Tipe | Default | Deskripsi |\n|------|------|---------|-----------|\n| `modelValue` | `number` | `0` | Nilai kemajuan saat ini |\n| `max` | `number` | `100` | Nilai maksimum (100%) |\n                '}}},argTypes:{modelValue:{control:{type:"range",min:0,max:100,step:1},description:"Nilai kemajuan saat ini"},max:{control:"number",description:"Nilai maksimum progress bar (biasanya 100)"}},args:{max:100,modelValue:50}},d={name:"50%",parameters:{docs:{description:{story:"Progress bar pada posisi 50%."}}}},p={name:"25% — Loading",args:{modelValue:25},parameters:{docs:{description:{story:"Progress bar pada awal proses (25%)."}}}},c={name:"90% — Almost Done",args:{modelValue:90},parameters:{docs:{description:{story:"Progress bar hampir selesai (90%)."}}}},g={name:"100% — Complete",args:{modelValue:100},parameters:{docs:{description:{story:"Progress bar telah selesai penuh (100%)."}}}};var C,w,D;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: "50%",
  parameters: {
    docs: {
      description: {
        story: "Progress bar pada posisi 50%."
      }
    }
  }
}`,...(D=(w=d.parameters)==null?void 0:w.docs)==null?void 0:D.source}}};var L,T,q;p.parameters={...p.parameters,docs:{...(L=p.parameters)==null?void 0:L.docs,source:{originalSource:`{
  name: "25% — Loading",
  args: {
    modelValue: 25
  },
  parameters: {
    docs: {
      description: {
        story: "Progress bar pada awal proses (25%)."
      }
    }
  }
}`,...(q=(T=p.parameters)==null?void 0:T.docs)==null?void 0:q.source}}};var E,F,R;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: "90% — Almost Done",
  args: {
    modelValue: 90
  },
  parameters: {
    docs: {
      description: {
        story: "Progress bar hampir selesai (90%)."
      }
    }
  }
}`,...(R=(F=c.parameters)==null?void 0:F.docs)==null?void 0:R.source}}};var S,$,j;g.parameters={...g.parameters,docs:{...(S=g.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: "100% — Complete",
  args: {
    modelValue: 100
  },
  parameters: {
    docs: {
      description: {
        story: "Progress bar telah selesai penuh (100%)."
      }
    }
  }
}`,...(j=($=g.parameters)==null?void 0:$.docs)==null?void 0:j.source}}};const pe=["Default","Loading","AlmostDone","Complete"];export{c as AlmostDone,g as Complete,d as Default,p as Loading,pe as __namedExportsOrder,de as default};
