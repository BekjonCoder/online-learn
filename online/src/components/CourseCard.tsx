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
      className="w-full h-[200px] cursor-pointer"
    >
      <div className="flex gap-[1rem]">
        <Image src={item.image} width={130} height={100} />
        <div className="flex flex-col gap-[1rem]">
          <p>{item.description}</p>
          <Button type="primary" onClick={handleClick}>
            Darsni boshlash
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default CourseCard;
