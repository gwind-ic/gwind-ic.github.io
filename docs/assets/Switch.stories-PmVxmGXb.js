import{d as h,t as F,f as $,c as m,a as p,w as k,b as B,j as E,u as e,m as N,ah as j,a5 as K,v as U,U as x}from"./iframe-c4IY6zQp.js";import{u as I}from"./useForwardPropsEmits-T2W0pCxY.js";import{c as L}from"./createContext-cRkaqZ4A.js";import{u as M}from"./useFormControl-B0k9zZ1q.js";import{a as z,u as R}from"./useForwardExpose-Cr5jnkZA.js";import{P as A}from"./Primitive-jOHN3RPP.js";import{V as H}from"./VisuallyHiddenInput-B4N5EJyq.js";import{a as b}from"./utils-DFIdVO4u.js";import"./preload-helper-DKj51lX3.js";import"./usePrimitiveElement-o7raP3zM.js";import"./VisuallyHidden-JucKU3iS.js";const[G,J]=L("SwitchRoot");var Q=h({__name:"SwitchRoot",props:{defaultValue:{type:Boolean,required:!1},modelValue:{type:[Boolean,null],required:!1,default:void 0},disabled:{type:Boolean,required:!1},id:{type:String,required:!1},value:{type:String,required:!1,default:"on"},asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"button"},name:{type:String,required:!1},required:{type:Boolean,required:!1}},emits:["update:modelValue"],setup(i,{emit:r}){const t=i,f=r,{disabled:o}=F(t),s=z(t,"modelValue",f,{defaultValue:t.defaultValue,passive:t.modelValue===void 0});function n(){o.value||(s.value=!s.value)}const{forwardRef:P,currentElement:v}=R(),O=M(v),T=$(()=>{var a;return t.id&&v.value?(a=document.querySelector(`[for="${t.id}"]`))==null?void 0:a.innerText:void 0});return J({modelValue:s,toggleCheck:n,disabled:o}),(a,Z)=>(p(),m(e(A),N(a.$attrs,{id:a.id,ref:e(P),role:"switch",type:a.as==="button"?"button":void 0,value:a.value,"aria-label":a.$attrs["aria-label"]||T.value,"aria-checked":e(s),"aria-required":a.required,"data-state":e(s)?"checked":"unchecked","data-disabled":e(o)?"":void 0,"as-child":a.asChild,as:a.as,disabled:e(o),onClick:n,onKeydown:j(K(n,["prevent"]),["enter"])}),{default:k(()=>[B(a.$slots,"default",{modelValue:e(s)}),e(O)&&a.name?(p(),m(e(H),{key:0,type:"checkbox",name:a.name,disabled:e(o),required:a.required,value:a.value,checked:!!e(s)},null,8,["name","disabled","required","value","checked"])):E("v-if",!0)]),_:3},16,["id","type","value","aria-label","aria-checked","aria-required","data-state","data-disabled","as-child","as","disabled","onKeydown"]))}}),W=Q,X=h({__name:"SwitchThumb",props:{asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"span"}},setup(i){const r=G();return R(),(t,f)=>{var o;return p(),m(e(A),{"data-state":(o=e(r).modelValue)!=null&&o.value?"checked":"unchecked","data-disabled":e(r).disabled.value?"":void 0,"as-child":t.asChild,as:t.as},{default:k(()=>[B(t.$slots,"default")]),_:3},8,["data-state","data-disabled","as-child","as"])}}}),Y=X;const c=h({__name:"Switch",props:{defaultValue:{type:Boolean},modelValue:{type:[Boolean,null]},disabled:{type:Boolean},id:{},value:{},asChild:{type:Boolean},as:{},name:{},required:{type:Boolean},class:{}},emits:["update:modelValue"],setup(i,{emit:r}){const t=i,o=I(t,r);return(s,n)=>(p(),m(e(W),N(e(o),{class:e(b)("w-10 h-[14px] cursor-pointer bg-black-400 flex items-center shadow-sm rounded-full data-[state=checked]:bg-lime-200 disabled:cursor-not-allowed",t.class)}),{default:k(()=>[U(e(Y),{class:x(e(b)("w-5 h-5 bg-white drop-shadow-1 rounded-full transition-all duration-100 translate-x-0 data-[state=checked]:bg-lime-500 data-[state=checked]:translate-x-[110%]"))},null,8,["class"])]),_:1},16,["class"]))}});c.__docgenInfo=Object.assign({displayName:c.name??c.__name},{exportName:"default",displayName:"Switch",description:"",tags:{},sourceFiles:["/Users/lord/Documents/Documentation/gwindui.github.io/src/components/switch/Switch.vue"]});const ce={title:"Components/Switch",component:c,tags:["autodocs"],parameters:{docs:{description:{component:'\n**Switch** adalah komponen toggle on/off yang digunakan untuk mengaktifkan atau menonaktifkan suatu pengaturan secara langsung.\n\n### Penggunaan Dasar\n```vue\n<Switch v-model="isActive" />\n```\n\n### Dengan Label (via slot)\n```vue\n<Switch v-model="isActive">Aktifkan Notifikasi</Switch>\n```\n\n### Props Utama\n| Prop | Tipe | Default | Deskripsi |\n|------|------|---------|-----------|\n| `modelValue` | `boolean` | `false` | Status toggle (v-model) |\n| `disabled` | `boolean` | `false` | Nonaktifkan switch |\n                '}}},argTypes:{modelValue:{control:"boolean",description:"Status toggle aktif/nonaktif (v-model)"},disabled:{control:"boolean",description:"Nonaktifkan interaksi pada switch"}},args:{modelValue:!1,disabled:!1}},d={name:"Default (Off)",parameters:{docs:{description:{story:"Switch dalam kondisi nonaktif (off)."}}}},l={name:"Active (On)",args:{modelValue:!0},parameters:{docs:{description:{story:"Switch dalam kondisi aktif (on)."}}}},u={name:"Disabled",args:{disabled:!0},parameters:{docs:{description:{story:"Switch yang dinonaktifkan tidak bisa diklik oleh pengguna."}}}};var g,w,y;d.parameters={...d.parameters,docs:{...(g=d.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: "Default (Off)",
  parameters: {
    docs: {
      description: {
        story: "Switch dalam kondisi nonaktif (off)."
      }
    }
  }
}`,...(y=(w=d.parameters)==null?void 0:w.docs)==null?void 0:y.source}}};var S,_,V;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: "Active (On)",
  args: {
    modelValue: true
  },
  parameters: {
    docs: {
      description: {
        story: "Switch dalam kondisi aktif (on)."
      }
    }
  }
}`,...(V=(_=l.parameters)==null?void 0:_.docs)==null?void 0:V.source}}};var q,C,D;u.parameters={...u.parameters,docs:{...(q=u.parameters)==null?void 0:q.docs,source:{originalSource:`{
  name: "Disabled",
  args: {
    disabled: true
  },
  parameters: {
    docs: {
      description: {
        story: "Switch yang dinonaktifkan tidak bisa diklik oleh pengguna."
      }
    }
  }
}`,...(D=(C=u.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};const me=["Default","Active","Disabled"];export{l as Active,d as Default,u as Disabled,me as __namedExportsOrder,ce as default};
