import React, { useState } from 'react';
import './Institutions.css';

const Institutions = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedSubCategory, setSelectedSubCategory] = useState('all');

  const categories = [
    { id: 'area', name: '按区域', subCategories: ['桥西区', '长安区', '新华区', '裕华区'] },
    { id: 'price', name: '按价格', subCategories: ['3000元以下', '3000-5000元', '5000元以上'] },
    { id: 'type', name: '按类型', subCategories: ['医养结合', '社区养老', '专业护理'] },
  ];

  const institutions = [
    {
      id: 1,
      name: '康乐养老中心',
      area: '桥西区',
      price: '3500元/月起',
      type: '医养结合',
      services: ['失能照护', '康复护理', '营养配餐'],
      image: '/images/inst-1.jpg',
      description: '专业的医养结合型养老机构，提供全方位的养老服务',
    },
    {
      id: 2,
      name: '幸福家园养老院',
      area: '长安区',
      price: '2800元/月起',
      type: '社区养老',
      services: ['日间照料', '文娱活动', '助餐服务'],
      image: '/images/inst-2.jpg',
      description: '社区型养老机构，让老年人享受家门口的养老服务',
    },
    // 可以添加更多机构数据
  ];

  const handleCategoryChange = (categoryId) => {
    setSelectedCategory(categoryId);
    setSelectedSubCategory('all');
  };

  return (
    <div className="institutions">
      <div className="filter-section">
        <div className="categories">
          {categories.map((category) => (
            <div key={category.id} className="category-group">
              <h3>{category.name}</h3>
              <div className="subcategories">
                {category.subCategories.map((subCategory) => (
                  <button
                    key={subCategory}
                    className={`subcategory-btn ${selectedSubCategory === subCategory ? 'active' : ''}`}
                    onClick={() => setSelectedSubCategory(subCategory)}
                  >
                    {subCategory}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="institutions-grid">
        {institutions.map((institution) => (
          <div key={institution.id} className="institution-card">
            <div className="institution-image">
              <img src={institution.image} alt={institution.name} />
            </div>
            <div className="institution-details">
              <h3>{institution.name}</h3>
              <p className="location">{institution.area}</p>
              <p className="price">{institution.price}</p>
              <div className="services">
                {institution.services.map((service) => (
                  <span key={service} className="service-tag">
                    {service}
                  </span>
                ))}
              </div>
              <p className="description">{institution.description}</p>
              <div className="card-actions">
                <button className="view-details-btn">查看详情</button>
                <button className="contact-btn">在线咨询</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Institutions;