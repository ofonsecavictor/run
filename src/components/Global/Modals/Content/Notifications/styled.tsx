import styled from 'styled-components/native';

export const ModalContainer = styled.View`
    width: 100%;
    background-color: transparent;
    border-radius: 10px;
    margin-top: 20px;
`;

export const RowFront = styled.TouchableHighlight`
    background-color: #fff;
    border-bottom-color: #ddd;
    border-bottom-width: 1px;
    justify-content: center;
    padding: 20px;
`;

export const RowContent = styled.View`
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    align-items: center;
`;

export const RowBack = styled.View`
    flex-direction: row;
    align-items: center;
    flex: 1;
    justify-content: space-between;
`;

export const BackButtonLeft = styled.TouchableOpacity`
    background-color: #1f8efa;
    width: 75px;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 75px;
`;

export const BackButtonRight = styled.TouchableOpacity`
    background-color: #dc3545;
    width: 75px;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
`;

export const ArchiveText = styled.Text`
    color: #000;
    font-weight: bold;
`;

export const DeleteText = styled.Text`
    color: #fff;
    font-weight: bold;
`;

export const Title = styled.Text<{ isRead: boolean }>`
    font-weight: ${props => (props.isRead ? 'normal' : 'bold')};
    color: ${props => (props.isRead ? '#777' : '#000')};
`;

export const NotificationMessage = styled.Text`
    font-size: 14px;
    color: #777;
    margin-top: 4px;
`;

export const Content = styled.View`
flex-direction: column;
width: 90%;
`;

export const ModalContainerDetails = styled.Modal`
  flex: 1;
  justify-content: flex-end;
`;

export const ModalBackground = styled.View`
  flex: 1;
  justify-content: flex-end;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const ModalContent = styled.View`
  height: 30%;
  background-color: white;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  padding: 15px;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: center;
`;

export const CloseButton = styled.TouchableOpacity``;

export const ContentSection = styled.View`
  gap: 20px;
`;

export const TextRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const TitleText = styled.Text`
  color: #afafaf;
`;

export const MessageText = styled.Text`
  color: #303030;
`;
