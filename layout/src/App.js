import { useState, useEffect } from 'react'
import Book from './components/Book'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const url = 'http://127.0.0.1:8000/api/'

  const [books, setBooks] = useState([])

  async function fetchData(){
    const res = await fetch(url)
    const books = await res.json()
    setBooks(books)
    console.log(books)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className="container">
      <h2 className="text-center">Hello Library</h2>
      <div className='row'>
        {
          books.map((book) => {
            return <Book key={book.id} {...book} />
          })
        }
      </div>
    </div>
  );
}

export default App;
