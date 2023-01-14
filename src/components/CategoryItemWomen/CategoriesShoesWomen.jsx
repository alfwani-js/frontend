import React from 'react'
import styled from 'styled-components'
import  {categories1 }from "../../data"
import CategoryItemShoesWomen from './CategoryItemShoesWomen'


const Container = styled.div`
   display:flex;
   padding:20px;
   justify-content:space-between;
   `


 const CategoriesShoesWomen = () => {
    
      return <Container>
         {categories1.map(item=>(
             <CategoryItemShoesWomen item={item} key={item.id}/>
         ))}
       </Container>
   
}

export default CategoriesShoesWomen