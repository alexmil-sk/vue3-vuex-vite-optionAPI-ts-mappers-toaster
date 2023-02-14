import {
	createStore
} from "vuex";
import NotificationStoreModule from './modules/notifications';

export const store = createStore({
	modules: {
		notifications: NotificationStoreModule
	}
});

