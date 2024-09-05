/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, ImageBackground } from 'react-native';
import * as S from '../styled';
import { useTheme } from '../../../../../../context/themeContext/useTheme';
import { getColorByPercentage, getIconByPercentage } from '../../../../../../utils/Home/functions';


export const ContentButtons = ({ contentButton }: { contentButton: any[] }) => {
    const { theme, isDark } = useTheme();
    return (
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
                        <ImageBackground source={{ uri: button.image }} style={S.ButtonImage}>
                            <S.ButtonText color="white" width="60%">
                                {button.title}
                            </S.ButtonText>
                        </ImageBackground>
                    ) : (
                        <View
                            style={{
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
                            }}
                        >
                            <View
                                style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                }}
                            >
                                <S.ButtonText color={theme.textColor} style={{ fontSize: 32 }}>
                                    {button.content}
                                </S.ButtonText>
                                <S.ButtonText color={theme.textColor} self="center">
                                    {button.title}
                                </S.ButtonText>
                            </View>
                            <View style={{ flexDirection: 'row', alignSelf: 'flex-end' }}>
                                <S.ButtonText
                                    color={getColorByPercentage(button.contentPecentage as string)}
                                    width="30%"
                                    self="flex-end"
                                >
                                    {button.contentPecentage}
                                </S.ButtonText>
                                {getIconByPercentage(button.contentPecentage as string)}
                            </View>
                        </View>
                    )}
                </S.Button>
            ))}
        </S.ButtonsContainer>
    );
};
