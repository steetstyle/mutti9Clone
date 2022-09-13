import { Text } from "react-native"
import { styles } from "./styles"

interface HeadTitleProps {
	style?: any;
	color?: string;
	title: string;
}

export const HeadTitle = ({ title, style, color }: HeadTitleProps) => {

	return (
		<Text style={[ styles.text, style, (color ? { color } : {}) ]}>
			{title}
		</Text>
	)
}