import styled from 'styled-components';

export const ButtomContent = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  margin-top: 2%;
  margin-bottom: 3%;
  width: 102%;
`;
export const ContentMain = styled.section`
  display: flex;
  flex-flow: column;
  width: 102%;
  h3:first-child {
    font-style: normal;
    font-weight: 600;
    font-size: 30px;
    line-height: 45px;
    color: #569ccd;
    margin-bottom: 2%;
  }
`;

export const ContentProductLarger = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: space-between;
`;

export const ContentSub = styled.section`
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  margin-top: 5%;
  width: 102%;
`;

export const ContentSubCategory = styled.div`
  display: flex;
  flex-flow: column;
  h4 {
    font-style: normal;
    font-weight: 600;
    font-size: 30px;
    line-height: 45px;
    color: #569ccd;
    margin-bottom: 2%;
  }
  :first-child {
    margin-right: 10%;
  }
`;

export const Items = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: space-between;
`;

export const ContentTopSellers = styled.section`
  display: flex;
  flex-flow: column;
  margin-top: 10%;
  width: 102%;
  h3 {
    font-style: normal;
    font-weight: 600;
    font-size: 30px;
    line-height: 45px;
    color: #569ccd;
    margin-bottom: 2%;
  }
`;

export const TopSellers = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: space-between;
`;

export const ContentBannerFashion = styled.section`
  margin-top: 10%;
  width: 102%;
`;

export const ContentIllustration = styled.section`
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  width: 102%;

  margin-top: 12%;
  margin-bottom: 14%;
`;
