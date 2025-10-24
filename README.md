# Animal Milking Tracking System (Backend)

A Node.js/Express backend service for managing animal milking session data with MongoDB integration.

## 🛠️ Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- CORS middleware
- dotenv for configuration

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/Badrish96/milking-tracking.git
cd milking-tracking/server
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the server directory:
```
PORT=5000
MONGODB_URI=your_mongodb_connection_string
```

Note: For the `MONGODB_URI`, you can either:
- Use a local MongoDB instance: `mongodb://localhost:27017/milking-tracking`
- Get a connection string from [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) for a cloud-hosted database

## 🚀 Development

Start the development server:
```bash
npm run dev
```

For production:
```bash
npm start
```

## 📁 Project Structure

```
server/
├── Controllers/
│   └── sessionController.js
├── Models/
│   └── MilkingSession.js
├── Routes/
│   └── sessionRoutes.js
├── config/
│   └── db.js
├── .env
├── server.js
└── package.json
```

## 🔌 API Endpoints

### Sessions

#### GET /api/sessions
Fetch milking sessions with pagination

Query Parameters:
- `page` (optional, default: 1)
- `limit` (optional, default: 10)

Response:
```json
{
  "sessions": [
    {
      "id": "string",
      "start_time": "datetime",
      "end_time": "datetime",
      "duration": "number",
      "milk_quantity": "number",
      "created_at": "datetime"
    }
  ],
  "total": "number",
  "currentPage": "number",
  "totalPages": "number"
}
```

#### POST /api/sessions
Create a new milking session

Request Body:
```json
{
  "start_time": "2025-04-10T14:00:00Z",
  "end_time": "2025-04-10T14:15:00Z",
  "duration": 900,
  "milk_quantity": 5.2
}
```

Response:
```json
{
  "id": "string",
  "start_time": "datetime",
  "end_time": "datetime",
  "duration": "number",
  "milk_quantity": "number",
  "created_at": "datetime"
}
```

## 💾 Database Schema

### MilkingSession
```javascript
{
  start_time: DateTime,
  end_time: DateTime,
  duration: Number,
  milk_quantity: Number,
  created_at: DateTime,
  id: String
}
```

## 🔧 Available Scripts

- `npm start` - Start production server
- `npm run dev` - Start development server with nodemon

## 🔒 Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| PORT | Server port number | 5000 |
| MONGODB_URI | MongoDB connection string (Get from MongoDB Atlas or use local MongoDB instance) | - |