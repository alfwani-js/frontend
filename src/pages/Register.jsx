import React from 'react'

import styled from 'styled-components'


const Container = styled.div`
   width:100vw;
   height:100vh;
   background:url("https://images.pexels.com/photos/949587/pexels-photo-949587.jpeg?cs=srgb&dl=pexels-rovenimagescom-949587.jpg&fm=jpg") center;
   display:flex;
   align-items:center;
   justify-content:center;
   background-size:cover;
   `

const Wrapper = styled.div`
   width:40%;
   padding:20px;
   background-color:white;`

   const Title = styled.h1`
   font-size:24px;
   font-weight:300`

   const Form = styled.form`
   display:flex;
   flex-wrap:wrap;
   `

const Input = styled.input`
   flex:1;
   min-width:40%;
   margin:20px 10px 0px 0px;
   padding:10px;`

const Agreement = styled.span`
   font-size:12px;
   margin:20px 0px;`

const Button = styled.button`
   width:40%;
   border:none;
   padding:15px 20px;
   background-color:teal;
   font-color:white;`


export const Register = () => {
    return (
        <Container>
            <Wrapper>

                <Title>Create Account</Title>

                <Form>

                    <Input placeholder="name"/>
                    <Input placeholder="last name"/>
                    <Input placeholder="Username"/>
                    <Input placeholder="email"/>
                    <Input placeholder="password"/>
                    <Input placeholder="confirm password"/>

                    <Agreement>
                        By creating an account,I consent to the processing of my personal data in accordance 
                        with the <b>Privacy Policy</b>

                        <Button>Create</Button>

                    </Agreement>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Register