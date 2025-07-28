import { Button, Card, Image } from 'antd'
import React from 'react'
import html from '../assets/html.png'
import css from '../assets/css.png'
import react from '../assets/react.png'
import tailwind from '../assets/tailwind.jpg'
import node from '../assets/node.png'
import javascript from '../assets/javascript.png'
import github from '../assets/github.png'
import bootstrap from '../assets/bootstrap.png'
import typescript from '../assets/typescript.png'
import webflow from '../assets/webflow.svg'
import { useNavigate } from 'react-router-dom'
import CourseCard from '../components/CourseCard'
 export interface CourseType {
  id: number;
  title: string;
  description: string;
  image: string;
}

// import algebra from '../assets/algebra.png';
// import geometry from '../assets/geometry.png';
// import chemistry from '../assets/chemistry.png';
// import uzbek from '../assets/uzbek.png';
// import physics from '../assets/physics.png';
// import biology from '../assets/biology.png';
// import technology from '../assets/technology.png';
// import literature from '../assets/literature.png';
// import history from '../assets/history.png';
// import english from '../assets/english.png';

export const coursesData: CourseType[] = [
  {
    id: 1,
    title: "Algebra",
    description: "Algebra asoslari, ifodalar, tenglamalar va grafiklar bilan ishlashni o‘rganing.",
    image: html,
  },
  {
    id: 2,
    title: "Geometriya",
    description: "Shakllar, burchaklar, yuzalar va fazoviy fikrlashni rivojlantiring.",
    image: css,
  },
  {
    id: 3,
    title: "Kimyo",
    description: "Moddalar tuzilmasi, reaksiyalar va laboratoriya ishlarining asoslari.",
    image: bootstrap,
  },
  {
    id: 4,
    title: "Ona tili",
    description: "Imlo, gap tuzilishi va nutq madaniyati bo‘yicha chuqur bilimlar.",
    image: github,
  },
  {
    id: 5,
    title: "Fizika",
    description: "Tabiat qonunlari, harakat, kuch va energiya tushunchalari bilan tanishing.",
    image: webflow,
  },
  {
    id: 6,
    title: "Biologiya",
    description: "Tirik organizmlar tuzilishi, hayotiy jarayonlar va ekologiya asoslari.",
    image: react,
  },
  {
    id: 7,
    title: "Texnologiya",
    description: "Amaliy ko‘nikmalar, kasbga yo‘naltirish va zamonaviy texnikalar.",
    image: tailwind,
  },
  {
    id: 8,
    title: "Adabiyot",
    description: "Adabiy asarlar, yozuvchilar hayoti va badiiy tahlil qilish ko‘nikmalari.",
    image: typescript,
  },
  {
    id: 9,
    title: "Tarix",
    description: "O‘zbekiston va jahon tarixidagi muhim davrlar va shaxslar bilan tanishing.",
    image: javascript,
  },
  {
    id: 10,
    title: "Ingliz tili",
    description: "So‘z boyligi, grammatikasi va og‘zaki nutq ko‘nikmalarini oshiring.",
    image: node,
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