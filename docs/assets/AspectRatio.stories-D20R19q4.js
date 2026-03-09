import{d as c,f,P as h,a as d,v as k,w as m,b as g,m as v,u as i,X as b,c as R,D as _,E as w}from"./iframe-c4IY6zQp.js";import{u as A}from"./useForwardExpose-Cr5jnkZA.js";import{P as y}from"./Primitive-jOHN3RPP.js";import"./preload-helper-DKj51lX3.js";var P=c({inheritAttrs:!1,__name:"AspectRatio",props:{ratio:{type:Number,required:!1,default:1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},setup(a){const o=a,{forwardRef:r}=A(),n=f(()=>1/o.ratio*100);return(t,D)=>(d(),h("div",{style:b(`position: relative; width: 100%; padding-bottom: ${n.value}%`),"data-reka-aspect-ratio-wrapper":""},[k(i(y),v({ref:i(r),"as-child":t.asChild,as:t.as,style:{position:"absolute",inset:"0px"}},t.$attrs),{default:m(()=>[g(t.$slots,"default",{aspect:n.value})]),_:3},16,["as-child","as"])],4))}}),C=P;const e=c({__name:"AspectRatio",props:{ratio:{},asChild:{type:Boolean},as:{}},setup(a){const o=a;return(r,n)=>(d(),R(i(C),_(w(o)),{default:m(()=>[g(r.$slots,"default")]),_:3},16))}});e.__docgenInfo=Object.assign({displayName:e.name??e.__name},{exportName:"default",displayName:"AspectRatio",description:"",tags:{},slots:[{name:"default"}],sourceFiles:["/Users/lord/Documents/Documentation/gwindui.github.io/src/components/aspect-ratio/AspectRatio.vue"]});const B={title:"Components/AspectRatio",component:e,tags:["autodocs"],parameters:{docs:{description:{component:'\n**AspectRatio** adalah komponen *container* (bungkusan) yang mempertahankan rasio aspek tertentu untuk konten di dalamnya, sangat berguna untuk gambar responsif, embed video, atau peta agar tinggi kotak selalu proporsional dengan lebarnya terlepas dari ukuran layar.\n\n### Penggunaan Dasar\nContoh rasio video standar (16:9):\n```vue\n<AspectRatio :ratio="16/9">\n  <img src="/image.png" class="object-cover w-full h-full" />\n</AspectRatio>\n```\n\nContoh rasio foto potret (3:4):\n```vue\n<AspectRatio :ratio="3/4">\n  <img src="/foto.jpg" class="object-cover w-full h-full" />\n</AspectRatio>\n```\n\n### Props `AspectRatio`\n| Prop | Tipe | Default | Deskripsi |\n|------|------|---------|-----------|\n| `ratio` | `number` | `1` (1:1/Square) | Perhitungan rasio (Lebar / Tinggi) |\n\n> **Format Gambar**: Sangat disarankan untuk menaruh struktur class `w-full h-full object-cover` ke dalam elemen `<img>` atau konten anak agar memenuhi rongga `AspectRatio` secara proporsional.\n                '}}},argTypes:{ratio:{control:"number",description:"Rasio aspek kotak, contohnya: 16/9 untuk layar lebar layar sentuh, atau 1 (untuk kotak persegi)"}},args:{ratio:16/9}},s={render:a=>({components:{AspectRatio:e},setup(){return{args:a}},template:`
        <div class="w-full sm:w-[300px] overflow-hidden rounded-lg shadow-sm">
            <AspectRatio :ratio="args.ratio">
            <img
                class="h-full w-full object-cover"
                src="https://images.unsplash.com/photo-1498855926480-d98e83099315?w=300&dpr=2&q=80"
                alt="Landscape photograph by Tobias Tullius"
            >
            </AspectRatio>
        </div>
        `})};var p,l,u;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: (args: string) => ({
    components: {
      AspectRatio
    },
    setup() {
      return {
        args
      };
    },
    template: \`
        <div class="w-full sm:w-[300px] overflow-hidden rounded-lg shadow-sm">
            <AspectRatio :ratio="args.ratio">
            <img
                class="h-full w-full object-cover"
                src="https://images.unsplash.com/photo-1498855926480-d98e83099315?w=300&dpr=2&q=80"
                alt="Landscape photograph by Tobias Tullius"
            >
            </AspectRatio>
        </div>
        \`
  })
}`,...(u=(l=s.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};const N=["Default"];export{s as Default,N as __namedExportsOrder,B as default};
