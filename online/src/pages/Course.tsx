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
  { id: 1, subjectId: 1, title: "Lesson 1: Basics of Algebra", desc: "Introduction to expressions and equations.", video: "https://www.youtube.com/embed/VIDEO1" },
  { id: 2, subjectId: 1, title: "Lesson 2: Linear Graphs", desc: "Understanding coordinates and graphs.", video: "https://www.youtube.com/embed/VIDEO2" },

  // Geometry
  { id: 1, subjectId: 2, title: "Lesson 1: Angles", desc: "Types of angles and measurements.", video: "https://www.youtube.com/embed/VIDEO3" },
  { id: 2, subjectId: 2, title: "Lesson 2: Shapes", desc: "Basic shapes and properties.", video: "https://www.youtube.com/embed/VIDEO4" },

  // Chemistry
  { id: 1, subjectId: 3, title: "Lesson 1: Atoms and Elements", desc: "Introduction to atomic structure.", video: "https://www.youtube.com/embed/VIDEO5" },
  { id: 2, subjectId: 3, title: "Lesson 2: Chemical Reactions", desc: "Understanding basic chemical reactions.", video: "https://www.youtube.com/embed/VIDEO6" },

  // Physics
  { id: 1, subjectId: 4, title: "Lesson 1: Motion and Forces", desc: "Basics of motion and Newton's laws.", video: "https://www.youtube.com/embed/VIDEO7" },
  { id: 2, subjectId: 4, title: "Lesson 2: Energy", desc: "Different forms of energy and their uses.", video: "https://www.youtube.com/embed/VIDEO8" },

  // Biology
  { id: 1, subjectId: 5, title: "Lesson 1: Cells and Organisms", desc: "Structure and function of cells.", video: "https://www.youtube.com/embed/VIDEO9" },
  { id: 2, subjectId: 5, title: "Lesson 2: Human Body Systems", desc: "Overview of body systems.", video: "https://www.youtube.com/embed/VIDEO10" },

  // Technology
  { id: 1, subjectId: 6, title: "Lesson 1: Digital Devices", desc: "Types and uses of digital devices.", video: "https://www.youtube.com/embed/VIDEO11" },
  { id: 2, subjectId: 6, title: "Lesson 2: Internet Basics", desc: "How the internet works.", video: "https://www.youtube.com/embed/VIDEO12" },

  // Literature
  { id: 1, subjectId: 7, title: "Lesson 1: Poetry Basics", desc: "Understanding rhythm and rhyme.", video: "https://www.youtube.com/embed/VIDEO13" },
  { id: 2, subjectId: 7, title: "Lesson 2: Fiction vs Non-Fiction", desc: "Comparing literary styles.", video: "https://www.youtube.com/embed/VIDEO14" },

  // History
  { id: 1, subjectId: 8, title: "Lesson 1: Ancient Civilizations", desc: "Exploring early human societies.", video: "https://www.youtube.com/embed/VIDEO15" },
  { id: 2, subjectId: 8, title: "Lesson 2: World Wars", desc: "An overview of WWI and WWII.", video: "https://www.youtube.com/embed/VIDEO16" },

  // English
  { id: 1, subjectId: 9, title: "Lesson 1: Grammar Basics", desc: "Parts of speech and sentence structure.", video: "https://www.youtube.com/embed/VIDEO17" },
  { id: 2, subjectId: 9, title: "Lesson 2: Vocabulary Skills", desc: "Building a stronger vocabulary.", video: "https://www.youtube.com/embed/VIDEO18" },
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
