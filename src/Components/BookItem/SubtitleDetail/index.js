import React from 'react';
import './subtitleDetail.css';

const SubtitleDetail = ({ title, description }) => {
  return (
    <div className="subtitle-detail">
      <h5>{title}</h5>
      <h6>{description}</h6>
    </div>
  );
};

export default SubtitleDetail;