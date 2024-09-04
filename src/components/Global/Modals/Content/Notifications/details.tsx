import React from 'react';
import { useModal } from '../../../../../context/modalContext';
import * as S from './styled';
import { ChevronDown } from '../../../../../assets/icons';

export function ViewPointsDetails() {
    const { toggleModal, modalContent } = useModal();
    const handleCloseModal = () => {
        toggleModal({
            notificationsDetails: {
                isOpen: false,
            },
        });
    };

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
                        <S.TextRow>
                            <S.TitleText>
                                {modalContent.title}
                            </S.TitleText>
                        </S.TextRow>
                        <S.TextRow>
                            <S.MessageText>
                                {modalContent?.message}
                            </S.MessageText>
                        </S.TextRow>
                    </S.ContentSection>
                </S.ModalContent>
            </S.ModalBackground>
        </S.ModalContainerDetails>
    );
}
