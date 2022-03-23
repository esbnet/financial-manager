export interface ICategory {
	[tag: string]: {
		id: number;
		describe: string;
		color: string;
		expense: boolean;
	};
}
