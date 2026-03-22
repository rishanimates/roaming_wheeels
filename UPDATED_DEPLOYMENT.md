# 🎉 Studio Now Available on Your Website!

Your admin panel is now embedded directly on your website at `/studio`!

---

## 📍 Access Your Admin Panel

### Development:
```bash
npm run dev
```
Then go to: **http://localhost:3000/studio** (or 3001/3002)

### Production:
After deploying: **https://yourwebsite.com/studio**

---

## 🚀 Deployment Options

Since you removed static export, you need a platform that supports Next.js:

### **Option 1: Vercel (Recommended)** ⭐

**Why Vercel:**
- Built for Next.js (by Next.js creators)
- Free tier generous
- Automatic deployments from Git
- Built-in SSL
- Global CDN

**Deploy:**
1. Go to https://vercel.com
2. Sign up/Login
3. Import your Git repository
4. Add environment variables:
   - `NEXT_PUBLIC_SANITY_PROJECT_ID` = `2vzs8piy`
   - `NEXT_PUBLIC_SANITY_DATASET` = `production`
5. Deploy!

Your site: `https://your-project.vercel.app`
Your admin: `https://your-project.vercel.app/studio`

---

### **Option 2: Netlify**

**Deploy:**
1. Go to https://netlify.com
2. Import repository
3. Build command: `npm run build`
4. Publish directory: `.next`
5. Add environment variables
6. Deploy!

---

### **Option 3: Railway**

**Deploy:**
1. Go to https://railway.app
2. New Project → Deploy from GitHub
3. Add environment variables
4. Deploy!

---

## ⚙️ Environment Variables (All Platforms)

Add these to your deployment platform:

```
NEXT_PUBLIC_SANITY_PROJECT_ID=2vzs8piy
NEXT_PUBLIC_SANITY_DATASET=production
```

---

## 🔐 Add Production URL to CORS

After deploying, add your domain to Sanity:

1. Go to https://www.sanity.io/manage
2. Select project (2vzs8piy)
3. API → CORS Origins → Add
4. Add: `https://your-deployed-site.com`
5. Check "Allow credentials"
6. Save

---

## 📝 Writing Blog Posts

1. Go to: **yourwebsite.com/studio**
2. Sign in with Sanity account
3. Create blog posts with rich text editor
4. Publish!
5. Posts appear on your website immediately

---

## 🎯 What Changed

**Before:**
- Static export only
- Studio needed separate hosting
- Deploy to Cloudflare Pages

**Now:**
- Full Next.js with SSR
- Studio embedded at `/studio`
- Deploy to Vercel/Netlify (still free!)
- Everything on one domain

---

## 💰 Cost

All free options:
- ✅ Vercel Free Tier
- ✅ Netlify Free Tier  
- ✅ Railway Free Tier
- ✅ Sanity Free Tier

---

## 🆘 Want Static Export Back?

If you need Cloudflare Pages and static export:

1. Revert `next.config.ts` (add `output: 'export'` back)
2. Use separate Studio: `npx sanity deploy`
3. Admin at: `yourblog.sanity.studio`

Let me know if you want this instead!

---

**You can now write blog posts directly on your own website!** 🎉


