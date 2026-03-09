import{G as d}from"./GIcon-BXuKvWrh.js";import{d as g,c as u,w as f,m as _,u as r,a as T,Q as b,b as y}from"./iframe-c4IY6zQp.js";import{u as h}from"./useForwardPropsEmits-T2W0pCxY.js";import{T as G}from"./Toggle-kCAWA0py.js";import{a as x}from"./utils-DFIdVO4u.js";import{G as s}from"./g-icon-delete-DAnkgtcP.js";import"./preload-helper-DKj51lX3.js";import"./useFormControl-B0k9zZ1q.js";import"./useForwardExpose-Cr5jnkZA.js";import"./Primitive-jOHN3RPP.js";import"./VisuallyHiddenInput-B4N5EJyq.js";import"./usePrimitiveElement-o7raP3zM.js";import"./VisuallyHidden-JucKU3iS.js";import"./createContext-cRkaqZ4A.js";import"./useDirection-Cgdaowgg.js";import"./ConfigProvider-C_xfuhRi.js";import"./useSingleOrMultipleValue-BxcWNtAy.js";import"./isValueEqualOrExist-DvmIGGK4.js";import"./nullish-CHIgUVhi.js";import"./ohash.D__AXeF1-Cq3NGnZa.js";import"./RovingFocusGroup-B8aXtVZm.js";import"./Collection-gwCc-hQ9.js";import"./utils-CC-pqV_U.js";import"./getActiveElement-FUKBWQwh.js";const B={class:"h-6 w-6"},e=g({__name:"Toggle",props:{defaultValue:{type:Boolean},modelValue:{type:[Boolean,null]},disabled:{type:Boolean},asChild:{type:Boolean},as:{},name:{},required:{type:Boolean},class:{}},emits:["update:modelValue"],setup(o,{emit:a}){const n=o,p=h(n,a);return(c,w)=>(T(),u(r(G),_(r(p),{class:r(x)("hover:cursor-pointer text-black-600 flex py-2 px-2 items-center justify-center rounded bg-white border border-black-200","hover:bg-lime-100","data-[state=on]:bg-lime-100 data-[state=on]:border-lime-500 data-[state=on]:text-lime-500",n.class)}),{default:f(()=>[b("div",B,[y(c.$slots,"default")])]),_:3},16,["class"]))}});e.__docgenInfo=Object.assign({displayName:e.name??e.__name},{exportName:"default",displayName:"Toggle",description:"",tags:{},slots:[{name:"default"}],sourceFiles:["/Users/lord/Documents/Documentation/gwindui.github.io/src/components/toggle/Toggle.vue"]});const W={title:"Components/Toggle/Single",component:e,tags:["autodocs"],argTypes:{},args:{modelValue:!1,default:`
       <GIcon :icon="icon"></GIcon>
        `}},t={render:o=>({components:{Toggle:e,GIcon:d,GIconDelete:s},setup(){return{args:o,icon:s}},template:`
    <Toggle v-model="args.modelValue" >
       ${o.default}
    </Toggle>
    `})};var l,m,i;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: (args: {
    default: string;
  }) => ({
    components: {
      Toggle,
      GIcon,
      GIconDelete
    },
    setup() {
      const icon = GIconDelete;
      return {
        args,
        icon
      };
    },
    template: \`
    <Toggle v-model="args.modelValue" >
       \${args.default}
    </Toggle>
    \`
  })
}`,...(i=(m=t.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};const X=["Default"];export{t as Default,X as __namedExportsOrder,W as default};
