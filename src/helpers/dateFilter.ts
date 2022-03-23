import { IItem } from "../interfaces/Item";

export const getCurrentMounth = () => {
	let now = new Date();
	const month = now.getMonth() + 1;
	const year = now.getFullYear();

	return `${year}-${month}`;
};

export const filterListByMounth = (list: IItem[], date: string): IItem[] => {
	let newList: IItem[] = [];
	let [year, month] = date.split("-");

	for (let i in list) {
		if (
			list[i].date.getFullYear() === parseInt(year) &&
			list[i].date.getMonth() === parseInt(month)
		) {
			newList.push(list[i]);
		}
	}

	return newList;
};

export const formatDate = (date: Date): string => {
	const day = ("00" + date.getDate()).slice(-2);
	const month = ("00" + date.getMonth()).slice(-2);
	const year = ("0000" + date.getFullYear()).slice(-4);

	return `${day}/${month}/${year}`;
};

export const formatCurrentMounth = (currentMounth: string) => {
	let [year, month] = currentMounth.split("-");

	const months = [
		"Janeiro",
		"Fevereiro",
		"Março",
		"Abril",
		"Maio",
		"Junho",
		"Julho",
		"Agosto",
		"Setembro",
		"Outubro",
		"November",
		"Dezenove",
	];

	return `${months[parseInt(month) - 1]} de ${year}`;
};
