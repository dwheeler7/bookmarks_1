const express = require('express')
const router = express.Router()
const bookmarkCtrl = require('../../controllers/api/bookmarkController')

router.post('/', bookmarkCtrl.create, bookmarkCtrl.jsonBookmarks)
router.get('/', bookmarkCtrl.index, bookmarkCtrl.jsonBookmarks)
router.put('/:id', bookmarkCtrl.update, bookmarkCtrl.jsonBookmarks)
router.delete('/:id', bookmarkCtrl.destroy, bookmarkCtrl.jsonBookmarks)
router.put('/:id/move', bookmarkCtrl.move, bookmarkCtrl.jsonBookmarks)

module.exports = router