# 📝 Content Management System - Complete Guide

## 🎯 Your Setup

Your Roaming Wheels website now has a professional CMS powered by Sanity.io!

### How It Works:

```
┌──────────────────────┐
│   Sanity Studio      │ ← You write/edit posts here
│  (Admin Panel)       │   https://your-name.sanity.studio
└──────────┬───────────┘
           │
           │ Content stored in Sanity Cloud
           ▼
┌──────────────────────┐
│   Your Website       │ ← Automatically fetches posts
│  (Static Site)       │   yourwebsite.com
└──────────────────────┘
```

---

## 🚀 Quick Start

### 1. Deploy Your Admin Panel (One Time Setup)

```bash
cd "/Users/rpatil/development/2026/latitudes Tech/projects/roaming_wheeels"
npx sanity login
npx sanity deploy
```

Choose a hostname (e.g., `roamingwheels`)

Your admin panel: `https://roamingwheels.sanity.studio`

### 2. Create Your First Blog Post

1. Go to your Studio URL
2. Sign in
3. Click "Blog Post" → "Create"
4. Fill in:
   - **Title**: Your post title
   - **Slug**: Click "Generate"
   - **Excerpt**: Short summary
   - **Featured Image**: Upload image
   - **Category**: Choose category
   - **Location**: Where it happened
   - **Content**: Write your story with rich editor
   - **Read Time**: Estimated minutes
5. Click "Publish"

### 3. View on Your Website

Go to your website and scroll to the blog section - your post appears!

---

## 📁 What Was Created

```
roaming_wheeels/
├── sanity.config.ts              # Studio configuration
├── sanity.cli.ts                 # CLI configuration
├── .env.local                    # Your project ID (2vzs8piy)
└── src/
    ├── sanity/
    │   ├── schemas/
    │   │   ├── blogPost.ts       # Blog schema with rich text
    │   │   ├── author.ts         # Author schema
    │   │   └── index.ts
    │   └── lib/
    │       ├── client.ts         # API client
    │       ├── queries.ts        # Data queries
    │       ├── image.ts          # Image handling
    │       └── types.ts          # TypeScript types
    └── components/
        └── Blog.tsx              # Updated to fetch from Sanity
```

---

## 🎨 Content Editor Features

Your rich text editor includes:

### Text Formatting
- **Bold**, *italic*, `code`, ~~strikethrough~~, underline

### Structure
- Headings (H1, H2, H3, H4)
- Bullet lists
- Numbered lists
- Blockquotes

### Media
- Drag & drop images
- Image captions and alt text
- Automatic optimization

### Links
- External links
- Internal links

### Code
- Syntax-highlighted code blocks

---

## 📊 Blog Post Fields

| Field | Description | Required |
|-------|-------------|----------|
| **Title** | Post title | ✅ Yes |
| **Slug** | URL-friendly version | ✅ Yes |
| **Excerpt** | Short description (max 200 chars) | ✅ Yes |
| **Featured Image** | Main image | Optional |
| **Category** | Adventures, Challenges, Culture, Tips, Reflections | ✅ Yes |
| **Location** | Where the story happened | ✅ Yes |
| **Content** | Main article content with rich text | Optional |
| **Featured Post** | Show larger on homepage | Optional |
| **Published At** | Publication date | ✅ Yes |
| **Read Time** | Minutes to read | ✅ Yes |
| **Author** | Author profile | Optional |

---

## 👤 Author Management

Create author profiles:

1. In Studio, click "Author"
2. Create new author
3. Add:
   - Name
   - Slug
   - Profile image
   - Bio
4. Assign to blog posts

---

## 🔐 Access Control

### Your Admin URLs:
- **Production**: `https://your-hostname.sanity.studio`
- **Development**: `npx sanity start` → `http://localhost:3333`

### Managing Team Members:

1. Go to https://www.sanity.io/manage
2. Select project "2vzs8piy"
3. Members → Invite
4. Roles:
   - **Administrator**: Full access
   - **Editor**: Create/edit content
   - **Viewer**: Read-only

---

## 🚀 Deployment

### Your Website (Static Site)
Your website is static and can be deployed to:
- Cloudflare Pages (already configured)
- Vercel
- Netlify
- GitHub Pages

### Studio (Admin Panel)
Deploy to Sanity Cloud (free):
```bash
npx sanity deploy
```

---

## 🛠️ Development Workflow

### Local Development:

**Terminal 1 - Website:**
```bash
npm run dev
```
Website: `http://localhost:3000`

**Terminal 2 - Studio (Optional):**
```bash
npx sanity start
```
Studio: `http://localhost:3333`

### Making Changes:

1. Edit schemas in `src/sanity/schemas/`
2. Redeploy: `npx sanity deploy`

---

## 📦 NPM Scripts

```bash
npm run dev          # Start website dev server
npm run build        # Build static site
npm run start        # Preview production build
npx sanity start     # Run Studio locally
npx sanity deploy    # Deploy Studio to Sanity Cloud
```

---

## 🌐 How Data Flows

1. **Write**: Create posts in Sanity Studio
2. **Store**: Content saved to Sanity Cloud (CDN)
3. **Fetch**: Website fetches via Sanity API
4. **Display**: Blog component renders posts
5. **Cache**: CDN caches for fast loading

---

## 💡 Pro Tips

✅ **Draft Mode**: Save drafts before publishing
✅ **Version History**: Click clock icon to see revisions
✅ **Preview**: Use split-pane preview in Studio
✅ **Search**: Cmd/Ctrl + K for quick search
✅ **Keyboard Shortcuts**: Cmd/Ctrl + Enter to publish
✅ **Image Optimization**: Sanity CDN auto-optimizes images
✅ **Mobile Editing**: Studio works on tablets/phones
✅ **Backup**: All content automatically backed up

---

## 🆘 Troubleshooting

### Posts not showing on website?
- Ensure posts are **Published** (not just saved)
- Check publication date isn't in future
- Clear browser cache
- Verify Project ID in `.env.local` is `2vzs8piy`

### Can't access Studio?
- Run `npx sanity login` first
- Check you deployed: `npx sanity deploy`
- CORS already configured for `localhost:3002`

### Images not loading?
- Sanity CDN domain is in `next.config.ts` ✅
- Check image uploaded successfully in Studio
- Verify image has alt text

### Build errors?
- Website builds fine (static export)
- Studio runs separately (Sanity Cloud)
- They work independently!

---

## 💰 Cost Breakdown

| Service | Cost |
|---------|------|
| Sanity CMS | **FREE** (3 users, unlimited API) |
| Sanity Studio Hosting | **FREE** (Sanity Cloud) |
| Content Storage | **FREE** (generous limits) |
| Image CDN | **FREE** (10GB bandwidth) |
| **Total** | **$0/month** ✨ |

---

## 📚 Learn More

- [Sanity Documentation](https://www.sanity.io/docs)
- [GROQ Query Language](https://www.sanity.io/docs/groq)
- [Portable Text (Rich Text)](https://www.sanity.io/docs/presenting-block-text)
- [Studio Customization](https://www.sanity.io/docs/studio)
- [Content Modeling](https://www.sanity.io/docs/content-modelling)

---

## 🎉 You're All Set!

Your blogging CMS is ready to use:

1. ✅ Content management system integrated
2. ✅ Rich text editor ready
3. ✅ Image uploads configured
4. ✅ Categories organized
5. ✅ Free hosting available
6. ✅ API fetching working
7. ✅ Static site optimized

**Next Step:** Deploy your Studio!

```bash
npx sanity deploy
```

Happy blogging! 🏍️✨


