import TextGradient from "./TextGradient";

const Quotes = () => {
  return(
    <h2 className="text-3xl sm:text-5xl font-semibold text-neutral-900 w-full max-w-xs sm:max-w-md">Let{"'"}s Improve Your Habits to<TextGradient moveGradient="bg-gradient-to-l">{" "}next level</TextGradient></h2>
  )
}

export default Quotes;