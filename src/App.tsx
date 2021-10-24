import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { theme } from "./theme/Theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <StyledAppContainer>
        <h1>Covid 19 tracker</h1>
      </StyledAppContainer>
    </ThemeProvider>
  );
}

const StyledAppContainer = styled.div`
  text-align: center;
`;

export default App;
