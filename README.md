# Playlistify AI 🎵

> **Your words. Your vibe. Perfect playlists.**

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Visit%20Site-brightgreen?style=for-the-badge)](https://playlistify.up.railway.app)
[![Apify Actor](https://img.shields.io/badge/Apify-Pro%20Version-orange?style=for-the-badge&logo=apify&logoColor=white)](https://apify.com/viverun/playlistfy)
[![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)](LICENSE)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![Spotify](https://img.shields.io/badge/Spotify-1DB954?style=for-the-badge&logo=spotify&logoColor=white)](https://developer.spotify.com/)

An AI-powered playlist generator that turns natural language into curated Spotify playlists. Describe your mood, activity, or vibe in plain English (or Hindi, Tamil, Telugu!)—get the perfect soundtrack instantly.

**🔗 Live Application:** [playlistify.up.railway.app](https://playlistify.up.railway.app)

**🚀 Pro Version (Apify):** [apify.com/viverun/playlistfy](https://apify.com/viverun/playlistfy)

---

## 👥 Team DDoxer

Built for **Hack This Fall 2025** 🏆

| Team Member | Role | Connect |
|-------------|------|---------|
| **Avanish Kasar** | Lead Developer | [![X](https://img.shields.io/badge/X-000000?style=flat-square&logo=x&logoColor=white)](https://x.com/only_avanish) [![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=flat-square&logo=linkedin&logoColor=white)](https://linkedin.com/in/avanishkasar) |
| **Jamil** | Co-Developer | |

---

## 📸 Screenshots

<div align="center">

### 🏠 Home Page
<img src="https://github.com/avanishkasar/Playlistify-AI/blob/main/home%20page.png" alt="Playlistify AI Home Page" width="800"/>

### 👥 About Us
<img src="https://github.com/avanishkasar/Playlistify-AI/blob/main/about.png" alt="About Team DDoxer" width="800"/>

### ⚙️ How It Works
<img src="https://github.com/avanishkasar/Playlistify-AI/blob/main/How%20It%20Works.png" alt="How Playlistify Works" width="800"/>

### 🎵 Curated Picks
<img src="https://github.com/avanishkasar/Playlistify-AI/blob/main/Curated%20picks.png" alt="Curated Playlist Picks" width="800"/>

### 🚀 Pro Version (Apify)
<img src="https://github.com/avanishkasar/Playlistify-AI/blob/main/pro%20page.png" alt="Apify Pro Version" width="800"/>

</div>

---

## 🎥 Video Demo

<div align="center">

[![Watch Demo](https://img.shields.io/badge/▶️_Watch-Video_Demo-red?style=for-the-badge&logo=youtube)](YOUR_YOUTUBE_VIDEO_LINK)

*Click above to watch a complete walkthrough of Playlistify AI*

</div>

---

## 🏷️ Topics

ai machine-learning nlp natural-language-processing spotify spotify-api playlist-generator music typescript nodejs express docker railway music-recommendation playlist-maker ai-music spotify-playlist music-discovery

---

## ✨ What Makes It Special

- **🧠 Natural Language Understanding:** Just type what you're feeling - *"High energy 80s pop for a workout"* or *"Chill lo-fi beats for studying"*
- **🌍 Multi-Language Support:** Works with English, Hindi, Tamil, and Telugu!
- **🎯 Smart Track Selection:** Combines direct search and Spotify's recommendation engine for optimal results
- **⚡ Lightning Fast:** Intelligent caching system reduces API calls and delivers instant results
- **🎨 Clean Playlists:** Automatic duplicate detection ensures every track is unique
- **📱 Beautiful UI:** iOS-inspired liquid glass design with premium animations
- **🚀 Production Ready:** Fully containerized and optimized for seamless deployment

---

## 🛠️ Tech Stack

| Category | Technology |
|----------|-----------|
| **Runtime** | Node.js |
| **Language** | TypeScript |
| **Backend** | Express.js |
| **Frontend** | Vanilla HTML/CSS/JS with iOS Liquid Glass Theme |
| **API Integration** | Spotify Web API |
| **NLP** | Custom keyword-based parser with multi-language support |
| **Containerization** | Docker |
| **Hosting** | Railway |
| **Pro Version** | Apify Actor with MCP Tools |

---

## 🎯 How It Works

1. **Input:** Describe your ideal playlist in natural language
2. **Analysis:** NLP engine extracts mood, genre, tempo, and era
3. **Search:** Dual-strategy approach finds the perfect tracks
4. **Curation:** Smart filtering removes duplicates and optimizes flow
5. **Output:** Get a polished playlist ready to enjoy

---

## 🚀 Quick Start

### Try It Now
Visit [playlistify.up.railway.app](https://playlistify.up.railway.app) and start creating playlists instantly!

### Run Locally

1. **Clone the repository:**
   ```bash
   git clone https://github.com/avanishkasar/Playlistify-AI.git
   cd Playlistify-AI
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure environment (optional for testing):**
   
   The app includes default credentials for quick testing. For production, create a `.env` file:
   ```env
   SPOTIFY_CLIENT_ID=your_client_id
   SPOTIFY_CLIENT_SECRET=your_client_secret
   SPOTIFY_REFRESH_TOKEN=your_refresh_token
   PORT=3001
   ```

4. **Start the development server:**
   ```bash
   npm run dev
   ```
   
   Open `http://localhost:3001` in your browser.

---

## 🔌 API Reference

### Generate Playlist

**Endpoint:** `POST /mcp`

**Request:**
```json
{
  "prompt": "Upbeat jazz for cooking"
}
```

**Response:**
```json
{
  "tracks": [
    {
      "name": "Track Name",
      "artist": "Artist Name",
      "uri": "spotify:track:..."
    }
  ]
}
```

---

## 🌐 Deployment

### Deploy Your Own Instance

This project is optimized for Railway deployment:

1. **Fork this repository**
2. **Sign up at [Railway](https://railway.app/)**
3. **Create New Project** → **Deploy from GitHub**
4. **Select your forked repo**
5. **Railway auto-detects the Dockerfile and deploys**

Railway provides:
- ✅ Automatic HTTPS
- ✅ Environment variable management
- ✅ Auto-deploy on git push
- ✅ Free tier available

---

## 📝 Example Prompts

Try these prompts to see Playlistify AI in action:

- *"Energetic workout songs from the 2000s"*
- *"Relaxing acoustic guitar for Sunday morning"*
- *"Dark electronic music for late night coding"*
- *"Happy pop songs for a road trip"*
- *"Melancholic indie rock for introspection"*
- *"खुश गाने सुबह के लिए"* (Happy songs for morning - Hindi)
- *"இரவு நேரத்திற்கான மெதுவான பாடல்கள்"* (Slow songs for night - Tamil)

---

## 🚀 Pro Version (Apify)

For developers and power users, we offer a **Pro version on Apify** with MCP (Model Context Protocol) tools:

[![Try on Apify](https://img.shields.io/badge/Try%20on%20Apify-Pro%20Version-orange?style=for-the-badge&logo=apify)](https://apify.com/viverun/playlistfy)

**MCP Tools Available:**
- `search-track` - Search Spotify tracks by query
- `recommend` - Get AI-powered track recommendations  
- `create-playlist` - Create playlists directly on Spotify

**Pricing:** Pay per event (API call) - perfect for automation and integrations!

---

## 🤝 Contributing

Contributions are welcome! Feel free to:

- 🐛 Report bugs
- 💡 Suggest new features
- 🔧 Submit pull requests

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- Built with [Spotify Web API](https://developer.spotify.com/documentation/web-api/)
- Deployed on [Railway](https://railway.app/)
- Pro Version on [Apify](https://apify.com/)
- Powered by TypeScript and Node.js
- Built for **Hack This Fall 2025** 🏆

---

<div align="center">

**Made with ❤️ by Team DDoxer**

[Try it Now](https://playlistify.up.railway.app) | [Pro Version](https://apify.com/viverun/playlistfy) | [Report Issue](https://github.com/avanishkasar/Playlistify-AI/issues) | [Request Feature](https://github.com/avanishkasar/Playlistify-AI/issues)

[![X](https://img.shields.io/badge/X-000000?style=for-the-badge&logo=x&logoColor=white)](https://x.com/only_avanish)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/avanishkasar)
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/avanishkasar)

</div>
