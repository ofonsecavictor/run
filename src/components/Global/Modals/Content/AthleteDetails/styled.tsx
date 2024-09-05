import { Image } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const Content = styled.View`
  background-color: #F2F2F2;
  border-radius: 10px;
  padding: 15px;
`;

export const Title = styled.Text`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 16px;
  color: #333333;
`;

export const StyledImage = styled(Image)`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  align-self: center;
  margin-bottom: 20px;
`;

export const Row = styled.View`
  flex-direction: row;
  justify-content: center;
`;

export const ValueText = styled.Text`
  font-size: 14px;
  text-align: center;
  margin-horizontal: 2px;
  color: #333;
`;

export const ButtonContainer = styled.View`
  margin-top: 15px;
`;

export const RedButton = styled.TouchableOpacity`
  background-color: red;
  padding: 10px;
  border-radius: 8px;
  align-self: flex-end;
`;

export const ButtonText = styled.Text`
  color: white;
`;

export const WorkoutButton = styled.TouchableOpacity`
  margin-bottom: 10px;
  margin-horizontal: 5px;
  align-items: center;
`;

export const WorkoutCircle = styled.View`
  background-color: #ab0000;
  width: 80px;
  height: 80px;
  border-radius: 80px;
  justify-content: center;
  align-items: center;
`;

export const WorkoutInitial = styled.Text`
  color: white;
  font-size: 30px;
`;

export const MedalContainer = styled.TouchableOpacity`
  margin-right: 15px;
  align-items: center;
`;

export const MedalImage = styled(Image)`
  width: 80px;
  height: 80px;
  border-radius: 40px;
`;

export const MedalText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  margin-top: 5px;
`;

export const MedalDescription = styled.Text`
  font-size: 12px;
  color: #555;
  text-align: center;
  margin-top: 2px;
  max-width: 160px
`;

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

export const NotificationMessage = styled.Text`
    font-size: 14px;
    color: #777;
    margin-top: 4px;
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
  height: 40%;
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
