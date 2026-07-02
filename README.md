# The Golden Hotel

A responsive hotel room booking web app for The Golden Hotel. Guests can browse luxury rooms and suites, filter by guest capacity, view room details, select stay dates, and create reservations. Signed-in guests can manage their reservations and update their profile from a protected account area.

## Features
- Hotel room and suite catalog with capacity filters
- Room detail pages with images, descriptions, pricing, and booking flow
- Date range selection with automatic nightly price summary
- Google sign-in with protected guest account pages
- Reservation management for viewing, editing, and deleting bookings
- Guest profile updates

## Tech Stack
- Next.js App Router
- React 19
- Tailwind CSS
- MongoDB with Mongoose
- NextAuth with Google provider
- React Day Picker, date-fns, Heroicons

## Getting Started
1. Install dependencies:
   ```bash
   npm install
   ```

2. Create `.env.local` with the required values:
   - `DATABASE_URL`
   - `AUTH_SECRET`
   - Google OAuth credentials required by NextAuth. See the provider setup in `app/_lib/auth.js`.

3. Seed the database:
   ```bash
   npm run seed
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

Open `http://localhost:3000` in your browser.

## Scripts
- `npm run dev` - start the development server
- `npm run build` - create a production build
- `npm run start` - start the production server
- `npm run lint` - run linting
- `npm run seed` - seed the database with hotel room data from `app/data/cabins.json`

## Project Structure
- `app/` - Next.js routes and UI components
- `app/_components/` - shared interface components
- `app/_lib/` - data access, authentication, and server actions
- `app/models/` - Mongoose models
- `app/_styles/` - global styles
- `app/data/` - seed data for rooms
- `public/` - static images and assets

## Notes
Some internal model and file names still use the original `cabin` naming, but the user-facing app and seed content now describe hotel rooms and suites.
