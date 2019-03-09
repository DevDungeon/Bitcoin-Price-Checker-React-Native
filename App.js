import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            price: 'N/A'
        };
        this.updatePrice = this.updatePrice.bind(this)
    }

    updatePrice() {
        let bitcoinPriceUrl = 'https://api.coindesk.com/v1/bpi/currentprice/BTC.json';
        let newPrice = 'Unavailable.';

        fetch(bitcoinPriceUrl)
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    price: responseJson.bpi.USD.rate
                })
            })
            .catch((error) => {
                console.error(error);
            });
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.price}>Bitcoin price:</Text>
                <Text style={styles.price}>{this.state.price}</Text>
                <Button title="Check price" onPress={this.updatePrice}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    price: {
        fontSize: 48,
    },
    button: {
        fontSize: 48,
    }
});
