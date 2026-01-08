import { Alert, Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useContext, useEffect, useState } from "react";

import { colors } from "../../theme";
import { typography } from "../../theme/fontFamily";
import { Input } from "../../components/Input";
import { ButtonCircle } from "../../components/ButtonCircle";
import { Button } from "../../components/Button";
import { ServiceContext } from "../../context/ServiceContext";

export default function Service() {
    const { 
        addService, 
        selectedService, 
        updateService, 
        setSelectedService,
        deleteService
    } = useContext(ServiceContext)

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [value, setValue] = useState("")
    const [quantity, setQuantity] = useState<number>(1)

    useEffect(() => {
        if(selectedService) {
            setTitle(selectedService.title)
            setDescription(selectedService.description)
            setValue(selectedService.value)
            setQuantity(selectedService.quantity)
        } else {
            setTitle("")
            setDescription("")
            setValue("")
            setQuantity(1)
        }
    }
    , [selectedService])

    function handleIncrement() { 
        setQuantity((prev) => prev + 1)
    }

    function handleDecrement() {
        if(quantity > 1) {
            setQuantity((prev) => prev - 1)
        }
    }

    async function handleSave() {
        if(!title.trim()) {
            return Alert.alert("Erro", "Campo de título não fornecido!")
        }
        if(!description.trim()) {
            return Alert.alert("Erro", "Campo de descrição não fornecido!")
        }
        if(!value) {
            return Alert.alert("Erro", "Campo de valor não fornecido!")
        }
        
        const formattedValue = Number(value.replace(",", "."))

        if(isNaN(formattedValue)) {
            return Alert.alert("Erro", "Valor inválido! Use apenas números e vírgula.")
        }

        const newService = {
            id: selectedService?.id || Date.now().toString(),
            title: title,
            description: description,
            value: String(formattedValue),
            quantity: quantity
        }

        try {
            if(selectedService) {
                await updateService(newService)
            } else {
                await addService(newService)
            }
            router.back()
            setSelectedService(null)
        } catch (error) {
            console.log("Erro: ", error)
            Alert.alert("Erro","Não foi possível salvar o serviço!")        }
    }

    function handleDelete() {
        Alert.alert("Remover", "Tem certeza que quer remover o serviço?", [
            { text: 'Sim', onPress: async () => (
                await deleteService(selectedService), 
                setSelectedService(null), 
                router.back()
            )},
            { text: 'Não', style: "cancel"}
        ])
    }

    return (
        <View style={{ flex: 1, backgroundColor:'rgba(0,0,0,0.3)' }}>
            <TouchableWithoutFeedback
                onPress={Keyboard.dismiss}
            >
                <KeyboardAvoidingView
                    style={{ flex: 1}}
                    behavior={Platform.OS === 'ios' ? 'padding' : undefined}
                >
                    <View style={styles.container}>
                        <View style={styles.header}>
                            <Text style={styles.title}>Serviço</Text>
                            <TouchableOpacity 
                                onPress={() => {
                                    router.back()
                                    setSelectedService(null)
                                }}
                            >
                                <MaterialIcons name="close" size={25}/>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.inputs}>
                            <Input 
                                placeholder="Título do serviço"
                                value={title}
                                onChangeText={setTitle}
                            />
                            <Input 
                                variant="sized"
                                placeholder="Descrição do serviço"
                                value={description}
                                onChangeText={setDescription}    
                            />
                            <View style={{ width: "100%", flexDirection: "row", gap: 12}}>
                                <Input 
                                    style={{ width: 220}}
                                    variant= "value"
                                    placeholder="Insira o valor"
                                    value={value}
                                    onChangeText={setValue}
                                    keyboardType="numeric"
                                />
                                <View
                                    style={styles.countView}
                                >
                                    <View style={styles.count}>
                                        <TouchableOpacity
                                            onPress={handleIncrement}
                                        >
                                            <MaterialIcons name="add" size={18} color={colors.principal["purple-base"]}/>
                                        </TouchableOpacity>
                                        <Text>{quantity}</Text>
                                        <TouchableOpacity
                                            onPress={handleDecrement}
                                        >
                                            <MaterialIcons name="remove" size={18} color={colors.principal["purple-base"]}/>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                            
                        </View>

                        <View style={styles.buttons}>
                            {selectedService && (
                                <ButtonCircle 
                                    icon="delete" 
                                    color={colors.feedback["danger-base"]}
                                    onPress={handleDelete}
                                />
                            )}
                            <Button 
                                icon="check"
                                title="Salvar"
                                onPress={handleSave}
                            />
                        </View>
                    </View>
                </KeyboardAvoidingView>
            </TouchableWithoutFeedback>
                
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        backgroundColor: colors.gray[100],
        marginTop: "auto",
        height: 464,
        borderRadius: 15,
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 20,
        borderBottomWidth: 0.2,
        borderBottomColor: colors.gray[400]
    },
    title: {
        color: colors.gray[700],
        ...typography.titleSm
    },
    inputs: {
        padding: 20,
        gap: 12,
    },
    valueInput: {
        flexDirection: "row"
    },
    countView: {
        width: 80,
        height: 48,
        borderWidth: 0.2,
        borderColor: colors.gray[400],
        borderRadius: 15,
        padding: 13
    },
    count: {
        flexDirection: "row",
        justifyContent: "space-around"
    },
    buttons: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: 12,
        paddingVertical: 20,
        borderTopWidth: 0.2,
        borderColor: colors.gray[400]
    }
})