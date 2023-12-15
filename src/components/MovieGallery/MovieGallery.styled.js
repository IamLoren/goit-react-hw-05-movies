import styled from "styled-components";

const StyledSection = styled.section`

`

const StyledTitle = styled.h1`
    text-align: center;
    color: red;
`

const StyledUl = styled.ul`
display: grid;
max-width: calc(100vw - 48px);
grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
grid-gap: 16px;
list-style: none;
padding: 50px 15px;
`

export { StyledTitle, StyledUl, StyledSection };