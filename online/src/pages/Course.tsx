import React, { useEffect, useState } from "react";
import { Button, Card, Collapse, Progress, Rate } from "antd";
import { useNavigate } from "react-router-dom";

const { Panel } = Collapse;

interface LessonType {
  id: number;
  subjectId: number;
  title: string;
  desc: string;
  video: string;
}

const allLessons: LessonType[] = [
  // Algebra
  { id: 1, subjectId: 1, title: "Lesson 1: Basics of Algebra", desc: "Introduction to expressions and equations.", video: "https://www.youtube.com/embed/..." },
  { id: 2, subjectId: 1, title: "Lesson 2: Linear Graphs", desc: "Understanding coordinates and graphs.", video: "https://www.youtube.com/embed/..." },
  { id: 3, subjectId: 1, title: "Lesson 3: Quadratic Equations", desc: "Solving and analyzing quadratics.", video: "https://www.youtube.com/embed/..." },
  { id: 4, subjectId: 1, title: "Lesson 4: Inequalities", desc: "Working with inequalities.", video: "https://www.youtube.com/embed/..." },
  { id: 5, subjectId: 1, title: "Lesson 5: Word Problems", desc: "Applying algebra to real-world problems.", video: "https://www.youtube.com/embed/..." },

  // Geometry
  { id: 1, subjectId: 2, title: "Lesson 1: Angles", desc: "Types of angles and measurements.", video: "https://www.youtube.com/embed/..." },
  { id: 2, subjectId: 2, title: "Lesson 2: Shapes", desc: "Basic shapes and properties.", video: "https://www.youtube.com/embed/..." },
  { id: 3, subjectId: 2, title: "Lesson 3: Areas", desc: "How to calculate areas.", video: "https://www.youtube.com/embed/..." },
  { id: 4, subjectId: 2, title: "Lesson 4: Volumes", desc: "3D shape measurements.", video: "https://www.youtube.com/embed/..." },
  { id: 5, subjectId: 2, title: "Lesson 5: Theorems", desc: "Famous geometry theorems explained.", video: "https://www.youtube.com/embed/..." },

  // ... boshqa fanlar ham xuddi shu tartibda (xohlasang ularni ham yozib beraman)
];

const Course: React.FC = () => {
  const navigate = useNavigate();
  const [subject, setSubject] = useState<any>({});
  const [seenLessons, setSeenLessons] = useState<number[]>([]);

  useEffect(() => {
    const subjectData = JSON.parse(localStorage.getItem("Subject") || "{}");
    setSubject(subjectData);

    const stored = JSON.parse(localStorage.getItem(`progress-${subjectData.id}`) || "[]");
    setSeenLessons(stored);
  }, []);

  const filteredLessons = allLessons.filter(lesson => lesson.subjectId === subject.id);
  const progressPercent = filteredLessons.length === 0 ? 0 : Math.round((seenLessons.length / filteredLessons.length) * 100);

  const handleSeen = (id: number) => {
    const updated = [...new Set([...seenLessons, id])];
    setSeenLessons(updated);
    localStorage.setItem(`progress-${subject.id}`, JSON.stringify(updated));
  };

  return (
    <div className="max-w-[1280px] mx-auto px-4 py-4">
      <Button onClick={() => navigate("/courses")} className="mb-4">
        ⬅ Back to Courses
      </Button>

      <Card
        title={subject.title}
        cover={
          <img
            alt={subject.title}
            src={subject.image}
            className="w-full h-[200px] object-cover rounded-md sm:h-[300px] md:h-[350px]"
          />
        }
        className="mb-4"
      >
        <p className="text-[15px] text-gray-600">{subject.description}</p>
        <Progress percent={progressPercent} />
      </Card>

      {filteredLessons.length === 0 ? (
        <p className="text-center text-gray-500">Lessons for this subject are not available yet.</p>
      ) : (
        <Collapse accordion>
          {filteredLessons.map((lesson) => (
            <Panel header={lesson.title} key={lesson.id}>
              <p className="mb-2 text-gray-600">{lesson.desc}</p>
              <div className="w-full aspect-video mb-4">
                <iframe
                  width="100%"
                  height="100%"
                  src={lesson.video}
                  title={lesson.title}
                  allowFullScreen
                  className="rounded-md"
                />
              </div>
              <div className="flex flex-col sm:flex-row justify-between gap-2">
                <Button
                  onClick={() => handleSeen(lesson.id)}
                  disabled={seenLessons.includes(lesson.id)}
                >
                  {seenLessons.includes(lesson.id) ? "✅ Marked as Watched" : "📺 Mark as Watched"}
                </Button>
                <Rate allowHalf defaultValue={0} />
              </div>
            </Panel>
          ))}
        </Collapse>
      )}
    </div>
  );
};

export default Course;
