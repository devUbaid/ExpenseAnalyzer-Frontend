import styled from "styled-components";

export const MainLayout = styled.div`
    padding: 1.5rem 1.5rem;
    height: 100%;
    display: flex;
    gap: 2rem;

    @media (max-width: 1024px){
     padding-top: 3.5rem;
    }
    @media (max-width: 480px) {
       height: 780px;
       width: 100%;
       height: 92vh;
    }
`;

export const InnerLayout = styled.div`
    padding: 2rem 1.5rem;
    width: 100%;
    // @media (max-width: 480px){
    // height: 100vh;
    // }
`;
