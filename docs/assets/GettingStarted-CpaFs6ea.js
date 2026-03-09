import{j as e,M as o}from"./blocks-DF5Pkpuq.js";import{useMDXComponents as t}from"./index-DiHHnsgG.js";import"./preload-helper-DKj51lX3.js";import"./iframe-c4IY6zQp.js";function r(i){const n={code:"code",h2:"h2",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",...t(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"Introduction/Getting Started"}),`
`,e.jsxs("div",{style:{maxWidth:"800px",margin:"0 auto",padding:"3rem 2rem"},children:[e.jsx("h1",{style:{fontSize:"2.5rem",fontWeight:"700",letterSpacing:"-0.02em",marginBottom:"1rem",color:"#18181b",borderBottom:"1px solid #e4e4e7",paddingBottom:"0.75rem"},children:e.jsx(n.p,{children:"Getting Started"})}),e.jsx("p",{style:{fontSize:"1.125rem",color:"#71717a",marginBottom:"3rem"},children:e.jsx(n.p,{children:"Panduan lengkap untuk memulai menggunakan GWIND UI dalam project Vue 3 Anda."})}),e.jsx(n.hr,{}),e.jsx(n.h2,{id:"-installation",children:"📦 Installation"}),e.jsx(n.p,{children:"Install GWIND UI menggunakan package manager favorit Anda:"}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`# NPM
npm install @pegadaian/gwind

# PNPM (Recommended)
pnpm add @pegadaian/gwind

# Yarn
yarn add @pegadaian/gwind
`})}),e.jsx(n.hr,{}),e.jsx(n.h2,{id:"️-basic-setup",children:"⚙️ Basic Setup"}),e.jsx(n.h3,{id:"1-import-styles",children:"1. Import Styles"}),e.jsx(n.p,{children:"Tambahkan CSS GWIND UI ke main entry point aplikasi Anda:"}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`// main.ts atau main.js
import { createApp } from 'vue'
import App from './App.vue'

// Import GWIND UI styles
import '@pegadaian/gwind/lib/style.css'

createApp(App).mount('#app')
`})}),e.jsx(n.h3,{id:"2-start-using-components",children:"2. Start Using Components"}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-vue",children:`<script setup lang="ts">
import { GButton, GInput, GCard } from '@pegadaian/gwind'
import { ref } from 'vue'

const email = ref('')

const handleSubmit = () => {
  console.log('Email:', email.value)
}
<\/script>

<template>
  <GCard class="max-w-md mx-auto p-6">
    <h2 class="text-2xl font-bold mb-4">Subscribe</h2>
    <div class="space-y-4">
      <GInput 
        v-model="email" 
        placeholder="Enter your email"
        type="email"
      />
      <GButton 
        variant="primary" 
        class="w-full"
        @click="handleSubmit"
      >
        Subscribe Now
      </GButton>
    </div>
  </GCard>
</template>
`})}),e.jsx(n.hr,{}),e.jsx(n.h2,{id:"-tailwind-configuration-optional",children:"🎨 Tailwind Configuration (Optional)"}),e.jsx(n.p,{children:"Jika Anda ingin menggunakan custom Tailwind configuration:"}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`// tailwind.config.js
import { gwindTheme, gwindTwBase } from "@pegadaian/gwind"

export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/@pegadaian/gwind/**/*.{js,vue}"
  ],
  theme: {
    extend: {
      ...gwindTheme,
      // Your custom theme extends here
    },
  },
  plugins: [gwindTwBase],
}
`})}),e.jsx(n.hr,{}),e.jsx(n.h2,{id:"-auto-import-recommended",children:"🚀 Auto Import (Recommended)"}),e.jsx(n.p,{children:"Setup auto-import untuk developer experience yang lebih baik:"}),e.jsx(n.h3,{id:"install-plugin",children:"Install Plugin"}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`pnpm add -D unplugin-vue-components
`})}),e.jsx(n.h3,{id:"configure-vite",children:"Configure Vite"}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`// vite.config.ts
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'

