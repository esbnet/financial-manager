import styled from "styled-components";

export const TableLine = styled.tr``;

export const TableColumn = styled.td`
	padding: 10px 0;
`;

export const Category = styled.div`
	display: inline-block;
	justify-content: space-between;
	align-items: center;
	padding: 5px 10px;
	border-radius: 5px;
	background-color: ${(props) => props.color};
	text-align: center;
  color: #fff;
`;
export const Value = styled.div`
  color:${(props) => props.color};;
`;



