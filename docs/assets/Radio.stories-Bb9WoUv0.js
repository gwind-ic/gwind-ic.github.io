import{_ as n}from"./RadioGroup--aZr2lJR.js";import{_ as t}from"./Radio-CLXkVRMl.js";import"./iframe-c4IY6zQp.js";import"./preload-helper-DKj51lX3.js";import"./useForwardPropsEmits-T2W0pCxY.js";import"./utils-DFIdVO4u.js";import"./createContext-cRkaqZ4A.js";import"./useForwardExpose-Cr5jnkZA.js";import"./RovingFocusItem-CMajk1bk.js";import"./useId--nAmYTv4.js";import"./Primitive-jOHN3RPP.js";import"./Collection-gwCc-hQ9.js";import"./usePrimitiveElement-o7raP3zM.js";import"./utils-CC-pqV_U.js";import"./getActiveElement-FUKBWQwh.js";import"./RovingFocusGroup-B8aXtVZm.js";import"./useDirection-Cgdaowgg.js";import"./ConfigProvider-C_xfuhRi.js";import"./useFormControl-B0k9zZ1q.js";import"./VisuallyHiddenInput-B4N5EJyq.js";import"./VisuallyHidden-JucKU3iS.js";import"./handleAndDispatchCustomEvent-ChOKVcqp.js";import"./ohash.D__AXeF1-Cq3NGnZa.js";import"./Presence-B-TJz0M4.js";const w={title:"Components/Radio/Default",component:n,tags:["autodocs"],parameters:{docs:{description:{component:'\n**Radio** adalah komponen pemilih tunggal yang digunakan saat pengguna hanya boleh memilih satu opsi dari daftar yang ada (mutually exclusive).\n\nTerdiri dari:\n- **`RadioGroup`** — container grup yang yang mengatur state terpilih secara global\n- **`Radio`** — elemen opsi radio individual\n\n### Penggunaan Dasar\n```vue\n<RadioGroup v-model="selectedFruit">\n  <div class="flex items-center gap-2">\n    <Radio id="r1" value="Pisang" />\n    <label for="r1">Pisang</label>\n  </div>\n  <div class="flex items-center gap-2">\n    <Radio id="r2" value="Mangga" />\n    <label for="r2">Mangga</label>\n  </div>\n</RadioGroup>\n```\n\n### Props `RadioGroup`\n| Prop | Tipe | Default | Deskripsi |\n|------|------|---------|-----------|\n| `modelValue` | `string \\| number` | — | Opsi yang saat ini terpilih (v-model) |\n| `disabled` | `boolean` | `false` | Menolak interaksi pada semua radio dalam grup |\n| `name` | `string` | — | Atribut name grup saat di form submit |\n\n### Props `Radio`\n| Prop | Tipe | Deskripsi |\n|------|------|-----------|\n| `id` | `string` | ID elemen HTML (wajib, untuk label) |\n| `value` | `string \\| number` | Nilai bawaan opsi ini |\n| `disabled` | `boolean` | Menonaktifkan radio spesifik |\n                '}}},argTypes:{disabled:{control:"boolean",description:"Nonaktifkan seluruh grup radio"}},args:{disabled:!1,default:`
            <div v-for="(item, i) in RadioValue" :key="i" class="flex items-center gap-2">
            <Radio :id="'r' + (i+1)" :value="item" />
            <label :for="'r' + (i+1)">{{ item }}</label>
        </div>
        `}},a={name:"Default",render:i=>({components:{RadioGroup:n,Radio:t},setup(){return{args:i,RadioValue:["Pisang","Mangga","Apel"]}},template:`
      <RadioGroup v-bind="args" class="flex flex-col gap-3">
        ${i.default}
      </RadioGroup>
    `}),parameters:{docs:{description:{story:"Radio grup standar vertikal."}}}};var e,o,r;a.parameters={...a.parameters,docs:{...(e=a.parameters)==null?void 0:e.docs,source:{originalSource:`{
  name: "Default",
  render: (args: {
    default: string;
  }) => ({
    components: {
      RadioGroup,
      Radio
    },
    setup() {
      const RadioValue = ["Pisang", "Mangga", "Apel"];
      return {
        args,
        RadioValue
      };
    },
    template: \`
      <RadioGroup v-bind="args" class="flex flex-col gap-3">
        \${args.default}
      </RadioGroup>
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: "Radio grup standar vertikal."
      }
    }
  }
}`,...(r=(o=a.parameters)==null?void 0:o.docs)==null?void 0:r.source}}};const N=["Default"];export{a as Default,N as __namedExportsOrder,w as default};
