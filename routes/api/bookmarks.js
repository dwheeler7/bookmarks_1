const express = require('express')
const router = express.Router()
const bookmarkController = require('../controllers/bookmarkController')


router.post('/', bookmarkController.create)
router.get('/', bookmarkController.index)
router.put('/:id', bookmarkController.update)
router.delete('/:id', bookmarkController.destroy)
router.get('/:id/json', bookmarkController.jsonBookmark)
router.get('/json', bookmarkController.jsonBookmarks)

module.exports = router