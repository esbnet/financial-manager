import * as C from './styles';
import { formatDate } from '../../helpers/dateFilter';
import { IItem } from '../../interfaces/Item';

import { dataCategory } from '../../data/categories';


interface TableItemProps {
  item: IItem;
}

export const TableItem = ({ item }: TableItemProps) => {

  return (
    <C.TableLine>
      <C.TableColumn>{formatDate(item.date)}</C.TableColumn>
      <C.TableColumn color={dataCategory[item.category].color}>
        <C.Category color={dataCategory[item.category].color}>
          {dataCategory[item.category].describe}
        </C.Category>
      </C.TableColumn>
      <C.TableColumn>{item.title}</C.TableColumn>
      <C.TableColumn>
        <C.Value color={dataCategory[item.category].expense ? 'red' : 'green'}>R$ {item.value}</C.Value>
      </C.TableColumn>
    </C.TableLine>
  );
};

