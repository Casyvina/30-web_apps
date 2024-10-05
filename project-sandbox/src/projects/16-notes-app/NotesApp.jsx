import React, { useState } from 'react'
import { NewNote } from './NewNote'
import Button from '../components/Button'
import { v4 as uuidv4 } from "uuid"

const NotesApp = () => {

    const [notes, setNotes] = useState([])

    const addNewNote = (newNote) => {
        const newNotes = [...notes, newNote]
        newNotes.filter((note) => !note.id && (note.id = uuidv4()))
        setNotes(newNotes)
    }

    const deleteNote = (id) => {
        setNotes(notes.filter((note) => note.id !== id))
    }

    const cards = [
        "card-info",
        "card-warning",
        "card-danger",
        "card-success",
        "card-primary",
        "card-secondary",
    ]

    const randomizeBg = () => {
        return cards[Math.floor(Math.random() * cards.length)]
    }


    return (
        <div className='container'>
            <Button btnClass={"btn-info"} text='+ New note' onClick={addNewNote} />
            <div className="container container-sm d-flex" style={{ gap: 25, flexWrap: 'wrap' }}>
                {notes.map((note) => (
                    <NewNote note={note} key={note.id} onClick={deleteNote} cardBg={randomizeBg} />
                ))}
            </div>
        </div>
    )
}

export default NotesApp