import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import DateTimePicker from "react-native-datepicker"
import Icon from "react-native-vector-icons/FontAwesome"
import Slider from "@react-native-community/slider"
import { CheckBox } from "react-native-elements"
import { SlideMenuIcon } from "../../../navigator/slideMenuIcon"
import { connect } from "react-redux"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  static navigationOptions = ({ navigation }) => {
    return { headerLeft: <SlideMenuIcon navigationProps={navigation} /> }
  }
  render = () => (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.View_15_2}>
        <Text style={styles.Text_15_2}>
          ✌🏻 Follow me on Instagram — instagram.com/rizki.design
        </Text>
      </View>
      <View style={styles.View_16_678}>
        <Text style={styles.Text_16_678}>
          🏀 Follow me on Dribbble — dribbble.com/mulyawan
        </Text>
      </View>
      <View style={styles.View_16_677}>
        <Text style={styles.Text_16_677}>
          🔤 Get the Rubik font — fonts.google.com/specimen/Rubik{" "}
        </Text>
      </View>
      <View style={styles.View_15_5}>
        <Text style={styles.Text_15_5}>
          This is timepad, a small Time Tracker App UI Kit totally free, I hope
          it&#39;s helpful. Follow me on Dribbble for more. Thank you for your
          support 😊 ✌🏻
        </Text>
      </View>
      <View style={styles.View_15_6}>
        <Text style={styles.Text_15_6}>by Rizki Mulyawan</Text>
      </View>
      <View style={styles.View_15_3}>
        <Text style={styles.Text_15_3}>timepad - Time Tracker App</Text>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_15_2: {
    width: 450,
    minWidth: 450,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 730,
    top: 224
  },
  Text_15_2: {
    color: "rgba(144, 148, 156, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_16_678: {
    width: 450,
    minWidth: 450,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 730,
    top: 264
  },
  Text_16_678: {
    color: "rgba(144, 148, 156, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_16_677: {
    width: 450,
    minWidth: 450,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 730,
    top: 184
  },
  Text_16_677: {
    color: "rgba(144, 148, 156, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_15_5: {
    width: 510,
    minWidth: 510,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 120,
    top: 184
  },
  Text_15_5: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_15_6: {
    width: 510,
    minWidth: 510,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 120,
    top: 140
  },
  Text_15_6: {
    color: "rgba(144, 148, 156, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_15_3: {
    width: 510,
    minWidth: 510,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 120,
    top: 80
  },
  Text_15_3: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 29,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2: { height: 364 }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
