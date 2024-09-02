import React from 'react';
import { ImageBackground, View, ViewStyle } from 'react-native';
import * as Global from '../../components/Global';
import * as S from './styled';
import { contentButton, feedBackList, user } from '../../mocks/mocks';
import { FeedbackCard } from '../../components/Home/CardFeedkback';
import { useTheme } from '../../context/themeContext/useTheme';

export function HomeScreen(): React.JSX.Element {
    const { theme, isDark } = useTheme();
    const ButtonFallback: ViewStyle = {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-start',
        backgroundColor: theme.backgroundColor,
        padding: 10,
        borderRadius: 5,
        shadowColor: !isDark ? '#000' : '#fff',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5,
    };
    return (
        <Global.MainScreenContainer>
            <Global.Header />
            <Global.ContentContainer>
                <S.GreetingText>Olá, {user.firstName} 🏃‍♂️</S.GreetingText>
                <S.ButtonsContainer>
                    {contentButton.map((button, index) => (
                        <S.Button
                            overflow={!!button.image}
                            key={button.id}
                            width={index === 2 ? '100%' : '48%'}
                            onPress={button.action}
                        >
                            {button.image ? (
                                <ImageBackground
                                    source={{ uri: button.image }}
                                    style={S.ButtonImage}
                                >
                                    <S.ButtonText color="white">{button.title}</S.ButtonText>
                                </ImageBackground>
                            ) : (
                                <View style={ButtonFallback}>
                                    <S.ButtonText color={theme.textColor}>{button.title}</S.ButtonText>
                                </View>
                            )}
                        </S.Button>
                    ))}
                </S.ButtonsContainer>
                <S.FeedbackList
                    ItemSeparatorComponent={S.Separator}
                    data={feedBackList}
                    showsVerticalScrollIndicator={false}
                    ListHeaderComponent={<S.ListHeader><S.FeedbackTitle>Feedbacks</S.FeedbackTitle></S.ListHeader>}
                    renderItem={({ item }) => <FeedbackCard item={item} isDark={isDark} />}
                    keyExtractor={(item) => item.id.toString()}
                />
            </Global.ContentContainer>
        </Global.MainScreenContainer>
    );
}