export default defineConfig({
  plugins: [
    vue(),
    Components({
      resolvers: [
        // Auto import GWIND components
        (componentName) => {
          if (componentName.startsWith('G'))
            return { name: componentName, from: '@pegadaian/gwind' }
        },
      ],
    }),
  ],
})
`})}),e.jsx(n.h3,{id:"use-without-import",children:"Use Without Import"}),e.jsx(n.p,{children:"Sekarang Anda bisa langsung gunakan komponen tanpa import:"}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-vue",children:`<template>
  <!-- No import needed! -->
  <GButton variant="primary">Click me!</GButton>
  <GInput placeholder="Type something..." />
</template>
`})}),e.jsx(n.hr,{}),e.jsx(n.h2,{id:"-component-examples",children:"📱 Component Examples"}),e.jsx(n.h3,{id:"buttons",children:"Buttons"}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-vue",children:`<template>
  <div class="flex gap-2">
    <GButton variant="primary">Primary</GButton>
    <GButton variant="secondary">Secondary</GButton>
    <GButton variant="outline">Outline</GButton>
    <GButton variant="ghost">Ghost</GButton>
  </div>
</template>
`})}),e.jsx(n.h3,{id:"forms",children:"Forms"}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-vue",children:`<script setup>
import { ref } from 'vue'

const form = ref({
  name: '',
  email: '',
  acceptTerms: false
})
<\/script>

<template>
  <form class="space-y-4 max-w-md">
    <GInput 
      v-model="form.name" 
      label="Name"
      placeholder="John Doe"
    />
    
    <GInput 
      v-model="form.email" 
      label="Email"
      type="email"
      placeholder="john@example.com"
    />
    
    <GCheckbox 
      v-model="form.acceptTerms"
      label="I accept the terms and conditions"
    />
    
    <GButton variant="primary" class="w-full">
      Submit
    </GButton>
  </form>
</template>
`})}),e.jsx(n.h3,{id:"dialog",children:"Dialog"}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-vue",children:`<script setup>
import { ref } from 'vue'
const isOpen = ref(false)
<\/script>

<template>
  <GButton @click="isOpen = true">
    Open Dialog
  </GButton>
  
  <Dialog v-model:open="isOpen">
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Confirmation</DialogTitle>
        <DialogDescription>
          Are you sure you want to proceed?
        </DialogDescription>
      </DialogHeader>
      <DialogFooter>
        <GButton variant="outline" @click="isOpen = false">
          Cancel
        </GButton>
        <GButton variant="primary">
          Confirm
        </GButton>
      </DialogFooter>
    </DialogContent>
  </Dialog>
