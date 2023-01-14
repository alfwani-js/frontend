import { Add, Remove } from '@material-ui/icons'
import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import StripeCheckout from "react-stripe-checkout"


const Container = styled.div``

const Wrapper = styled.div`
  padding:20px;`

const Title = styled.h1`
  font-weight:300;
  text-align:center;`

const Top = styled.div`
  display:flex;
  align-items:center;
  justify-content:space-between;
  padding:20;`

const TopButton = styled.button`
  padding:10px;
  font-weight:600;
  cursor:pointer;
  border:${props=>props.type==="filled" && "none"};
  background-color:${props=>props.type==="filled" ? "black" : "transparent"};
  color:${props=>props.type==="filled" && "white"}`;

const TopTexts = styled.div``
const TopText = styled.span`
  text-decoration:underline;
  margin:0 10px;`
  


const Bottom = styled.div`
  display:flex;
  justify-content:space-between;
  `

const Info = styled.div`
  flex:3;`

const Summary = styled.div`
  flex:1;
  border:0.5px solid lightgray;
  border-radius:10px;
  padding:20px;
  height:50vh;`

const Product = styled.div`
  display:flex;
  justify-content:space-between;`

const ProductDetail = styled.div`
  flex:2;
  display:flex;`

const PriceDetail = styled.div`
  flex:1;
 `

const Image = styled.img`
  width:200px;`

const Details = styled.div`
  padding:20px;
  display:flex;
  flex-direction:column;
  justify-content:space-araund;`

const ProductName = styled.div``

const ProductID = styled.div``

const ProductAmountContainer = styled.div`
  display:flex;
  align-items:center;
  margin-bottom:20px;`

const ProductAmount = styled.div`
  font-size:24px;
  margin:5px;`

const ProductPrice = styled.div`
  font-size:30px;
  font-weight:600`

const Hr = styled.hr``

const SummaryTitle = styled.h1``

const SummaryItem = styled.div`
  margin:30px 0px;
  display:flex;
  justify-content:space-between;`

const SummaryItemText = styled.span``

const SummaryItemPrice = styled.span``

const Button = styled.button`
  width:100%;
  padding:10px;
  background-color:black;`

export const Cart = () => {

  const cart = useSelector(state=>state.cart)
    return (
        <Container>
            <Navbar/>
            <Announcement/>
            <Wrapper>
                <Title>Your are Back</Title>
                <Top>
                    <TopButton >Continue Shopping</TopButton>
                    <TopTexts>
                        <TopText>Shopping Bag (2)</TopText>
                        <TopText>WishList</TopText>
                    </TopTexts>
                    <TopButton type="filled">Check out Now</TopButton>
                </Top>
                <Bottom>
                    <Info>
                        {cart.products.map(product => (
                          <Product>
                          <ProductDetail>
                              <Image src={product.img}/>
                              <Details>
                                  <ProductName><b>Product:</b>{product.title}</ProductName>
                                  <ProductID><b>ID:</b>{product._id}</ProductID>
                              </Details>
                          </ProductDetail>
                          <PriceDetail>
                              <ProductAmountContainer>
                                   <Add/>
                                   <ProductAmount>{product.quantity}</ProductAmount>
                                   <Remove/>
                              </ProductAmountContainer>
                              <ProductPrice>{product.price*product.quantity}</ProductPrice>
                          </PriceDetail>
                        </Product>))}
                    </Info>
                    <Summary>
                        <SummaryTitle>Order Summary</SummaryTitle>
                        <SummaryItem>
                           <SummaryItemText>Subtotal</SummaryItemText>
                           <SummaryItemPrice>{cart.total}</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                          <SummaryItemText>Estimatted Delivery cost</SummaryItemText>
                          <SummaryItemPrice>Ksh 50</SummaryItemPrice>
                      </SummaryItem>
                      <Button>Checkout now</Button>
                    </Summary>
                </Bottom>
            </Wrapper>
            <Footer/>
        </Container>
    )
}

export default Cart