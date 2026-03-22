# 🚀 Cloudflare Pages + Sanity Studio Setup

Perfect setup for maximum speed and free hosting! ⚡

---

## 📋 Your Configuration

✅ **Website**: Static export (lightning fast!)  
✅ **Deploy to**: Cloudflare Pages (FREE)  
✅ **Studio**: Separate Sanity-hosted admin (FREE)  
✅ **Blog Data**: Fetched from Sanity API  

---

## 🎯 Part 1: Deploy Sanity Studio (Admin Panel)

This is where you'll write your blog posts.

### Run these 2 commands:

```bash
cd "/Users/rpatil/development/2026/latitudes Tech/projects/roaming_wheeels"

# 1. Login to Sanity (opens browser)
npx sanity login

# 2. Deploy Studio to Sanity Cloud (FREE hosting)
npx sanity deploy
```

### Choose a hostname when prompted:
- Example: `roamingwheels` or `roaming-wheels-blog`
- Your admin URL will be: `https://your-chosen-name.sanity.studio`

**That's it!** Your admin panel is now live! 🎉

---

## 🌐 Part 2: Deploy Website to Cloudflare Pages

### Option A: Via Cloudflare Dashboard (Easiest)

1. **Push your code to GitHub/GitLab**
   ```bash
   git add .
   git commit -m "Add Sanity CMS integration"
   git push
   ```

2. **Go to Cloudflare Pages**
   - Visit: https://pages.cloudflare.com
   - Click "Create a project"
   - Connect your Git repository

3. **Configure Build Settings:**
   - **Framework preset**: Next.js (Static HTML Export)
   - **Build command**: `npm run build`
   - **Build output directory**: `out`

4. **Add Environment Variables:**
   ```
   NEXT_PUBLIC_SANITY_PROJECT_ID = 2vzs8piy
   NEXT_PUBLIC_SANITY_DATASET = production
   NODE_VERSION = 18
   ```

5. **Click "Save and Deploy"**

Your website will be live at: `https://your-project.pages.dev`

---

### Option B: Via Wrangler CLI

You already have `wrangler.json` configured!

```bash
# Build your site
npm run build

# Deploy to Cloudflare Pages
npx wrangler pages deploy out --project-name=roaming-wheels
```

---

## 🔐 Part 3: Update CORS for Production

After deploying both, add your website domain to Sanity CORS:

1. Go to https://www.sanity.io/manage
2. Select your project (2vzs8piy)
3. **API** → **CORS Origins** → **Add CORS Origin**
4. Add your Cloudflare Pages URL:
   - `https://your-project.pages.dev`
   - (Or your custom domain if you add one)
5. Check ✅ **"Allow credentials"**
6. Save

---

## ✍️ Part 4: Writing Blog Posts

### Access Your Admin:
- **Production**: `https://your-chosen-name.sanity.studio`
- **Development**: `npx sanity start` → `http://localhost:3333`

### Create Your First Post:

1. Go to your Studio URL
2. Sign in with Sanity account
3. Click **"Blog Post"** → **"Create"**
4. Fill in all fields:
   - **Title**: Your blog post title
   - **Slug**: Click "Generate" button
   - **Excerpt**: Short summary (max 200 chars)
   - **Featured Image**: Upload image (drag & drop)
   - **Category**: Choose one (Adventures, Challenges, Culture, Tips, Reflections)
   - **Location**: Where the story happened
   - **Content**: Write with rich text editor
   - **Featured Post**: Toggle ON for larger display
   - **Read Time**: Estimated minutes (e.g., 8)
   - **Published At**: Auto-filled (can change)
5. Click **"Publish"** (bottom right)

### View on Your Website:
- Go to your Cloudflare Pages URL
- Scroll to Blog section
- Your post appears! 🎉

---

## 🔄 Development Workflow

### Working on your website:
```bash
npm run dev
```
Website: `http://localhost:3000`

### Working on content:
**Option 1** - Use production Studio:
- Go to: `https://your-name.sanity.studio`

**Option 2** - Run Studio locally:
```bash
npx sanity start
```
Studio: `http://localhost:3333`

### Deploying updates:
```bash
# Push changes
git add .
git commit -m "Your changes"
git push

# Cloudflare Pages auto-deploys from Git!
# Or manually: npm run build && npx wrangler pages deploy out
```

---

## 🎯 How Data Flows

