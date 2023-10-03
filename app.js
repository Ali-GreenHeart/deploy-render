import express from 'express'

const pets = [
    {
        id: 0,
        name: 'luna',
        type: 'cat',
        age: 3,
        color: 'brown'
    },
    {
        id: 1,
        name: 'jijolu',
        type: 'dog',
        age: 1,
        color: 'black'
    },
    {
        id: 2,
        name: 'polika',
        type: 'parrot',
        age: 5,
        color: 'green'
    },
]

const app = express()

app.get("/pets", (req, res) => {
    return res.json(pets)
})
app.get("/pets/:id", (req, res) => {
    return res.json(pets.find(({ id }) => id === +req.params.id))
})


app.listen(10000, () => {
    console.log('10000de seni gozleyirik. ')
})
