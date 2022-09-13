import { TouchableOpacity, Text } from "react-native"
import { styles } from "./styles";

interface ButtonProps {
	onPress?: () => void;
	fullWidth?: boolean;
	style?: any;
	buttonText: string;
}

export const Button = ({ onPress, buttonText, style, fullWidth }: ButtonProps) => {

	return (
		<TouchableOpacity onPress={onPress} style={[
			styles.buttonContainer,
			style,
			(fullWidth ? { width: '100%' } : {})
		]}>
			<Text style={styles.buttonText}>{buttonText}</Text>
		</TouchableOpacity>
	)
}