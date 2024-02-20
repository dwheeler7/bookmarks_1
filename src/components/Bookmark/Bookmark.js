import React, { useState } from 'react'
import styles from './Bookmark.module.scss'

const Bookmark = ({ bookmark, deleteBookmark }) => {
    const [editMode, setEditMode] = useState(false)
    const [title, setTitle] = useState(bookmark.title)
    const [url, setUrl] = useState(bookmark.url)

    const bookmarkIconUrl = 'https://endlessicons.com/wp-content/uploads/2014/03/bookmark-icon-1-614x460.png'
    const goButtonIconUrl = 'https://cdn3.iconfinder.com/data/icons/web-ui-3/128/Globe-2-512.png'
    const editButtonIconUrl = 'https://cdn3.iconfinder.com/data/icons/web-ui-3/128/Compose-2-512.png'
    const deleteButtonIconUrl = 'https://cdn3.iconfinder.com/data/icons/web-ui-3/128/Close-2-512.png'
    const saveButtonIconUrl = 'https://cdn0.iconfinder.com/data/icons/ie_Bright/512/disk_save.png'

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
                    <button className={styles.saveButton} onClick={() => setEditMode(false)}>
                        <img src={saveButtonIconUrl} alt="Save" style={{width: '20px', height: '20px'}} />
                    </button>
                </>
            ) : (
                <>
                    <div className={styles.titleWithIcon}>
                        <img src={bookmarkIconUrl} alt="Bookmark Icon" className={styles.bookmarkIcon} />
                        <h4>{title}</h4>
                    </div>
                    <div className ={styles.buttonContainer}>
                        <button className={styles.button} onClick={() => window.open(url, '_blank', 'noopener,noreferrer')}>
                            <img src={goButtonIconUrl} alt="Go" style={{width: '20px', height: '20px'}} />
                        </button>
                        <button className={styles.button} onClick={() => setEditMode(true)}>
                            <img src={editButtonIconUrl} alt="Edit" style={{width: '20px', height: '20px'}} />
                        </button>
                        <button className={styles.button} onClick={() => deleteBookmark(bookmark._id)}>
                            <img src={deleteButtonIconUrl} alt="Delete" style={{width: '20px', height: '20px'}} />
                        </button>
                    </div>
                </>
            )}
        </div>
    )
}

export default Bookmark