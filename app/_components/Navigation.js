import Link from "next/link";
import { auth } from "../_lib/auth";
import Image from "next/image";
import MobileNav from "./MobileNav";

export default async function Navigation() {
  const session = await auth();

  return (
    <nav className="z-10 text-base sm:text-lg lg:text-xl w-full sm:w-auto">
      <div className="flex items-center justify-end sm:justify-start w-full sm:w-auto">
        <MobileNav session={session} />
      </div>

      <ul className="hidden sm:flex flex-col sm:flex-row gap-4 sm:gap-10 lg:gap-16 items-start sm:items-center">
        <li>
          <Link
            href="/cabins"
            className="hover:text-accent-400 transition-colors"
          >
            Cabins
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className="hover:text-accent-400 transition-colors"
          >
            About
          </Link>
        </li>
        <li>
          {session?.user?.image ? (
            <Link
              href="/account"
              className="hover:text-accent-400 transition-colors flex items-center gap-4"
            >
              <Image
                className="h-8 w-8 rounded-full" // ✅ Added width
                src={session.user.image}
                alt={session.user.name}
                width={32} // ✅ Required
                height={32} // ✅ Required
                referrerPolicy="no-referrer"
              />
              <span>Guest area</span>
            </Link>
          ) : (
            <Link
              href="/account"
              className="hover:text-accent-400 transition-colors"
            >
              Guest area
            </Link>
          )}
        </li>
      </ul>
    </nav>
  );
}

