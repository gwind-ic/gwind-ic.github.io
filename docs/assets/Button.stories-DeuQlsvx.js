import{_ as a}from"./button-Cr1_wFBW.js";import"./iframe-c4IY6zQp.js";import"./preload-helper-DKj51lX3.js";import"./utils-DFIdVO4u.js";import"./Primitive-jOHN3RPP.js";import"./index-QLIpZy2_.js";const la={title:"Components/Button",component:a,tags:["autodocs"],parameters:{docs:{description:{component:`
**Button** adalah komponen tombol interaktif yang dapat diklik untuk memicu aksi atau event tertentu. Komponen ini mendukung berbagai variant visual, ukuran, dan state.

### Penggunaan Dasar
\`\`\`vue
<Button variant="primary" size="md" @click="handleClick">
  Klik Saya
</Button>
\`\`\`

### Dengan Icon
\`\`\`vue
<Button variant="primary" size="md">
  <IconCheck class="mr-2" />
  Simpan
</Button>
\`\`\`

### Loading State
\`\`\`vue
<Button variant="primary" :disabled="isLoading">
  <IconLoader v-if="isLoading" class="animate-spin mr-2" />
  {{ isLoading ? 'Memproses...' : 'Submit' }}
</Button>
\`\`\`

### Props
| Prop | Tipe | Default | Deskripsi |
|------|------|---------|-----------|
| \`variant\` | \`'default' \\| 'primary' \\| 'destructive' \\| 'outline' \\| 'secondary' \\| 'ghost' \\| 'link' \\| 'neutral' \\| 'tertiary' \\| 'icon'\` | \`'default'\` | Variant tampilan button |
| \`size\` | \`'sm' \\| 'md' \\| 'lg' \\| 'xl' \\| 'fab'\` | \`'md'\` | Ukuran button |
| \`disabled\` | \`boolean\` | \`false\` | Nonaktifkan button |
| \`asChild\` | \`boolean\` | \`false\` | Render sebagai child component (delegation pattern) |
| \`class\` | \`string\` | — | Class CSS tambahan |

### Variant Descriptions
- **primary**: Aksi utama/paling penting pada halaman
- **default**: Aksi standar dengan emphasis sedang  
- **destructive**: Aksi berbahaya seperti hapus/batalkan
- **outline**: Aksi sekunder dengan border saja
- **secondary**: Aksi sekunder dengan background subtle
- **ghost**: Aksi tertiary minimal tanpa background
- **link**: Tampil seperti hyperlink
- **neutral**: Neutral button untuk aksi umum
- **tertiary**: Aksi tertiary dengan style minimal
- **icon**: Untuk button yang hanya berisi icon

### Events
| Event | Payload | Deskripsi |
|-------|---------|-----------|
| \`@click\` | \`MouseEvent\` | Dipanggil saat button diklik |
                `}}},argTypes:{variant:{control:"select",options:["default","primary","destructive","outline","combobox","secondary","ghost","link","neutral","tertiary","icon"],description:"Variant tampilan visual button yang menentukan warna dan style",table:{type:{summary:"string"},defaultValue:{summary:"default"}}},size:{control:"select",options:["sm","md","lg","xl","fab"],description:"Ukuran button (tinggi dan padding)",table:{type:{summary:"string"},defaultValue:{summary:"md"}}},disabled:{control:"boolean",description:"Nonaktifkan button dan cegah interaksi",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},class:{control:"text",description:"Class CSS tambahan untuk kustomisasi",table:{type:{summary:"string"}}},asChild:{control:"boolean",description:"Render button sebagai child component (untuk custom elements)",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}}},args:{default:"Button",variant:"primary",size:"md",disabled:!1},render:(k,{slots:ra})=>({components:{Button:a},setup(){return{args:k,slots:ra}},template:`
      <Button v-bind="args">
        {{args.default}}
      </Button>
    `})},n={name:"Default",args:{variant:"default"},parameters:{docs:{description:{story:"Button standar dengan styling default. Cocok untuk aksi umum yang tidak memerlukan emphasis khusus."}}}},t={name:"Primary",args:{variant:"primary"},parameters:{docs:{description:{story:"Button utama dengan emphasis tinggi. Gunakan untuk call-to-action utama seperti 'Simpan', 'Submit', atau 'Lanjutkan'."}}}},e={name:"Destructive",args:{variant:"destructive"},parameters:{docs:{description:{story:"Button untuk aksi berbahaya atau permanen seperti 'Hapus', 'Batalkan Pesanan', atau 'Keluar'. Biasanya berwarna merah."}}}},r={name:"Outline",args:{variant:"outline"},parameters:{docs:{description:{story:"Button dengan border saja tanpa background solid. Cocok untuk aksi sekunder yang memerlukan visibility sedang."}}}},s={name:"Combobox",args:{variant:"combobox"},parameters:{docs:{description:{story:"Variant khusus untuk trigger combobox atau dropdown selector dengan styling yang sesuai."}}}},i={name:"Secondary",args:{variant:"secondary"},parameters:{docs:{description:{story:"Button sekunder dengan background subtle. Gunakan untuk aksi pendukung yang masih perlu terlihat."}}}},o={name:"Ghost",args:{variant:"ghost"},parameters:{docs:{description:{story:"Button minimal tanpa background. Cocok untuk aksi tertiary atau button dalam toolbar. Hanya menampilkan hover state."}}}},u={name:"Link",args:{variant:"link"},parameters:{docs:{description:{story:"Button yang tampil seperti hyperlink. Cocok untuk navigasi inline atau aksi yang menyerupai link."}}}},d={name:"Neutral",args:{variant:"neutral"},parameters:{docs:{description:{story:"Button netral untuk aksi umum tanpa konteks spesifik. Alternatif dari default dengan nuansa berbeda."}}}},m={name:"Tertiary",args:{variant:"tertiary"},parameters:{docs:{description:{story:"Button tertiary dengan emphasis paling rendah. Cocok untuk aksi yang jarang digunakan atau kurang penting."}}}},l={name:"Button with Icon",args:{icon:!0,variant:"primary",size:"md",label:"Button Icon"},parameters:{docs:{description:{story:"Button dengan icon di dalamnya. Gunakan slot default untuk menambahkan icon SVG atau komponen icon. Icon variant cocok untuk button yang hanya berisi icon tanpa text."}}},render:k=>({components:{Button:a},setup(){return{args:k}},template:`
      <Button v-bind="args" @click="args.onClick">
           {{args.label}}
          <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path fill-rule='evenodd' clip-rule='evenodd' d='M18.0421 10.6771C18.3546 11.0448 18.7972 11.2747 19.2872 11.2747C19.4131 11.2747 19.5359 11.2595 19.6541 11.2307C19.4718 12.9019 19.0859 15.0111 18.2693 16.4454V16.4453H12.0001H5.73064V16.4453C4.91399 15.011 4.52812 12.902 4.34583 11.2309C4.46407 11.2596 4.58685 11.2748 4.71276 11.2748C5.20282 11.2748 5.64543 11.0449 5.95789 10.6771C6.47266 11.3167 7.22072 11.7199 8.05192 11.7199C9.39751 11.7199 10.5251 10.6633 10.798 9.25751C11.1075 9.59651 11.5321 9.806 12 9.806H12.0001V9.80615C12.4679 9.80608 12.8925 9.59662 13.2019 9.2577C13.4748 10.6634 14.6025 11.7199 15.9481 11.7199C16.7793 11.7199 17.5274 11.3167 18.0421 10.6771Z' fill='#FFC02E'/>
            <mask id='mask0_0_6437' style='mask-variant:alpha' maskUnits='userSpaceOnUse' x='3' y='6' width='18' height='13'>
              <path fill-rule='evenodd' clip-rule='evenodd' d='M12 6C11.0556 6 10.2872 6.85373 10.2872 7.90308C10.2872 8.43257 10.4829 8.91222 10.798 9.2575C10.5252 10.6633 9.39752 11.7199 8.05193 11.7199C7.22073 11.7199 6.47267 11.3167 5.9579 10.6771C6.24759 10.3361 6.4254 9.87657 6.4254 9.37173C6.4254 8.32239 5.65718 7.46866 4.71277 7.46866C3.76836 7.46866 3 8.32239 3 9.37173C3 10.2812 3.57714 11.0437 4.34583 11.2308C4.52813 12.902 4.914 15.011 5.73065 16.4453V18.2017C5.73065 18.527 5.96796 18.7907 6.26074 18.7907H12.0001H17.7393C18.032 18.7907 18.2693 18.527 18.2693 18.2017V16.4454C19.086 15.0111 19.4718 12.9019 19.6541 11.2307C20.4228 11.0436 21 10.2811 21 9.37173C21 8.32239 20.2316 7.46866 19.2872 7.46866C18.3428 7.46866 17.5746 8.32239 17.5746 9.37173C17.5746 9.87652 17.7524 10.3361 18.0421 10.6771C17.5274 11.3167 16.7793 11.7199 15.9481 11.7199C14.6025 11.7199 13.4748 10.6634 13.2019 9.25769C13.4383 8.9987 13.6075 8.66411 13.6773 8.28957C13.7005 8.16474 13.7128 8.03546 13.7128 7.90308C13.7128 7.60772 13.6519 7.32787 13.5434 7.07818C13.2663 6.44082 12.6787 6.00006 12.0001 6H12Z' fill='white'/>
            </mask>
            <g mask='url(#mask0_0_6437)'>
              <rect width='24' height='24' fill='currentColor'/>
            </g>
          </svg>
      </Button>
    `})},c={name:"All Sizes",parameters:{docs:{description:{story:"Berbagai ukuran button yang tersedia: Small (sm), Medium (md), Large (lg), Extra Large (xl), dan FAB (Floating Action Button)."}}},render:()=>({components:{Button:a},template:`
      <div class="flex items-center gap-4 flex-wrap">
        <Button variant="primary" size="sm">Small</Button>
        <Button variant="primary" size="md">Medium</Button>
        <Button variant="primary" size="lg">Large</Button>
        <Button variant="primary" size="xl">Extra Large</Button>
        <Button variant="primary" size="fab">FAB</Button>
      </div>
    `})},p={name:"Disabled State",args:{variant:"primary",disabled:!0,default:"Disabled Button"},parameters:{docs:{description:{story:"Button dalam state disabled tidak dapat diklik dan menampilkan visual yang menunjukkan bahwa button tidak aktif. Gunakan untuk mencegah aksi saat kondisi tertentu belum terpenuhi."}}}},g={name:"All Variants Showcase",parameters:{docs:{description:{story:"Tampilan semua variant button dalam satu view untuk perbandingan visual yang mudah."}}},render:()=>({components:{Button:a},template:`
      <div class="flex flex-col gap-4">
        <div class="flex items-center gap-4 flex-wrap">
          <Button variant="primary">Primary</Button>
          <Button variant="default">Default</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="tertiary">Tertiary</Button>
        </div>
        <div class="flex items-center gap-4 flex-wrap">
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Link</Button>
          <Button variant="neutral">Neutral</Button>
        </div>
        <div class="flex items-center gap-4 flex-wrap">
          <Button variant="destructive">Destructive</Button>
          <Button variant="combobox">Combobox</Button>
        </div>
      </div>
    `})};var y,v,b;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: "Default",
  args: {
    variant: "default"
  },
  parameters: {
    docs: {
      description: {
        story: "Button standar dengan styling default. Cocok untuk aksi umum yang tidak memerlukan emphasis khusus."
      }
    }
  }
}`,...(b=(v=n.parameters)==null?void 0:v.docs)==null?void 0:b.source}}};var B,C,h;t.parameters={...t.parameters,docs:{...(B=t.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: "Primary",
  args: {
    variant: "primary"
  },
  parameters: {
    docs: {
      description: {
        story: "Button utama dengan emphasis tinggi. Gunakan untuk call-to-action utama seperti 'Simpan', 'Submit', atau 'Lanjutkan'."
      }
    }
  }
}`,...(h=(C=t.parameters)==null?void 0:C.docs)==null?void 0:h.source}}};var f,x,S;e.parameters={...e.parameters,docs:{...(f=e.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: "Destructive",
  args: {
    variant: "destructive"
  },
  parameters: {
    docs: {
      description: {
        story: "Button untuk aksi berbahaya atau permanen seperti 'Hapus', 'Batalkan Pesanan', atau 'Keluar'. Biasanya berwarna merah."
      }
    }
  }
}`,...(S=(x=e.parameters)==null?void 0:x.docs)==null?void 0:S.source}}};var w,D,V;r.parameters={...r.parameters,docs:{...(w=r.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: "Outline",
  args: {
    variant: "outline"
  },
  parameters: {
    docs: {
      description: {
        story: "Button dengan border saja tanpa background solid. Cocok untuk aksi sekunder yang memerlukan visibility sedang."
      }
    }
  }
}`,...(V=(D=r.parameters)==null?void 0:D.docs)==null?void 0:V.source}}};var z,A,L;s.parameters={...s.parameters,docs:{...(z=s.parameters)==null?void 0:z.docs,source:{originalSource:`{
  name: "Combobox",
  args: {
    variant: "combobox"
  },
  parameters: {
    docs: {
      description: {
        story: "Variant khusus untuk trigger combobox atau dropdown selector dengan styling yang sesuai."
      }
    }
  }
}`,...(L=(A=s.parameters)==null?void 0:A.docs)==null?void 0:L.source}}};var G,H,_;i.parameters={...i.parameters,docs:{...(G=i.parameters)==null?void 0:G.docs,source:{originalSource:`{
  name: "Secondary",
  args: {
    variant: "secondary"
  },
  parameters: {
    docs: {
      description: {
        story: "Button sekunder dengan background subtle. Gunakan untuk aksi pendukung yang masih perlu terlihat."
      }
    }
  }
}`,...(_=(H=i.parameters)==null?void 0:H.docs)==null?void 0:_.source}}};var P,I,T;o.parameters={...o.parameters,docs:{...(P=o.parameters)==null?void 0:P.docs,source:{originalSource:`{
  name: "Ghost",
  args: {
    variant: "ghost"
  },
  parameters: {
    docs: {
      description: {
        story: "Button minimal tanpa background. Cocok untuk aksi tertiary atau button dalam toolbar. Hanya menampilkan hover state."
      }
    }
  }
}`,...(T=(I=o.parameters)==null?void 0:I.docs)==null?void 0:T.source}}};var E,F,M;u.parameters={...u.parameters,docs:{...(E=u.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: "Link",
  args: {
    variant: "link"
  },
  parameters: {
    docs: {
      description: {
        story: "Button yang tampil seperti hyperlink. Cocok untuk navigasi inline atau aksi yang menyerupai link."
      }
    }
  }
}`,...(M=(F=u.parameters)==null?void 0:F.docs)==null?void 0:M.source}}};var j,N,O;d.parameters={...d.parameters,docs:{...(j=d.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: "Neutral",
  args: {
    variant: "neutral"
  },
  parameters: {
    docs: {
      description: {
        story: "Button netral untuk aksi umum tanpa konteks spesifik. Alternatif dari default dengan nuansa berbeda."
      }
    }
  }
}`,...(O=(N=d.parameters)==null?void 0:N.docs)==null?void 0:O.source}}};var U,K,Z;m.parameters={...m.parameters,docs:{...(U=m.parameters)==null?void 0:U.docs,source:{originalSource:`{
  name: "Tertiary",
  args: {
    variant: "tertiary"
  },
  parameters: {
    docs: {
      description: {
        story: "Button tertiary dengan emphasis paling rendah. Cocok untuk aksi yang jarang digunakan atau kurang penting."
      }
    }
  }
}`,...(Z=(K=m.parameters)==null?void 0:K.docs)==null?void 0:Z.source}}};var R,q,J;l.parameters={...l.parameters,docs:{...(R=l.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: "Button with Icon",
  args: {
    icon: true,
    variant: "primary",
    size: "md",
    label: "Button Icon"
  },
  parameters: {
    docs: {
      description: {
        story: "Button dengan icon di dalamnya. Gunakan slot default untuk menambahkan icon SVG atau komponen icon. Icon variant cocok untuk button yang hanya berisi icon tanpa text."
      }
    }
  },
  render: (args: string) => ({
    components: {
      Button
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <Button v-bind="args" @click="args.onClick">
           {{args.label}}
          <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path fill-rule='evenodd' clip-rule='evenodd' d='M18.0421 10.6771C18.3546 11.0448 18.7972 11.2747 19.2872 11.2747C19.4131 11.2747 19.5359 11.2595 19.6541 11.2307C19.4718 12.9019 19.0859 15.0111 18.2693 16.4454V16.4453H12.0001H5.73064V16.4453C4.91399 15.011 4.52812 12.902 4.34583 11.2309C4.46407 11.2596 4.58685 11.2748 4.71276 11.2748C5.20282 11.2748 5.64543 11.0449 5.95789 10.6771C6.47266 11.3167 7.22072 11.7199 8.05192 11.7199C9.39751 11.7199 10.5251 10.6633 10.798 9.25751C11.1075 9.59651 11.5321 9.806 12 9.806H12.0001V9.80615C12.4679 9.80608 12.8925 9.59662 13.2019 9.2577C13.4748 10.6634 14.6025 11.7199 15.9481 11.7199C16.7793 11.7199 17.5274 11.3167 18.0421 10.6771Z' fill='#FFC02E'/>
            <mask id='mask0_0_6437' style='mask-variant:alpha' maskUnits='userSpaceOnUse' x='3' y='6' width='18' height='13'>
              <path fill-rule='evenodd' clip-rule='evenodd' d='M12 6C11.0556 6 10.2872 6.85373 10.2872 7.90308C10.2872 8.43257 10.4829 8.91222 10.798 9.2575C10.5252 10.6633 9.39752 11.7199 8.05193 11.7199C7.22073 11.7199 6.47267 11.3167 5.9579 10.6771C6.24759 10.3361 6.4254 9.87657 6.4254 9.37173C6.4254 8.32239 5.65718 7.46866 4.71277 7.46866C3.76836 7.46866 3 8.32239 3 9.37173C3 10.2812 3.57714 11.0437 4.34583 11.2308C4.52813 12.902 4.914 15.011 5.73065 16.4453V18.2017C5.73065 18.527 5.96796 18.7907 6.26074 18.7907H12.0001H17.7393C18.032 18.7907 18.2693 18.527 18.2693 18.2017V16.4454C19.086 15.0111 19.4718 12.9019 19.6541 11.2307C20.4228 11.0436 21 10.2811 21 9.37173C21 8.32239 20.2316 7.46866 19.2872 7.46866C18.3428 7.46866 17.5746 8.32239 17.5746 9.37173C17.5746 9.87652 17.7524 10.3361 18.0421 10.6771C17.5274 11.3167 16.7793 11.7199 15.9481 11.7199C14.6025 11.7199 13.4748 10.6634 13.2019 9.25769C13.4383 8.9987 13.6075 8.66411 13.6773 8.28957C13.7005 8.16474 13.7128 8.03546 13.7128 7.90308C13.7128 7.60772 13.6519 7.32787 13.5434 7.07818C13.2663 6.44082 12.6787 6.00006 12.0001 6H12Z' fill='white'/>
            </mask>
            <g mask='url(#mask0_0_6437)'>
              <rect width='24' height='24' fill='currentColor'/>
            </g>
          </svg>
      </Button>
    \`
  })
}`,...(J=(q=l.parameters)==null?void 0:q.docs)==null?void 0:J.source}}};var Q,W,X;c.parameters={...c.parameters,docs:{...(Q=c.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  name: "All Sizes",
  parameters: {
    docs: {
      description: {
        story: "Berbagai ukuran button yang tersedia: Small (sm), Medium (md), Large (lg), Extra Large (xl), dan FAB (Floating Action Button)."
      }
    }
  },
  render: () => ({
    components: {
      Button
    },
    template: \`
      <div class="flex items-center gap-4 flex-wrap">
        <Button variant="primary" size="sm">Small</Button>
        <Button variant="primary" size="md">Medium</Button>
        <Button variant="primary" size="lg">Large</Button>
        <Button variant="primary" size="xl">Extra Large</Button>
        <Button variant="primary" size="fab">FAB</Button>
      </div>
    \`
  })
}`,...(X=(W=c.parameters)==null?void 0:W.docs)==null?void 0:X.source}}};var Y,$,aa;p.parameters={...p.parameters,docs:{...(Y=p.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  name: "Disabled State",
  args: {
    variant: "primary",
    disabled: true,
    default: "Disabled Button"
  },
  parameters: {
    docs: {
      description: {
        story: "Button dalam state disabled tidak dapat diklik dan menampilkan visual yang menunjukkan bahwa button tidak aktif. Gunakan untuk mencegah aksi saat kondisi tertentu belum terpenuhi."
      }
    }
  }
}`,...(aa=($=p.parameters)==null?void 0:$.docs)==null?void 0:aa.source}}};var na,ta,ea;g.parameters={...g.parameters,docs:{...(na=g.parameters)==null?void 0:na.docs,source:{originalSource:`{
  name: "All Variants Showcase",
  parameters: {
    docs: {
      description: {
        story: "Tampilan semua variant button dalam satu view untuk perbandingan visual yang mudah."
      }
    }
  },
  render: () => ({
    components: {
      Button
    },
    template: \`
      <div class="flex flex-col gap-4">
        <div class="flex items-center gap-4 flex-wrap">
          <Button variant="primary">Primary</Button>
          <Button variant="default">Default</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="tertiary">Tertiary</Button>
        </div>
        <div class="flex items-center gap-4 flex-wrap">
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Link</Button>
          <Button variant="neutral">Neutral</Button>
        </div>
        <div class="flex items-center gap-4 flex-wrap">
          <Button variant="destructive">Destructive</Button>
          <Button variant="combobox">Combobox</Button>
        </div>
      </div>
    \`
  })
}`,...(ea=(ta=g.parameters)==null?void 0:ta.docs)==null?void 0:ea.source}}};const ca=["Default","Primary","Destructive","Outline","Combobox","Secondary","Ghost","Link","Neutral","Tertiary","Icon","Sizes","Disabled","AllVariants"];export{g as AllVariants,s as Combobox,n as Default,e as Destructive,p as Disabled,o as Ghost,l as Icon,u as Link,d as Neutral,r as Outline,t as Primary,i as Secondary,c as Sizes,m as Tertiary,ca as __namedExportsOrder,la as default};
