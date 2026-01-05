import { TextInput, TextInputProps, ViewStyle, Pressable } from "react-native"
import { MaterialIcons } from "@expo/vector-icons"
import { useRef, useState } from "react"

import { styles } from "./styles"
import { colors } from "../../theme"

type Props = TextInputProps & {
    icon?: keyof typeof MaterialIcons.glyphMap
    containerStyle?: ViewStyle
}

export function Input({ icon, containerStyle, ...rest}: Props) {
    const [isFocused,setIsFocused] = useState(false)
    
    const inputRef = useRef(null)

    function handleInputFocus() {
        if(!isFocused) {
            setIsFocused(true)
        }
    }

    function handleInputBlur() {
        if(isFocused) {
            setIsFocused(false)
        }
    }

    function handleInputPress() {
        inputRef.current?.focus()
    }

    return (
        <Pressable 
            style={[
                styles.container, 
                containerStyle,
                isFocused && { borderColor: colors.principal["purple-base"]}
            ]}
            onPress={handleInputPress}
        >
            {icon && (
                <MaterialIcons name={icon} size={24} color={isFocused ? colors.principal["purple-base"] : colors.gray[600]}/>
            )}
            <TextInput 
                ref={inputRef}
                onFocus={handleInputFocus}
                onEndEditing={handleInputBlur}
                {...rest}    
            >
            </TextInput>
        </Pressable>
    )
}