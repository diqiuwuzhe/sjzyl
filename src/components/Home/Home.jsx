import React from 'react';
import './Home.css';
import { FaBed, FaUserNurse, FaChair, FaHome } from 'react-icons/fa';

const Home = () => {
  const serviceItems = [
    {
      id: 1,
      icon: <FaBed />,
      title: '养老机构办理指南',
      description: '提供养老机构入住流程和注意事项'
    },
    {
      id: 2,
      icon: <FaUserNurse />,
      title: '居家养老服务预约',
      description: '专业护工上门服务预约平台'
    },
    {
      id: 3,
      icon: <FaChair />,
      title: '老人在线办事',
      description: '便捷的网上办事服务通道'
    },
    {
      id: 4,
      icon: <FaHome />,
      title: '机构在线办事',
      description: '养老机构办事服务平台'
    }
  ];

  const carouselItems = [
    { id: 1, image: '/images/carousel-1.jpg', title: '优质养老环境' },
    { id: 2, image: '/images/carousel-2.jpg', title: '专业护理服务' },
    { id: 3, image: '/images/carousel-3.jpg', title: '温馨生活空间' },
  ];

  const recommendedInstitutions = [
    {
      id: 1,
      name: '康乐养老中心',
      description: '医养结合型养老机构，提供专业护理服务',
      price: '3500元/月起',
      image: '/images/inst-1.jpg',
    },
    {
      id: 2,
      name: '幸福家园养老院',
      description: '社区型养老机构，家门口的养老选择',
      price: '2800元/月起',
      image: '/images/inst-2.jpg',
    },
    {
      id: 3,
      name: '颐养天年康养中心',
      description: '高端养老机构，提供一站式养老服务',
      price: '4500元/月起',
      image: '/images/inst-3.jpg',
    },
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    // 实现搜索功能
    console.log('搜索关键词:', searchQuery);
  };

  return (
    <div className="home">
      <div className="banner">
        <div className="banner-content">
          <h1>老有所养·老有所依·老有所乐·老有所安</h1>
          <p>为您提供全方位的养老服务解决方案</p>
        </div>
      </div>

      <section className="services-section">
        <div className="services-grid">
          {serviceItems.map((item) => (
            <div key={item.id} className="service-card">
              <div className="service-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="recommended-section">
        <h2>精选机构推荐</h2>
        <div className="recommended-grid">
          {recommendedInstitutions.map((institution) => (
            <div key={institution.id} className="institution-card">
              <img src={institution.image} alt={institution.name} />
              <div className="institution-info">
                <h3>{institution.name}</h3>
                <p>{institution.description}</p>
                <p className="price">{institution.price}</p>
                <button className="view-details">查看详情</button>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default Home;