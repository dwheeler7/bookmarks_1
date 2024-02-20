import React from 'react'
import styles from './BookmarkList.module.scss'
import Bookmark from '../Bookmark/Bookmark'

const iconUrl = 'https://endlessicons.com/wp-content/uploads/2014/03/bookmark-icon-1-614x460.png'

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
            <div className={styles.headerContainer}>
                <h1>BOOKMARKS</h1>
                <img src={iconUrl} alt="Bookmark Icon" className={styles.bookmarkIcon} />
            </div>
            <div className={styles.container}>
                <div className={styles.inputContainer}>
                    <div className={styles.titleContainer}>
                        <h3 className={styles.siteName}>SITE NAME</h3>
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
                    <div className={styles.urlContainer}>
                        <h3 className={styles.siteUrl}>URL</h3>
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
                    <h3>MY SITES</h3>
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
                        <p>You dont have any bookmarks yet.</p>
                    )}
                </div>
            </div>
        </>
    )
}