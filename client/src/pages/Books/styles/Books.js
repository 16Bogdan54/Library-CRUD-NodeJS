import styled from "styled-components";


export const StyledSection = styled.section`
  padding: 1.5rem;
`

export const BooksContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 320px));
  justify-content: space-evenly;
  justify-items: center;
  align-content: space-evenly;
  align-items: center;
  gap: 2rem;
`