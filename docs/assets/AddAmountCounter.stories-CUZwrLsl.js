import{d as _,r as h,P as l,Q as e,U as x,a as i,S as y}from"./iframe-c4IY6zQp.js";import"./preload-helper-DKj51lX3.js";const k={class:"input-group add-amount-counter"},I={class:"add-amount-counter-box"},V={class:"add-amount-counter-box__content"},N=["value"],s=_({__name:"AddAmountCounter",setup(u){const n=h(1);function a(c){const t=c.target;let o=parseInt(t.value);(isNaN(o)||o<1)&&(o=1),n.value=o}function f(){n.value++}function w(){n.value>0&&n.value--}return(c,t)=>(i(),l("div",k,[e("div",I,[e("a",{class:"add-amount-counter-box__button btn-decrement",onClick:w},[(i(),l("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",class:x({"text-lime-50":n.value>0})},[...t[0]||(t[0]=[e("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM7 12C7 12.55 7.45 13 8 13H16C16.55 13 17 12.55 17 12C17 11.45 16.55 11 16 11H8C7.45 11 7 11.45 7 12ZM4 12C4 16.41 7.59 20 12 20C16.41 20 20 16.41 20 12C20 7.59 16.41 4 12 4C7.59 4 4 7.59 4 12Z"},null,-1)])],2))]),e("div",V,[e("input",{type:"tel",id:"sumGold",class:"add-amount-counter-box__input",value:n.value,onInput:a,minlength:"1",required:""},null,40,N)]),e("a",{class:"add-amount-counter-box__button btn-increment",onClick:f},[...t[1]||(t[1]=[e("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"#00ab4e",xmlns:"http://www.w3.org/2000/svg"},[e("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 7C11.45 7 11 7.45 11 8V11H8C7.45 11 7 11.45 7 12C7 12.55 7.45 13 8 13H11V16C11 16.55 11.45 17 12 17C12.55 17 13 16.55 13 16V13H16C16.55 13 17 12.55 17 12C17 11.45 16.55 11 16 11H13V8C13 7.45 12.55 7 12 7ZM4 12C4 16.41 7.59 20 12 20C16.41 20 20 16.41 20 12C20 7.59 16.41 4 12 4C7.59 4 4 7.59 4 12Z"})],-1)])])])]))}});s.__docgenInfo=Object.assign({displayName:s.name??s.__name},{exportName:"default",displayName:"AddAmountCounter",description:"",tags:{},sourceFiles:["/Users/lord/Documents/Documentation/gwindui.github.io/src/components/add-amount/AddAmountCounter.vue"]});const D={class:"add-amount-item","data-bs-toggle":"modal","data-bs-target":"#modal-tambah-saham"},m=_({__name:"AddAmountItem",props:{label:{type:String,default:""}},setup(u){return(n,a)=>(i(),l("div",D,[a[0]||(a[0]=e("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"#00ab4e",xmlns:"http://www.w3.org/2000/svg"},[e("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 7C11.45 7 11 7.45 11 8V11H8C7.45 11 7 11.45 7 12C7 12.55 7.45 13 8 13H11V16C11 16.55 11.45 17 12 17C12.55 17 13 16.55 13 16V13H16C16.55 13 17 12.55 17 12C17 11.45 16.55 11 16 11H13V8C13 7.45 12.55 7 12 7ZM4 12C4 16.41 7.59 20 12 20C16.41 20 20 16.41 20 12C20 7.59 16.41 4 12 4C7.59 4 4 7.59 4 12Z"})],-1)),e("a",null,y(u.label),1)]))}});m.__docgenInfo=Object.assign({displayName:m.name??m.__name},{exportName:"default",displayName:"AddAmountItem",description:"",tags:{},props:[{name:"label",type:{name:"string"},defaultValue:{func:!1,value:'""'}}],sourceFiles:["/Users/lord/Documents/Documentation/gwindui.github.io/src/components/add-amount/AddAmountItem.vue"]});const M={title:"Components/AddAmount",component:s,tags:["autodocs"],parameters:{docs:{description:{component:`
**AddAmountCounter** adalah komponen kontrol jumlah (increment/decrement) yang sering digunakan pada fitur pemilihan produk, tiket, atau barang. Terdiri dari dua sub-komponen:

- \`GAddAmountCounter\` — tombol increment / decrement mandiri
- \`GAddAmountItem\` — container item yang menampilkan nama dan harga beserta \`AddAmountCounter\`

### Penggunaan Dasar
\`\`\`vue
<GAddAmountCounter v-model="qty" :min="0" :max="10" />
\`\`\`

### Penggunaan dengan Item
\`\`\`vue
<GAddAmountItem
  label="Tiket Reguler"
  price="Rp 150.000"
  v-model="qty"
/>
\`\`\`
                `}}},argTypes:{modelValue:{control:"number",description:"Nilai jumlah saat ini (v-model)"},min:{control:"number",description:"Batas minimum nilai"},max:{control:"number",description:"Batas maksimum nilai"},disabled:{control:"boolean",description:"Nonaktifkan seluruh kontrol"}},args:{modelValue:0,min:0,max:10,disabled:!1}},r={name:"Counter Default"},d={name:"Item with Counter",render:()=>({components:{AddAmountItem:m},setup(){return{qty:h(0)}},template:`
      <AddAmountItem label="Tiket Reguler" price="Rp 150.000" v-model="qty" />
    `}),parameters:{docs:{description:{story:"Komponen `GAddAmountItem` menggabungkan label, harga, dan counter dalam satu container."}}}};var p,C,g;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: "Counter Default"
}`,...(g=(C=r.parameters)==null?void 0:C.docs)==null?void 0:g.source}}};var A,b,v;d.parameters={...d.parameters,docs:{...(A=d.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: "Item with Counter",
  render: () => ({
    components: {
      AddAmountItem
    },
    setup() {
      const qty = ref(0);
      return {
        qty
      };
    },
    template: \`
      <AddAmountItem label="Tiket Reguler" price="Rp 150.000" v-model="qty" />
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: "Komponen \`GAddAmountItem\` menggabungkan label, harga, dan counter dalam satu container."
      }
    }
  }
}`,...(v=(b=d.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};const Z=["Default","WithItem"];export{r as Default,d as WithItem,Z as __namedExportsOrder,M as default};
