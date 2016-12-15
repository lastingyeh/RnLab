import React, {Component} from 'react';
import {
    View,
    ViewPagerAndroid,
    Text,
    StyleSheet
} from 'react-native';

class ViewPagerAndroidDemo extends Component {

    constructor(props) {
        super(props);

    }

    static defaultProps = {};

    static propTypes = {};

    render() {
        return (
            <ViewPagerAndroid initialPage={0} style={styles.container}>
                <View style={styles.main}><Text style={{fontSize: 12, color: 'yellow'}}>Page 1</Text></View>
                <View style={styles.main}><Text style={{fontSize: 20, color: 'blue'}}>Page 2</Text></View>
                <View style={styles.main}><Text>Page 3</Text></View>
            </ViewPagerAndroid>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: 200,
        borderColor: 'red',
        flexDirection: 'column',
        borderBottomWidth: 2

    },
    main: {
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default ViewPagerAndroidDemo;