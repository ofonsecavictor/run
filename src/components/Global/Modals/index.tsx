import React from 'react';
import { Modal as RNModal, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useModal } from '../../../context/modalContext';
import { NotificationsContent } from './Content';
import { ViewPointsDetails } from './Content/Notifications/details';
import { AthleteDetails } from './Content/AthleteDetails';
import { AtheleteDetailsDetails } from './Content/AthleteDetails/details';
import { StravaAuthModal } from './Content/Strava/AuthModalContent/stravaAuthModal';
import { StravaActivitiesModal } from './Content/Strava/ActivitiesContent';


export const GenericModal: React.FC = () => {
    const { toggleModal, keyModal, setModalContent, modal } = useModal();

    const handleCloseModal = () => {
        toggleModal({ generic: { isOpen: false } });
        setModalContent(null);
    };

    const modalContent = {
        notifications: <NotificationsContent />,
        atlheteDetails: <AthleteDetails />,
        stravaAuth: <StravaAuthModal />,
        straveActivities: <StravaActivitiesModal />,

    }[keyModal];

    return (
        <RNModal
            visible={true}
            animationType="slide"
            presentationStyle="formSheet"
            onRequestClose={handleCloseModal}
        >
            <View style={styles.modalContent}>
                <TouchableOpacity style={styles.closeButton} onPress={handleCloseModal}>
                    <Text style={styles.closeButtonText}>×</Text>
                </TouchableOpacity>
                <View style={styles.content}>
                    {modalContent}
                </View>
            </View>
            {modal?.notificationsDetails?.isOpen &&
                <ViewPointsDetails />
            }
            {modal?.athleteDetails?.isOpen &&
                <AtheleteDetailsDetails />
            }
        </RNModal>
    );
};

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        flex: 1,
        width: '100%',
        borderRadius: 10,
        padding: 15,
    },
    closeButton: {
        position: 'absolute',
        top: 10,
        right: 20,
        zIndex: 999,
    },
    closeButtonText: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    content: {
        flex: 1,
    },
});
