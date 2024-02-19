import React, { useState } from 'react'
import styles from './Bookmark.module.scss'

const Bookmark = ({ bookmark, deleteBookmark, updateBookmark }) => {
    const [editMode, setEditMode] = useState(false)
    const [title, setTitle] = useState(bookmark.title)
    const [url, setUrl] = useState(bookmark.url)

    const editMark = () => {
        setEditMode(!editMode)
    }

    const handleDelete = () => {
        deleteBookmark(bookmark._id)
    }

    const handleUpdate = () => {
        updateBookmark(bookmark._id, { title, url })
        editMark()
    }

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
                    <button className={styles.button} onClick={handleUpdate}>Save</button>
                    <button className={styles.button} onClick={editMark}>Cancel</button>
                </>
            ) : (
                <>
                    <h4>{title}</h4>
                    <a
                        className={styles.visitBtn}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Visit
                    </a>
                    <button className={styles.button} onClick={editMark}>Edit</button>
                    <button className={styles.button} onClick={handleDelete}>Remove</button>
                </>
            )}
        </div>
    )
}

export default Bookmark