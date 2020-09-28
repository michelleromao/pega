import React, { useEffect, useRef, useState } from 'react';
import { useField } from '@unform/core';

import { InputContainer, Label, Container, TextAreaContainer } from './style';

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
  input,
  ...rest
}) {
  const inputRef = useRef(null);
  const [typeInput, setTypeInput] = useState(input);
  const { fieldName, defaultValue, registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
      setValue(ref, value) {
        ref.setInputValue(value);
      },
      clearValue(ref) {
        ref.setInputValue('');
      },
    });
  }, [fieldName, registerField]);

  return (
    <Container>
      <Label marginleft={marginleft} fSize={fSize}>
        {labelText}
      </Label>
      {typeInput === 'input' && (
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
      )}
      {typeInput === 'textarea' && (
        <TextAreaContainer
          marginBottom={marginBottom}
          name={fieldName}
          type={type}
          color={color}
          value={value}
          size={size}
          rows="10"
          placeholder={placeholder}
          ref={inputRef}
          maxLength={maxLength}
          defaultValue={defaultValue}
          {...rest}
          required={required}
        />
      )}
    </Container>
  );
}
export default Input;
