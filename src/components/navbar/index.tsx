'use client'
import { signOut, useSession } from 'next-auth/react'
import Link from 'next/link'
import { FiLogOut } from 'react-icons/fi'
import AudioPlayer from '../audio'

/* eslint-disable @next/next/no-img-element */
const Navbar = () => {
  const { data: session } = useSession()

  return (
    <nav className="absolute z-10 flex w-full items-center justify-between bg-neutral-100 py-4 shadow-md shadow-black/5 dark:bg-neutral-600 dark:shadow-black/10">
      <div className="flex w-full flex-wrap items-center justify-between px-3">
        <button
          className="block border-0 bg-transparent px-2 text-neutral-500 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 lg:hidden"
          type="button"
        >
          <span className="[&>svg]:w-7">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-7 w-7"
            >
              <path
                fillRule="evenodd"
                d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </button>

        <div
          className="items-center lg:!flex lg:basis-auto"
          id="navbarSupportedContent1"
        >
          <a
            className="mb-4 mr-2 mt-3 flex items-center text-neutral-900 hover:text-neutral-900 focus:text-neutral-900 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400 lg:mb-0 lg:mt-0"
            href="#"
          >
            <img
              src="https://tecdn.b-cdn.net/img/logo/te-transparent-noshadows.webp"
              style={{ height: '15px' }}
              alt=""
              loading="lazy"
            />
          </a>

          <ul className="list-style-none mr-auto flex flex-col pl-0 lg:flex-row">
            <li className="mb-4 lg:mb-0 lg:pr-2">
              <Link
                className="text-neutral-500 hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-zinc-400"
                href="/"
              >
                Home
              </Link>
            </li>

            <li className="mb-4 lg:mb-0 lg:pr-2">
              <Link
                className="text-neutral-500 hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                href="/products"
              >
                Products
              </Link>
            </li>

            <li className="mb-4 lg:mb-0 lg:pr-2">
              <Link
                className="text-neutral-500 hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                href="/about"
              >
                About
              </Link>
            </li>
            {!session?.user && (
              <>
                <li className="mb-4 lg:mb-0 lg:pr-2">
                  <Link
                    className="text-neutral-500 hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                    href="/sign-in"
                  >
                    Sign-in
                  </Link>
                </li>
              </>
            )}
            {session?.user && (
              <>
                <li className="mb-4 lg:mb-0 lg:pr-2">
                  <Link
                    className="text-neutral-500 hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                    href="/wishlist"
                  >
                    Wishlist
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>

        <div className="flex items-center mr-8">
          {session?.user && (
            <Link
              className="mr-4 text-neutral-500 hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
              href="/checkout"
            >
              <span className="[&>svg]:w-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
                </svg>
              </span>
            </Link>
          )}
          {session?.user && (
            <div className="">
              <a
                className="hidden-arrow flex items-center whitespace-nowrap transition duration-150 ease-in-out motion-reduce:transition-none"
                href="#"
                id="dropdownMenuButton2"
                role="button"
              >
                <img
                  src="https://tecdn.b-cdn.net/img/new/avatars/2.jpg"
                  className="rounded-full"
                  style={{ height: '25px', width: '25px' }}
                  alt=""
                  loading="lazy"
                />
              </a>
            </div>
          )}
          <div className="pl-4 cursor-pointer">
            <AudioPlayer audioUrl="https://upnow-prod.ff45e40d1a1c8f7e7de4e976d0c9e555.r2.cloudflarestorage.com/Xcsob6YGuzaPKhUdLB5GIdpJ0Fv1/2254ca80-b549-4117-ad0f-9f9f5881630f?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=cdd12e35bbd220303957dc5603a4cc8e%2F20230608%2Fauto%2Fs3%2Faws4_request&X-Amz-Date=20230608T055201Z&X-Amz-Expires=43200&X-Amz-Signature=fb61db40d32f1d630d5859ce20027f9f874b8d3998c9476f8f0ae47458afb086&X-Amz-SignedHeaders=host&response-content-disposition=attachment%3B%20filename%3D%22Star%20Wars%20Main%20Theme%20%28Full%29%20%2864%20kbps%29.mp3%22" />
          </div>
          {session?.user && (
            <div className="pl-4 cursor-pointer">
              <FiLogOut
                className="w-8 h-5 hover:text-green-300"
                onClick={() => signOut()}
              />
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
