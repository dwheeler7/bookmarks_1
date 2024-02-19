import React from 'react'
import styles from './BookmarkList.module.scss'
import Bookmark from '../Bookmark/Bookmark'

export default function BookmarkList({
    newBookmark,
    createBookmark,
    setNewBookmark,
    bookmarks,
    deleteBookmark,
    updateBookmark
}) {
    function handleCreateBookmark() {
        if (newBookmark.title && newBookmark.url && newBookmark.url !== 'http://' && newBookmark.url !== 'https://') {
            createBookmark(newBookmark)
        }
    }

    return (
        <>
            <h1>BOOKMARKS PART 1</h1>
            <div className={styles.container}>
                <div className={styles.inputContainer}>
                    <div className={styles.titleInputContainer}>
                        <h3 className={styles.inputTitle}>SITE NAME:</h3>
                        <input
                            className={styles.input}
                            type="text"
                            value={newBookmark.title}
                            onChange={(e) => setNewBookmark({ ...newBookmark, title: e.target.value })}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter') {
                                    handleCreateBookmark()
                                }
                            }}
                        />
                    </div>
                    <div className={styles.urlInputContainer}>
                        <h3 className={styles.inputTitle}>URL:</h3>
                        <input
                            className={styles.input}
                            type="text"
                            value={newBookmark.url || 'https://'}
                            onChange={(e) => setNewBookmark({ ...newBookmark, url: e.target.value })}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter') {
                                    handleCreateBookmark()
                                }
                            }}
                        />
                    </div>
                </div>
                <div className={styles.bookmarksContainer}>
                    <h3>MY BOOKMARKS:</h3>
                    {bookmarks.length > 0 ? (
                        bookmarks.map((bookmark) => (
                            <Bookmark
                                key={bookmark._id}
                                bookmark={bookmark}
                                deleteBookmark={deleteBookmark}
                                updateBookmark={updateBookmark}
                            />
                        ))
                    ) : (
                        <p>No bookmarks added yet.</p>
                    )}
                </div>
            </div>
        </>
    )
}