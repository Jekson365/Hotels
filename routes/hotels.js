import express from 'express'
import Hotel from '../modals/Hotel.js'
const router = express.Router()



// post
router.post("/", async (req, res) => {

    const newHotel = new Hotel(req.body)
    console.log(req.body)
    try {
        const savedHotel = await newHotel.save()
        res.status(200).json(savedHotel)
    }
    catch (err) {
        res.status(500).json(err)
    }
})

// update
router.put("/:id", async (req, res) => {

    try {
        const updatedHotel = await Hotel.findByIdAndUpdate(req.params.id, { $set: req.body })
        res.status(200).json(updatedHotel)
    }
    catch (err) {
        res.status(500).json(err)
    }

})
// delete 
router.delete("/:id", async (req, res) => {

    try {
        const deletedHotel = await Hotel.findByIdAndDelete(req.params.id)
        res.status(200).json(deletedHotel)
    }
    catch (err) {
        res.status(500).json(err)
    }

})

// get
router.get("/:id", async (req, res) => {

    try {
        const hotel = await Hotel.findById(req.params.id)
        res.status(200).json(hotel)
    }
    catch (err) {
        res.status(500).json(err)
    }
})
// GET ALL
router.get("/", async (req, res) => {

    try {
        const hotel = await Hotel.find()
        res.status(200).json(hotel)
    }
    catch (err) {
        res.status(500).json(err)
    }

})
export default router