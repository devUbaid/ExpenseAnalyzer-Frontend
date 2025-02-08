import React, { useState, useEffect, useMemo } from "react";
import styled from "styled-components";
import bg from "./img/bg.png";
import { MainLayout } from "./styles/Layouts";
import Orb from "./Components/Orb/Orb";
import Navigation from "./Components/Navigation/Navigation";
import Dashboard from "./Components/Dashboard/Dashboard";
import Income from "./Components/Income/Income";
import History from "./History/History";
import Expenses from "./Components/Expenses/Expenses";
import { useGlobalContext } from "./context/globalContext";
import Login from "./Components/Login/Login";
import Register from "./Components/Login/Register";

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isLoginPage, setIsLoginPage] = useState(true);
    const [active, setActive] = useState(1);

    const global = useGlobalContext()
  console.log(global);

    useEffect(() => {
        if (localStorage.getItem("token")) {
            setIsLoggedIn(true);
        }
    }, []);



    const displayData = () => {
        switch (active) {
            case 1:
                return <Dashboard setActive={setActive} />; // ✅ Pass setActive
            case 2:
                return <History />;
            case 3:
                return <Income />;
            case 4:
                return <Expenses />;
            default:
                return <Dashboard setActive={setActive} />; // ✅ Pass setActive
        }
    };

    const orbMemo = useMemo(() => {
        return <Orb />;
    }, []);

    return (
        <AppStyled bg={bg} className="App">
            {!isLoggedIn ? (
                isLoginPage ? (
                    <LoginPage> 
                        <Login setIsLoggedIn={setIsLoggedIn} switchPage={() => setIsLoginPage(false)} />
                    </LoginPage>
                ) : (
                    <RegisterPage>
                        <Register switchPage={() => setIsLoginPage(true)} />
                    </RegisterPage>
                )
            ) : (
                <>
                    {orbMemo}
                    <MainLayout>
                        <Navigation active={active} setActive={setActive} />
                        <main>
                            {displayData()}
                            
                        </main>
                    </MainLayout>
                </>
            )}
        </AppStyled>
    );
}



const AppStyled = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  
      h1{
      text-align: start;
      }

  main {
    flex: 1;
    background:rgba(230, 224, 213, 0.63);
    // background: #F7F6F2;
    border: 1px solid #191717;
    backdrop-filter: blur(4.5px);
    border-radius: 32px;
    width: 100%;
    overflow-x: hidden;
    &::-webkit-scrollbar {
      width: 0;
    }
  }
    
`;

const LoginPage = styled.div`
  height: 100vh;
  display: flex;
  padding: 1.6rem;
  justify-content: center;
  align-items: center;
  background-color: #f5f5dc; /* Light Beige for Register Page */
`;

const RegisterPage = styled.div`
  height: 100vh;
  display: flex;
  padding: 1.6rem;
  justify-content: center;
  align-items: center;
  background-color: #f5f5dc; /* Light Beige for Register Page */
`;

export default App;
