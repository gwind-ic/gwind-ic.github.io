import{_ as r}from"./Checkbox-Bha-54W6.js";import"./iframe-c4IY6zQp.js";import"./preload-helper-DKj51lX3.js";import"./useForwardPropsEmits-T2W0pCxY.js";import"./Check-DwCStHvC.js";import"./utils-DFIdVO4u.js";import"./createContext-cRkaqZ4A.js";import"./nullish-CHIgUVhi.js";import"./isValueEqualOrExist-DvmIGGK4.js";import"./ohash.D__AXeF1-Cq3NGnZa.js";import"./useFormControl-B0k9zZ1q.js";import"./useForwardExpose-Cr5jnkZA.js";import"./Primitive-jOHN3RPP.js";import"./RovingFocusItem-CMajk1bk.js";import"./useId--nAmYTv4.js";import"./Collection-gwCc-hQ9.js";import"./usePrimitiveElement-o7raP3zM.js";import"./utils-CC-pqV_U.js";import"./getActiveElement-FUKBWQwh.js";import"./RovingFocusGroup-B8aXtVZm.js";import"./useDirection-Cgdaowgg.js";import"./ConfigProvider-C_xfuhRi.js";import"./VisuallyHiddenInput-B4N5EJyq.js";import"./VisuallyHidden-JucKU3iS.js";import"./Presence-B-TJz0M4.js";import"./GIcon-BXuKvWrh.js";const z={title:"Components/Check/Checkbox",component:r,tags:["autodocs"],parameters:{docs:{description:{component:'\n**Checkbox** adalah komponen kotak centang yang digunakan pada formulir untuk memungkinkan pengguna memilih satu atau beberapa opsi secara independen.\n\n### Penggunaan Dasar\n```vue\n<Checkbox v-model="isChecked" label="Setuju dengan syarat & ketentuan" />\n```\n\n### Di dalam Formulir\n```vue\n<Checkbox\n  name="newsletter"\n  value="subscribe"\n  :required="true"\n  label="Berlangganan newsletter"\n/>\n```\n\n### Props\n| Prop | Tipe | Default | Deskripsi |\n|------|------|---------|-----------|\n| `modelValue` | `boolean` | `false` | Status centang (v-model) |\n| `label` | `string` | — | Teks label di samping checkbox |\n| `disabled` | `boolean` | `false` | Nonaktifkan checkbox |\n| `required` | `boolean` | `false` | Jadikan checkbox wajib diisi |\n| `name` | `string` | — | Atribut name untuk form submission |\n| `value` | `string` | — | Nilai yang dikirim pada form submission |\n                '}}},argTypes:{defaultValue:{control:"boolean",description:"Nilai centang awal (uncontrolled)"},disabled:{control:"boolean",description:"Nonaktifkan checkbox"},name:{control:"text",description:"Atribut name untuk form submission"},value:{control:"text",description:"Nilai yang dikirim saat form disubmit"},required:{control:"boolean",description:"Jadikan checkbox wajib diisi"},label:{control:"text",description:"Teks label di samping checkbox"},modelValue:{control:"boolean",description:"Status centang saat ini (v-model)"}},args:{disabled:!1,name:"Example",value:"exampleValue",required:!1,label:"Check me",modelValue:!1}},n={name:"Default",render:e=>({components:{Checkbox:r},setup(){return{args:e}},template:'<Checkbox v-model="args.modelValue" v-bind="args" />'}),parameters:{docs:{description:{story:"Checkbox standar dengan label."}}}},a={name:"Checked",args:{modelValue:!0},render:e=>({components:{Checkbox:r},setup(){return{args:e}},template:'<Checkbox v-model="args.modelValue" v-bind="args" />'}),parameters:{docs:{description:{story:"Checkbox dalam kondisi tercentang."}}}},o={name:"Disabled",args:{disabled:!0,label:"Tidak bisa diubah"},render:e=>({components:{Checkbox:r},setup(){return{args:e}},template:'<Checkbox v-bind="args" />'}),parameters:{docs:{description:{story:"Checkbox yang dinonaktifkan tidak bisa diklik pengguna."}}}};var t,s,i;n.parameters={...n.parameters,docs:{...(t=n.parameters)==null?void 0:t.docs,source:{originalSource:`{
  name: "Default",
  render: (args: Record<string, unknown>) => ({
    components: {
      Checkbox
    },
    setup() {
      return {
        args
      };
    },
    template: \`<Checkbox v-model="args.modelValue" v-bind="args" />\`
  }),
  parameters: {
    docs: {
      description: {
        story: "Checkbox standar dengan label."
      }
    }
  }
}`,...(i=(s=n.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};var d,l,m;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: "Checked",
  args: {
    modelValue: true
  },
  render: (args: Record<string, unknown>) => ({
    components: {
      Checkbox
    },
    setup() {
      return {
        args
      };
    },
    template: \`<Checkbox v-model="args.modelValue" v-bind="args" />\`
  }),
  parameters: {
    docs: {
      description: {
        story: "Checkbox dalam kondisi tercentang."
      }
    }
  }
}`,...(m=(l=a.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var c,p,u;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: "Disabled",
  args: {
    disabled: true,
    label: "Tidak bisa diubah"
  },
  render: (args: Record<string, unknown>) => ({
    components: {
      Checkbox
    },
    setup() {
      return {
        args
      };
    },
    template: \`<Checkbox v-bind="args" />\`
  }),
  parameters: {
    docs: {
      description: {
        story: "Checkbox yang dinonaktifkan tidak bisa diklik pengguna."
      }
    }
  }
}`,...(u=(p=o.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};const G=["Default","Checked","Disabled"];export{a as Checked,n as Default,o as Disabled,G as __namedExportsOrder,z as default};
