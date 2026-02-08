# Deploy backend to Railway

The backend fails on start if **environment variables** are missing. Railway does not use a `.env` file; you must set variables in the dashboard.

## Required variables

1. **MONGO_URI** – MongoDB connection string (e.g. from [MongoDB Atlas](https://www.mongodb.com/atlas)).
2. **GEMINI_API_KEY** – Google Gemini API key (used for the AI interviewer/analyzer).

## How to set them on Railway

1. Open your project on [railway.app](https://railway.app).
2. Click your **backend service** (the one running this repo).
3. Open the **Variables** tab (or **Settings** → **Variables**).
4. Click **Add variable** / **New variable** and add:

   | Variable       | Value (example) |
   |----------------|-----------------|
   | `MONGO_URI`    | `mongodb+srv://user:pass@cluster.mongodb.net/IntroConnect?retryWrites=true&w=majority` |
   | `GEMINI_API_KEY` | your Gemini API key |

5. Save. Railway will **redeploy** the service automatically when you change variables.

After `MONGO_URI` and `GEMINI_API_KEY` are set, the backend should start without the `ValueError: MONGO_URI not found in environment variables` error.

## Optional: CORS (frontend on Vercel)

If your frontend is on Vercel, add your frontend URL to CORS so the browser allows requests:

1. In Railway → your service → **Variables**.
2. Add a variable:
   - **Name:** `ALLOWED_ORIGINS`
   - **Value:** your Vercel URL, e.g. `https://your-app.vercel.app` (or multiple URLs separated by commas).

The backend will allow these origins in addition to localhost.
