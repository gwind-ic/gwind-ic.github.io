import{r as e}from"./iframe-c4IY6zQp.js";import{_ as a}from"./RangePicker-cQa42_2F.js";import"./preload-helper-DKj51lX3.js";import"./Datepicker-Dz-pmrua.js";import"./index-BxO9e2AK.js";import"./index-6HqQR1st.js";import"./Calendar-tXQYxSuU.js";import"./createLucideIcon-C05cy66L.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./Drawer-Cm0-50Kw.js";import"./utils-DFIdVO4u.js";import"./GIcon-BXuKvWrh.js";import"./g-icon-cross-C_9ug1ue.js";import"./Label-C_sgV46U.js";import"./Label-6-ZEx3t5.js";import"./useForwardExpose-Cr5jnkZA.js";import"./Primitive-jOHN3RPP.js";const T={title:"Components/DatePicker/DateRangePicker",component:a,tags:["autodocs"],argTypes:{startPlaceholder:{control:"text"},endPlaceholder:{control:"text"},startlabel:{control:"text"},endlabel:{control:"text"},sparator:{control:"text"},start:{control:"text"},end:{control:"text"},max:{control:"text"},min:{control:"text"},calendarPosition:{control:"select",options:["left","center","right"]},calendarPositionY:{control:"select",options:["top","bottom","auto"]},disabled:{control:"boolean"}},args:{startPlaceholder:"Pilih tanggal",endPlaceholder:"Pilih tanggal",startlabel:"Tanggal Mulai",endlabel:"Tanggal Selesai",start:"startModel",end:"endModel"}},t={render:s=>({components:{RangePicker:a},setup(){const l=e(""),i=e("");return{args:s,startDate:l,endDate:i}},template:`
      <RangePicker 
        v-bind="args" 
        v-model:start="startDate"
        v-model:end="endDate"
      />
    `})};var r,o,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: (args: string) => ({
    components: {
      RangePicker
    },
    setup() {
      const startDate = ref("");
      const endDate = ref("");
      return {
        args,
        startDate,
        endDate
      };
    },
    template: \`
      <RangePicker 
        v-bind="args" 
        v-model:start="startDate"
        v-model:end="endDate"
      />
    \`
  })
}`,...(n=(o=t.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const S=["Default"];export{t as Default,S as __namedExportsOrder,T as default};
