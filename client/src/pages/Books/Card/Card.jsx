import {StyledCard, Pic, Description, CardTop, EditButton} from "./styles/StyledCard";
import bookImage from './assets/6915569.jpg'
import {AiOutlineDelete} from "react-icons/ai";
import axios from "axios";

export const Card = ({title, description, id}) => {

    const handleDelete = (id) => {
        axios.delete(`http://localhost:3001/books/${id}`).then(r => console.log(r)).catch(err => console.log(err))
        window.location.reload()
    }

    return (
        <StyledCard>
            <Pic src={bookImage} alt="book image"/>
            <CardTop>
                <h2>{title}</h2>
                <button onClick={() => handleDelete(id)}>{<AiOutlineDelete/>}</button>
            </CardTop>
            <Description>{description}</Description>
            <EditButton to={`/editbook/${id}`}>Edit Card</EditButton>
        </StyledCard>
    )
}