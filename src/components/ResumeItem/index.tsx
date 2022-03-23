import * as C from './styles';

interface IProps {
  title: string;
  value: number;
  color?: string;
}


export const ResumeItem = ({ title, value, color }: IProps) => {
  return (
    <C.Container>
      <C.Title>{title}</C.Title>
      <C.Info color={color}>R$ {value}</C.Info>
    </C.Container>
  )
};

