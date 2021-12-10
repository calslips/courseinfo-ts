import React from 'react';
import Header from './components/Header';
import Content from './components/Content';
import Total from './components/Total';

interface CoursePartBase {
  name: string;
  exerciseCount: number;
  type: string;
}

interface CourseNormalPart extends CoursePartBase {
  type: 'normal';
  description: string;
}

interface CourseProjectPart extends CoursePartBase {
  type: 'groupProject';
  groupProjectCount: number;
}

interface CourseSubmissionPart extends CoursePartBase {
  type: 'submission';
  description: string;
  exerciseSubmissionLink: string;
}

type CoursePart = CourseNormalPart | CourseProjectPart | CourseSubmissionPart;

const App = () => {
  const courseName = 'Half Stack application development';
  const courseParts: CoursePart[] = [
    {
      name: 'Fundamentals',
      exerciseCount: 10,
      description: 'This is the leisure course part',
      type: 'normal'
    },
    {
      name: 'Advanced',
      exerciseCount: 7,
      description: 'This is the hard course part',
      type: 'normal'
    },
    {
      name: 'Using props to pass data',
      exerciseCount: 7,
      groupProjectCount: 3,
      type: 'groupProject'
    },
    {
      name: 'Deeper type usage',
      exerciseCount: 14,
      description: 'Confusing description',
      exerciseSubmissionLink: 'https://fake-exercise-submit.made-up-url.dev',
      type: 'submission'
    }
  ];

  return (
    <div>
      <Header courseName={courseName} />
      {courseParts.map(part =>
        <Content
          key={part.name}
          name={part.name}
          exerciseCount={part.exerciseCount}
        />
      )}
      <Total
        sum={courseParts.reduce((carry, part) => carry + part.exerciseCount, 0)}
      />
    </div>
  );
}

export default App;
