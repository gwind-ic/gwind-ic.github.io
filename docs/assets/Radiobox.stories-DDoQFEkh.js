import{_ as n}from"./RadioGroup--aZr2lJR.js";import{_ as r}from"./RadioBox-D2FGuA5S.js";import"./iframe-c4IY6zQp.js";import"./preload-helper-DKj51lX3.js";import"./useForwardPropsEmits-T2W0pCxY.js";import"./Radio-CLXkVRMl.js";import"./createContext-cRkaqZ4A.js";import"./useForwardExpose-Cr5jnkZA.js";import"./RovingFocusItem-CMajk1bk.js";import"./useId--nAmYTv4.js";import"./Primitive-jOHN3RPP.js";import"./Collection-gwCc-hQ9.js";import"./usePrimitiveElement-o7raP3zM.js";import"./utils-CC-pqV_U.js";import"./getActiveElement-FUKBWQwh.js";import"./RovingFocusGroup-B8aXtVZm.js";import"./useDirection-Cgdaowgg.js";import"./ConfigProvider-C_xfuhRi.js";import"./useFormControl-B0k9zZ1q.js";import"./VisuallyHiddenInput-B4N5EJyq.js";import"./VisuallyHidden-JucKU3iS.js";import"./handleAndDispatchCustomEvent-ChOKVcqp.js";import"./ohash.D__AXeF1-Cq3NGnZa.js";import"./Presence-B-TJz0M4.js";import"./utils-DFIdVO4u.js";const L={title:"Components/Radio/RadioBox",component:n,tags:["autodocs"],parameters:{docs:{description:{component:'\n**RadioBox** adalah variasi *Card Radio* (atau kotak centang besar) yang berfungsi sama persis seperti Radio murni, namun dirender sebagai kotak besar interaktif yang estetik, berguna untuk fitur pemilihan dengan penjelasan lebih banyak.\n\nTerdiri dari:\n- **`RadioGroup`** — container grup sama seperti `Radio` biasa\n- **`RadioBox`** — variasi bentuk card\n\n### Penggunaan Dasar\n```vue\n<RadioGroup v-model="pilihan">\n  <RadioBox id="r1" value="Pisang" label="Pisang">\n    <template #iconItem>🍌</template>\n    <template #textItem>Buah manis berwarna kuning.</template>\n  </RadioBox>\n</RadioGroup>\n```\n\n### Props `RadioBox`\n| Prop | Tipe | Default | Deskripsi |\n|------|------|---------|-----------|\n| `id` | `string` | (wajib) | ID unik elemen (juga untuk label form) |\n| `value` | `string \\| number` | (wajib) | Nilai identitas saat di-submit via v-model |\n| `label` | `string` | — | Label title box (jika tidak menggunakan slot) |\n| `disabled` | `boolean` | `false` | Menonaktifkan radio spesifik ini |\n\n### Slots `RadioBox`\n| Slot | Deskripsi |\n|------|-----------|\n| `iconItem` | Ruang untuk menaruh elemen Ikon |\n| `textItem` | Ruang untuk menaruh teks sub-label atau deskripsi ringkas |\n                '}}},argTypes:{disabled:{control:"boolean",description:"Nonaktifkan keseluruhan grup"}},args:{default:`
            <RadioBox id="r3" :value="RadioValue[0]" :label="RadioValue[0]">
                <template #iconItem> 🍌 </template>
                <template #textItem>{{ RadioValue[0] }} manis</template>
            </RadioBox>
            <RadioBox id="r4" :value="RadioValue[1]" :label="RadioValue[1]">
                <template #iconItem> 🥭 </template>
                <template #textItem>{{ RadioValue[1] }} ranum</template>
            </RadioBox>
            <RadioBox :label="RadioValue[2]" id="r5" :value="RadioValue[2]">
                <template #iconItem> 🍎 </template>
                <template #textItem>
                    {{ RadioValue[2] }} segar
                </template>
            </RadioBox>
        `,disabled:!1}},a={name:"Radio Box List",render:e=>({components:{RadioGroup:n,RadioBox:r},setup(){return{args:e,RadioValue:["Pisang","Mangga","Apel"]}},template:`
      <RadioGroup v-bind="args" class="flex flex-col gap-2">
        ${e.default}
      </RadioGroup>
    `}),parameters:{docs:{description:{story:"Contoh layout vertikal untuk opsi RadioBox."}}}};var o,i,t;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: "Radio Box List",
  render: (args: {
    default: string;
  }) => ({
    components: {
      RadioGroup,
      RadioBox
    },
    setup() {
      const RadioValue = ["Pisang", "Mangga", "Apel"];
      return {
        args,
        RadioValue
      };
    },
    template: \`
      <RadioGroup v-bind="args" class="flex flex-col gap-2">
        \${args.default}
      </RadioGroup>
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: "Contoh layout vertikal untuk opsi RadioBox."
      }
    }
  }
}`,...(t=(i=a.parameters)==null?void 0:i.docs)==null?void 0:t.source}}};const M=["Default"];export{a as Default,M as __namedExportsOrder,L as default};
