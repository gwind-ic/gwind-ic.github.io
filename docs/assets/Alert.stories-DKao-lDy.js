import{d as m,P as g,Q as G,b as f,v as O,u as a,U as k,a as A,f as q}from"./iframe-c4IY6zQp.js";import{a as v}from"./utils-DFIdVO4u.js";import{c as P}from"./index-QLIpZy2_.js";import{G as U}from"./GIcon-BXuKvWrh.js";import{G as V}from"./g-icon-cross-C_9ug1ue.js";import"./preload-helper-DKj51lX3.js";const W={className:"absolute top-4 right-4 text-black-50 hover:text-black-60 focus:outline-hidden","aria-label":"Close"},t=m({__name:"Alert",props:{class:{},variant:{}},setup(e){const r=e;return(n,s)=>(A(),g("div",{class:k(a(v)(a(F)({variant:e.variant}),r.class)),role:"alert"},[G("button",W,[O(a(U),{icon:a(V),weight:"outline",class:"w-[18px] text-black-80 hover:cursor-pointer text-black-600"},null,8,["icon"])]),f(n.$slots,"default")],2))}});t.__docgenInfo=Object.assign({displayName:t.name??t.__name},{exportName:"default",displayName:"Alert",description:"",tags:{},props:[{name:"class",required:!1,type:{name:"TSIndexedAccessType"}},{name:"variant",required:!1,type:{name:"Exclude",elements:[{name:"TSIndexedAccessType"},{name:'"default"'}]}}],slots:[{name:"default"}],sourceFiles:["/Users/lord/Documents/Documentation/gwindui.github.io/src/components/alert/Alert.vue"]});const p=m({__name:"AlertDescription",props:{class:{}},setup(e){const r=q(()=>({"text-sigma font-regular [&_p]:leading-relaxed":!0})),n=e;return(s,B)=>(A(),g("div",{class:k(a(v)(r.value,n.class))},[f(s.$slots,"default")],2))}});p.__docgenInfo=Object.assign({displayName:p.name??p.__name},{exportName:"default",displayName:"AlertDescription",description:"",tags:{},props:[{name:"class",required:!1,type:{name:"TSIndexedAccessType"}}],slots:[{name:"default"}],sourceFiles:["/Users/lord/Documents/Documentation/gwindui.github.io/src/components/alert/AlertDescription.vue"]});const d=m({__name:"AlertTitle",props:{class:{}},setup(e){const r=q(()=>({"mb-1 text-omicron font-bold leading-none tracking-tight":!0})),n=e;return(s,B)=>(A(),g("h5",{class:k(a(v)(r.value,n.class))},[f(s.$slots,"default")],2))}});d.__docgenInfo=Object.assign({displayName:d.name??d.__name},{exportName:"default",displayName:"AlertTitle",description:"",tags:{},props:[{name:"class",required:!1,type:{name:"TSIndexedAccessType"}}],slots:[{name:"default"}],sourceFiles:["/Users/lord/Documents/Documentation/gwindui.github.io/src/components/alert/AlertTitle.vue"]});const F=P("relative text-black-800 w-full rounded-lg border p-4 [&>svg~*]:pl-10 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground",{variants:{variant:{default:"border-lime-500 bg-lime-500 text-white",error:"border-red-500 bg-red-100",success:"border-lime-500 bg-lime-100",warning:"border-orange-500 bg-orange-100",info:"border-blue-500 bg-blue-100"}},defaultVariants:{variant:"default"}}),K={title:"Components/Alert",component:t,tags:["autodocs"],parameters:{docs:{description:{component:"\n**Alert** adalah komponen notifikasi inline yang digunakan untuk menampilkan pesan penting kepada pengguna. Mendukung berbagai variant kontekstual untuk membedakan jenis pesan.\n\nTerdiri dari:\n- **`Alert`** — container utama dengan variant styling\n- **`AlertTitle`** — judul pesan\n- **`AlertDescription`** — isi/detail pesan\n\n### Penggunaan Dasar\n```vue\n<Alert variant=\"success\">\n  <AlertTitle>Berhasil!</AlertTitle>\n  <AlertDescription>Data Anda telah berhasil disimpan.</AlertDescription>\n</Alert>\n```\n\n### Props `Alert`\n| Prop | Tipe | Default | Deskripsi |\n|------|------|---------|-----------|\n| `variant` | `'default' \\| 'error' \\| 'success' \\| 'warning' \\| 'info'` | `'default'` | Jenis notifikasi |\n| `class` | `string` | — | Class CSS tambahan |\n                "}}},argTypes:{class:{control:"text"},variant:{control:"select",options:["default","error","success","warning","info"],description:"Jenis variant notifikasi yang menentukan warna dan ikon"}},args:{variant:"default",default:`
             <AlertTitle>Heads up!</AlertTitle>
            <AlertDescription> You can add components to your app using the cli. </AlertDescription>
        `},render:e=>({components:{Alert:t,AlertDescription:p,AlertTitle:d},setup(){return{args:e}},template:`
        <Alert v-bind="args">
           ${e.default}
        </Alert>
      `})},o={name:"Default",args:{variant:"default"},parameters:{docs:{description:{story:"Alert standar tanpa konteks khusus."}}}},i={name:"Error",args:{variant:"error"},parameters:{docs:{description:{story:"Alert untuk menampilkan pesan error atau kegagalan."}}}},l={name:"Success",args:{variant:"success"},parameters:{docs:{description:{story:"Alert untuk konfirmasi keberhasilan suatu aksi."}}}},c={name:"Warning",args:{variant:"warning"},parameters:{docs:{description:{story:"Alert untuk memberikan peringatan kepada pengguna."}}}},u={name:"Info",args:{variant:"info"},parameters:{docs:{description:{story:"Alert untuk informasi netral yang perlu diperhatikan."}}}};var b,y,_;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: "Default",
  args: {
    variant: "default"
  },
  parameters: {
    docs: {
      description: {
        story: "Alert standar tanpa konteks khusus."
      }
    }
  }
}`,...(_=(y=o.parameters)==null?void 0:y.docs)==null?void 0:_.source}}};var h,D,x;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: "Error",
  args: {
    variant: "error"
  },
  parameters: {
    docs: {
      description: {
        story: "Alert untuk menampilkan pesan error atau kegagalan."
      }
    }
  }
}`,...(x=(D=i.parameters)==null?void 0:D.docs)==null?void 0:x.source}}};var T,S,w;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: "Success",
  args: {
    variant: "success"
  },
  parameters: {
    docs: {
      description: {
        story: "Alert untuk konfirmasi keberhasilan suatu aksi."
      }
    }
  }
}`,...(w=(S=l.parameters)==null?void 0:S.docs)==null?void 0:w.source}}};var I,N,C;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: "Warning",
  args: {
    variant: "warning"
  },
  parameters: {
    docs: {
      description: {
        story: "Alert untuk memberikan peringatan kepada pengguna."
      }
    }
  }
}`,...(C=(N=c.parameters)==null?void 0:N.docs)==null?void 0:C.source}}};var E,$,j;u.parameters={...u.parameters,docs:{...(E=u.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: "Info",
  args: {
    variant: "info"
  },
  parameters: {
    docs: {
      description: {
        story: "Alert untuk informasi netral yang perlu diperhatikan."
      }
    }
  }
}`,...(j=($=u.parameters)==null?void 0:$.docs)==null?void 0:j.source}}};const L=["Default","Error","Success","Warning","Info"];export{o as Default,i as Error,u as Info,l as Success,c as Warning,L as __namedExportsOrder,K as default};
