# Playlistify AI 🎵

> **Transform your mood into music with AI-powered playlist generation**

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Visit%20Site-brightgreen?style=for-the-badge)](https://playlistifyai.up.railway.app)
[![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)](LICENSE)

Playlistify AI is an intelligent playlist generator that transforms natural language prompts into perfectly curated Spotify playlists. Simply describe what you want to hear, and let AI do the rest.

**🔗 Live Application:** [playlistifyai.up.railway.app](https://playlistifyai.up.railway.app)

---

## ✨ What Makes It Special

- **🧠 Natural Language Understanding:** Just type what you're feeling - *"High energy 80s pop for a workout"* or *"Chill lo-fi beats for studying"*
- **🎯 Smart Track Selection:** Combines direct search and Spotify's recommendation engine for optimal results
- **⚡ Lightning Fast:** Intelligent caching system reduces API calls and delivers instant results
- **🎨 Clean Playlists:** Automatic duplicate detection ensures every track is unique
- **🚀 Production Ready:** Fully containerized and optimized for seamless deployment

---

## 🛠️ Tech Stack

| Category | Technology |
|----------|-----------|
| **Runtime** | Node.js |
| **Language** | TypeScript |
| **Backend** | Express.js |
| **API Integration** | Spotify Web API |
| **Containerization** | Docker |
| **Hosting** | Railway |

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
Visit [playlistifyai.up.railway.app](https://playlistifyai.up.railway.app) and start creating playlists instantly!

### Run Locally

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Viverun/Playlistify-AI.git
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
- Powered by TypeScript and Node.js

---

<div align="center">

**Made with ❤️ and AI**

[Try it Now](https://playlistifyai.up.railway.app) | [Report Issue](https://github.com/Viverun/Playlistify-AI/issues) | [Request Feature](https://github.com/Viverun/Playlistify-AI/issues)
