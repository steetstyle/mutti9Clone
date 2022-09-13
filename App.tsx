import { StyleSheet, View } from 'react-native';
import { ModalContextProvider } from './contexts/ModalContext';
import { ForgotPassword } from './pages/ForgotPassword';
import { Welcome } from './pages/Welcome';

export default function App() {
	return (
		<ModalContextProvider>
			<View style={styles.container}>
				<Welcome />
			</View>
		</ModalContextProvider>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
