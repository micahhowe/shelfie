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
    },
    deleteProduct: (req, res) => {
        const db = req.app.get('db')
        const { id } = req.params;
        //these correspond with what the sql file name is VVVVVV
        db.delete_it(id).then (result => {
            res.status(200).send(result)
        }).catch(err => {
            console.log(err)
            res.status(400).send('you done messed up')
        })
        // const {id} = req.params
        // const index = req.body.inventoryList.findIndex(product => (
        //   product.id === parseInt(id)
        // ))
        // req.body.inventoryList.splice(index, 1)
        // res.status(200).send(this.props.inventoryList)
      },
}