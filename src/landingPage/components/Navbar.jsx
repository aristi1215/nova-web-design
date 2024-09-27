export const Navbar = () => {
  return (
    <nav className="flex justify-between items-center h-[4rem] bg-[#404040] relative px-2">
        <div className="flex items-center gap-4">
            <img className="w-10 rounded-full" src="/images/logo-nova.jpeg" alt="" />
            <h1 className="text-white"><strong className="font-normal">Nova Web Design</strong></h1>
        </div>
    </nav>
  )
}

