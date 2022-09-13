import { View, Text } from "react-native"
import { HeadTitle } from "../../../components/HeadTitle"

import { PeopleGroup } from "../Svgs/PeopleGroup"
import { styles } from "./styles"

interface TopSideProps {
}

export const TopSide = ({}: TopSideProps) => {

	return (
		<View style={styles.topSideContainer}>

			<HeadTitle title="Hoşgeldin Hasan" />
			<View style={styles.svgContainer}>
				<PeopleGroup />
			</View>
			<View style={styles.informationBoxContainer}>
				<Text style={styles.informationBoxText}>
					Devam etmek için profil bilgilerini doldurmalısın. Bu bilgiler, yapacağın analizlerde gerekli olacak.
				</Text>
			</View>
		</View>
	)
}