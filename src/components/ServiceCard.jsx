 import React from 'react';

const ServiceCard = ({ title, desc }) => {
  return (
    <div className='service-card'>
        <h2>{title}</h2>
        <p>{desc}</p>
    </div>
  )
}

export default ServiceCard;
