import dynamic from "next/dynamic"

const Navbar = dynamic(
  () => import('@components/Navbar'),
  { ssr: false }
)

function Header() {
	return <Navbar/>
}

export default Header
