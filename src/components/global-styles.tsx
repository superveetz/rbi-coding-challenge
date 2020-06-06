import React from 'react';
import { Global, css } from '@emotion/core';

interface GlobalStylesProps {}

const GlobalStyles: React.FC<GlobalStylesProps> = (props) => {
  return (
    <div className="GlobalStyles">
      <Global
        styles={css`
          @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
          @import url('https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css');
          @import url('https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css');
          @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@900&display=swap');

          html {
            margin: 0;
            padding: 0;
          }

          body {
            margin: 0;
            padding: 0;
            overflow-x: hidden;
            overflow-y: scroll;
            font-family: -apple-system, BlinkMacSystemFont, 'Roboto', 'Oxygen',
              'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
              sans-serif;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            background-color: ghostwhite;
            min-height: 100vh;
          }

          * {
            outline: none;
            box-sizing: border-box;
          }

          button:focus {
            outline: none;
          }

          .cursor-pointer {
            cursor: pointer;
          }
          .text-unselectable {
            user-select: none;
          }

          .form-control-error-spacing {
            & p {
              position: absolute !important;
              top: 100%;
            }
          }

          .section-wrapper {
            padding: 40px;
            margin: 20px 0;
            border-radius: 16px;
            background-color: white;
          }
        `}
      />
    </div>
  );
};

export default GlobalStyles;
