import React, { useRef, useEffect, useState } from 'react';
import ReactSelect, { Props as SelectProps } from 'react-select';
import { useField } from '@unform/core';
import { Label, Container } from './style';

function Select({
  opt,
  name,
  marginleft,
  fSize,
  labelText,
  size,
  placeholder,
  ...rest
}) {
  const selectRef = useRef(null);
  const { fieldName, defaultValue, registerField, error } = useField(name);
  const [options, setOptions] = useState(opt);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: selectRef.current,
      getValue: (ref) => {
        if (rest.isMulti) {
          if (!ref.state.value) {
            return [];
          }
          return ref.state.value.map((option) => option.value);
        }
        if (!ref.state.value) {
          return '';
        }
        return ref.state.value.value;
      },
    });
  }, [fieldName, registerField, rest.isMulti]);

  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      color: state.isSelected ? '#202020' : '#c4c4c4',
      backgroundColor: 'white',
    }),
    control: () => ({
      width: size,
      border: '2px solid #569CCD',
      borderRadius: '6px',
      color: '#202020',
      display: 'flex',
      height: '50px',
      fontFamily: 'Poppins',
      fontSize: '14px',
    }),
    singleValue: (provided, state) => {
      const opacity = state.isDisabled ? 0 : 1;
      const transition = 'opacity 300ms';

      return { ...provided, opacity, transition };
    },
  };

  return (
    <Container>
      <Label marginleft={marginleft} fSize={fSize}>
        {labelText}
      </Label>
      <ReactSelect
        styles={customStyles}
        options={options}
        defaultValue={defaultValue}
        ref={selectRef}
        placeholder={placeholder}
        required
        isSearchable={false}
        classNamePrefix="react-select"
        {...rest}
      />
    </Container>
  );
}
export default Select;
