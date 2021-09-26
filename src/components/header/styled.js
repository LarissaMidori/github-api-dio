import styled from 'styled-components';

export const Wrapper = styled.div`
    display:flex;
    width: 100%;
    justify-content: space-between;
    margin: 16px;

    input {
        border: 1px solid #;
        border-radius: 8px;
        width: 100%;
        height: 44px;
        padding: 8px;
        background-color: #fff;
    }

    button {
        background-color: blue;
        padding: 8px 36px;
        margin: 0 26px;
        border-radius: 8px;
        color: #fff;

        &:hover {
            box-shadow: 3px 2px 10px rgba(0, 0, 0, 0.8);
        }

        span {
            font-weight: bold;
            font-size: 16px;
    
        }
    }
`;

