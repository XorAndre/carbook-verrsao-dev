import style from 'styled-components/native'

const Row = style.View`
    flex-direction: column;
`;
const getColumn = (valueGrid) =>{
	if(!valueGrid) return;
	const width = valueGrid / 12 * 100;
	return `width: ${width}%;`;
}

const Column = style.View`
	padding: 10px;
    ${({ Value }) => Value && getColumn(Value)}
`;

export {
    Row,
    Column
}