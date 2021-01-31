import { Button, Card, Modal, Text } from '@ui-kitten/components';
import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';

// will check the server if any important message is available and force it on screen.
export const ImportantModal = () => {
    const [visible, setVisible] = React.useState(false); // not visible unless important message was found

    // fetch and check data
    // const query: string = `{
    //     ImportantMessage
    // }`;
    // const { data, error } = useSWR(query, graphql_fetcher);

    // useEffect( () => {
    //     const {token, isError} = getJWT();
    //     if (token) {
    //         console.log(token);
    //         setVisible(true);
    //     }
    // });

    return (
        <View style={styles.container}>
            <Modal
                visible={visible}
                backdropStyle={styles.backdrop}
                onBackdropPress={() => setVisible(false)}>
                <Card disabled={true}>
                    <Text category='p2'>MESSAGE HERE</Text>
                    <Button onPress={() => setVisible(false)}>OKAY</Button>
                </Card>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
    },
    backdrop: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    }
});