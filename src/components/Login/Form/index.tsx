import React from 'react';
import { Text, ViewStyle } from 'react-native';
import { Input, InputContainer, ContentContainer } from '../../styled';
import { ActionButtons } from '../ActionsButtons';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../../routes/routes';
import { Formik } from 'formik';
import { validationLoginSchema } from '../../../utils/validations';

interface InputFieldsProps {
  isDarkMode: boolean;
  contentBackgroundStyle: ViewStyle;
}

export function InputFields({ isDarkMode, contentBackgroundStyle }: InputFieldsProps) {
  const placeholderColor = isDarkMode ? '#333' : '#FFF';
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={validationLoginSchema}
      onSubmit={(values) => {
        console.log(values);
        navigation.navigate('MainTab');
      }}
    >
      {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
        <ContentContainer style={contentBackgroundStyle}>
          <InputContainer>
            <Input
              placeholder="email"
              placeholderTextColor={placeholderColor}
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              keyboardType="email-address"
              value={values.email}
            />
            {touched.email && errors.email && (
              <Text style={{ color: 'red', marginBottom: 10, marginTop: -15 }}>{errors.email}</Text>
            )}
            <Input
              placeholder="senha"
              placeholderTextColor={placeholderColor}
              secureTextEntry
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
            />
            {touched.password && errors.password && (
              <Text style={{ color: 'red', marginBottom: 10, marginTop: -15 }}>{errors.password}</Text>
            )}
          </InputContainer>
          <ActionButtons navigation={navigation} handleSubmit={() => navigation.navigate('MainTab')} />
        </ContentContainer>
      )}
    </Formik>
  );
}
