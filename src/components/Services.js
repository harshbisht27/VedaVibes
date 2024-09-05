import React from 'react';



import ayurvedaLogo from './assets/ayurvedaLogo.png';
import yogaLogo from './assets/yogaLogo.png';
import unaniLogo from './assets/unaniLogo.png';
import siddhaLogo from './assets/siddhaLogo.png';
import sowaRigpaLogo from './assets/sowaRigpaLogo.png';
import homeopathyLogo from './assets/homeopathyLogo.png';

const VedaServices = () => {
  const services = [
    {
      name: 'Ayurveda',
      description: `Ayurveda is the time tested traditional system of medicine of India. The term 'Ayurveda' meaning 'the knowledge of life' comprises of two Sanskrit words viz 'Ayu' meaning 'Life' and 'Veda' meaning 'Knowledge' or 'Science'.`,
      logo: ayurvedaLogo
    },
    {
      name: 'Yoga & Naturopathy',
      description: `The word 'Yoga' comes from the Sanskrit word 'Yuj' which means 'to unite or integrate'. Yoga is about the union of a person's own consciousness and the universal consciousness. Naturopathy is an effective, drugless, non-invasive therapy.`,
      logo: yogaLogo
    },
    {
      name: 'Unani',
      description: `Unani System of medicine is a comprehensive medical system, which provides preventive, promotive, curative, and rehabilitative health care. The system is holistic in nature and considers the whole personality of an individual.`,
      logo: unaniLogo
    },
    {
      name: 'Siddha',
      description: `The Siddha system is an ancient system of medicine in India. The word 'Siddha' is derived from the root word 'Citti' meaning attainment of perfection, eternal bliss, and accomplishment.`,
      logo: siddhaLogo
    },
    {
      name: 'Sowa Rigpa',
      description: `Sowa-Rigpa is the traditional medicine of many parts of the Himalayan region used mainly by the Tribal and Bhot people. Sowa-Rigpa means 'science of healing', and practitioners are known as Amchi.`,
      logo: sowaRigpaLogo
    },
    {
      name: 'Homeopathy',
      description: `Homeopathy was introduced as a scientific system of drug therapeutics by a German physician, Dr. Christian Samuel Hahnemann in 1805. It is based on the principle 'Similia Similibus Curentur'.`,
      logo: homeopathyLogo
    }
  ];

  return (
    <div className="services-container">
      <h2>Veda Services</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <img src={service.logo} alt={`${service.name} logo`} />
            <h3>{service.name}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VedaServices;
