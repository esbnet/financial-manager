import { formatCurrentMonth } from '../../helpers/dateFilter';
import { ResumeItem } from '../ResumeItem';
import * as C from './styles';

interface IProps {
  currentMonth: string;
  onMonthChange: (newMonth: string) => void;
  income: number;
  expense: number;
};


export const InfoArea = ({ currentMonth, onMonthChange, income, expense }: IProps) => {

  const sumary = parseFloat((income - expense).toFixed(2));

  const handlePreviewMonth = () => {
    let [year, month] = currentMonth.split('-');
    let currentDate = new Date(Number(year), Number(month) - 1, 1);
    currentDate.setMonth(currentDate.getMonth() - 1);
    onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`);
  }

  const handleNextMonth = () => {
    let [year, month] = currentMonth.split('-');
    let currentDate = new Date(Number(year), Number(month) + 1, 1);
    currentDate.setMonth(currentDate.getMonth() - 1);
    onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`);
  }

  return (
    <C.Container>

      <C.MounthArea>
        <C.MounthArrow title='Mês Anterior' onClick={handlePreviewMonth}>{'<<'}</C.MounthArrow>
        <C.MounthTitle>{formatCurrentMonth(currentMonth)}</C.MounthTitle>
        <C.MounthArrow title='Próximo Mês' onClick={handleNextMonth}>{'>>'}</C.MounthArrow>
      </C.MounthArea>

      <C.SumaryArea>
        <ResumeItem title="Receitas" value={income} />
        <ResumeItem title="Despesas" value={expense} />
        <ResumeItem 
          title="Balanço" 
          value={ sumary }
          color={sumary < 0 ? 'red' : 'green'} 
        />
      </C.SumaryArea>


    </C.Container>
  );
};
