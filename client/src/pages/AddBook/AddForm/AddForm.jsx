import axios from 'axios';
import {useState} from 'react';
import {useNavigate} from "react-router-dom";
import {StyledButton, StyledForm, StyledLabel} from "./style/Form";

export const AddForm = () => {
    const [book, setBook] = useState({
        title: "", desc: ""
    })

    const navigate = useNavigate()

    const handleChange = (e) => {
        setBook((prev) => ({...prev, [e.target.name]: e.target.value}))
    }

    const handleClick = (e) => {
        e.preventDefault();
        axios.post("http://localhost:3001/addbook", book).then(r => console.log(r)).catch(err => alert(err));
        navigate("/")
    }

    return (
        <StyledForm>
            <StyledLabel>Name of a book<input type="text" name="title" onChange={handleChange}/></StyledLabel>
            <StyledLabel>Description of a book<textarea rows={3} name="desc" onChange={handleChange}/></StyledLabel>
            <StyledButton onClick={handleClick}>Add New</StyledButton>
        </StyledForm>
    )
}