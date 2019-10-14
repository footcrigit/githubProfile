import styled from 'styled-components';

export const NavContent = styled.div `
    margin-top : 1%;
    width : 100%;
    height : 30%;
    border-bottom: 1px solid grey; 
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`;
export const OverViewContent = styled.div `
    width : 100%;
    height : 70%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
`;
export const OverViewContentCol = styled.div `
    width : 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`;
export const RepoContent = styled.div `
    width : 50%;
    border : .5px solid grey;
    margin-left : 1%;
    margin-top : 1%;
    display: flex;
    flex-direction: column;
`;
export const RepoContentBar = styled.div `
    width : 50%;
    display: flex;
    flex-direction: column;
`;
export const MainContentDiv = styled.div `
    display: flex;
    flex-direction: column;
`;
export const ButtonNav = styled.button `
    background-color: Transparent; 
    border: none;
    text-color: black;
    padding: 15px 32px;
    font-size: 16px;
    border-radius: 4px
`;
