import styled from "styled-components";

const StyledLi = styled.li`
    padding: 20px;
    background-color: white;
    border-radius: 10px;
    box-shadow: 2px 2px 4px 1px gray;
    transition: all 0.5s;

    & img {
        width: 100%;
        border-radius: 5px;
        margin-bottom: 10px;
    }

    &:hover {
        transform: scale(1.03);
        box-shadow: 2px 2px 10px 1px gray;
    }

    & .title {
        margin: 0;
        font-size: 22px;
        font-weight: 700;
    }
`
export default StyledLi;