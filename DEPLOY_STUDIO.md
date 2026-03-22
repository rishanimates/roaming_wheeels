# 🚀 Deploy Sanity Studio (Admin Panel)

Your website uses static export, so the Studio needs to be hosted separately. Sanity provides **FREE hosting** for this!

## ✅ Quick Deploy (3 commands)

Run these commands in your terminal:

```bash
cd "/Users/rpatil/development/2026/latitudes Tech/projects/roaming_wheeels"

# 1. Login to Sanity (opens browser)
npx sanity login

# 2. Deploy Studio to Sanity Cloud
npx sanity deploy
```

When prompted:
- **Studio hostname**: Choose a name (e.g., `roamingwheels`)
- Your Studio will be at: `https://roamingwheels.sanity.studio`

## 🎯 Access Your Admin Panel

After deployment:

- **Production Admin**: `https://your-chosen-name.sanity.studio`
- **Development Admin**: Run `npx sanity start` (opens at `http://localhost:3333`)

## 📝 Creating Blog Posts

1. Go to your Studio URL
2. Sign in with your Sanity account  
3. Click "Blog Post" → "Create"
4. Write and publish!

Your website will automatically fetch posts from Sanity!

## 🔄 Update Studio

If you make changes to schemas, redeploy:

```bash
npx sanity deploy
```

## 📚 Alternative: Local Development Studio

If you want to run Studio locally while developing:

```bash
# In one terminal - your website
npm run dev

# In another terminal - Sanity Studio
npx sanity start
```

Studio opens at: `http://localhost:3333`

---

That's it! Your CMS is now live and accessible from anywhere! 🎉


