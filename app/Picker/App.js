import React, {Component} from 'react';
import {
    View,
    StyleSheet,
    Picker,
    Text
} from 'react-native';

class PickerDemo extends Component {

    constructor(props) {
        super(props);

        this.state = {
            language: null
        }
    }

    render() {
        let items = [{label: 'Java', value: 'Java'}, {label: 'Javascript', value: 'js'},
            {label: 'C Code', value: 'C'}, {label: 'PHP Develop', value: 'PHP'}];

        return (
            <View style={styles.container}>
                <Text>Picker Demo</Text>

                <Picker selectedValue={this.state.language}
                        onValueChange={(lang) => this.setState({language: lang})}
                        mode='dialog'>
                    {items.map((item, index) =>
                        <Picker.Item key={index} label={item.label} value={item.value}/>
                    )}
                </Picker>

                <Text>Selected Value: {this.state.language}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 30
    },
    pick: {
        color: '#f00'
    }
});

export default PickerDemo;