const Navbar = () => {
  return (
    <header className='py-2 bg-[#3b3b3b]'>
      <div className='flex justify-between items-center w-full text-2xl text-tertiary font-paragraph text-shadow'>
        <div className='invisible'>Contact Us</div>
        <div><a href="/#about">About</a></div>
        <div>Projects</div>
        <div>Contact Us</div>
        <div className='invisible'>About</div>
      </div>
    </header>
  )
}

export default Navbar
