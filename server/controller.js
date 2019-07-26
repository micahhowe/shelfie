module.exports = {
    getProducts: async (req, res) => {
        const db = req.app.get('db')
        const get_inventory = await db.get_inventory()
        res.status(200).send(get_inventory)
    },
}