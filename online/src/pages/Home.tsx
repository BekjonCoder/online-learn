import { Button, Card } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="max-w-[1200px] mx-auto px-4 py-8 space-y-10">
      <div className="flex flex-col gap-4 justify-between md:flex-row">
        <Card 
          type="inner" 
          className="w-full md:w-[350px] font-serif text-[15px] leading-relaxed"
          title="Why is it free?"
        >
          <p>
            We decided to make these lessons free because not everyone can afford to pay for education. Money shouldn't be a barrier to learning!
          </p>
        </Card>

        <Card 
          type="inner" 
          className="w-full md:w-[350px] font-mono text-[15px] leading-relaxed"
          title="Opportunity for All"
        >
          <p>
            We believe that quality education should be open to everyone. Mentoring each student is our responsibility!
          </p>
        </Card>

        <Card 
          type="inner" 
          className="w-full md:w-[350px] font-sans text-[15px] leading-relaxed"
          title="From the Heart"
        >
          <p>
            This project isn’t about profit — it’s about prayers. Real change happens through sincere service from the heart.
          </p>
        </Card>
      </div>

      <Card type="inner" className="font-sans text-[16px] mb-[2rem] leading-relaxed">
        <p>
          <strong>BekjonUz</strong> is a platform that provides free quality education. Our goal is to give every student — regardless of their background — access to learning. You have the potential — we’re just here to guide you!
        </p>
      </Card>

      <div className="grid grid-cols-1 mt-4 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {["Beginner", "Intermediate", "Advanced"].map((level, i) => (
          <Card key={i} title={level} className="text-center font-serif hover:shadow-xl duration-300">
            <p>Video lessons tailored for {level.toLowerCase()} level learners.</p>
          </Card>
        ))}
      </div>

      <Card type="inner" title="What our learners say" className="font-mono">
        <p>
          “I couldn’t access education for many years. Now, thanks to EduUz, I’m getting closer to my dreams!” – <i>Umida, 22 years old</i>
        </p>
        <p>
          “My friends always talked about going to good schools, but I couldn’t afford it. Now with this platform, I’m learning even better than them!” – <i>Ali, 15 years old</i>
        </p>
      </Card>

      <div className="grid grid-cols-1 sm:grid-cols-3 text-center gap-4 mt-6">
        <div>
          <h3 className="text-2xl font-bold">+100</h3>
          <p>Lessons available</p>
        </div>
        <div>
          <h3 className="text-2xl font-bold">+200</h3>
          <p>Students enrolled</p>
        </div>
        <div>
          <h3 className="text-2xl font-bold">100%</h3>
          <p>Free education</p>
        </div>
      </div>

      <div className="text-center mt-10">
        <Link to={'/courses'}>
          <Button type='primary'>Start Learning</Button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
