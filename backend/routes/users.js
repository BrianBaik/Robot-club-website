const express = require('express')
const router = express.Router()



router.get('/', (req, res) => {
    res.send('User List')
})

router.get('/new', (req, res) => {
    res.send("User New Form")
})

router.post("/", (req, res) => {
    res.send("Create User")
})

router
    .route("/:id")
    .get((req, res) => {
        const userID = req.params.id; 
        res.send(`Get User With ID ${userID}`)
    })
    .put((req, res) => {
        const userID = req.params.id; 
        res.send(`Update User With ID ${userID}`)
    })
    .delete((req, res) => {
        const userID = req.params.id; 
        res.send(`Delete User With ID ${userID}`)
    })

/*router.get('/:id', (req, res) => {
    const userID = req.params.id; 
    res.send(`Get User With ID ${userID}`);
})

router.put('/:id', (req, res) => {
    const userID = req.params.id; 
    res.send(`Update User With ID ${userID}`);
})

router.delete('/:id', (req, res) => {
    const userID = req.params.id; 
    res.send(`Delete User With ID ${userID}`);
})*/

module.exports = router