import React, {Component} from 'react';
import {
    View,
    TouchableHighlight,
    Text,
    LayoutAnimation,
    StyleSheet
} from 'react-native';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {w: 100, h: 100};
        this._onPress = this._onPress.bind(this);
    }

    componentWillMount() {
        LayoutAnimation.spring();
    }

    _onPress() {

        LayoutAnimation.spring();

        this.setState({
            w: this.state.w + 15,
            h: this.state.h + 15
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={[styles.box,{width:this.state.w,height:this.state.h}]}/>
                <TouchableHighlight onPress={this._onPress}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>Press me!</Text>
                    </View>
                </TouchableHighlight>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        flex: 1
    },
    box: {
        alignSelf: 'center',
        backgroundColor: '#ff0000',
        alignItems: 'center',
    },
    button: {
        backgroundColor: 'black',
        width: 100,
        alignSelf: 'center',
        marginTop: 10,
    },
    buttonText: {
        color: 'white',
        textAlign: 'center'
    }
});

export default App


