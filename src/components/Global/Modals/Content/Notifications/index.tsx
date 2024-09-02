import React from 'react';
import { SwipeListView } from 'react-native-swipe-list-view';
import { TouchableHighlight } from 'react-native';
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

const notifications = [
    { id: '1', title: 'Notificação 1', message: 'Mensagem da notificação 1' },
    { id: '2', title: 'Notificação 2', message: 'Mensagem da notificação 2' },
    { id: '3', title: 'Notificação 3', message: 'Mensagem da notificação 3' },
];

const renderItem = (data: any) => (
    <TouchableHighlight
        onPress={() => console.log(data)}
        underlayColor={'#AAA'}
    >
        <RowFront>
            <RowContent>
                <Content>
                    <Title isRead={data.item.isRead}>{data.item.title}</Title>
                    <NotificationMessage>{data.item.message}</NotificationMessage>
                </Content>
            </RowContent>
        </RowFront>
    </TouchableHighlight>
);

const renderHiddenItem = (data: any, rowMap: any) => (
    <RowBack>
        <BackButtonLeft
            onPress={() => console.log(data.item.id, data.item.isRead)}
        >
            <ArchiveText>Arquivar</ArchiveText>
        </BackButtonLeft>
        <BackButtonRight
            onPress={() => console.log(rowMap, data.item.id)}
        >
            <DeleteText>Apagar</DeleteText>
        </BackButtonRight>
    </RowBack>
);

export function NotificationsContent() {
    return (
        <ModalContainer>
            <SwipeListView
                data={notifications}
                renderItem={renderItem}
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
