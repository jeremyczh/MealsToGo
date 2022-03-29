import React, { useContext, useState } from "react";

import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";

import {
  AccountBackground,
  AccountCover,
  AccountContainer,
  AuthButton,
  AuthInput,
} from "../components/account.styles";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";

export const LoginScreen = ({ navigation }) => {
  const { onLogin, error } = useContext(AuthenticationContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <AccountBackground>
      <AccountCover />
      <AccountContainer>
        <AuthInput
          label="E-mail"
          value={email}
          textContentType="emailAddress"
          keyboardType="email-address"
          autoCapitalize="none"
          onChangeText={(emailIn) => setEmail(emailIn)}
        />
        <Spacer size="medium" />
        <AuthInput
          label="Password"
          value={password}
          textContentType="password"
          secureTextEntry
          secure
          autoCapitalize="none"
          onChangeText={(passwordIn) => setPassword(passwordIn)}
        />
        {error && <Text variant="error">{error}</Text>}
        <Spacer size="large" />
        <AuthButton
          icon="lock-open-outline"
          mode="contained"
          onPress={() => onLogin(email, password)}
        >
          Login
        </AuthButton>
      </AccountContainer>
    </AccountBackground>
  );
};
