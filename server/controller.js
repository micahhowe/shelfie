module.exports = {
    getProducts: async (req, res) => {
        const db = req.app.get('db')
        const get_inventory = await db.get_inventory()
        res.status(200).send(get_inventory)
    },
    addProduct: (req, res, next) => {
        const db = req.app.get('db')
        const { name, price, image_url } = req.body
        db.create_product([name, price, image_url]).then(result => {
            res.status(200).send(result)
        })
    }
}