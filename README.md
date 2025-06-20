# Ratelim

A classic, production-ready Rate Limiter as a Service. Instantly add rate limiting to your apps and APIs. Register your project, set your limits, and track usage in real time.

---

## 🚀 Features
- Register projects and get unique API keys
- Set custom rate limits per project
- Track usage and remaining quota
- Simple REST API integration
- Classic, elegant dashboard (React + Vite + Tailwind)

---

## 🛠️ API Endpoints

### 1. Register Project
`POST /api/projects`
- **Body:** `{ "projectName": "My API" }`
- **Response:** `{ "projectId": "...", "apiKey": "..." }`

### 2. Set Rate Limit
`POST /api/limits`
- **Body:** `{ "projectId": "...", "limit": 100, "window": "hour" }`
- **Response:** Rate limit rule object

### 3. Ratelim (Track Usage)
`POST /api/ratelim`
- **Body:** `{ "apiKey": "..." }`
- **Response:** `{ "allowed": true/false, "remaining": n, "resetIn": ms }`

### 4. Get Usage Stats
`GET /api/usage/:projectId`
- **Headers:** `x-api-key: ...`
- **Response:** `{ "used": n, "remaining": n, "resetIn": ms }`

### 5. Delete Project
`DELETE /api/projects/:id`
- **Headers:** `x-api-key: ...`
- **Response:** `{ "message": "Project deleted" }`

---

## 🗄️ Database
- **MongoDB Atlas** (cloud MongoDB)
- Integrated using **Mongoose** ODM in Node.js
- Models: Project, Limit, Usage

---

## 🏃 How to Run the Server
1. Clone the repo:
   ```bash
   git clone <your-repo-url>
   cd <repo-folder>/server
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file with:
   ```env
   MONGO_URI=your_mongodb_atlas_connection_string
   PORT=5000
   ```
4. Start the server:
   ```bash
   npm start
   ```

---

## 🖥️ How to Run the Frontend (Optional)
1. Go to the `client` folder:
   ```bash
   cd ../client
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file with:
   ```env
   VITE_API_URL=http://localhost:5000
   ```
4. Start the frontend:
   ```bash
   npm run dev
   ```

---

## 📬 How to Interact with the API

### Register Project
```bash
curl -X POST http://localhost:5000/api/projects -H "Content-Type: application/json" -d '{"projectName":"My API"}'
```

### Set Rate Limit
```bash
curl -X POST http://localhost:5000/api/limits -H "Content-Type: application/json" -d '{"projectId":"<projectId>", "limit":100, "window":"hour"}'
```

### Track Usage (Ratelim)
```bash
curl -X POST http://localhost:5000/api/ratelim -H "Content-Type: application/json" -d '{"apiKey":"<apiKey>"}'
```

### Get Usage Stats
```bash
curl -X GET http://localhost:5000/api/usage/<projectId> -H "x-api-key: <apiKey>"
```

### Delete Project
```bash
curl -X DELETE http://localhost:5000/api/projects/<projectId> -H "x-api-key: <apiKey>"
```

---

## 📦 GitHub Repository Submission
- Ensure your repo contains both `server` and `client` folders.
- Include this `README.md` in the root.
- Push to GitHub and submit your repo link.

---

## 👨‍💻 Attribution
Developed by [devlohani99](https://github.com/devlohani99) 