import React, { useState } from 'react'
import styles from './Bookmark.module.scss'

const Bookmark = ({ bookmark, deleteBookmark }) => {
    const [editMode, setEditMode] = useState(false)
    const [title, setTitle] = useState(bookmark.title)
    const [url, setUrl] = useState(bookmark.url)

    const bookmarkIconUrl = 'https://endlessicons.com/wp-content/uploads/2014/03/bookmark-icon-1-614x460.png'
    const goButtonIconUrl = 'https://icon-library.com/images/web-icon-white/web-icon-white-3.jpg'
    const editButtonIconUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVjetlSgB26ELwRMOjU_VK8mS7omWKw6l7gA&usqp=CAU'
    const deleteButtonIconUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWzoRCh_PQk071FDkYGNb9lHBkl8T5QaV2F9USxLqmEw&s'
    const saveButtonIconUrl = 'https://www.shareicon.net/data/2016/03/27/465731_save_256x256.png'

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
                    <button className={styles.button} onClick={() => setEditMode(false)}>
                        <img src={saveButtonIconUrl} alt="Save" style={{width: '15px', height: '15px'}} />
                    </button>
                </>
            ) : (
                <>
                    <div className={styles.titleWithIcon}>
                        <img src={bookmarkIconUrl} alt="Bookmark Icon" className={styles.bookmarkIcon} />
                        <h4>{title}</h4>
                    </div>
                    <button className={styles.button} onClick={() => window.open(url, '_blank', 'noopener,noreferrer')}>
                        <img src={goButtonIconUrl} alt="Go" style={{width: '15px', height: '15px'}} />
                    </button>
                    <button className={styles.button} onClick={() => setEditMode(true)}>
                        <img src={editButtonIconUrl} alt="Edit" style={{width: '15px', height: '15px'}} />
                    </button>
                    <button className={styles.button} onClick={() => deleteBookmark(bookmark._id)}>
                        <img src={deleteButtonIconUrl} alt="Delete" style={{width: '15px', height: '15px'}} />
                    </button>
                </>
            )}
        </div>
    )
}

export default Bookmark