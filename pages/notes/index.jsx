import React from 'react'
import Link from 'next/link'

const notesPages = [1, 2, 3, 4]

const getNotesPages = () => notesPages.map(item => <Link href='/notes/[id]' as={`/notes/${item}`}>
      <a>
        Notes page {item}
      </a>
    </Link>
)

const NotesPage = () => (
    <div>
      <h1>Notes Page</h1>

      {getNotesPages().map(item => item)}
      {/* <Link href="/notes/[id]" as={`/notes/1`}>Note 1</Link> */}
    </div>
)

export default NotesPage