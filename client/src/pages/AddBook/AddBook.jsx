import {AddForm} from './AddForm/AddForm'
import {StyledContainer} from './style/AddBook'

const AddBook = () => {
    return (
        <StyledContainer>
            <h2>Add New Book to your library</h2>
            <AddForm/>
        </StyledContainer>
    )
}

export default AddBook;