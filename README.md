# 🚀 Pulsarr-NG

**Pulsarr-NG** is a revived and modernized browser extension that lets you add movies and TV series directly to **Radarr** and **Sonarr** while browsing popular media sites — with full support for **modern Radarr v6** and **Sonarr v4**.

This project is a **functional resurrection** of the original Pulsarr extension, updated to work reliably with current APIs, UI routes, reverse proxies, and Firefox-based browsers.

---

## ✨ Features

- 🎬 **Add movies to Radarr** directly from supported sites
- 📺 **Add TV series to Sonarr** (including TMDB TV pages)
- 🔍 Detects **existing movies / series** and links to the correct Radarr/Sonarr page
- 🖼️ Displays posters correctly (reverse-proxy safe)
- 🔑 Works with **API keys** and **authenticated servers**
- 🌐 Compatible with **reverse proxy setups** (SWAG, nginx, Traefik, etc.)
- 🦊 Fully functional on **Firefox / Waterfox** (Manifest V2)

---

## 🌍 Supported Websites

- **IMDb** (movies)
- **TMDB** (movies & TV series)
- **Trakt**
- **TVDB** (legacy / partial)
- **Rotten Tomatoes** (best-effort)

> ⚠️ Note: Modern Sonarr support prioritizes **TMDB** over IMDb/TVDB due to site restrictions and API reliability.

---

## 🧠 What’s New (Pulsarr-NG)

- ✅ Updated all API calls to **`/api/v3`** (Radarr v6 / Sonarr v4)
- ✅ Fixed IMDb ID parsing for modern 7+ digit IDs
- ✅ Fixed Radarr & Sonarr UI routing (`/movie/`, `/series/`)
- ✅ Fixed quality profile and root folder endpoints
- ✅ Added **TMDB → Sonarr** lookup for TV series
- ✅ Fixed poster loading (relative URLs, reverse proxies)
- ✅ Firefox / Waterfox compatibility verified
- ✅ Improved error handling and configuration validation

---

## 🛠️ Installation (Developer / Temporary)

### Firefox / Waterfox
1. Open `about:debugging`
2. Click **This Firefox**
3. Click **Load Temporary Add-on**
4. Select `manifest.json`

> Chrome support is currently **experimental** and not fully tested.

---

## ⚙️ Configuration

1. Open the extension options
2. Configure **Radarr** and/or **Sonarr**:
   - Host
   - Port (optional)
   - API Key
   - Authentication (if enabled)
3. Save and verify connection

The extension validates API connectivity before saving.

---

## ✅ Current Status

### What Works
- Radarr movie lookup & add
- Sonarr series lookup & add (TMDB)
- Existing media detection
- Correct “Already Exists” links
- Quality profiles & folder paths
- Reverse-proxy deployments
- Firefox / Waterfox usage

### Known Limitations
- Chrome/MV3 support is not finalized
- Some legacy TVDB flows may be unreliable
- Poster loading behind strict Basic Auth may require proxy tweaks

---

## 🧭 Roadmap / Nice-to-Have

- 🎨 TMDB-native poster loading (no Sonarr/Radarr image auth)
- 🧹 Internal code cleanup (shared Server class)
- 📦 Chrome Manifest V3 migration
- 📸 Screenshots & demo GIFs
- 🏷️ Tagged stable release (`v3.0.0`)

---

## 🙏 Credits & Thanks

- **Radarr** team — https://github.com/Radarr/Radarr  
- **Sonarr** team — https://github.com/Sonarr/Sonarr  
- Original **Pulsarr** authors for the foundation

---

## ⚠️ Disclaimer

This project is **community-maintained** and not affiliated with the Radarr or Sonarr teams.  
Use at your own risk.

---

> 💡 *Pulsarr-NG exists because clicking “Add to Radarr/Sonarr” should be a single, satisfying action.*
