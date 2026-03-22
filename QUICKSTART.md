# 🚀 Quick Start - Sanity CMS

## Create your `.env.local` file:

```bash
# Create the file
touch .env.local

# Add these two lines (replace with your actual values):
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
```

## Get Your Project ID:

1. Go to https://www.sanity.io/manage
2. Create a new project or select existing
3. Copy your **Project ID**
4. Paste it in `.env.local`

## Add CORS Settings:

1. In Sanity dashboard → API → CORS Origins
2. Add: `http://localhost:3000` (check "Allow credentials")
3. Add your production domain later

## Start Blogging:

```bash
npm run dev
```

Then go to: **http://localhost:3000/studio**

Login with your Sanity account and start creating blog posts!

---

For detailed instructions, see [SANITY_SETUP_GUIDE.md](./SANITY_SETUP_GUIDE.md)


