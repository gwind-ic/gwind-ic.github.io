import{d as p,r as A,c as m,a as v,w as b,b as f,u as l,l as M,j as V,f as W,o as Y,s as G,t as H,e as J,Y as K,an as Q,U as X,D as Z,E as aa,m as ea}from"./iframe-c4IY6zQp.js";import{a as ra}from"./utils-DFIdVO4u.js";import{c as ta}from"./createContext-cRkaqZ4A.js";import{u as C,i as $}from"./useForwardExpose-Cr5jnkZA.js";import{P as S}from"./Primitive-jOHN3RPP.js";import{c as sa}from"./index-QLIpZy2_.js";import"./preload-helper-DKj51lX3.js";const[O,na]=ta("AvatarRoot");var la=p({__name:"AvatarRoot",props:{asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"span"}},setup(a){return C(),na({imageLoadingStatus:A("idle")}),(e,t)=>(v(),m(l(S),{"as-child":e.asChild,as:e.as},{default:b(()=>[f(e.$slots,"default")]),_:3},8,["as-child","as"]))}}),oa=la,ia=p({__name:"AvatarFallback",props:{delayMs:{type:Number,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"span"}},setup(a){const e=a,t=O();C();const s=A(e.delayMs===void 0);return M(n=>{if(e.delayMs&&$){const o=window.setTimeout(()=>{s.value=!0},e.delayMs);n(()=>{window.clearTimeout(o)})}}),(n,o)=>s.value&&l(t).imageLoadingStatus.value!=="loaded"?(v(),m(l(S),{key:0,"as-child":n.asChild,as:n.as},{default:b(()=>[f(n.$slots,"default")]),_:3},8,["as-child","as"])):V("v-if",!0)}}),ca=ia;function z(a,e){return a?e?(a.src!==e&&(a.src=e),a.complete&&a.naturalWidth>0?"loaded":"loading"):"error":"idle"}function ua(a,{referrerPolicy:e,crossOrigin:t}={}){const s=A(!1),n=A(null),o=W(()=>s.value?(!n.value&&$&&(n.value=new window.Image),n.value):null),g=A(z(o.value,a.value)),k=d=>()=>{s.value&&(g.value=d)};return Y(()=>{s.value=!0,M(d=>{const r=o.value;if(!r)return;g.value=z(r,a.value);const I=k("loaded"),q=k("error");r.addEventListener("load",I),r.addEventListener("error",q),e!=null&&e.value&&(r.referrerPolicy=e.value),typeof(t==null?void 0:t.value)=="string"&&(r.crossOrigin=t.value),d(()=>{r.removeEventListener("load",I),r.removeEventListener("error",q)})})}),G(()=>{s.value=!1}),g}var da=p({__name:"AvatarImage",props:{src:{type:String,required:!0},referrerPolicy:{type:null,required:!1},crossOrigin:{type:null,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"img"}},emits:["loadingStatusChange"],setup(a,{emit:e}){const t=a,s=e,{src:n,referrerPolicy:o,crossOrigin:g}=H(t);C();const k=O(),d=ua(n,{referrerPolicy:o,crossOrigin:g});return J(d,r=>{s("loadingStatusChange",r),r!=="idle"&&(k.imageLoadingStatus.value=r)},{immediate:!0}),(r,I)=>K((v(),m(l(S),{role:"img","as-child":r.asChild,as:r.as,src:l(n),"referrer-policy":l(o)},{default:b(()=>[f(r.$slots,"default")]),_:3},8,["as-child","as","src","referrer-policy"])),[[Q,l(d)==="loaded"]])}}),pa=da;const i=p({__name:"Avatar",props:{class:{},size:{default:"sm"},shape:{default:"circle"}},setup(a){const e=a;return(t,s)=>(v(),m(l(oa),{class:X(l(ra)(l(ma)({size:a.size,shape:a.shape}),e.class))},{default:b(()=>[f(t.$slots,"default")]),_:3},8,["class"]))}});i.__docgenInfo=Object.assign({displayName:i.name??i.__name},{exportName:"default",displayName:"Avatar",description:"",tags:{},props:[{name:"class",required:!1,type:{name:"TSIndexedAccessType"}},{name:"size",required:!1,type:{name:"TSIndexedAccessType"},defaultValue:{func:!1,value:'"sm"'}},{name:"shape",required:!1,type:{name:"TSIndexedAccessType"},defaultValue:{func:!1,value:'"circle"'}}],slots:[{name:"default"}],sourceFiles:["/Users/lord/Documents/Documentation/gwindui.github.io/src/components/avatar/Avatar.vue"]});const c=p({__name:"AvatarFallback",props:{delayMs:{},asChild:{type:Boolean},as:{}},setup(a){const e=a;return(t,s)=>(v(),m(l(ca),Z(aa(e)),{default:b(()=>[f(t.$slots,"default")]),_:3},16))}});c.__docgenInfo=Object.assign({displayName:c.name??c.__name},{exportName:"default",displayName:"AvatarFallback",description:"",tags:{},slots:[{name:"default"}],sourceFiles:["/Users/lord/Documents/Documentation/gwindui.github.io/src/components/avatar/AvatarFallback.vue"]});const u=p({__name:"AvatarImage",props:{src:{},referrerPolicy:{},crossOrigin:{},asChild:{type:Boolean},as:{}},setup(a){const e=a;return(t,s)=>(v(),m(l(pa),ea(e,{class:"h-full w-full object-cover"}),null,16))}});u.__docgenInfo=Object.assign({displayName:u.name??u.__name},{exportName:"default",displayName:"AvatarImage",description:"",tags:{},sourceFiles:["/Users/lord/Documents/Documentation/gwindui.github.io/src/components/avatar/AvatarImage.vue"]});const ma=sa("inline-flex items-center justify-center text-black-50 select-none shrink-0 bg-secondary overflow-hidden",{variants:{size:{sm:"h-10 w-10 text-xs",base:"h-16 w-16 text-2xl",lg:"h-32 w-32 text-5xl"},shape:{circle:"rounded-full",square:"rounded-sm"}}}),_a={title:"Components/Avatar",component:i,tags:["autodocs"],parameters:{docs:{description:{component:"\n**Avatar** adalah komponen gambar profil pengguna yang mendukung gambar dari URL, fallback teks inisial, serta variasi ukuran dan bentuk.\n\nTerdiri dari:\n- **`Avatar`** — root container (mengatur ukuran & bentuk)\n- **`AvatarImage`** — gambar dari URL (lazy loaded)\n- **`AvatarFallback`** — teks fallback (inisial) saat gambar gagal dimuat\n\n### Penggunaan Dasar\n```vue\n<Avatar size=\"base\" shape=\"circle\">\n  <AvatarImage src=\"https://example.com/avatar.jpg\" alt=\"User\" />\n  <AvatarFallback>AB</AvatarFallback>\n</Avatar>\n```\n\n### Props `Avatar`\n| Prop | Tipe | Default | Deskripsi |\n|------|------|---------|-----------|\n| `size` | `'sm' \\| 'base' \\| 'lg'` | `'base'` | Ukuran avatar |\n| `shape` | `'circle' \\| 'square'` | `'circle'` | Bentuk avatar |\n\n### Props `AvatarImage`\n| Prop | Tipe | Deskripsi |\n|------|------|-----------|\n| `src` | `string` | URL gambar avatar |\n| `alt` | `string` | Teks alternatif (aksesibilitas) |\n                "}}},argTypes:{size:{control:"select",options:["base","sm","lg"],description:"Ukuran avatar: sm (kecil), base (standar), lg (besar)"},shape:{control:"select",options:["circle","square"],description:"Bentuk avatar: circle (bulat) atau square (kotak)"},src:{control:"text",description:"URL gambar yang ditampilkan di dalam avatar"}}},h={name:"Circle — Small",args:{size:"sm",shape:"circle",src:"https://github.com/unovue.png"},render:a=>({components:{Avatar:i,AvatarFallback:c,AvatarImage:u},setup(){return{args:a}},template:`
        <Avatar v-bind="args">
            <AvatarImage :src="args.src" alt="@unovue" />
            <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        `}),parameters:{docs:{description:{story:"Avatar ukuran kecil dengan bentuk lingkaran."}}}},_={name:"Circle — Large",args:{size:"lg",shape:"circle",src:"https://github.com/unovue.png"},render:a=>({components:{Avatar:i,AvatarFallback:c,AvatarImage:u},setup(){return{args:a}},template:`
        <Avatar v-bind="args">
            <AvatarImage :src="args.src" alt="@unovue" />
            <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        `}),parameters:{docs:{description:{story:"Avatar ukuran besar dengan bentuk lingkaran."}}}},y={name:"Square",args:{size:"base",shape:"square",src:"https://github.com/unovue.png"},render:a=>({components:{Avatar:i,AvatarFallback:c,AvatarImage:u},setup(){return{args:a}},template:`
        <Avatar v-bind="args">
            <AvatarImage :src="args.src" alt="@unovue" />
            <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        `}),parameters:{docs:{description:{story:"Avatar berbentuk kotak."}}}},F={name:"Fallback (No Image)",args:{size:"base",shape:"circle",src:""},render:a=>({components:{Avatar:i,AvatarFallback:c,AvatarImage:u},setup(){return{args:a}},template:`
        <Avatar v-bind="args">
            <AvatarImage src="invalid-url" alt="broken" />
            <AvatarFallback>AB</AvatarFallback>
        </Avatar>
        `}),parameters:{docs:{description:{story:"Saat gambar gagal dimuat, teks inisial fallback ditampilkan sebagai gantinya."}}}};var w,x,L;h.parameters={...h.parameters,docs:{...(w=h.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: "Circle — Small",
  args: {
    size: "sm",
    shape: "circle",
    src: "https://github.com/unovue.png"
  },
  render: (args: {
    size: string;
    shape: string;
    src: string;
  }) => ({
    components: {
      Avatar,
      AvatarFallback,
      AvatarImage
    },
    setup() {
      return {
        args
      };
    },
    template: \`
        <Avatar v-bind="args">
            <AvatarImage :src="args.src" alt="@unovue" />
            <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        \`
  }),
  parameters: {
    docs: {
      description: {
        story: "Avatar ukuran kecil dengan bentuk lingkaran."
      }
    }
  }
}`,...(L=(x=h.parameters)==null?void 0:x.docs)==null?void 0:L.source}}};var N,D,R;_.parameters={..._.parameters,docs:{...(N=_.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: "Circle — Large",
  args: {
    size: "lg",
    shape: "circle",
    src: "https://github.com/unovue.png"
  },
  render: (args: {
    size: string;
    shape: string;
    src: string;
  }) => ({
    components: {
      Avatar,
      AvatarFallback,
      AvatarImage
    },
    setup() {
      return {
        args
      };
    },
    template: \`
        <Avatar v-bind="args">
            <AvatarImage :src="args.src" alt="@unovue" />
            <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        \`
  }),
  parameters: {
    docs: {
      description: {
        story: "Avatar ukuran besar dengan bentuk lingkaran."
      }
    }
  }
}`,...(R=(D=_.parameters)==null?void 0:D.docs)==null?void 0:R.source}}};var T,B,U;y.parameters={...y.parameters,docs:{...(T=y.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: "Square",
  args: {
    size: "base",
    shape: "square",
    src: "https://github.com/unovue.png"
  },
  render: (args: {
    size: string;
    shape: string;
    src: string;
  }) => ({
    components: {
      Avatar,
      AvatarFallback,
      AvatarImage
    },
    setup() {
      return {
        args
      };
    },
    template: \`
        <Avatar v-bind="args">
            <AvatarImage :src="args.src" alt="@unovue" />
            <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        \`
  }),
  parameters: {
    docs: {
      description: {
        story: "Avatar berbentuk kotak."
      }
    }
  }
}`,...(U=(B=y.parameters)==null?void 0:B.docs)==null?void 0:U.source}}};var E,P,j;F.parameters={...F.parameters,docs:{...(E=F.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: "Fallback (No Image)",
  args: {
    size: "base",
    shape: "circle",
    src: ""
  },
  render: (args: {
    size: string;
    shape: string;
    src: string;
  }) => ({
    components: {
      Avatar,
      AvatarFallback,
      AvatarImage
    },
    setup() {
      return {
        args
      };
    },
    template: \`
        <Avatar v-bind="args">
            <AvatarImage src="invalid-url" alt="broken" />
            <AvatarFallback>AB</AvatarFallback>
        </Avatar>
        \`
  }),
  parameters: {
    docs: {
      description: {
        story: "Saat gambar gagal dimuat, teks inisial fallback ditampilkan sebagai gantinya."
      }
    }
  }
}`,...(j=(P=F.parameters)==null?void 0:P.docs)==null?void 0:j.source}}};const ya=["Default","Large","Square","Fallback"];export{h as Default,F as Fallback,_ as Large,y as Square,ya as __namedExportsOrder,_a as default};
