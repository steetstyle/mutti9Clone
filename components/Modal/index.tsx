import { Text, View } from "react-native"
import { Button } from "../Button";
import { HeadTitle } from "../HeadTitle";
import { styles } from "./styles";

interface ModalProps {
	title: string;
	children: React.ReactNode;
	closeText?: string;
	modalContainerStyle?: any;
	onClose?: () => void;
}

export const Modal = ({ title, children, closeText, onClose, modalContainerStyle }: ModalProps) => {

	return (
		<View style={[ styles.modalContainer, modalContainerStyle ]}>
			<HeadTitle title={title} color="#0E003E" />
			{children}
			{
				typeof onClose === 'function' &&
				<Button
					fullWidth
					onPress={onClose}
					buttonText={closeText ? closeText : 'KAPAT'}
				/>
			}
		</View>
	)
}