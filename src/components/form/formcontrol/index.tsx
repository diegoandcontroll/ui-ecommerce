interface FormControlProps {
  placeholder: string
  label: string
  typeIput: 'email' | 'text' | 'password'
  placeholderSecond: string
  labelSecond: string
  typeInputSecond: 'email' | 'text' | 'password'
}
const FormControl = ({
  label,
  labelSecond,
  placeholder,
  placeholderSecond,
  typeInputSecond,
  typeIput,
}: FormControlProps) => {
  return (
    <div className="flex justify-between items-center gap-8">
      <div
        className="relative mb-6 border border-white rounded-lg w-full"
        data-te-input-wrapper-init
      >
        <input
          type={typeIput}
          className="peer block min-h-[auto] w-64 rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-100"
          id="exampleFormControlInput2"
          placeholder={placeholder}
        />
        <label className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary peer-focus:top-[-10.50px] peer-focus:opacity-100 peer-first:opacity-0">
          {label}
        </label>
      </div>

      <div
        className="relative mb-6 border border-white rounded-lg w-full"
        data-te-input-wrapper-init
      >
        <input
          type={typeInputSecond}
          className="peer block min-h-[auto] w-64 rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-100"
          id="exampleFormControlInput22"
          placeholder={placeholderSecond}
        />
        <label className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary peer-focus:top-[-10.50px] peer-focus:opacity-100 peer-first:opacity-0">
          {labelSecond}
        </label>
      </div>
    </div>
  )
}

export default FormControl
