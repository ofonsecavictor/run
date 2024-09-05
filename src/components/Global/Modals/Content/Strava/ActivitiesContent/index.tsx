import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import { ActivityDetailModal } from './Details';
import { getStravaActivities } from '../../../../../../services/Strava/StravaService';
import * as S from './styled';

export const StravaActivitiesModal = () => {
    const [activies, setActivies] = useState<any[]>([]);
    const [selectedActivity, setSelectedActivity] = useState<any | null>(null);

    const handleActivityPress = (activity: any) => {
        setSelectedActivity(activity);
    };

    const fetchStraveActivies = async () => {
        const stravaActivities = await getStravaActivities();
        if (stravaActivities) {
            setActivies(stravaActivities);
        }
    };

    useEffect(() => {
        fetchStraveActivies();
    }, []);

    return (
        <S.ModalContainer>
            <S.Title>Atividades do Strava</S.Title>
            <FlatList
                data={activies}
                keyExtractor={(item) => item.id.toString()}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => (
                    <S.ActivityItem onPress={() => handleActivityPress(item)}>
                        <S.ActivityName>{item.name}</S.ActivityName>
                        <S.ActivityDetail>Distância: {(item.distance / 1000).toFixed(2)} km</S.ActivityDetail>
                        <S.ActivityDetail>Duração: {(item.moving_time / 60).toFixed(2)} minutos</S.ActivityDetail>
                        <S.ActivityDetail>Data: {new Date(item.start_date).toLocaleDateString()}</S.ActivityDetail>
                    </S.ActivityItem>
                )}
            />
            <ActivityDetailModal
                isVisible={!!selectedActivity}
                onClose={() => setSelectedActivity(null)}
                activity={selectedActivity}
            />
        </S.ModalContainer>
    );
};
