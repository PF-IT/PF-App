import React from 'react'
import { View, StyleSheet, SafeAreaView, Text, Button } from 'react-native'
import {reloadAsync} from 'expo-updates'
// some stylesheet
// some button component
import { StyleService } from '@ui-kitten/components'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faSadCry, faSmileWink, faExclamationTriangle } from '@fortawesome/free-solid-svg-icons'

export class ErrorBoundary extends React.Component<any, any> {

    state = {
        error: false
    }

    static getDerivedStateFromError(error) {
        return { error: true };
    }

    componentDidCatch(error, errorInfo) {
        // deal with errorInfo if needed
    }

    restartApp = async () => {
        // TODO: Clean key store and other needed resources
        reloadAsync();
    }

    render() {
        if (this.state.error) {
            return (
                <SafeAreaView
                    style={styles.safeAreaView}
                >
                    <View style={styles.container}>
                        <View style={{alignItems: "center"}}>
                            <FontAwesomeIcon size={80} icon={faExclamationTriangle} />
                            <Text style={{ fontSize: 32, marginVertical: 20 }}>Whoopsie</Text>
                        </View>

                        <View>
                            <Text style={{ marginVertical: 10, lineHeight: 23, fontWeight: '500', }}>
                                The app ran into a problem and could not continue.
                            </Text>
                        </View>

                        <View>
                            <Text style={{marginVertical: 10}}>Try using a stable internet connection if you haven't done so already. <FontAwesomeIcon icon={faSmileWink} /> </Text>
                        </View>

                        <View>
                            <Text>We apologize for any inconvenience this has caused! <FontAwesomeIcon icon={faSadCry} /> Press the button below to restart the app. Please get in touch with us if this issue persists.</Text>
                            <Button style={{ margin: 2 }} title='Restart' onPress={() => this.restartApp()}/>
                        </View>

                    </View>
                </SafeAreaView>
            )
        } else {
            return this.props.children;
        }
    }
}

const styles = StyleService.create({
    // safeAreaView: {

    // },
    container: {
        alignItems: "center",
        justifyContent: "center",
        padding: 25,
        paddingTop: 20,
    }
})

export default ErrorBoundary;