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
      <View style={styles.View_19_323}>
        <View style={styles.View_19_324}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6fd1/e12f/9ac0c380b4d6b0199b4ce2344fbddc9b"
            }}
            style={styles.ImageBackground_19_325}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/16f1/c560/aa34c4c7e98a49eaf6eca88b1a07c1e5"
            }}
            style={styles.ImageBackground_19_326}
          />
        </View>
        <View style={styles.View_19_328}>
          <Text style={styles.Text_19_328}>Quit</Text>
        </View>
      </View>
      <View style={styles.View_19_329}>
        <View style={styles.View_19_330}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6fd1/e12f/9ac0c380b4d6b0199b4ce2344fbddc9b"
            }}
            style={styles.ImageBackground_19_331}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/03b1/4d86/e86919bb1fbcb4ee8f09488984974e39"
            }}
            style={styles.ImageBackground_19_332}
          />
        </View>
        <View style={styles.View_19_335}>
          <Text style={styles.Text_19_335}>Pause</Text>
        </View>
      </View>
      <View style={styles.View_19_336}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4166/3574/808cef40f7bfaf4ccbe6a94f5aa48fdc"
          }}
          style={styles.ImageBackground_19_337}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7d24/b1c1/eebdf4ade4037f3bbd7950ae1f6ccd72"
          }}
          style={styles.ImageBackground_19_338}
        />
        <View style={styles.View_19_339}>
          <Text style={styles.Text_19_339}>32:10</Text>
        </View>
      </View>
      <View style={styles.View_19_340}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a150/385e/8f4eba570573eee460f23e3b1bacfbc3"
          }}
          style={styles.ImageBackground_19_341}
        />
        <View style={styles.View_19_342}>
          <Text style={styles.Text_19_342}>UI Design</Text>
        </View>
      </View>
      <View style={styles.View_19_343}>
        <View style={styles.View_19_344}>
          <Text style={styles.Text_19_344}>Work</Text>
        </View>
      </View>
      <View style={styles.View_19_345}>
        <Text style={styles.Text_19_345}>Rasion Project</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a11b/4579/f0783664fc360cd01b126ea6af71f7bc"
        }}
        style={styles.ImageBackground_19_346}
      />
      <View style={styles.View_19_377}>
        <View style={styles.View_I19_377_5_732} />
        <View style={styles.View_I19_377_5_733}>
          <View style={styles.View_I19_377_5_734} />
          <View style={styles.View_I19_377_5_735}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2a47/9e1a/29a578065fd0802d1eb80bd0c6f6a2c1"
              }}
              style={styles.ImageBackground_I19_377_5_736}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2efc/5d27/f4dc546f7d01bd97889c6b76b814ca41"
              }}
              style={styles.ImageBackground_I19_377_5_739}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2832/6be4/75a9432fcf27bee93583047cf6cbdeff"
            }}
            style={styles.ImageBackground_I19_377_5_740}
          />
        </View>
        <View style={styles.View_I19_377_5_741}>
          <View style={styles.View_I19_377_5_742} />
          <View style={styles.View_I19_377_5_743} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b021/42e2/c5c0a582c90431e7595b4fc96edfa875"
            }}
            style={styles.ImageBackground_I19_377_5_744}
          />
        </View>
        <View style={styles.View_I19_377_5_748}>
          <View style={styles.View_I19_377_5_749}>
            <View style={styles.View_I19_377_5_750} />
            <View style={styles.View_I19_377_5_751} />
            <View style={styles.View_I19_377_5_752} />
            <View style={styles.View_I19_377_5_753} />
          </View>
        </View>
        <View style={styles.View_I19_377_5_754}>
          <View style={styles.View_I19_377_5_755}>
            <View style={styles.View_I19_377_5_756} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5a7b/d60e/3184d920bc762a3fc1382216c680cc0a"
              }}
              style={styles.ImageBackground_I19_377_5_757}
            />
          </View>
          <View style={styles.View_I19_377_5_758}>
            <Text style={styles.Text_I19_377_5_758}>12:22</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_19_405}>
        <View style={styles.View_19_406} />
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_19_323: {
    width: 60,
    minWidth: 60,
    height: 96,
    minHeight: 96,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 235,
    top: 586
  },
  View_19_324: {
    width: 60,
    minWidth: 60,
    height: 60,
    minHeight: 60,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  ImageBackground_19_325: {
    width: 60,
    minWidth: 60,
    height: 60,
    minHeight: 60,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  ImageBackground_19_326: {
    width: 24,
    height: 24,
    top: 18,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 18
  },
  View_19_328: {
    width: 27,
    minWidth: 27,
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 17,
    top: 76
  },
  Text_19_328: {
    color: "rgba(7, 4, 23, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_19_329: {
    width: 60,
    minWidth: 60,
    height: 96,
    minHeight: 96,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 80,
    top: 586
  },
  View_19_330: {
    width: 60,
    minWidth: 60,
    height: 60,
    minHeight: 60,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  ImageBackground_19_331: {
    width: 60,
    minWidth: 60,
    height: 60,
    minHeight: 60,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  ImageBackground_19_332: {
    width: 24,
    height: 24,
    top: 18,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 18
  },
  View_19_335: {
    width: 40,
    minWidth: 40,
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 10,
    top: 76
  },
  Text_19_335: {
    color: "rgba(7, 4, 23, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_19_336: {
    width: 220.00001525878906,
    minWidth: 220.00001525878906,
    height: 220.00001525878906,
    minHeight: 220.00001525878906,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 77,
    top: 286
  },
  ImageBackground_19_337: {
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
  ImageBackground_19_338: {
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
  View_19_339: {
    width: 120,
    minWidth: 120,
    minHeight: 32,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 50,
    top: 94
  },
  Text_19_339: {
    color: "rgba(7, 4, 23, 1)",
    fontSize: 32,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 2,
    textTransform: "none"
  },
  View_19_340: {
    width: 99,
    minWidth: 99,
    height: 20,
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 138,
    top: 186
  },
  ImageBackground_19_341: {
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
  View_19_342: {
    width: 71,
    minWidth: 71,
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 28,
    top: 0
  },
  Text_19_342: {
    color: "rgba(7, 4, 23, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_19_343: {
    width: 43,
    minWidth: 43,
    height: 24,
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 316,
    top: 69,
    backgroundColor: "rgba(255, 239, 241, 1)",
    overflow: "hidden"
  },
  View_19_344: {
    width: 27,
    minWidth: 27,
    minHeight: 14,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 8,
    top: 5
  },
  Text_19_344: {
    color: "rgba(253, 91, 113, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_19_345: {
    width: 169,
    minWidth: 169,
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 103,
    top: 71
  },
  Text_19_345: {
    color: "rgba(7, 4, 23, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_19_346: {
    width: 24.000001907348633,
    height: 24.000001907348633,
    top: 68,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16
  },
  View_19_377: {
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
  View_I19_377_5_732: {
    flexGrow: 1,
    width: 375,
    height: 44,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(7, 4, 23, 1)"
  },
  View_I19_377_5_733: {
    flexGrow: 1,
    width: 27,
    height: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 334,
    top: 13
  },
  View_I19_377_5_734: {
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
  View_I19_377_5_735: {
    width: 24.25,
    height: 11.5,
    top: 4.5,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 2
  },
  ImageBackground_I19_377_5_736: {
    width: 22,
    height: 11.5,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  ImageBackground_I19_377_5_739: {
    width: 1.25,
    height: 4.331089019775391,
    top: 3.33447265625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 23
  },
  ImageBackground_I19_377_5_740: {
    width: 18,
    height: 7.5,
    top: 6.5,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 4
  },
  View_I19_377_5_741: {
    flexGrow: 1,
    width: 41,
    height: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 292,
    top: 13
  },
  View_I19_377_5_742: {
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
  View_I19_377_5_743: {
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
  ImageBackground_I19_377_5_744: {
    width: 15,
    height: 10.5,
    top: 4.60498046875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 23.8724365234375
  },
  View_I19_377_5_748: {
    flexGrow: 1,
    width: 17.25,
    height: 10.5,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 293.5,
    top: 17.75
  },
  View_I19_377_5_749: {
    width: 17.25,
    height: 10.5,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_I19_377_5_750: {
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
  View_I19_377_5_751: {
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
  View_I19_377_5_752: {
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
  View_I19_377_5_753: {
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
  View_I19_377_5_754: {
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
  View_I19_377_5_755: {
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
  View_I19_377_5_756: {
    width: 16,
    height: 16,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  ImageBackground_I19_377_5_757: {
    width: 10.5,
    height: 10.5,
    top: 4,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 2.5
  },
  View_I19_377_5_758: {
    width: 36,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 2.5,
    top: 0
  },
  Text_I19_377_5_758: {
    color: "rgba(7, 4, 23, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_19_405: {
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
  View_19_406: {
    flexGrow: 1,
    width: 135,
    height: 5,
    minHeight: 5,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(58, 58, 58, 1)"
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
