import {
	createApp
} from 'vue';
import './style.css';
import App from './App.vue';
import 'remixicon/fonts/remixicon.css';
import {
	store
} from "./store";
import {
	router
} from "./router";

createApp(App)
	.use(router)
	.use(store)
	.mount('#app')
