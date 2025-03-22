const Button = ({
  children,
  variant = "primary",
  size = "small",
  className,
  ...rest
}) => {
  const getVariantClasses = () => {
    if (variant === "primary") {
      return "bg-[#00AD85] text-white"
    }

    if (variant === "ghost") {
      return "bg-transparent text-[#818181]"
    }

    if (variant === "secondary") {
      return "bg-[#EEEEEE] text-[#35383E]"
    }
  }

  const getSizeClasses = () => {
    if (size === "small") {
      return "py-1 text-xs"
    }

    if (size === "large") {
      return "py-2 text-sm w-full"
    }
  }

  return (
    <button
      className={`flex items-center justify-center gap-2 rounded-lg px-3 ${getVariantClasses()} ${getSizeClasses()} ${className} transition hover:opacity-80`}
      {...rest}
    >
      {children}
    </button>
  )
}

export default Button
