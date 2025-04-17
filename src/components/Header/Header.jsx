import React from 'react';
import './Header.css';
import { FaSearch } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <img src="/images/logo.png" alt="养老阿达logo" className="logo-img" />
          <h1 className="site-title">养老阿达·石家庄养老服务平台</h1>
        </div>
        <div className="search-box">
          <input type="text" placeholder="请输入关键字搜索" />
          <button type="submit">
            <FaSearch />
            搜索
          </button>
        </div>
        <nav className="main-nav">
          <ul>
            <li><a href="/">首页</a></li>
            <li><a href="/institutions">机构展示</a></li>
            <li><a href="/videos">视频推荐</a></li>
            <li><a href="/about">关于我们</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;