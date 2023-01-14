import styled from "styled-components"

const Container = styled.div`
   height:30px;
   background-color:rgb(250,235,215);
   color:white;
   display:flex;
   align-items:center;
   justify-content:center;
   font-size:14px;
   font-weight:bold;
   color:black;`

export const Announcement = () => {
    return (
        <Container>
            Amazing shopping experience is here !
        </Container>
    )
}

export default Announcement