import React from "react";
import {Text, View, TextInput} from "react-native";
import {FONTS, SIZES, COLORS} from "../constants";

const FormInput = ({
    containerStyle,
    label,
    placeholder,
    inputStyle,
    prependComponent,
    appendComponent,
    onChange,
    secureTextEntry,
    keyboardType = "default",
    autoCompleteType = "off",
    autoCapitalize = "none",
    errorMsg = ""
}) => {
    return (
        <View
            style={{
                ...containerStyle
            }}
        >
         {/*Label and Error Msg*/}   
         <View
            style={{
                flexDirection: "row",
                justifyContent: "space-between"
            }}
         >
            <Text
                style={{
                    ...FONTS.body4, color:COLORS.gray
                }}
            >{label}</Text>
            <Text
                style={{
                    ...FONTS.body4, color:COLORS.red
                }}
            >{errorMsg}</Text>
         </View>
         {/*TextInput*/}

         <View
            style={{
                flexDirection: "row",
                height: 55,
                paddingHorizontal: SIZES.padding,
                marginTop: SIZES.base,
                borderRadius: SIZES.radius,
                backgroundColor: COLORS.lightGray1,
            }}
         >
            {prependComponent}

            <TextInput
                style={{
                    flex: 1,
                    ...inputStyle
                }}
                placeholder={placeholder}
                placeholderTextColor={COLORS.gray}
                secureTextEntry={secureTextEntry}
                keyboardType={keyboardType}
                autoCompleteType={autoCompleteType}
                autoCapitalize={autoCapitalize}
                onChangeText={(text) => onChange(text)}
            />
            
            {appendComponent}
         </View>
        </View>
    )
}

export default FormInput;