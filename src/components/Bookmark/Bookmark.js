import React, { useState } from 'react'
import styles from './Bookmark.module.scss'

const Bookmark = ({ bookmark, deleteBookmark }) => {
    const [editMode, setEditMode] = useState(false)
    const [title, setTitle] = useState(bookmark.title)
    const [url, setUrl] = useState(bookmark.url)

    return (
        <div className={styles.bookmarkContainer}>
            {editMode ? (
                <>
                    <input
                        className={styles.input}
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <input
                        className={styles.input}
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                    />
                    <button className={styles.button} onClick={() => setEditMode(false)}>Save</button>
                </>
            ) : (
                <>
                    <h4>{title}</h4>
                    <button className={styles.button} onClick={() => window.open(url, '_blank', 'noopener,noreferrer')}>Go</button>
                    <button className={styles.button} onClick={() => setEditMode(true)}>Edit</button>
                    <button className={styles.button} onClick={() => deleteBookmark(bookmark._id)}>Remove</button>
                </>
            )}
        </div>
    )
}

export default Bookmark