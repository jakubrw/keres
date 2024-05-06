export default function handler(req, res) {
	const data = req.body
	const id = createItem(data)
	console.log(data)
	console.log(id)
	res.status(200).json({ id })
}
