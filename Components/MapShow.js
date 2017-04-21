import React, {Component} from 'react';
import {
  View,
  Text
} from 'react-native';
import MapView from 'react-native-maps';

export default class MapShow extends Component{
  //
  constructor(props){
    super(props);
    arrayMarkers=[
      {
        latitude: 10.8390746,
        longitude: 106.7268492,
      }
    ];
    this.state={
      region:{
        latitude: 10.8390746,
        longitude: 106.7268492,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      },

      makers:arrayMarkers
    }
  }

  onRegionChange(data){
    this.setState({
      region:{
        latitude: data.latitude,
        longitude: data.longitude,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      }
    })
  }

  onPress(region){
    let latitude = region.nativeEvent.coordinate.latitude;
    let longitude = region.nativeEvent.coordinate.longitude;
    arrayMarkers.push({
      latitude:latitude,
      longitude:longitude,
    });
    this.setState({makers:arrayMarkers})
    // console.log(this.state.makers);
  }

  renderMarkers(){

    maker=[];
    for(makers of this.state.makers){
      maker.push(
        <MapView.Marker
          key = {makers.longitude}
          title = {"o day la " + makers.latitude}
          description = {"sdhjsd"}
          coordinate = {makers}
          image={require('../Images/School.png')}
          />
      )
    }
    return maker
  }

  render(){
    return(
      <View style = {{flex:1}}>
        <MapView
          style={{flex:1}}
          region={this.state.region}
          onRegionChange={this.onRegionChange.bind(this)}
          onPress={this.onPress.bind(this)}
          >
          {this.renderMarkers()}
        </MapView>
      </View>
    );
  }
}
