const { model, Schema } = require('mongoose')


const todoSchema = new Schema ({
    websiteName: { required: true, type: String },
    url: { required: true, type: String },
})

const Todo = model('Todo', todoSchema)

module.exports = Todo