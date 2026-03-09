import{d as g,c as C,a as p,w as l,b as x,m as b,u as e,r as O,z as Ce,e as ge,D as fe,E as ve,v as w,V,S as A,f as U,j as R,o as re,s as ie,P as Ie,Q as he}from"./iframe-c4IY6zQp.js";import{u as ye,L as xe}from"./ListboxRoot-DDAl8rpR.js";import{u as q,b as le}from"./useForwardPropsEmits-T2W0pCxY.js";import{a as _}from"./utils-DFIdVO4u.js";import{c as ue}from"./createContext-cRkaqZ4A.js";import{r as G}from"./index-6HqQR1st.js";import{i as be,L as ke,S as we,a as _e,b as Ge,c as Se}from"./search-D1jjY0m5.js";import{b as Le}from"./index-BxO9e2AK.js";import{u as pe}from"./useId--nAmYTv4.js";import{P as ce}from"./Primitive-jOHN3RPP.js";import{S as Ee}from"./Separator-DynCtoMG.js";import{_ as De}from"./button-Cr1_wFBW.js";import{c as je,a as Ne,_ as Pe,b as Be}from"./DialogTitle-CYEcQXTO.js";import{_ as Fe}from"./Dialog-CZx4OiSx.js";import"./preload-helper-DKj51lX3.js";import"./ohash.D__AXeF1-Cq3NGnZa.js";import"./useDirection-Cgdaowgg.js";import"./ConfigProvider-C_xfuhRi.js";import"./useFormControl-B0k9zZ1q.js";import"./useForwardExpose-Cr5jnkZA.js";import"./useKbd-kRIii9yh.js";import"./useTypeahead-BJ1Rp_e7.js";import"./getActiveElement-FUKBWQwh.js";import"./usePrimitiveElement-o7raP3zM.js";import"./Collection-gwCc-hQ9.js";import"./utils-CC-pqV_U.js";import"./VisuallyHiddenInput-B4N5EJyq.js";import"./VisuallyHidden-JucKU3iS.js";import"./handleAndDispatchCustomEvent-ChOKVcqp.js";import"./createLucideIcon-C05cy66L.js";import"./index-QLIpZy2_.js";import"./DialogRoot-Blci9B0U.js";import"./DialogTitle-BzMgjJ6h.js";import"./Presence-B-TJz0M4.js";import"./useHideOthers-CYlkxdpM.js";import"./DismissableLayer-GjTYHlTV.js";import"./utils-axApmHzA.js";import"./utils-T_AZzJOL.js";import"./Teleport-B8QkTMKb.js";var Te=g({__name:"ListboxGroupLabel",props:{for:{type:String,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"div"}},setup(a){const n=a,m=be({id:""});return(t,o)=>(p(),C(e(ce),b(n,{id:e(m).id}),{default:l(()=>[x(t.$slots,"default")]),_:3},16,["id"]))}}),Ke=Te;const c=g({__name:"Command",props:{modelValue:{default:""},defaultValue:{},multiple:{type:Boolean},orientation:{},dir:{},disabled:{type:Boolean},selectionBehavior:{},highlightOnHover:{type:Boolean},by:{},asChild:{type:Boolean},as:{},name:{},required:{type:Boolean},class:{}},emits:["update:modelValue","highlight","entryFocus","leave"],setup(a,{emit:n}){const m=a,t=n,o=G(m,"class"),s=q(o,t),d=O(new Map),u=O(new Map),{contains:E}=ye({sensitivity:"base"}),r=Ce({search:"",filtered:{count:0,items:new Map,groups:new Set}});function D(){if(!r.search){r.filtered.count=d.value.size;return}r.filtered.groups=new Set;let S=0;for(const[k,L]of d.value){const i=E(L,r.search);r.filtered.items.set(k,i?1:0),i&&S++}for(const[k,L]of u.value)for(const i of L)if(r.filtered.items.get(i)>0){r.filtered.groups.add(k);break}r.filtered.count=S}return ge(()=>r.search,()=>{D()}),Oe({allItems:d,allGroups:u,filterState:r}),(S,k)=>(p(),C(e(xe),b({"data-slot":"command"},e(s),{class:e(_)("bg-popover text-popover-foreground flex h-full w-full flex-col overflow-hidden rounded-md",m.class)}),{default:l(()=>[x(S.$slots,"default")]),_:3},16,["class"]))}});c.__docgenInfo=Object.assign({displayName:c.name??c.__name},{exportName:"default",displayName:"Command",description:"",tags:{},props:[{name:"modelValue",defaultValue:{func:!1,value:'""'}}],slots:[{name:"default"}],sourceFiles:["/Users/lord/Documents/Documentation/gwindui.github.io/src/components/command/Command.vue"]});const $=g({__name:"CommandDialog",props:{open:{type:Boolean},defaultOpen:{type:Boolean},modal:{type:Boolean},title:{default:"Command Palette"},description:{default:"Search for a command to run..."}},emits:["update:open"],setup(a,{emit:n}){const o=q(a,n);return(s,d)=>(p(),C(e(Fe),fe(ve(e(o))),{default:l(()=>[w(e(je),{class:"overflow-hidden p-0"},{default:l(()=>[w(e(Ne),{class:"sr-only"},{default:l(()=>[w(e(Pe),null,{default:l(()=>[V(A(a.title),1)]),_:1}),w(e(Be),null,{default:l(()=>[V(A(a.description),1)]),_:1})]),_:1}),w(c,null,{default:l(()=>[x(s.$slots,"default")]),_:3})]),_:3})]),_:3},16))}});$.__docgenInfo=Object.assign({displayName:$.name??$.__name},{exportName:"default",displayName:"CommandDialog",description:"",tags:{},props:[{name:"title",defaultValue:{func:!1,value:'"Command Palette"'}},{name:"description",defaultValue:{func:!1,value:'"Search for a command to run..."'}}],slots:[{name:"default"}],sourceFiles:["/Users/lord/Documents/Documentation/gwindui.github.io/src/components/command/CommandDialog.vue"]});const f=g({__name:"CommandEmpty",props:{asChild:{type:Boolean},as:{},class:{}},setup(a){const n=a,m=G(n,"class"),{filterState:t}=M(),o=U(()=>!!t.search&&t.filtered.count===0);return(s,d)=>o.value?(p(),C(e(ce),b({key:0,"data-slot":"command-empty"},e(m),{class:e(_)("py-6 text-center text-sm",n.class)}),{default:l(()=>[x(s.$slots,"default")]),_:3},16,["class"])):R("",!0)}});f.__docgenInfo=Object.assign({displayName:f.name??f.__name},{exportName:"default",displayName:"CommandEmpty",description:"",tags:{},slots:[{name:"default"}],sourceFiles:["/Users/lord/Documents/Documentation/gwindui.github.io/src/components/command/CommandEmpty.vue"]});const v=g({__name:"CommandGroup",props:{asChild:{type:Boolean},as:{},class:{},heading:{}},setup(a){const n=a,m=G(n,"class"),{allGroups:t,filterState:o}=M(),s=pe(),d=U(()=>o.search?o.filtered.groups.has(s):!0);return Ae({id:s}),re(()=>{t.value.has(s)||t.value.set(s,new Set)}),ie(()=>{t.value.delete(s)}),(u,E)=>(p(),C(e(ke),b(e(m),{id:e(s),"data-slot":"command-group",class:e(_)("text-foreground overflow-hidden p-1",n.class),hidden:d.value?void 0:!0}),{default:l(()=>[a.heading?(p(),C(e(Ke),{key:0,class:"px-2 py-1.5 text-xs font-medium text-muted-foreground"},{default:l(()=>[V(A(a.heading),1)]),_:1})):R("",!0),x(u.$slots,"default")]),_:3},16,["id","class","hidden"]))}});v.__docgenInfo=Object.assign({displayName:v.name??v.__name},{exportName:"default",displayName:"CommandGroup",description:"",tags:{},slots:[{name:"default"}],sourceFiles:["/Users/lord/Documents/Documentation/gwindui.github.io/src/components/command/CommandGroup.vue"]});const $e={"data-slot":"command-input-wrapper",class:"flex h-12 items-center gap-2 border-b px-3"},I=g({inheritAttrs:!1,__name:"CommandInput",props:{modelValue:{},autoFocus:{type:Boolean},disabled:{type:Boolean},asChild:{type:Boolean},as:{},class:{}},setup(a){const n=a,m=G(n,"class"),t=le(m),{filterState:o}=M();return(s,d)=>(p(),Ie("div",$e,[w(e(we),{class:"size-4 shrink-0 opacity-50"}),w(e(_e),b({...e(t),...s.$attrs},{modelValue:e(o).search,"onUpdate:modelValue":d[0]||(d[0]=u=>e(o).search=u),"data-slot":"command-input","auto-focus":"",class:e(_)("placeholder:text-muted-foreground flex h-12 w-full rounded-md bg-transparent py-3 text-sm outline-hidden disabled:cursor-not-allowed disabled:opacity-50",n.class)}),null,16,["modelValue","class"])]))}});I.__docgenInfo=Object.assign({displayName:I.name??I.__name},{exportName:"default",displayName:"CommandInput",description:"",tags:{},sourceFiles:["/Users/lord/Documents/Documentation/gwindui.github.io/src/components/command/CommandInput.vue"]});const h=g({__name:"CommandItem",props:{value:{},disabled:{type:Boolean},asChild:{type:Boolean},as:{},class:{}},emits:["select"],setup(a,{emit:n}){const m=a,t=n,o=G(m,"class"),s=q(o,t),d=pe(),{filterState:u,allItems:E,allGroups:r}=M(),D=Ve(),S=U(()=>{if(u.search){const i=u.filtered.items.get(d);return i===void 0?!0:i>0}else return!0}),k=O(),L=Le(k);return re(()=>{var j,z;if(!(L.value instanceof HTMLElement))return;E.value.set(d,L.value.textContent??((j=m.value)==null?void 0:j.toString())??"");const i=D==null?void 0:D.id;i&&(r.value.has(i)?(z=r.value.get(i))==null||z.add(d):r.value.set(i,new Set([d])))}),ie(()=>{E.value.delete(d)}),(i,j)=>S.value?(p(),C(e(Ge),b({key:0},e(s),{id:e(d),ref_key:"itemRef",ref:k,"data-slot":"command-item",class:e(_)("data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-3 text-sm outline-hidden select-none data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",m.class),onSelect:j[0]||(j[0]=()=>{e(u).search=""})}),{default:l(()=>[x(i.$slots,"default")]),_:3},16,["id","class"])):R("",!0)}});h.__docgenInfo=Object.assign({displayName:h.name??h.__name},{exportName:"default",displayName:"CommandItem",description:"",tags:{},slots:[{name:"default"}],sourceFiles:["/Users/lord/Documents/Documentation/gwindui.github.io/src/components/command/CommandItem.vue"]});const Me={role:"presentation"},y=g({__name:"CommandList",props:{asChild:{type:Boolean},as:{},class:{}},setup(a){const n=a,m=G(n,"class"),t=le(m);return(o,s)=>(p(),C(e(Se),b({"data-slot":"command-list"},e(t),{class:e(_)("max-h-[300px] scroll-py-1 overflow-x-hidden overflow-y-auto",n.class)}),{default:l(()=>[he("div",Me,[x(o.$slots,"default")])]),_:3},16,["class"]))}});y.__docgenInfo=Object.assign({displayName:y.name??y.__name},{exportName:"default",displayName:"CommandList",description:"",tags:{},slots:[{name:"default"}],sourceFiles:["/Users/lord/Documents/Documentation/gwindui.github.io/src/components/command/CommandList.vue"]});const N=g({__name:"CommandSeparator",props:{orientation:{},decorative:{type:Boolean},asChild:{type:Boolean},as:{},class:{}},setup(a){const n=a,m=G(n,"class");return(t,o)=>(p(),C(e(Ee),b({"data-slot":"command-separator"},e(m),{class:e(_)("bg-border -mx-1 h-px",n.class)}),{default:l(()=>[x(t.$slots,"default")]),_:3},16,["class"]))}});N.__docgenInfo=Object.assign({displayName:N.name??N.__name},{exportName:"default",displayName:"CommandSeparator",description:"",tags:{},slots:[{name:"default"}],sourceFiles:["/Users/lord/Documents/Documentation/gwindui.github.io/src/components/command/CommandSeparator.vue"]});const[M,Oe]=ue("Command"),[Ve,Ae]=ue("CommandGroup"),La={title:"Components/Command",component:c,tags:["autodocs"],parameters:{docs:{description:{component:`
**Command** adalah komponen command palette yang powerful untuk membuat searchable command menu. Sangat berguna untuk keyboard shortcuts, quick actions, atau search dengan filtering.

Terinspirasi dari Command+K interface yang populer di aplikasi modern (VS Code, Linear, Vercel, dll). Command palette memungkinkan user mengakses fungsionalitas dengan cepat via keyboard.

Terdiri dari sub-komponen:
- **\`Command\`** — root container dengan filtering logic
- **\`CommandInput\`** — search input field
- **\`CommandList\`** — scrollable container untuk items
- **\`CommandEmpty\`** — tampilan saat tidak ada hasil
- **\`CommandGroup\`** — group items berdasarkan kategori
- **\`CommandItem\`** — setiap item yang dapat dipilih
- **\`CommandSeparator\`** — separator visual antar groups
- **\`CommandDialog\`** — wrapper Command dalam Dialog untuk popup shortcut

### Penggunaan Dasar
\`\`\`vue
<Command>
  <CommandInput placeholder="Cari command..." />
  <CommandList>
    <CommandEmpty>Tidak ada hasil ditemukan.</CommandEmpty>
    <CommandGroup heading="Actions">
      <CommandItem value="new-file">
        📄 New File
      </CommandItem>
      <CommandItem value="save">
        💾 Save
      </CommandItem>
    </CommandGroup>
  </CommandList>
</Command>
\`\`\`

### Command Dialog (Command+K Style)
\`\`\`vue
<script setup>
import { ref } from 'vue'
const open = ref(false)

// Listen untuk Command+K
onMounted(() => {
  const down = (e) => {
    if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
      e.preventDefault()
      open.value = !open.value
    }
  }
  document.addEventListener('keydown', down)
  return () => document.removeEventListener('keydown', down)
})
<\/script>

<CommandDialog v-model:open="open">
  <CommandInput placeholder="Type a command or search..." />
  <CommandList>
    <CommandEmpty>No results found.</CommandEmpty>
    <CommandGroup heading="Suggestions">
      <CommandItem>Calendar</CommandItem>
      <CommandItem>Search Emoji</CommandItem>
    </CommandGroup>
  </CommandList>
</CommandDialog>
\`\`\`

### Props \`Command\`
| Prop | Tipe | Default | Deskripsi |
|------|------|---------|-----------|
| \`modelValue\` | \`string\` | — | Selected value (v-model) |
| \`searchTerm\` | \`string\` | — | Current search term (v-model:searchTerm) |
| \`filterFunction\` | \`Function\` | built-in | Custom filter function |

### Props \`CommandItem\`
| Prop | Tipe | Deskripsi |
|------|------|-----------|
| \`value\` | \`string\` | Unique identifier untuk item (required) |
| \`disabled\` | \`boolean\` | Nonaktifkan item |
| \`keywords\` | \`string[]\` | Keywords tambahan untuk search matching |

### Features
- ⌨️ **Keyboard navigation**: Arrow keys untuk navigasi, Enter untuk select
- 🔍 **Smart filtering**: Fuzzy search yang toleran typo
- 📱 **Fully accessible**: ARIA compliant untuk screen readers
- 🎨 **Highly customizable**: Style dengan Tailwind atau CSS custom
- ⚡ **Fast**: Optimized untuk banyak items

### Use Cases
- Command palette (Cmd+K)
- Global search
- Quick actions menu  
- Navigation shortcuts
- Autocomplete dengan categories
- Settings searcher

### Best Practices
- Gunakan \`CommandGroup\` untuk kategorisasi yang jelas
- Sertakan keyboard shortcuts indicator pada items
- Tambahkan icons untuk visual cues
- Gunakan \`keywords\` prop untuk meningkatkan searchability
- Limit jumlah results untuk performa (virtual scrolling untuk banyak items)
                `}}},argTypes:{searchTerm:{control:"text",description:"Current search/filter term"},modelValue:{control:"text",description:"Selected item value"}}},P={name:"Basic Command",parameters:{docs:{description:{story:"Command palette dasar dengan beberapa item dan group. Coba ketik untuk melihat filtering in action."}}},render:()=>({components:{Command:c,CommandEmpty:f,CommandGroup:v,CommandInput:I,CommandItem:h,CommandList:y},template:`
      <Command class="rounded-lg border shadow-md max-w-md">
        <CommandInput placeholder="Cari command..." />
        <CommandList>
          <CommandEmpty>Tidak ada hasil ditemukan.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            <CommandItem value="calendar">
              📅 Calendar
            </CommandItem>
            <CommandItem value="search-emoji">
              😀 Search Emoji
            </CommandItem>
            <CommandItem value="calculator">
              🧮 Calculator
            </CommandItem>
          </CommandGroup>
          <CommandGroup heading="Settings">
            <CommandItem value="profile">
              👤 Profile
            </CommandItem>
            <CommandItem value="billing">
              💳 Billing
            </CommandItem>
            <CommandItem value="settings">
              ⚙️ Settings
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    `})},B={name:"With Icons & Shortcuts",parameters:{docs:{description:{story:"Command dengan icons dan keyboard shortcuts indicator. Best practice untuk command palette yang sesungguhnya."}}},render:()=>({components:{Command:c,CommandEmpty:f,CommandGroup:v,CommandInput:I,CommandItem:h,CommandList:y,CommandSeparator:N},template:`
      <Command class="rounded-lg border shadow-md max-w-md">
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="File">
            <CommandItem value="new-file">
              <span class="flex items-center justify-between w-full">
                <span class="flex items-center gap-2">
                  📄 New File
                </span>
                <span class="text-xs text-gray-400">⌘N</span>
              </span>
            </CommandItem>
            <CommandItem value="open-file">
              <span class="flex items-center justify-between w-full">
                <span class="flex items-center gap-2">
                  📂 Open File
                </span>
                <span class="text-xs text-gray-400">⌘O</span>
              </span>
            </CommandItem>
            <CommandItem value="save">
              <span class="flex items-center justify-between w-full">
                <span class="flex items-center gap-2">
                  💾 Save
                </span>
                <span class="text-xs text-gray-400">⌘S</span>
              </span>
            </CommandItem>
          </CommandGroup>
          
          <CommandSeparator />
          
          <CommandGroup heading="Edit">
            <CommandItem value="undo">
              <span class="flex items-center justify-between w-full">
                <span class="flex items-center gap-2">
                  ↶ Undo
                </span>
                <span class="text-xs text-gray-400">⌘Z</span>
              </span>
            </CommandItem>
            <CommandItem value="redo">
              <span class="flex items-center justify-between w-full">
                <span class="flex items-center gap-2">
                  ↷ Redo
                </span>
                <span class="text-xs text-gray-400">⌘⇧Z</span>
              </span>
            </CommandItem>
            <CommandItem value="find">
              <span class="flex items-center justify-between w-full">
                <span class="flex items-center gap-2">
                  🔍 Find
                </span>
                <span class="text-xs text-gray-400">⌘F</span>
              </span>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    `})},F={name:"Command Dialog (Cmd+K)",parameters:{docs:{description:{story:"Command Dialog yang dapat dibuka dengan shortcut Cmd+K (atau Ctrl+K di Windows/Linux). Klik tombol atau tekan Cmd+K untuk membuka."}}},render:()=>({components:{CommandDialog:$,CommandEmpty:f,CommandGroup:v,CommandInput:I,CommandItem:h,CommandList:y,GButton:De},setup(){const a={value:!1};if(typeof window<"u"){const n=m=>{m.key==="k"&&(m.metaKey||m.ctrlKey)&&(m.preventDefault(),a.value=!a.value)};document.addEventListener("keydown",n)}return{open:a}},template:`
      <div>
        <div class="flex items-center gap-2">
          <GButton variant="outline" @click="open.value = true">
            Open Command Menu
          </GButton>
          <span class="text-sm text-gray-500">
            atau tekan <kbd class="px-2 py-1 bg-gray-100 rounded border">⌘K</kbd>
          </span>
        </div>
        
        <CommandDialog v-model:open="open.value">
          <CommandInput placeholder="Type a command or search..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Quick Actions">
              <CommandItem value="new-project">
                ➕ New Project
              </CommandItem>
              <CommandItem value="new-team">
                👥 New Team
              </CommandItem>
              <CommandItem value="invite-user">
                ✉️ Invite User
              </CommandItem>
            </CommandGroup>
            <CommandGroup heading="Navigation">
              <CommandItem value="dashboard">
                🏠 Dashboard
              </CommandItem>
              <CommandItem value="projects">
                📁 Projects
              </CommandItem>
              <CommandItem value="team">
                👥 Team
              </CommandItem>
              <CommandItem value="settings">
                ⚙️ Settings
              </CommandItem>
            </CommandGroup>
            <CommandGroup heading="Support">
              <CommandItem value="docs">
                📚 Documentation
              </CommandItem>
              <CommandItem value="help">
                ❓ Help Center
              </CommandItem>
              <CommandItem value="feedback">
                💬 Send Feedback
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </CommandDialog>
      </div>
    `})},T={name:"Navigation Menu",parameters:{docs:{description:{story:"Command sebagai navigation menu dengan multiple groups dan banyak items. Excellent untuk global navigation."}}},render:()=>({components:{Command:c,CommandEmpty:f,CommandGroup:v,CommandInput:I,CommandItem:h,CommandList:y,CommandSeparator:N},template:`
      <Command class="rounded-lg border shadow-md max-w-md">
        <CommandInput placeholder="Cari halaman..." />
        <CommandList>
          <CommandEmpty>Tidak ada halaman ditemukan.</CommandEmpty>
          <CommandGroup heading="Main">
            <CommandItem value="home">🏠 Home</CommandItem>
            <CommandItem value="about">ℹ️ About</CommandItem>
            <CommandItem value="contact">📧 Contact</CommandItem>
          </CommandGroup>
          
          <CommandSeparator />
          
          <CommandGroup heading="Products">
            <CommandItem value="products">🛍️ All Products</CommandItem>
            <CommandItem value="electronics">💻 Electronics</CommandItem>
            <CommandItem value="fashion">👔 Fashion</CommandItem>
            <CommandItem value="food">🍔 Food & Beverage</CommandItem>
            <CommandItem value="books">📚 Books</CommandItem>
          </CommandGroup>
          
          <CommandSeparator />
          
          <CommandGroup heading="Account">
            <CommandItem value="profile">👤 My Profile</CommandItem>
            <CommandItem value="orders">📦 My Orders</CommandItem>
            <CommandItem value="wishlist">❤️ Wishlist</CommandItem>
            <CommandItem value="settings">⚙️ Settings</CommandItem>
          </CommandGroup>
          
          <CommandSeparator />
          
          <CommandGroup heading="Help">
            <CommandItem value="faq">❓ FAQ</CommandItem>
            <CommandItem value="support">🆘 Support</CommandItem>
            <CommandItem value="terms">📜 Terms & Conditions</CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    `})},K={name:"Search with Categories",parameters:{docs:{description:{story:"Command palette untuk search dengan hasil dari berbagai kategori. Pattern ini bagus untuk universal search di aplikasi."}}},render:()=>({components:{Command:c,CommandEmpty:f,CommandGroup:v,CommandInput:I,CommandItem:h,CommandList:y},template:`
      <Command class="rounded-lg border shadow-md max-w-md">
        <CommandInput placeholder="Search everywhere..." />
        <CommandList>
          <CommandEmpty>
            <div class="text-center py-6">
              <p class="text-gray-500">No results found.</p>
              <p class="text-sm text-gray-400 mt-1">Try different keywords</p>
            </div>
          </CommandEmpty>
          
          <CommandGroup heading="👥 People">
            <CommandItem value="john-doe">
              <div>
                <div class="font-medium">John Doe</div>
                <div class="text-xs text-gray-500">john.doe@example.com</div>
              </div>
            </CommandItem>
            <CommandItem value="jane-smith">
              <div>
                <div class="font-medium">Jane Smith</div>
                <div class="text-xs text-gray-500">jane.smith@example.com</div>
              </div>
            </CommandItem>
          </CommandGroup>
          
          <CommandGroup heading="📁 Projects">
            <CommandItem value="project-alpha">
              <div>
                <div class="font-medium">Project Alpha</div>
                <div class="text-xs text-gray-500">Last updated 2 days ago</div>
              </div>
            </CommandItem>
            <CommandItem value="project-beta">
              <div>
                <div class="font-medium">Project Beta</div>
                <div class="text-xs text-gray-500">Last updated 1 week ago</div>
              </div>
            </CommandItem>
          </CommandGroup>
          
          <CommandGroup heading="📄 Documents">
            <CommandItem value="quarterly-report">
              <div>
                <div class="font-medium">Quarterly Report Q4 2025</div>
                <div class="text-xs text-gray-500">PDF • 2.4 MB</div>
              </div>
            </CommandItem>
            <CommandItem value="meeting-notes">
              <div>
                <div class="font-medium">Meeting Notes - Jan 2026</div>
                <div class="text-xs text-gray-500">Document • 145 KB</div>
              </div>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    `})};var Q,W,H;P.parameters={...P.parameters,docs:{...(Q=P.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  name: "Basic Command",
  parameters: {
    docs: {
      description: {
        story: "Command palette dasar dengan beberapa item dan group. Coba ketik untuk melihat filtering in action."
      }
    }
  },
  render: () => ({
    components: {
      Command,
      CommandEmpty,
      CommandGroup,
      CommandInput,
      CommandItem,
      CommandList
    },
    template: \`
      <Command class="rounded-lg border shadow-md max-w-md">
        <CommandInput placeholder="Cari command..." />
        <CommandList>
          <CommandEmpty>Tidak ada hasil ditemukan.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            <CommandItem value="calendar">
              📅 Calendar
            </CommandItem>
            <CommandItem value="search-emoji">
              😀 Search Emoji
            </CommandItem>
            <CommandItem value="calculator">
              🧮 Calculator
            </CommandItem>
          </CommandGroup>
          <CommandGroup heading="Settings">
            <CommandItem value="profile">
              👤 Profile
            </CommandItem>
            <CommandItem value="billing">
              💳 Billing
            </CommandItem>
            <CommandItem value="settings">
              ⚙️ Settings
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    \`
  })
}`,...(H=(W=P.parameters)==null?void 0:W.docs)==null?void 0:H.source}}};var J,Z,X;B.parameters={...B.parameters,docs:{...(J=B.parameters)==null?void 0:J.docs,source:{originalSource:`{
  name: "With Icons & Shortcuts",
  parameters: {
    docs: {
      description: {
        story: "Command dengan icons dan keyboard shortcuts indicator. Best practice untuk command palette yang sesungguhnya."
      }
    }
  },
  render: () => ({
    components: {
      Command,
      CommandEmpty,
      CommandGroup,
      CommandInput,
      CommandItem,
      CommandList,
      CommandSeparator
    },
    template: \`
      <Command class="rounded-lg border shadow-md max-w-md">
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="File">
            <CommandItem value="new-file">
              <span class="flex items-center justify-between w-full">
                <span class="flex items-center gap-2">
                  📄 New File
                </span>
                <span class="text-xs text-gray-400">⌘N</span>
              </span>
            </CommandItem>
            <CommandItem value="open-file">
              <span class="flex items-center justify-between w-full">
                <span class="flex items-center gap-2">
                  📂 Open File
                </span>
                <span class="text-xs text-gray-400">⌘O</span>
              </span>
            </CommandItem>
            <CommandItem value="save">
              <span class="flex items-center justify-between w-full">
                <span class="flex items-center gap-2">
                  💾 Save
                </span>
                <span class="text-xs text-gray-400">⌘S</span>
              </span>
            </CommandItem>
          </CommandGroup>
          
          <CommandSeparator />
          
          <CommandGroup heading="Edit">
            <CommandItem value="undo">
              <span class="flex items-center justify-between w-full">
                <span class="flex items-center gap-2">
                  ↶ Undo
                </span>
                <span class="text-xs text-gray-400">⌘Z</span>
              </span>
            </CommandItem>
            <CommandItem value="redo">
              <span class="flex items-center justify-between w-full">
                <span class="flex items-center gap-2">
                  ↷ Redo
                </span>
                <span class="text-xs text-gray-400">⌘⇧Z</span>
              </span>
            </CommandItem>
            <CommandItem value="find">
              <span class="flex items-center justify-between w-full">
                <span class="flex items-center gap-2">
                  🔍 Find
                </span>
                <span class="text-xs text-gray-400">⌘F</span>
              </span>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    \`
  })
}`,...(X=(Z=B.parameters)==null?void 0:Z.docs)==null?void 0:X.source}}};var Y,ee,ae;F.parameters={...F.parameters,docs:{...(Y=F.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  name: "Command Dialog (Cmd+K)",
  parameters: {
    docs: {
      description: {
        story: "Command Dialog yang dapat dibuka dengan shortcut Cmd+K (atau Ctrl+K di Windows/Linux). Klik tombol atau tekan Cmd+K untuk membuka."
      }
    }
  },
  render: () => ({
    components: {
      CommandDialog,
      CommandEmpty,
      CommandGroup,
      CommandInput,
      CommandItem,
      CommandList,
      GButton
    },
    setup() {
      const open = {
        value: false
      };

      // Listen to Cmd+K
      if (typeof window !== 'undefined') {
        const down = (e: KeyboardEvent) => {
          if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
            e.preventDefault();
            open.value = !open.value;
          }
        };
        document.addEventListener('keydown', down);
      }
      return {
        open
      };
    },
    template: \`
      <div>
        <div class="flex items-center gap-2">
          <GButton variant="outline" @click="open.value = true">
            Open Command Menu
          </GButton>
          <span class="text-sm text-gray-500">
            atau tekan <kbd class="px-2 py-1 bg-gray-100 rounded border">⌘K</kbd>
          </span>
        </div>
        
        <CommandDialog v-model:open="open.value">
          <CommandInput placeholder="Type a command or search..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Quick Actions">
              <CommandItem value="new-project">
                ➕ New Project
              </CommandItem>
              <CommandItem value="new-team">
                👥 New Team
              </CommandItem>
              <CommandItem value="invite-user">
                ✉️ Invite User
              </CommandItem>
            </CommandGroup>
            <CommandGroup heading="Navigation">
              <CommandItem value="dashboard">
                🏠 Dashboard
              </CommandItem>
              <CommandItem value="projects">
                📁 Projects
              </CommandItem>
              <CommandItem value="team">
                👥 Team
              </CommandItem>
              <CommandItem value="settings">
                ⚙️ Settings
              </CommandItem>
            </CommandGroup>
            <CommandGroup heading="Support">
              <CommandItem value="docs">
                📚 Documentation
              </CommandItem>
              <CommandItem value="help">
                ❓ Help Center
              </CommandItem>
              <CommandItem value="feedback">
                💬 Send Feedback
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </CommandDialog>
      </div>
    \`
  })
}`,...(ae=(ee=F.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};var ne,me,te;T.parameters={...T.parameters,docs:{...(ne=T.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  name: "Navigation Menu",
  parameters: {
    docs: {
      description: {
        story: "Command sebagai navigation menu dengan multiple groups dan banyak items. Excellent untuk global navigation."
      }
    }
  },
  render: () => ({
    components: {
      Command,
      CommandEmpty,
      CommandGroup,
      CommandInput,
      CommandItem,
      CommandList,
      CommandSeparator
    },
    template: \`
      <Command class="rounded-lg border shadow-md max-w-md">
        <CommandInput placeholder="Cari halaman..." />
        <CommandList>
          <CommandEmpty>Tidak ada halaman ditemukan.</CommandEmpty>
          <CommandGroup heading="Main">
            <CommandItem value="home">🏠 Home</CommandItem>
            <CommandItem value="about">ℹ️ About</CommandItem>
            <CommandItem value="contact">📧 Contact</CommandItem>
          </CommandGroup>
          
          <CommandSeparator />
          
          <CommandGroup heading="Products">
            <CommandItem value="products">🛍️ All Products</CommandItem>
            <CommandItem value="electronics">💻 Electronics</CommandItem>
            <CommandItem value="fashion">👔 Fashion</CommandItem>
            <CommandItem value="food">🍔 Food & Beverage</CommandItem>
            <CommandItem value="books">📚 Books</CommandItem>
          </CommandGroup>
          
          <CommandSeparator />
          
          <CommandGroup heading="Account">
            <CommandItem value="profile">👤 My Profile</CommandItem>
            <CommandItem value="orders">📦 My Orders</CommandItem>
            <CommandItem value="wishlist">❤️ Wishlist</CommandItem>
            <CommandItem value="settings">⚙️ Settings</CommandItem>
          </CommandGroup>
          
          <CommandSeparator />
          
          <CommandGroup heading="Help">
            <CommandItem value="faq">❓ FAQ</CommandItem>
            <CommandItem value="support">🆘 Support</CommandItem>
            <CommandItem value="terms">📜 Terms & Conditions</CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    \`
  })
}`,...(te=(me=T.parameters)==null?void 0:me.docs)==null?void 0:te.source}}};var oe,se,de;K.parameters={...K.parameters,docs:{...(oe=K.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  name: "Search with Categories",
  parameters: {
    docs: {
      description: {
        story: "Command palette untuk search dengan hasil dari berbagai kategori. Pattern ini bagus untuk universal search di aplikasi."
      }
    }
  },
  render: () => ({
    components: {
      Command,
      CommandEmpty,
      CommandGroup,
      CommandInput,
      CommandItem,
      CommandList
    },
    template: \`
      <Command class="rounded-lg border shadow-md max-w-md">
        <CommandInput placeholder="Search everywhere..." />
        <CommandList>
          <CommandEmpty>
            <div class="text-center py-6">
              <p class="text-gray-500">No results found.</p>
              <p class="text-sm text-gray-400 mt-1">Try different keywords</p>
            </div>
          </CommandEmpty>
          
          <CommandGroup heading="👥 People">
            <CommandItem value="john-doe">
              <div>
                <div class="font-medium">John Doe</div>
                <div class="text-xs text-gray-500">john.doe@example.com</div>
              </div>
            </CommandItem>
            <CommandItem value="jane-smith">
              <div>
                <div class="font-medium">Jane Smith</div>
                <div class="text-xs text-gray-500">jane.smith@example.com</div>
              </div>
            </CommandItem>
          </CommandGroup>
          
          <CommandGroup heading="📁 Projects">
            <CommandItem value="project-alpha">
              <div>
                <div class="font-medium">Project Alpha</div>
                <div class="text-xs text-gray-500">Last updated 2 days ago</div>
              </div>
            </CommandItem>
            <CommandItem value="project-beta">
              <div>
                <div class="font-medium">Project Beta</div>
                <div class="text-xs text-gray-500">Last updated 1 week ago</div>
              </div>
            </CommandItem>
          </CommandGroup>
          
          <CommandGroup heading="📄 Documents">
            <CommandItem value="quarterly-report">
              <div>
                <div class="font-medium">Quarterly Report Q4 2025</div>
                <div class="text-xs text-gray-500">PDF • 2.4 MB</div>
              </div>
            </CommandItem>
            <CommandItem value="meeting-notes">
              <div>
                <div class="font-medium">Meeting Notes - Jan 2026</div>
                <div class="text-xs text-gray-500">Document • 145 KB</div>
              </div>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    \`
  })
}`,...(de=(se=K.parameters)==null?void 0:se.docs)==null?void 0:de.source}}};const Ea=["Default","WithIcons","CommandDialogExample","NavigationMenu","SearchWithCategories"];export{F as CommandDialogExample,P as Default,T as NavigationMenu,K as SearchWithCategories,B as WithIcons,Ea as __namedExportsOrder,La as default};
