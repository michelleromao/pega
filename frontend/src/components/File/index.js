import React, {
  ChangeEvent,
  useRef,
  useEffect,
  useCallback,
  useState,
} from 'react';
import { useField } from '@unform/core';

import { Label, Input } from './style';
import Add from '../../assets/icons/addblue.svg';

function ImageInput({ name, height, defaultImage, width, ...rest }) {
  const inputRef = useRef(null);
  const { fieldName, registerField, defaultValue, error } = useField(name);
  const [preview, setPreview] = useState(defaultValue);

  const handlePreview = useCallback((e) => {
    if (e.target.files?.length !== 0) {
      if (e.target.files?.length > 3) {
        alert(
          'Você só pode selecionar 3 imagens do produto, escolha as melhores. :)',
        );
        setPreview(null);
      } else {
        const file = e.target.files?.[0];
        console.log(e.target.files);
        if (!file) {
          setPreview(null);
        }
        const previewURL = URL.createObjectURL(file);
        setPreview(previewURL);
      }
    }
  }, []);
  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'files[0]',
      clearValue(ref) {
        ref.value = '';
        setPreview(null);
      },
      setValue(_, value) {
        setPreview(value);
      },
    });
  }, [fieldName, registerField]);
  return (
    <Label image={preview && preview} height={height} width={width}>
      {defaultImage ? (
        <img src={defaultImage} alt="Imagem de perfil" />
      ) : preview ? (
        <></>
      ) : (
        <img src={Add} alt="Preview" width="20" />
      )}

      <Input type="file" ref={inputRef} onChange={handlePreview} {...rest} />
    </Label>
  );
}
export default ImageInput;
