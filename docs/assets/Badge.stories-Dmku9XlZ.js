import{G as T}from"./GIcon-BXuKvWrh.js";import{b as D,_ as i}from"./index-VwIoAUN4.js";import{G as g}from"./g-icon-cross-C_9ug1ue.js";import{r as R}from"./iframe-c4IY6zQp.js";import"./utils-DFIdVO4u.js";import"./index-QLIpZy2_.js";import"./preload-helper-DKj51lX3.js";const A={title:"Components/Badge",component:i,tags:["autodocs"],parameters:{docs:{description:{component:"\n**Badge** adalah elemen label visual berukuran kecil yang digunakan untuk menyoroti status, kategori, atau jumlah barang.\n\n### Penggunaan Dasar\n```vue\n<Badge variant=\"green\">Sukses</Badge>\n```\n\n### Props\n| Prop | Tipe | Default | Deskripsi |\n|------|------|---------|-----------|\n| `variant` | `'green' \\| 'brocoli' \\| 'orange' \\| 'blue' \\| 'red' \\| 'outline'` | `'green'` | Tema warna badge |\n| `modelValue` | `boolean` | `true` | Visibilitas badge (bisa disembunyikan) |\n                "}}},argTypes:{class:{control:"text",description:"Class CSS tambahan"},variant:{control:"select",options:["green","brocoli","orange","blue","red","outline"],description:"Warna tema Badge"},modelValue:{control:"boolean",description:"Mengontrol visibilitas (tampil/sembunyi) badge"}},args:{variant:"green",modelValue:!0,default:"Badge"},render:e=>({components:{Badge:i,badgeVariants:D},setup(){return{args:e}},template:`
            <Badge v-bind="args" > {{args.default}} </Badge>
      `})},a={args:{variant:"green"}},r={args:{variant:"brocoli"}},n={args:{variant:"orange"}},s={args:{variant:"blue"}},o={args:{variant:"red"}},t={args:{variant:"outline"}},c={args:{rightIcon:`
                <GIcon @click="() => (badgeOpen = !badgeOpen)" class="w-1" :icon="GIconCross" weight="fill" class="ml-3 text-black-500 w-5 cursor"></GIcon>
        `},render:e=>({components:{Badge:i,badgeVariants:D,GIcon:T,GIconCross:g},setup(){const P=R(!0);return{args:e,badgeOpen:P,GIconCross:g}},template:`
            <Badge :model-value="badgeOpen"> {{args.default}} ${e.rightIcon} </Badge>
      `})};var d,l,u;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    variant: "green"
  }
}`,...(u=(l=a.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var p,m,b;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    variant: "brocoli"
  }
}`,...(b=(m=r.parameters)==null?void 0:m.docs)==null?void 0:b.source}}};var v,B,I;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    variant: "orange"
  }
}`,...(I=(B=n.parameters)==null?void 0:B.docs)==null?void 0:I.source}}};var f,G,O;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    variant: "blue"
  }
}`,...(O=(G=s.parameters)==null?void 0:G.docs)==null?void 0:O.source}}};var k,h,S;o.parameters={...o.parameters,docs:{...(k=o.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    variant: "red"
  }
}`,...(S=(h=o.parameters)==null?void 0:h.docs)==null?void 0:S.source}}};var C,w,V;t.parameters={...t.parameters,docs:{...(C=t.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    variant: "outline"
  }
}`,...(V=(w=t.parameters)==null?void 0:w.docs)==null?void 0:V.source}}};var _,x,y;c.parameters={...c.parameters,docs:{...(_=c.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    rightIcon: \`
                <GIcon @click="() => (badgeOpen = !badgeOpen)" class="w-1" :icon="GIconCross" weight="fill" class="ml-3 text-black-500 w-5 cursor"></GIcon>
        \`
  },
  render: (args: {
    rightIcon: string;
  }) => ({
    components: {
      Badge,
      badgeVariants,
      GIcon,
      GIconCross
    },
    setup() {
      const badgeOpen = ref(true);
      return {
        args,
        badgeOpen,
        GIconCross
      };
    },
    template: \`
            <Badge :model-value="badgeOpen"> {{args.default}} \${args.rightIcon} </Badge>
      \`
  })
}`,...(y=(x=c.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};const F=["Green","Brocoli","Orange","Blue","Red","Outline","Icon"];export{s as Blue,r as Brocoli,a as Green,c as Icon,n as Orange,t as Outline,o as Red,F as __namedExportsOrder,A as default};
