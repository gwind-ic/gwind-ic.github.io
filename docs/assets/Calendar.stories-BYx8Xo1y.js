import{r as o}from"./iframe-c4IY6zQp.js";import{C as m}from"./Calendar-tXQYxSuU.js";import{D as g}from"./Drawer-Cm0-50Kw.js";import{_ as C}from"./button-Cr1_wFBW.js";import"./preload-helper-DKj51lX3.js";import"./createLucideIcon-C05cy66L.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./utils-DFIdVO4u.js";import"./GIcon-BXuKvWrh.js";import"./g-icon-cross-C_9ug1ue.js";import"./Label-C_sgV46U.js";import"./Label-6-ZEx3t5.js";import"./useForwardExpose-Cr5jnkZA.js";import"./Primitive-jOHN3RPP.js";import"./index-QLIpZy2_.js";const S={title:"Components/DatePicker/Calendar Only",component:m,tags:["autodocs"],parameters:{docs:{description:{component:'\n**Calendar** adalah komponen pemilih tanggal mandiri. Ini hanya menampilkan kalender dan merender antarmukanya — Anda dapat mengkombinasikannya dengan komponen dialog atau dropdown lainnya (sangat modular). Secara standar, ini digunakan di dalam komponen *DatePicker* Reka UI.\n\n### Penggunaan Dasar\n```vue\n<Calendar v-model="selectedDate" />\n```\n\n### Props\n| Prop | Tipe | Default | Deskripsi |\n|------|------|---------|-----------|\n| `modelValue` | `string \\| Date` | — | Tanggal yang dipilih (v-model) |\n| `min` | `string \\| Date` | — | Batas minimum tanggal |\n| `max` | `string \\| Date` | — | Batas maksimum tanggal |\n| `yearClass` | `string` | — | Kelas CSS tambahan untuk grid tahun |\n                '}}},argTypes:{min:{control:"text",description:"Batas tanggal terlama yang dapat diklik"},max:{control:"text",description:"Batas tanggal terjauh yang dapat diklik"},yearClass:{control:"text",description:"Kelas utilitas Tailwind untuk div panel filter kalender (Tahun bulan)"},yearClassContent:{control:"text",description:"Kelas utilitas untuk modifikasi baris konten tahun"}}},a={},n={render:p=>({components:{Drawer:g,Calendar:m,Button:C},setup(){const e=o(!1),c=o("");function u(){e.value=!1}return{args:p,show:e,modelCalendar:c,onPick:u}},template:`
      <Button @click="show = true">Open Mobile Calendar</Button>
      <div class="mt-2">Tanggal dipilih: {{ modelCalendar }}</div>

      <Drawer
        v-model="show"
        label="Pilih Tanggal"
        position="bottom"
      >
        <Calendar
          class="!w-full !p-0 border-0"
          yearClass="!shadow-none !w-full border-x-0"
          yearClassContent="gap-x-8"
          v-model="modelCalendar"
          @update:modelValue="onPick"
          :min="args.min"
          :max="args.max"
        />
      </Drawer>
    `}),parameters:{docs:{source:{code:`

<script setup lang="ts">
    const show = ref(false)
    const modelCalendar = ref("")
    function onPick() {
        show.value = false
    }
<\/script>

<template>
    <Button @click="show = true">Open Mobile Calendar</Button>
    <div class="mt-2">Tanggal dipilih: {{ modelCalendar }}</div>
    
    <Drawer
        v-model="show"
        label="Pilih Tanggal"
        position="bottom"
      >
        <Calendar
          class="!w-full !p-0 border-0"
          yearClass="!shadow-none !w-full border-x-0"
          yearClassContent="gap-x-8"
          v-model="modelCalendar"
          @update:modelValue="onPick"
          :min="args.min"
          :max="args.max"
        />
      </Drawer>
</template>
        `.trim()}}}};var r,t,l;a.parameters={...a.parameters,docs:{...(r=a.parameters)==null?void 0:r.docs,source:{originalSource:"{}",...(l=(t=a.parameters)==null?void 0:t.docs)==null?void 0:l.source}}};var s,i,d;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: (args: string) => ({
    components: {
      Drawer,
      Calendar,
      Button
    },
    setup() {
      const show = ref(false);
      const modelCalendar = ref("");
      function onPick() {
        show.value = false;
      }
      return {
        args,
        show,
        modelCalendar,
        onPick
      };
    },
    template: \`
      <Button @click="show = true">Open Mobile Calendar</Button>
      <div class="mt-2">Tanggal dipilih: {{ modelCalendar }}</div>

      <Drawer
        v-model="show"
        label="Pilih Tanggal"
        position="bottom"
      >
        <Calendar
          class="!w-full !p-0 border-0"
          yearClass="!shadow-none !w-full border-x-0"
          yearClassContent="gap-x-8"
          v-model="modelCalendar"
          @update:modelValue="onPick"
          :min="args.min"
          :max="args.max"
        />
      </Drawer>
    \`
  }),
  parameters: {
    docs: {
      source: {
        code: \`

<script setup lang="ts">
    const show = ref(false)
    const modelCalendar = ref("")
    function onPick() {
        show.value = false
    }
<\/script>

<template>
    <Button @click="show = true">Open Mobile Calendar</Button>
    <div class="mt-2">Tanggal dipilih: {{ modelCalendar }}</div>
    
    <Drawer
        v-model="show"
        label="Pilih Tanggal"
        position="bottom"
      >
        <Calendar
          class="!w-full !p-0 border-0"
          yearClass="!shadow-none !w-full border-x-0"
          yearClassContent="gap-x-8"
          v-model="modelCalendar"
          @update:modelValue="onPick"
          :min="args.min"
          :max="args.max"
        />
      </Drawer>
</template>
        \`.trim()
      }
    }
  }
}`,...(d=(i=n.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};const V=["Desktop","Mobile"];export{a as Desktop,n as Mobile,V as __namedExportsOrder,S as default};