```
┌─────────────────────────────┐
│  YOU WRITE POSTS            │
│  Studio Admin Panel         │
│  https://your-name.sanity.studio
└──────────┬──────────────────┘
           │
           │ Content saved to
           ▼
┌─────────────────────────────┐
│  SANITY CLOUD               │
│  - Stores all content       │
│  - CDN for images           │
│  - API for fetching         │
└──────────┬──────────────────┘
           │
           │ API fetches data
           ▼
┌─────────────────────────────┐
│  YOUR WEBSITE               │
│  Cloudflare Pages           │
│  https://your-site.pages.dev│
└─────────────────────────────┘
```

---

## 💰 Total Cost: $0/month

| Service | Cost |
|---------|------|
| Cloudflare Pages | **FREE** (500 builds/month) |
| Sanity CMS | **FREE** (3 users, unlimited API) |
| Sanity Studio Hosting | **FREE** (included) |
| Image CDN | **FREE** (10GB bandwidth) |
| SSL Certificates | **FREE** (auto) |
| **TOTAL** | **$0/month** ✨ |

---

## 🎨 Rich Text Editor Features

Your Sanity Studio includes:

**Formatting:**
- Bold, italic, underline, strikethrough, code

**Structure:**
- Headings (H1-H4)
- Bullet & numbered lists
- Blockquotes

**Media:**
- Drag & drop images inline
- Image captions & alt text
- Automatic optimization & CDN

**Links:**
- External & internal links

**Code:**
- Syntax-highlighted code blocks

---

## 🔧 Custom Domain (Optional)

### Add your own domain to Cloudflare Pages:

1. In Cloudflare Pages dashboard
2. Go to your project → **Custom domains**
3. Add your domain (e.g., `roamingwheels.com`)
4. Follow DNS instructions
5. Update Sanity CORS with new domain

---

## 👥 Team Collaboration

### Add team members to edit content:

1. Go to https://www.sanity.io/manage
2. Select your project (2vzs8piy)
3. **Members** tab → **Invite Member**
4. Enter their email
5. Choose role:
   - **Administrator**: Full access
   - **Editor**: Can create/edit posts
   - **Viewer**: Read-only

They can login at your Studio URL!

---

## 🆘 Troubleshooting

### Posts not showing on website?
- ✅ Ensure posts are **Published** (not drafts)
- ✅ Check publication date isn't in future
- ✅ Clear browser cache
- ✅ Verify Project ID in `.env.local` is `2vzs8piy`
- ✅ Redeploy site from Cloudflare dashboard

### Can't access Studio?
- ✅ Did you run `npx sanity deploy`?
- ✅ Check the URL matches what you chose
- ✅ Run `npx sanity login` first
- ✅ Check internet connection

### Build failing on Cloudflare?
- ✅ Check environment variables are set
- ✅ Verify build command is `npm run build`
- ✅ Output directory should be `out`
- ✅ Node version set to 18 or higher

### CORS errors in browser?
- ✅ Add your Cloudflare Pages URL to Sanity CORS
- ✅ Check "Allow credentials" is enabled
- ✅ Clear browser cache

---

## 📚 Your Documentation Files

| File | Purpose |
|------|---------|
| `CLOUDFLARE_SETUP.md` | This file - complete guide |
| `README_CMS.md` | Detailed CMS documentation |
| `SANITY_SETUP_GUIDE.md` | Initial Sanity setup |
| `DEPLOY_STUDIO.md` | Studio deployment only |
| `FINAL_SETUP.md` | Previous setup summary |

---

## 🎉 Quick Command Reference

```bash
# Development
npm run dev                    # Run website locally
npx sanity start              # Run Studio locally

# Building
npm run build                 # Build static site

# Deployment
npx sanity deploy             # Deploy Studio
git push                      # Auto-deploys website (if connected)
npx wrangler pages deploy out # Manual website deploy

# Maintenance
npx sanity login              # Login to Sanity
npx sanity cors add <url>     # Add CORS origin
```

---

## ✅ Next Steps

1. **Deploy Studio** (2 minutes)
   ```bash
   npx sanity login
   npx sanity deploy
   ```

2. **Deploy Website** to Cloudflare Pages (5 minutes)
   - Via dashboard: https://pages.cloudflare.com
   - Or CLI: `npm run build && npx wrangler pages deploy out`

3. **Add CORS** for your production domain

4. **Write your first blog post!** 🎉

---

**You're all set for the perfect static site + CMS combo!** 🚀⚡

Fast website on Cloudflare + Powerful admin on Sanity = Best of both worlds!


