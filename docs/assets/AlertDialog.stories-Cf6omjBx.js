import{d as s,r as E,c as p,a as i,w as n,b as u,m as _,a5 as P,q as G,u as o,D as g,E as m,f as N,v as $,ag as K,P as U,U as z}from"./iframe-c4IY6zQp.js";import{_ as y}from"./button-Cr1_wFBW.js";import{a as M,u as O}from"./useForwardPropsEmits-T2W0pCxY.js";import{u as A}from"./useForwardExpose-Cr5jnkZA.js";import{D as R}from"./DialogRoot-Blci9B0U.js";import{a as D}from"./utils-DFIdVO4u.js";import{a as S,b as V,D as J,c as L}from"./DialogTitle-BzMgjJ6h.js";import{c as Q}from"./createContext-cRkaqZ4A.js";import{T as W}from"./Teleport-B8QkTMKb.js";import{_ as X}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{D as Y}from"./DialogTrigger-AmHBbxnF.js";import"./preload-helper-DKj51lX3.js";import"./Primitive-jOHN3RPP.js";import"./index-QLIpZy2_.js";import"./Presence-B-TJz0M4.js";import"./useHideOthers-CYlkxdpM.js";import"./ConfigProvider-C_xfuhRi.js";import"./getActiveElement-FUKBWQwh.js";import"./useId--nAmYTv4.js";import"./DismissableLayer-GjTYHlTV.js";import"./handleAndDispatchCustomEvent-ChOKVcqp.js";import"./utils-axApmHzA.js";import"./utils-T_AZzJOL.js";const[Ue,Z]=Q("AlertDialogContent");var ee=s({__name:"AlertDialogContent",props:{forceMount:{type:Boolean,required:!1},disableOutsidePointerEvents:{type:Boolean,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},emits:["escapeKeyDown","pointerDownOutside","focusOutside","interactOutside","openAutoFocus","closeAutoFocus"],setup(t,{emit:e}){const a=t,r=M(e);A();const d=E();return Z({onCancelElementChange:f=>{d.value=f}}),(f,c)=>(i(),p(o(S),_({...a,...o(r)},{role:"alertdialog",onPointerDownOutside:c[0]||(c[0]=P(()=>{},["prevent"])),onInteractOutside:c[1]||(c[1]=P(()=>{},["prevent"])),onOpenAutoFocus:c[2]||(c[2]=()=>{G(()=>{var q;(q=d.value)==null||q.focus({preventScroll:!0})})})}),{default:n(()=>[u(f.$slots,"default")]),_:3},16))}}),te=ee,ae=s({__name:"AlertDialogDescription",props:{asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"p"}},setup(t){const e=t;return A(),(a,l)=>(i(),p(o(V),g(m(e)),{default:n(()=>[u(a.$slots,"default")]),_:3},16))}}),oe=ae,le=s({__name:"AlertDialogOverlay",props:{forceMount:{type:Boolean,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},setup(t){const e=t;return A(),(a,l)=>(i(),p(o(J),g(m(e)),{default:n(()=>[u(a.$slots,"default")]),_:3},16))}}),re=le,se=s({__name:"AlertDialogPortal",props:{to:{type:null,required:!1},disabled:{type:Boolean,required:!1},defer:{type:Boolean,required:!1},forceMount:{type:Boolean,required:!1}},setup(t){const e=t;return(a,l)=>(i(),p(o(W),g(m(e)),{default:n(()=>[u(a.$slots,"default")]),_:3},16))}}),ne=se,ie=s({__name:"AlertDialogRoot",props:{open:{type:Boolean,required:!1},defaultOpen:{type:Boolean,required:!1}},emits:["update:open"],setup(t,{emit:e}){const r=O(t,e);return A(),(d,f)=>(i(),p(o(R),_(o(r),{modal:!0}),{default:n(c=>[u(d.$slots,"default",g(m(c)))]),_:3},16))}}),ue=ie,pe=s({__name:"AlertDialogTitle",props:{asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"h2"}},setup(t){const e=t;return A(),(a,l)=>(i(),p(o(L),g(m(e)),{default:n(()=>[u(a.$slots,"default")]),_:3},16))}}),de=pe,ce=s({__name:"AlertDialogTrigger",props:{asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"button"}},setup(t){const e=t;return A(),(a,l)=>(i(),p(o(Y),g(m(e)),{default:n(()=>[u(a.$slots,"default")]),_:3},16))}}),ge=ce;const v=s({__name:"AlertDialog",props:{open:{type:Boolean},defaultOpen:{type:Boolean}},emits:["update:open"],setup(t,{emit:e}){const r=O(t,e);return(d,f)=>(i(),p(o(ue),g(m(o(r))),{default:n(()=>[u(d.$slots,"default")]),_:3},16))}});v.__docgenInfo=Object.assign({displayName:v.name??v.__name},{exportName:"default",displayName:"AlertDialog",description:"",tags:{},slots:[{name:"default"}],sourceFiles:["/Users/lord/Documents/Documentation/gwindui.github.io/src/components/alert-dialog/AlertDialog.vue"]});const C=s({__name:"AlertDialogAction",props:{asChild:{type:Boolean},as:{},class:{},variant:{}},setup(t){const e=t,a=N(()=>{const{class:l,...r}=e;return r});return(l,r)=>{const d=y;return i(),p(d,_(a.value,{class:o(D)(o(y),e.class),variant:a.value.variant,size:"md"}),{default:n(()=>[u(l.$slots,"default")]),_:3},16,["class","variant"])}}});C.__docgenInfo=Object.assign({displayName:C.name??C.__name},{exportName:"default",displayName:"AlertDialogAction",description:"",tags:{},slots:[{name:"default"}],sourceFiles:["/Users/lord/Documents/Documentation/gwindui.github.io/src/components/alert-dialog/AlertDialogAction.vue"]});const h=s({__name:"AlertDialogCancel",props:{asChild:{type:Boolean},as:{},class:{},variant:{}},setup(t){const e=t,a=N(()=>{const{class:l,...r}=e;return r});return(l,r)=>{const d=y;return i(),p(d,_(a.value,{class:o(D)(o(y),e.class),variant:a.value.variant||"secondary",size:"md"}),{default:n(()=>[u(l.$slots,"default")]),_:3},16,["class","variant"])}}});h.__docgenInfo=Object.assign({displayName:h.name??h.__name},{exportName:"default",displayName:"AlertDialogCancel",description:"",tags:{},slots:[{name:"default"}],sourceFiles:["/Users/lord/Documents/Documentation/gwindui.github.io/src/components/alert-dialog/AlertDialogCancel.vue"]});const me=s({name:"AlertDialogContent"}),b=s({...me,__name:"AlertDialogContent",props:{forceMount:{type:Boolean},disableOutsidePointerEvents:{type:Boolean},asChild:{type:Boolean},as:{},class:{}},emits:["escapeKeyDown","pointerDownOutside","focusOutside","interactOutside","openAutoFocus","closeAutoFocus"],setup(t,{emit:e}){const a=t,r=O(a,e);return(d,f)=>(i(),p(o(ne),null,{default:n(()=>[$(o(re),{class:"fixed inset-0 z-50 bg-black-800/20 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0"}),$(K,{name:"fade-scale"},{default:n(()=>[$(o(te),_(o(r),{class:o(D)("rounded-md fixed left-1/2 top-1/2 z-50 grid w-auto max-w-lg -translate-x-1/2 -translate-y-1/2 gap-4 bg-background p-4 drop-shadow-1 duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",a.class)}),{default:n(()=>[u(d.$slots,"default",{},void 0,!0)]),_:3},16,["class"])]),_:3})]),_:3}))}}),_e=X(b,[["__scopeId","data-v-2b08c49d"]]);b.__docgenInfo=Object.assign({displayName:b.name??b.__name},{exportName:"default",displayName:"AlertDialogContent",description:"",tags:{},slots:[{name:"default"}],sourceFiles:["/Users/lord/Documents/Documentation/gwindui.github.io/src/components/alert-dialog/AlertDialogContent.vue"]});const T=s({__name:"AlertDialogDescription",props:{asChild:{type:Boolean},as:{},class:{}},setup(t){const e=t,a=N(()=>{const{class:l,...r}=e;return r});return(l,r)=>(i(),p(o(oe),_(a.value,{class:o(D)("text-omicron text-black-50",e.class)}),{default:n(()=>[u(l.$slots,"default")]),_:3},16,["class"]))}});T.__docgenInfo=Object.assign({displayName:T.name??T.__name},{exportName:"default",displayName:"AlertDialogDescription",description:"",tags:{},slots:[{name:"default"}],sourceFiles:["/Users/lord/Documents/Documentation/gwindui.github.io/src/components/alert-dialog/AlertDialogDescription.vue"]});const B=s({__name:"AlertDialogFooter",props:{class:{}},setup(t){const e=t;return(a,l)=>(i(),U("div",{class:z(o(D)("flex flex-col-reverse gap-y-2 sm:flex-row sm:justify-end sm:gap-x-2",e.class))},[u(a.$slots,"default")],2))}});B.__docgenInfo=Object.assign({displayName:B.name??B.__name},{exportName:"default",displayName:"AlertDialogFooter",description:"",tags:{},props:[{name:"class",required:!1,type:{name:"TSIndexedAccessType"}}],slots:[{name:"default"}],sourceFiles:["/Users/lord/Documents/Documentation/gwindui.github.io/src/components/alert-dialog/AlertDialogFooter.vue"]});const x=s({__name:"AlertDialogHeader",props:{class:{}},setup(t){const e=t;return(a,l)=>(i(),U("div",{class:z(o(D)("flex flex-col gap-y-4 text-left sm:text-left",e.class))},[u(a.$slots,"default")],2))}});x.__docgenInfo=Object.assign({displayName:x.name??x.__name},{exportName:"default",displayName:"AlertDialogHeader",description:"",tags:{},props:[{name:"class",required:!1,type:{name:"TSIndexedAccessType"}}],slots:[{name:"default"}],sourceFiles:["/Users/lord/Documents/Documentation/gwindui.github.io/src/components/alert-dialog/AlertDialogHeader.vue"]});const w=s({__name:"AlertDialogTitle",props:{asChild:{type:Boolean},as:{},class:{}},setup(t){const e=t,a=N(()=>{const{class:l,...r}=e;return r});return(l,r)=>(i(),p(o(de),_(a.value,{class:o(D)("text-omicron font-bold",e.class)}),{default:n(()=>[u(l.$slots,"default")]),_:3},16,["class"]))}});w.__docgenInfo=Object.assign({displayName:w.name??w.__name},{exportName:"default",displayName:"AlertDialogTitle",description:"",tags:{},slots:[{name:"default"}],sourceFiles:["/Users/lord/Documents/Documentation/gwindui.github.io/src/components/alert-dialog/AlertDialogTitle.vue"]});const F=s({__name:"AlertDialogTrigger",props:{asChild:{type:Boolean},as:{}},setup(t){const e=t;return(a,l)=>(i(),p(o(ge),g(m(e)),{default:n(()=>[u(a.$slots,"default")]),_:3},16))}});F.__docgenInfo=Object.assign({displayName:F.name??F.__name},{exportName:"default",displayName:"AlertDialogTrigger",description:"",tags:{},slots:[{name:"default"}],sourceFiles:["/Users/lord/Documents/Documentation/gwindui.github.io/src/components/alert-dialog/AlertDialogTrigger.vue"]});const ze={title:"Components/AlertDialog",component:v,tags:["autodocs"],parameters:{docs:{description:{component:`
**AlertDialog** adalah dialog konfirmasi modal yang memerlukan respons pengguna sebelum melanjutkan aksi penting (seperti menghapus data). Berbeda dari Dialog biasa, AlertDialog dirancang khusus untuk meminta persetujuan.

Terdiri dari sub-komponen:
- **\`AlertDialog\`** — root container dengan state \`open\`
- **\`AlertDialogTrigger\`** — elemen yang memicu munculnya dialog
- **\`AlertDialogContent\`** — area konten dialog
- **\`AlertDialogHeader\`** — area judul
- **\`AlertDialogTitle\`** — judul dialog
- **\`AlertDialogDescription\`** — pesan penjelasan
- **\`AlertDialogFooter\`** — area tombol aksi
- **\`AlertDialogCancel\`** — tombol batal
- **\`AlertDialogAction\`** — tombol konfirmasi aksi

### Penggunaan Dasar
\`\`\`vue
<script setup>
import { ref } from 'vue'
const open = ref(false)
<\/script>

<template>
  <AlertDialog :open="open" @update:open="open = $event">
    <AlertDialogTrigger as-child>
      <GButton @click="open = true">Hapus Akun</GButton>
    </AlertDialogTrigger>
    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle>Apakah Anda yakin?</AlertDialogTitle>
        <AlertDialogDescription>Akun Anda akan dihapus permanen.</AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogCancel @click="open = false">Batal</AlertDialogCancel>
        <AlertDialogAction variant="destructive">Hapus</AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
</template>
\`\`\`

### Props \`AlertDialog\`
| Prop | Tipe | Deskripsi |
|------|------|-----------|
| \`open\` | \`boolean\` | Kontrol visibilitas dialog (v-model / :open + @update:open) |

### Props \`AlertDialogCancel\` / \`AlertDialogAction\`
| Prop | Tipe | Deskripsi |
|------|------|-----------|
| \`variant\` | \`string\` | Variant tombol (mengikuti Button variants) |
                `}}}},k={args:{open:!1},render:t=>({components:{AlertDialog:v,AlertDialogTrigger:F,AlertDialogContent:_e,AlertDialogHeader:x,AlertDialogTitle:w,AlertDialogDescription:T,AlertDialogFooter:B,AlertDialogCancel:h,AlertDialogAction:C,GButton:y},setup(){const e=E(!1);return{args:t,open:e}},template:`
      <AlertDialog :open="args.open" @update:open="args.open = $event">
        <AlertDialogTrigger @click="open = true" as-child>
          <GButton>Hapus Akun</GButton>
        </AlertDialogTrigger>
        <AlertDialogContent class="max-w-sm">
          <AlertDialogHeader>
            <AlertDialogTitle>Apakah Anda yakin?</AlertDialogTitle>
            <AlertDialogDescription>
              Tindakan ini tidak dapat diurungkan. Ini akan menghapus akun Anda secara permanen.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter class="gap-y-4">
            <AlertDialogCancel @click="args.open = false" variant="secondary">Tutup</AlertDialogCancel>
            <AlertDialogAction variant="destructive">Hapus Akun</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    `}),parameters:{docs:{description:{story:"Dialog konfirmasi hapus akun. Klik tombol untuk membuka dialog."}}}};var H,j,I;k.parameters={...k.parameters,docs:{...(H=k.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    open: false
  },
  render: (args: {
    open: boolean;
  }) => ({
    components: {
      AlertDialog,
      AlertDialogTrigger,
      AlertDialogContent,
      AlertDialogHeader,
      AlertDialogTitle,
      AlertDialogDescription,
      AlertDialogFooter,
      AlertDialogCancel,
      AlertDialogAction,
      GButton
    },
    setup() {
      const open = ref(false);
      return {
        args,
        open
      };
    },
    template: \`
      <AlertDialog :open="args.open" @update:open="args.open = $event">
        <AlertDialogTrigger @click="open = true" as-child>
          <GButton>Hapus Akun</GButton>
        </AlertDialogTrigger>
        <AlertDialogContent class="max-w-sm">
          <AlertDialogHeader>
            <AlertDialogTitle>Apakah Anda yakin?</AlertDialogTitle>
            <AlertDialogDescription>
              Tindakan ini tidak dapat diurungkan. Ini akan menghapus akun Anda secara permanen.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter class="gap-y-4">
            <AlertDialogCancel @click="args.open = false" variant="secondary">Tutup</AlertDialogCancel>
            <AlertDialogAction variant="destructive">Hapus Akun</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: "Dialog konfirmasi hapus akun. Klik tombol untuk membuka dialog."
      }
    }
  }
}`,...(I=(j=k.parameters)==null?void 0:j.docs)==null?void 0:I.source}}};const Ge=["Default"];export{k as Default,Ge as __namedExportsOrder,ze as default};
