import { useState, useEffect } from "react";
import * as C from "./App.styles";

import { ICategory } from "./interfaces/Category";
import { IItem } from "./interfaces/Item";

import { dataCategory } from "./data/categories";
import { dataItems } from "./data/items";

import { filterListByMonth, getCurrentMonth } from "./helpers/dateFilter"
import { TableArea } from "./components/TableArea";
import { InfoArea } from "./components/InfoArea";
import { InputArea } from "./components/InputArea";

const App = () => {

  const [items, setItems] = useState(dataItems);
  const [filteredList, setFilteredList] = useState<IItem[]>([]);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());
  const [income, setIncome] = useState(0);
  const [expensee, setexpense] = useState(0);

  useEffect(() => {
    setFilteredList(filterListByMonth(items, currentMonth));
  }, [items, currentMonth])

  useEffect(() => {
    let incomeSumary = 0;
    let expenseSumary = 0;

    for (let i in filteredList) {
      if (dataCategory[filteredList[i].category].expense) {
        expenseSumary += filteredList[i].value;
      } else {
        incomeSumary += filteredList[i].value;
      }
    }
    setIncome(incomeSumary);
    setexpense(expenseSumary);
  }, [filteredList])

  const handleMonthChange = (newMonth: string) => {
    setCurrentMonth(newMonth);
  }

  const handleAddItem = (item: IItem) => {
    let newList = [...items];
    newList.push(item);
    setItems(newList);
  }
  
  return (
    <C.AppContainer>
      <C.Header>
        <C.HeaderTitle>Sistema Financeiro</C.HeaderTitle>
      </C.Header>
      <C.Body>

        {/* Section Info */}
        <InfoArea
          currentMonth={currentMonth}
          onMonthChange={handleMonthChange}
          income={income}
          expense={expensee}
        />

        {/* Section Insert Info */}
        <InputArea onAdd={handleAddItem} />

        {/* Section Itens */}
        <TableArea items={filteredList} />

      </C.Body>
    </C.AppContainer>
  );
}

export default App;