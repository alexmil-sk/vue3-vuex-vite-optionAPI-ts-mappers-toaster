import { INotificationStoreState, Notification, CreateNotification } from "../../typings/store/states/NotificationStoreState";


export default {
	stopBodyOverflow: (_: null) => {
		return document && document.body.classList.add(...["hide-overflow"]);
	},
	allowBodyOverflow: (_: null) => {
		return document && document.body.classList.remove(...["hide-overflow"]);
	},
}

