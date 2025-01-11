import React from 'react';

export default function Tag({ tags }) {
  return (
    <div className='flex gap-2 flex-wrap'>
      {tags.map((tag, index) => (
        <span key={index} className="bg-red-500 px-4 py-2 text-white font-semibold text-sm rounded-full">
          {tag}
        </span>
      ))}
    </div>
  );
}
