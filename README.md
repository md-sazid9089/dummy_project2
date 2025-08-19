# Bachelor Solution

Beginner-friendly MERN stack project. The application helps students and bachelors find housing and related services.

## Structure

- `frontend` – React + Vite + Tailwind interface.
- `backend` – Next.js with Express and MongoDB.

## Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

## Backend Setup

```bash
cd backend
npm install
npm run dev
```

The backend connects to MongoDB using
`mongodb+srv://mdsazid9089:<db_password>@cluster0.u8kwwac.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
or the value supplied in the `MONGO_URL` environment variable and uses `JWT_SECRET`
for token signing.
