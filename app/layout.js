import { DM_Sans } from "next/font/google";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

import "@/app/_styles/globals.css";
import Header from "./_components/Header";
import { ReservationProvider } from "./_components/ReservationContext";

export const metadata = {
  title: {
    template: "%s / The Golden Hotel",
    default: "Welcome / The Golden Hotel",
  },
  description:
    "The Golden Hotel — a sanctuary of luxury and elegance. Discover our beautifully appointed rooms, world-class amenities, and unparalleled hospitality.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${dmSans.className} antialiased bg-primary-950 text-primary-100 min-h-screen flex flex-col relative`}
        suppressHydrationWarning
      >
        <Header />

        <div className="flex-1 px-4 sm:px-6 lg:px-8 py-8 sm:py-12 grid">
          <main className="max-w-7xl mx-auto w-full">
            <ReservationProvider>{children}</ReservationProvider>
          </main>
        </div>
      </body>
    </html>
  );
}
