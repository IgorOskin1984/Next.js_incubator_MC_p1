import Link from "next/link";

export default function Header() {
	return <>
		<div>
			<nav>
				<ul className="list">
					<li>
						<Link href="characters">Characters</Link>
					</li>
					<li>
						<Link href="locations">Locations</Link>
					</li>
					<li>
						<Link href="episodes">Episodes</Link>
					</li>
				</ul>
			</nav>
		</div>
	</>
}