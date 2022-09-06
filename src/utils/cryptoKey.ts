import { SHA256, HmacSHA512 } from 'crypto-js';

export default class CryptoKey {
	/**
	 *
	 * @param key
	 * @returns
	 */
	static getSHA256From(key: string): string {
		return SHA256(key).toString();
	}

	/**
	 *
	 * @param key
	 * @param secret_key
	 * @returns
	 */

	static getSHA512From(key: string, secret_key: string): string {
		return HmacSHA512(key, secret_key).toString();
	}
}
