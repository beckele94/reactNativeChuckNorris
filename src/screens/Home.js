import {Button, Text, View} from "react-native";

const Home = ({ navigation }) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Button
                title="Chuk Norris Facts"
                onPress={() => navigation.navigate('Chuck')}
            />
            <Button
                title="Log In"
                onPress={() => navigation.navigate('LogIn')}
            />
        </View>
    )
}
export default Home