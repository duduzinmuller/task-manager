import { forwardRef } from "react"

import InputErrorMessage from "./InputErrorMessage"
import InputLabel from "./InputLabel"

const Input = forwardRef(({ label, errorMessage, ...rest }, ref) => {
  return (
    <div className="flex flex-col space-y-1 text-left">
      <InputLabel htmlFor={rest.id}>{label}</InputLabel>
      <input
        className={`rounded-lg border border-solid px-4 py-3 outline-[#00AD85] placeholder:text-sm ${
          errorMessage ? "border-red-500 placeholder:text-red-500" : ""
        }`}
        ref={ref}
        {...rest}
      />
      {errorMessage && <InputErrorMessage>{errorMessage}</InputErrorMessage>}
    </div>
  )
})

Input.displayName = "Input"

export default Input
