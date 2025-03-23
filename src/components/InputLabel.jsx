const InputLabel = (props) => {
  return (
    <label
      className="text-brand-dark-blue-dark-blue text-sm font-semibold"
      {...props}
    >
      {props.children}
    </label>
  )
}

export default InputLabel
