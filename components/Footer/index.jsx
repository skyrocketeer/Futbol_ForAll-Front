import Link from "next/link"
import style from "./footer.module.css"
import clsx from "clsx"

function Footer() {
	return (
		<div
			className={clsx(
				style.footer__height,
				"justify-start w-1/2 mx-auto mt-4 py-8 text-sm text-neon-main"
			)}
		>
			<div className='flex' role='footer'>
				<ul className={clsx("flex flex-col", style.footer__menuItem)}>
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
				<ul className={clsx("flex flex-col", style.footer__menuItem)}>
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
			<span className='mt-5 text-xs'>Copyright © 2020</span>
		</div>
	)
}

export default Footer
