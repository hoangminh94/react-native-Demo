import React, {Component} from 'react';
import {
    View, Text
} from 'react-native';
import MapView from 'react-native-maps';

export default class getCurrentlocation extends Component {

    constructor(props) {
        super(props);
        this.state = {
            region: {
                latitude: 10.8390746,
                longitude: 106.7268492,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01,
            },
            marker: {
                latitude: 10.8390746,
                longitude: 106.7268492,
            }
        }
    }

    componentWillMount() {
        navigator.geolocation.getCurrentPosition((position) => {
                this.setState({
                    region: {
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude,
                        latitudeDelta: 0.01,
                        longitudeDelta: 0.01,
                    },
                    marker: {
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude,
                    }}
                )
            },
            (error) => alert(JSON.stringify(error)),
            {enableHighAccuracy: true, timeout: 10000, maximumAge: 1000})
    }


    render() {
        return (
            <View style={{flex: 1}}>
                <MapView
                    style={{flex: 1}}
                    initialRegion={this.state.region}
                >
                    <MapView.Marker
                        coordinate={this.state.marker}
                    />
                </MapView>
            </View>
        );
    }
}
