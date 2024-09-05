/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import * as Global from '../../components/Global';
import * as S from './styled';
import { contentButton, feedBackList, user } from '../../mocks/mocks';
import { FeedbackCard } from '../../components/Home/CardFeedkback';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { useModal } from '../../context/modalContext';
import { ContentButtons } from '../../components/Global/Modals/Content/Strava/ContentButtons/contentButtons';

export function HomeScreen(): React.JSX.Element {
    const { setKeyModal, toggleModal } = useModal();

    const handleOpenModal = (key: string, keyContent: string) => {
        toggleModal({
            [key]: {
                isOpen: true,
            },
        });
        setKeyModal(keyContent);
    };

    const checkStravaConnection = async () => {
        const token = await AsyncStorage.getItem('strava_access_token');
        if (!token) {
            handleOpenModal('generic', 'stravaAuth');
        }
    };

    useEffect(() => {
        checkStravaConnection();
    }, []);


    return (
        <Global.MainScreenContainer>
            <Global.Header />
            <Global.ContentContainer>
                <S.GreetingText>Olá, {user.firstName} 🏃‍♂️</S.GreetingText>
                <ContentButtons contentButton={contentButton} />
                <S.FeedbackList
                    ItemSeparatorComponent={S.Separator}
                    data={feedBackList}
                    showsVerticalScrollIndicator={false}
                    ListHeaderComponent={
                        <S.ListHeader>
                            <S.FeedbackTitle>Feedbacks</S.FeedbackTitle>
                        </S.ListHeader>
                    }
                    renderItem={({ item }) => <FeedbackCard item={item} />}
                    keyExtractor={(item) => item.id.toString()}
                />
            </Global.ContentContainer>
        </Global.MainScreenContainer>
    );
}
