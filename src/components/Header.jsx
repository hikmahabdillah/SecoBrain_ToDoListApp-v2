import TextGradient from "./TextGradient";

const Header = () => {
  return(
    <>
    <nav className="flex items-center justify-between w-full">
      <img src="../mainLogo.png" alt="" width="60px"/>
      <div className="heading font-poppins">
        <h2 className="text-2xl font-bold text-neutral-900">seco<TextGradient moveGradient="bg-gradient-to-r">Brain.</TextGradient></h2>
        <p className="date text-slate-500 font-semibold">Sat, 21 Sep 2024</p>
      </div>
      <span className="p-3 rounded-full bg-slate-200">
        <img src="../notifications.svg" alt="notification icon" width="25px" />
      </span>
    </nav>
    </>
  )
}

export default Header;