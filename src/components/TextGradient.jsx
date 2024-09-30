const TextGradient = ({children, moveGradient}) => {
  return (
    <span className={`font-bold bg-clip-text text-transparent ${moveGradient} from-[#0028F1] to-[#008DDA]`}>{children}</span>
  )
}

export default TextGradient;