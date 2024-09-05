import React from 'react';
import { View, Modal, Button, Text } from 'react-native';
import MapView, { Polyline } from 'react-native-maps';
import polyline from '@mapbox/polyline';

interface ActivityDetailModalProps {
    isVisible: boolean;
    onClose: () => void;
    activity: any;
}

export const decodePolyline = (encoded: string) => {
    return polyline.decode(encoded).map(([latitude, longitude]) => ({
        latitude,
        longitude,
    }));
};

export const ActivityDetailModal = ({ isVisible, onClose, activity }: ActivityDetailModalProps) => (
    <Modal visible={isVisible} transparent={true} animationType="slide">
        <View style={{ flex: 1, justifyContent: 'flex-end', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
            <View style={{ height: '75%', backgroundColor: 'white', borderTopLeftRadius: 20, borderTopRightRadius: 20, padding: 20 }}>
                <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}>Detalhes da Atividade</Text>
                <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Nome: {activity?.name}</Text>
                <Text>Distância: {(activity?.distance / 1000).toFixed(2)} km</Text>
                <Text>Duração: {(activity?.moving_time / 60).toFixed(2)} minutos</Text>
                <Text>Data: {new Date(activity?.start_date).toLocaleDateString()}</Text>
                <Text>Tipo de atividade: {activity?.type}</Text>

                {activity?.map?.summary_polyline && (
                    <MapView
                        style={{ height: '70%', marginVertical: 10 }}
                        initialRegion={{
                            latitude: decodePolyline(activity.map.summary_polyline)[0].latitude,
                            longitude: decodePolyline(activity.map.summary_polyline)[0].longitude,
                            latitudeDelta: 0.01,
                            longitudeDelta: 0.01,
                        }}
                    >
                        <Polyline
                            coordinates={decodePolyline(activity.map.summary_polyline)}
                            strokeWidth={3}
                            strokeColor="red"
                        />
                    </MapView>
                )}

                <Button title="Fechar" onPress={onClose} />
            </View>
        </View>
    </Modal>
);
