import{d as n,P as d,b as c,U as m,u as t,a as i,Q as k,v as I,c as L,w as v}from"./iframe-c4IY6zQp.js";import{a as o}from"./utils-DFIdVO4u.js";import{P as N}from"./Primitive-jOHN3RPP.js";import{c as w}from"./createLucideIcon-C05cy66L.js";import"./preload-helper-DKj51lX3.js";const u=n({__name:"Breadcrumb",props:{class:{}},setup(e){const a=e;return(r,s)=>(i(),d("nav",{"aria-label":"breadcrumb",class:m(t(o)("py-4 border-b border-b-black-200",a.class))},[c(r.$slots,"default")],2))}});u.__docgenInfo=Object.assign({displayName:u.name??u.__name},{exportName:"default",displayName:"Breadcrumb",description:"",tags:{},props:[{name:"class",required:!1,type:{name:"TSIndexedAccessType"}}],slots:[{name:"default"}],sourceFiles:["/Users/lord/Documents/Documentation/gwindui.github.io/src/components/breadcrumb/Breadcrumb.vue"]});/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D=w("EllipsisIcon",[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"19",cy:"12",r:"1",key:"1wjl8i"}],["circle",{cx:"5",cy:"12",r:"1",key:"1pcz8c"}]]),p=n({__name:"BreadcrumbEllipsis",props:{class:{}},setup(e){const a=e;return(r,s)=>(i(),d("span",{role:"presentation","aria-hidden":"true",class:m(t(o)("flex h-9 w-9 items-center justify-center",a.class))},[c(r.$slots,"default",{},()=>[I(t(D),{class:"h-4 w-4"})]),s[0]||(s[0]=k("span",{class:"sr-only"},"More",-1))],2))}});p.__docgenInfo=Object.assign({displayName:p.name??p.__name},{exportName:"default",displayName:"BreadcrumbEllipsis",description:"",tags:{},props:[{name:"class",required:!1,type:{name:"TSIndexedAccessType"}}],slots:[{name:"default"}],sourceFiles:["/Users/lord/Documents/Documentation/gwindui.github.io/src/components/breadcrumb/BreadcrumbEllipsis.vue"]});const b=n({__name:"BreadcrumbItem",props:{class:{}},setup(e){const a=e;return(r,s)=>(i(),d("li",{class:m(t(o)("inline-flex items-center gap-1",a.class))},[c(r.$slots,"default")],2))}});b.__docgenInfo=Object.assign({displayName:b.name??b.__name},{exportName:"default",displayName:"BreadcrumbItem",description:"",tags:{},props:[{name:"class",required:!1,type:{name:"TSIndexedAccessType"}}],slots:[{name:"default"}],sourceFiles:["/Users/lord/Documents/Documentation/gwindui.github.io/src/components/breadcrumb/BreadcrumbItem.vue"]});const f=n({__name:"BreadcrumbLink",props:{asChild:{type:Boolean},as:{default:"a"},class:{}},setup(e){const a=e;return(r,s)=>(i(),L(t(N),{as:e.as,"as-child":e.asChild,class:m(t(o)("transition-colors hover:text-lime-800",a.class))},{default:v(()=>[c(r.$slots,"default")]),_:3},8,["as","as-child","class"]))}});f.__docgenInfo=Object.assign({displayName:f.name??f.__name},{exportName:"default",displayName:"BreadcrumbLink",description:"",tags:{},props:[{name:"as",defaultValue:{func:!1,value:'"a"'}}],slots:[{name:"default"}],sourceFiles:["/Users/lord/Documents/Documentation/gwindui.github.io/src/components/breadcrumb/BreadcrumbLink.vue"]});const B=n({__name:"BreadcrumbList",props:{class:{}},setup(e){const a=e;return(r,s)=>(i(),d("ol",{class:m(t(o)("flex flex-wrap items-center gap-1 break-words !text-sigma text-lime-500 sm:gap-2",a.class))},[c(r.$slots,"default")],2))}});B.__docgenInfo=Object.assign({displayName:B.name??B.__name},{exportName:"default",displayName:"BreadcrumbList",description:"",tags:{},props:[{name:"class",required:!1,type:{name:"TSIndexedAccessType"}}],slots:[{name:"default"}],sourceFiles:["/Users/lord/Documents/Documentation/gwindui.github.io/src/components/breadcrumb/BreadcrumbList.vue"]});const g=n({__name:"BreadcrumbPage",props:{class:{}},setup(e){const a=e;return(r,s)=>(i(),d("span",{role:"link","aria-disabled":"true","aria-current":"page",class:m(t(o)("!text-sigma font-default text-black-800",a.class))},[c(r.$slots,"default")],2))}});g.__docgenInfo=Object.assign({displayName:g.name??g.__name},{exportName:"default",displayName:"BreadcrumbPage",description:"",tags:{},props:[{name:"class",required:!1,type:{name:"TSIndexedAccessType"}}],slots:[{name:"default"}],sourceFiles:["/Users/lord/Documents/Documentation/gwindui.github.io/src/components/breadcrumb/BreadcrumbPage.vue"]});const _=n({__name:"BreadcrumbSeparator",props:{class:{}},setup(e){const a=e;return(r,s)=>(i(),d("li",{role:"presentation","aria-hidden":"true",class:m(t(o)("[&>svg]:w-5 [&>svg]:h-5",a.class))},[c(r.$slots,"default",{},()=>[s[0]||(s[0]=k("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 20 20",fill:"none"},[k("path",{d:"M7.49766 13.2292L10.731 9.99583L7.49766 6.7625C7.17266 6.4375 7.17266 5.9125 7.49766 5.5875C7.82266 5.2625 8.34766 5.2625 8.67266 5.5875L12.4977 9.4125C12.8227 9.7375 12.8227 10.2625 12.4977 10.5875L8.67266 14.4125C8.34766 14.7375 7.82266 14.7375 7.49766 14.4125C7.18099 14.0875 7.17266 13.5542 7.49766 13.2292Z",fill:"#BBBDC0"})],-1))])],2))}});_.__docgenInfo=Object.assign({displayName:_.name??_.__name},{exportName:"default",displayName:"BreadcrumbSeparator",description:"",tags:{},props:[{name:"class",required:!1,type:{name:"TSIndexedAccessType"}}],slots:[{name:"default"}],sourceFiles:["/Users/lord/Documents/Documentation/gwindui.github.io/src/components/breadcrumb/BreadcrumbSeparator.vue"]});const j={title:"Components/Breadcrumb",component:u,tags:["autodocs"],parameters:{docs:{description:{component:`
**Breadcrumb** adalah komponen navigasi yang menunjukkan hirarki halaman saat ini dalam sebuah situs atau aplikasi klaster, membantu pengguna memahami lokasi mereka dan memfasilitasi navigasi kembali ke halaman induk.

Terdiri dari sub-komponen:
- **\`Breadcrumb\`** — root container navigasi
- **\`BreadcrumbList\`** — list container (ul)
- **\`BreadcrumbItem\`** — list item container (li)
- **\`BreadcrumbLink\`** — tautan aktif yang dapat diklik
- **\`BreadcrumbPage\`** — item saat ini (halaman yang sedang dibuka), tidak dapat diklik
- **\`BreadcrumbSeparator\`** — ikon pemisah antar item (default berupa slash atau caret)
- **\`BreadcrumbEllipsis\`** — penanda titik-titik (elipsis) jika menu terlalu panjang

### Penggunaan Dasar
\`\`\`vue
<Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem><BreadcrumbLink href="/">Home</BreadcrumbLink></BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem><BreadcrumbLink href="/components">Components</BreadcrumbLink></BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem><BreadcrumbPage>Breadcrumb</BreadcrumbPage></BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>
\`\`\`

### Props
Komponen Breadcrumb bersifat as-is struktur HTML dan ARIA, properti dinamis utamanya dikontrol melalui prop \`href\` pada \`BreadcrumbLink\`.
                `}}},args:{default:`
        <BreadcrumbList>
            <template v-for="(crumb, index) in breadcrumbs" :key="index">
            <BreadcrumbItem>
                <component
                :is="crumb.href ? 'BreadcrumbLink' : 'BreadcrumbPage'"
                :href="crumb.href"
                >
                {{ crumb.label }}
                </component>
            </BreadcrumbItem>

            <BreadcrumbSeparator
                v-if="index < breadcrumbs.length - 1"
            />
            </template>
        </BreadcrumbList>
        `},render:e=>({components:{Breadcrumb:u,BreadcrumbEllipsis:p,BreadcrumbItem:b,BreadcrumbLink:f,BreadcrumbList:B,BreadcrumbPage:g,BreadcrumbSeparator:_},setup(){return{args:e,breadcrumbs:[{label:"Home",href:"/"},{label:"Components",href:"/components"},{label:"Breadcrumb",href:null}]}},template:`
        <Breadcrumb>
            ${e.default}
        </Breadcrumb>
      `})},l={name:"Default",parameters:{docs:{description:{story:"Breadcrumb standar dengan tiga tingkat hirarki."}}}};var h,y,x;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: "Default",
  parameters: {
    docs: {
      description: {
        story: "Breadcrumb standar dengan tiga tingkat hirarki."
      }
    }
  }
}`,...(x=(y=l.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};const E=["Default"];export{l as Default,E as __namedExportsOrder,j as default};
