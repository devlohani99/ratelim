# Rate Limiter as a Service - Backend

## Setup

1. Clone the repo and cd into `server`
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file based on `.env.example` and set your MongoDB Atlas URI.
4. Start the server:
   ```bash
   npm start
   ```

## MongoDB Atlas Setup
- Go to https://www.mongodb.com/cloud/atlas
- Create a free cluster
- Add a database user and IP whitelist
- Get your connection string and set it as `MONGO_URI` in `.env`

## API Endpoints

### Register Project
```bash
curl -X POST http://localhost:5000/api/projects -H "Content-Type: application/json" -d '{"projectName":"My API"}'
```

### Set Rate Limit
```bash
curl -X POST http://localhost:5000/api/limits -H "Content-Type: application/json" -d '{"projectId":"<projectId>", "limit":100, "window":"hour"}'
```

### Track Usage
```bash
curl -X POST http://localhost:5000/api/track -H "Content-Type: application/json" -d '{"apiKey":"<apiKey>"}'
```

### Get Usage Stats
```bash
curl -X GET http://localhost:5000/api/usage/<projectId> -H "x-api-key: <apiKey>"
```

### Delete Project
```bash
curl -X DELETE http://localhost:5000/api/projects/<projectId>
``` 