import React, { useRef, useEffect } from 'react';

const Canvas = props => {
  const ref = useRef();

  useEffect(() => {
    const canvas = ref.current;
    const context = canvas.getContext('2d');
    context.fillStyle = 'black';
    context.fillRect(0, 0, canvas.width, canvas.height);
  }, []);

  return <canvas ref={ref} {...props}/>;
}

export default Canvas;
