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
        className="object-cover object-top"
        alt="Mountains and forests with two cabins"
      />

      <div className="relative z-10 text-center px-2 sm:px-0">
        <h1 className="text-4xl sm:text-6xl lg:text-8xl text-primary-50 mb-8 sm:mb-10 tracking-tight font-normal">
          Welcome to paradise.
        </h1>
        <Link
          href="/cabins"
          className="bg-accent-500 px-6 sm:px-8 py-4 sm:py-6 text-primary-800 text-base sm:text-lg font-semibold hover:bg-accent-600 transition-all"
        >
          Explore luxury cabins
        </Link>
      </div>
    </main>
  );
}
