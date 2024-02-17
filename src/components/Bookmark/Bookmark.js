import React, { useState } from 'react'
import styles from './Bookmark.module.scss'

const Bookmark = ({ bookmark, deleteMark, updateMark }) => {
    const [title, setTitle] = useState(bookmark.title)
    const [url, setUrl] = useState(bookmark.url)

    const handleInputChange = (e) => {
        const { name, value } = e.target
        if (name === 'title') {
            setTitle(value)
        } else if (name === 'url') {
            setUrl(value)
        }
    }

    const handleSubmit = (e) => {
        if (e.key === 'Enter') {
            updateMark(bookmark._id, { [e.target.name]: e.target.value })
            e.target.blur()
        }
    }

    const handleClick = () => {
        window.open(bookmark.url, '_blank')
    }

    const handleDelete = () => {
        deleteMark(bookmark._id)
    }

    return (
        <div className={styles.bookmarkContainer}>
            <form className={styles.bookmark}>
                <input
                    name='title'
                    className={styles.titleInput}
                    value={title}
                    onChange={handleInputChange}
                    onKeyDown={handleSubmit}
                />
                <div className={styles.bookmarkUrl}>
                    <input
                        name='url'
                        className={styles.urlInput}
                        value={url}
                        onChange={handleInputChange}
                        onKeyDown={handleSubmit}
                    />
                </div>
            </form>
            <div>
                <button className={styles.button} onClick={handleDelete}>
                    Remove
                </button>
                <div className={styles.visitBtnContainer} onClick={handleClick}>
                    <a className={styles.visitBtn} href={bookmark.url} target='_blank' rel='noopener noreferrer'>
                        Go
                    </a>
                </div>
                <div className={styles.animation}></div>
            </div>
        </div>
    )
}

export default Bookmark