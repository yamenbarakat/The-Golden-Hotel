import Link from "next/link";
import Image from "next/image";
import bg from "@/public/bg.png";

export default function Page() {
  return (
    <main className="mt-16 sm:mt-24">
      <Image
        src={bg}
        fill
        sizes="100vw"
        placeholder="blur"
        quality={80}
        className="object-cover object-center"
        alt="Luxury hotel exterior at golden hour with reflecting pool"
      />
      {/* Dark overlay for contrast */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />

      <div className="relative z-10 text-center px-2 sm:px-0">
        <h1 className="text-4xl sm:text-6xl lg:text-8xl text-primary-50 mb-8 sm:mb-10 tracking-tight font-light">
          Your perfect stay awaits.
        </h1>
        <Link
          href="/rooms"
          className="bg-accent-500 px-6 sm:px-8 py-4 sm:py-6 text-primary-950 text-base sm:text-lg font-semibold uppercase tracking-widest hover:bg-accent-400 transition-all"
        >
          Explore our rooms
        </Link>
      </div>
    </main>
  );
}
