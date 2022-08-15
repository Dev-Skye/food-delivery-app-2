import React from 'react';
import {View, Text, Image } from 'react-native';
import {COLORS, SIZES, FONTS, icons} from "../../constants";
import {AuthLayout} from "../";
import { TextButton, FormInput } from '../../components';
import { utils } from '../../utils';

const ForgotPassword = ({navigation}) => {

    const [email, setEmail] = React.useState("")
    const [emailError, setEmailError] = React.useState("")
    
    function isEnableSendEmail () {
        return (
            email != "" && emailError == ""
        )
    }

    return (
        <AuthLayout
        title="Password Recovery"
        subtitle="Please enter your email address to recover password."
        titleContainerStyle={{
            marginTop:SIZES.padding * 2
        }}
       >
        {/*FormInput*/}
        <View
            style={{
                flex: 1,
                marginTop: SIZES.padding * 2
            }}
        >
                {/*Form Input*/}
                <FormInput
                    label = "Email"
                    keyboardType='email-address'
                    autoCompleteType='email'
                    onChange={(value) => {
                        utils.validateEmail(value, setEmailError)
                        setEmail(value)
                    }}
                    errorMsg={emailError}
                    appendComponent={
                        <View
                            style={{
                                justifyContent: "center",

                            }}
                        >
                            <Image
                                source={email == "" || (email != "" && emailError == "") ? icons.correct : icons.cancel}
                                style={{
                                    height:20,
                                    width:20,
                                    tintColor: email == "" ? COLORS.gray : (email != "" && emailError == "") ? COLORS.green : COLORS.red

                                }}
                            />
                        </View>
                    }
                />

        </View>
        {/*Button*/}
        <TextButton
            label ="Continue"
            disabled={isEnableSendEmail() ? false : true}
            buttonContainerStyle={{
                height: 55,
                alignItems: "center",
                borderRadius: SIZES.radius,
                backgroundColor: isEnableSendEmail() ? COLORS.primary : COLORS.transparentPrimary
            }}
            onPress={() => navigation.goBack()}
        />
        </AuthLayout>
    )
}

export default ForgotPassword;