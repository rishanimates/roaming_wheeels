# 📝 Sanity CMS Integration

Your Roaming Wheels website now has a fully integrated Content Management System!

## ✨ What's Included

### 🎯 Features
- **Admin Panel** at `/studio` route
- **Rich Text Editor** with formatting, images, lists, quotes
- **Image Upload** with drag & drop
- **User Authentication** built-in by Sanity
- **Content Preview** before publishing
- **SEO-friendly** slugs auto-generated
- **Categories** for organizing posts
- **Featured Posts** option
- **Author Management**

### 📁 Files Created

```
roaming_wheeels/
├── sanity.config.ts              # Sanity Studio configuration
├── sanity.cli.ts                 # Sanity CLI configuration
├── src/
│   ├── sanity/
│   │   ├── schemas/
│   │   │   ├── index.ts          # Schema exports
│   │   │   ├── blogPost.ts       # Blog post schema with rich text
│   │   │   └── author.ts         # Author schema
│   │   └── lib/
│   │       ├── client.ts         # Sanity client setup
│   │       ├── queries.ts        # Data fetching queries
│   │       ├── image.ts          # Image URL builder
│   │       └── types.ts          # TypeScript types
│   ├── app/
│   │   └── studio/
│   │       └── [[...tool]]/
│   │           └── page.tsx      # Studio admin page
│   └── components/
│       └── Blog.tsx              # Updated to fetch from Sanity
├── SANITY_SETUP_GUIDE.md         # Detailed setup instructions
├── QUICKSTART.md                 # Quick start guide
└── .env.template                 # Environment variables template
```

## 🚀 Getting Started

### Option 1: Quick Start (5 minutes)

1. **Create Sanity Project**
   - Go to https://sanity.io/manage
   - Click "Create Project"
   - Name it "Roaming Wheels Blog"
   - Copy your Project ID

2. **Set Environment Variables**
   ```bash
   # Create .env.local file
   NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id_here
   NEXT_PUBLIC_SANITY_DATASET=production
   ```

3. **Add CORS Origin**
   - In Sanity dashboard → API → CORS
   - Add `http://localhost:3000`
   - Check "Allow credentials"

4. **Start & Access**
   ```bash
   npm run dev
   ```
   Open http://localhost:3000/studio

### Option 2: Detailed Setup

See [SANITY_SETUP_GUIDE.md](./SANITY_SETUP_GUIDE.md) for complete instructions.

## 📝 Creating Blog Posts

1. Navigate to `/studio`
2. Sign in with Sanity account
3. Click "Blog Post" → "Create"
4. Fill in:
   - Title
   - Generate slug
   - Write excerpt
   - Upload featured image
   - Select category
   - Write content with rich editor
   - Set as featured (optional)
   - Add read time
5. Click "Publish"

Posts appear on your website immediately!

## 🎨 Content Editor Features

The rich text editor supports:
- **Text Formatting**: Bold, italic, underline, strikethrough, code
- **Headings**: H1, H2, H3, H4
- **Lists**: Bullet and numbered
- **Links**: Internal and external
- **Images**: Drag & drop inline images with captions
- **Quotes**: Blockquotes
- **Code Blocks**: Syntax highlighting

## 🔐 Access Control

### Admin Access:
- **Development**: http://localhost:3000/studio
- **Production**: https://yourdomain.com/studio

### Managing Users:
1. Go to https://sanity.io/manage
2. Select your project
3. Members tab → Invite Member
4. Roles:
   - **Administrator**: Full control
   - **Editor**: Create/edit content
   - **Viewer**: Read-only

## 📦 Blog Post Schema

```typescript
{
  title: string              // Post title
  slug: string               // URL-friendly slug
  excerpt: string            // Short description (max 200 chars)
  featuredImage: Image       // Featured image
  category: string           // Adventures, Challenges, Culture, Tips, Reflections
  location: string           // Where the story happened
  content: PortableText[]    // Rich text content
  featured: boolean          // Show as featured post
  publishedAt: datetime      // Publication date
  readTime: number           // Minutes to read
  author: Reference          // Author reference
}
```

## 🌐 API Endpoints

Data is fetched using Sanity's GROQ queries:

```typescript
// Get all posts
const posts = await client.fetch(postsQuery)

// Get post by slug
const post = await client.fetch(postBySlugQuery, { slug })

// Get posts by category
const posts = await client.fetch(postsByCategoryQuery, { category })

// Get featured posts
const featured = await client.fetch(featuredPostsQuery)
```

## 🎯 How It Works

1. **Content Creation**: Write posts in Sanity Studio (`/studio`)
2. **Storage**: Content stored in Sanity's cloud CDN
3. **Fetching**: Website fetches content via Sanity API
4. **Display**: Blog component renders posts
5. **Fallback**: Shows mock data if Sanity not configured

## 🛠️ NPM Scripts

```bash
npm run dev           # Start development server
npm run build         # Build for production
npm run studio        # Start Sanity Studio standalone
npm run studio:deploy # Deploy Studio to Sanity cloud
```

## 🚀 Deployment

### Vercel / Netlify / Other Platforms:

1. Add environment variables:
   ```
   NEXT_PUBLIC_SANITY_PROJECT_ID=your_id
   NEXT_PUBLIC_SANITY_DATASET=production
   ```

2. Deploy normally

3. Add production domain to Sanity CORS settings

4. Access studio at: `https://yourdomain.com/studio`

## 🆘 Troubleshooting

### Issue: "Project ID not defined"
**Solution**: 
- Ensure `.env.local` exists with correct values
- Restart dev server after adding env vars

### Issue: CORS errors
**Solution**:
- Add your domain to Sanity CORS settings
- Enable "Allow credentials"
- Clear browser cache

### Issue: Posts not showing
**Solution**:
- Ensure posts are Published (not just saved)
- Check publication date isn't in future
- Verify Sanity Project ID is correct

### Issue: Images not loading
**Solution**:
- Check `next.config.ts` has Sanity CDN in remotePatterns
- Verify image uploads succeeded in Studio

## 📚 Resources

- **Sanity Docs**: https://www.sanity.io/docs
- **GROQ Query Language**: https://www.sanity.io/docs/groq
- **Portable Text**: https://www.sanity.io/docs/presenting-block-text
- **Sanity + Next.js**: https://www.sanity.io/guides/nextjs

## 💡 Tips

- ✅ Save drafts before publishing
- ✅ Use the preview pane to see changes
- ✅ Version history available (clock icon)
- ✅ Can unpublish posts anytime
- ✅ Images auto-optimized by Sanity CDN
- ✅ Content is automatically backed up

## 🎉 Benefits

- ✅ **No Code Needed**: Write posts without touching code
- ✅ **Anywhere Access**: Edit from any device
- ✅ **Real-time**: Changes appear immediately
- ✅ **Secure**: Built-in authentication
- ✅ **Free**: Sanity free tier is generous
- ✅ **Scalable**: Handles thousands of posts
- ✅ **Fast**: CDN-delivered content

---

**Happy Blogging! 🏍️✨**


