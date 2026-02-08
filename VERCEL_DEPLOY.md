# Deploy this repo to Vercel

The **Next.js app is in the `client/` folder**, not the repo root. Vercel must use `client` as the project root.

## Do this once in Vercel

1. Open your project on [vercel.com](https://vercel.com).
2. Go to **Settings** → **Build & Development**.
3. Find **Root Directory**.
4. Click **Edit**, enter: **`client`**
5. Click **Save**.
6. Go to **Deployments** → open the **⋯** on the latest → **Redeploy**.

After this, Vercel will build from `client/` and detect Next.js correctly. You only need to set Root Directory once.
