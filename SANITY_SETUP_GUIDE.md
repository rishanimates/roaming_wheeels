# 🚀 Sanity CMS Setup Guide for Roaming Wheels

This guide will help you set up Sanity.io CMS for your blog content management.

## 📋 What You'll Get

- ✅ Admin panel at `/studio` with username/password authentication
- ✅ Rich text editor with formatting, images, and links
- ✅ Drag & drop image uploads
- ✅ Content preview and versioning
- ✅ Publish/unpublish control
- ✅ Category management
- ✅ SEO-friendly slugs

---

## 🛠️ Setup Instructions

### Step 1: Create a Sanity Account

1. Go to [sanity.io](https://www.sanity.io/)
2. Click **"Get Started"** (it's free!)
3. Sign up with Google, GitHub, or email

### Step 2: Create a New Sanity Project

1. Once logged in, go to [sanity.io/manage](https://www.sanity.io/manage)
2. Click **"Create Project"**
3. Give it a name: **"Roaming Wheels Blog"**
4. Keep the dataset as **"production"**
5. Note down your **Project ID** (you'll need this!)

### Step 3: Configure Environment Variables

1. In your project root, create a file called `.env.local`
2. Copy the contents from `.env.local.example`
3. Replace the values:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=abc123xyz  # Your actual project ID
NEXT_PUBLIC_SANITY_DATASET=production
```

### Step 4: Deploy Sanity Studio Schema

Run this command in your terminal:

```bash
cd "/Users/rpatil/development/2026/latitudes Tech/projects/roaming_wheeels"
npx sanity@latest deploy
```

This will deploy your blog schema to Sanity.

### Step 5: Add CORS Origin

1. Go to [sanity.io/manage](https://www.sanity.io/manage)
2. Select your project
3. Go to **API** → **CORS Origins**
4. Click **"Add CORS Origin"**
5. Add these origins:
   - `http://localhost:3000` (for development)
   - Your production domain (e.g., `https://yourdomain.com`)
6. Check **"Allow credentials"**
7. Save

### Step 6: Access Your Admin Panel

1. Start your development server:
   ```bash
   npm run dev
   ```

2. Navigate to: **http://localhost:3000/studio**

3. Sign in with your Sanity account

4. You'll see your admin dashboard! 🎉

---

## 📝 How to Create Your First Blog Post

1. Go to `http://localhost:3000/studio`
2. Click **"Blog Post"** in the sidebar
3. Click **"Create"** button
4. Fill in the fields:
   - **Title**: Your blog post title
   - **Slug**: Click "Generate" to auto-create from title
   - **Excerpt**: Short summary (max 200 chars)
   - **Featured Image**: Upload an image
   - **Category**: Choose one (Adventures, Challenges, Culture, Tips, Reflections)
   - **Location**: Where this story happened
   - **Content**: Write your story with the rich text editor
   - **Featured Post**: Toggle ON for featured posts (shows bigger)
   - **Read Time**: Estimated minutes to read
   - **Published At**: Post date (auto-filled)

5. Click **"Publish"** in the bottom right

6. Go back to your website homepage and scroll to the blog section - your post will appear!

---

## 🎨 Rich Text Editor Features

The content editor supports:

- **Formatting**: Bold, italic, underline, strikethrough
- **Headings**: H1, H2, H3, H4
- **Lists**: Bullet points and numbered lists
- **Links**: Add external or internal links
- **Images**: Drag & drop images directly into content
- **Quotes**: Blockquotes for special callouts
- **Code blocks**: For sharing code snippets

---

## 👤 Creating an Author Profile (Optional)

1. In the Studio, click **"Author"** in the sidebar
2. Click **"Create"**
3. Add:
   - Name
   - Slug (auto-generate)
   - Profile Image
   - Bio
4. Publish

Now you can assign authors to blog posts!

---

## 🔒 Managing Access

### Adding Team Members:

1. Go to [sanity.io/manage](https://www.sanity.io/manage)
2. Select your project
3. Go to **Members** tab
4. Click **"Invite Member"**
5. Enter their email
6. Choose role:
   - **Administrator**: Full access
   - **Editor**: Can create/edit content
   - **Viewer**: Read-only access

### Your Admin URL:
- **Development**: `http://localhost:3000/studio`
- **Production**: `https://yourdomain.com/studio`

---

## 🚀 Deploying to Production

When you deploy your website (to Vercel, Netlify, etc.):

1. Add the environment variables in your hosting platform:
   - `NEXT_PUBLIC_SANITY_PROJECT_ID`
   - `NEXT_PUBLIC_SANITY_DATASET`

2. Add your production domain to Sanity CORS settings

3. Your `/studio` will work on production too!

---

## 💡 Tips

- ✅ **Preview**: Save drafts before publishing to preview changes
- ✅ **History**: Click the clock icon to see version history
- ✅ **Search**: Use Cmd/Ctrl + K to quick search
- ✅ **Mobile**: The Studio works on tablets/mobile too
- ✅ **Backup**: Content is automatically backed up by Sanity

---

## 🆘 Troubleshooting

### "Project ID is not defined"
- Make sure `.env.local` exists and has your Project ID
- Restart your dev server after adding env variables

### "CORS Error"
- Add your domain to CORS origins in Sanity dashboard
- Check "Allow credentials" is enabled

### "Studio not loading"
- Clear browser cache
- Check browser console for errors
- Make sure all packages are installed: `npm install`

### Blog posts not showing on website
- Make sure posts are **Published** (not just saved)
- Check Published Date is not in the future
- Clear browser cache and refresh

---

## 📚 Learn More

- [Sanity Documentation](https://www.sanity.io/docs)
- [Sanity Schema Types](https://www.sanity.io/docs/schema-types)
- [Portable Text (Rich Text)](https://www.sanity.io/docs/presenting-block-text)

---

## 🎉 You're All Set!

Your blog CMS is now fully integrated! You can:
- ✅ Write and publish blog posts from anywhere
- ✅ Upload images and media
- ✅ Organize posts by category
- ✅ Preview before publishing
- ✅ Edit content without touching code

Happy blogging! 🏍️✨


