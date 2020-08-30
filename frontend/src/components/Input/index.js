import React, { useEffect, useRef } from 'react';
import { useField } from '@unform/core';

import { InputContainer, Label } from './style';

function Input({
  type,
  color,
  labelText,
  placeholder,
  size,
  name,
  required,
  ...rest
}) {
  const inputRef = useRef(null);
  const { fieldName, defaultValue, registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <>
      <Label>{labelText}</Label>
      <InputContainer
        name={fieldName}
        type={type}
        color={color}
        placeholder={placeholder}
        size={size}
        ref={inputRef}
        defaultValue={defaultValue}
        {...rest}
        required={required}
      />
    </>
  );
}
export default Input;
