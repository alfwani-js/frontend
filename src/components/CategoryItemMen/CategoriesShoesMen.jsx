import React from 'react'
import styled from 'styled-components'
import  {categories }from "../../data"
import CategoryItemShoesMen from './CategoryItemShoesMen'


const Container = styled.div`
   display:flex;
   padding:20px;
   justify-content:space-between;
   `


 const CategoriesShoesMen = () => {
    
      return <Container>
         {categories.map(item=>(
             <CategoryItemShoesMen item={item} key={item.id}/>
         ))}
       </Container>
   
}

export default CategoriesShoesMen