interface Props {
  isOpen: Boolean
  toggleMenu: Function
}

export default function HamburgerMenu({ isOpen, toggleMenu }: Props){

  const handleChange = () : void => toggleMenu()

  return (
    <button 
      className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white 
                hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white"
      onClick={handleChange}
    >
    {isOpen ? 
      <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
      </svg>
      :
      <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
      </svg>
    }
    </button>
  )
}