export const getProgress = (): Record<string, string[]> => {
  return JSON.parse(localStorage.getItem("progress") || "{}");
};

export const saveProgress = (courseId: string, lessonId: string) => {
  const progress = getProgress();
  if (!progress[courseId]) progress[courseId] = [];
  if (!progress[courseId].includes(lessonId)) {
    progress[courseId].push(lessonId);
    localStorage.setItem("progress", JSON.stringify(progress));
  }
};

export const getRating = (): Record<string, number> => {
  return JSON.parse(localStorage.getItem("ratings") || "{}");
};

export const setRating = (lessonId: string, rating: number) => {
  const ratings = getRating();
  ratings[lessonId] = rating;
  localStorage.setItem("ratings", JSON.stringify(ratings));
};
