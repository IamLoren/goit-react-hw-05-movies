import styled from "styled-components";

export const StyledSection = styled.section`

& form {
    display: block;
    width: 500px;
    height: 50px;
    margin: 0 auto;

    & input {
        width: 400px;
        height: 40px;
        padding: 10px 20px;
        margin-right: 10px;
        outline: none;

        &:focus {
            border:  1px solid red;
        }
    }
    & button {
        width: 90px;
        height: 40px;
        background-color: transparent;
        border: 1px solid gray;
        font-weight: 700;
        cursor: pointer;
        transition: all 0.3s;

        &:hover {
            border-color: red;
            color: red;
        }
    }
}
`
