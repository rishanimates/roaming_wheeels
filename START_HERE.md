# 🚀 START HERE - Quick Setup

## ✅ What You Have Now

- ✅ Website with CMS integration complete
- ✅ Static build working perfectly
- ✅ Ready for Cloudflare Pages deployment
- ✅ Project ID: `2vzs8piy`
- ✅ CORS configured for localhost

---

## 🎯 Two Simple Steps to Go Live

### Step 1: Deploy Your Admin Panel (2 minutes)

Run these commands:

```bash
cd "/Users/rpatil/development/2026/latitudes Tech/projects/roaming_wheeels"
npx sanity login
npx sanity deploy
```

Choose a hostname (e.g., `roamingwheels`)

**Your admin:** `https://your-chosen-name.sanity.studio`

---

### Step 2: Deploy Website to Cloudflare Pages (5 minutes)

**Option A: Via Cloudflare Dashboard** (Easiest)

1. Push code to GitHub:
   ```bash
   git add .
   git commit -m "Add CMS"
   git push
   ```

2. Go to https://pages.cloudflare.com
3. Connect your repository
4. Build settings:
   - Build command: `npm run build`
   - Output directory: `out`
   - Add environment variable: 
     ```
     NEXT_PUBLIC_SANITY_PROJECT_ID=2vzs8piy
     NEXT_PUBLIC_SANITY_DATASET=production
     ```
5. Deploy!

**Option B: Via CLI** (Quick)

```bash
npm run build
npx wrangler pages deploy out --project-name=roaming-wheels
```

---

## ✍️ Writing Your First Blog Post

1. Go to: `https://your-chosen-name.sanity.studio`
2. Sign in
3. Click "Blog Post" → "Create"
4. Fill in fields and click "Publish"
5. Check your website - post appears!

---

## 📚 Need More Details?

See **CLOUDFLARE_SETUP.md** for complete guide

---

## 💰 Cost: $0/month

Everything is free! ✨

---

**That's it! You're ready to go live!** 🎉


