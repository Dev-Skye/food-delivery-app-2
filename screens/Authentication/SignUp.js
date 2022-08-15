import React from 'react';
import {
    View, Text, TouchableOpacity, Image
} from 'react-native';
import {AuthLayout} from "../"
import {FONTS, COLORS, SIZES, icons} from "../../constants"
import {TextButton, FormInput, TextIconButton} from "../../components"
import {utils} from "../../utils"

const SignUp = ({navigation}) => {
    const [email, setEmail] = React.useState("")
    const [userName, setUserName] = React.useState("")
    const [password, setPassword] = React.useState("")
    const [showPass, setShowPass] = React.useState(false)
    const [emailError, setEmailError] = React.useState("")
    const [userNameError, setUserNameError] = React.useState("")
    const [passwordError, setPasswordError] = React.useState("")


    function isEnabledSignUp() {
        return email != "" && userName != "" && password != "" && emailError == "" 
        && passwordError == "" && userNameError == ""
    }
    return (
        <AuthLayout
            title="Getting Started"
            subtitle="Create an account to continue"
            titleContainerStyle={{
                marginTop: SIZES.radius
            }}
        >
            {/*Form Input & Sign Up*/}
            <View
                style={{
                    flex: 1,
                    marginTop: SIZES.padding
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
                <FormInput
                    label="UserName"
                    containerStyle={{
                        marginTop: SIZES.radius
                    }}
                    onChange={(value) => {
                        setUserName(value)
                    }}
                    errorMsg={userNameError}
                    appendComponent={
                        <View
                            style={{
                                justifyContent: "center",
                            }}
                        >
                            <Image
                                source={userName == "" || (userName != "" && userNameError == "") ? icons.correct : icons.cancel}
                                style={{
                                    height: 20,
                                    width: 20,
                                    tintColor: userName == "" ? COLORS.gray : (userName != "" && userNameError == "") ? COLORS.green : COLORS.red
                                }}
                            />
                            
                        </View>
                    }
                />
                <FormInput
                    label = "Password"
                    secureTextEntry={!showPass}
                    autoCompleteType="password"
                    containerStyle={{
                        marginTop: SIZES.radius
                    }}
                    onChange={(value) => {
                        utils.validatePassword(value, setPasswordError)
                        setPassword(value)
                    }}
                    errorMsg={passwordError}                   
                    appendComponent={
                        <TouchableOpacity
                            style={{
                                width: 40,
                                alignItems: "flex-end",
                                justifyContent: "center",
                            }}
                            onPress={() => setShowPass(!showPass)}
                        >
                            <Image
                                source={showPass ? icons.eye_close : icons.eye}
                                style={{
                                    height: 20,
                                    width: 20,
                                    tintColor: COLORS.gray
                                }}
                            />
                        </TouchableOpacity>
                    }
                />
                {/*Sign In and SignUp*/}
                <TextButton
                    label="Sign Up"
                    disabled={isEnabledSignUp() ? false : true}
                    buttonContainerStyle={{
                        height: 55,
                        alignItems: "center", 
                        marginTop: SIZES.padding,
                        borderRadius: SIZES.radius,
                        backgroundColor: isEnabledSignUp() ? COLORS.primary : COLORS.transparentPrimary,
                    }}
                    onPress={() => navigation.navigate("Otp")}
                />
                {/*Sign Up*/}
                <View
                    style={{
                        flexDirection:"row",
                        marginTop: SIZES.radius,
                        justifyContent: "center"
                    }}
                >
                    <Text
                        style={{
                            color: COLORS.darkGray,
                            ...FONTS.body3
                        }}
                    >Already have an account?</Text>
                    <TextButton
                        label="Sign In"
                        buttonContainerStyle={{
                            backgroundColor: null,
                            marginLeft: 3
                        }}
                        labelStyle={{
                            color: COLORS.primary,
                            ...FONTS.h3
                        }}
                        onPress={() => navigation.navigate("SignIn")}
                    />
                </View>

                
            </View>

            {/*Footer*/}
                        {/*Footer*/}
            <View>
                {/*Facebook*/}
                <TextIconButton
                    containerStyle={{
                        height: 50,
                        alignItems: "center",
                        borderRadius: SIZES.radius,
                        backgroundColor: COLORS.blue,
                    }}  
                    icon={icons.fb}
                    iconPosition="LEFT"
                    iconStyle={{
                        tintColor: COLORS.white
                    }}
                    label="Continue With Facebook"
                    labelStyle={{
                        marginLeft: SIZES.radius,
                        color: COLORS.white
                    }}
                    onPress={() => console.log("FB")}
                />

                {/*Google*/}
                <TextIconButton
                    containerStyle={{
                        height: 50,
                        alignItems: "center",
                        borderRadius: SIZES.radius,
                        backgroundColor: COLORS.lightGray2,
                    }}  
                    icon={icons.google}
                    iconPosition="LEFT"
                    iconStyle={{
                        tintColor: null
                    }}
                    label="Continue with Google"
                    labelStyle={{
                        marginLeft: SIZES.radius,
                    }}
                    onPress={() => console.log("FB")}
                />

            </View>
        </AuthLayout>
    )
}

export default SignUp;