/* eslint-disable no-unused-vars */

import React from 'react';
import EventCard from './EventCard';
import Layout from '../../components/Layout';

const events = [
   
{
    
  id: 1,
  title: 'MatLink',
  description: 'Solving intricate electrical engineering challenges requires the application of mathematical and analytical tools. This skill set is put to the test in MatLink, an event that explores the captivating realm of MATLAB.',
  image: 'https://media.gettyimages.com/id/864312572/photo/friends-celebrating-new-year-on-the-rooftop.jpg?s=612x612&w=0&k=20&c=yf2Hvb8MtJnQiOrVm9z68X_6l7yK8JG0IxQoQNGRb-s=', 
},
{
     
  id: 2,
  title: ' ProGem',
  description: 'Understanding and controlling industrial equipment is crucial. ProGem is an event focused on Programmable Logic Controllers (PLC), where participants delve into the workings of industrial automation.',
  image: 'https://media.gettyimages.com/id/864312572/photo/friends-celebrating-new-year-on-the-rooftop.jpg?s=612x612&w=0&k=20&c=yf2Hvb8MtJnQiOrVm9z68X_6l7yK8JG0IxQoQNGRb-s=', 
},
{
     
  id: 3,
  title: 'Navriti',
  description: 'The art of paper presentation demands study, implementation, and the effective communication of ideas. In Navriti, students will present their ideas in a scientific and research-oriented manner, honing their presentation skills.',
  image: 'https://media.gettyimages.com/id/864312572/photo/friends-celebrating-new-year-on-the-rooftop.jpg?s=612x612&w=0&k=20&c=yf2Hvb8MtJnQiOrVm9z68X_6l7yK8JG0IxQoQNGRb-s=',
},
{
     
  id: 4,
  title: 'I-Matter',
  description:  ' I-Matter offers students a unique opportunity for an industrial visit, providing firsthand exposure to real-world technology operations. This event bridges the gap between theory and practice.',
  image: 'https://media.gettyimages.com/id/864312572/photo/friends-celebrating-new-year-on-the-rooftop.jpg?s=612x612&w=0&k=20&c=yf2Hvb8MtJnQiOrVm9z68X_6l7yK8JG0IxQoQNGRb-s=', 
},
{
     
  id: 5,
  title: 'Adhyayan',
  description: 'Adhyayan involves a case study where participants make key decisions related to an organization. This event provides valuable white-collar experience, simulating real-world corporate decision-making.',
  image: 'https://media.gettyimages.com/id/864312572/photo/friends-celebrating-new-year-on-the-rooftop.jpg?s=612x612&w=0&k=20&c=yf2Hvb8MtJnQiOrVm9z68X_6l7yK8JG0IxQoQNGRb-s=', 
},
{
     
  id: 6,
  title: 'Electro-Spection',
  description: 'Electrical circuits are the foundation of power generation. In Electro-Spection, participants design and construct electrical and electronic circuits swiftly and efficiently on a breadboard.',
  image: 'https://media.gettyimages.com/id/864312572/photo/friends-celebrating-new-year-on-the-rooftop.jpg?s=612x612&w=0&k=20&c=yf2Hvb8MtJnQiOrVm9z68X_6l7yK8JG0IxQoQNGRb-s=', 
},
{
     
  id: 7,
  title: 'Pair-in-Thesis',
  description: 'Codes are the building blocks of technological innovation. Pair-in-Thesis is an event centered around the exciting world of competitive programming, where participants showcase their coding prowess.',
  image: 'https://media.gettyimages.com/id/864312572/photo/friends-celebrating-new-year-on-the-rooftop.jpg?s=612x612&w=0&k=20&c=yf2Hvb8MtJnQiOrVm9z68X_6l7yK8JG0IxQoQNGRb-s=', 
},
{
     
  id: 8,
  title: 'Electro-Hack',
  description: 'Electro-Hack provides students with a platform to solve practical problems faced in daily life. This event encourages a culture of product innovation and problem-solving.',
  image: 'https://media.gettyimages.com/id/864312572/photo/friends-celebrating-new-year-on-the-rooftop.jpg?s=612x612&w=0&k=20&c=yf2Hvb8MtJnQiOrVm9z68X_6l7yK8JG0IxQoQNGRb-s=', 
},
{
     
  id: 9,
  title: 'Analytica',
  description: 'Analytica is designed to evaluate participants analytical and problem-solving skills while introducing them to the trending fields of data analytics and data science.',
  image: 'https://media.gettyimages.com/id/864312572/photo/friends-celebrating-new-year-on-the-rooftop.jpg?s=612x612&w=0&k=20&c=yf2Hvb8MtJnQiOrVm9z68X_6l7yK8JG0IxQoQNGRb-s=', 
},
{
     
  id: 10,
  title: 'Abhyas',
  description: 'Placements are of utmost importance. Abhyas tests participants overall communication, technical, and aptitude skills, offering a realistic experience of campus placement processes.',
  image: 'https://media.gettyimages.com/id/864312572/photo/friends-celebrating-new-year-on-the-rooftop.jpg?s=612x612&w=0&k=20&c=yf2Hvb8MtJnQiOrVm9z68X_6l7yK8JG0IxQoQNGRb-s=', 
},
{
     
  id: 11,
  title: 'Qrious',
  description: 'Qrious is a brain-teasing, quiz-based event that revolves around the dynamic world of electrical engineering and related sciences, stimulating participants intellectual curiosity.',
  image: 'https://media.gettyimages.com/id/864312572/photo/friends-celebrating-new-year-on-the-rooftop.jpg?s=612x612&w=0&k=20&c=yf2Hvb8MtJnQiOrVm9z68X_6l7yK8JG0IxQoQNGRb-s=', 
},

  
];


const Event = () => {
    return (
      <>
        <Layout>
        {/* <div className="container mt-16 mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-center">Events</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3   ">
            {events.map(event => (
                <EventCard
                    key={event.id}
                    title={event.title}
                    description={event.description}
                    image={event.image}
                />
            ))}
        </div>
    </div> */}
      <div className="container pt-28 mx-auto px-4 py-8 bg-slate-100">
          <h1 className="text-3xl font-bold mb-12 text-center text-orange-600">Events</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 mb-10 gap-6">
            {events.map(event => (
              <EventCard
                key={event.id}
                title={event.title}
                description={event.description}
                image={event.image}
              />
            ))}
          </div>
        </div>
    </Layout>
     </>
    );
}

export default Event;
