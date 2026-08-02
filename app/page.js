import Link from "next/link";
import Image from "next/image";

export default function Page() {
  return (
    <main className="mt-16 sm:mt-24">
      <Image
        src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=2400&q=80"
        fill
        sizes="100vw"
        priority
        quality={80}
        className="object-cover object-center"
        alt="Luxury hotel suite with floor-to-ceiling windows at The Golden Hotel"
      />
      {/* Dark overlay for contrast */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/75 to-black/55" />

      <div className="relative z-10 text-center px-4 sm:px-8 max-w-3xl mx-auto">
        <h1 className="text-4xl sm:text-6xl lg:text-8xl text-primary-50 mb-6 sm:mb-8 tracking-tight font-light">
          Your perfect stay awaits.
        </h1>
        <p className="text-primary-200 text-base sm:text-lg lg:text-xl mb-10 sm:mb-12 leading-relaxed font-light">
          Welcome to The Golden Hotel &mdash; where timeless elegance and modern
          luxury come together. Whether you&apos;re here for a romantic escape,
          a family retreat, or a business stay, every detail has been crafted
          to make your visit truly unforgettable.
        </p>
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
