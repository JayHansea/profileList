"use client";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        <Link href="/" className="text-white text-xl font-bold">
          AlumUnite
        </Link>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white lg:hidden focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            ></path>
          </svg>
        </button>

        <div
          className={`w-full ${
            isOpen ? "block" : "hidden"
          } lg:flex lg:w-auto lg:items-center`}
        >
          <ul className="flex flex-col lg:flex-row lg:space-x-4 mt-4 lg:mt-0">
            <li>
              <Link
                href="/"
                className={`${
                  pathname === "/" ? "bg-blue-800" : ""
                } text-white hover:bg-blue-700 p-2 rounded block lg:inline`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/add-user"
                className={`${
                  pathname === "/add-user" ? "bg-blue-800" : ""
                } text-white hover:bg-blue-700 p-2 rounded block lg:inline`}
              >
                Add User
              </Link>
            </li>
            <li>
              <Link
                href="/manage-user"
                className={`${
                  pathname === "/manage-user" ? "bg-blue-800" : ""
                } text-white hover:bg-blue-700 p-2 rounded block lg:inline`}
              >
                Manage Users
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
