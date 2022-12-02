import axios from 'axios';
import {useState, useEffect} from 'react';
import {useLocation, useNavigate} from "react-router-dom";
import {StyledButton, StyledForm, StyledLabel} from "./style/Form";

export const EditForm = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const id = location.pathname.split("/").pop();

    const [book, setBook] = useState({
        title: "", desc: ""
    })

    useEffect(() => {
        axios.get(`http://localhost:3001/editbook/${id}`)
            .then(res => setBook(res.data.shift()))
            .catch(err => console.log(err))

        console.log("data", book)
    }, []);


    const handleChange = (e) => {

        console.log(book)

        setBook((prev) => {
            return ({...prev, [e.target.name]: e.target.value});
        })
    }

    const handleClick = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:3001/editbook/${id}`, book).then(r => console.log(r)).catch(err => alert(err));
        navigate("/")
    }

    return (
        <StyledForm>
            <StyledLabel>Name of a book<input type="text" name="title" onChange={handleChange} value={book.title}/></StyledLabel>
            <StyledLabel>Description of a book<textarea rows={3} name="desc" onChange={handleChange} value={book.desc}/></StyledLabel>
            <StyledButton onClick={handleClick}>Edit</StyledButton>
        </StyledForm>
    )
}