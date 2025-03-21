const Button = ({ children, variant = "primary" }) => {
  const getVariantClasses = () => {
    if (variant === "primary") {
      return "bg-[#00AD85] text-white"
    }

    if (variant === "secundary") {
      return "bg-transparent text-[#818181]"
    }
  }

  return (
    <button
      className={`flex items-center gap-2 rounded-lg px-6 py-3 ${getVariantClasses()} transition hover:opacity-80`}
    >
      {children}
    </button>
  )
}

export default Button
