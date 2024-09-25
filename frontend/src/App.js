import styled from "styled-components";
import plainbg from './img/plainbg.png';
import { MainLayout } from "./styles/layout";
import Orb from './components/orb/orb';
import Navigation from './components/Navigation/Navigation'
import { useMemo, useState } from "react";

function App() {
  const [active, setActive] = useState(1)
  
  const orbSave = useMemo(() => {
    return <Orb/>
  })

  const AppStyled = styled.div`
  height:100vh;
  background-image: url(${plainbg});
  position: relative;
`; 

  return (
    <AppStyled  className="App">
      {orbSave}
      <MainLayout>
        <Navigation active={active} setActive={setActive}/>
      </MainLayout>
    </AppStyled>
  );
}



export default App;
