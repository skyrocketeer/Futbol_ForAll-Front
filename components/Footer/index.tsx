import Link from "next/link"

function Footer() : JSX.Element {
	return (
		<footer className="text-sm text-neon-main bg-secondary">
			<div className='flex w-2/3 md:w-1/2 mx-auto pt-8 pb-3 justify-evenly' role='footer'>
				<ul className="flex flex-col">
					<li>
						<Link href='/posts'>
							<a>Our Heritage</a>
						</Link>
					</li>
					<li>
						<Link href='/posts'>
							<a>Our Story</a>
						</Link>
					</li>
					<li>
						<Link href='/posts'>
							<a>Our vision</a>
						</Link>
					</li>
				</ul>
				<ul className="flex flex-col ml-12">
					<li>
						<Link href='/posts'>
							<a> On the app </a>
						</Link>
					</li>
					<li>
						<Link href='/posts'>
							<a>On the web </a>
						</Link>
					</li>
					<li>
						<Link href='/posts'>
							<a> Phone call </a>
						</Link>
					</li>
					<li>
						<Link href='/posts'>
							<a>At the store </a>
						</Link>
					</li>
				</ul>
			</div>
			<div className='mt-2 text-xs text-center'>Copyright © 2020</div>
		</footer>
	)
}

export default Footer
