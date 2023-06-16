import styled from '@emotion/styled';

export const UserProfile = styled.div`
  width: 350px;
  margin: 50px auto;
  padding: 5px 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 5px 5px 20px 10px rgba(75, 75, 75, 0.75);
  border-radius: 5px;
  border: 1px solid grey;
`;

export const UserThumb = styled.div`
  width: 250px;
  overflow: hidden;
`;

export const UserAvatar = styled.img`
  max-width: 100%;
  display: block;
  height: auto;
  border-radius: 50%;

`;

export const UserName = styled.p`
  font-weight: 900;
  text-align: center;
`;

export const UserTag = styled.p`
  text-align: center;
`;

export const UserLocation = styled.p`
  text-align: center;
`;

export const UserStats = styled.ul`
  width: 100%;
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  & li {
    border-top: 1px solid grey;
    width: 100%;
  }
  & li:not(:last-child) {
    border-right: 1px solid grey;
  }
`;

export const Stat = styled.li`
 background-color: rgba(209, 209, 209,.8);
 padding: 15px;
`;

export const StatsLabel = styled.span`
  display: block;
  text-align: center;
`;

export const StatsQuantity = styled.span`
  display: block;
  text-align: center;
  font-weight: 900;
  color: black;
`;
