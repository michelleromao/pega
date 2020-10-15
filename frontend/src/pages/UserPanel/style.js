import styled from 'styled-components';

export const PanelUser = styled.div`
        display: flex;
        flex-direction: row;
        max-width: 1130px;
        width: 100%;
        height: 780px;
        align-items: center;
        margin-top:80px;
        margin-bottom: 100px;
    }

    p {
        font-family: 'Poppins';
        font-weight: 600;
        font-size: 20px;
        color:#fff;
        padding:10px;
    }
`;
export const Favs = styled.div`
    display: flex;
    flex-direction:row;
    flex-wrap:wrap;
    justify-content: space-between;
    margin-top:40px;
`;

export const Title = styled.h4`
    color: #4E4E4E;
    font-size:22px;
    font-family:'Poppins';
    font-weight:500;
    margin-bottom:30px;
`;

export const Content = styled.div`
        border-radius: 0 12px 12px 0;
        border: solid 1px #83BDE6;
        border-left: 0px;
        width: 800px;
        height: 730px;
        padding: 50px;
`;

export const Favoritos = styled.div`
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
`;

export const Sidebar = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 260px;
        background-color: #83BDE6;
        border-radius: 12px;
        height: 100%;
        padding: 50px 0 50px 10px;
    }

    img {
        width: 120px;
        border: solid 5px #fff;
        border-radius: 50%;
    }

    ul {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height:440px;
        margin-top:40px;
        width: 250px;
        display: flex;
        flex-direction: column;
        text-align: right;
    }

    button {
        background: transparent;
        border: none;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        font-family: 'Poppins';
        color: #fff;
        font-size: 15px;
        height: 20px;
        padding: 25px 0 25px 35px;
    }
    button:hover{
        background:#fff;
        color: #83BDE6;
        cursor: pointer;
        border-radius:10px 0 0 10px;
        transition: 0.2s;
    }
    button:focus{
        background:#fff;
        color: #83BDE6;
        cursor: pointer;
        border-radius:10px 0 0 10px;
    }
`;
export const Hove = styled.div`
        padding: 15px 0 15px 15px;
        height: 20px;
        background-color:#fff;
        border-radius: 7px 0 0 7px;
`;

export const Filter = styled.div`
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        margin-bottom:20px;
`;

export const Item = styled.button`
        border: solid 2px #569CCD;
        border-radius: 12px;
        background: none;
        padding: 5px 25px 5px 25px;
        margin-right: 10px;
        color: #569CCD;
        font-family: 'Poppins';
        font-weight:500;
    }
    :hover {
        opacity: 90%;
        cursor: pointer;
    }
`;
