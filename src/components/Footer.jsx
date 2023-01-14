import { Facebook, Instagram, MailOutlined, Phone, Room, Twitter, WhatsApp } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import { mobile } from '../Responsive'

const Container = styled.div`
   display:flex;
   background-color:rgb(107,142,35);
   ${mobile({flexDirection:"column"})}`

const Left = styled.div`
   flex:1;
   display:flex;
   flex-direction:column;
   padding:20px;`

const Logo = styled.h1``

const Desc = styled.p`
   margin:20px 0px;`

const SocialContainer = styled.div`
   display:flex;`

const SocialIcon = styled.div`
   width:40px;
   height:40px;
   border-radius:50%;
   color:white;
   background-color:#${props=>props.color};
   display:flex;
   align-items:center;
   justify-content:center;
   margin-right:20px;
   `


const Center = styled.div`
   flex:1;
   padding:20px
   ${mobile({display:"none"})};
   `

const Title = styled.h3`
   margin-bottom:30px;`

const List = styled.ul`
   margin:0;
   padding:0;
   list-style:none;
   display:flex;
   flex-wrap:wrap;`

const ListItem = styled.li`
   width:50%;`

const Right = styled.div`
   flex:1;
   padding:20px;`

const ContactItem = styled.div`
   margin-bottom:20px;
   display:flex;
   align-items:center;`

const Payment = styled.img`
   width:50%;`

const Footer = () => {
    return (
        <Container>

            <Left>
                <Logo>Just Airforce</Logo>
                <Desc>
                    Taking your business online is one of the best productive choices to make
                </Desc>

                <SocialContainer>

                    <SocialIcon color="3B5999">
                       <Facebook/>
                    </SocialIcon>

                    <SocialIcon color="E4405F">
                       <Twitter/>
                    </SocialIcon>

                    <SocialIcon color="55ACEE">
                       <Instagram/>
                    </SocialIcon>

                    <SocialIcon color="E60023">
                       <WhatsApp/>
                    </SocialIcon>

                </SocialContainer>
            </Left>

            <Center>

               <Title>Useful Links</Title>
                
                <List>
                   <ListItem>Home</ListItem>
                   <ListItem>Cart</ListItem>
                   <ListItem>Major products</ListItem>
                   <ListItem>My Account</ListItem>
                   <ListItem>Order Tracking</ListItem>
                   <ListItem>Terms</ListItem>
                </List>
            </Center>

            <Right>

               <Title>Contact</Title>
               <ContactItem><Room style={{marginRight:"10px"}}/>
                  Biashara Street,Nairobi Kenya
               </ContactItem>

               <ContactItem><Phone style={{marginRight:"10px"}}/>
                  +254 759279379
               </ContactItem>

               <ContactItem><MailOutlined style={{marginRight:"10px"}}/>
                  vincentmumo@gmail.com
               </ContactItem>

               <Payment src="data:image/png;base64,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"/>
            </Right>
        </Container>
    )
}

export default Footer
