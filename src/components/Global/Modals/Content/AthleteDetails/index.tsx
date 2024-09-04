import React from 'react';
import { useModal } from '../../../../../context/modalContext';
import * as S from './styled';
import { ScrollView, TouchableOpacity, View } from 'react-native';
import { Medal, medals, runningWorkouts } from '../../../../../mocks/mocks';
import { Text } from 'react-native';

interface ModalContent {
    firstName?: string;
    lastName?: string;
    email?: string;
    phone?: string;
    image?: string;
    medals?: Medal[];
    [key: string]: any;
}

export function AthleteDetails() {
    const { modalContent }: { modalContent: ModalContent } = useModal();
    const noImage = 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/300px-No_image_available.svg.png';
    const entries = modalContent && typeof modalContent === 'object'
        ? Object.entries(modalContent).filter(([key]) => key !== 'id' && key !== 'image')
        : [];

    const firstName = entries.find(([key]) => key === 'firstName');
    const lastName = entries.find(([key]) => key === 'lastName');

    const email = entries.find(([key]) => key === 'email');
    const phone = entries.find(([key]) => key === 'phone');

    return (
        <S.Container>
            <S.Title>Detalhes do Atleta</S.Title>
            <S.Content>
                {modalContent?.image ? (
                    <S.StyledImage
                        source={{ uri: modalContent.image }}
                        resizeMode="cover"
                    />
                ) : (
                    <S.StyledImage
                        source={{ uri: noImage }}
                        resizeMode="cover"
                    />
                )}
                {firstName && lastName && (
                    <S.Row>
                        <S.ValueText>{firstName[1]}</S.ValueText>
                        <S.ValueText>{lastName[1]}</S.ValueText>
                    </S.Row>
                )}
                {email && (
                    <S.ValueText>{email[1]}</S.ValueText>
                )}
                {phone && (
                    <S.ValueText>{phone[1]}</S.ValueText>
                )}
            </S.Content>

            <S.ButtonContainer>
                <S.RedButton onPress={() => console.log('ADICIONAR TREINO')}>
                    <S.ButtonText>Adicionar treino</S.ButtonText>
                </S.RedButton>
            </S.ButtonContainer>

            <S.Title>Treinos de Corrida</S.Title>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {runningWorkouts.map((workout, index) => (
                    <S.WorkoutButton key={index} onPress={() => console.log(workout)}>
                        <S.WorkoutCircle>
                            <S.WorkoutInitial>{workout.day.charAt(0)}</S.WorkoutInitial>
                        </S.WorkoutCircle>
                        <S.ValueText>{workout.day}</S.ValueText>
                    </S.WorkoutButton>
                ))}
            </ScrollView>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <S.Title>Medalhas Conquistadas</S.Title>
                <TouchableOpacity onPress={() => console.log('clicou em ver mais')}>
                    <Text style={{ fontSize: 16, marginTop: -16, textDecorationLine: 'underline', color: 'gray' }}>Ver mais</Text>
                </TouchableOpacity>
            </View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {medals.map((medal, index) => (
                    <S.MedalContainer key={index} onPress={() => console.log('medal', medal)}>
                        <S.MedalImage source={{ uri: medal.image }} resizeMode="cover" />
                        <S.MedalText>{medal.name}</S.MedalText>
                        <S.MedalDescription>{medal.description}</S.MedalDescription>
                    </S.MedalContainer>
                ))}
            </ScrollView>
        </S.Container>
    );
}
