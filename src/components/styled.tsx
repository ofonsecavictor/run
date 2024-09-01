import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const ContentContainer = styled.View`
  width: 100%;
  height: 60%;
  position: absolute;
  bottom: -40px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  padding-top: 30px;
  align-items: center;
`;

export const LogoImage = styled.Image`
  margin-bottom: 20px;
`;

export const InputContainer = styled.View`
  width: 100%;
  gap: 10px;
  justify-content: center;
  align-items: center;
`;

export const Input = styled.TextInput`
  height: 40px;
  padding: 10px;
  border-radius: 8px;
  width: 90%;
  border-width: 1px;
  margin-bottom: 10px;
  color: #000;
`;

export const Button = styled.TouchableOpacity<{ backgroundColor: string }>`
  border-radius: 8px;
  align-items: center;
  padding: 20px;
  background-color: ${(props) => props.backgroundColor};
  width: 80%;
`;

export const ButtonText = styled.Text`
  color: white;
`;
