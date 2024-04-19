import React, { useState } from 'react';

function FileInput() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      {selectedFile && (
        <p>Selected File: {selectedFile.name}</p>
      )}
    </div>
  );
}



export default FileInput;
