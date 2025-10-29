import React from 'react'
import './title.css'
const Titles = ({ title, description, className = "" }) => {
  return (
    <div className={`titles-container ${className}`}>
      {title && <h2 className="titles-title">{title}</h2>}
      {description && <p className="titles-description">{description}</p>}
    </div>
  );
}

export default Titles