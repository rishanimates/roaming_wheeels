# 🔧 Environment Setup Instructions

## Step 1: Create .env.local file

Create a file named `.env.local` in your project root with this content:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=2vzs8piy
NEXT_PUBLIC_SANITY_DATASET=production
```

**Quick command to create it:**
```bash
cat > .env.local << 'EOF'
NEXT_PUBLIC_SANITY_PROJECT_ID=2vzs8piy
NEXT_PUBLIC_SANITY_DATASET=production
EOF
```

## Step 2: Login to Sanity CLI

```bash
npx sanity login
```

This will open a browser window for authentication.

## Step 3: Deploy your schema to Sanity

```bash
npx sanity deploy
```

This uploads your blog schema to Sanity.

## Step 4: Add CORS Origin

Two options:

### Option A: Using CLI (after login)
```bash
npx sanity cors add http://localhost:3000 --credentials
```

### Option B: Manual (in browser)
1. Go to https://www.sanity.io/manage
2. Select your project (2vzs8piy)
3. Go to **API** → **CORS Origins**
4. Click **"Add CORS Origin"**
5. Add: `http://localhost:3000`
6. Check **"Allow credentials"**
7. Save

## Step 5: Start Development Server

```bash
npm run dev
```

Then open: **http://localhost:3000/studio**

## Step 6: Create Your First Blog Post! 🎉

You're all set!


