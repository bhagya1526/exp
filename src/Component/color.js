import React, { useState } from 'react';
import { SketchPicker } from 'react-color';

function ColorPicker() {
  const [color, setColor] = useState('#ffffff');

  const handleChange = (pickedColor) => {
    setColor(pickedColor.hex);
  };

  return (
    <div>
      <SketchPicker color={color} onChange={handleChange} />
      <p>Selected color: {color}</p>
    </div>
  );
}

export default ColorPicker;
