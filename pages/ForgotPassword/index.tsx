import { SvgPage } from "../../components/SvgPage"
import { BottomSide } from "./BottomSide"
import { TopSide } from "./TopSide"

export const ForgotPassword = () => {

	return (
			<SvgPage
				backgroundSvgStyle={{
					top: 4.37
				}}

				topSide={<TopSide />}
				topSideContainerStyle={{
					display: 'flex',
					flex: 1
				}}

				bottomSide={<BottomSide />}
				bottomSideContainerStyle={{
					display: 'flex',
					flex: 1
				}}
			/>
	)
}