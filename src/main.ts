import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import * as spotifyHandler from "./spotifyHandler.js";
import { parsePlaylistIntent } from "./nlpHelper.js";
import { RateLimiter } from "./rateLimiter.js";
import { MCPRequest, MCPResponse } from "./types.js";

const app = express();
const PORT = process.env.PORT || 3001;
const ENABLE_NLP = process.env.ENABLE_NLP !== 'false';

// Rate limiter: 100 requests per minute
const globalRateLimiter = new RateLimiter(100, 100/60);

app.use(bodyParser.json());
app.use(express.static("public"));

// Health check
app.get("/", (_req, res) => {
  res.sendFile("index.html", { root: "public" });
});

app.get("/health", (_req, res) => {
  res.json({ status: "healthy" });
});

app.get("/stats", (_req, res) => {
    res.json({
        status: "running",
        uptime: process.uptime(),
        rateLimitTokens: globalRateLimiter.getTokens()
    });
});

// MCP Endpoint
app.post("/mcp", async (req: Request, res: Response) => {
  const body = req.body as MCPRequest;
  
  if (!globalRateLimiter.consume()) {
      res.status(429).json({ status: 'error', message: 'Rate limit exceeded' });
      return;
  }

  console.log('MCP Request:', body);

  try {
      let result;
      switch (body.tool) {
          case 'search-track':
              result = await spotifyHandler.searchTracks(body.input.query, body.input.limit);
              break;
          case 'recommend':
              result = await spotifyHandler.getRecommendations(
                  body.input.seedArtists,
                  body.input.seedGenres,
                  body.input.seedTracks,
                  body.input.limit
              );
              break;
          case 'create-playlist':
              let playlistName = body.input.name;
              let description = body.input.description;
              
              result = await spotifyHandler.createPlaylist(
                  body.input.userId,
                  playlistName,
                  description || '',
                  body.input.trackUris || [],
                  body.input.public
              );
              break;
          default:
              res.status(400).json({ status: 'error', message: 'Unknown tool' });
              return;
      }
      res.json(result);
  } catch (error: any) {
      console.error('Error processing request:', error);
      res.status(500).json({ status: 'error', message: error.message });
  }
});

async function start() {
    // Load credentials
    const clientId = process.env.SPOTIFY_CLIENT_ID || 'f6b396ecab7646afab201c9eecaa7dd3';
    const clientSecret = process.env.SPOTIFY_CLIENT_SECRET || 'fd407d0f8a0c49eebb0591ee77139544';
    const refreshToken = process.env.SPOTIFY_REFRESH_TOKEN || 'AQDs2gFJ-PcVZtSriscGAJuSQq34UMO8IHagDrToHQW1JnKKkayj8vyTj2iExt2M2ZjkKx9mXHYR9YZUK-f-W6kGWSEVEBebm17TwC7VXSHNf5CjYTbICCjrfioHvwBSSlc';

    if (clientId && clientSecret && refreshToken) {
        spotifyHandler.initializeSpotify(clientId, clientSecret, refreshToken);
    } else {
        console.error("Missing Spotify credentials!");
    }

    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
}

start();
