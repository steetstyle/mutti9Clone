import { useEffect } from "react"
import { Text, View } from "react-native"

import { Button } from "../../../components/Button"
import { HeadTitle } from "../../../components/HeadTitle"
import { DarkTextInput } from "../../../components/Inputs/DarkTextInput"
import { Modal } from "../../../components/Modal"
import { Padder } from "../../../components/Padder"
import { useModal } from "../../../contexts/ModalContext"

import { styles } from "./styles"

interface TopSideProps {
}

export const TopSide = ({}: TopSideProps) => {
	const { setIsModalOpened, setModalComponent } = useModal()

	const onPressResetPassword = () => {
		setIsModalOpened(true)
		setModalComponent(
			<Modal title="TEBRİKLER" onClose={() => {
				setIsModalOpened(false)
			}}>

				<Padder height={37} />
				<Text style={styles.mailText}>ayfer@gmail.com</Text>
				<Text style={styles.informationText}>mail adresine şifre sıfırlama e-postası gönderilmiştir.</Text>
				<Padder height={37} />
				<Text style={styles.informationText}>Şifreni sıfırlamak için mailini kontrol et.</Text>
				<Padder height={47} />

			</Modal>
		)
	}

	return (
		<View style={styles.topSideContainer}>
			<HeadTitle
				title="Şifremi Unuttum"
			/>

			<DarkTextInput
				label={'EMAIL'}
			/>

			<Button
				onPress={onPressResetPassword}
				buttonText={"PAROLAMI SIFIRLA"}
			/>
		</View>
	)
}