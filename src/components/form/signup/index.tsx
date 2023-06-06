/* eslint-disable @next/next/no-img-element */
const SignUpComponent = () => {
  return (
    <section className="h-screen">
      <div className="h-full">
        <div className="gap-20 flex h-full  items-center justify-around lg:justify-between">
          <div className="shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12 min-w-[250px]: mt-28">
            <img
              src="https://res.cloudinary.com/dn64mfrfs/image/upload/v1686069456/test/star2_kkjxzc.gif"
              className="w-full"
              alt="Sample image"
            />
          </div>

          <div className="md:mb-0 md:w-8/12 lg:w-5/12 xl:w-5/12">
            <form>
              <h2 className="text-end font-semibold text-3xl mb-10 ml-8">
                Crie sua conta! 🥳🙋‍♂️
              </h2>
              <div className="flex flex-col">
                <div className="flex justify-between items-center gap-8">
                  <div
                    className="relative mb-6 border border-white rounded-lg w-full"
                    data-te-input-wrapper-init
                  >
                    <input
                      type="text"
                      className="peer block min-h-[auto] w-64 rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-100"
                      id="exampleFormControlInput2"
                      placeholder="Digite seu primeiro nome"
                    />
                    <label className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary peer-focus:top-[-10.50px] peer-focus:opacity-100 peer-first:opacity-0">
                      Nome
                    </label>
                  </div>

                  <div
                    className="relative mb-6 border border-white rounded-lg w-full"
                    data-te-input-wrapper-init
                  >
                    <input
                      type="password"
                      className="peer block min-h-[auto] w-64 rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-100"
                      id="exampleFormControlInput22"
                      placeholder="Digite sua sobrenome"
                    />
                    <label className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary peer-focus:top-[-10.50px] peer-focus:opacity-100 peer-first:opacity-0">
                      Sobrenome
                    </label>
                  </div>
                </div>

                <div className="flex justify-between items-center gap-8">
                  <div
                    className="relative mb-6 border border-white rounded-lg w-full"
                    data-te-input-wrapper-init
                  >
                    <input
                      type="email"
                      className="peer block min-h-[auto] w-64 rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-100"
                      id="exampleFormControlInput2"
                      placeholder="Digite seu e-mail"
                    />
                    <label className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary peer-focus:top-[-10.50px] peer-focus:opacity-100 peer-first:opacity-0">
                      E-mail
                    </label>
                  </div>

                  <div
                    className="relative mb-6 border border-white rounded-lg w-full"
                    data-te-input-wrapper-init
                  >
                    <input
                      type="password"
                      className="peer block min-h-[auto] w-64 rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-100"
                      id="exampleFormControlInput22"
                      placeholder="Digite sua senha"
                    />
                    <label className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary peer-focus:top-[-10.50px] peer-focus:opacity-100 peer-first:opacity-0">
                      Password
                    </label>
                  </div>
                </div>
              </div>

              <div className="text-center lg:text-left flex justify-end items-end gap-8 flex-col mt-4">
                <button
                  type="button"
                  className="inline-block rounded bg-cyan-600 px-24 pb-2.5 pt-3 text-sm  uppercase leading-normal text-white font-bold shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SignUpComponent
