import React from 'react';
import { useModal } from '../../../../../context/modalContext';
import * as S from './styled';
import { ChevronDown } from '../../../../../assets/icons';
import { Text, TouchableOpacity, View } from 'react-native';

export function AtheleteDetailsDetails() {
    const { toggleModal, modalContentDetails } = useModal();
    const handleCloseModal = () => {
        toggleModal({
            athleteDetails: {
                isOpen: false,
            },
        });
    };
    console.log('modalContent', modalContentDetails);
    return (
        <S.ModalContainerDetails animationType="slide" visible={true} transparent={true}>
            <S.ModalBackground onTouchStart={handleCloseModal}>
                <S.ModalContent>
                    <S.Header>
                        <S.CloseButton onPress={handleCloseModal}>
                            <ChevronDown />
                        </S.CloseButton>
                    </S.Header>
                    <S.ContentSection>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <TouchableOpacity style={{ borderWidth: 1, borderColor: 'red', padding: 10, borderRadius: 8 }}>
                                <Text style={{ color: 'red' }}>
                                    Sincronizar com Strava
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ backgroundColor: 'red', padding: 8, borderRadius: 8 }}>
                                <Text style={{ color: 'white' }}>
                                    Finalizar
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <S.TextRow>
                            <S.TitleText>
                                {JSON.stringify(modalContentDetails, null, 2)}
                            </S.TitleText>
                        </S.TextRow>
                    </S.ContentSection>
                </S.ModalContent>
            </S.ModalBackground>
        </S.ModalContainerDetails>
    );
}
