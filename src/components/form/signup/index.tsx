import Button from '../button'
import FormControl from '../formcontrol'

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
                <FormControl
                  label="Nome"
                  typeIput="text"
                  placeholder="Digite seu nome"
                  labelSecond="Sobrenome"
                  placeholderSecond="Digite seu sobrenome"
                  typeInputSecond="text"
                />

                <FormControl
                  label="E-mail"
                  typeIput="email"
                  placeholder="Digite seu e-mail"
                  labelSecond="Senha"
                  placeholderSecond="Digite sua Senha"
                  typeInputSecond="password"
                />
              </div>

              <div className="text-center lg:text-left flex justify-end items-end gap-8 flex-col mt-4">
                <Button>Register</Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SignUpComponent
