import React from 'react'
import styled from 'styled-components'

const container = styled.div`
flex: 1;
margin: 5px;
min-width: 280px;
height: 350px;
display: flex;
align-items: center;
justify-content: center;
background-color: #f5fbfd;
position: relative;
`;

const Navbar = () => {
  return (
    <container>Navbar would be here</container>
  )
}

export default Navbar