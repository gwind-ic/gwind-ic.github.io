import{d,c,w as h,m as g,u as i,a as f,b as C,Q as I}from"./iframe-c4IY6zQp.js";import{u as b}from"./useForwardPropsEmits-T2W0pCxY.js";import{a as y}from"./Toggle-kCAWA0py.js";import{a as G}from"./utils-DFIdVO4u.js";import{_ as k}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{T as x}from"./ToggleGroupItem-C62Sw_nl.js";import"./preload-helper-DKj51lX3.js";import"./useFormControl-B0k9zZ1q.js";import"./useForwardExpose-Cr5jnkZA.js";import"./Primitive-jOHN3RPP.js";import"./VisuallyHiddenInput-B4N5EJyq.js";import"./usePrimitiveElement-o7raP3zM.js";import"./VisuallyHidden-JucKU3iS.js";import"./createContext-cRkaqZ4A.js";import"./useDirection-Cgdaowgg.js";import"./ConfigProvider-C_xfuhRi.js";import"./useSingleOrMultipleValue-BxcWNtAy.js";import"./isValueEqualOrExist-DvmIGGK4.js";import"./nullish-CHIgUVhi.js";import"./ohash.D__AXeF1-Cq3NGnZa.js";import"./RovingFocusGroup-B8aXtVZm.js";import"./Collection-gwCc-hQ9.js";import"./utils-CC-pqV_U.js";import"./getActiveElement-FUKBWQwh.js";import"./RovingFocusItem-CMajk1bk.js";import"./useId--nAmYTv4.js";const t=d({__name:"ChipsGroup",props:{rovingFocus:{type:Boolean},disabled:{type:Boolean},orientation:{},dir:{},loop:{type:Boolean},asChild:{type:Boolean},as:{},name:{},required:{type:Boolean},type:{},modelValue:{},defaultValue:{},class:{}},emits:["update:modelValue"],setup(e,{emit:o}){const n=b(e,o);return(_,N)=>(f(),c(i(y),g(i(n),{class:i(G)("flex gap-4 w-full overflow-x-scroll no-scrollbar")}),{default:h(()=>[C(_.$slots,"default",{},void 0,!0)]),_:3},16,["class"]))}}),v=k(t,[["__scopeId","data-v-b87801d6"]]);t.__docgenInfo=Object.assign({displayName:t.name??t.__name},{exportName:"default",displayName:"ChipsGroup",description:"",tags:{},slots:[{name:"default"}],sourceFiles:["/Users/lord/Documents/Documentation/gwindui.github.io/src/components/chips/ChipsGroup.vue"]});const w={class:"h-6 w-fit min-w-[120px]"},s=d({__name:"ChipsGroupItem",props:{value:{},disabled:{type:Boolean},asChild:{type:Boolean},as:{},class:{}},setup(e){const o=e,r=b(o);return(p,n)=>(f(),c(i(x),g(i(r),{class:i(G)("hover:cursor-pointer rounded-sm text-black-600 flex px-3 py-1 items-center justify-center border border-black-200 bg-white text-base focus:z-10","hover:bg-lime-100","data-[state=on]:bg-lime-100 data-[state=on]:border-lime-500 data-[state=on]:text-lime-500",o.class)}),{default:h(()=>[I("div",w,[C(p.$slots,"default")])]),_:3},16,["class"]))}});s.__docgenInfo=Object.assign({displayName:s.name??s.__name},{exportName:"default",displayName:"ChipsGroupItem",description:"",tags:{},slots:[{name:"default"}],sourceFiles:["/Users/lord/Documents/Documentation/gwindui.github.io/src/components/chips/ChipsGroupItem.vue"]});const ee={title:"Components/Chips",component:v,tags:["autodocs"],parameters:{docs:{description:{component:'\n**Chips** / Badge filter adalah komponen pemilih kategori berbentuk *chip*. Pengguna dapat memilih satu atau lebih pilihan dari sekumpulan opsi yang ditampilkan dalam baris horizontal/vertikal.\n\nTerdiri dari:\n- **`ChipsGroup`** — container grup, mengatur mode (single/multiple) dan orientasi\n- **`ChipsGroupItem`** — setiap item chip individual\n\n### Penggunaan Dasar — Single Select\n```vue\n<ChipsGroup v-model="selected" type="single">\n  <ChipsGroupItem value="gadai">Gadai</ChipsGroupItem>\n  <ChipsGroupItem value="cicilan">Cicilan</ChipsGroupItem>\n</ChipsGroup>\n```\n\n### Penggunaan Multiple Select\n```vue\n<ChipsGroup v-model="selectedItems" type="multiple">\n  <ChipsGroupItem value="a">Opsi A</ChipsGroupItem>\n  <ChipsGroupItem value="b">Opsi B</ChipsGroupItem>\n</ChipsGroup>\n```\n\n### Props `ChipsGroup`\n| Prop | Tipe | Default | Deskripsi |\n|------|------|---------|-----------|\n| `modelValue` | `string \\| string[]` | — | Nilai terpilih (v-model) |\n| `type` | `\'single\' \\| \'multiple\'` | `\'single\'` | Mode pemilihan |\n| `orientation` | `\'horizontal\' \\| \'vertical\'` | `\'horizontal\'` | Arah tampilan |\n| `disabled` | `boolean` | `false` | Nonaktifkan semua chips |\n\n### Props `ChipsGroupItem`\n| Prop | Tipe | Deskripsi |\n|------|------|-----------|\n| `value` | `string` | Nilai unik item (wajib) |\n| `disabled` | `boolean` | Nonaktifkan item ini saja |\n                '}}},argTypes:{type:{control:"select",options:["single","multiple"],description:"Mode pemilihan: single atau multiple"},disabled:{control:"boolean",description:"Nonaktifkan semua item chips"},name:{control:"text",description:"Atribut name untuk form submission"},orientation:{control:"select",options:["horizontal","vertical"],description:"Arah susunan chips"},required:{control:"boolean",description:"Jadikan pemilihan chip wajib"},modelValue:{control:"object",description:"Nilai terpilih saat ini (v-model)"}},args:{type:"single",orientation:"horizontal",modelValue:{},disabled:!1,name:"Example",required:!1,default:`
            <ChipsGroupItem value="gadai"> Gadai </ChipsGroupItem>
            <ChipsGroupItem value="cicilan"> Cicilan </ChipsGroupItem>
            <ChipsGroupItem value="pembiayaan"> Pembiayaan </ChipsGroupItem>
            <ChipsGroupItem value="transaksi"> Transaksi </ChipsGroupItem>
        `}},a={name:"Single Select",render:e=>({components:{ChipsGroup:v,ChipsGroupItem:s},setup(){return{args:e}},template:`<ChipsGroup v-model="args.modelValue" v-bind="args">
            ${e.default}
        </ChipsGroup>`}),parameters:{docs:{description:{story:"Chips dengan mode single select — hanya satu pilihan bisa aktif."}}}};var l,m,u;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: "Single Select",
  render: (args: {
    default: string;
  }) => ({
    components: {
      ChipsGroup,
      ChipsGroupItem
    },
    setup() {
      return {
        args
      };
    },
    template: \`<ChipsGroup v-model="args.modelValue" v-bind="args">
            \${args.default}
        </ChipsGroup>\`
  }),
  parameters: {
    docs: {
      description: {
        story: "Chips dengan mode single select — hanya satu pilihan bisa aktif."
      }
    }
  }
}`,...(u=(m=a.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};const ie=["Default"];export{a as Default,ie as __namedExportsOrder,ee as default};
