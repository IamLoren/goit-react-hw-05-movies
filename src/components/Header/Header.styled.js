import styled from "styled-components";

const StyledHeader = styled.header`
width: 100%;
border-botoom: 1px solid gray;
box-shadow: 0 1px 10px 0 gray;

& nav {
    display: flex;
gap: 50px;
padding: 20px 50px;
}

& a {
    text-decoration: none;
    font-size: 20px;
    font-weight: 700;
    color: gray;
} 

& .active {
        color: red;
    }
`
export default StyledHeader;