# Connect Vercel (frontend) and Railway (backend)

Two steps: tell the **frontend** your backend URL, and tell the **backend** to accept requests from your frontend.

---

## 1. Vercel → tell the frontend where the backend is

1. Open [vercel.com](https://vercel.com) → your **project** → **Settings** → **Environment Variables**.
2. Add:
   - **Name:** `NEXT_PUBLIC_BACKEND_URL`
   - **Value:** your Railway backend URL, e.g. `https://your-app.up.railway.app`  
     (no trailing slash; use **https** if Railway gives you https).
3. Save.
4. **Redeploy** the frontend (Deployments → ⋯ on latest → Redeploy) so the new variable is used.

**Where to get the Railway URL:** Railway → your backend service → **Settings** → **Networking** / **Public Networking** → copy the public URL (e.g. `https://xxx.up.railway.app`).

---

## 2. Railway → allow the frontend (CORS)

1. Open [railway.app](https://railway.app) → your **backend service** → **Variables**.
2. Add (or edit):
   - **Name:** `ALLOWED_ORIGINS`
   - **Value:** your Vercel frontend URL, e.g. `https://your-project.vercel.app`  
     (no trailing slash; use the exact URL users see in the browser).
3. Save. Railway will redeploy automatically.

**Where to get the Vercel URL:** Your project’s domain in Vercel (e.g. `https://your-project.vercel.app` or a custom domain).

---

## Checklist

| Where   | Variable                     | Value                          |
|---------|------------------------------|--------------------------------|
| **Vercel**  | `NEXT_PUBLIC_BACKEND_URL`     | `https://your-backend.up.railway.app` |
| **Railway** | `ALLOWED_ORIGINS`            | `https://your-app.vercel.app`  |

After both are set and redeploys finish, the frontend and backend should communicate. If you still get CORS or “failed to fetch” errors, double-check:

- No trailing slash on either URL.
- **https** for both in production.
- You redeployed **both** after changing variables.
