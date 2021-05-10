import axios from 'axios';
import Endpoints from './Endpoints';

export default {

	/**
	 * Send email.
	 * 
	 * @param text
	 * @returns HTTP status code 200 || 400
	 */
	sendEmail: async function (
		text: string,
	): Promise<string> {
		try {
			return await axios.post(process.env.DOMAIN + Endpoints.email, text);
		} catch (error) {
			throw error;
		}
	},

};