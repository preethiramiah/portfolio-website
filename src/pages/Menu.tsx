const Menu = () => {
  return (
    <header>
      <nav
        className='z-50 fixed left-1/2 -translate-x-1/2 mx-auto flex gap-5 w-max items-center justify-between p-3 lg:px-8 rounded-full bg-[#ffffff14]
          font-manrope font-bold text-sm text-[#ffffffcc] border-x-[0.5px] border-y-[0.5px] border-[rgb(83,80,80)] backdrop-blur-md
          shadow-[-1px_2px_12px_0px_rgba(0,0,0,0.1)]'
        aria-label='Menu'
      >
        <a href='#' className='hover:text-[var(--text-hover)]'>About</a>
        <a href='#expertise' className='hover:text-[var(--text-hover)]'>Skills</a>
        <a href='#projects' className='hover:text-[var(--text-hover)]'>Projects</a>
        <a href='#work-history' className='hover:text-[var(--text-hover)]'>Work History</a>
      </nav>
    </header>
  )
}

export default Menu
