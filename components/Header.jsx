"use client";

import "tailwindcss/tailwind.css";
import { signOut, useSession } from "next-auth/react";

import { useState } from "react";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-gray-800">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1 items-center">
          <a href="/" className="-m-1.5 p-1.5">
            <img
              className="h-8 scale-150"
              src="/logo192.png"
              alt="Diotal Logo"
            />
          </a>
          <a href="/">
            <h3 className="text-lg text-orange-400 font-bold ml-2">Diotal</h3>
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
            aria-label="Open main menu"
            onClick={toggleMenu}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="size-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>

        <div className=" lg:justify-end hidden lg:flex lg:gap-x-12">
          <a href="/about" className="text-sm font-semibold text-white">
            About Us
          </a>
          <a href="/FAQs" className="text-sm font-semibold text-white">
            FAQs
          </a>
          <a
            href="/login"
            className="text-sm font-semibold text-white bg-orange-500 px-4 py-2 rounded-md hover:bg-orange-400"
          >
            Log in <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </nav>
      {isMenuOpen && (
        <div
          id="mobile-menu"
          className="lg:hidden fixed inset-0 z-10 bg-gray-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-700"
          role="dialog"
          aria-modal="true"
        >
          <div className="fixed inset-0 z-10 bg-gray-800"></div>
          <div className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-gray-900 px-6 py-6">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Diotal Org</span>
                <img
                  className="h-8 w-auto"
                  src="/logo192.png"
                  alt="Diotal Logo"
                />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-white"
                aria-label="Close menu"
                onClick={toggleMenu}
              >
                <span className="sr-only">Close menu</span>
                <svg
                  className="size-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  <a
                    href="/about"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-white hover:bg-gray-800"
                  >
                    About us
                  </a>
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-white hover:bg-gray-800"
                  >
                    Marketplace
                  </a>
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-white hover:bg-gray-800"
                  >
                    Company
                  </a>
                </div>
                <div className="py-6">
                  <a
                    href="/login"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold text-white hover:bg-gray-800"
                  >
                    Log in
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
