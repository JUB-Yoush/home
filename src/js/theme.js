import { writable } from "svelte/store";
   export const flavorRef = [
		{ name: 'plain', bg_color: '#e5d6cc', text_color: '#171717', link_color: '#878f8f' },

		{ name: 'mint', bg_color: '#e6f7ff', text_color: '#3b3350', link_color: '#66b7b0' },

		{ name: 'strawberry', bg_color: '#ffcde6', text_color: '#422549', link_color: '#f179a0' },

		{ name: 'banana', bg_color: '#fffeb8', text_color: '#493351', link_color: '#e9c46a' },

		{ name: 'peanut', bg_color: '#fddebc', text_color: '#411e2c', link_color: '#a97766' },

		{ name: 'grape', bg_color: '#e7d4f6', text_color: '#2c0d2c', link_color: '#878f8f' },

		{ name: 'melon', bg_color: '#dff5de', text_color: '#0d142c', link_color: '#878f8f' }
	];

export const theme_index_store = writable(0);