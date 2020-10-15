import React, { useEffect, useRef, useState } from 'react';
import { useField } from '@unform/core';

import {ButtonEye, InputContainer, InputContainerPWD, Label, Container, TextAreaContainer, ContainerInput } from './style';
import EyeOpen from "../../assets/icons/eye.png";
import EyeClose from "../../assets/icons/eyeclose.png";

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
  password,
  input,
  ...rest
}) {
  const inputRef = useRef(null);
  const [typeInput, setTypeInput] = useState(input);
  const { fieldName, defaultValue, registerField, error } = useField(name);
  const [show, SetShow] = useState(false);

  function handleShow() {
    if (inputRef.current?.type === 'password' && (inputRef.current?.name === 'password' || inputRef.current?.name === 'senha')) {
      SetShow(true);
      inputRef.current.type = 'text';
    }
  }
  function handleHide() {
    if (inputRef.current?.type === 'text' && (inputRef.current?.name === 'password' || inputRef.current?.name === 'senha')) {
      SetShow(false);
      inputRef.current.type = 'password';
    }
  }

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
        password === true ?
        <ContainerInput
        marginBottom={marginBottom}
        color={color}
        size={size}

        >
        <InputContainerPWD
          name={fieldName}
          type={type}
          value={value}
          placeholder={placeholder}
          ref={inputRef}
          maxLength={maxLength}
          defaultValue={defaultValue}
          {...rest}
          required={required}
        />
        {show ? <ButtonEye type="button" onClick={() => handleHide()}><img src={EyeOpen} alt=""/></ButtonEye> : <ButtonEye type="button" onClick={() => handleShow()}><img src={EyeClose} alt=""/> </ButtonEye>}

        </ContainerInput>
        :
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
