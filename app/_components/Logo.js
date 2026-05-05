import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo.png";

function Logo() {
  return (
    <Link
      href="/"
      className="flex items-center gap-3 sm:gap-4 z-10 min-w-[12rem]"
    >
      {/* <Image src="/logo.png" height="60" width="60" alt="The Oasis Hotel logo" /> */}
      <Image
        src={logo}
        height="60"
        quality={100}
        width="60"
        alt="The Golden Hotel logo"
        className="h-10 w-10 sm:h-12 sm:w-12"
      />
      <span className="text-lg sm:text-xl font-semibold text-primary-100 whitespace-nowrap">
        The Golden Hotel
      </span>
    </Link>
  );
}

export default Logo;
