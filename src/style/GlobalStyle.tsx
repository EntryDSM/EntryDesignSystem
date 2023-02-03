import { Global, css } from '@emotion/react';

const style = css`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
        border: 0;
        outline: unset;
        list-style: none;
        font-style: normal;
        font-family: 'pretendard', sans-serif;
    }
    label {
        cursor: pointer;
        background-color: transparent;
    }
    a {
        text-decoration: none;
        color: inherit;
    }
`;

export const GlobalStyle = () => {
    return <Global styles={style} />;
};
