# Deployment Guide

## ✅ Pre-Deployment Checklist

- [x] Production build successful
- [x] No TypeScript errors
- [x] No linting errors
- [x] No console.log statements
- [x] All images optimized
- [x] Responsive design verified
- [x] Mobile compatibility confirmed

## 🚀 Deployment Options

### Option 1: Vercel (Recommended - Easiest)

1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Portfolio ready for deployment"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/OnlinePortfolio.git
   git push -u origin main
   ```

2. **Deploy on Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Sign in with GitHub
   - Click "New Project"
   - Import your `OnlinePortfolio` repository
   - Vercel auto-detects Next.js - just click "Deploy"
   - Your site will be live in ~2 minutes at `https://your-project.vercel.app`

3. **Custom Domain (Optional):**
   - In Vercel dashboard, go to Settings → Domains
   - Add your custom domain

### Option 2: GitHub Pages (Static Export)

If you prefer GitHub Pages, you'll need to configure static export:

1. Update `next.config.ts` to include:
   ```typescript
   output: 'export',
   ```

2. Use GitHub Actions for automatic deployment (workflow file included)

### Option 3: Netlify

Similar to Vercel:
- Push to GitHub
- Connect Netlify to your repo
- Auto-deploys on every push

## 📝 Before First Push

Make sure to:
- [ ] Add your GitHub username/email to git config
- [ ] Review `.gitignore` (should exclude `.next/`, `node_modules/`, etc.)
- [ ] Ensure `avatar.webp` is in `public/hero/` folder
- [ ] Test locally: `npm run build && npm start`

## 🔍 Post-Deployment Checks

After deploying:
- [ ] Visit the live site
- [ ] Test on mobile devices
- [ ] Check all images load correctly
- [ ] Verify all links work
- [ ] Test dark/light mode toggle
- [ ] Check Skills section interactions
- [ ] Verify contact form (if connected to backend)

## 📧 Environment Variables

If you add backend services later (email, API keys), add them in:
- Vercel: Project Settings → Environment Variables
- GitHub Pages: Use GitHub Secrets in Actions

## 🔗 Useful Links

- Vercel: https://vercel.com
- Next.js Deployment: https://nextjs.org/docs/deployment
- GitHub Actions: https://docs.github.com/en/actions

