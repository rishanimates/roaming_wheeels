# 🖼️ Brand Logos Needed

The brand collaboration section has been updated with placeholder emoji icons. Below are the brands that need actual logo images.

## 📋 Brands Requiring Logos

### 1. **Gulf Oil** 🛢️
- **Current**: Emoji placeholder
- **Needed**: Gulf Oil logo (PNG/SVG)
- **Suggested size**: 200x200px or vector SVG
- **Color**: Orange/Blue brand colors

### 2. **Reise Moto** 🏍️
- **Current**: Motorcycle emoji
- **Needed**: Reise Moto logo (PNG/SVG)
- **Suggested size**: 200x200px or vector SVG
- **Color**: Red/Gray brand colors

### 3. **Road Safety Drive** 🛡️
- **Current**: Shield emoji
- **Needed**: Road Safety Drive logo (PNG/SVG)
- **Suggested size**: 200x200px or vector SVG
- **Color**: Green/Emerald brand colors

### 4. **Off-Road Centre UK** 🏁
- **Current**: Racing flag emoji
- **Needed**: Off-Road Centre UK logo (PNG/SVG)
- **Suggested size**: 200x200px or vector SVG
- **Color**: Blue/Indigo brand colors

### 5. **Valley Peak Adventure** ⛰️
- **Current**: Mountain emoji
- **Needed**: Valley Peak Adventure logo (PNG/SVG)
- **Suggested size**: 200x200px or vector SVG
- **Color**: Purple/Pink brand colors

### 6. **Moskomoto** 📸
- **Current**: Camera emoji
- **Needed**: Moskomoto logo (PNG/SVG)
- **Suggested size**: 200x200px or vector SVG
- **Color**: Teal/Cyan brand colors

### 7. **PS Customs International** 🔧
- **Current**: Wrench emoji
- **Needed**: PS Customs International logo (PNG/SVG)
- **Suggested size**: 200x200px or vector SVG
- **Color**: Yellow/Orange brand colors

---

## 📁 Where to Add Logos

Once you have the logo files:

1. **Add logos to**: `/public/logos/` folder (create if doesn't exist)
2. **Naming convention**: Use lowercase with hyphens
   - `gulf-oil.png` or `gulf-oil.svg`
   - `reise-moto.png` or `reise-moto.svg`
   - `road-safety-drive.png` or `road-safety-drive.svg`
   - `offroad-centre-uk.png` or `offroad-centre-uk.svg`
   - `valley-peak-adventure.png` or `valley-peak-adventure.svg`
   - `moskomoto.png` or `moskomoto.svg`
   - `ps-customs-international.png` or `ps-customs-international.svg`

3. **File format preferences**:
   - **Best**: SVG (scalable, small file size, perfect quality)
   - **Alternative**: PNG with transparent background
   - **Size**: 200x200px minimum, 500x500px recommended
   - **Background**: Transparent preferred

---

## 🔧 How to Update After Adding Logos

After you add the logo files to `/public/logos/`, update the Partners component:

### In `src/components/Partners.tsx`:

Replace emoji placeholders with Next.js Image components:

```tsx
import Image from "next/image";

const currentPartners = [
    {
        name: "Gulf Oil",
        type: "Oil Partner",
        logo: "/logos/gulf-oil.svg", // Changed from emoji
        description: "Premium lubricants powering the journey across continents",
        color: "from-orange-500 to-blue-500"
    },
    // ... repeat for other brands
];
```

Then in the component JSX (around line 139), change:

```tsx
// FROM:
<div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${partner.color} flex items-center justify-center mx-auto mb-4 text-4xl group-hover:scale-110 transition-transform`}>
    {partner.logo}
</div>

// TO:
<div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${partner.color} flex items-center justify-center mx-auto mb-4 p-3 group-hover:scale-110 transition-transform overflow-hidden`}>
    <Image 
        src={partner.logo}
        alt={`${partner.name} logo`}
        width={80}
        height={80}
        className="object-contain"
    />
</div>
```

---

## ✅ Current Status

| Brand | Logo Status | File Path |
|-------|-------------|-----------|
| Gulf Oil | ⏳ Placeholder | Need logo |
| Reise Moto | ⏳ Placeholder | Need logo |
| Road Safety Drive | ⏳ Placeholder | Need logo |
| Off-Road Centre UK | ⏳ Placeholder | Need logo |
| Valley Peak Adventure | ⏳ Placeholder | Need logo |
| Moskomoto | ⏳ Placeholder | Need logo |
| PS Customs International | ⏳ Placeholder | Need logo |

---

## 📧 Request Logos From Partners

You can send this email template to partners:

```
Subject: Logo Request for Roaming Wheels Website

Hi [Partner Name],

We're updating the brand collaboration section on the Roaming Wheels website 
and would like to feature your logo prominently.

Could you please provide:
- High-resolution logo (SVG preferred, or PNG with transparent background)
- Minimum 200x200px (500x500px recommended)
- Both color and white versions if available

This will be displayed on: https://roamingwheels.com (Partners section)

Thank you!
```

---

## 🎨 Logo Guidelines

For best display:
- ✅ Transparent background
- ✅ Square or horizontal layout works best
- ✅ High contrast (will be on dark background)
- ✅ Vector format (SVG) preferred
- ❌ Avoid very thin lines (may not be visible)
- ❌ Avoid very light colors (hard to see on dark bg)

---

**When you have the logos ready, let me know and I'll help you integrate them properly!** 🚀
