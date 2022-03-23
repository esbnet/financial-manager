import { useState, useEffect } from "react";
import * as C from "./App.styles";

import { ICategory } from "./interfaces/Category";
import { IItem } from "./interfaces/Item";

import { dataCategory } from "./data/categories";
import { dataItems } from "./data/items";

import { filterListByMounth, getCurrentMounth } from "./helpers/dateFilter"
import { TableArea } from "./components/TableArea";
import { InfoArea } from "./components/InfoArea";

const App = () => {

  const [items, setItems] = useState(dataItems);
  const [filteredList, setFilteredList] = useState<IItem[]>([]);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMounth());

  useEffect(() => {
    setFilteredList(filterListByMounth(items, currentMonth));
  }, [items, currentMonth])

  const handleMonthChange = (newMonth: string) => {
    setCurrentMonth(newMonth);
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
        />

        {/* Section Insert Info */}

        {/* Section Itens */}
        <TableArea items={filteredList} />

      </C.Body>
    </C.AppContainer>
  );
}

export default App;