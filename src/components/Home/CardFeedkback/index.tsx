import React from 'react';
import * as S from './styled';
import { Feedback } from '../../../mocks/mocks';
import { ChevronRight } from '../../../assets/icons/chevron-right';

interface FeedbackCardProps {
    item: Feedback;
}

export const FeedbackCard: React.FC<FeedbackCardProps> = ({ item }) => {
    return (
        <S.FeedbackItem onPress={() => console.log(item)}>
            <S.FeedbackImage source={{ uri: item.image }} />
            <S.FeedbackTextContainer>
                <S.FeedbackName>{item.name}</S.FeedbackName>
                <S.FeedbackDescription>{item.description}</S.FeedbackDescription>
            </S.FeedbackTextContainer>
            <S.FeedbackIcon>
                <ChevronRight stroke="gray"/>
            </S.FeedbackIcon>
        </S.FeedbackItem>
    );
};
