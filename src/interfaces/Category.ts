export interface Category {
	[tag: string]: {
		id: number;
		describe: string;
		color: string;
		expense: boolean;
	};
}
