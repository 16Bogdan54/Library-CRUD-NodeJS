import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #CAC9B9;
  border-radius: 1rem;
  box-shadow: rgba(149, 157, 165, 0.2) 0 8px 24px;
  padding: 2rem;
`

export const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  max-height: 50vh;
  max-width: 20em;
  margin: .4rem 0;
  font-size: 1.2rem;
  line-height: 1.2;
  input {
    padding: 1rem;
    width: 100%;
    border-radius: 10px;
    border: none;
    margin: .4rem;
    max-width: 20em;
    &:focus {
      outline: 3px solid #B9BAA3;
    }
    &:hover {
      outline: 3px solid #B9BAA3;
    }
  }
  textarea {
    padding: 1rem;
    width: 100%;
    border-radius: 10px;
    border: none;
    margin: .4rem;
    max-width: 20em;
    &:focus {
      outline: 3px solid #B9BAA3;
    }
    &:hover {
      outline: 3px solid #B9BAA3;
    }
  }
`
export const StyledButton = styled.button`
  margin: .4rem 0;
  padding: .4rem 1rem;
  border-radius: 10px;
  border: none;
  font-size: 1.1rem;
  cursor: pointer;
  box-shadow: rgba(100, 100, 111, 0.2) 0 7px 29px 0;
  transition: all .3s ease;
  &:hover {
    transform: translateY(-4px);
    box-shadow: rgba(50, 50, 93, 0.25) 0 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
  }
`