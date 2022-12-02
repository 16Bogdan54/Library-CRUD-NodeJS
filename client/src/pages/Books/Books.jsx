import {useState, useEffect} from "react";
import {Card} from './Card/Card'
import {StyledSection, BooksContainer} from "./styles/Books";
import axios from "axios";

const Books = () => {

    const [books, setBooks] = useState([])

    useEffect(() => {
        axios.get("http://localhost:3001/books").then(res => setBooks(res.data)).catch(err => console.log(err))
    }, []);

    return (
        <StyledSection>
            <BooksContainer>
                {books.map(book => (
                    <Card title={book.title} description={book.desc} key={book.id} id={book.id}/>
                ))}
            </BooksContainer>
        </StyledSection>
    )
}

export default Books;