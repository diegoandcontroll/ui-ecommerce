/* eslint-disable no-unused-vars */
'use client'
import { signIn } from 'next-auth/react'
import Link from 'next/link'
import React, { useRef } from 'react'

/* eslint-disable @next/next/no-img-element */
const SignInComponent = () => {
  const email = useRef('')
  const pass = useRef('')
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    await signIn('credentials', {
      email: email.current,
      password: pass.current,
      redirect: true,
      callbackUrl: '/',
    })
  }
  email.current = ''
  pass.current = ''
  return (
    <section className="h-screen">
      <div className="h-full">
        <div className="gap-20 flex h-full  items-center justify-center lg:justify-between">
          <div className="shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12">
            <img
              src="https://res.cloudinary.com/dn64mfrfs/image/upload/v1686060662/test/star1_eibrrj.gif"
              className="w-full"
              alt="Sample image"
            />
          </div>

          <div className="mb-12 md:mb-0 md:w-8/12 lg:w-5/12 xl:w-5/12">
            <form onSubmit={onSubmit}>
              <h2 className="text-center font-semibold text-3xl pb-8">
                Sign In
              </h2>
              <div className="relative mb-6 border border-white rounded-lg">
                <input
                  type="text"
                  className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-100"
                  id="exampleFormControlInput2"
                  placeholder="Digite seu email"
                  onChange={(e) => (email.current = e.target.value)}
                />
                <label className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary peer-focus:top-[-10.50px] peer-focus:opacity-100 peer-first:opacity-0">
                  Email
                </label>
              </div>

              <div className="relative mb-6 border border-white rounded-lg mt-8">
                <input
                  type="password"
                  className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-100"
                  id="exampleFormControlInput22"
                  placeholder="Digite sua senha"
                  onChange={(e) => (pass.current = e.target.value)}
                />
                <label className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary peer-focus:top-[-10.50px] peer-focus:opacity-100 peer-first:opacity-0">
                  Password
                </label>
              </div>

              <div className="text-center lg:text-left flex justify-center items-center gap-8 flex-col">
                <button
                  type="submit"
                  className="inline-block rounded bg-cyan-600 px-24 pb-2.5 pt-3 text-sm  uppercase leading-normal text-white font-bold shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                >
                  Login
                </button>
                <p className="mb-0 pt-1 text-sm font-semibold">
                  Don&lsquo;t have an account?
                  <Link
                    href="/sign-up"
                    className="text-danger transition duration-150 ease-in-out hover:text-danger-600 focus:text-danger-600 active:text-danger-700"
                  >
                    Register
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SignInComponent
