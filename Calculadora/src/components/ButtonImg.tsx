import React, { ReactNode } from 'react';
import { TouchableOpacity, StyleSheet, View, Image } from 'react-native'

interface Props {
    img: any;
    onPress: () => void;
  children?: ReactNode;
}

export const ButtonImg = ({img, onPress} : Props) => {
    return( 
        <TouchableOpacity onPress={() => onPress()}>
            <View>
                <Image
                    source={img}
                    style={styles.imgButton}
                    />
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create ({
    imgButton: {
        width: 40,
        height: 40
    }
})