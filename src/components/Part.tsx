import React from 'react';
import { CoursePart } from '../App';

const Part = (part: CoursePart) => {
  const assertNever = (value: never): never => {
    throw new Error(
      `Unexpected course parts: ${JSON.stringify(value)}`
    )
  }

  try {
    switch (part.type) {
      case 'normal':
        return (
          <p><em>{part.description}</em></p>
        );
      case 'groupProject':
        return (
          <p>project exercises {part.groupProjectCount}</p>
        );
      case 'submission':
        return (
          <>
            <p><em>{part.description}</em></p>
            <p>submit to {part.exerciseSubmissionLink}</p>
          </>
        );
      default:
        return assertNever(part);
    }
  } catch (error: unknown) {
    let errorMessage = 'Oops, something went wrong.'
    if (error instanceof Error) {
      errorMessage += ' Error: ' + error.message;
    }
    return (
      <p>{errorMessage}</p>
    )
  }

};

export default Part;