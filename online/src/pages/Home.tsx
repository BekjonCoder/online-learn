import { Button, Card } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';

const Home:React.FC = () => {
  return (
    <div className="max-w-[1200px] mx-auto px-4 py-8 space-y-10">
      <div className="flex flex-col gap-4 justify-between md:flex-row">
        <Card 
          type="inner" 
          className="w-full md:w-[350px] font-serif text-[15px] leading-relaxed"
          title="Nega bepul?"
        >
          <p>
            Biz bu darslarni tekin qilishga qaror qildik, chunki har kimda ham bilim olish uchun mablag‘ topish oson emas. Pul — to‘siq bo‘lmasligi kerak!
          </p>
        </Card>

        <Card 
          type="inner" 
          className="w-full md:w-[350px] font-mono text-[15px] leading-relaxed"
          title="Imkoniyat hammaga"
        >
          <p>
            Biz ishonamiz: sifatli ta’lim har bir inson uchun ochiq bo‘lishi kerak. Har bir o‘quvchiga ustozlik qilish — bizning burchimiz!
          </p>
        </Card>

        <Card 
          type="inner" 
          className="w-full md:w-[350px] font-sans text-[15px] leading-relaxed"
          title="Qalbdan xizmat"
        >
          <p>
            Bu loyiha daromad emas, duolar uchun. Haqiqiy o‘zgarishlar — qalbdan qilinadigan xizmatlar orqali yuz beradi.
          </p>
        </Card>
      </div>

    
      <Card type="inner" className="font-sans text-[16px] mb-[2rem] leading-relaxed">
        <p>
          <strong>BekjonUz</strong> — bu sifatli ta’limni bepul taqdim etuvchi platforma. Bizning maqsad — har qanday sharoitdagi o‘quvchiga bilim olish imkonini berish. Sizda imkoniyat bor — biz faqat yo‘l ko‘rsatamiz!
        </p>
      </Card>
      <div className="grid grid-cols-1 mt-4  sm:grid-cols-2 md:grid-cols-3 gap-4">
        {["Boshlang'ich", "O'rta", "Ilg‘or"].map((level, i) => (
          <Card key={i} title={level} className="text-center font-serif hover:shadow-xl duration-300">
            <p>{level} darajadagi o‘quvchilar uchun moslashtirilgan video darslar.</p>
          </Card>
        ))}
      </div>

      
      <Card type="inner" title="O‘quvchilar nima deyishmoqda?" className="font-mono">
        <p>
          “Men uzoq yillar ta’limga kira olmagan edim. Endi esa EduUz orqali orzularimga yaqinlashdim!” – <i>Umida, 22 yosh</i>
        </p>
        <p>
          “Mening do'stlarim har doim sifatli talimga borishlarin aytishardi ammo mend u uchun pul yo'q edi! Ammo hozirda bu platforma yordamida ulardan ham yaxshiroq bilimga egaman!” – <i>Ali, 15 yosh</i>
        </p>
      </Card>

      {/* 5. Statistika */}
      <div className="grid grid-cols-1 sm:grid-cols-3 text-center gap-4 mt-6">
        <div>
          <h3 className="text-2xl font-bold">+100</h3>
          <p>Darslar soni</p>
        </div>
        <div>
          <h3 className="text-2xl font-bold">+200</h3>
          <p>O‘quvchilar</p>
        </div>
        <div>
          <h3 className="text-2xl font-bold">100%</h3>
          <p>Bepul ta’lim</p>
        </div>
      </div>

      {/* 6. Call to Action */}
      <div className="text-center  mt-10">
        <Link to={'/courses'}>
        <Button type='primary'>Darslarni boshlash</Button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
