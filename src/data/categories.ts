import { ICategory } from "../interfaces/Category";

export const dataCategory: ICategory = {
	food: { id: 1, describe: "Alimentação", color: "blue", expense: true },
	salary: { id: 2, describe: "Salário", color: "green", expense: false },
	car: { id: 3, describe: "Carro", color: "red", expense: true },
	house: { id: 4, describe: "Casa", color: "yellow", expense: true },
	childrens: { id: 5, describe: "Filhos", color: "orange", expense: true },
	trip: { id: 6, describe: "Viagens", color: "purple", expense: true },
};
