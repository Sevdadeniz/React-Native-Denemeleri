import React, {Component } from 'react';
import{
    Text,
    View,
    Image,
    TouchableHeighLight
}from 'react-native';
import { Info} from '../screenNames';

import HeaderComponent from "./HeaderComponent";


const backgroundColor = '#0067a7'

function require( s) {
    return undefined;
}

export default class HomeComponent extends Component{
    static navigationOptions = ( {navigation}) => {
        let drawerLabel = 'Home';
        let drawerIcon = () => (
            <Image
                source = {require ('../icons/home.png')}
                style= {{ width:26, height:26, tintColor:backgroundColor}}
            />

        );

        return {drawerLabel, drawerIcon};
    };
    render(){
        return( <View style={{
            flex: 1,
            flexDirection: 'column',

        }}>
            <HeaderComponent {...this.props} />

            <View style={{
                flex: 1,
                backgroundColor : backgroundColor,
                alignItems: 'center',
                justifyContent: 'center'
            }}>

                <Text style={{ fontWeight: 'bold', fontSize: 22,
                    color: 'white'
                }}>
                    This is home page
                </Text>

                <TouchableHeighLight style={{
                    margin: 20,
                    width: 280,
                    height: 45,
                    backgroundColor: 'darkviolet',
                    padding: 10,
                    alignItems: 'center',
                }}
                                     onPress={() =>{
                                         const { navigate } = this.props.navigation;
                                         navigate(Info);
                                     }}>
                    <Text style={{color: 'white', fontSize: 18}}>
                        Barkod
                    </Text>

                </TouchableHeighLight>



            </View>)



        </View>)
    }
}