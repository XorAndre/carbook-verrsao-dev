import style from 'styled-components/native'

const CardColumn = style.View`
    background-color: #FFFFFF;
    border-radius: 8px;
    border-color: #3333331c;
    border-style: solid;
    border-width: 1px;
    width: 100%
`;

const CardRow = style.View`
    background-color: #FFFFFF;
    border-radius: 5px;
    border-color: #3333331c;
    border-style: solid;
    border-width: 1px;
    width: 100%
`;
const CardContainer = style.View`
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 20px;
    padding-bottom: 20px;
`;
const CardContainerRow = style.View`
    flex-direction: row;
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 5px;
    padding-bottom: 5px;
`;
const Left = style.View`
    width: 20%;
`;
const Right = style.View`
    margin-left: 20px;
    width: 80%;
`;
const BodyCard = style.View`
    margin-left: 10px;
    width: 80%;
`;
const HeaderCard = style.View`
    align-items: center;
    text-align: center;
    width: 80%;
`;
const ImageColumn = style.Image`
    height: 135px;
    margin-left: 40px;
    width: 250px;
`;
const ImageRow = style.Image`
    height: 70px;
    width: 70px;
`;
const TitleCard = style.Text`
    font-size: 20px;
    font-weight: bold;
`;
const DescriptionCard = style.Text`
    font-size: 18px;
    width: 300px;
`;
const DataCard = style.Text`
    font-size: 13px;
    width: 300px;
`;
export{
    CardColumn,
    CardRow,
    CardContainer,
    CardContainerRow,
    Left,
    Right,
    HeaderCard,
    BodyCard,
    ImageColumn,
    ImageRow,
    TitleCard,
    DescriptionCard, 
    DataCard
}