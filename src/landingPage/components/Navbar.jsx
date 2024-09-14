export const Navbar = () => {
  return (
    <nav className="flex justify-between items-center h-[4rem] bg-[#191A23] relative px-2">
        <div className="flex items-center gap-4">
            <img className="w-10" src="/images/logo-nova.png" alt="" />
            <h1 className="text-white"><strong className="font-normal">Nova Web Design</strong></h1>
        </div>
        <img width={20} height={20} src="/Icons/three-lines.svg" alt="" />
    </nav>
  )
}

