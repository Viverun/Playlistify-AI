# 🎵 Playlistify AI

> **AI-powered Spotify playlist generator with natural language understanding**

A production-ready web application for creating personalized Spotify playlists using AI. Simply describe your mood in natural language, and Playlistify AI curates the perfect playlist instantly.

[![Live Demo](https://img.shields.io/badge/Live-Demo-brightgreen)](https://playlistify-ai.vercel.app)
[![GitHub](https://img.shields.io/badge/GitHub-Repository-blue)](https://github.com/avanishkasar/Playlistify-AI)
[![Hack This Fall](https://img.shields.io/badge/Hack%20This%20Fall-2025-purple)](https://hackthisfall.tech)

---

## 🌟 Overview

Playlistify AI transforms how you discover music on Spotify. Describe your mood in natural language, and our AI curates the perfect playlist instantly.

## ✨ Features

### **Core Capabilities**
* 🔍 **Smart Search** - Search Spotify's catalog with intelligent filtering
* 🎯 **AI Recommendations** - Get personalized track recommendations
* 🎨 **Natural Language** - Describe your mood or activity in plain English
* ⚡ **Lightning Fast** - Optimized caching and rate limiting
* ✅ **Auto-Create Playlists** - Instantly save playlists to your Spotify account
* 🚀 **Multi-Platform** - Web interface and REST API

### **API Features**
* **RESTful HTTP API** - Exposes `/mcp` endpoint for playlist operations
* **Three Core Tools**:
  1. `search-track` - Search Spotify catalog by keyword
  2. `recommend` - Get personalized recommendations using seeds
  3. `create-playlist` - Create playlists and add tracks

### **Advanced Capabilities**
* ✅ Automatic Spotify access token refresh
* ✅ Response caching (LRU cache with TTL)
* ✅ NLP enhancement for natural language playlist descriptions
* ✅ Request validation and error handling
* ✅ Structured logging
* ✅ TypeScript with full type safety

---

## 🚀 Quick Start

### Local Development

```bash
# Install dependencies
npm install

# Run in development mode
npm run dev
# Server starts on http://localhost:3001

# Build for production
npm run build

# Run production build
npm start
```

The application comes with pre-configured Spotify credentials for immediate use.

---

## 📦 Deployment

### 🐳 Docker Deployment

```bash
# Build Docker image
docker build -t playlistify-ai .

# Run container
docker run -p 3001:3001 playlistify-ai
```

### ☁️ Cloud Platforms

**Recommended platforms for deployment:**

- **Vercel** - For static frontend
- **Railway** / **Render** / **Fly.io** - For Node.js backend
- **DigitalOcean App Platform** - Full-stack deployment
- **AWS / GCP / Azure** - Enterprise deployment

### Environment Variables (Optional)

While the app comes with pre-configured credentials, you can override them:

```bash
PORT=3001
ENABLE_NLP=false
ENABLE_CACHE=true
ENABLE_RATE_LIMITING=true
```

---

## 🚀 Deployment

### Railway (Recommended)

The easiest way to deploy is using Railway. See our [Railway Deployment Guide](RAILWAY_DEPLOYMENT.md) for detailed instructions.

[![Deploy on Railway](https://railway.app/button.svg)](https://railway.app/new/template?template=https%3A%2F%2Fgithub.com%2FViverun%2FPlaylistify-AI&envs=SPOTIFY_CLIENT_ID%2CSPOTIFY_CLIENT_SECRET%2CSPOTIFY_REFRESH_TOKEN%2CENABLE_NLP&optionalEnvs=SPOTIFY_CLIENT_ID%2CSPOTIFY_CLIENT_SECRET%2CSPOTIFY_REFRESH_TOKEN%2CENABLE_NLP&defaults.ENABLE_NLP=true)

### Apify

You can also deploy as an Apify Actor. See [Apify Deployment Guide](APIFY_DEPLOYMENT.md).

---

## 🏗️ Tech Stack

**Backend**: Node.js, Express, TypeScript, Spotify Web API  
**Frontend**: HTML, CSS, JavaScript  
**Deployment**: Docker, Any Node.js hosting platform

---

## 🏆 Features

- ✅ **Production Ready** - Full error handling and logging
- ✅ **Fast & Efficient** - Built-in caching and rate limiting
- ✅ **Type Safe** - Written in TypeScript

---

## 👥 Authors

* **Viverun** - [@Viverun](https://github.com/Viverun) - *Contributor*
* **Avanish Kasar** - [@avanishkasar](https://github.com/avanishkasar) - *Contributor*

---

## 📝 License

MIT License - see [LICENSE](./LICENSE) file for details

---

<div align="center">

**Made with ❤️ for Hack This Fall 2025**

[📦 GitHub](https://github.com/avanishkasar/Playlistify-AI)

</div>
