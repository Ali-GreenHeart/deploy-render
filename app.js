import express from 'express'
import { v4 as generateId } from 'uuid'
// universally unique id
const pets = [
    {
        id: "9fb2b4df-bddc-4248-b9f6-15fb7d9b93ab",
        name: 'luna',
        type: 'cat',
        age: 3,
        color: 'brown'
    },
    {
        id: "c6095f0d-30a7-4b6d-bef4-7fda1daaebff",
        name: 'jijolu',
        type: 'dog',
        age: 1,
        color: 'black'
    },
    {
        id: "f5f327c3-016c-409c-bf14-9622ae4b00b5",
        name: 'polika',
        type: 'parrot',
        age: 5,
        color: 'green'
    },
]
const app = express()
app.use(express.json())

app.get("/pets", (req, res) => {
    return res.json(pets)
})
app.get("/pets/:id", (req, res) => {
    return res.json(pets.find(({ id }) => id === req.params.id))
})

app.post("/pets", (req, res) => {
    const id = generateId()
    console.log(req.body)
    pets.push({ ...req.body, id })
    return res.json("Pet successfully added!")
})


app.listen(10000, () => {
    console.log('10000de seni gozleyirik. ')
})
