import { useState, useEffect } from 'react'
import BookmarkList from './components/ListOfBookmarks/BookmarkList'
import styles from './App.module.scss'

export default function App() {
    const [bookmarks, setBookmarks] = useState([])
    const [addedBookmarks, setAddedBookmarks] = useState([])
    const [newBookmark, setNewBookmark] = useState({
        title: '',
        url: ''
    })

    const createBookmark = async () => {
        const body = { ...newBookmark }
        try {
            const response = await fetch('/api/bookmarks', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(body)
            })
            const createdBookmark = await response.json()
            const bookmarksCopy = [createdBookmark, ...bookmarks]
            setBookmarks(bookmarksCopy)
            setNewBookmark({ title: '', url: '' })
        } catch (error) {
            console.error(error)
        }
    }

    const updateBookmark = async (id, bookmarkToUpdate) => {
        const body = { ...bookmarkToUpdate }
        try {
            const response = await fetch(`/api/bookmarks/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(body)
            })
            const updatedBookmark = await response.json()
            const updatedBookmarks = bookmarks.map(bookmark => {
                if (bookmark._id === id) {
                    return updatedBookmark
                }
                return bookmark
            });
            setBookmarks(updatedBookmarks)
            setNewBookmark({ title: '', url: '' })
        } catch (error) {
            console.error(error)
        }
    }

    const deleteBookmark = async (id) => {
        try {
            const response = await fetch(`/api/bookmarks/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            if (response.ok) {
                setBookmarks(bookmarks.filter(bookmark => bookmark._id !== id))
            }
        } catch (error) {
            console.error(error)
        }
    }

    const moveMark = async (id) => {
        try {
            const response = await fetch(`/api/bookmarks/${id}/move`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            if (response.ok) {
                const movedBookmark = bookmarks.find(bookmark => bookmark._id === id)
                setAddedBookmarks([movedBookmark, ...addedBookmarks])
                setBookmarks(bookmarks.filter(bookmark => bookmark._id !== id))
            }
        } catch (error) {
            console.error(error);
        }
    }

    const getBookmarks = async () => {
        try {
            const response = await fetch('/api/bookmarks')
            const data = await response.json()
            setBookmarks(data.bookmarks.reverse())
            const responseTwo = await fetch('/api/bookmarks/added')
            const addedData = await responseTwo.json()
            setAddedBookmarks(addedData.reverse())
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        getBookmarks()
    }, [])

    return (
        <div className={styles.App}>
            <BookmarkList
                newBookmark={newBookmark}
                setNewBookmark={setNewBookmark}
                createBookmark={createBookmark}
                bookmarks={bookmarks}
                updateBookmark={updateBookmark}
                moveMark={moveMark}
                addedBookmarks={addedBookmarks}
                deleteBookmark={deleteBookmark}
            />
        </div>
    )
}