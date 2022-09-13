import { View, Text, TextInput, TextInputProps, ViewStyle, StyleProp, KeyboardAvoidingView, Platform } from "react-native"
import { styles } from "./styles";

interface DarkTextInput {
	label: string;
	textInputProps?: TextInputProps;
	textInputStyle?: StyleProp<ViewStyle>;
}

export const DarkTextInput = ({ label, textInputProps, textInputStyle }: DarkTextInput) => {

	return (
		<KeyboardAvoidingView
			behavior={Platform.OS === "ios" ? "padding" : "height"}
		>
			{
				label &&
				<Text style={styles.label}>{label}</Text>
			}
			<View
				style={styles.textInputContainer}>
				<TextInput
					underlineColorAndroid={'transparent'}
					spellCheck={false}
					autoCorrect={false}
					style={[
						styles.textInput,
						textInputStyle,
					]}
					{...textInputProps}
				/>
			</View>
		</KeyboardAvoidingView>
	)
}