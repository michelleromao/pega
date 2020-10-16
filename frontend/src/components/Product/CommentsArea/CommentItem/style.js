import styled from 'styled-components';

export const Container = styled.div`
  padding-top: 20px;
  padding-bottom: 15px;
`;
export const ContentProfile = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  img {
    width: 33px;
    border-radius: 50%;
    margin-right: 10px;
  }
`;
export const ContentName = styled.div`
  p {
    font-family: 'Poppins';
    font-size: 16px;
    color: #202020;
    font-weight: 600;
  }
  span {
    font-family: 'Poppins';
    font-size: 12px;
    color: #949494;
  }
`;

export const ContentDialogue = styled.div`
  margin-left: 40px;
  margin-top: 10px;
  p {
    font-size: 14px;
    font-weight: 500;
    font-family: 'Poppins';
    margin-bottom: 10px;
  }
`;

export const Answer = styled.p`
  display: flex;
  flex-flow: row;
  margin-top: 2%;
  line-height: 27px;
  align-items: flex-start;
  width: 55%;
  img {
    margin-left: 2%;
  }
`;
export const Tag = styled.span`
  font-family: 'Poppins';
  margin-left: 0;
  font-size: 14px;
  color: #87b1cf;
  font-weight: 500;
`;

export const Ask = styled.span`
  color: #ea5254;
`;
