import styled from "styled-components";

export const StyledLi = styled.li`
    list-style: none;
    width: 1400px;

& .user {
    display: flex;
    align-items: center;
    gap: 20px;

    & img {
        width: 100px;
        height: 100px;
        object-fit: cover;
        border-radius: 50%;
    }

    & span {
        display: block;
    }

    
}
& p {
        width: 100%;
    }
`