import style from 'styled-components/native'

const TopoPage = style.View`
    background-color: #34495e;
    width: 100%;
`;
const Container = style.View`
    align-items: center; 
    margin-left: 10px;
    margin-right: 10px;
    padding-top: 10px;
    padding-bottom: 10px;
    width: 98%;
`;
const Name = style.Text`
    color: #fff;
    font-size: 16px;
    font-weight: bold;
    text-transform: uppercase;
`;
export {
    TopoPage,
    Container,
    Name
}