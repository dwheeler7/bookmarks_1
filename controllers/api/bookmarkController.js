const Bookmark = require('../../models/bookmark')


module.exports = {
    create,
    index,
    update,
    destroy,
    jsonBookmarks,
    jsonBookmark
}

//json
function jsonBookmark (_, res) {
    res.json(res.locals.data.bookmark)
}

function jsonBookmarks (_, res) {
    res.json(res.locals.data.boommark)
}

//CREATE
async function create(req, res, next){
    try {
        const bookmark = await Bookmark.create(req.body)
        console.log(bookmark)
        res.locals.data.bookmark = bookmark
        next()
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

//READ
async function index(_, res ,next) {
    try {
        const bookmarks = await Bookmark.find({ completed: true })
        res.locals.data.bookmarks = bookmarks
        next()
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

//UPDATE
async function update(req ,res,next) {
    try {
        const bookmark = await Bookmark.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.locals.data.bookmark = bookmark
        next()
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

//DESTROY
async function destroy(req ,res,next) {
    try {
        const bookmark = await Bookmark.findByIdAndDelete(req.params.id)
        res.locals.data.bookmark = bookmark
        next()
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}
