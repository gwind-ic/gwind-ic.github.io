import{d as y,t as ke,r as Q,f as q,c as v,a as T,w as b,v as we,u as t,b as B,j as Ve,o as Se,ah as ae,q as ne,m as A,V as Pe,S as qe,Q as se}from"./iframe-c4IY6zQp.js";import{u as Ee,b as J}from"./useForwardPropsEmits-T2W0pCxY.js";import{c as _e}from"./createContext-cRkaqZ4A.js";import{u as je}from"./useArrowNavigation-B5rxJs06.js";import{u as Ne}from"./useDirection-Cgdaowgg.js";import{u as Re}from"./useFormControl-B0k9zZ1q.js";import{a as Oe,u as E,n as Me}from"./useForwardExpose-Cr5jnkZA.js";import{P as j}from"./Primitive-jOHN3RPP.js";import{u as De}from"./Collection-gwCc-hQ9.js";import{V as Fe}from"./VisuallyHiddenInput-B4N5EJyq.js";import{a as N}from"./utils-DFIdVO4u.js";import{r as R}from"./index-6HqQR1st.js";import{_ as S}from"./Label-C_sgV46U.js";import{u as Ue}from"./useId--nAmYTv4.js";import{i as $e}from"./ohash.D__AXeF1-Cq3NGnZa.js";import{_ as Ge}from"./Textarea-vlgc0QAD.js";import{_ as Le}from"./input-BOzjOkBt.js";import{_ as Ke}from"./button-Cr1_wFBW.js";import"./preload-helper-DKj51lX3.js";import"./ConfigProvider-C_xfuhRi.js";import"./usePrimitiveElement-o7raP3zM.js";import"./VisuallyHidden-JucKU3iS.js";import"./Label-6-ZEx3t5.js";import"./index-BxO9e2AK.js";import"./index-QLIpZy2_.js";const[Y,ze]=_e("TagsInputRoot");var He=y({__name:"TagsInputRoot",props:{modelValue:{type:[Array,null],required:!1},defaultValue:{type:Array,required:!1,default:()=>[]},addOnPaste:{type:Boolean,required:!1},addOnTab:{type:Boolean,required:!1},addOnBlur:{type:Boolean,required:!1},duplicate:{type:Boolean,required:!1},disabled:{type:Boolean,required:!1},delimiter:{type:null,required:!1,default:","},dir:{type:String,required:!1},max:{type:Number,required:!1,default:0},id:{type:String,required:!1},convertValue:{type:Function,required:!1},displayValue:{type:Function,required:!1,default:s=>s.toString()},asChild:{type:Boolean,required:!1},as:{type:null,required:!1},name:{type:String,required:!1},required:{type:Boolean,required:!1}},emits:["update:modelValue","invalid","addTag","removeTag"],setup(s,{emit:u}){const e=s,n=u,{addOnPaste:r,disabled:p,delimiter:d,max:m,id:V,dir:P,addOnBlur:L,addOnTab:O}=ke(e),C=Ne(P),a=Oe(e,"modelValue",n,{defaultValue:e.defaultValue,passive:!0,deep:!0}),{forwardRef:o,currentElement:I}=E(),{focused:h}=Me(I),M=Re(I),{getItems:Z,CollectionSlot:Ce}=De({isProvider:!0}),c=Q(),X=Q(!1),Ae=q(()=>Array.isArray(a.value)?[...a.value]:[]);function ee(l){if(l!==-1){const g=Z().filter(f=>f.ref.dataset.disabled!=="");a.value=a.value.filter((f,k)=>k!==l),n("removeTag",g[l].value)}}return ze({modelValue:a,onAddValue:l=>{const g=[...Ae.value],f=g.length>0&&typeof g[0]=="object",k=g.length>0&&typeof e.defaultValue[0]=="object";if((f||k)&&typeof e.convertValue!="function")throw new Error("You must provide a `convertValue` function when using objects as values.");const i=e.convertValue?e.convertValue(l):l;if(g.length>=m.value&&m.value)return n("invalid",i),!1;if(e.duplicate)return a.value=[...g,i],n("addTag",i),!0;if(g.includes(i))X.value=!0;else return a.value=[...g,i],n("addTag",i),!0;return n("invalid",i),!1},onRemoveValue:ee,onInputKeydown:l=>{const g=l.target,f=Z().map(i=>i.ref).filter(i=>i.dataset.disabled!=="");if(!f.length)return;const k=f.at(-1);switch(l.key){case"Delete":case"Backspace":{if(g.selectionStart!==0||g.selectionEnd!==0)break;if(c.value){const i=f.findIndex(F=>F===c.value);ee(i),c.value=c.value===k?f.at(i-1):f.at(i+1),l.preventDefault()}else l.key==="Backspace"&&(c.value=k,l.preventDefault());break}case"Home":case"End":case"ArrowRight":case"ArrowLeft":{const i=l.key==="ArrowRight"&&C.value==="ltr"||l.key==="ArrowLeft"&&C.value==="rtl",F=!i;if(g.selectionStart!==0||g.selectionEnd!==0)break;if(F&&!c.value)c.value=k,l.preventDefault();else if(i&&k&&c.value===k)c.value=void 0,l.preventDefault();else if(c.value){const te=je(l,c.value,void 0,{itemsArray:f,loop:!1,dir:C.value});te&&(c.value=te),l.preventDefault()}break}case"ArrowUp":case"ArrowDown":{c.value&&l.preventDefault();break}default:c.value=void 0}},selectedElement:c,isInvalidInput:X,addOnPaste:r,addOnBlur:L,addOnTab:O,dir:C,disabled:p,delimiter:d,max:m,id:V,displayValue:e.displayValue}),(l,g)=>(T(),v(t(Ce),null,{default:b(()=>[we(t(j),{ref:t(o),dir:t(C),as:l.as,"as-child":l.asChild,"data-invalid":X.value?"":void 0,"data-disabled":t(p)?"":void 0,"data-focused":t(h)?"":void 0},{default:b(()=>[B(l.$slots,"default",{modelValue:t(a)}),t(M)&&l.name?(T(),v(t(Fe),{key:0,name:l.name,value:t(a),required:l.required,disabled:t(p)},null,8,["name","value","required","disabled"])):Ve("v-if",!0)]),_:3},8,["dir","as","as-child","data-invalid","data-disabled","data-focused"])]),_:3}))}}),We=He,Je=y({__name:"TagsInputInput",props:{placeholder:{type:String,required:!1},autoFocus:{type:Boolean,required:!1},maxLength:{type:Number,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"input"}},setup(s){const u=s,e=Y(),{forwardRef:n,currentElement:r}=E();function p(a){if(e.selectedElement.value=void 0,!e.addOnBlur.value)return;const o=a.target;if(!o.value)return;e.onAddValue(o.value)&&(o.value="")}function d(a){e.addOnTab.value&&L(a)}const m=Q(!1);function V(){m.value=!0}function P(){ne(()=>{m.value=!1})}async function L(a){if(m.value||(await ne(),a.defaultPrevented))return;const o=a.target;if(!o.value)return;e.onAddValue(o.value)&&(o.value=""),a.preventDefault()}function O(a){if(e.isInvalidInput.value=!1,a.data===null)return;const o=e.delimiter.value;if(o===a.data||o instanceof RegExp&&o.test(a.data)){const h=a.target;if(h.value=h.value.replace(o,""),h.value.trim()===""){h.value="";return}e.onAddValue(h.value)&&(h.value="")}}function C(a){if(e.addOnPaste.value){a.preventDefault();const o=a.clipboardData;if(!o)return;const I=o.getData("text");e.delimiter.value?I.split(e.delimiter.value).forEach(M=>{e.onAddValue(M)}):e.onAddValue(I)}}return Se(()=>{const a=r.value.nodeName==="INPUT"?r.value:r.value.querySelector("input");a&&setTimeout(()=>{u.autoFocus&&(a==null||a.focus())},1)}),(a,o)=>{var I;return T(),v(t(j),{id:(I=t(e).id)==null?void 0:I.value,ref:t(n),type:"text",autocomplete:"off",autocorrect:"off",autocapitalize:"off",as:a.as,"as-child":a.asChild,maxlength:a.maxLength,placeholder:a.placeholder,disabled:t(e).disabled.value,"data-invalid":t(e).isInvalidInput.value?"":void 0,onInput:O,onKeydown:[ae(L,["enter"]),ae(d,["tab"]),t(e).onInputKeydown],onBlur:p,onCompositionstart:V,onCompositionend:P,onPaste:C},{default:b(()=>[B(a.$slots,"default")]),_:3},8,["id","as","as-child","maxlength","placeholder","disabled","data-invalid","onKeydown"])}}}),Xe=Je;const[Be,Qe]=_e("TagsInputItem");var Ye=y({__name:"TagsInputItem",props:{value:{type:[String,Object],required:!0},disabled:{type:Boolean,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},setup(s){const u=s,{value:e}=ke(u),n=Y(),{forwardRef:r,currentElement:p}=E(),{CollectionItem:d}=De(),m=q(()=>n.selectedElement.value===p.value),V=q(()=>u.disabled||n.disabled.value),P=Qe({value:e,isSelected:m,disabled:V,textId:"",displayValue:q(()=>n.displayValue(e.value))});return(L,O)=>(T(),v(t(d),{value:t(e)},{default:b(()=>[we(t(j),{ref:t(r),as:L.as,"as-child":L.asChild,"aria-labelledby":t(P).textId,"aria-current":m.value,"data-disabled":V.value?"":void 0,"data-state":m.value?"active":"inactive"},{default:b(()=>[B(L.$slots,"default")]),_:3},8,["as","as-child","aria-labelledby","aria-current","data-disabled","data-state"])]),_:3},8,["value"]))}}),Ze=Ye,et=y({__name:"TagsInputItemDelete",props:{asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"button"}},setup(s){const u=s;E();const e=Y(),n=Be(),r=q(()=>{var d;return((d=n.disabled)==null?void 0:d.value)||e.disabled.value});function p(){if(r.value)return;const d=e.modelValue.value.findIndex(m=>$e(m,n.value.value));e.onRemoveValue(d)}return(d,m)=>(T(),v(t(j),A({tabindex:"-1"},u,{"aria-labelledby":t(n).textId,"aria-current":t(n).isSelected.value,"data-state":t(n).isSelected.value?"active":"inactive","data-disabled":r.value?"":void 0,type:d.as==="button"?"button":void 0,onClick:p}),{default:b(()=>[B(d.$slots,"default")]),_:3},16,["aria-labelledby","aria-current","data-state","data-disabled","type"]))}}),tt=et,at=y({__name:"TagsInputItemText",props:{asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"span"}},setup(s){const u=s,e=Be();return E(),e.textId||(e.textId=Ue(void 0,"reka-tags-input-item-text")),(n,r)=>(T(),v(t(j),A(u,{id:t(e).textId}),{default:b(()=>[B(n.$slots,"default",{},()=>[Pe(qe(t(e).displayValue.value),1)])]),_:3},16,["id"]))}}),nt=at;const x=y({__name:"TagsInput",props:{modelValue:{},defaultValue:{},addOnPaste:{type:Boolean},addOnTab:{type:Boolean},addOnBlur:{type:Boolean},duplicate:{type:Boolean},disabled:{type:Boolean},delimiter:{},dir:{},max:{},id:{},convertValue:{type:Function},displayValue:{type:Function},asChild:{type:Boolean},as:{},name:{},required:{type:Boolean},class:{}},emits:["update:modelValue","invalid","addTag","removeTag"],setup(s,{emit:u}){const e=s,n=u,r=R(e,"class"),p=Ee(r,n);return(d,m)=>(T(),v(t(We),A(t(p),{class:t(N)("flex flex-wrap gap-2 items-center rounded-md border border-input bg-background px-3 py-[11px] text-omicron focus-within:border-lime-500",e.class)}),{default:b(()=>[B(d.$slots,"default")]),_:3},16,["class"]))}});x.__docgenInfo=Object.assign({displayName:x.name??x.__name},{exportName:"default",displayName:"TagsInput",description:"",tags:{},slots:[{name:"default"}],sourceFiles:["/Users/lord/Documents/Documentation/gwindui.github.io/src/components/tags-input/TagsInput.vue"]});const w=y({__name:"TagsInputInput",props:{placeholder:{},autoFocus:{type:Boolean},maxLength:{},asChild:{type:Boolean},as:{},class:{}},setup(s){const u=s,e=R(u,"class"),n=J(e);return(r,p)=>(T(),v(t(Xe),A(t(n),{class:t(N)("text-omicron font-regular focus:outline-none bg-transparent",u.class)}),null,16,["class"]))}});w.__docgenInfo=Object.assign({displayName:w.name??w.__name},{exportName:"default",displayName:"TagsInputInput",description:"",tags:{},sourceFiles:["/Users/lord/Documents/Documentation/gwindui.github.io/src/components/tags-input/TagsInputInput.vue"]});const _=y({__name:"TagsInputItem",props:{value:{},disabled:{type:Boolean},asChild:{type:Boolean},as:{},class:{}},setup(s){const u=s,e=R(u,"class"),n=J(e);return(r,p)=>(T(),v(t(Ze),A(t(n),{class:t(N)("flex px-2 py-[3px] gap-1 items-center rounded-sm bg-black-100 data-[state=active]:ring-ring data-[state=active]:ring-1 data-[state=active]:ring-offset-1 ring-offset-background",u.class)}),{default:b(()=>[B(r.$slots,"default")]),_:3},16,["class"]))}});_.__docgenInfo=Object.assign({displayName:_.name??_.__name},{exportName:"default",displayName:"TagsInputItem",description:"",tags:{},slots:[{name:"default"}],sourceFiles:["/Users/lord/Documents/Documentation/gwindui.github.io/src/components/tags-input/TagsInputItem.vue"]});const D=y({__name:"TagsInputItemDelete",props:{asChild:{type:Boolean},as:{},class:{}},setup(s){const u=s,e=R(u,"class"),n=J(e);return(r,p)=>(T(),v(t(tt),A(t(n),{class:t(N)("flex rounded bg-transparent",u.class)}),{default:b(()=>[B(r.$slots,"default",{},()=>[p[0]||(p[0]=se("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[se("path",{d:"M5.29492 5.29492C5.66533 4.9247 6.25262 4.90273 6.64844 5.22949L6.71973 5.29492L10.416 8.99121L14.1123 5.29492L14.1846 5.22949C14.5804 4.90281 15.1677 4.92463 15.5381 5.29492C15.9316 5.68847 15.9316 6.32715 15.5381 6.7207L11.8408 10.416L15.5381 14.1133C15.9314 14.5068 15.9314 15.1446 15.5381 15.5381C15.1677 15.9085 14.5805 15.9303 14.1846 15.6035L14.1123 15.5381L10.416 11.8418L6.71973 15.5381L6.64844 15.6035C6.25255 15.9303 5.66532 15.9085 5.29492 15.5381C4.90148 15.1446 4.90151 14.5068 5.29492 14.1133L8.99023 10.416L5.29492 6.7207C4.90137 6.32715 4.90137 5.68847 5.29492 5.29492Z",fill:"#58585B"})],-1))])]),_:3},16,["class"]))}});D.__docgenInfo=Object.assign({displayName:D.name??D.__name},{exportName:"default",displayName:"TagsInputItemDelete",description:"",tags:{},slots:[{name:"default"}],sourceFiles:["/Users/lord/Documents/Documentation/gwindui.github.io/src/components/tags-input/TagsInputItemDelete.vue"]});const G=y({__name:"TagsInputItemText",props:{asChild:{type:Boolean},as:{},class:{}},setup(s){const u=s,e=R(u,"class"),n=J(e);return(r,p)=>(T(),v(t(nt),A(t(n),{class:t(N)("text-omega font-bold !text-black-600 rounded bg-transparent",u.class)}),null,16,["class"]))}});G.__docgenInfo=Object.assign({displayName:G.name??G.__name},{exportName:"default",displayName:"TagsInputItemText",description:"",tags:{},sourceFiles:["/Users/lord/Documents/Documentation/gwindui.github.io/src/components/tags-input/TagsInputItemText.vue"]});const Bt={title:"Components/TagsInput",component:x,tags:["autodocs"],parameters:{docs:{description:{component:"\n**TagsInput** adalah komponen input untuk menambahkan dan menghapus multiple tags atau keywords. Digunakan untuk metadata, categories, skills, atau labels yang dapat di-manage secara dinamis.\n\nKomponen ini memungkinkan user menambah tag baru dengan mengetik dan menekan Enter, serta menghapus tag dengan klik tombol delete atau tekan Backspace.\n\nTerdiri dari sub-komponen:\n- **`TagsInput`** — root container yang mengelola state tags\n- **`TagsInputItem`** — setiap tag individual yang dapat dihapus\n- **`TagsInputItemText`** — text display untuk tag\n- **`TagsInputItemDelete`** — button untuk menghapus tag\n- **`TagsInputInput`** — input field untuk menambah tag baru\n\n### Penggunaan Dasar\n```vue\n<script setup>\nimport { ref } from 'vue'\nconst tags = ref(['Vue', 'React', 'Angular'])\n<\/script>\n\n<TagsInput v-model=\"tags\">\n  <TagsInputItem v-for=\"tag in tags\" :key=\"tag\" :value=\"tag\">\n    <TagsInputItemText />\n    <TagsInputItemDelete />\n  </TagsInputItem>\n  <TagsInputInput placeholder=\"Add tag...\" />\n</TagsInput>\n```\n\n### Props `TagsInput`\n| Prop | Tipe | Default | Deskripsi |\n|------|------|---------|-----------|\n| `modelValue` | `string[]` | `[]` | Array of tags (v-model) |\n| `defaultValue` | `string[]` | `[]` | Initial tags (uncontrolled) |\n| `addOnBlur` | `boolean` | `false` | Tambah tag saat input blur |\n| `addOnPaste` | `boolean` | `false` | Tambah multiple tags saat paste (split by delimiter) |\n| `delimiter` | `string` | `','` | Delimiter untuk split tags saat paste |\n| `disabled` | `boolean` | `false` | Nonaktifkan input |\n| `max` | `number` | — | Maksimal jumlah tags |\n| `duplicate` | `boolean` | `false` | Izinkan tag duplikat |\n\n### Props `TagsInputItem`\n| Prop | Tipe | Deskripsi |\n|------|------|-----------|\n| `value` | `string` | Nilai tag (required) |\n| `disabled` | `boolean` | Nonaktifkan delete untuk tag ini |\n\n### Events\n| Event | Payload | Deskripsi |\n|-------|---------|-----------|\n| `@update:modelValue` | `string[]` | Emitted saat tags berubah |\n| `@invalid` | `string` | Emitted saat input tidak valid (duplikat/max reached) |\n\n### Keyboard Interactions\n- **Enter**: Tambah tag baru dari input\n- **Backspace**: Hapus tag terakhir (saat input kosong)\n- **Arrow Keys**: Navigasi antar tags\n- **Delete/Backspace on Tag**: Hapus tag yang di-focus\n\n### Use Cases\n- Post/article tags atau categories\n- Email recipients (To, Cc, Bcc fields)\n- Skills atau interests pada profile\n- Search filters atau keywords\n- Technology stack labels\n- Product tags atau attributes\n\n### Best Practices\n- Set `max` untuk prevent terlalu banyak tags\n- Gunakan `duplicate={false}` untuk mencegah tag duplikat\n- Provide clear placeholder untuk hint user\n- Gunakan validation untuk format tag (e.g., no spaces, lowercase only)\n- Consider auto-suggest untuk existing tags\n- Display character/tag count untuk user guidance\n                "}}},argTypes:{modelValue:{control:"object",description:"Array of tag strings"},disabled:{control:"boolean",description:"Disable the tags input"},max:{control:"number",description:"Maximum number of tags allowed"},addOnBlur:{control:"boolean",description:"Add tag when input loses focus"},duplicate:{control:"boolean",description:"Allow duplicate tags"}}},U={name:"Basic TagsInput",parameters:{docs:{description:{story:"TagsInput dasar. Ketik dan tekan Enter untuk menambah tag, klik X untuk menghapus."}}},render:()=>({components:{TagsInput:x,TagsInputInput:w,TagsInputItem:_,TagsInputItemDelete:D,TagsInputItemText:G,GLabel:S},setup(){return{tags:{value:["Vue.js","React","Angular"]}}},template:`
      <div class="max-w-md">
        <GLabel class="block text-sm font-medium mb-2">
          Technologies
        </GLabel>
        <TagsInput v-model="tags.value" class="w-full">
          <div class="flex gap-2 flex-wrap">
            <TagsInputItem 
              v-for="tag in tags.value" 
              :key="tag" 
              :value="tag"
              class="bg-blue-100 text-blue-800 px-2 py-1 rounded flex items-center gap-1"
            >
              <TagsInputItemText />
              <TagsInputItemDelete class="hover:text-blue-600">
                ×
              </TagsInputItemDelete>
            </TagsInputItem>
            <TagsInputInput 
              placeholder="Add technology..." 
              class="flex-1 min-w-[120px] outline-none"
            />
          </div>
        </TagsInput>
        <p class="text-sm text-gray-500 mt-2">
          Tekan Enter untuk menambah tag
        </p>
      </div>
    `})},$={name:"With Max Limit",parameters:{docs:{description:{story:"TagsInput dengan batas maksimal 5 tags. Coba tambah lebih dari 5 tag untuk melihat limitasi."}}},render:()=>({components:{TagsInput:x,TagsInputInput:w,TagsInputItem:_,TagsInputItemDelete:D,TagsInputItemText:G,GLabel:S},setup(){return{tags:{value:["Tag 1","Tag 2"]}}},template:`
      <div class="max-w-md">
        <GLabel class="block text-sm font-medium mb-2">
          Skills (Maximum 5)
        </GLabel>
        <TagsInput 
          v-model="tags.value" 
          :max="5"
          class="w-full border rounded-lg p-2"
        >
          <div class="flex gap-2 flex-wrap">
            <TagsInputItem 
              v-for="tag in tags.value" 
              :key="tag" 
              :value="tag"
              class="bg-purple-100 text-purple-800 px-3 py-1 rounded-full flex items-center gap-2 text-sm"
            >
              <TagsInputItemText />
              <TagsInputItemDelete class="hover:text-purple-600 font-bold">
                ×
              </TagsInputItemDelete>
            </TagsInputItem>
            <TagsInputInput 
              placeholder="Add skill..." 
              class="flex-1 min-w-[120px] outline-none px-2"
            />
          </div>
        </TagsInput>
        <p class="text-sm text-gray-500 mt-2">
          {{ tags.value.length }} / 5 tags
        </p>
      </div>
    `})},K={name:"No Duplicates",parameters:{docs:{description:{story:"TagsInput yang mencegah tag duplikat. Coba tambah tag yang sudah ada untuk melihat behavior ini."}}},render:()=>({components:{TagsInput:x,TagsInputInput:w,TagsInputItem:_,TagsInputItemDelete:D,TagsInputItemText:G,GLabel:S},setup(){return{tags:{value:["JavaScript","TypeScript"]}}},template:`
      <div class="max-w-md">
        <GLabel class="block text-sm font-medium mb-2">
          Languages (No Duplicates)
        </GLabel>
        <TagsInput 
          v-model="tags.value" 
          :duplicate="false"
          class="w-full border rounded-lg p-2"
        >
          <div class="flex gap-2 flex-wrap">
            <TagsInputItem 
              v-for="tag in tags.value" 
              :key="tag" 
              :value="tag"
              class="bg-green-100 text-green-800 px-3 py-1 rounded flex items-center gap-2"
            >
              <TagsInputItemText />
              <TagsInputItemDelete class="hover:text-green-600">
                ×
              </TagsInputItemDelete>
            </TagsInputItem>
            <TagsInputInput 
              placeholder="Add language..." 
              class="flex-1 min-w-[120px] outline-none px-2"
            />
          </div>
        </TagsInput>
        <p class="text-sm text-gray-500 mt-2">
          Duplikat tidak diizinkan
        </p>
      </div>
    `})},z={name:"Email Recipients",parameters:{docs:{description:{story:"Use case: email recipients field. Mirip dengan 'To' field di email client."}}},render:()=>({components:{TagsInput:x,TagsInputInput:w,TagsInputItem:_,TagsInputItemDelete:D,TagsInputItemText:G,GLabel:S,GInput:Le,GTextarea:Ge},setup(){return{recipients:{value:["john@example.com","jane@example.com"]}}},template:`
      <div class="max-w-2xl">
        <div class="border rounded-lg overflow-hidden">
          <div class="bg-gray-50 px-3 py-2 border-b flex items-center gap-2">
            <GLabel class="font-medium text-sm min-w-[40px]">To:</GLabel>
            <TagsInput 
              v-model="recipients.value" 
              class="flex-1"
              :add-on-blur="true"
            >
              <div class="flex gap-1 flex-wrap">
                <TagsInputItem 
                  v-for="email in recipients.value" 
                  :key="email" 
                  :value="email"
                  class="bg-blue-500 text-white px-2 py-1 rounded-full text-sm flex items-center gap-1"
                >
                  <TagsInputItemText />
                  <TagsInputItemDelete class="hover:bg-blue-600 rounded-full w-4 h-4 flex items-center justify-center">
                    ×
                  </TagsInputItemDelete>
                </TagsInputItem>
                <TagsInputInput 
                  placeholder="Add recipient email..." 
                  class="flex-1 min-w-[200px] outline-none bg-transparent text-sm"
                />
              </div>
            </TagsInput>
          </div>
          <div class="bg-gray-50 px-3 py-2 border-b">
            <GLabel class="font-medium text-sm">Subject:</GLabel>
            <GInput 
              type="text" 
              placeholder="Email subject..." 
              class="w-full mt-1"
            />
          </div>
          <GTextarea 
            placeholder="Compose your message..." 
            class="w-full p-3 min-h-[200px] outline-none resize-none"
          />
        </div>
      </div>
    `})},H={name:"Article Tags",parameters:{docs:{description:{story:"Use case: tagging artikel atau post. Common di CMS atau blogging platforms."}}},render:()=>({components:{TagsInput:x,TagsInputInput:w,TagsInputItem:_,TagsInputItemDelete:D,TagsInputItemText:G,GLabel:S,GInput:Le,GTextarea:Ge,GButton:Ke},setup(){return{tags:{value:["vue","javascript","web-development"]}}},template:`
      <div class="max-w-2xl border rounded-lg p-6 shadow-sm">
        <div class="mb-4">
          <GLabel class="block text-sm font-medium mb-2">
            Judul Artikel
          </GLabel>
          <GInput 
            type="text" 
            placeholder="Masukkan judul artikel..." 
            class="w-full"
          />
        </div>
        
        <div class="mb-4">
          <GLabel class="block text-sm font-medium mb-2">
            Tags (untuk SEO dan kategorisasi)
          </GLabel>
          <TagsInput 
            v-model="tags.value" 
            :max="10"
            :duplicate="false"
            class="w-full border rounded-lg p-3"
          >
            <div class="flex gap-2 flex-wrap">
              <TagsInputItem 
                v-for="tag in tags.value" 
                :key="tag" 
                :value="tag"
                class="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-md flex items-center gap-2 text-sm font-medium"
              >
                <span class="text-indigo-400">#</span>
                <TagsInputItemText />
                <TagsInputItemDelete class="hover:text-indigo-600 ml-1">
                  ×
                </TagsInputItemDelete>
              </TagsInputItem>
              <TagsInputInput 
                placeholder="Tambah tag..." 
                class="flex-1 min-w-[150px] outline-none px-2"
              />
            </div>
          </TagsInput>
          <p class="text-xs text-gray-500 mt-2">
            💡 Tip: Gunakan tag yang relevan untuk meningkatkan discoverability artikel
          </p>
        </div>
        
        <div class="mb-4">
          <GLabel class="block text-sm font-medium mb-2">
            Konten
          </GLabel>
          <GTextarea 
            placeholder="Tulis artikel Anda di sini..." 
            class="w-full min-h-[200px]"
          />
        </div>
        
        <div class="flex gap-2">
          <GButton variant="primary">
            Publish
          </GButton>
          <GButton variant="outline">
            Save Draft
          </GButton>
        </div>
      </div>
    `})},W={name:"Custom Styling",parameters:{docs:{description:{story:"Berbagai variasi styling untuk TagsInput. Tunjukkan fleksibilitas komponen dalam design."}}},render:()=>({components:{TagsInput:x,TagsInputInput:w,TagsInputItem:_,TagsInputItemDelete:D,TagsInputItemText:G,GLabel:S},setup(){return{tags1:{value:["Design","UI/UX"]},tags2:{value:["React","Vue"]},tags3:{value:["High","Priority"]}}},template:`
      <div class="space-y-6 max-w-2xl">
        <!-- Rounded Pills -->
        <div>
          <GLabel class="block text-sm font-medium mb-2">Rounded Pills Style</GLabel>
          <TagsInput v-model="tags1.value" class="w-full border rounded-full px-4 py-2">
            <div class="flex gap-2 flex-wrap">
              <TagsInputItem 
                v-for="tag in tags1.value" 
                :key="tag" 
                :value="tag"
                class="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-4 py-1 rounded-full flex items-center gap-2"
              >
                <TagsInputItemText />
                <TagsInputItemDelete class="hover:opacity-80">×</TagsInputItemDelete>
              </TagsInputItem>
              <TagsInputInput placeholder="Add..." class="flex-1 outline-none" />
            </div>
          </TagsInput>
        </div>
        
        <!-- Bordered Style -->
        <div>
          <GLabel class="block text-sm font-medium mb-2">Bordered Style</GLabel>
          <TagsInput v-model="tags2.value" class="w-full border-2 rounded-lg p-3">
            <div class="flex gap-2 flex-wrap">
              <TagsInputItem 
                v-for="tag in tags2.value" 
                :key="tag" 
                :value="tag"
                class="border-2 border-blue-500 text-blue-700 px-3 py-1 rounded flex items-center gap-2 font-medium"
              >
                <TagsInputItemText />
                <TagsInputItemDelete class="hover:text-blue-900">×</TagsInputItemDelete>
              </TagsInputItem>
              <TagsInputInput placeholder="Add..." class="flex-1 outline-none" />
            </div>
          </TagsInput>
        </div>
        
        <!-- Minimal Style -->
        <div>
          <GLabel class="block text-sm font-medium mb-2">Minimal Style</GLabel>
          <TagsInput v-model="tags3.value" class="w-full border-b-2 py-2">
            <div class="flex gap-3 flex-wrap items-center">
              <TagsInputItem 
                v-for="tag in tags3.value" 
                :key="tag" 
                :value="tag"
                class="text-gray-700 flex items-center gap-1 group"
              >
                <span class="text-orange-500">#</span>
                <TagsInputItemText class="font-medium" />
                <TagsInputItemDelete class="text-gray-400 group-hover:text-gray-700">×</TagsInputItemDelete>
              </TagsInputItem>
              <TagsInputInput placeholder="Add tag..." class="flex-1 outline-none" />
            </div>
          </TagsInput>
        </div>
      </div>
    `})};var le,ue,re;U.parameters={...U.parameters,docs:{...(le=U.parameters)==null?void 0:le.docs,source:{originalSource:`{
  name: "Basic TagsInput",
  parameters: {
    docs: {
      description: {
        story: "TagsInput dasar. Ketik dan tekan Enter untuk menambah tag, klik X untuk menghapus."
      }
    }
  },
  render: () => ({
    components: {
      TagsInput,
      TagsInputInput,
      TagsInputItem,
      TagsInputItemDelete,
      TagsInputItemText,
      GLabel
    },
    setup() {
      const tags = {
        value: ["Vue.js", "React", "Angular"]
      };
      return {
        tags
      };
    },
    template: \`
      <div class="max-w-md">
        <GLabel class="block text-sm font-medium mb-2">
          Technologies
        </GLabel>
        <TagsInput v-model="tags.value" class="w-full">
          <div class="flex gap-2 flex-wrap">
            <TagsInputItem 
              v-for="tag in tags.value" 
              :key="tag" 
              :value="tag"
              class="bg-blue-100 text-blue-800 px-2 py-1 rounded flex items-center gap-1"
            >
              <TagsInputItemText />
              <TagsInputItemDelete class="hover:text-blue-600">
                ×
              </TagsInputItemDelete>
            </TagsInputItem>
            <TagsInputInput 
              placeholder="Add technology..." 
              class="flex-1 min-w-[120px] outline-none"
            />
          </div>
        </TagsInput>
        <p class="text-sm text-gray-500 mt-2">
          Tekan Enter untuk menambah tag
        </p>
      </div>
    \`
  })
}`,...(re=(ue=U.parameters)==null?void 0:ue.docs)==null?void 0:re.source}}};var oe,ie,pe;$.parameters={...$.parameters,docs:{...(oe=$.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  name: "With Max Limit",
  parameters: {
    docs: {
      description: {
        story: "TagsInput dengan batas maksimal 5 tags. Coba tambah lebih dari 5 tag untuk melihat limitasi."
      }
    }
  },
  render: () => ({
    components: {
      TagsInput,
      TagsInputInput,
      TagsInputItem,
      TagsInputItemDelete,
      TagsInputItemText,
      GLabel
    },
    setup() {
      const tags = {
        value: ["Tag 1", "Tag 2"]
      };
      return {
        tags
      };
    },
    template: \`
      <div class="max-w-md">
        <GLabel class="block text-sm font-medium mb-2">
          Skills (Maximum 5)
        </GLabel>
        <TagsInput 
          v-model="tags.value" 
          :max="5"
          class="w-full border rounded-lg p-2"
        >
          <div class="flex gap-2 flex-wrap">
            <TagsInputItem 
              v-for="tag in tags.value" 
              :key="tag" 
              :value="tag"
              class="bg-purple-100 text-purple-800 px-3 py-1 rounded-full flex items-center gap-2 text-sm"
            >
              <TagsInputItemText />
              <TagsInputItemDelete class="hover:text-purple-600 font-bold">
                ×
              </TagsInputItemDelete>
            </TagsInputItem>
            <TagsInputInput 
              placeholder="Add skill..." 
              class="flex-1 min-w-[120px] outline-none px-2"
            />
          </div>
        </TagsInput>
        <p class="text-sm text-gray-500 mt-2">
          {{ tags.value.length }} / 5 tags
        </p>
      </div>
    \`
  })
}`,...(pe=(ie=$.parameters)==null?void 0:ie.docs)==null?void 0:pe.source}}};var de,me,ce;K.parameters={...K.parameters,docs:{...(de=K.parameters)==null?void 0:de.docs,source:{originalSource:`{
  name: "No Duplicates",
  parameters: {
    docs: {
      description: {
        story: "TagsInput yang mencegah tag duplikat. Coba tambah tag yang sudah ada untuk melihat behavior ini."
      }
    }
  },
  render: () => ({
    components: {
      TagsInput,
      TagsInputInput,
      TagsInputItem,
      TagsInputItemDelete,
      TagsInputItemText,
      GLabel
    },
    setup() {
      const tags = {
        value: ["JavaScript", "TypeScript"]
      };
      return {
        tags
      };
    },
    template: \`
      <div class="max-w-md">
        <GLabel class="block text-sm font-medium mb-2">
          Languages (No Duplicates)
        </GLabel>
        <TagsInput 
          v-model="tags.value" 
          :duplicate="false"
          class="w-full border rounded-lg p-2"
        >
          <div class="flex gap-2 flex-wrap">
            <TagsInputItem 
              v-for="tag in tags.value" 
              :key="tag" 
              :value="tag"
              class="bg-green-100 text-green-800 px-3 py-1 rounded flex items-center gap-2"
            >
              <TagsInputItemText />
              <TagsInputItemDelete class="hover:text-green-600">
                ×
              </TagsInputItemDelete>
            </TagsInputItem>
            <TagsInputInput 
              placeholder="Add language..." 
              class="flex-1 min-w-[120px] outline-none px-2"
            />
          </div>
        </TagsInput>
        <p class="text-sm text-gray-500 mt-2">
          Duplikat tidak diizinkan
        </p>
      </div>
    \`
  })
}`,...(ce=(me=K.parameters)==null?void 0:me.docs)==null?void 0:ce.source}}};var ge,Ie,fe;z.parameters={...z.parameters,docs:{...(ge=z.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  name: "Email Recipients",
  parameters: {
    docs: {
      description: {
        story: "Use case: email recipients field. Mirip dengan 'To' field di email client."
      }
    }
  },
  render: () => ({
    components: {
      TagsInput,
      TagsInputInput,
      TagsInputItem,
      TagsInputItemDelete,
      TagsInputItemText,
      GLabel,
      GInput,
      GTextarea
    },
    setup() {
      const recipients = {
        value: ["john@example.com", "jane@example.com"]
      };
      return {
        recipients
      };
    },
    template: \`
      <div class="max-w-2xl">
        <div class="border rounded-lg overflow-hidden">
          <div class="bg-gray-50 px-3 py-2 border-b flex items-center gap-2">
            <GLabel class="font-medium text-sm min-w-[40px]">To:</GLabel>
            <TagsInput 
              v-model="recipients.value" 
              class="flex-1"
              :add-on-blur="true"
            >
              <div class="flex gap-1 flex-wrap">
                <TagsInputItem 
                  v-for="email in recipients.value" 
                  :key="email" 
                  :value="email"
                  class="bg-blue-500 text-white px-2 py-1 rounded-full text-sm flex items-center gap-1"
                >
                  <TagsInputItemText />
                  <TagsInputItemDelete class="hover:bg-blue-600 rounded-full w-4 h-4 flex items-center justify-center">
                    ×
                  </TagsInputItemDelete>
                </TagsInputItem>
                <TagsInputInput 
                  placeholder="Add recipient email..." 
                  class="flex-1 min-w-[200px] outline-none bg-transparent text-sm"
                />
              </div>
            </TagsInput>
          </div>
          <div class="bg-gray-50 px-3 py-2 border-b">
            <GLabel class="font-medium text-sm">Subject:</GLabel>
            <GInput 
              type="text" 
              placeholder="Email subject..." 
              class="w-full mt-1"
            />
          </div>
          <GTextarea 
            placeholder="Compose your message..." 
            class="w-full p-3 min-h-[200px] outline-none resize-none"
          />
        </div>
      </div>
    \`
  })
}`,...(fe=(Ie=z.parameters)==null?void 0:Ie.docs)==null?void 0:fe.source}}};var ve,Te,xe;H.parameters={...H.parameters,docs:{...(ve=H.parameters)==null?void 0:ve.docs,source:{originalSource:`{
  name: "Article Tags",
  parameters: {
    docs: {
      description: {
        story: "Use case: tagging artikel atau post. Common di CMS atau blogging platforms."
      }
    }
  },
  render: () => ({
    components: {
      TagsInput,
      TagsInputInput,
      TagsInputItem,
      TagsInputItemDelete,
      TagsInputItemText,
      GLabel,
      GInput,
      GTextarea,
      GButton
    },
    setup() {
      const tags = {
        value: ["vue", "javascript", "web-development"]
      };
      return {
        tags
      };
    },
    template: \`
      <div class="max-w-2xl border rounded-lg p-6 shadow-sm">
        <div class="mb-4">
          <GLabel class="block text-sm font-medium mb-2">
            Judul Artikel
          </GLabel>
          <GInput 
            type="text" 
            placeholder="Masukkan judul artikel..." 
            class="w-full"
          />
        </div>
        
        <div class="mb-4">
          <GLabel class="block text-sm font-medium mb-2">
            Tags (untuk SEO dan kategorisasi)
          </GLabel>
          <TagsInput 
            v-model="tags.value" 
            :max="10"
            :duplicate="false"
            class="w-full border rounded-lg p-3"
          >
            <div class="flex gap-2 flex-wrap">
              <TagsInputItem 
                v-for="tag in tags.value" 
                :key="tag" 
                :value="tag"
                class="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-md flex items-center gap-2 text-sm font-medium"
              >
                <span class="text-indigo-400">#</span>
                <TagsInputItemText />
                <TagsInputItemDelete class="hover:text-indigo-600 ml-1">
                  ×
                </TagsInputItemDelete>
              </TagsInputItem>
              <TagsInputInput 
                placeholder="Tambah tag..." 
                class="flex-1 min-w-[150px] outline-none px-2"
              />
            </div>
          </TagsInput>
          <p class="text-xs text-gray-500 mt-2">
            💡 Tip: Gunakan tag yang relevan untuk meningkatkan discoverability artikel
          </p>
        </div>
        
        <div class="mb-4">
          <GLabel class="block text-sm font-medium mb-2">
            Konten
          </GLabel>
          <GTextarea 
            placeholder="Tulis artikel Anda di sini..." 
            class="w-full min-h-[200px]"
          />
        </div>
        
        <div class="flex gap-2">
          <GButton variant="primary">
            Publish
          </GButton>
          <GButton variant="outline">
            Save Draft
          </GButton>
        </div>
      </div>
    \`
  })
}`,...(xe=(Te=H.parameters)==null?void 0:Te.docs)==null?void 0:xe.source}}};var be,ye,he;W.parameters={...W.parameters,docs:{...(be=W.parameters)==null?void 0:be.docs,source:{originalSource:`{
  name: "Custom Styling",
  parameters: {
    docs: {
      description: {
        story: "Berbagai variasi styling untuk TagsInput. Tunjukkan fleksibilitas komponen dalam design."
      }
    }
  },
  render: () => ({
    components: {
      TagsInput,
      TagsInputInput,
      TagsInputItem,
      TagsInputItemDelete,
      TagsInputItemText,
      GLabel
    },
    setup() {
      const tags1 = {
        value: ["Design", "UI/UX"]
      };
      const tags2 = {
        value: ["React", "Vue"]
      };
      const tags3 = {
        value: ["High", "Priority"]
      };
      return {
        tags1,
        tags2,
        tags3
      };
    },
    template: \`
      <div class="space-y-6 max-w-2xl">
        <!-- Rounded Pills -->
        <div>
          <GLabel class="block text-sm font-medium mb-2">Rounded Pills Style</GLabel>
          <TagsInput v-model="tags1.value" class="w-full border rounded-full px-4 py-2">
            <div class="flex gap-2 flex-wrap">
              <TagsInputItem 
                v-for="tag in tags1.value" 
                :key="tag" 
                :value="tag"
                class="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-4 py-1 rounded-full flex items-center gap-2"
              >
                <TagsInputItemText />
                <TagsInputItemDelete class="hover:opacity-80">×</TagsInputItemDelete>
              </TagsInputItem>
              <TagsInputInput placeholder="Add..." class="flex-1 outline-none" />
            </div>
          </TagsInput>
        </div>
        
        <!-- Bordered Style -->
        <div>
          <GLabel class="block text-sm font-medium mb-2">Bordered Style</GLabel>
          <TagsInput v-model="tags2.value" class="w-full border-2 rounded-lg p-3">
            <div class="flex gap-2 flex-wrap">
              <TagsInputItem 
                v-for="tag in tags2.value" 
                :key="tag" 
                :value="tag"
                class="border-2 border-blue-500 text-blue-700 px-3 py-1 rounded flex items-center gap-2 font-medium"
              >
                <TagsInputItemText />
                <TagsInputItemDelete class="hover:text-blue-900">×</TagsInputItemDelete>
              </TagsInputItem>
              <TagsInputInput placeholder="Add..." class="flex-1 outline-none" />
            </div>
          </TagsInput>
        </div>
        
        <!-- Minimal Style -->
        <div>
          <GLabel class="block text-sm font-medium mb-2">Minimal Style</GLabel>
          <TagsInput v-model="tags3.value" class="w-full border-b-2 py-2">
            <div class="flex gap-3 flex-wrap items-center">
              <TagsInputItem 
                v-for="tag in tags3.value" 
                :key="tag" 
                :value="tag"
                class="text-gray-700 flex items-center gap-1 group"
              >
                <span class="text-orange-500">#</span>
                <TagsInputItemText class="font-medium" />
                <TagsInputItemDelete class="text-gray-400 group-hover:text-gray-700">×</TagsInputItemDelete>
              </TagsInputItem>
              <TagsInputInput placeholder="Add tag..." class="flex-1 outline-none" />
            </div>
          </TagsInput>
        </div>
      </div>
    \`
  })
}`,...(he=(ye=W.parameters)==null?void 0:ye.docs)==null?void 0:he.source}}};const Ct=["Default","WithMaxLimit","NoDuplicates","EmailRecipients","ArticleTags","CustomStyling"];export{H as ArticleTags,W as CustomStyling,U as Default,z as EmailRecipients,K as NoDuplicates,$ as WithMaxLimit,Ct as __namedExportsOrder,Bt as default};
