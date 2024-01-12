import { styled } from "styled-components";

export const NavigationBar: React.FC = () => {
  return (
    <StyledMainNavigation>
      <StyledUnorderedList>
        <StyledList>AC's Cafe!</StyledList>
        <StyledList>Sleepy? Grab a coffee! ☕️ </StyledList>
      </StyledUnorderedList>
    </StyledMainNavigation>
  );
};

const StyledMainNavigation = styled.nav`
  background: white;
  padding: 20px;
`;

const StyledUnorderedList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-between;
`;

const StyledList = styled.li`
  float: left;
  font-size: 25px;
  font-family: Brush Script MT, Brush Script Std, cursive;
`;
