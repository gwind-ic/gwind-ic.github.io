import{D as G,a as t,b as s,c as i}from"./Drawer-Cm0-50Kw.js";import{_ as B}from"./Textarea-vlgc0QAD.js";import{_ as x}from"./input-BOzjOkBt.js";import{_ as k}from"./Label-C_sgV46U.js";import{_ as o}from"./button-Cr1_wFBW.js";import{_ as l}from"./DialogTrigger-B-nSDdMv.js";import{_ as d}from"./Dialog-CZx4OiSx.js";import{_ as C}from"./Radio-CLXkVRMl.js";import{_ as L}from"./Checkbox-Bha-54W6.js";import"./iframe-c4IY6zQp.js";import"./preload-helper-DKj51lX3.js";import"./utils-DFIdVO4u.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./GIcon-BXuKvWrh.js";import"./g-icon-cross-C_9ug1ue.js";import"./index-BxO9e2AK.js";import"./index-6HqQR1st.js";import"./Label-6-ZEx3t5.js";import"./useForwardExpose-Cr5jnkZA.js";import"./Primitive-jOHN3RPP.js";import"./index-QLIpZy2_.js";import"./DialogTrigger-AmHBbxnF.js";import"./useId--nAmYTv4.js";import"./DialogRoot-Blci9B0U.js";import"./createContext-cRkaqZ4A.js";import"./useForwardPropsEmits-T2W0pCxY.js";import"./RovingFocusItem-CMajk1bk.js";import"./Collection-gwCc-hQ9.js";import"./usePrimitiveElement-o7raP3zM.js";import"./utils-CC-pqV_U.js";import"./getActiveElement-FUKBWQwh.js";import"./RovingFocusGroup-B8aXtVZm.js";import"./useDirection-Cgdaowgg.js";import"./ConfigProvider-C_xfuhRi.js";import"./useFormControl-B0k9zZ1q.js";import"./VisuallyHiddenInput-B4N5EJyq.js";import"./VisuallyHidden-JucKU3iS.js";import"./handleAndDispatchCustomEvent-ChOKVcqp.js";import"./ohash.D__AXeF1-Cq3NGnZa.js";import"./Presence-B-TJz0M4.js";import"./Check-DwCStHvC.js";import"./nullish-CHIgUVhi.js";import"./isValueEqualOrExist-DvmIGGK4.js";const Da={title:"Components/Drawer",component:G,tags:["autodocs"],parameters:{docs:{description:{component:`
**Drawer** adalah komponen panel yang muncul dari sisi layar (biasanya dari kiri, kanan, atas, atau bawah). Drawer berguna untuk menampilkan konten tambahan, navigasi, atau form tanpa meninggalkan konteks halaman utama.

Berbeda dengan Dialog yang muncul di tengah, Drawer muncul dari salah satu sisi viewport dan cocok untuk mobile-first design atau side navigation.

Terdiri dari sub-komponen:
- **\`Drawer\`** / **\`Dialog\`** — root container (menggunakan Dialog dari Reka UI)
- **\`DialogTrigger\`** — elemen pemicu drawer
- **\`DrawerOverlay\`** — overlay gelap di belakang drawer
- **\`DrawerContent\`** — container konten drawer
- **\`DrawerHeader\`** — header drawer dengan judul

### Penggunaan Dasar
\`\`\`vue
<Dialog>
  <DialogTrigger asChild>
    <GButton>Open Drawer</GButton>
  </DialogTrigger>
  <DrawerOverlay />
  <DrawerContent>
    <DrawerHeader>
      <h2>Drawer Title</h2>
    </DrawerHeader>
    <div class="p-4">
      <!-- Drawer content -->
    </div>
  </DrawerContent>
</Dialog>
\`\`\`

### Posisi Drawer
Drawer dapat muncul dari berbagai sisi:
- **Right** (default): Dari kanan layar
- **Left**: Dari kiri layar
- **Top**: Dari atas layar
- **Bottom**: Dari bawah layar (cocok untuk mobile)

### Props \`Dialog\`
| Prop | Tipe | Default | Deskripsi |
|------|------|---------|-----------|
| \`open\` | \`boolean\` | — | Kontrol state terbuka/tertutup (v-model:open) |
| \`defaultOpen\` | \`boolean\` | \`false\` | State awal saat mount |
| \`modal\` | \`boolean\` | \`true\` | Apakah drawer bersifat modal |

### Use Cases
- Side navigation menu
- Filter panel pada e-commerce
- Shopping cart slide-out
- Form atau wizard multi-step
- Detail view yang tidak perlu full page
- Mobile menu

### Best Practices
- Gunakan untuk konten yang relevan dengan konteks halaman
- Jangan terlalu banyak konten dalam drawer (pertimbangkan page baru)
- Pastikan drawer dapat ditutup dengan mudah (overlay click, ESC, atau close button)
- Untuk mobile, pertimbangkan drawer dari bawah (bottom sheet)
- Gunakan animasi yang smooth untuk UX yang lebih baik
                `}}},argTypes:{open:{control:"boolean",description:"Kontrol state drawer terbuka/tertutup"}}},a={name:"Right Drawer",parameters:{docs:{description:{story:"Drawer yang muncul dari sisi kanan layar. Ini adalah posisi default dan paling umum untuk drawer."}}},render:()=>({components:{Dialog:d,DialogTrigger:l,Drawer:G,DrawerContent:i,DrawerHeader:s,DrawerOverlay:t,GButton:o,GLabel:k,GInput:x,GTextarea:B},template:`
      <Dialog>
        <DialogTrigger as-child>
          <GButton variant="primary">Open Right Drawer</GButton>
        </DialogTrigger>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader>
            <h2 class="text-xl font-semibold">Drawer Header</h2>
          </DrawerHeader>
          <div class="p-6">
            <h3 class="font-semibold mb-2">Drawer Content</h3>
            <p class="text-gray-600 mb-4">
              Ini adalah konten drawer. Anda dapat menempatkan form, list, atau konten apapun di sini.
            </p>
            <div class="space-y-4">
              <div>
                <GLabel class="block text-sm font-medium mb-1">Nama</GLabel>
                <GInput type="text" placeholder="Masukkan nama" class="w-full" />
              </div>
              <div>
                <GLabel class="block text-sm font-medium mb-1">Email</GLabel>
                <GInput type="email" placeholder="email@example.com" class="w-full" />
              </div>
              <div>
                <GLabel class="block text-sm font-medium mb-1">Pesan</GLabel>
                <GTextarea placeholder="Tulis pesan..." class="w-full min-h-[100px]" />
              </div>
              <div class="flex gap-2">
                <GButton variant="primary" class="flex-1">Kirim</GButton>
                <GButton variant="outline" class="flex-1">Batal</GButton>
              </div>
            </div>
          </div>
        </DrawerContent>
      </Dialog>
    `})},e={name:"Navigation Menu",parameters:{docs:{description:{story:"Drawer yang berisi menu navigasi. Cocok untuk mobile menu atau side navigation pada aplikasi."}}},render:()=>({components:{Dialog:d,DialogTrigger:l,DrawerContent:i,DrawerHeader:s,DrawerOverlay:t,GButton:o},template:`
      <Dialog>
        <DialogTrigger as-child>
          <GButton variant="outline">☰ Menu</GButton>
        </DialogTrigger>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader>
            <h2 class="text-xl font-bold">Navigation</h2>
          </DrawerHeader>
          <nav class="p-4">
            <ul class="space-y-2">
              <li>
                <a href="#" class="block px-4 py-3 rounded hover:bg-gray-100 font-medium">
                  🏠 Dashboard
                </a>
              </li>
              <li>
                <a href="#" class="block px-4 py-3 rounded hover:bg-gray-100">
                  📊 Analytics
                </a>
              </li>
              <li>
                <a href="#" class="block px-4 py-3 rounded hover:bg-gray-100">
                  👥 Users
                </a>
              </li>
              <li>
                <a href="#" class="block px-4 py-3 rounded hover:bg-gray-100">
                  ⚙️ Settings
                </a>
              </li>
              <li>
                <a href="#" class="block px-4 py-3 rounded hover:bg-gray-100">
                  📝 Reports
                </a>
              </li>
              <li class="pt-4 mt-4 border-t">
                <a href="#" class="block px-4 py-3 rounded hover:bg-gray-100 text-red-600">
                  🚪 Logout
                </a>
              </li>
            </ul>
          </nav>
        </DrawerContent>
      </Dialog>
    `})},n={name:"Filter Panel",parameters:{docs:{description:{story:"Drawer yang berisi filter options. Sangat berguna pada halaman e-commerce, search, atau data listing."}}},render:()=>({components:{Dialog:d,DialogTrigger:l,DrawerContent:i,DrawerHeader:s,DrawerOverlay:t,GButton:o,GLabel:k,GInput:x,GCheckBox:L,GRadio:C},template:`
      <Dialog>
        <DialogTrigger as-child>
          <GButton variant="outline">🔍 Filter</GButton>
        </DialogTrigger>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader>
            <h2 class="text-xl font-semibold">Filter Products</h2>
          </DrawerHeader>
          <div class="p-6 space-y-6">
            <div>
              <h3 class="font-semibold mb-3">Kategori</h3>
              <div class="space-y-2">
                <GLabel class="flex items-center gap-2">
                  <GCheckBox class="rounded" />
                  <span>Elektronik</span>
                </GLabel>
                <GLabel class="flex items-center gap-2">
                  <GCheckBox class="rounded" />
                  <span>Fashion</span>
                </GLabel>
                <GLabel class="flex items-center gap-2">
                  <GCheckBox class="rounded" />
                  <span>Makanan</span>
                </GLabel>
              </div>
            </div>
            
            <div>
              <h3 class="font-semibold mb-3">Rentang Harga</h3>
              <div class="flex gap-2 items-center">
                <GInput type="number" placeholder="Min" class="w-full" />
                <span>-</span>
                <GInput type="number" placeholder="Max" class="w-full" />
              </div>
            </div>
            
            <div>
              <h3 class="font-semibold mb-3">Rating</h3>
              <div class="space-y-2">
                <GLabel class="flex items-center gap-2">
                  <GRadio name="rating" />
                  <span>⭐⭐⭐⭐⭐ 5 Stars</span>
                </GLabel>
                <GLabel class="flex items-center gap-2">
                  <GRadio name="rating" />
                  <span>⭐⭐⭐⭐ 4+ Stars</span>
                </GLabel>
                <GLabel class="flex items-center gap-2">
                  <GRadio name="rating" />
                  <span>⭐⭐⭐ 3+ Stars</span>
                </GLabel>
              </div>
            </div>
            
            <div class="flex gap-2 pt-4 border-t">
              <GButton variant="outline" class="flex-1">Reset</GButton>
              <GButton variant="primary" class="flex-1">Terapkan Filter</GButton>
            </div>
          </div>
        </DrawerContent>
      </Dialog>
    `})},r={name:"Shopping Cart",parameters:{docs:{description:{story:"Drawer yang menampilkan shopping cart. Pattern umum pada e-commerce untuk quick view cart tanpa meninggalkan halaman produk."}}},render:()=>({components:{Dialog:d,DialogTrigger:l,DrawerContent:i,DrawerHeader:s,DrawerOverlay:t,GButton:o},template:`
      <Dialog>
        <DialogTrigger as-child>
          <GButton variant="primary">🛒 Cart (3)</GButton>
        </DialogTrigger>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader>
            <h2 class="text-xl font-semibold">Shopping Cart</h2>
          </DrawerHeader>
          <div class="flex flex-col h-full">
            <div class="flex-1 overflow-y-auto p-6 space-y-4">
              <div class="flex gap-4 p-3 border rounded">
                <div class="w-16 h-16 bg-gray-200 rounded"></div>
                <div class="flex-1">
                  <h4 class="font-medium">Product Name 1</h4>
                  <p class="text-sm text-gray-600">Size: M, Color: Blue</p>
                  <p class="font-semibold mt-1">Rp 150.000</p>
                </div>
                <GButton variant="ghost" class="text-red-500 hover:bg-red-50">×</GButton>
              </div>
              
              <div class="flex gap-4 p-3 border rounded">
                <div class="w-16 h-16 bg-gray-200 rounded"></div>
                <div class="flex-1">
                  <h4 class="font-medium">Product Name 2</h4>
                  <p class="text-sm text-gray-600">Size: L</p>
                  <p class="font-semibold mt-1">Rp 200.000</p>
                </div>
                <GButton variant="ghost" class="text-red-500 hover:bg-red-50">×</GButton>
              </div>
              
              <div class="flex gap-4 p-3 border rounded">
                <div class="w-16 h-16 bg-gray-200 rounded"></div>
                <div class="flex-1">
                  <h4 class="font-medium">Product Name 3</h4>
                  <p class="text-sm text-gray-600">Quantity: 2</p>
                  <p class="font-semibold mt-1">Rp 100.000</p>
                </div>
                <GButton variant="ghost" class="text-red-500 hover:bg-red-50">×</GButton>
              </div>
            </div>
            
            <div class="border-t p-6 bg-gray-50">
              <div class="space-y-2 mb-4">
                <div class="flex justify-between">
                  <span>Subtotal</span>
                  <span>Rp 450.000</span>
                </div>
                <div class="flex justify-between">
                  <span>Ongkir</span>
                  <span>Rp 20.000</span>
                </div>
                <div class="flex justify-between font-bold text-lg pt-2 border-t">
                  <span>Total</span>
                  <span>Rp 470.000</span>
                </div>
              </div>
              <GButton variant="primary" class="w-full">Checkout</GButton>
            </div>
          </div>
        </DrawerContent>
      </Dialog>
    `})};var p,c,m;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: "Right Drawer",
  parameters: {
    docs: {
      description: {
        story: "Drawer yang muncul dari sisi kanan layar. Ini adalah posisi default dan paling umum untuk drawer."
      }
    }
  },
  render: () => ({
    components: {
      Dialog,
      DialogTrigger,
      Drawer,
      DrawerContent,
      DrawerHeader,
      DrawerOverlay,
      GButton,
      GLabel,
      GInput,
      GTextarea
    },
    template: \`
      <Dialog>
        <DialogTrigger as-child>
          <GButton variant="primary">Open Right Drawer</GButton>
        </DialogTrigger>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader>
            <h2 class="text-xl font-semibold">Drawer Header</h2>
          </DrawerHeader>
          <div class="p-6">
            <h3 class="font-semibold mb-2">Drawer Content</h3>
            <p class="text-gray-600 mb-4">
              Ini adalah konten drawer. Anda dapat menempatkan form, list, atau konten apapun di sini.
            </p>
            <div class="space-y-4">
              <div>
                <GLabel class="block text-sm font-medium mb-1">Nama</GLabel>
                <GInput type="text" placeholder="Masukkan nama" class="w-full" />
              </div>
              <div>
                <GLabel class="block text-sm font-medium mb-1">Email</GLabel>
                <GInput type="email" placeholder="email@example.com" class="w-full" />
              </div>
              <div>
                <GLabel class="block text-sm font-medium mb-1">Pesan</GLabel>
                <GTextarea placeholder="Tulis pesan..." class="w-full min-h-[100px]" />
              </div>
              <div class="flex gap-2">
                <GButton variant="primary" class="flex-1">Kirim</GButton>
                <GButton variant="outline" class="flex-1">Batal</GButton>
              </div>
            </div>
          </div>
        </DrawerContent>
      </Dialog>
    \`
  })
}`,...(m=(c=a.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var u,g,v;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: "Navigation Menu",
  parameters: {
    docs: {
      description: {
        story: "Drawer yang berisi menu navigasi. Cocok untuk mobile menu atau side navigation pada aplikasi."
      }
    }
  },
  render: () => ({
    components: {
      Dialog,
      DialogTrigger,
      DrawerContent,
      DrawerHeader,
      DrawerOverlay,
      GButton
    },
    template: \`
      <Dialog>
        <DialogTrigger as-child>
          <GButton variant="outline">☰ Menu</GButton>
        </DialogTrigger>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader>
            <h2 class="text-xl font-bold">Navigation</h2>
          </DrawerHeader>
          <nav class="p-4">
            <ul class="space-y-2">
              <li>
                <a href="#" class="block px-4 py-3 rounded hover:bg-gray-100 font-medium">
                  🏠 Dashboard
                </a>
              </li>
              <li>
                <a href="#" class="block px-4 py-3 rounded hover:bg-gray-100">
                  📊 Analytics
                </a>
              </li>
              <li>
                <a href="#" class="block px-4 py-3 rounded hover:bg-gray-100">
                  👥 Users
                </a>
              </li>
              <li>
                <a href="#" class="block px-4 py-3 rounded hover:bg-gray-100">
                  ⚙️ Settings
                </a>
              </li>
              <li>
                <a href="#" class="block px-4 py-3 rounded hover:bg-gray-100">
                  📝 Reports
                </a>
              </li>
              <li class="pt-4 mt-4 border-t">
                <a href="#" class="block px-4 py-3 rounded hover:bg-gray-100 text-red-600">
                  🚪 Logout
                </a>
              </li>
            </ul>
          </nav>
        </DrawerContent>
      </Dialog>
    \`
  })
}`,...(v=(g=e.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};var b,D,h;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: "Filter Panel",
  parameters: {
    docs: {
      description: {
        story: "Drawer yang berisi filter options. Sangat berguna pada halaman e-commerce, search, atau data listing."
      }
    }
  },
  render: () => ({
    components: {
      Dialog,
      DialogTrigger,
      DrawerContent,
      DrawerHeader,
      DrawerOverlay,
      GButton,
      GLabel,
      GInput,
      GCheckBox,
      GRadio
    },
    template: \`
      <Dialog>
        <DialogTrigger as-child>
          <GButton variant="outline">🔍 Filter</GButton>
        </DialogTrigger>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader>
            <h2 class="text-xl font-semibold">Filter Products</h2>
          </DrawerHeader>
          <div class="p-6 space-y-6">
            <div>
              <h3 class="font-semibold mb-3">Kategori</h3>
              <div class="space-y-2">
                <GLabel class="flex items-center gap-2">
                  <GCheckBox class="rounded" />
                  <span>Elektronik</span>
                </GLabel>
                <GLabel class="flex items-center gap-2">
                  <GCheckBox class="rounded" />
                  <span>Fashion</span>
                </GLabel>
                <GLabel class="flex items-center gap-2">
                  <GCheckBox class="rounded" />
                  <span>Makanan</span>
                </GLabel>
              </div>
            </div>
            
            <div>
              <h3 class="font-semibold mb-3">Rentang Harga</h3>
              <div class="flex gap-2 items-center">
                <GInput type="number" placeholder="Min" class="w-full" />
                <span>-</span>
                <GInput type="number" placeholder="Max" class="w-full" />
              </div>
            </div>
            
            <div>
              <h3 class="font-semibold mb-3">Rating</h3>
              <div class="space-y-2">
                <GLabel class="flex items-center gap-2">
                  <GRadio name="rating" />
                  <span>⭐⭐⭐⭐⭐ 5 Stars</span>
                </GLabel>
                <GLabel class="flex items-center gap-2">
                  <GRadio name="rating" />
                  <span>⭐⭐⭐⭐ 4+ Stars</span>
                </GLabel>
                <GLabel class="flex items-center gap-2">
                  <GRadio name="rating" />
                  <span>⭐⭐⭐ 3+ Stars</span>
                </GLabel>
              </div>
            </div>
            
            <div class="flex gap-2 pt-4 border-t">
              <GButton variant="outline" class="flex-1">Reset</GButton>
              <GButton variant="primary" class="flex-1">Terapkan Filter</GButton>
            </div>
          </div>
        </DrawerContent>
      </Dialog>
    \`
  })
}`,...(h=(D=n.parameters)==null?void 0:D.docs)==null?void 0:h.source}}};var f,w,y;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: "Shopping Cart",
  parameters: {
    docs: {
      description: {
        story: "Drawer yang menampilkan shopping cart. Pattern umum pada e-commerce untuk quick view cart tanpa meninggalkan halaman produk."
      }
    }
  },
  render: () => ({
    components: {
      Dialog,
      DialogTrigger,
      DrawerContent,
      DrawerHeader,
      DrawerOverlay,
      GButton
    },
    template: \`
      <Dialog>
        <DialogTrigger as-child>
          <GButton variant="primary">🛒 Cart (3)</GButton>
        </DialogTrigger>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader>
            <h2 class="text-xl font-semibold">Shopping Cart</h2>
          </DrawerHeader>
          <div class="flex flex-col h-full">
            <div class="flex-1 overflow-y-auto p-6 space-y-4">
              <div class="flex gap-4 p-3 border rounded">
                <div class="w-16 h-16 bg-gray-200 rounded"></div>
                <div class="flex-1">
                  <h4 class="font-medium">Product Name 1</h4>
                  <p class="text-sm text-gray-600">Size: M, Color: Blue</p>
                  <p class="font-semibold mt-1">Rp 150.000</p>
                </div>
                <GButton variant="ghost" class="text-red-500 hover:bg-red-50">×</GButton>
              </div>
              
              <div class="flex gap-4 p-3 border rounded">
                <div class="w-16 h-16 bg-gray-200 rounded"></div>
                <div class="flex-1">
                  <h4 class="font-medium">Product Name 2</h4>
                  <p class="text-sm text-gray-600">Size: L</p>
                  <p class="font-semibold mt-1">Rp 200.000</p>
                </div>
                <GButton variant="ghost" class="text-red-500 hover:bg-red-50">×</GButton>
              </div>
              
              <div class="flex gap-4 p-3 border rounded">
                <div class="w-16 h-16 bg-gray-200 rounded"></div>
                <div class="flex-1">
                  <h4 class="font-medium">Product Name 3</h4>
                  <p class="text-sm text-gray-600">Quantity: 2</p>
                  <p class="font-semibold mt-1">Rp 100.000</p>
                </div>
                <GButton variant="ghost" class="text-red-500 hover:bg-red-50">×</GButton>
              </div>
            </div>
            
            <div class="border-t p-6 bg-gray-50">
              <div class="space-y-2 mb-4">
                <div class="flex justify-between">
                  <span>Subtotal</span>
                  <span>Rp 450.000</span>
                </div>
                <div class="flex justify-between">
                  <span>Ongkir</span>
                  <span>Rp 20.000</span>
                </div>
                <div class="flex justify-between font-bold text-lg pt-2 border-t">
                  <span>Total</span>
                  <span>Rp 470.000</span>
                </div>
              </div>
              <GButton variant="primary" class="w-full">Checkout</GButton>
            </div>
          </div>
        </DrawerContent>
      </Dialog>
    \`
  })
}`,...(y=(w=r.parameters)==null?void 0:w.docs)==null?void 0:y.source}}};const ha=["Default","NavigationDrawer","FilterDrawer","CartDrawer"];export{r as CartDrawer,a as Default,n as FilterDrawer,e as NavigationDrawer,ha as __namedExportsOrder,Da as default};
