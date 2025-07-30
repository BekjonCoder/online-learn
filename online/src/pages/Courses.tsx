import { Card } from 'antd'
import React from 'react'

import algebra from '../assets/algebra.png';
import geometry from '../assets/geometry.png';
import chemistry from '../assets/chemistry.png';
import native from '../assets/native.jpg';
import biology from '../assets/biology.jpg';
import physics from '../assets/physics.png';
import technology from '../assets/technology.png';
import leterature from "../assets/leterature.png";
import history from "../assets/history.png";
import english from "../assets/english.png";
import CourseCard from '../components/CourseCard';

 export interface CourseType {
  id: number;
  title: string;
  description: string;
  image: string;
}
 const coursesData: CourseType[] = [
  {
    id: 1,
    title: "Algebra",
    description: "Learn the fundamentals of algebra, including expressions, equations, and graphing.",
    image: algebra,
  },
  {
    id: 2,
    title: "Geometry",
    description: "Develop spatial reasoning with shapes, angles, areas, and volumes.",
    image: geometry,
  },
  {
    id: 3,
    title: "Chemistry",
    description: "Understand the structure of matter, chemical reactions, and basic lab practices.",
    image: chemistry,
  },
  {
    id: 4,
    title: "Native Language",
    description: "Improve spelling, sentence structure, and speech etiquette.",
    image: native,
  },
  {
    id: 5,
    title: "Physics",
    description: "Explore natural laws, motion, forces, and energy concepts.",
    image: physics,
  },
  {
    id: 6,
    title: "Biology",
    description: "Study the structure of living organisms, life processes, and ecology basics.",
    image: biology,
  },
  {
    id: 7,
    title: "Technology",
    description: "Gain practical skills, career orientation, and knowledge of modern tools.",
    image: technology,
  },
  {
    id: 8,
    title: "Literature",
    description: "Analyze literary works, explore authors' lives, and build interpretive skills.",
    image: leterature,
  },
  {
    id: 9,
    title: "History",
    description: "Discover key periods and figures from Uzbek and world history.",
    image: history,
  },
  {
    id: 10,
    title: "English",
    description: "Expand vocabulary, understand grammar, and improve speaking skills.",
    image: english,
  },
];


const Courses:React.FC = () => {
 
  return (
    <section className='max-w-[1280px] mx-auto px-4'>
      <Card type='inner' title='Courses' className='w-[1280px]'>
      <div className="w-full grid grid-cols-2 gap-[2rem]">
  {coursesData.map((item) => (
    <CourseCard key={item.id} item={item} />
  ))}
</div>
      </Card>
    </section>
  )
}

export default Courses