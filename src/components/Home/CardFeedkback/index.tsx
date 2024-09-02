import React from 'react';
import * as S from './styled';
import { Feedback } from '../../../mocks/mocks';

interface FeedbackCardProps {
    item: Feedback;
    isDark: boolean;
}

export const FeedbackCard: React.FC<FeedbackCardProps> = ({ item, isDark }) => {
    return (
        <S.FeedbackItem onPress={() => console.log(item)}>
            <S.FeedbackImage source={{ uri: item.image }} />
            <S.FeedbackTextContainer>
                <S.FeedbackName>{item.name}</S.FeedbackName>
                <S.FeedbackDescription>{item.description}</S.FeedbackDescription>
            </S.FeedbackTextContainer>
            <S.FeedbackIcon name="chevron-right" isDark={isDark} />
        </S.FeedbackItem>
    );
};
