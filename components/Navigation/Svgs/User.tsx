import Svg, { Path } from 'react-native-svg';
import { BackgroundSvgProps } from '../../SvgPage/Svgs/BackgroundSvg';

export const UserSVG = ({ style }: BackgroundSvgProps) => {

	return (
		<Svg style={[style]} width={26} height={30} viewBox="0 0 26 30" fill="none">
			<Path d="M17.321 14.0531C19.3167 12.6656 20.6255 10.3406 20.6255 7.70625C20.6255 3.45938 17.2003 0 12.9954 0C8.79043 0 5.36523 3.45938 5.36523 7.70625C5.36523 10.3313 6.67404 12.6563 8.66976 14.0531C3.51803 15.3 0 18.7594 0 23.0531V26.1656C0 28.275 1.69868 30 3.7965 30H22.2035C24.292 30 26 28.2844 26 26.1656V23.0531C26 18.75 22.482 15.3 17.3302 14.0531H17.321ZM7.2217 7.70625C7.2217 4.49063 9.81149 1.875 12.9954 1.875C16.1792 1.875 18.769 4.49063 18.769 7.70625C18.769 10.9219 16.1792 13.5375 12.9954 13.5375C9.81149 13.5375 7.2217 10.9219 7.2217 7.70625ZM24.1342 26.1656C24.1342 27.2438 23.2617 28.125 22.1942 28.125H3.78722C2.71974 28.125 1.8472 27.2438 1.8472 26.1656V23.0531C1.8472 18.7687 6.7483 15.9375 12.9954 15.9375C19.2424 15.9375 24.1342 18.7687 24.1342 23.0531V26.1656Z" fill="white"/>
		</Svg>
	)
}