import{d as _,P as f,U as l,u as s,Q as k,b as m,i as B,a as c,a8 as $,c as G,w as N,p as S,r as j}from"./iframe-c4IY6zQp.js";import{a as p}from"./utils-DFIdVO4u.js";import{_ as q}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{P as O}from"./Primitive-jOHN3RPP.js";import"./preload-helper-DKj51lX3.js";const U=["data-number"],D={key:1},u=_({__name:"ListItem",props:{class:{},item:{},index:{}},setup(n){const e=n,r=B("listType");return(t,T)=>(c(),f("li",{"data-number":s(r)==="ordered"?e.index+1:"•",class:l(s(p)("relative flex flex-row gap-4 text-omicron before:items-center before:flex before:justify-center before:w-6 before:h-6 ",s(r)==="ordered"?"ordered-item before:font-bold before:bg-lime-100 before:rounded-full before:text-lime-500":"unordered-item before:text-lime-500",t.$slots.customIcon&&"before:hidden",e.class))},[t.$slots.customIcon?(c(),f("div",{key:0,class:l(s(p)("flex flex-row gap-4 items-center"))},[k("div",{class:l(s(p)("w-6 h-6 rounded-full bg-lime-100 text-lime-500 flex items-center px-[4px]"))},[m(t.$slots,"customIcon",{},void 0,!0)],2),m(t.$slots,"default",{},void 0,!0)],2)):(c(),f("div",D,[m(t.$slots,"default",{},void 0,!0)]))],10,U))}}),L=q(u,[["__scopeId","data-v-b7ff20a4"]]);u.__docgenInfo=Object.assign({displayName:u.name??u.__name},{exportName:"default",displayName:"ListItem",description:"",tags:{},props:[{name:"class",required:!1,type:{name:"TSIndexedAccessType"}},{name:"item",required:!1,type:{name:"union",elements:[{name:"string"},{name:"object"},{name:"number"}]}},{name:"index",required:!0,type:{name:"number"}}],slots:[{name:"customIcon"},{name:"default"}],sourceFiles:["/Users/lord/Documents/Documentation/gwindui.github.io/src/components/list/ListItem.vue"]});const o=_({__name:"ListGroup",props:{class:{},type:{}},setup(n){const e=n,r=$(e,"type");return S("listType",r),(t,T)=>(c(),G(s(O),{as:e.type==="ordered"?"ol":"ul",class:l(s(p)("flex flex-col gap-4"))},{default:N(()=>[m(t.$slots,"default")]),_:3},8,["as","class"]))}});o.__docgenInfo=Object.assign({displayName:o.name??o.__name},{exportName:"default",displayName:"ListGroup",description:"",tags:{},props:[{name:"class",required:!1,type:{name:"TSIndexedAccessType"}},{name:"type",required:!1,type:{name:"union",elements:[{name:'"ordered"'},{name:'"unordered"'}]}}],slots:[{name:"default"}],sourceFiles:["/Users/lord/Documents/Documentation/gwindui.github.io/src/components/list/ListGroup.vue"]});const F={title:"Components/ListGroup",component:o,subcomponents:{ListItem:L},tags:["autodocs"],argTypes:{type:{control:"select",options:["ordered","unordered"]}},args:{type:"unordered",default:`
            <ListItem v-for="(item, index) in items" :key="index" :index="index">
          {{ item.label }}
        </ListItem>
        `},render:n=>({components:{ListGroup:o,ListItem:L},setup(){const e=j([{label:"Item 1",value:"item-1"},{label:"Item 2",value:"item-2"},{label:"Item 3",value:"item-3"}]);return{args:n,items:e}},template:`
      <ListGroup v-bind="args">
        ${n.default}
      </ListGroup>
    `})},i={args:{type:"ordered"}},a={args:{type:"unordered"}},d={args:{default:`
           <div v-for="(item, index) in items" :key="index">
                            <ListItem v-if="index < 2" :index="index">
                                <template #customIcon>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M20.4219 5.61269L20.2831 5.477C19.519 4.7986 18.3925 4.84383 17.6767 5.61269L9.65023 14.2353L6.32326 10.6612C5.56281 9.84431 4.33855 9.84431 3.57811 10.6612C2.8073 11.4893 2.8073 12.8393 3.57811 13.6674L7.75548 18.155C8.80431 19.2817 10.4961 19.2817 11.545 18.155L20.4219 8.61882C21.1445 7.84253 21.1897 6.60745 20.5574 5.77381L20.4219 5.61269Z"
                                            fill="currentColor"
                                        />
                                    </svg>
                                </template>
                                {{ item.label }}
                            </ListItem>

                            <ListItem v-if="index === 2" :index="index">
                                <template #customIcon>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M17.0219 6.27576C17.4969 5.88357 18.2013 5.90971 18.6458 6.3542C19.1181 6.82646 19.1181 7.59215 18.6458 8.06441L14.2102 12.5L18.6458 16.9356C19.1181 17.4079 19.1181 18.1735 18.6458 18.6458C18.2013 19.0903 17.4969 19.1164 17.0219 18.7242L16.9356 18.6458L12.5 14.2102L8.06441 18.6458L7.97814 18.7242C7.50308 19.1164 6.79868 19.0903 6.3542 18.6458C5.88193 18.1735 5.88193 17.4079 6.3542 16.9356L10.7898 12.5L6.3542 8.06441C5.88193 7.59215 5.88193 6.82646 6.3542 6.3542C6.79868 5.90971 7.50308 5.88357 7.97814 6.27576L8.06441 6.3542L12.5 10.7898L16.9356 6.3542L17.0219 6.27576Z"
                                            fill="currentColor"
                                        />
                                    </svg>
                                </template>
                                {{ item.label }}
                            </ListItem>
                        </div>
        `}};var v,x,g;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    type: "ordered"
  }
}`,...(g=(x=i.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};var C,b,w;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    type: "unordered"
  }
}`,...(w=(b=a.parameters)==null?void 0:b.docs)==null?void 0:w.source}}};var y,h,I;d.parameters={...d.parameters,docs:{...(y=d.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    default: \`
           <div v-for="(item, index) in items" :key="index">
                            <ListItem v-if="index < 2" :index="index">
                                <template #customIcon>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M20.4219 5.61269L20.2831 5.477C19.519 4.7986 18.3925 4.84383 17.6767 5.61269L9.65023 14.2353L6.32326 10.6612C5.56281 9.84431 4.33855 9.84431 3.57811 10.6612C2.8073 11.4893 2.8073 12.8393 3.57811 13.6674L7.75548 18.155C8.80431 19.2817 10.4961 19.2817 11.545 18.155L20.4219 8.61882C21.1445 7.84253 21.1897 6.60745 20.5574 5.77381L20.4219 5.61269Z"
                                            fill="currentColor"
                                        />
                                    </svg>
                                </template>
                                {{ item.label }}
                            </ListItem>

                            <ListItem v-if="index === 2" :index="index">
                                <template #customIcon>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M17.0219 6.27576C17.4969 5.88357 18.2013 5.90971 18.6458 6.3542C19.1181 6.82646 19.1181 7.59215 18.6458 8.06441L14.2102 12.5L18.6458 16.9356C19.1181 17.4079 19.1181 18.1735 18.6458 18.6458C18.2013 19.0903 17.4969 19.1164 17.0219 18.7242L16.9356 18.6458L12.5 14.2102L8.06441 18.6458L7.97814 18.7242C7.50308 19.1164 6.79868 19.0903 6.3542 18.6458C5.88193 18.1735 5.88193 17.4079 6.3542 16.9356L10.7898 12.5L6.3542 8.06441C5.88193 7.59215 5.88193 6.82646 6.3542 6.3542C6.79868 5.90971 7.50308 5.88357 7.97814 6.27576L8.06441 6.3542L12.5 10.7898L16.9356 6.3542L17.0219 6.27576Z"
                                            fill="currentColor"
                                        />
                                    </svg>
                                </template>
                                {{ item.label }}
                            </ListItem>
                        </div>
        \`
  }
}`,...(I=(h=d.parameters)==null?void 0:h.docs)==null?void 0:I.source}}};const z=["Ordered","Unordered","CustomList"];export{d as CustomList,i as Ordered,a as Unordered,z as __namedExportsOrder,F as default};
