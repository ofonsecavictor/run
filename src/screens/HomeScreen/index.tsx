import React from 'react';
import { ImageBackground, View, ViewStyle } from 'react-native';
import * as Global from '../../components/Global';
import * as S from './styled';
import { contentButton, feedBackList, user } from '../../mocks/mocks';
import { FeedbackCard } from '../../components/Home/CardFeedkback';
import { useTheme } from '../../context/themeContext/useTheme';
import Icon from 'react-native-vector-icons/Ionicons';
import { getColorByPercentage, getIconNameByPercentage } from '../../utils/Home/functions';

export function HomeScreen(): React.JSX.Element {
    const { theme, isDark } = useTheme();
    const ButtonFallback: ViewStyle = {
        flex: 1,
        paddingHorizontal: 15,
        justifyContent: 'space-around',
        backgroundColor: theme.backgroundColor,
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
                            height={index === 2 ? '130px' : '160px'}
                            onPress={button.action}
                        >
                            {button.image ? (
                                <ImageBackground
                                    source={{ uri: button.image }}
                                    style={S.ButtonImage}
                                >
                                    <S.ButtonText color="white" width="60%">{button.title}</S.ButtonText>
                                </ImageBackground>
                            ) : (
                                <View style={ButtonFallback}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                        <S.ButtonText color={theme.textColor} size="32px">{button.content}</S.ButtonText>
                                        <S.ButtonText color={theme.textColor} self="center">{button.title}</S.ButtonText>
                                    </View>
                                    <View style={{ flexDirection: 'row', alignSelf: 'flex-end' }}>
                                        <S.ButtonText
                                            color={getColorByPercentage(button.contentPecentage as string)}
                                            width="30%"
                                            self="flex-end"
                                        >
                                            {button.contentPecentage}
                                        </S.ButtonText>
                                        {getIconNameByPercentage(button.contentPecentage as string) && (
                                            <Icon
                                                name={getIconNameByPercentage(button.contentPecentage as string) as string}
                                                size={14}
                                                color={getColorByPercentage(button.contentPecentage as string)}
                                                testID="home-icon"
                                            />
                                        )}
                                    </View>
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
