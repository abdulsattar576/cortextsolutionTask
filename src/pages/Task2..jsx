 import React from 'react';
import ServiceCard from '../components/ServiceCard'; // adjust the path if needed

const ServiceList = () => {
  const serviceInstances = [
    { title: "Web Design", desc: "We build modern websites" },
    { title: "App Development", desc: "We create mobile apps" },
    { title: "SEO Optimization", desc: "Improve search engine ranking" },
    { title: "UI/UX Design", desc: "Design user-friendly interfaces" }
  ];

  return (
    <div className="service-list">
      {serviceInstances.map((instance, index) => (
        <ServiceCard 
          key={index} 
          title={instance.title} 
          desc={instance.desc} 
        />
      ))}
    </div>
  );
}

export default ServiceList;
