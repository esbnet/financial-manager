import styled from "styled-components";

export const Container = styled.div`
	background-color: #fff;
	box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
	border-radius: 5px;
	padding: 20px;
	margin-top: -40px;
  display: flex;
  align-items: center;

`;

export const MounthArea = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

export const MounthArrow = styled.div`
  width: 40px;
  text-align: center;
  fontq-size: 25px;
  cursor: pointer;
  
  transition: all 0.2s;

  &:hover {
    transform: scale(1.3);
    text-shadow: 2px 2px 5px rgba(0, 0, 0, 1);
  }
`;

export const MounthTitle = styled.div`
  flex: 1;
  text-align: center;
`;

export const SumaryArea = styled.div`
  flex: 2;
  display: flex;
`;
