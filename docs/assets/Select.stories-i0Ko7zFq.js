import{_ as o,a as i,b as l,c as p,d as c}from"./SelectValue-6yO4q6so.js";import"./iframe-c4IY6zQp.js";import"./preload-helper-DKj51lX3.js";import"./useForwardPropsEmits-T2W0pCxY.js";import"./utils-DFIdVO4u.js";import"./Presence-B-TJz0M4.js";import"./Primitive-jOHN3RPP.js";import"./useForwardExpose-Cr5jnkZA.js";import"./Teleport-B8QkTMKb.js";import"./ConfigProvider-C_xfuhRi.js";import"./createContext-cRkaqZ4A.js";import"./getActiveElement-FUKBWQwh.js";import"./handleAndDispatchCustomEvent-ChOKVcqp.js";import"./useId--nAmYTv4.js";import"./Collection-gwCc-hQ9.js";import"./usePrimitiveElement-o7raP3zM.js";import"./check-3gkW7npu.js";import"./createLucideIcon-C05cy66L.js";import"./useHideOthers-CYlkxdpM.js";import"./useTypeahead-BJ1Rp_e7.js";import"./DismissableLayer-GjTYHlTV.js";import"./utils-axApmHzA.js";import"./utils-T_AZzJOL.js";import"./PopperContent-bb7LKc88.js";import"./PopperAnchor-BoW0Xp8N.js";import"./ohash.D__AXeF1-Cq3NGnZa.js";import"./nullish-CHIgUVhi.js";import"./useDirection-Cgdaowgg.js";import"./useFormControl-B0k9zZ1q.js";import"./VisuallyHidden-JucKU3iS.js";const A={title:"Components/Select",component:o,tags:["autodocs"],parameters:{docs:{description:{component:`
**GSelect** adalah komponen *dropdown select* yang dibangun di atas Reka UI dan dapat dikustomisasi sepenuhnya. Terdiri dari beberapa sub-komponen:

- **\`GSelect\`** — root wrapper (diperlukan)
- **\`GSelectTrigger\`** — tombol yang memunculkan dropdown
- **\`GSelectValue\`** — menampilkan nilai yang dipilih atau placeholder
- **\`GSelectContent\`** — kontainer daftar pilihan
- **\`GSelectItem\`** — setiap pilihan item

### Penggunaan Dasar
\`\`\`vue
<GSelect v-model="selected">
  <GSelectTrigger>
    <GSelectValue placeholder="Pilih opsi..." />
  </GSelectTrigger>
  <GSelectContent>
    <GSelectItem value="opsi1">Opsi 1</GSelectItem>
    <GSelectItem value="opsi2">Opsi 2</GSelectItem>
  </GSelectContent>
</GSelect>
\`\`\`
                `}}},argTypes:{},args:{default:`
        <GSelectTrigger>
            <GSelectValue placeholder="Pilih sesuatu..." />
        </GSelectTrigger>
        <GSelectContent>
            <GSelectItem value="1">Satu</GSelectItem>
            <GSelectItem value="2">Dua</GSelectItem>
            <GSelectItem value="3">Tiga</GSelectItem>
        </GSelectContent>
        `}},e={name:"Default",parameters:{docs:{description:{story:"Select dropdown dasar dengan tiga pilihan."}}},render:t=>({components:{GSelect:o,GSelectContent:c,GSelectItem:p,GSelectTrigger:l,GSelectValue:i},setup(){return{args:t}},template:`
     <GSelect>
        ${t.default}
     </GSelect>
    `})};var a,n,r;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  name: "Default",
  parameters: {
    docs: {
      description: {
        story: "Select dropdown dasar dengan tiga pilihan."
      }
    }
  },
  render: (args: {
    default: string;
  }) => ({
    components: {
      GSelect,
      GSelectContent,
      GSelectItem,
      GSelectTrigger,
      GSelectValue
    },
    setup() {
      return {
        args
      };
    },
    template: \`
     <GSelect>
        \${args.default}
     </GSelect>
    \`
  })
}`,...(r=(n=e.parameters)==null?void 0:n.docs)==null?void 0:r.source}}};const B=["Default"];export{e as Default,B as __namedExportsOrder,A as default};
