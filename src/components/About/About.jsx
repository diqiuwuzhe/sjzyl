import React from 'react';
import './About.css';

const About = () => {
  const achievements = [
    { number: '200+', description: '已服务家庭' },
    { number: '50+', description: '合作机构' },
    { number: '98%', description: '客户满意度' },
    { number: '5年+', description: '行业经验' },
  ];

  return (
    <div className="about-page">
      <section className="about-header">
        <h1>关于我们</h1>
        <p className="subtitle">专业的养老机构推荐平台，您的养老顾问专家</p>
      </section>

      <section className="mission-section">
        <h2>服务理念</h2>
        <div className="mission-content">
          <p>我们致力于为石家庄及周边地区的老年人及其家属提供专业、贴心的养老机构推荐服务。通过深入了解每个家庭的具体需求，结合我们对各养老机构的实地考察和专业评估，为老年人匹配最适合的养老环境。</p>
        </div>
      </section>

      <section className="achievements-section">
        <div className="achievements-grid">
          {achievements.map((item, index) => (
            <div key={index} className="achievement-item">
              <h3>{item.number}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="team-section">
        <h2>团队介绍</h2>
        <div className="team-content">
          <div className="team-image">
            <img src="/images/team.jpg" alt="团队照片" />
          </div>
          <div className="team-description">
            <p>我们的团队由资深养老服务专家、护理顾问和客户服务专员组成，平均从业经验超过5年。团队成员定期参与专业培训，及时了解行业动态和政策变化，确保为客户提供最专业、最新的养老咨询服务。</p>
          </div>
        </div>
      </section>

      <section className="cooperation-section">
        <h2>机构合作</h2>
        <div className="cooperation-content">
          <div className="cooperation-info">
            <h3>期待您的加入</h3>
            <p>如果您是优质养老机构的运营者，欢迎与我们建立长期合作关系。我们将为合作机构提供：</p>
            <ul>
              <li>专业的品牌展示和推广</li>
              <li>优质客户资源对接</li>
              <li>行业交流和资源共享</li>
              <li>运营管理经验分享</li>
            </ul>
          </div>
          <div className="contact-box">
            <h3>合作联系方式</h3>
            <p>商务合作：business@example.com</p>
            <p>合作热线：0311-88889999</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;