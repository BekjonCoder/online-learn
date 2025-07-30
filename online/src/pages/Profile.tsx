import React, { useEffect, useState } from "react";
import { Card, Progress, Tag } from "antd";

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

interface Subject {
  id: number;
  title: string;
  image: string;
  description: string;
}

const subjects: Subject[] = [
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

const lessonCountPerSubject = 2;

const Profile: React.FC = () => {
  const [userProgress, setUserProgress] = useState<{ [key: number]: number[] }>({});

  useEffect(() => {
    const progressData: { [key: number]: number[] } = {};

    subjects.forEach((subject) => {
      const stored = localStorage.getItem(`progress-${subject.id}`);
      if (stored) {
        progressData[subject.id] = JSON.parse(stored);
      }
    });

    setUserProgress(progressData);
  }, []);

  const getProgressPercent = (subjectId: number): number => {
    const seen = userProgress[subjectId] || [];
    return Math.round((seen.length / lessonCountPerSubject) * 100);
  };

  const completedSubjects = subjects.filter(s => getProgressPercent(s.id) === 100);
  const activeSubjects = subjects.filter(s => getProgressPercent(s.id) > 0 && getProgressPercent(s.id) < 100);

  return (
    <div className="max-w-6xl mx-auto px-4 mt-10">
      <h1 className="text-3xl font-bold mb-6 text-center">My Profile</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2  gap-6">
        {subjects.map((subject) => {
          const percent = getProgressPercent(subject.id);
          return (
            <Card
              key={subject.id}
              title={subject.title}
              className="rounded-xl shadow-md"
              cover={
                <img
                  alt={subject.title}
                  src={subject.image}
                  className="h-48 w-full object-cover rounded-t-xl"
                />
              }
              extra={
                percent === 100 ? (
                  <Tag color="green">✅ Completed</Tag>
                ) : percent > 0 ? (
                  <Tag color="blue">🕓 In Progress</Tag>
                ) : (
                  <Tag color="default">⏳ Not Started</Tag>
                )
              }
            >
              <p>{subject.description}</p>
              <Progress percent={percent} size="small" className="mt-2" />
              <p className="mt-2 text-sm text-gray-600">{percent}% viewed</p>
            </Card>
          );
        })}
      </div>

      <div className="mt-10">
        <h2 className="text-2xl font-semibold mb-2">📈 Overall Stats:</h2>
        <div className="bg-gray-50 p-4 rounded-lg border text-sm leading-6">
          ✅ Completed subjects: <b>{completedSubjects.length}</b><br />
          📘 In progress subjects: <b>{activeSubjects.length}</b><br />
          🔢 Total subjects: <b>{subjects.length}</b>
        </div>
      </div>
    </div>
  );
};

export default Profile;
