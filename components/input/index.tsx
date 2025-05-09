import { TextInput, TextInputProps } from "react-native";
import { styles } from "../input/style";

export function Input({...rest}: TextInputProps){
    return <TextInput style={styles.input} {...rest}/>
}