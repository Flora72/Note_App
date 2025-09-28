# LumenLog — MERN Stack Note-Taking App

LumenLog is a full-stack note-taking application built with the MERN stack (MongoDB, Express, React, Node.js). It features a warm, emotionally resonant UI powered by Tailwind and DaisyUI, and a secure backend with rate limiting and MongoDB integration.

---

## Tech Stack

- **Frontend**: React + Vite + Tailwind CSS + DaisyUI
- **Backend**: Express.js + MongoDB + Upstash Rate Limiting
- **Database**: MongoDB Atlas
- **Deployment**: Render 
---

##  Features

- Create, view, and delete notes
- Responsive UI with Healing Atlas-inspired design
- Rate limiting via Upstash Redis
- Unified build and start flow
- Backend serves production frontend build

---

## Setup & Development

### 1. Clone the repo
```bash
git clone https://github.com/Flora72/Note_App
cd Note_App
```

### 2. Install dependencies and build frontend
```bash
npm run build
```

This installs both frontend and backend dependencies and builds the frontend into `frontend/dist`.

### 3. Start the backend server
```bash
npm run start
```

The backend will:
- Connect to MongoDB
- Serve API routes at `/api/notes`
- Serve the frontend from `frontend/dist`

---

## Environment Variables

Create a `.env` file in `backend/` with:

```env
PORT=3000
MONGO_URI=your_mongodb_connection_string
UPSTASH_REDIS_REST_URL=your_upstash_url
UPSTASH_REDIS_REST_TOKEN=your_upstash_token
```

---

##  API Endpoints

- `GET /api/notes` — fetch all notes
- `POST /api/notes` — create a new note
- `DELETE /api/notes/:id` — delete a note

---

## Deployment Notes

To deploy on Render:
- Set build command:  
  `npm install --prefix backend && npm install --prefix frontend && npm run build --prefix frontend`
- Set start command:  
  `npm run start`
- Add environment variables in dashboard

---

