import React from 'react';
import {
    ProgressViewIOS,
    StyleSheet,
    View
} from 'react-native';

var TimerMixin = require('react-timer-mixin')

var ProgressViewDemo = React.createClass({

    mixins: [TimerMixin],

    getInitialState() {
        return {
            progress: 0,
        };
    },

    propTypes: {},

    componentDidMount() {
        this.updateProgress();
    },
    updateProgress(){

        var progress = this.state.progress + 0.01;

        this.setState({
            progress
        });

        this.requestAnimationFrame(() => this.updateProgress());
    },
    getProgress(offset){
        var progress = this.state.progress + offset;

        console.log('getProgress', Math.sin(progress % Math.PI) % 1);

        return Math.sin(progress % Math.PI) % 1;
    },
    render() {
        return (
            <View style={styles.container}>
                <ProgressViewIOS style={styles.progressView} progress={this.getProgress(0)}/>
                <ProgressViewIOS style={styles.progressView} progress={this.getProgress(0.2)}
                                 progressTintColor='purple'/>
                <ProgressViewIOS style={styles.progressView} progress={this.getProgress(0.4)}
                                 progressTintColor='red'/>
                <ProgressViewIOS style={styles.progressView} progress={this.getProgress(0.6)}
                                 progressTintColor='orange'/>
                <ProgressViewIOS style={styles.progressView} progress={this.getProgress(0.8)}
                                 progressTintColor='yellow'/>
            </View>
        );
    }
});

var styles = StyleSheet.create({
    container: {
        marginTop: -20,
        backgroundColor: 'transparent'
    },
    progressView: {
        marginTop: 20
    }
});

module.exports = ProgressViewDemo;