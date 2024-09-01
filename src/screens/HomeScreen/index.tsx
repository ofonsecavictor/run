import React from 'react';
import * as Global from '../../components/Global';
import * as S from './styled';

export function HomeScreen(): React.JSX.Element {
    const user = { firstName: 'Victor', lastName: 'Fonseca' };

    const contentButton = [
        { id: 1, title: 'ITEM 1', action: () => console.log('ITEM 1') },
        { id: 2, title: 'ITEM 2', action: () => console.log('ITEM 2') },
        { id: 3, title: 'ITEM 3', action: () => console.log('ITEM 3') },
        { id: 4, title: 'ITEM 4', action: () => console.log('ITEM 4') },
    ];

    return (
        <Global.MainScreenContainer>
            <Global.Header />
            <Global.ContentContainer>
                <S.GreetingText>Olá, {user.firstName}</S.GreetingText>
                <S.ButtonsContainer>
                    {contentButton.map((button) => {
                        return (
                            <S.CustomButton key={button.id} onPress={button.action}>
                                <S.ButtonText>{button.title}</S.ButtonText>
                            </S.CustomButton>
                        );
                    })}
                </S.ButtonsContainer>
            </Global.ContentContainer>
        </Global.MainScreenContainer>
    );
}
