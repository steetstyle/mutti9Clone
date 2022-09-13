import { View } from "react-native"

interface PadderProps {
	height?: number;
	width?: number;
}

export const Padder = ({ height, width }: PadderProps) => {

	return (
		<View
			style={{
				width,
				height
			}}
		/>
	)
}