import{_ as m}from"./input-BOzjOkBt.js";import"./iframe-c4IY6zQp.js";import"./preload-helper-DKj51lX3.js";import"./index-BxO9e2AK.js";import"./index-6HqQR1st.js";const f={title:"Components/Input/Text",component:m,tags:["autodocs"],parameters:{docs:{description:{component:'\n**GInput** adalah komponen input teks dasar yang digunakan untuk formulir. Mendukung placeholder, auto-kapitalisasi, dan state disabled.\n\n### Penggunaan Dasar\n```vue\n<GInput v-model="text" placeholder="Masukkan teks..." />\n```\n\n### Dengan Disabled\n```vue\n<GInput v-model="text" :disabled="true" placeholder="Tidak bisa diubah" />\n```\n\n### Props Utama\n| Prop | Tipe | Default | Deskripsi |\n|------|------|---------|-----------|\n| `modelValue` | `string` | `\'\'` | Nilai input (v-model) |\n| `placeholder` | `string` | — | Teks placeholder |\n| `disabled` | `boolean` | `false` | Nonaktifkan input |\n| `autoCaps` | `boolean` | `true` | Otomatis kapital huruf pertama |\n                '}}},argTypes:{autoCaps:{control:"boolean",description:"Aktifkan auto-kapitalisasi huruf pertama"},modelValue:{control:"text",description:"Nilai saat ini dari input (v-model)"},defaultValue:{control:"text",description:"Nilai default awal"},placeholder:{control:"text",description:"Teks placeholder yang tampil saat input kosong"},disabled:{control:"boolean",description:"Nonaktifkan input"}},args:{placeholder:"Masukkan teks disini",disabled:!1,autoCaps:!0,modelValue:""}},a={name:"Default",parameters:{docs:{description:{story:"Tampilan input standar yang siap digunakan."}}}},e={name:"Disabled",args:{disabled:!0,modelValue:"Teks tidak bisa diubah"},parameters:{docs:{description:{story:"Input dalam kondisi disabled. Pengguna tidak dapat mengetik."}}}},n={name:"With Value",args:{modelValue:"Contoh teks yang sudah terisi"},parameters:{docs:{description:{story:"Input dengan nilai yang sudah terisi sebelumnya."}}}};var t,s,i;a.parameters={...a.parameters,docs:{...(t=a.parameters)==null?void 0:t.docs,source:{originalSource:`{
  name: "Default",
  parameters: {
    docs: {
      description: {
        story: "Tampilan input standar yang siap digunakan."
      }
    }
  }
}`,...(i=(s=a.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};var o,r,d;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: "Disabled",
  args: {
    disabled: true,
    modelValue: "Teks tidak bisa diubah"
  },
  parameters: {
    docs: {
      description: {
        story: "Input dalam kondisi disabled. Pengguna tidak dapat mengetik."
      }
    }
  }
}`,...(d=(r=e.parameters)==null?void 0:r.docs)==null?void 0:d.source}}};var l,p,u;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: "With Value",
  args: {
    modelValue: "Contoh teks yang sudah terisi"
  },
  parameters: {
    docs: {
      description: {
        story: "Input dengan nilai yang sudah terisi sebelumnya."
      }
    }
  }
}`,...(u=(p=n.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};const y=["Default","Disabled","WithValue"];export{a as Default,e as Disabled,n as WithValue,y as __namedExportsOrder,f as default};
