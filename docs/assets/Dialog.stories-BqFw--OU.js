import{_ as n}from"./Dialog-CZx4OiSx.js";import{_ as w}from"./input-BOzjOkBt.js";import{_ as A}from"./Label-C_sgV46U.js";import{_ as o}from"./button-Cr1_wFBW.js";import{_ as c}from"./DialogTrigger-B-nSDdMv.js";import{D as K,_ as i,a as t,b as l,c as r}from"./DialogTitle-CYEcQXTO.js";import{d as L,c as N,w as E,m as M,u as P,a as O,b as $,P as U,U as V}from"./iframe-c4IY6zQp.js";import{a as J}from"./utils-DFIdVO4u.js";import{a as W,b as Y,c as q,d as z,_ as Q}from"./SelectValue-6yO4q6so.js";import{_ as R}from"./Textarea-vlgc0QAD.js";import"./useForwardPropsEmits-T2W0pCxY.js";import"./DialogRoot-Blci9B0U.js";import"./createContext-cRkaqZ4A.js";import"./useForwardExpose-Cr5jnkZA.js";import"./index-BxO9e2AK.js";import"./index-6HqQR1st.js";import"./Label-6-ZEx3t5.js";import"./Primitive-jOHN3RPP.js";import"./index-QLIpZy2_.js";import"./DialogTrigger-AmHBbxnF.js";import"./useId--nAmYTv4.js";import"./DialogTitle-BzMgjJ6h.js";import"./Presence-B-TJz0M4.js";import"./useHideOthers-CYlkxdpM.js";import"./ConfigProvider-C_xfuhRi.js";import"./getActiveElement-FUKBWQwh.js";import"./DismissableLayer-GjTYHlTV.js";import"./handleAndDispatchCustomEvent-ChOKVcqp.js";import"./utils-axApmHzA.js";import"./utils-T_AZzJOL.js";import"./Teleport-B8QkTMKb.js";import"./createLucideIcon-C05cy66L.js";import"./preload-helper-DKj51lX3.js";import"./Collection-gwCc-hQ9.js";import"./usePrimitiveElement-o7raP3zM.js";import"./check-3gkW7npu.js";import"./useTypeahead-BJ1Rp_e7.js";import"./PopperContent-bb7LKc88.js";import"./PopperAnchor-BoW0Xp8N.js";import"./ohash.D__AXeF1-Cq3NGnZa.js";import"./nullish-CHIgUVhi.js";import"./useDirection-Cgdaowgg.js";import"./useFormControl-B0k9zZ1q.js";import"./VisuallyHidden-JucKU3iS.js";const a=L({__name:"DialogClose",props:{asChild:{type:Boolean},as:{}},setup(s){const D=s;return(k,j)=>(O(),N(P(K),M({"data-slot":"dialog-close"},D),{default:E(()=>[$(k.$slots,"default")]),_:3},16))}});a.__docgenInfo=Object.assign({displayName:a.name??a.__name},{exportName:"default",displayName:"DialogClose",description:"",tags:{},slots:[{name:"default"}],sourceFiles:["/Users/lord/Documents/Documentation/gwindui.github.io/src/components/dialog/DialogClose.vue"]});const e=L({__name:"DialogFooter",props:{class:{}},setup(s){const D=s;return(k,j)=>(O(),U("div",{"data-slot":"dialog-footer",class:V(P(J)("flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",D.class))},[$(k.$slots,"default")],2))}});e.__docgenInfo=Object.assign({displayName:e.name??e.__name},{exportName:"default",displayName:"DialogFooter",description:"",tags:{},props:[{name:"class",required:!1,type:{name:"TSIndexedAccessType"}}],slots:[{name:"default"}],sourceFiles:["/Users/lord/Documents/Documentation/gwindui.github.io/src/components/dialog/DialogFooter.vue"]});const Ma={title:"Components/Dialog",component:n,tags:["autodocs"],parameters:{docs:{description:{component:`
**Dialog** adalah komponen modal window yang muncul di atas konten utama untuk menampilkan informasi penting atau meminta input dari pengguna. Dialog menghalangi interaksi dengan konten di bawahnya sampai ditutup.

Terdiri dari sub-komponen:
- **\`Dialog\`** — root container yang mengontrol state open/close
- **\`DialogTrigger\`** — elemen yang memicu dialog terbuka (biasanya button)
- **\`DialogContent\`** — container utama konten modal dengan overlay
- **\`DialogHeader\`** — container untuk judul dan deskripsi
- **\`DialogTitle\`** — judul dialog (wajib untuk accessibility)
- **\`DialogDescription\`** — deskripsi atau subtitle
- **\`DialogFooter\`** — container untuk action buttons
- **\`DialogClose\`** — button atau elemen untuk menutup dialog

### Penggunaan Dasar
\`\`\`vue
<Dialog>
  <DialogTrigger asChild>
    <GButton>Open Dialog</GButton>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Konfirmasi</DialogTitle>
      <DialogDescription>
        Apakah Anda yakin ingin melanjutkan aksi ini?
      </DialogDescription>
    </DialogHeader>
    <DialogFooter>
      <DialogClose asChild>
        <GButton variant="outline">Batal</GButton>
      </DialogClose>
      <GButton variant="primary">Lanjutkan</GButton>
    </DialogFooter>
  </DialogContent>
</Dialog>
\`\`\`

### Controlled Dialog
\`\`\`vue
<script setup>
import { ref } from 'vue'
const isOpen = ref(false)
<\/script>

<Dialog v-model:open="isOpen">
  <DialogContent>
    <!-- content -->
  </DialogContent>
</Dialog>
\`\`\`

### Props \`Dialog\`
| Prop | Tipe | Default | Deskripsi |
|------|------|---------|-----------|
| \`open\` | \`boolean\` | — | Kontrol state terbuka/tertutup (v-model:open) |
| \`defaultOpen\` | \`boolean\` | \`false\` | State awal saat mount (uncontrolled) |
| \`modal\` | \`boolean\` | \`true\` | Apakah dialog bersifat modal (block interaksi luar) |

### Props \`DialogContent\`
| Prop | Tipe | Default | Deskripsi |
|------|------|---------|-----------|
| \`forceMount\` | \`boolean\` | \`false\` | Paksa render konten meski dialog tertutup |
| \`trapFocus\` | \`boolean\` | \`true\` | Jebak focus keyboard di dalam dialog |
| \`disableOutsidePointerEvents\` | \`boolean\` | \`true\` | Nonaktifkan pointer events di luar dialog |

### Best Practices
- Selalu sertakan \`DialogTitle\` untuk accessibility
- Gunakan \`DialogDescription\` untuk konteks tambahan
- Hindari nesting dialog (dialog dalam dialog)
- Pastikan ada cara untuk menutup dialog (ESC key atau close button)
- Gunakan untuk konfirmasi, form, atau informasi penting yang memerlukan perhatian penuh
                `}}},argTypes:{open:{control:"boolean",description:"Kontrol state dialog terbuka/tertutup",table:{type:{summary:"boolean"}}},defaultOpen:{control:"boolean",description:"State awal dialog saat mount (uncontrolled mode)",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},modal:{control:"boolean",description:"Apakah dialog bersifat modal (menghalangi interaksi di luar)",table:{type:{summary:"boolean"},defaultValue:{summary:"true"}}}}},g={name:"Basic Dialog",parameters:{docs:{description:{story:"Dialog dasar dengan header, konten, dan footer. Klik tombol untuk membuka dialog."}}},render:()=>({components:{Dialog:n,DialogClose:a,DialogContent:r,DialogDescription:l,DialogFooter:e,DialogHeader:t,DialogTitle:i,DialogTrigger:c,GButton:o,GLabel:A,GInput:w},template:`
      <Dialog>
        <DialogTrigger as-child>
          <GButton variant="primary">Open Dialog</GButton>
        </DialogTrigger>
        <DialogContent class="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit Profil</DialogTitle>
            <DialogDescription>
              Ubah informasi profil Anda di sini. Klik simpan setelah selesai.
            </DialogDescription>
          </DialogHeader>
          <div class="grid gap-4 py-4">
            <div class="grid grid-cols-4 items-center gap-4">
              <GLabel for="name" class="text-right">Nama</GLabel>
              <GInput id="name" value="John Doe" class="col-span-3" />
            </div>
            <div class="grid grid-cols-4 items-center gap-4">
              <GLabel for="email" class="text-right">Email</GLabel>
              <GInput id="email" type="email" value="john@example.com" class="col-span-3" />
            </div>
          </div>
          <DialogFooter>
            <DialogClose as-child>
              <GButton variant="outline">Batal</GButton>
            </DialogClose>
            <GButton variant="primary">Simpan</GButton>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    `})},p={name:"Confirmation Dialog",parameters:{docs:{description:{story:"Dialog untuk konfirmasi aksi penting atau berbahaya. Biasanya dengan dua tombol: Batal dan Konfirmasi."}}},render:()=>({components:{Dialog:n,DialogClose:a,DialogContent:r,DialogDescription:l,DialogFooter:e,DialogHeader:t,DialogTitle:i,DialogTrigger:c,GButton:o},template:`
      <Dialog>
        <DialogTrigger as-child>
          <GButton variant="destructive">Hapus Akun</GButton>
        </DialogTrigger>
        <DialogContent class="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Apakah Anda yakin?</DialogTitle>
            <DialogDescription>
              Aksi ini tidak dapat dibatalkan. Ini akan menghapus akun Anda secara permanen 
              dan menghapus data Anda dari server kami.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <DialogClose as-child>
              <GButton variant="outline">Batal</GButton>
            </DialogClose>
            <GButton variant="destructive">Ya, Hapus Akun</GButton>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    `})},d={name:"Controlled Dialog",parameters:{docs:{description:{story:"Dialog yang dikontrol secara programmatik menggunakan v-model:open. Berguna saat Anda perlu membuka dialog dari logika aplikasi, bukan dari user interaction langsung."}}},render:()=>({components:{Dialog:n,DialogClose:a,DialogContent:r,DialogDescription:l,DialogFooter:e,DialogHeader:t,DialogTitle:i,GButton:o},setup(){return{isOpen:{value:!1}}},template:`
      <div>
        <GButton variant="primary" @click="isOpen.value = true">
          Open Controlled Dialog
        </GButton>
        
        <Dialog v-model:open="isOpen.value">
          <DialogContent class="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Dialog Terkontrol</DialogTitle>
              <DialogDescription>
                Dialog ini dibuka secara programmatik menggunakan v-model:open.
              </DialogDescription>
            </DialogHeader>
            <div class="py-4">
              <p>State dialog dikontrol oleh reactive variable di parent component.</p>
            </div>
            <DialogFooter>
              <GButton variant="primary" @click="isOpen.value = false">
                Tutup
              </GButton>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    `})},m={name:"Form Dialog",parameters:{docs:{description:{story:"Dialog yang berisi form lengkap. Cocok untuk pembuatan atau pengeditan data yang kompleks."}}},render:()=>({components:{Dialog:n,DialogClose:a,DialogContent:r,DialogDescription:l,DialogFooter:e,DialogHeader:t,DialogTitle:i,DialogTrigger:c,GButton:o,GLabel:A,GInput:w,GTextarea:R,GSelect:Q,GSelectContent:z,GSelectItem:q,GSelectTrigger:Y,GSelectValue:W},template:`
      <Dialog>
        <DialogTrigger as-child>
          <GButton variant="primary">Tambah Produk</GButton>
        </DialogTrigger>
        <DialogContent class="sm:max-w-[525px]">
          <DialogHeader>
            <DialogTitle>Tambah Produk Baru</DialogTitle>
            <DialogDescription>
              Lengkapi informasi produk di bawah ini.
            </DialogDescription>
          </DialogHeader>
          <div class="grid gap-4 py-4">
            <div class="grid gap-2">
              <GLabel for="product-name">Nama Produk</GLabel>
              <GInput 
                id="product-name" 
                placeholder="Masukkan nama produk" 
              />
            </div>
            <div class="grid gap-2">
              <GLabel for="product-price">Harga</GLabel>
              <GInput 
                id="product-price" 
                type="number" 
                placeholder="0" 
              />
            </div>
            <div class="grid gap-2">
              <GLabel for="product-category">Kategori</GLabel>
              <GSelect>
                <GSelectTrigger id="product-category" class="w-full">
                  <GSelectValue placeholder="Pilih kategori" />
                </GSelectTrigger>
                <GSelectContent>
                  <GSelectItem value="elektronik">Elektronik</GSelectItem>
                  <GSelectItem value="fashion">Fashion</GSelectItem>
                  <GSelectItem value="makanan">Makanan</GSelectItem>
                  <GSelectItem value="lainnya">Lainnya</GSelectItem>
                </GSelectContent>
              </GSelect>
            </div>
            <div class="grid gap-2">
              <GLabel for="product-desc">Deskripsi</GLabel>
              <GTextarea 
                id="product-desc" 
                placeholder="Deskripsi produk..." 
                class="min-h-[100px] w-full"
              />
            </div>
          </div>
          <DialogFooter>
            <DialogClose as-child>
              <GButton variant="outline">Batal</GButton>
            </DialogClose>
            <GButton variant="primary">Simpan Produk</GButton>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    `})},u={name:"Alert Style",parameters:{docs:{description:{story:"Dialog yang berfungsi seperti alert native browser, tapi dengan UI yang lebih baik. Digunakan untuk notifikasi penting yang memerlukan acknowledgement."}}},render:()=>({components:{Dialog:n,DialogClose:a,DialogContent:r,DialogDescription:l,DialogHeader:t,DialogTitle:i,DialogTrigger:c,GButton:o},template:`
      <Dialog>
        <DialogTrigger as-child>
          <GButton variant="outline">Show Alert</GButton>
        </DialogTrigger>
        <DialogContent class="sm:max-w-[400px]">
          <DialogHeader>
            <DialogTitle>⚠️ Peringatan Sistem</DialogTitle>
            <DialogDescription>
              Session Anda akan berakhir dalam 5 menit. Simpan pekerjaan Anda untuk menghindari kehilangan data.
            </DialogDescription>
          </DialogHeader>
          <div class="flex justify-end pt-4">
            <DialogClose as-child>
              <GButton variant="primary">Mengerti</GButton>
            </DialogClose>
          </div>
        </DialogContent>
      </Dialog>
    `})};var G,f,v;g.parameters={...g.parameters,docs:{...(G=g.parameters)==null?void 0:G.docs,source:{originalSource:`{
  name: "Basic Dialog",
  parameters: {
    docs: {
      description: {
        story: "Dialog dasar dengan header, konten, dan footer. Klik tombol untuk membuka dialog."
      }
    }
  },
  render: () => ({
    components: {
      Dialog,
      DialogClose,
      DialogContent,
      DialogDescription,
      DialogFooter,
      DialogHeader,
      DialogTitle,
      DialogTrigger,
      GButton,
      GLabel,
      GInput
    },
    template: \`
      <Dialog>
        <DialogTrigger as-child>
          <GButton variant="primary">Open Dialog</GButton>
        </DialogTrigger>
        <DialogContent class="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit Profil</DialogTitle>
            <DialogDescription>
              Ubah informasi profil Anda di sini. Klik simpan setelah selesai.
            </DialogDescription>
          </DialogHeader>
          <div class="grid gap-4 py-4">
            <div class="grid grid-cols-4 items-center gap-4">
              <GLabel for="name" class="text-right">Nama</GLabel>
              <GInput id="name" value="John Doe" class="col-span-3" />
            </div>
            <div class="grid grid-cols-4 items-center gap-4">
              <GLabel for="email" class="text-right">Email</GLabel>
              <GInput id="email" type="email" value="john@example.com" class="col-span-3" />
            </div>
          </div>
          <DialogFooter>
            <DialogClose as-child>
              <GButton variant="outline">Batal</GButton>
            </DialogClose>
            <GButton variant="primary">Simpan</GButton>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    \`
  })
}`,...(v=(f=g.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};var b,y,C;p.parameters={...p.parameters,docs:{...(b=p.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: "Confirmation Dialog",
  parameters: {
    docs: {
      description: {
        story: "Dialog untuk konfirmasi aksi penting atau berbahaya. Biasanya dengan dua tombol: Batal dan Konfirmasi."
      }
    }
  },
  render: () => ({
    components: {
      Dialog,
      DialogClose,
      DialogContent,
      DialogDescription,
      DialogFooter,
      DialogHeader,
      DialogTitle,
      DialogTrigger,
      GButton
    },
    template: \`
      <Dialog>
        <DialogTrigger as-child>
          <GButton variant="destructive">Hapus Akun</GButton>
        </DialogTrigger>
        <DialogContent class="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Apakah Anda yakin?</DialogTitle>
            <DialogDescription>
              Aksi ini tidak dapat dibatalkan. Ini akan menghapus akun Anda secara permanen 
              dan menghapus data Anda dari server kami.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <DialogClose as-child>
              <GButton variant="outline">Batal</GButton>
            </DialogClose>
            <GButton variant="destructive">Ya, Hapus Akun</GButton>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    \`
  })
}`,...(C=(y=p.parameters)==null?void 0:y.docs)==null?void 0:C.source}}};var h,B,T;d.parameters={...d.parameters,docs:{...(h=d.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: "Controlled Dialog",
  parameters: {
    docs: {
      description: {
        story: "Dialog yang dikontrol secara programmatik menggunakan v-model:open. Berguna saat Anda perlu membuka dialog dari logika aplikasi, bukan dari user interaction langsung."
      }
    }
  },
  render: () => ({
    components: {
      Dialog,
      DialogClose,
      DialogContent,
      DialogDescription,
      DialogFooter,
      DialogHeader,
      DialogTitle,
      GButton
    },
    setup() {
      const isOpen = {
        value: false
      };
      return {
        isOpen
      };
    },
    template: \`
      <div>
        <GButton variant="primary" @click="isOpen.value = true">
          Open Controlled Dialog
        </GButton>
        
        <Dialog v-model:open="isOpen.value">
          <DialogContent class="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Dialog Terkontrol</DialogTitle>
              <DialogDescription>
                Dialog ini dibuka secara programmatik menggunakan v-model:open.
              </DialogDescription>
            </DialogHeader>
            <div class="py-4">
              <p>State dialog dikontrol oleh reactive variable di parent component.</p>
            </div>
            <DialogFooter>
              <GButton variant="primary" @click="isOpen.value = false">
                Tutup
              </GButton>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    \`
  })
}`,...(T=(B=d.parameters)==null?void 0:B.docs)==null?void 0:T.source}}};var S,_,x;m.parameters={...m.parameters,docs:{...(S=m.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: "Form Dialog",
  parameters: {
    docs: {
      description: {
        story: "Dialog yang berisi form lengkap. Cocok untuk pembuatan atau pengeditan data yang kompleks."
      }
    }
  },
  render: () => ({
    components: {
      Dialog,
      DialogClose,
      DialogContent,
      DialogDescription,
      DialogFooter,
      DialogHeader,
      DialogTitle,
      DialogTrigger,
      GButton,
      GLabel,
      GInput,
      GTextarea,
      GSelect,
      GSelectContent,
      GSelectItem,
      GSelectTrigger,
      GSelectValue
    },
    template: \`
      <Dialog>
        <DialogTrigger as-child>
          <GButton variant="primary">Tambah Produk</GButton>
        </DialogTrigger>
        <DialogContent class="sm:max-w-[525px]">
          <DialogHeader>
            <DialogTitle>Tambah Produk Baru</DialogTitle>
            <DialogDescription>
              Lengkapi informasi produk di bawah ini.
            </DialogDescription>
          </DialogHeader>
          <div class="grid gap-4 py-4">
            <div class="grid gap-2">
              <GLabel for="product-name">Nama Produk</GLabel>
              <GInput 
                id="product-name" 
                placeholder="Masukkan nama produk" 
              />
            </div>
            <div class="grid gap-2">
              <GLabel for="product-price">Harga</GLabel>
              <GInput 
                id="product-price" 
                type="number" 
                placeholder="0" 
              />
            </div>
            <div class="grid gap-2">
              <GLabel for="product-category">Kategori</GLabel>
              <GSelect>
                <GSelectTrigger id=\\"product-category\\" class=\\"w-full\\">
                  <GSelectValue placeholder=\\"Pilih kategori\\" />
                </GSelectTrigger>
                <GSelectContent>
                  <GSelectItem value=\\"elektronik\\">Elektronik</GSelectItem>
                  <GSelectItem value=\\"fashion\\">Fashion</GSelectItem>
                  <GSelectItem value=\\"makanan\\">Makanan</GSelectItem>
                  <GSelectItem value=\\"lainnya\\">Lainnya</GSelectItem>
                </GSelectContent>
              </GSelect>
            </div>
            <div class="grid gap-2">
              <GLabel for="product-desc">Deskripsi</GLabel>
              <GTextarea 
                id="product-desc" 
                placeholder="Deskripsi produk..." 
                class="min-h-[100px] w-full"
              />
            </div>
          </div>
          <DialogFooter>
            <DialogClose as-child>
              <GButton variant="outline">Batal</GButton>
            </DialogClose>
            <GButton variant="primary">Simpan Produk</GButton>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    \`
  })
}`,...(x=(_=m.parameters)==null?void 0:_.docs)==null?void 0:x.source}}};var H,F,I;u.parameters={...u.parameters,docs:{...(H=u.parameters)==null?void 0:H.docs,source:{originalSource:`{
  name: "Alert Style",
  parameters: {
    docs: {
      description: {
        story: "Dialog yang berfungsi seperti alert native browser, tapi dengan UI yang lebih baik. Digunakan untuk notifikasi penting yang memerlukan acknowledgement."
      }
    }
  },
  render: () => ({
    components: {
      Dialog,
      DialogClose,
      DialogContent,
      DialogDescription,
      DialogHeader,
      DialogTitle,
      DialogTrigger,
      GButton
    },
    template: \`
      <Dialog>
        <DialogTrigger as-child>
          <GButton variant="outline">Show Alert</GButton>
        </DialogTrigger>
        <DialogContent class="sm:max-w-[400px]">
          <DialogHeader>
            <DialogTitle>⚠️ Peringatan Sistem</DialogTitle>
            <DialogDescription>
              Session Anda akan berakhir dalam 5 menit. Simpan pekerjaan Anda untuk menghindari kehilangan data.
            </DialogDescription>
          </DialogHeader>
          <div class="flex justify-end pt-4">
            <DialogClose as-child>
              <GButton variant="primary">Mengerti</GButton>
            </DialogClose>
          </div>
        </DialogContent>
      </Dialog>
    \`
  })
}`,...(I=(F=u.parameters)==null?void 0:F.docs)==null?void 0:I.source}}};const Ua=["Default","ConfirmDialog","WithoutTrigger","FormDialog","AlertDialog"];export{u as AlertDialog,p as ConfirmDialog,g as Default,m as FormDialog,d as WithoutTrigger,Ua as __namedExportsOrder,Ma as default};
