export type ApiError = {
	error: string | string[];
	message: string | string[];
	status: number;
};

export type Credentials = {
	instanceName: string;
	baseUrl: string;
	authType: 'jwt' | 'apikey';
	authJwt?: string;
	authApikey?: string;
};

export namespace wa {
	export type OptionsMessage = {
		delay?: number;
		presence?: 'unavailable' | 'available' | 'composing' | 'recording' | 'paused' | false;
	};

	export type ButtonMessage = {
		title: string;
		description: string;
		footerText?: string;
		buttons: { buttonText: string; buttonId: string }[];
		mediaMessage?: object;
	};

	export type ListMessage = {
		title: string;
		description: string;
		buttonText: string;
		footerText?: string;
		sections: {
			title: string;
			rows: {
				title: string;
				description: string;
				rowId: string;
			}[];
		}[];
	};
}
