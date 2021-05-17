import React from 'react';
import Button from './Button'
import Input from './Input'

export default function Form({handleInputChange, input, handleAddtodo}) {
  return (
    <div>
      <Input handleInputChange={handleInputChange} input={input} />
      <Button handleAddtodo={handleAddtodo} />
    </div>
  );
}
