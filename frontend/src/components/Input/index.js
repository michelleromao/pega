import React, { useEffect, useRef } from 'react';
import { useField } from '@unform/core';

import { InputContainer, Label } from './style';

function Input({
  type,
  marginBottom,
  marginleft,
  fSize,
  color,
  labelText,
  value,
  placeholder,
  size,
  name,
  required,
  maxLength,
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
      <Label marginleft={marginleft} fSize={fSize}>
        {labelText}
      </Label>
      <InputContainer
        marginBottom={marginBottom}
        name={fieldName}
        type={type}
        color={color}
        value={value}
        placeholder={placeholder}
        size={size}
        ref={inputRef}
        maxLength={maxLength}
        defaultValue={defaultValue}
        {...rest}
        required={required}
      />
    </>
  );
}
export default Input;
