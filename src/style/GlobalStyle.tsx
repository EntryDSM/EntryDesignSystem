import { Global, css } from '@emotion/react';

const style = css`
    @font-face {
        font-family: 'Pretendard';
        font-weight: 700;
        font-style: bold;
        src: local('Pretendard')
            url('https://s3.ap-northeast-2.amazonaws.com/rolls-image.entry.com/font/Pretendard-Bold.woff2')
            format('woff2');
    }

    @font-face {
        font-family: 'Pretendard';
        font-weight: 500;
        font-style: medium;
        src: local('Pretendard')
            url('https://s3.ap-northeast-2.amazonaws.com/rolls-image.entry.com/font/Pretendard-Medium.woff2')
            format('woff2');
    }

    @font-face {
        font-family: 'Pretendard';
        font-weight: 400;
        font-style: regular;
        src: local('Pretendard')
            url('https://s3.ap-northeast-2.amazonaws.com/rolls-image.entry.com/font/Pretendard-Regular.woff2')
            format('woff2');
    }
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
    textarea {
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
    }
`;

export const GlobalStyle = () => {
    return <Global styles={style} />;
};
