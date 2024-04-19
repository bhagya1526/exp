import React, { useRef, useEffect, useContext } from 'react';
import { FileUploadContext } from '../Context/FileUpload';

const Canvas = props => {
  const ref = useRef();

  
  const {file,setFile} = useContext(FileUploadContext);
  const imageUrl = file

  useEffect(() => {
    const canvas = ref.current;
    const context = canvas.getContext('2d');
    context.fillRect(0, 0, canvas.width, canvas.height);

    const img = new Image();
    img.onload = () => {
      context.drawImage(img, 0, 0);
    };
    img.src = imageUrl;
  }, [imageUrl]);

  return <canvas ref={ref} {...props}/>;
}

export default Canvas;