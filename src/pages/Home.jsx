import React from 'react'
import styled from 'styled-components'
import { Announcement } from '../components/Announcement'
import Card from '../components/card/Card'
import CategoriesShoesKids from '../components/CategoryItemKids/CategoriesShoesKids'
import CategoriesShoesMen from '../components/CategoryItemMen/CategoriesShoesMen'
import CategoriesShoesWomen from '../components/CategoryItemWomen/CategoriesShoesWomen'
import Each from '../components/Each/Each'
import Footer from '../components/Footer'
import  Navbar  from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import Products from '../components/Products'
import Slider from '../components/slider'


const CategoryStyle = styled.div`
   background-color:rgb(245,245,220);
   `

const EachWrapper = styled.div`
  background-color:rgb(255,228,225);`





export const Home = () => {
    return (
        <div>
            <Announcement/>
            <Navbar/> 
            <Slider/> 
            <CategoryStyle>
            <CategoriesShoesMen/>
            <CategoriesShoesWomen/>
           <CategoriesShoesKids/>
           </CategoryStyle>
             <EachWrapper>
            <Each/>
            </EachWrapper>
            <Footer/>    
        </div>   
    )
}

export default Home