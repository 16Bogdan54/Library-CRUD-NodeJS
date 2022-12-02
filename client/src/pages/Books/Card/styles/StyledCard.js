import styled from 'styled-components'
import {Link} from "react-router-dom";

export const StyledCard = styled.div`
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-items: stretch;
  background-color: #CAC9B9;
  border-radius: 1rem;
  box-shadow: rgba(149, 157, 165, 0.2) 0 8px 24px;
  transition: all .3s ease-in-out;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.35) 0 5px 15px;
  }
`

export const CardTop = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;

  h2 {
    color: #0A100D;
    padding: .3rem .5rem;
    margin: 0;
  }

  button {
    border: none;
    border-radius: 20%;
    background: transparent;
    font-size: 1.2rem;
    cursor: pointer;
    padding: .3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all .3s ease-in-out;
    &:hover {
      background-color: #922828;
      color: white;
    }
  }
`

export const Pic = styled.img`
  width: 100%;
  border-radius: 1rem 1rem 0 0;
`

export const Description = styled.p`
  padding: .3rem .5rem;
  margin: 0;
  color: #55584B;
  font-size: 1.1rem;
`
export const EditButton = styled(Link)`
  margin: .5rem;
  cursor: pointer;
  padding: .5rem 1rem;
  border: none;
  border-radius: .4rem;
  background-color: #B9BAA3;
  color: #4A4D42;
  font-size: 1rem;
  transition: all .3s ease-in;
  &:hover {
    border-radius: 1rem;
    font-weight: bold;
    box-shadow: rgba(149, 157, 165, 0.2) 0 8px 24px;
  }
`