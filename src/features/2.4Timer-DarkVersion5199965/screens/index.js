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
      <View style={styles.View_13_160}>
        <View style={styles.View_7_2330} />
        <View style={styles.View_7_2356}>
          <Text style={styles.Text_7_2356}>Quit</Text>
        </View>
        <View style={styles.View_13_159}>
          <View style={styles.View_7_2354}>
            <Text style={styles.Text_7_2354}>Finish</Text>
          </View>
        </View>
        <View style={styles.View_7_2347}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a0d8/f183/2823a5127f4a772160e83ac0201e1261"
            }}
            style={styles.ImageBackground_7_2343}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7d24/b1c1/eebdf4ade4037f3bbd7950ae1f6ccd72"
            }}
            style={styles.ImageBackground_7_2344}
          />
          <View style={styles.View_7_2345}>
            <Text style={styles.Text_7_2345}>32:10</Text>
          </View>
        </View>
        <View style={styles.View_7_2350}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a150/385e/8f4eba570573eee460f23e3b1bacfbc3"
            }}
            style={styles.ImageBackground_7_2351}
          />
          <View style={styles.View_7_2352}>
            <Text style={styles.Text_7_2352}>UI Design</Text>
          </View>
        </View>
        <View style={styles.View_7_2336}>
          <View style={styles.View_7_2337}>
            <Text style={styles.Text_7_2337}>Work</Text>
          </View>
        </View>
        <View style={styles.View_7_2333}>
          <Text style={styles.Text_7_2333}>Rasion Project</Text>
        </View>
        <View style={styles.View_7_2355} />
      </View>
      <View style={styles.View_12_1}>
        <View style={styles.View_7_2273} />
      </View>
      <View style={styles.View_7_2295}>
        <View style={styles.View_I7_2295_5_732} />
        <View style={styles.View_I7_2295_5_733}>
          <View style={styles.View_I7_2295_5_734} />
          <View style={styles.View_I7_2295_5_735}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2a47/9e1a/29a578065fd0802d1eb80bd0c6f6a2c1"
              }}
              style={styles.ImageBackground_I7_2295_5_736}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2efc/5d27/f4dc546f7d01bd97889c6b76b814ca41"
              }}
              style={styles.ImageBackground_I7_2295_5_739}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5403/467c/5afbbc19bd2a11ab7331d78c50100dc8"
            }}
            style={styles.ImageBackground_I7_2295_5_740}
          />
        </View>
        <View style={styles.View_I7_2295_5_741}>
          <View style={styles.View_I7_2295_5_742} />
          <View style={styles.View_I7_2295_5_743} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2c82/44cf/f2fc1b194c59ede34fa0e0eec75f28d6"
            }}
            style={styles.ImageBackground_I7_2295_5_744}
          />
        </View>
        <View style={styles.View_I7_2295_5_748}>
          <View style={styles.View_I7_2295_5_749}>
            <View style={styles.View_I7_2295_5_750} />
            <View style={styles.View_I7_2295_5_751} />
            <View style={styles.View_I7_2295_5_752} />
            <View style={styles.View_I7_2295_5_753} />
          </View>
        </View>
        <View style={styles.View_I7_2295_5_754}>
          <View style={styles.View_I7_2295_5_755}>
            <View style={styles.View_I7_2295_5_756} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5a1a/2aa1/af5a0f1cad64804a927cee340e0a050e"
              }}
              style={styles.ImageBackground_I7_2295_5_757}
            />
          </View>
          <View style={styles.View_I7_2295_5_758}>
            <Text style={styles.Text_I7_2295_5_758}>12:22</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_13_160: {
    width: 375,
    minWidth: 375,
    height: 752,
    minHeight: 752,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 60,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_7_2330: {
    width: 375,
    minWidth: 375,
    height: 752,
    minHeight: 752,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(7, 4, 23, 1)",
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_7_2356: {
    width: 35,
    minWidth: 35,
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 170,
    top: 630
  },
  Text_7_2356: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_13_159: {
    width: 295,
    minWidth: 295,
    height: 60,
    minHeight: 60,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 40,
    top: 546,
    backgroundColor: "rgba(27, 20, 63, 1)",
    overflow: "hidden"
  },
  View_7_2354: {
    width: 53,
    minWidth: 53,
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 121,
    top: 20
  },
  Text_7_2354: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_2347: {
    width: 220.00001525878906,
    minWidth: 220.00001525878906,
    height: 220.00001525878906,
    minHeight: 220.00001525878906,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 77,
    top: 226
  },
  ImageBackground_7_2343: {
    width: 220,
    minWidth: 220,
    height: 220,
    minHeight: 220,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  ImageBackground_7_2344: {
    width: 220.00001525878906,
    minWidth: 220.00001525878906,
    height: 220.00001525878906,
    minHeight: 220.00001525878906,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_7_2345: {
    width: 120,
    minWidth: 120,
    minHeight: 32,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 50,
    top: 94
  },
  Text_7_2345: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 32,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 2,
    textTransform: "none"
  },
  View_7_2350: {
    width: 90,
    minWidth: 90,
    height: 20,
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 24,
    top: 106
  },
  ImageBackground_7_2351: {
    width: 16,
    minWidth: 16,
    height: 16,
    minHeight: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 2
  },
  View_7_2352: {
    width: 62,
    minWidth: 62,
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 28,
    top: 0
  },
  Text_7_2352: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_2336: {
    width: 43,
    minWidth: 43,
    height: 24,
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 308,
    top: 68,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_7_2337: {
    width: 27,
    minWidth: 27,
    minHeight: 14,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 8,
    top: 5
  },
  Text_7_2337: {
    color: "rgba(253, 91, 113, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_2333: {
    width: 169,
    minWidth: 169,
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 24,
    top: 70
  },
  Text_7_2333: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_2355: {
    width: 40,
    minWidth: 40,
    height: 4,
    minHeight: 4,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 167,
    top: 16,
    backgroundColor: "rgba(55, 49, 87, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_12_1: {
    width: 135,
    minWidth: 135,
    height: 5,
    minHeight: 5,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 120,
    top: 799,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_7_2273: {
    flexGrow: 1,
    width: 135,
    height: 5,
    minHeight: 5,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(60, 60, 60, 1)"
  },
  View_7_2295: {
    width: 375,
    minWidth: 375,
    height: 44,
    minHeight: 44,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I7_2295_5_732: {
    flexGrow: 1,
    width: 375,
    height: 44,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_I7_2295_5_733: {
    flexGrow: 1,
    width: 27,
    height: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 334,
    top: 13
  },
  View_I7_2295_5_734: {
    width: 27,
    height: 20,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    backgroundColor: "rgba(250, 62, 62, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I7_2295_5_735: {
    width: 24.25,
    height: 11.5,
    top: 4.5,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 2
  },
  ImageBackground_I7_2295_5_736: {
    width: 22,
    height: 11.5,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  ImageBackground_I7_2295_5_739: {
    width: 1.25,
    height: 4.331089019775391,
    top: 3.33447265625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 23
  },
  ImageBackground_I7_2295_5_740: {
    width: 18,
    height: 7.5,
    top: 6.5,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 4
  },
  View_I7_2295_5_741: {
    flexGrow: 1,
    width: 41,
    height: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 292,
    top: 13
  },
  View_I7_2295_5_742: {
    width: 20,
    height: 20,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    backgroundColor: "rgba(250, 62, 62, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I7_2295_5_743: {
    width: 20,
    height: 20,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 21,
    backgroundColor: "rgba(250, 62, 62, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  ImageBackground_I7_2295_5_744: {
    width: 15,
    height: 10.5,
    top: 4.60498046875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 23.872398376464844
  },
  View_I7_2295_5_748: {
    flexGrow: 1,
    width: 17.25,
    height: 10.5,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 293.5,
    top: 17.75
  },
  View_I7_2295_5_749: {
    width: 17.25,
    height: 10.5,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_I7_2295_5_750: {
    width: 3,
    height: 3.75,
    top: 6.75,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    backgroundColor: "rgba(0, 0, 0, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I7_2295_5_751: {
    width: 3,
    height: 5.75,
    top: 4.75,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 4.75,
    backgroundColor: "rgba(0, 0, 0, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I7_2295_5_752: {
    width: 3,
    height: 8.25,
    top: 2.25,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 9.5,
    backgroundColor: "rgba(0, 0, 0, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I7_2295_5_753: {
    width: 3,
    height: 10.5,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 14.25,
    backgroundColor: "rgba(0, 0, 0, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I7_2295_5_754: {
    flexGrow: 1,
    width: 57,
    height: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 21,
    top: 13,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I7_2295_5_755: {
    width: 16,
    minWidth: 16,
    height: 16,
    minHeight: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 40.5,
    top: 2
  },
  View_I7_2295_5_756: {
    width: 16,
    height: 16,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  ImageBackground_I7_2295_5_757: {
    width: 10.5,
    height: 10.5,
    top: 4,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 2.5
  },
  View_I7_2295_5_758: {
    width: 36,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 2.5,
    top: 0
  },
  Text_I7_2295_5_758: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_2: { height: 812 }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
