import { StyleSheet, View } from 'react-native';
import { Navigation } from './components/Navigation';
import { ModalContextProvider } from './contexts/ModalContext';

export default function App() {
	return (
		<View style={styles.container}>
			<Navigation />
		</View>
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
