import { useState, createContext } from 'react';

const Notification = ({ severity, message }) => {
	const notificationStyles = {
		position: 'absolute',
		top: 100,
		right: 10,
		width: 'auto',
		height: 'auto',
		backgroundColor: severity === 'success' ? 'green' : 'red',
		color: 'white',
		padding: '10px 20px 10px 20px'
	};

	if (message === '') {
		return;
	}

	return <div style={notificationStyles}>{message}</div>;
};

export const NotificationContext = createContext();

export const NotificationProvider = ({ children }) => {
	const [severity, setSeverity] = useState('success');
	const [message, setMessage] = useState('');

	const setNotification = (severity, message) => {
		setSeverity(severity);
		setMessage(message);

		setTimeout(() => {
			setMessage('');
		}, 1500);
	};

	return (
		<NotificationContext.Provider value={{ setNotification }}>
			<Notification severity={severity} message={message} />
			{children}
		</NotificationContext.Provider>
	);
};
