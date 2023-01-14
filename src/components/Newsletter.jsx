import { Send } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import { mobile } from '../Responsive'

const Container = styled.div`
   height:60vh;
   background:url("https://d1csarkz8obe9u.cloudfront.net/posterpreviews/new-arrival-discount-offer-on-shoes-poster-ad-design-template-20e8be063593e460ec1eadf156df2a71_screen.jpg?ts=1607504280");
   display:flex;
   align-items:center;
   justify-content:center;
   flex-direction:column;
   ${mobile({justifyContent:"center"})}`

const Title = styled.h1`
   font-size:70px;
   margin-bottom:20px;
   ${mobile({fontSize:"50px",justifyContent:"center"})}`

const Desc = styled.div`
   font-size:24px;
   font-weight:300;
   margin-bottom:20px;
   ${mobile({textAlign:"center"})}`

const InputContainer = styled.div`
    width:50%;
    height:40px;
    background-color:white;
    display:flex;
    justify-content:space-between;
    border:1px solid lightgray;
    ${mobile({textAlign:"center"})}`

const Input = styled.input`
    border:none;
    flex:8px;
    padding-left:20px;
    ${mobile({justifyContent:"center"})}`
    

const Button = styled.button`
     flex:1
     border:none;
     background-color:teal;
     color:white;` 

export const Newsletter = () => {
    return (
        <Container>
          
        </Container>
            
        
    )
}

export default Newsletter