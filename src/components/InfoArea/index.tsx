import { formatCurrentMounth } from '../../helpers/dateFilter';
import * as C from './styles';

interface IProps {
  currentMonth: string;
  onMonthChange: (newMonth: string) => void;
};


export const InfoArea = ({currentMonth, onMonthChange}: IProps) => {

  const handlePreviewMonth = () => {
    let [year, month] = currentMonth.split('-');
    let currentDate = new Date(Number(year), Number(month) - 1,1);
    currentDate.setMonth(currentDate.getMonth() - 1);
    onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`);
  }

  const handleNextMonth = () => {
    let [year, month] = currentMonth.split('-');
    let currentDate = new Date(Number(year), Number(month) + 1,1);
    currentDate.setMonth(currentDate.getMonth() - 1);
    onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`);
  }
  
  return (
    <C.Container>

      <C.MounthArea>
        <C.MounthArrow title='Mês Anterior' onClick={handlePreviewMonth}>{'<<'}</C.MounthArrow>
        <C.MounthTitle>{formatCurrentMounth(currentMonth)}</C.MounthTitle>
        <C.MounthArrow title='Próximo Mês'  onClick={handleNextMonth}>{'>>'}</C.MounthArrow>
      </C.MounthArea>

      <C.SumaryArea>
      </C.SumaryArea>

      `

    </C.Container>
  );
};
