import styled from 'styled-components';

export const Container = styled.div`
display:flex;
width:100%;
margin:30px 0 50px 0;
.vitrine{
    width:100%;
    margin-left: 5%;

}
.orderby{
    display:flex;
    flex-direction:row-reverse;
    margin-bottom: 8%;
}
`;
export const Items = styled.div`
  display: flex;
  flex-flow: row wrap;
`;
export const ContainerAnnouncements = styled.div`
  width: 103%;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
`;
