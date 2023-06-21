async function getData() {
	const response = await fetch("https://rickandmortyapi.com/api/character")

	return response.json()
}

export default async function Characters() {
	const res = await getData()
	const characters = res.results


	console.log(characters);


	return (
		<div>
			<h2>
				Characters
			</h2>
			<ul>
				{characters.map((character: any) => {
					return (<li>{character.name}</li>)
				})}
			</ul>
		</div>
	)
}