</template>
`})}),e.jsx(n.hr,{}),e.jsx(n.h2,{id:"-typescript-support",children:"📋 TypeScript Support"}),e.jsx(n.p,{children:"GWIND UI fully supports TypeScript dengan complete type definitions:"}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import type { GButtonProps, ButtonVariants } from '@pegadaian/gwind'

// Type-safe props
const buttonProps: GButtonProps = {
  variant: 'primary',
  size: 'md',
  disabled: false
}

// Variant types
const variant: ButtonVariants['variant'] = 'primary'
`})}),e.jsx(n.hr,{}),e.jsx(n.h2,{id:"-available-components",children:"🎯 Available Components"}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(200px, 1fr))",gap:"1rem",marginTop:"1.5rem"},children:[e.jsxs("div",{style:{padding:"1rem",backgroundColor:"#fafafa",border:"1px solid #e4e4e7",borderRadius:"8px"},children:[e.jsx("h4",{style:{fontWeight:"600",marginBottom:"0.5rem"},children:"Actions"}),e.jsxs("ul",{style:{fontSize:"0.875rem",color:"#71717a",listStyle:"none",padding:0},children:[e.jsx("li",{children:"• Button"}),e.jsx("li",{children:"• Switch"}),e.jsx("li",{children:"• Toggle"})]})]}),e.jsxs("div",{style:{padding:"1rem",backgroundColor:"#fafafa",border:"1px solid #e4e4e7",borderRadius:"8px"},children:[e.jsx("h4",{style:{fontWeight:"600",marginBottom:"0.5rem"},children:"Forms"}),e.jsxs("ul",{style:{fontSize:"0.875rem",color:"#71717a",listStyle:"none",padding:0},children:[e.jsx("li",{children:"• Input"}),e.jsx("li",{children:"• Select"}),e.jsx("li",{children:"• Checkbox"}),e.jsx("li",{children:"• Radio"}),e.jsx("li",{children:"• TagsInput"})]})]}),e.jsxs("div",{style:{padding:"1rem",backgroundColor:"#fafafa",border:"1px solid #e4e4e7",borderRadius:"8px"},children:[e.jsx("h4",{style:{fontWeight:"600",marginBottom:"0.5rem"},children:"Layout"}),e.jsxs("ul",{style:{fontSize:"0.875rem",color:"#71717a",listStyle:"none",padding:0},children:[e.jsx("li",{children:"• Card"}),e.jsx("li",{children:"• Accordion"}),e.jsx("li",{children:"• Tabs"})]})]}),e.jsxs("div",{style:{padding:"1rem",backgroundColor:"#fafafa",border:"1px solid #e4e4e7",borderRadius:"8px"},children:[e.jsx("h4",{style:{fontWeight:"600",marginBottom:"0.5rem"},children:"Overlays"}),e.jsxs("ul",{style:{fontSize:"0.875rem",color:"#71717a",listStyle:"none",padding:0},children:[e.jsx("li",{children:"• Dialog"}),e.jsx("li",{children:"• Drawer"}),e.jsx("li",{children:"• Toast"}),e.jsx("li",{children:"• Tooltip"})]})]}),e.jsxs("div",{style:{padding:"1rem",backgroundColor:"#fafafa",border:"1px solid #e4e4e7",borderRadius:"8px"},children:[e.jsx("h4",{style:{fontWeight:"600",marginBottom:"0.5rem"},children:"Navigation"}),e.jsxs("ul",{style:{fontSize:"0.875rem",color:"#71717a",listStyle:"none",padding:0},children:[e.jsx("li",{children:"• Command"}),e.jsx("li",{children:"• Breadcrumb"})]})]}),e.jsxs("div",{style:{padding:"1rem",backgroundColor:"#fafafa",border:"1px solid #e4e4e7",borderRadius:"8px"},children:[e.jsx("h4",{style:{fontWeight:"600",marginBottom:"0.5rem"},children:"Feedback"}),e.jsxs("ul",{style:{fontSize:"0.875rem",color:"#71717a",listStyle:"none",padding:0},children:[e.jsx("li",{children:"• Alert"}),e.jsx("li",{children:"• Progress"}),e.jsx("li",{children:"• Badge"})]})]})]}),e.jsx(n.hr,{}),e.jsx(n.h2,{id:"-tips--best-practices",children:"💡 Tips & Best Practices"}),e.jsx(n.h3,{id:"1-use-composition-api",children:"1. Use Composition API"}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-vue",children:`<script setup lang="ts">
// ✅ Recommended: Composition API with <script setup>
import { ref, computed } from 'vue'

const count = ref(0)
const doubled = computed(() => count.value * 2)
<\/script>
`})}),e.jsx(n.h3,{id:"2-leverage-typescript",children:"2. Leverage TypeScript"}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`// ✅ Get full intellisense and type safety
import type { GButtonProps } from '@pegadaian/gwind'

const props: GButtonProps = {
  variant: 'primary',
  size: 'md'
}
`})}),e.jsx(n.h3,{id:"3-tree-shaking",children:"3. Tree-shaking"}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`// ✅ Import only what you need
import { GButton, GInput } from '@pegadaian/gwind'

// ❌ Avoid importing everything
import * as GWIND from '@pegadaian/gwind'
`})}),e.jsx(n.h3,{id:"4-accessibility",children:"4. Accessibility"}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-vue",children:`<!-- ✅ Always provide labels and aria attributes -->
<GInput 
  label="Email Address" 
  placeholder="Enter your email"
  type="email"
  required
