import React from 'react';
import { SwipeListView } from 'react-native-swipe-list-view';
import { TouchableOpacity } from 'react-native';
import {
    ArchiveText,
    BackButtonLeft,
    BackButtonRight,
    Content,
    DeleteText,
    ModalContainer,
    NotificationMessage,
    RowBack,
    RowContent,
    RowFront,
    Title,
} from './styled';
import { useModal } from '../../../../../context/modalContext';

const notifications = [
    { id: '1', title: 'Notificação 1', message: 'Mensagem da notificação 1', isRead: false },
    { id: '2', title: 'Notificação 2', message: 'Mensagem da notificação 2', isRead: true },
    { id: '3', title: 'Notificação 3', message: 'Mensagem da notificação 3', isRead: true },
];

type NotificationItem = {
    id: string;
    title: string;
    message: string;
    isRead: boolean;
};

type RenderItemProps = {
    item: NotificationItem;
    onPress: (id: NotificationItem) => void;
};

const RenderItem: React.FC<RenderItemProps> = ({ item, onPress }) => (
    <RowFront>
        <TouchableOpacity onPress={() => onPress(item)} style={{ flex: 1 }}>
            <RowContent>
                <Content>
                    <Title isRead={item.isRead}>{item.title}</Title>
                    <NotificationMessage>{item.message}</NotificationMessage>
                </Content>
            </RowContent>
        </TouchableOpacity>
    </RowFront>
);

const renderHiddenItem = (data: { item: NotificationItem }, rowMap: any) => (
    <RowBack>
        <BackButtonLeft onPress={() => console.log(data.item.id, data.item.isRead)}>
            <ArchiveText>Arquivar</ArchiveText>
        </BackButtonLeft>
        <BackButtonRight onPress={() => console.log(rowMap, data.item.id)}>
            <DeleteText>Apagar</DeleteText>
        </BackButtonRight>
    </RowBack>
);

export function NotificationsContent() {
    const { toggleModal, setModalContent } = useModal();

    const handleOpenModal = (id: NotificationItem) => {
        toggleModal({
            notificationsDetails: {
                isOpen: true,
            },
        });
        setModalContent(id);
    };

    return (
        <ModalContainer>
            <SwipeListView
                data={notifications}
                renderItem={({ item }) => (
                    <RenderItem item={item} onPress={handleOpenModal} />
                )}
                renderHiddenItem={renderHiddenItem}
                leftOpenValue={75}
                rightOpenValue={-150}
                previewRowKey={'0'}
                previewOpenValue={-40}
                previewOpenDelay={3000}
                onRowDidOpen={(rowKey) => console.log('This row opened', rowKey)}
                keyExtractor={(item) => item.id.toString()}
            />
        </ModalContainer>
    );
}
