import{_ as u}from"./Textarea-vlgc0QAD.js";import"./iframe-c4IY6zQp.js";import"./preload-helper-DKj51lX3.js";import"./utils-DFIdVO4u.js";import"./index-BxO9e2AK.js";import"./index-6HqQR1st.js";const T={title:"Components/Input/TextArea",component:u,tags:["autodocs"],parameters:{docs:{description:{component:'\n**TextArea** adalah komponen input multi-baris untuk teks panjang seperti deskripsi, alamat, atau pesan.\n\n### Penggunaan Dasar\n```vue\n<TextArea v-model="text" placeholder="Tuliskan keluhan Anda..." />\n```\n\n### Dengan Batasan Karakter\n```vue\n<TextArea \n  v-model="description" \n  :has-max-length="true" \n  :max-length="500" \n/>\n```\n\n### Props\n| Prop | Tipe | Default | Deskripsi |\n|------|------|---------|-----------|\n| `modelValue` | `string` | `\'\'` | Nilai teks input (v-model) |\n| `placeholder` | `string` | — | Teks bayangan saat input kosong |\n| `disabled` | `boolean` | `false` | Nonaktifkan area teks |\n| `hasMaxLength`| `boolean` | `false` | Menampilkan indikator batas karakter |\n| `maxLength` | `number` | — | Batas maksimum karakter yang diizinkan |\n| `autoCaps` | `boolean` | `true` | Autokapitalisasi huruf pertama |\n                '}}},argTypes:{modelValue:{control:"text",description:"Nilai saat ini (v-model)"},placeholder:{control:"text",description:"Teks saat input kosong"},disabled:{control:"boolean",description:"Nonaktifkan interaksi pada TextArea"},hasMaxLength:{control:"boolean",description:"Tampilkan sisa karakter / maksimum karakter di sudut komponen"},maxLength:{control:"number",description:"Batas karakter yang diperbolehkan"},autoCaps:{control:"boolean",description:"Otomatis mengkapitalkan huruf pertama kalimat"}},args:{placeholder:"Masukkan teks disini",disabled:!1,autoCaps:!0,modelValue:"",hasMaxLength:!1,maxLength:100}},a={name:"Default",parameters:{docs:{description:{story:"TextArea standar."}}}},e={name:"With Max Length",args:{hasMaxLength:!0,maxLength:50},parameters:{docs:{description:{story:"TextArea dengan perhitungan batas maksimum karakter di sudut bawah."}}}},t={name:"Disabled",args:{disabled:!0,modelValue:"Teks yang tidak bisa diedit oleh pengguna."},parameters:{docs:{description:{story:"TextArea dalam status nonaktif."}}}};var n,s,r;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
  name: "Default",
  parameters: {
    docs: {
      description: {
        story: "TextArea standar."
      }
    }
  }
}`,...(r=(s=a.parameters)==null?void 0:s.docs)==null?void 0:r.source}}};var o,i,d;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: "With Max Length",
  args: {
    hasMaxLength: true,
    maxLength: 50
  },
  parameters: {
    docs: {
      description: {
        story: "TextArea dengan perhitungan batas maksimum karakter di sudut bawah."
      }
    }
  }
}`,...(d=(i=e.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};var m,p,l;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: "Disabled",
  args: {
    disabled: true,
    modelValue: "Teks yang tidak bisa diedit oleh pengguna."
  },
  parameters: {
    docs: {
      description: {
        story: "TextArea dalam status nonaktif."
      }
    }
  }
}`,...(l=(p=t.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};const f=["Default","WithMaxLength","Disabled"];export{a as Default,t as Disabled,e as WithMaxLength,f as __namedExportsOrder,T as default};
