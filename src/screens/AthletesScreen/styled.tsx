import styled from 'styled-components/native';

export const AddButtonContainer = styled.View`
    width: 100%;
    align-items: flex-end;
    margin-bottom: 10px;
`;

export const AddButton = styled.TouchableOpacity`
    background-color: red;
    padding: 8px;
    border-radius: 8px;
`;

export const AddButtonText = styled.Text`
    color: white;
`;

export const HeaderContainer = styled.View`
    flex-direction: row;
    justify-content: space-between;
    background-color: lightgrey;
    padding-vertical: 10px;
    padding-horizontal: 15px;
    border-bottom-width: 1px;
    border-bottom-color: #ddd;
`;

export const HeaderText = styled.Text`
    font-weight: bold;
    width: 120px;
    font-size: 12px;
`;

export const ItemContainer = styled.TouchableOpacity`
    flex-direction: row;
    justify-content: space-between;
    padding-vertical: 10px;
    padding-horizontal: 15px;
    border-bottom-width: 1px;
    border-bottom-color: #ddd;
`;

export const ItemText = styled.Text`
    width: 120px;
    font-size: 12px;
`;

export const EmailText = styled.Text`
    font-size: 12px;
    width: 100%;
`;
