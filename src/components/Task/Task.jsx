import React from 'react';
import './Task.scss';

export default function Task({content}) {
  return (
    <div className='task'>
        <h2 className="task__content">{content}</h2>
    </div>
  );
}
