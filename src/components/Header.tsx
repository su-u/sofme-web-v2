import React from 'react';
import styled from "styled-components";
import { Link } from 'gatsby';

export const Header = () => {
  return (
    <HeaderContainer role="banner">
      <div className="container">
        <div>
          {/*<a href="/index.html"><img className="header-icon" src="/img/sofme_icon.svg"/></a>*/}
          <Link to="/" className="logo">ソフトメディア研究会</Link>
        </div>
        {/*<a href="#" className="probootstrap-burger-menu visible-xs"> <i></i> </a>*/}
        {/*<div className="mobile-menu-overlay"></div>*/}
        <nav role="navigation" className="main-nav">
          <ul>
            <li>
              <Link to="/" title="ホーム">ホーム</Link>
            </li>
            <li>
              <Link to="/introduction/" title="新入生ページ">新入生ページ</Link>
            </li>
            <li>
              <Link to="/program/" title="プログラム班のページ">プログラム班</Link>
            </li>
            <li>
              <Link to="/multi/" title="マルチメディア班のページ">マルチ班</Link>
            </li>
            <li>
              <Link to="/dtm/" title="DTM班のページ">DTM班</Link>
            </li>
          </ul>
          {/*<div className="extra-text visible-xs">*/}
          {/*  <a href="#" className="probootstrap-burger-menu"> <i>Menu</i> </a>*/}
          {/*</div>*/}
        </nav>
      </div>
    </HeaderContainer>
  )
};

const HeaderContainer = styled.header`
  background: #0000006b;
  width: 100%;
  
  .container {
    width: 1200px;
    margin: 0 auto;
    padding: 5px 0;
    
    .logo {
      color: #fff;
      padding-left: 0;
      font-size: 30px;
      font-weight: 100;
      text-decoration: none;
    }
  }
  
  .main-nav {
    ul {
      display: flex;
      justify-content: flex-start;
      margin: 5px 0;
      
      li {
        margin: 0;
        padding: 0 10px;
        list-style: none;
        font-size: 18px;
        
        a {
          color: white;
          text-decoration: none;
        }
      }
    }
  }
`;