import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'


const Container = styled.div`
        flex:1;
        margin:3px;
        height:300px;
        width:100px;
        position:relative;
        background:DodgerBlue;
        border-radius:10px`
        
     const Image = styled.img`
        width:98%;
        height:100%;
        object-fit:cover;
       `

      const Info = styled.div`
        position:absolute;
        top:0;
        left:0;
        width:100%;
        height:100%;
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:center;
        `

     const Title = styled.h1`
       clor:white;
       margin-bottom:20px;
       font-weight:600;`

     const Button = styled.button`
       border:none;
       padding:10px;
       background-color:white;
       color:gray;
       cursor:pointer`

 const CategoryItemShoesKids = ({item}) => {
    return (
        <Container>
          <Link to={`/products/${item.cat}`}>
            <Image src={item.img}/>
            <Info>
                <Title>{item.title}</Title>
                <Button>SHOP NOW</Button>
            </Info>
            </Link>
        </Container>
    )
}

export  default CategoryItemShoesKids;


