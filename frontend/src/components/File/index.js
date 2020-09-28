import React, {
  ChangeEvent,
  useRef,
  useEffect,
  useCallback,
  useState,
} from 'react';
import { useField } from '@unform/core';

import { Container, Label, Input, ContentPhotos, Photo } from './style';
import Add from '../../assets/icons/addblue.svg';

function ImageInput({ name, ...rest }) {
  const inputRef = useRef(null);
  const { fieldName, registerField, defaultValue, error } = useField(name);
  const [preview, setPreview] = useState(defaultValue);
  const [preview2, setPreview2] = useState(defaultValue);
  const [preview3, setPreview3] = useState(defaultValue);

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
          setPreview2(null);
          setPreview3(null);
        }

        if (e.target.files?.length > 1) {
          const file2 = e.target.files?.[1];
          const previewURL2 = URL.createObjectURL(file2);
          setPreview2(previewURL2);
        }
        if (e.target.files?.length === 3) {
          const file3 = e.target.files?.[2];
          const previewURL3 = URL.createObjectURL(file3);
          setPreview3(previewURL3);
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
    <Container>
      <Label image={preview ? preview : preview2 ? preview2 : preview3}>
        {preview ? <></> : <img src={Add} alt="Preview" width="20" />}
        <Input
          type="file"
          ref={inputRef}
          onChange={handlePreview}
          multiple
          {...rest}
        />
      </Label>
      <ContentPhotos>
        <Photo image={preview && preview} />
        <Photo image={preview2 && preview2} />
        <Photo image={preview3 && preview3} />
      </ContentPhotos>
    </Container>
  );
}
export default ImageInput;
