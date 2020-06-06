import React from 'react';
import styled from '@emotion/styled';

// src
import * as styleVars from 'const/styles';

const FooterWrapper = styled.footer`
  background-color: ${styleVars.black};
  height: 240px;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  left: 0;
  bottom: 0;
  width: 100%;

  .footer-left {
    h4 {
      color: white;
      font-size: 22px;
      font-family: 'Roboto', sans-serif;
      text-transform: uppercase;
      margin-bottom: 0;
    }
    span {
      color: white;
      font-weight: bold;
      font-size: 24px;
      font-family: 'Monsterrat', sans-serif;
      text-transform: uppercase;
    }
  }

  .footer-right {
    text-align: right;
    .cart-summary {
      .cart-items {
        color: white;
        font-family: 'Roboto', sans-serif;
        text-transform: uppercase;
        font-size: 18px;
      }
      .cart-total {
        margin-left: 40px;
        color: white;
        font-family: 'Monsterrat', sans-serif;
        text-transform: uppercase;
        font-weight: 900;
        font-size: 22px;
      }
    }

    .checkout-btn {
      margin-top: 10px;
      padding: 15px 45px;
      border-radius: 35px;
      background-color: darkorange;
      color: white;
      font-size: 18px;
      text-transform: uppercase;
      font-family: 'Monsterrat', sans-serif;
      font-weight: 900;
    }
  }
`;

interface FooterProps {}

const Footer: React.FC<FooterProps> = (props) => {
  return (
    <FooterWrapper className="Footer">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-6 align-items-center">
            <div className="footer-left">
              <h4>See Tips &amp; Tricks</h4>
              <span>Need Help!</span>
            </div>
          </div>
          <div className="col-6">
            <div className="footer-right">
              <div className="cart-summary">
                <span className="cart-items">Total (0 item):</span>

                <span className="cart-total">$0.00</span>
              </div>
              <button className="btn checkout-btn">
                Checkout <i className="fas fa-fw fa-chevron-right"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </FooterWrapper>
  );
};

export default Footer;
