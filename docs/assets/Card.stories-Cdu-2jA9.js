import{_ as w}from"./button-Cr1_wFBW.js";import{d as i,P as l,b as c,U as p,u as m,a as C}from"./iframe-c4IY6zQp.js";import{a as u}from"./utils-DFIdVO4u.js";import{_ as z}from"./Checkbox-Bha-54W6.js";import{_ as J}from"./input-BOzjOkBt.js";import{_ as M}from"./Label-C_sgV46U.js";import"./Primitive-jOHN3RPP.js";import"./index-QLIpZy2_.js";import"./preload-helper-DKj51lX3.js";import"./useForwardPropsEmits-T2W0pCxY.js";import"./Check-DwCStHvC.js";import"./createContext-cRkaqZ4A.js";import"./nullish-CHIgUVhi.js";import"./isValueEqualOrExist-DvmIGGK4.js";import"./ohash.D__AXeF1-Cq3NGnZa.js";import"./useFormControl-B0k9zZ1q.js";import"./useForwardExpose-Cr5jnkZA.js";import"./RovingFocusItem-CMajk1bk.js";import"./useId--nAmYTv4.js";import"./Collection-gwCc-hQ9.js";import"./usePrimitiveElement-o7raP3zM.js";import"./utils-CC-pqV_U.js";import"./getActiveElement-FUKBWQwh.js";import"./RovingFocusGroup-B8aXtVZm.js";import"./useDirection-Cgdaowgg.js";import"./ConfigProvider-C_xfuhRi.js";import"./VisuallyHiddenInput-B4N5EJyq.js";import"./VisuallyHidden-JucKU3iS.js";import"./Presence-B-TJz0M4.js";import"./GIcon-BXuKvWrh.js";import"./index-BxO9e2AK.js";import"./index-6HqQR1st.js";import"./Label-6-ZEx3t5.js";const e=i({__name:"Card",props:{class:{}},setup(a){const n=a;return(r,g)=>(C(),l("div",{class:p(m(u)("p-4 rounded-md bg-white text-black-800 drop-shadow-1",n.class))},[c(r.$slots,"default")],2))}});e.__docgenInfo=Object.assign({displayName:e.name??e.__name},{exportName:"default",displayName:"Card",description:"",tags:{},props:[{name:"class",required:!1,type:{name:"TSIndexedAccessType"}}],slots:[{name:"default"}],sourceFiles:["/Users/lord/Documents/Documentation/gwindui.github.io/src/components/card/Card.vue"]});const t=i({__name:"CardContent",props:{class:{}},setup(a){const n=a;return(r,g)=>(C(),l("div",{class:p(m(u)("",n.class))},[c(r.$slots,"default")],2))}});t.__docgenInfo=Object.assign({displayName:t.name??t.__name},{exportName:"default",displayName:"CardContent",description:"",tags:{},props:[{name:"class",required:!1,type:{name:"TSIndexedAccessType"}}],slots:[{name:"default"}],sourceFiles:["/Users/lord/Documents/Documentation/gwindui.github.io/src/components/card/CardContent.vue"]});const o=i({__name:"CardDescription",props:{class:{}},setup(a){const n=a;return(r,g)=>(C(),l("p",{class:p(m(u)("!text-omicron text-black-500",n.class))},[c(r.$slots,"default")],2))}});o.__docgenInfo=Object.assign({displayName:o.name??o.__name},{exportName:"default",displayName:"CardDescription",description:"",tags:{},props:[{name:"class",required:!1,type:{name:"TSIndexedAccessType"}}],slots:[{name:"default"}],sourceFiles:["/Users/lord/Documents/Documentation/gwindui.github.io/src/components/card/CardDescription.vue"]});const d=i({__name:"CardFooter",props:{class:{}},setup(a){const n=a;return(r,g)=>(C(),l("div",{class:p(m(u)("flex items-center",n.class))},[c(r.$slots,"default")],2))}});d.__docgenInfo=Object.assign({displayName:d.name??d.__name},{exportName:"default",displayName:"CardFooter",description:"",tags:{},props:[{name:"class",required:!1,type:{name:"TSIndexedAccessType"}}],slots:[{name:"default"}],sourceFiles:["/Users/lord/Documents/Documentation/gwindui.github.io/src/components/card/CardFooter.vue"]});const s=i({__name:"CardHeader",props:{class:{}},setup(a){const n=a;return(r,g)=>(C(),l("div",{class:p(m(u)("flex flex-col gap-y-2",n.class))},[c(r.$slots,"default")],2))}});s.__docgenInfo=Object.assign({displayName:s.name??s.__name},{exportName:"default",displayName:"CardHeader",description:"",tags:{},props:[{name:"class",required:!1,type:{name:"TSIndexedAccessType"}}],slots:[{name:"default"}],sourceFiles:["/Users/lord/Documents/Documentation/gwindui.github.io/src/components/card/CardHeader.vue"]});const Fa={title:"Components/Card",component:e,tags:["autodocs"],parameters:{docs:{description:{component:`
**Card** adalah wadah berbasis blok yang menampilkan informasi spesifik. Komponen ini menyediakan cara yang fleksibel dan dapat diperluas untuk penyajian konten terkait menggunakan gaya struktural dasar.

Card adalah salah satu komponen paling fundamental dan serbaguna dalam UI design. Digunakan untuk mengelompokkan informasi terkait dalam container yang terpisah secara visual.

Terdiri dari sub-komponen:
- **\`Card\`** — root wrapper dengan border dan shadow
- **\`CardHeader\`** — penampung judul/deskripsi di bagian atas
- **\`CardTitle\`** — judul kartu (typography styled)
- **\`CardDescription\`** — teks penjelasan atau subtitle
- **\`CardContent\`** — wadah isi/konten utama
- **\`CardFooter\`** — penampung di bawah untuk aksi/tombol tambahan

### Penggunaan Dasar
\`\`\`vue
<Card>
  <CardHeader>
    <CardTitle>Profil Anda</CardTitle>
    <CardDescription>Informasi detail perihal akun Anda.</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Konten card di sini...</p>
  </CardContent>
  <CardFooter>
    <GButton>Simpan</GButton>
  </CardFooter>
</Card>
\`\`\`

### Tanpa Header/Footer
Card sangat fleksibel - Anda bisa skip header/footer jika tidak diperlukan:
\`\`\`vue
<Card>
  <CardContent class="pt-6">
    <p>Konten langsung tanpa header</p>
  </CardContent>
</Card>
\`\`\`

### Props
Semua sub-komponen menerima \`class\` prop untuk styling kustom.

### Use Cases
- Dashboard stats/metrics cards
- Product cards di e-commerce
- User profile cards
- Feature highlights
- Pricing tiers
- Blog post previews
- Form sections
- Settings panels

### Best Practices
- Gunakan CardHeader untuk judul yang konsisten
- CardFooter cocok untuk actions (buttons, links)
- Jangan overload satu card dengan terlalu banyak informasi
- Pertimbangkan card grid untuk multiple cards
- Gunakan consistent spacing dengan padding/margin
- Add hover states untuk interactive cards
- Pastikan card responsive di mobile
                `}}},argTypes:{class:{control:"text",description:"Class CSS tambahan untuk kustomisasi"}},args:{default:`
               <CardHeader>
                    <CardTitle>Title</CardTitle>
                    <CardDescription>Description</CardDescription>
                </CardHeader>
                <CardContent class="grid grid-cols-3 gap-4 text-omega">
                    This Content: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </CardContent>
                <CardFooter>
                    <Button>Footer Button</Button>
                </CardFooter>
        `},render:a=>({components:{Card:e,CardContent:t,CardDescription:o,CardFooter:d,CardHeader:s,Button:w},setup(){return{args:a}},template:`
        <Card class="flex flex-col gap-y-4 h-fit">
            ${a.default}
        </Card>
        `})},x={name:"Default Card",parameters:{docs:{description:{story:"Card dengan struktur lengkap: Header dengan judul dan deskripsi, Content area dengan konten utama, dan Footer dengan action button."}}}},f={name:"Simple Card",parameters:{docs:{description:{story:"Card sederhana tanpa header atau footer, hanya berisi konten. Cocok untuk display informasi yang straightforward."}}},render:()=>({components:{Card:e,CardContent:t},template:`
      <Card class="max-w-sm">
        <CardContent class="pt-6">
          <p class="text-sm text-gray-600">
            Card sederhana yang hanya berisi konten tanpa header atau footer.
            Berguna untuk display informasi yang tidak memerlukan struktur kompleks.
          </p>
        </CardContent>
      </Card>
    `})},v={name:"Product Card",parameters:{docs:{description:{story:"Use case: Product card untuk e-commerce dengan image, title, description, price, dan action button."}}},render:()=>({components:{Card:e,CardContent:t,CardDescription:o,CardFooter:d,CardHeader:s,Button:w},template:`
      <Card class="max-w-sm overflow-hidden">
        <div class="w-full h-48 bg-gradient-to-br from-blue-400 to-purple-500"></div>
        <CardHeader>
          <CardTitle>Premium Wireless Headphones</CardTitle>
          <CardDescription>
            High-quality sound with active noise cancellation
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div class="space-y-2">
            <div class="flex items-center gap-1">
              <span class="text-2xl font-bold">Rp 1.299.000</span>
              <span class="text-sm text-gray-500 line-through">Rp 1.599.000</span>
            </div>
            <div class="flex items-center gap-1">
              <span class="text-yellow-500">★★★★★</span>
              <span class="text-sm text-gray-600">(128 reviews)</span>
            </div>
          </div>
        </CardContent>
        <CardFooter class="flex gap-2">
          <Button variant="primary" class="flex-1">Add to Cart</Button>
          <Button variant="outline">♥</Button>
        </CardFooter>
      </Card>
    `})},b={name:"User Profile Card",parameters:{docs:{description:{story:"Use case: User profile card dengan avatar, info, dan stats. Common di dashboard atau social apps."}}},render:()=>({components:{Card:e,CardContent:t,CardFooter:d,CardHeader:s,Button:w},template:`
      <Card class="max-w-sm">
        <CardHeader>
          <div class="flex items-center gap-4">
            <div class="w-16 h-16 rounded-full bg-gradient-to-br from-pink-500 to-orange-500"></div>
            <div>
              <h3 class="font-bold text-lg">Sarah Johnson</h3>
              <p class="text-sm text-gray-600">@sarahjohnson</p>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <p class="text-sm text-gray-700 mb-4">
            UI/UX Designer passionate about creating beautiful and functional interfaces. 
            Coffee enthusiast ☕
          </p>
          <div class="grid grid-cols-3 gap-4 text-center">
            <div>
              <div class="font-bold text-xl">234</div>
              <div class="text-xs text-gray-600">Posts</div>
            </div>
            <div>
              <div class="font-bold text-xl">2.5K</div>
              <div class="text-xs text-gray-600">Followers</div>
            </div>
            <div>
              <div class="font-bold text-xl">589</div>
              <div class="text-xs text-gray-600">Following</div>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button variant="primary" class="w-full">Follow</Button>
        </CardFooter>
      </Card>
    `})},h={name:"Stats Card",parameters:{docs:{description:{story:"Use case: Dashboard stats card untuk menampilkan metrics atau KPIs. Compact dan fokus pada angka."}}},render:()=>({components:{Card:e,CardContent:t,CardHeader:s},template:`
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl">
        <Card>
          <CardHeader class="flex flex-row items-center justify-between pb-2">
            <h3 class="text-sm font-medium text-gray-600">Total Revenue</h3>
            <span class="text-2xl">💰</span>
          </CardHeader>
          <CardContent>
            <div class="text-2xl font-bold">Rp 45,231,890</div>
            <p class="text-xs text-green-600 mt-1">↑ 20.1% from last month</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader class="flex flex-row items-center justify-between pb-2">
            <h3 class="text-sm font-medium text-gray-600">Active Users</h3>
            <span class="text-2xl">👥</span>
          </CardHeader>
          <CardContent>
            <div class="text-2xl font-bold">2,350</div>
            <p class="text-xs text-green-600 mt-1">↑ 12.5% from last month</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader class="flex flex-row items-center justify-between pb-2">
            <h3 class="text-sm font-medium text-gray-600">Orders</h3>
            <span class="text-2xl">📦</span>
          </CardHeader>
          <CardContent>
            <div class="text-2xl font-bold">573</div>
            <p class="text-xs text-red-600 mt-1">↓ 4.3% from last month</p>
          </CardContent>
        </Card>
      </div>
    `})},y={name:"Form Card",parameters:{docs:{description:{story:"Use case: Card sebagai container untuk form. Memberikan visual separation dan struktur yang jelas."}}},render:()=>({components:{Card:e,CardContent:t,CardDescription:o,CardFooter:d,CardHeader:s,Button:w,GLabel:M,GInput:J,GCheckBox:z},template:`
      <Card class="max-w-md">
        <CardHeader>
          <CardTitle>Create Account</CardTitle>
          <CardDescription>
            Enter your information to create a new account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div class="space-y-4">
            <div>
              <GLabel class="block text-sm font-medium mb-1">Full Name</GLabel>
              <GInput 
                type="text" 
                placeholder="John Doe" 
                class="w-full"
              />
            </div>
            <div>
              <GLabel class="block text-sm font-medium mb-1">Email</GLabel>
              <GInput 
                type="email" 
                placeholder="john@example.com" 
                class="w-full"
              />
            </div>
            <div>
              <GLabel class="block text-sm font-medium mb-1">Password</GLabel>
              <GInput 
                type="password" 
                placeholder="••••••••" 
                class="w-full"
              />
            </div>
            <div class="flex items-center gap-2">
              <GCheckBox id="terms" class="rounded" />
              <GLabel for="terms" class="text-sm">
                I agree to the terms and conditions
              </GLabel>
            </div>
          </div>
        </CardContent>
        <CardFooter class="flex gap-2">
          <Button variant="outline" class="flex-1">Cancel</Button>
          <Button variant="primary" class="flex-1">Create Account</Button>
        </CardFooter>
      </Card>
    `})},k={name:"Hoverable Card",parameters:{docs:{description:{story:"Card dengan hover effect. Cocok untuk clickable cards atau cards yang mengarah ke detail page."}}},render:()=>({components:{Card:e,CardContent:t,CardDescription:o,CardHeader:s},template:`
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl">
        <Card class="transition-all hover:shadow-lg hover:-translate-y-1 cursor-pointer">
          <CardHeader>
            <div class="text-4xl mb-2">🎨</div>
            <CardTitle>Design System</CardTitle>
            <CardDescription>
              Comprehensive UI component library
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p class="text-sm text-gray-600">
              Build consistent user interfaces with our design system.
            </p>
          </CardContent>
        </Card>
        
        <Card class="transition-all hover:shadow-lg hover:-translate-y-1 cursor-pointer">
          <CardHeader>
            <div class="text-4xl mb-2">⚡</div>
            <CardTitle>Performance</CardTitle>
            <CardDescription>
              Lightning fast and optimized
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p class="text-sm text-gray-600">
              Optimized for speed and performance in production.
            </p>
          </CardContent>
        </Card>
      </div>
    `})};var H,_,D;x.parameters={...x.parameters,docs:{...(H=x.parameters)==null?void 0:H.docs,source:{originalSource:`{
  name: "Default Card",
  parameters: {
    docs: {
      description: {
        story: "Card dengan struktur lengkap: Header dengan judul dan deskripsi, Content area dengan konten utama, dan Footer dengan action button."
      }
    }
  }
}`,...(D=(_=x.parameters)==null?void 0:_.docs)==null?void 0:D.source}}};var F,B,T;f.parameters={...f.parameters,docs:{...(F=f.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: "Simple Card",
  parameters: {
    docs: {
      description: {
        story: "Card sederhana tanpa header atau footer, hanya berisi konten. Cocok untuk display informasi yang straightforward."
      }
    }
  },
  render: () => ({
    components: {
      Card,
      CardContent
    },
    template: \`
      <Card class="max-w-sm">
        <CardContent class="pt-6">
          <p class="text-sm text-gray-600">
            Card sederhana yang hanya berisi konten tanpa header atau footer.
            Berguna untuk display informasi yang tidak memerlukan struktur kompleks.
          </p>
        </CardContent>
      </Card>
    \`
  })
}`,...(T=(B=f.parameters)==null?void 0:B.docs)==null?void 0:T.source}}};var G,U,S;v.parameters={...v.parameters,docs:{...(G=v.parameters)==null?void 0:G.docs,source:{originalSource:`{
  name: "Product Card",
  parameters: {
    docs: {
      description: {
        story: "Use case: Product card untuk e-commerce dengan image, title, description, price, dan action button."
      }
    }
  },
  render: () => ({
    components: {
      Card,
      CardContent,
      CardDescription,
      CardFooter,
      CardHeader,
      Button
    },
    template: \`
      <Card class="max-w-sm overflow-hidden">
        <div class="w-full h-48 bg-gradient-to-br from-blue-400 to-purple-500"></div>
        <CardHeader>
          <CardTitle>Premium Wireless Headphones</CardTitle>
          <CardDescription>
            High-quality sound with active noise cancellation
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div class="space-y-2">
            <div class="flex items-center gap-1">
              <span class="text-2xl font-bold">Rp 1.299.000</span>
              <span class="text-sm text-gray-500 line-through">Rp 1.599.000</span>
            </div>
            <div class="flex items-center gap-1">
              <span class="text-yellow-500">★★★★★</span>
              <span class="text-sm text-gray-600">(128 reviews)</span>
            </div>
          </div>
        </CardContent>
        <CardFooter class="flex gap-2">
          <Button variant="primary" class="flex-1">Add to Cart</Button>
          <Button variant="outline">♥</Button>
        </CardFooter>
      </Card>
    \`
  })
}`,...(S=(U=v.parameters)==null?void 0:U.docs)==null?void 0:S.source}}};var P,I,j;b.parameters={...b.parameters,docs:{...(P=b.parameters)==null?void 0:P.docs,source:{originalSource:`{
  name: "User Profile Card",
  parameters: {
    docs: {
      description: {
        story: "Use case: User profile card dengan avatar, info, dan stats. Common di dashboard atau social apps."
      }
    }
  },
  render: () => ({
    components: {
      Card,
      CardContent,
      CardFooter,
      CardHeader,
      Button
    },
    template: \`
      <Card class="max-w-sm">
        <CardHeader>
          <div class="flex items-center gap-4">
            <div class="w-16 h-16 rounded-full bg-gradient-to-br from-pink-500 to-orange-500"></div>
            <div>
              <h3 class="font-bold text-lg">Sarah Johnson</h3>
              <p class="text-sm text-gray-600">@sarahjohnson</p>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <p class="text-sm text-gray-700 mb-4">
            UI/UX Designer passionate about creating beautiful and functional interfaces. 
            Coffee enthusiast ☕
          </p>
          <div class="grid grid-cols-3 gap-4 text-center">
            <div>
              <div class="font-bold text-xl">234</div>
              <div class="text-xs text-gray-600">Posts</div>
            </div>
            <div>
              <div class="font-bold text-xl">2.5K</div>
              <div class="text-xs text-gray-600">Followers</div>
            </div>
            <div>
              <div class="font-bold text-xl">589</div>
              <div class="text-xs text-gray-600">Following</div>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button variant="primary" class="w-full">Follow</Button>
        </CardFooter>
      </Card>
    \`
  })
}`,...(j=(I=b.parameters)==null?void 0:I.docs)==null?void 0:j.source}}};var L,A,N;h.parameters={...h.parameters,docs:{...(L=h.parameters)==null?void 0:L.docs,source:{originalSource:`{
  name: "Stats Card",
  parameters: {
    docs: {
      description: {
        story: "Use case: Dashboard stats card untuk menampilkan metrics atau KPIs. Compact dan fokus pada angka."
      }
    }
  },
  render: () => ({
    components: {
      Card,
      CardContent,
      CardHeader
    },
    template: \`
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl">
        <Card>
          <CardHeader class="flex flex-row items-center justify-between pb-2">
            <h3 class="text-sm font-medium text-gray-600">Total Revenue</h3>
            <span class="text-2xl">💰</span>
          </CardHeader>
          <CardContent>
            <div class="text-2xl font-bold">Rp 45,231,890</div>
            <p class="text-xs text-green-600 mt-1">↑ 20.1% from last month</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader class="flex flex-row items-center justify-between pb-2">
            <h3 class="text-sm font-medium text-gray-600">Active Users</h3>
            <span class="text-2xl">👥</span>
          </CardHeader>
          <CardContent>
            <div class="text-2xl font-bold">2,350</div>
            <p class="text-xs text-green-600 mt-1">↑ 12.5% from last month</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader class="flex flex-row items-center justify-between pb-2">
            <h3 class="text-sm font-medium text-gray-600">Orders</h3>
            <span class="text-2xl">📦</span>
          </CardHeader>
          <CardContent>
            <div class="text-2xl font-bold">573</div>
            <p class="text-xs text-red-600 mt-1">↓ 4.3% from last month</p>
          </CardContent>
        </Card>
      </div>
    \`
  })
}`,...(N=(A=h.parameters)==null?void 0:A.docs)==null?void 0:N.source}}};var $,q,O;y.parameters={...y.parameters,docs:{...($=y.parameters)==null?void 0:$.docs,source:{originalSource:`{
  name: "Form Card",
  parameters: {
    docs: {
      description: {
        story: "Use case: Card sebagai container untuk form. Memberikan visual separation dan struktur yang jelas."
      }
    }
  },
  render: () => ({
    components: {
      Card,
      CardContent,
      CardDescription,
      CardFooter,
      CardHeader,
      Button,
      GLabel,
      GInput,
      GCheckBox
    },
    template: \`
      <Card class="max-w-md">
        <CardHeader>
          <CardTitle>Create Account</CardTitle>
          <CardDescription>
            Enter your information to create a new account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div class="space-y-4">
            <div>
              <GLabel class="block text-sm font-medium mb-1">Full Name</GLabel>
              <GInput 
                type="text" 
                placeholder="John Doe" 
                class="w-full"
              />
            </div>
            <div>
              <GLabel class="block text-sm font-medium mb-1">Email</GLabel>
              <GInput 
                type="email" 
                placeholder="john@example.com" 
                class="w-full"
              />
            </div>
            <div>
              <GLabel class="block text-sm font-medium mb-1">Password</GLabel>
              <GInput 
                type="password" 
                placeholder="••••••••" 
                class="w-full"
              />
            </div>
            <div class="flex items-center gap-2">
              <GCheckBox id="terms" class="rounded" />
              <GLabel for="terms" class="text-sm">
                I agree to the terms and conditions
              </GLabel>
            </div>
          </div>
        </CardContent>
        <CardFooter class="flex gap-2">
          <Button variant="outline" class="flex-1">Cancel</Button>
          <Button variant="primary" class="flex-1">Create Account</Button>
        </CardFooter>
      </Card>
    \`
  })
}`,...(O=(q=y.parameters)==null?void 0:q.docs)==null?void 0:O.source}}};var R,E,K;k.parameters={...k.parameters,docs:{...(R=k.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: "Hoverable Card",
  parameters: {
    docs: {
      description: {
        story: "Card dengan hover effect. Cocok untuk clickable cards atau cards yang mengarah ke detail page."
      }
    }
  },
  render: () => ({
    components: {
      Card,
      CardContent,
      CardDescription,
      CardHeader
    },
    template: \`
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl">
        <Card class="transition-all hover:shadow-lg hover:-translate-y-1 cursor-pointer">
          <CardHeader>
            <div class="text-4xl mb-2">🎨</div>
            <CardTitle>Design System</CardTitle>
            <CardDescription>
              Comprehensive UI component library
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p class="text-sm text-gray-600">
              Build consistent user interfaces with our design system.
            </p>
          </CardContent>
        </Card>
        
        <Card class="transition-all hover:shadow-lg hover:-translate-y-1 cursor-pointer">
          <CardHeader>
            <div class="text-4xl mb-2">⚡</div>
            <CardTitle>Performance</CardTitle>
            <CardDescription>
              Lightning fast and optimized
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p class="text-sm text-gray-600">
              Optimized for speed and performance in production.
            </p>
          </CardContent>
        </Card>
      </div>
    \`
  })
}`,...(K=(E=k.parameters)==null?void 0:E.docs)==null?void 0:K.source}}};const Ba=["Default","SimpleCard","ProductCard","UserProfileCard","StatsCard","FormCard","HoverableCard"];export{x as Default,y as FormCard,k as HoverableCard,v as ProductCard,f as SimpleCard,h as StatsCard,b as UserProfileCard,Ba as __namedExportsOrder,Fa as default};
