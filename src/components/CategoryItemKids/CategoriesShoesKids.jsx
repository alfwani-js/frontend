import React from 'react'
import styled from 'styled-components'
import  {categories2 }from "../../data"
import CategoryItemShoesKids from './CategoryItemShoesKids'


const Container = styled.div`
   display:flex;
   padding:20px;
   justify-content:space-between;
   `


 const CategoriesShoesKids = () => {
    
      return <Container>
         {categories2.map(item=>(
             <CategoryItemShoesKids item={item} key={item.id}/>
         ))}
       </Container>
   
}

export default CategoriesShoesKids