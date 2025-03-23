const Button = ({
  children,
  variant = "primary",
  size = "small",
  className,
  ...rest
}) => {
  const getVariantClasses = () => {
    if (variant === "primary") {
      return "bg-brand-primary text-white"
    }

    if (variant === "ghost") {
      return "bg-transparent text-brand-dark-gray"
    }

    if (variant === "secondary") {
      return "bg-brand-light-gray text-brand-dark-blue"
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
