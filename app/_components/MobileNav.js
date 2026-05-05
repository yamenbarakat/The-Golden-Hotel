"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

function MobileNav({ session }) {
  const [open, setOpen] = useState(false);

  function handleToggle() {
    setOpen((cur) => !cur);
  }

  function handleClose() {
    setOpen(false);
  }

  return (
    <div className="relative sm:hidden">
      <button
        type="button"
        onClick={handleToggle}
        aria-expanded={open}
        aria-controls="mobile-nav"
        aria-label="Toggle navigation"
        className="inline-flex items-center justify-center rounded-md border border-primary-800 px-3 py-2 text-primary-100 hover:bg-primary-900 transition-colors"
      >
        {open ? (
          <XMarkIcon className="h-6 w-6" />
        ) : (
          <Bars3Icon className="h-6 w-6" />
        )}
      </button>

      {open ? (
        <div
          id="mobile-nav"
          className="absolute right-0 mt-3 w-56 rounded-md border border-primary-800 bg-primary-950 shadow-lg z-20"
        >
          <ul className="flex flex-col text-base">
            <li>
              <Link
                href="/rooms"
                onClick={handleClose}
                className="block px-4 py-3 hover:bg-primary-900 transition-colors"
              >
                Rooms
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                onClick={handleClose}
                className="block px-4 py-3 hover:bg-primary-900 transition-colors"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                onClick={handleClose}
                className="block px-4 py-3 hover:bg-primary-900 transition-colors"
              >
                Contact
              </Link>
            </li>
            <li>
              {session?.user?.image ? (
                <Link
                  href="/account"
                  onClick={handleClose}
                  className="flex items-center gap-3 px-4 py-3 hover:bg-primary-900 transition-colors"
                >
                  <Image
                    className="h-7 w-7 rounded-full"
                    src={session.user.image}
                    alt={session.user.name}
                    width={28}
                    height={28}
                    referrerPolicy="no-referrer"
                  />
                  <span>Guest area</span>
                </Link>
              ) : (
                <Link
                  href="/account"
                  onClick={handleClose}
                  className="block px-4 py-3 hover:bg-primary-900 transition-colors"
                >
                  Guest area
                </Link>
              )}
            </li>
          </ul>
        </div>
      ) : null}
    </div>
  );
}

export default MobileNav;
