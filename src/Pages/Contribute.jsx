import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import styles for the editor

const Contribute = () => {
  const [content, setContent] = useState('');

  const handleContentChange = (value) => {
    setContent(value);
  };

  return (
    <div>
      <h1>Contribute</h1>
      <ReactQuill
        theme="snow"
        value={content}
        onChange={handleContentChange}
        placeholder="Write your content here..."
      />
      <div className="mt-5">
        <h2>Preview:</h2>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </div>
  );
};

export default Contribute;
