import { BlurView } from 'expo-blur';
import React, { createContext, useContext, useEffect, useState } from 'react'
import { Dimensions, View } from 'react-native';


interface ModalContextProps {
	isModalOpened: boolean;
	setIsModalOpened: (value: boolean) => void;

	modalComponent: React.ReactNode | null;
	setModalComponent: (value: React.ReactNode | null) => void;

	openModal: () => void;
	closeModal: () => void;
}

export const ModalContext = createContext({} as ModalContextProps)

export const ModalContextProvider = ({ children }: { children: React.ReactNode }) => {
	const [isModalOpened, setIsModalOpened] = useState<boolean>(false)
	const [modalComponent, setModalComponent] = useState< React.ReactNode | null>(null)

	const openModal = () => {
		setModalComponent(true)
	}

	const closeModal = () => {
		setModalComponent(false)
	}

	return (
		<ModalContext.Provider value={{
			isModalOpened,
			setIsModalOpened,

			modalComponent,
			setModalComponent,

			openModal,
			closeModal
		} as unknown as ModalContextProps}>
			{children}
			{!! isModalOpened &&
				<View
					style={{
						position: 'absolute',
						...Dimensions.get('screen'),
						backgroundColor: '#E6535C90',

						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						zIndex: 99,

					}}
				>
					{modalComponent}
				</View>
			}
		</ModalContext.Provider>
	)
}

export const useModal = () => {
	const modalContext = useContext(ModalContext)

	return modalContext
}