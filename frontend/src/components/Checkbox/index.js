import React, { useEffect, useRef, InputHTMLAttributes } from 'react';
import { useField } from '@unform/core';

export default function Checkbox({ name, options, ...rest }){
  const inputRefs = useRef([]);
  const { fieldName, registerField, defaultValue = [] } = useField(name);
  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRefs.current,
      getValue: (refs) => {
        return refs.filter(ref => ref.checked).map(ref => ref.value);
      },
      clearValue: (refs) => {
        refs.forEach(ref => {
          ref.checked = false;
        });
      },
      setValue: (refs, values) => {
        refs.forEach(ref => {
          if (values.includes(ref.id)) {
            ref.checked = true;
          }
        });
      },
    });
  }, [defaultValue, fieldName, registerField]);
  return (
    <div>
      {options.map((option, index) => (
        <label htmlFor={option.id} key={option.id}>
          <input
            defaultChecked={defaultValue.find((dv) => dv === option.id)}
            ref={ref => {
              inputRefs.current[index] = ref;
            }}
            name={name}
            value={option.value}
            type="radio"
            id={option.id}
            {...rest}
          />
          {option.label}
        </label>
      ))}
    </div>
  );
};
