import React, { useState } from 'react';
import './Videos.css';

const Videos = () => {
  const [selectedTag, setSelectedTag] = useState('all');

  const tags = [
    '全部',
    '认知症照护',
    '医养结合',
    '康复护理',
    '社区养老',
    '花园庭院',
  ];

  const videos = [
    {
      id: 1,
      title: '康乐养老中心环境介绍',
      institution: '康乐养老中心',
      price: '3500元/月起',
      tags: ['医养结合', '康复护理'],
      thumbnail: '/images/video-1.jpg',
      videoUrl: 'https://example.com/video1',
      description: '专业医养结合型养老机构实地探访',
    },
    {
      id: 2,
      title: '幸福家园特色服务展示',
      institution: '幸福家园养老院',
      price: '2800元/月起',
      tags: ['社区养老', '花园庭院'],
      thumbnail: '/images/video-2.jpg',
      videoUrl: 'https://example.com/video2',
      description: '社区型养老机构日常生活记录',
    },
    // 可以添加更多视频数据
  ];

  const filteredVideos = selectedTag === 'all'
    ? videos
    : videos.filter(video => video.tags.includes(selectedTag));

  return (
    <div className="videos-page">
      <div className="tags-filter">
        {tags.map(tag => (
          <button
            key={tag}
            className={`tag-btn ${selectedTag === tag ? 'active' : ''}`}
            onClick={() => setSelectedTag(tag)}
          >
            {tag}
          </button>
        ))}
      </div>

      <div className="videos-grid">
        {filteredVideos.map(video => (
          <div key={video.id} className="video-card">
            <div className="video-thumbnail">
              <img src={video.thumbnail} alt={video.title} />
              <div className="play-button">▶</div>
            </div>
            <div className="video-info">
              <h3>{video.title}</h3>
              <p className="institution-name">{video.institution}</p>
              <p className="price">{video.price}</p>
              <div className="video-tags">
                {video.tags.map(tag => (
                  <span key={tag} className="video-tag">{tag}</span>
                ))}
              </div>
              <p className="description">{video.description}</p>
              <div className="video-actions">
                <button className="watch-btn">观看视频</button>
                <button className="share-btn">分享</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Videos;