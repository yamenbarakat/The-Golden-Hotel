# The Wild Oasis

A responsive cabin booking web app for The Wild Oasis resort. Guests can browse luxury cabins, filter by capacity, view cabin details, and book stays. Authenticated users can manage reservations and update their guest profile.

## Features
- Cabin catalog with capacity filters
- Cabin detail pages with booking flow
- Date range selection with pricing summary
- Google sign-in and protected guest area
- Reservation management and profile updates

## Tech Stack
- Next.js App Router (React 19)
- Tailwind CSS
- MongoDB with Mongoose
- NextAuth (Google provider)
- React Day Picker, date-fns, Heroicons

## Getting Started
1. Install dependencies:
   ```bash
   npm install
   ```
2. Create `.env.local` with required values:
   - `DATABASE_URL`
   - `AUTH_SECRET`
   - Google OAuth credentials required by NextAuth (see provider setup in `app/_lib/auth.js`)
3. Start the dev server:
   ```bash
   npm run dev
   ```

Open `http://localhost:3000`.

## Scripts
- `npm run dev` - start development server
- `npm run build` - production build
- `npm run start` - start production server
- `npm run lint` - lint
- `npm run seed` - seed the database from `app/data/cabins.json`

## Project Structure
- `app/` Next.js routes and UI components
- `app/_lib/` data access, auth, and server actions
- `app/models/` Mongoose models
- `app/_styles/` global styles
- `app/data/` seed data

