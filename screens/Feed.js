import { Text, Image, SafeAreaView } from "react-native";

import BottomTabNavigator from "../components/BottomTabNavigator";

export default  class HomeScreen extends Component {
    constructor(props){
        super(props);
        this.state = {
          fontsLoaded: false
        }
    }
    render(){
        return(
            <View styles = {styles.container}>
                <SafeAreaView style={styles.droidSafeArea}/>
                <View stylesn = {styles.appIcon}>
                    <Image
                         source={require("../assets/logo.png")}
                         style={styles.iconImage}
                    ></Image>
                </View>
                <View style={styles.appTitle}>
                    <View style={styles.appTitleTextContainer}>
                        <Text style={styles.appTitleText}>Lembrando Fórmulas</Text>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#15193c"
    },
    droidSafeArea: {
      marginTop: Platform.OS === "android" ? StatusBar.currentHeight : RFValue(35)
    },
    appTitle: {
      flex: 0.07,
      flexDirection: "row"
    },
    appIcon: {
      flex: 0.3,
      justifyContent: "center",
      alignItems: "center"
    },
    iconImage: {
      width: "100%",
      height: "100%",
      resizeMode: "contain"
    },
    appTitleTextContainer: {
      flex: 0.7,
      justifyContent: "center"
    },
    appTitleText: {
      color: "white",
      fontSize: RFValue(28),
      fontFamily: "Bubblegum-Sans"
    },
    cardContainer: {
      flex: 0.85
    }
});
  