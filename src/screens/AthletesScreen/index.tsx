/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, FlatList, ScrollView } from 'react-native';
import * as S from './styled';
import * as Global from '../../components/Global';
// import { useTheme } from '../../context/themeContext/useTheme';
import { Athlete, AthletesArray } from '../../mocks/mocks';
import { useModal } from '../../context/modalContext';

interface RenderItemProps {
    item: Athlete;
    onPress: () => void;
}

const RenderItem = ({ item, onPress }: RenderItemProps) => (
    <S.ItemContainer onPress={onPress}>
        <S.ItemText>{item.firstName}</S.ItemText>
        <S.ItemText>{item.lastName}</S.ItemText>
        <S.ItemText>{item.phone}</S.ItemText>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <S.EmailText>{item.email}</S.EmailText>
        </ScrollView>
    </S.ItemContainer>
);

export function AthletesScreen() {
    // const { theme } = useTheme();
    const { toggleModal, setKeyModal, setModalContent } = useModal();

    const handleOpenModal = (key: string, content: any) => {
        toggleModal({
            [key]: {
                isOpen: true,
            },
        });
        setKeyModal('atlheteDetails');
        setModalContent(content);
    };

    return (
        <Global.MainScreenContainer>
            <Global.Header />
            <Global.ContentContainer>

                <S.AddButtonContainer>
                    <S.AddButton onPress={() => console.log('AAAAA')}>
                        <S.AddButtonText>+ Adicionar Atleta</S.AddButtonText>
                    </S.AddButton>
                </S.AddButtonContainer>

                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <View>
                        <S.HeaderContainer>
                            <S.HeaderText>Nome</S.HeaderText>
                            <S.HeaderText>Sobrenome</S.HeaderText>
                            <S.HeaderText>Telefone</S.HeaderText>
                            <S.HeaderText>Email</S.HeaderText>
                        </S.HeaderContainer>

                        <FlatList
                            data={AthletesArray}
                            renderItem={({ item }) => (
                                <RenderItem
                                    item={item}
                                    onPress={() => handleOpenModal('generic', item)}
                                />
                            )}
                            keyExtractor={(item) => item.id.toString()}
                            horizontal={false}
                            showsVerticalScrollIndicator={false}
                            contentContainerStyle={{ flexDirection: 'column' }}
                        />
                    </View>
                </ScrollView>

            </Global.ContentContainer>
        </Global.MainScreenContainer>
    );
}
