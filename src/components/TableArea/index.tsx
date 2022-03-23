import * as C from './styles';
import { IItem } from '../../interfaces/Item';
import { TableItem } from '../TableItem';

interface IProps {
  items: IItem[];
  // currentMonth: string;
}

export const TableArea = ( {items}: IProps ) => {
  return (
    <C.Table>
      <thead>
        <tr>
          <C.HeaderColumn width={100}>Data</C.HeaderColumn>
          <C.HeaderColumn width={130}>Categoria</C.HeaderColumn>
          <C.HeaderColumn >Título</C.HeaderColumn>
          <C.HeaderColumn width={150}>Valor</C.HeaderColumn>
        </tr>
      </thead>
      <tbody>
        {items.map(item => ( 
          <TableItem key={item.id} item={item} /> 
        ))}
      </tbody>
    </C.Table>
  );
};