/>
`})}),e.jsx(n.hr,{}),e.jsx(n.h2,{id:"-troubleshooting",children:"🐛 Troubleshooting"}),e.jsx(n.h3,{id:"styles-not-appearing",children:"Styles Not Appearing?"}),e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:"Make sure you imported the CSS:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import '@pegadaian/gwind/lib/style.css'
`})}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:"Check your Tailwind configuration"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:["Verify PostCSS setup in ",e.jsx(n.code,{children:"vite.config.ts"})]}),`
`]}),`
`]}),e.jsx(n.h3,{id:"typescript-errors",children:"TypeScript Errors?"}),e.jsxs(n.p,{children:["Add types to ",e.jsx(n.code,{children:"tsconfig.json"}),":"]}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-json",children:`{
  "compilerOptions": {
    "types": ["@pegadaian/gwind"]
  }
}
`})}),e.jsx(n.h3,{id:"build-errors",children:"Build Errors?"}),e.jsx(n.p,{children:"Ensure your build tool supports Vue 3:"}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`// vite.config.ts
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  optimizeDeps: {
    include: ['@pegadaian/gwind']
  }
})
`})}),e.jsx(n.hr,{}),e.jsx(n.h2,{id:"-next-steps",children:"📚 Next Steps"}),e.jsxs("div",{style:{display:"grid",gap:"1rem",marginTop:"2rem"},children:[e.jsxs("a",{href:"?path=/docs/components-button--docs",style:{display:"block",padding:"1rem 1.25rem",backgroundColor:"#ffffff",border:"1px solid #e4e4e7",borderRadius:"8px",textDecoration:"none",color:"#18181b"},children:[e.jsx("strong",{children:"Browse Components →"}),e.jsx("div",{style:{fontSize:"0.875rem",color:"#71717a",marginTop:"0.25rem"},children:e.jsx(n.p,{children:"Explore all available components"})})]}),e.jsxs("a",{href:"https://github.com/gwindui/gwindui/tree/main/examples",target:"_blank",style:{display:"block",padding:"1rem 1.25rem",backgroundColor:"#ffffff",border:"1px solid #e4e4e7",borderRadius:"8px",textDecoration:"none",color:"#18181b"},children:[e.jsx("strong",{children:"View Examples →"}),e.jsx("div",{style:{fontSize:"0.875rem",color:"#71717a",marginTop:"0.25rem"},children:e.jsx(n.p,{children:"Check out real-world examples"})})]}),e.jsxs("a",{href:"https://github.com/gwindui/gwindui",target:"_blank",style:{display:"block",padding:"1rem 1.25rem",backgroundColor:"#ffffff",border:"1px solid #e4e4e7",borderRadius:"8px",textDecoration:"none",color:"#18181b"},children:[e.jsx("strong",{children:"GitHub Repository →"}),e.jsx("div",{style:{fontSize:"0.875rem",color:"#71717a",marginTop:"0.25rem"},children:e.jsx(n.p,{children:"Star us on GitHub"})})]})]}),e.jsx(n.hr,{}),e.jsxs("div",{style:{marginTop:"3rem",padding:"1.5rem",backgroundColor:"#fafafa",border:"1px solid #e4e4e7",borderRadius:"8px",textAlign:"center"},children:[e.jsx(n.h3,{id:"need-help",children:"Need Help?"}),e.jsx("p",{style:{color:"#71717a",marginBottom:"1rem"},children:e.jsx(n.p,{children:"Join our community or reach out to the team!"})}),e.jsxs("div",{style:{display:"flex",gap:"1.5rem",justifyContent:"center",flexWrap:"wrap"},children:[e.jsx("a",{href:"https://github.com/gwindui/gwindui/discussions",target:"_blank",style:{textDecoration:"none",color:"#18181b",fontWeight:"500"},children:e.jsx(n.p,{children:"💬 Discussions"})}),e.jsx("a",{href:"https://github.com/gwindui/gwindui/issues",target:"_blank",style:{textDecoration:"none",color:"#18181b",fontWeight:"500"},children:e.jsx(n.p,{children:"🐛 Issues"})}),e.jsx("a",{href:"https://github.com/gwindui/gwindui",target:"_blank",style:{textDecoration:"none",color:"#18181b",fontWeight:"500"},children:e.jsx(n.p,{children:"⭐ GitHub"})})]})]})]})]})}function c(i={}){const{wrapper:n}={...t(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(r,{...i})}):r(i)}export{c as default};
