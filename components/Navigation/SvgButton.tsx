import { TouchableOpacity, TouchableOpacityProps } from "react-native"

interface SvgButtonProps extends TouchableOpacityProps {
	svg: React.ReactNode;
}

export const SvgButton = ({ svg, ...props }: SvgButtonProps) => {

	return (
		<TouchableOpacity
			style={[
				{
					width: 30,
					height: 30,
				},
				props.style,
			]}
			{...props}
		>
			{svg}
		</TouchableOpacity>
	)
}