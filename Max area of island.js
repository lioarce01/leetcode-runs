var maxAreaOfIsland = function (grid) {
	let biggestIsland = 0

	for (let i = 0; i < grid.length; i++) {
		//recorro la lista de listas
		for (let j = 0; j < grid[i].length; j++) {
			//recorro cada posicion de listas[i]

			const traverse = (i, j) => {
				//declaro una funcion traverse para recorrer la lista

				if (
					i < 0 ||
					i >= grid.length ||
					j < 0 ||
					j >= grid[i].length ||
					grid[i][j] === 0
				)
					return 0 //caso de corte

				grid[i][j] = 0 //marco los bloques con 1 visitados, cambiandolos a 0 para que no se vuelvan a recorrer

				return (
					1 +
					traverse(i + 1, j) +
					traverse(i - 1, j) +
					traverse(i, j + 1) +
					traverse(i, j - 1)
				) // retorno la suma de los bloques adyacentes en 4 direcciones.
			}

			biggestIsland = Math.max(biggestIsland, traverse(i, j)) //actualizo la variable biggestIsland con el maximo entre la variable misma y el resultado de la funcion traverse.
		}
	}

	return biggestIsland //retorno la isla con mayor area del la lista
}

console.log(
	maxAreaOfIsland([
		[0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
		[0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
		[0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
	])
)
