import { StyleSheet } from 'react-native';

const HomeStyle = StyleSheet.create({
    container: {
        backgroundColor: '#1A1D24',
        display: 'flex',
        alignItems: 'center',
        height: '100%',
        width: '100%'
    },
    toolBar: {
        width: '90%',
        height: 40,
        marginTop: 60
    },
    toolbarStack: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        backgroundColor: "#23272E",
        borderRadius: 10,
        padding: 5,
        width: 100,
    },
    imgView: {
        height: 'auto',
        width: 40,
    },
    text: {
        color: '#FFFFFF'
    },
});

export default HomeStyle;
