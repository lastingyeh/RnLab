import React, {Component, PropTypes} from 'react';
import {
    View,
    Text,
    Image,
    TouchableHighlight,
    StyleSheet
} from 'react-native';

export default class MyScene extends Component {

    constructor(props) {
        super(props);
    }

    static defaultProps = {};

    static propTypes = {
        title: PropTypes.string.isRequired,
        onForward: PropTypes.func.isRequired,
        onBack: PropTypes.func.isRequired
    };

    render() {
        return (
            <View style={styles.container}>
                <Image style={styles.img}
                       source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}>
                    <Text style={styles.title}>
                        Current Scene: {this.props.title}
                    </Text>
                </Image>

                <TouchableHighlight style={styles.next} onPress={this.props.onForward}>
                    <Text >Go Next Page</Text>
                </TouchableHighlight>
                <TouchableHighlight style={styles.back} onPress={this.props.onBack}>
                    <Text >Go Back Page</Text>
                </TouchableHighlight>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        marginTop: 20,
        flex: 1
    },
    img: {
        height: 100
    },
    title: {
        fontSize: 16,
        color: 'white',
        justifyContent: 'center',
        borderBottomColor: '#000'
    },
    next: {
        alignItems: 'flex-start',
        marginTop: 10,
    },
    back: {
        alignItems: 'flex-start',
        marginTop: 10,
    }
});


