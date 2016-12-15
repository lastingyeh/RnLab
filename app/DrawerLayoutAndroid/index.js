import React, {Component} from 'react';
import {
    View,
    DrawerLayoutAndroid,
    StyleSheet,
    Text
} from 'react-native';

class DrawerLayoutAndroidDemo extends Component {

    render() {
        let navigationView = (
            <View style={styles.container}>
                <Text style={styles.drawerText}>Drawer Sub</Text>
            </View>
        )
        return (
            <DrawerLayoutAndroid drawerWidth={200}
                                 drawerPosition={DrawerLayoutAndroid.positions.Left}
                                 renderNavigationView={() => navigationView}>

                <View style={styles.main}>
                    <Text style={[styles.drawerText, styles.text]}>Hello</Text>
                    <Text style={[styles.drawerText, styles.text]}>Drawer Main</Text>
                </View>

            </DrawerLayoutAndroid>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ff0'
    },
    drawerText: {
        margin: 10,
        fontSize: 15,
        textAlign: 'left'
    },
    text: {
        textAlign: 'right'
    }
});

export default DrawerLayoutAndroidDemo;
