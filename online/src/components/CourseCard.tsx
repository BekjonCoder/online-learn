import { Button, Card, Image } from 'antd';
import React from 'react';
import { useNavigate } from 'react-router-dom';
 export interface CourseType {
  id: number;
  title: string;
  description: string;
  image: string;
}
interface Props {
  item: CourseType;
}

const CourseCard: React.FC<Props> = ({ item }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    localStorage.setItem('Subject', JSON.stringify(item));
    navigate(`/course/${item.id}`);
  };

  return (
    <Card
  type="inner"
  key={item.id}
  title={item.title}
  className="w-full h-auto cursor-pointer"
>
  <div className="flex flex-col md:flex-row gap-4">
    <Image src={item.image} width={250} height={100} className="object-cover" />
    <div className="flex flex-col gap-4">
      <p className="text-sm md:text-base">{item.description}</p>
      <Button type="primary" onClick={handleClick}>
        Start Lesson
      </Button>
    </div>
  </div>
</Card>

  );
};

export default CourseCard;
