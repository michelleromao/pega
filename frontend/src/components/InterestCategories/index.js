import React, { useState } from 'react';

import { Label, Container, Content } from './style';
import CategoryPreference from '../CategoryPreference';
import { useEffect } from 'react';

function InterestCategories(props) {
  const [interest, setInterest] = useState([]);

  useEffect(() => {
    setInterest(props.categories);
  }, []);
  return (
    <Container>
      <Label>Categorias de interesse</Label>
      <Content>
        {interest.length === 0 ? (
          <CategoryPreference
            border="#949494"
            background="#fff"
          ></CategoryPreference>
        ) : (
          <>
            {interest.map((category) => (
              <CategoryPreference
                border="#EA5254"
                background="#EA5254"
                name={category}
              ></CategoryPreference>
            ))}
            <CategoryPreference
              border="#949494"
              background="#fff"
            ></CategoryPreference>
          </>
        )}
      </Content>
    </Container>
  );
}
export default InterestCategories;
