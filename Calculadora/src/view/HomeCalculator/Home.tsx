import { View, Text } from "react-native"
import HomeStyle from "./HomeStyles"
import { ButtonImg } from "../../components/ButtonImg"

export const HomeScreen = () => {
    return (
        <View style={HomeStyle.container}>
            <View style={HomeStyle.toolBar}>
                <View style={HomeStyle.toolbarStack}>
                    <View style={HomeStyle.imgView}>
                        <ButtonImg
                            img={ require('../../../assets/light-icon.png') }
                            onPress={ () => {
                                console.log('press')
                            }}
                            >
                        </ButtonImg>
                    </View>
                    <View style={HomeStyle.imgView}>
                        <ButtonImg
                            img={ require('../../../assets/dark-icon.png') }
                            onPress={ () => {
                                console.log('press')
                            }}
                            >
                        </ButtonImg>
                    </View>
                </View>
            </View>
        </View>
    )
}