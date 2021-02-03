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
      <View style={styles.View_13_306}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f4c5/ea0a/9a761c84a6ec2a90a07b099164f78a3c"
          }}
          style={styles.ImageBackground_13_307}
        />
        <View style={styles.View_13_308}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2c6e/3c50/37e67df18fde4debb8b4efd66a283158"
            }}
            style={styles.ImageBackground_13_309}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7c52/927e/7b8b5cac6e32be7381d78758f5231f2c"
            }}
            style={styles.ImageBackground_13_310}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4052/82d7/ba105a59456ed64cd4d8b9a220dae288"
          }}
          style={styles.ImageBackground_13_311}
        />
        <View style={styles.View_13_312} />
      </View>
      <View style={styles.View_13_301}>
        <View style={styles.View_13_302} />
        <View style={styles.View_13_303} />
        <View style={styles.View_13_304}>
          <Text style={styles.Text_13_304}>Day</Text>
        </View>
        <View style={styles.View_13_305}>
          <Text style={styles.Text_13_305}>Week</Text>
        </View>
      </View>
      <View style={styles.View_13_299}>
        <View style={styles.View_8_383} />
        <View style={styles.View_8_399}>
          <Text style={styles.Text_8_399}>3h 46m</Text>
        </View>
        <View style={styles.View_8_385}>
          <Text style={styles.Text_8_385}>Time Duration</Text>
        </View>
        <View style={styles.View_8_386}>
          <View style={styles.View_8_387} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7fc8/45b2/4aec4e42ba0c8e9e2d9c0af5eefc9fe9"
            }}
            style={styles.ImageBackground_8_388}
          />
        </View>
      </View>
      <View style={styles.View_13_300}>
        <View style={styles.View_8_382} />
        <View style={styles.View_8_398}>
          <Text style={styles.Text_8_398}>12</Text>
        </View>
        <View style={styles.View_8_384}>
          <Text style={styles.Text_8_384}>Task Completed</Text>
        </View>
        <View style={styles.View_8_394}>
          <View style={styles.View_8_395} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/57d3/d810/7105bd883b8fbe08cd1950bc4d9f2993"
            }}
            style={styles.ImageBackground_8_396}
          />
        </View>
      </View>
      <View style={styles.View_8_377}>
        <Text style={styles.Text_8_377}>My Productivity</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dbd4/6608/7d74781074b8a2eea007dfa9dba08f20"
        }}
        style={styles.ImageBackground_13_296}
      />
      <View style={styles.View_8_378}>
        <View style={styles.View_I8_378_5_732} />
        <View style={styles.View_I8_378_5_733}>
          <View style={styles.View_I8_378_5_734} />
          <View style={styles.View_I8_378_5_735}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2a47/9e1a/29a578065fd0802d1eb80bd0c6f6a2c1"
              }}
              style={styles.ImageBackground_I8_378_5_736}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2efc/5d27/f4dc546f7d01bd97889c6b76b814ca41"
              }}
              style={styles.ImageBackground_I8_378_5_739}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/afac/8264/2f5e3550661b0dec29fd0017691d6849"
            }}
            style={styles.ImageBackground_I8_378_5_740}
          />
        </View>
        <View style={styles.View_I8_378_5_741}>
          <View style={styles.View_I8_378_5_742} />
          <View style={styles.View_I8_378_5_743} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6f92/878a/4baccbbfdb87282fb06c80cd80697493"
            }}
            style={styles.ImageBackground_I8_378_5_744}
          />
        </View>
        <View style={styles.View_I8_378_5_748}>
          <View style={styles.View_I8_378_5_749}>
            <View style={styles.View_I8_378_5_750} />
            <View style={styles.View_I8_378_5_751} />
            <View style={styles.View_I8_378_5_752} />
            <View style={styles.View_I8_378_5_753} />
          </View>
        </View>
        <View style={styles.View_I8_378_5_754}>
          <View style={styles.View_I8_378_5_755}>
            <View style={styles.View_I8_378_5_756} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8ac8/c62e/181eded961543eaaf1039a3aa05f2927"
              }}
              style={styles.ImageBackground_I8_378_5_757}
            />
          </View>
          <View style={styles.View_I8_378_5_758}>
            <Text style={styles.Text_I8_378_5_758}>12:22</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_30_1188}>
        <View style={styles.View_I30_1188_19_1178} />
        <View style={styles.View_I30_1188_19_1179} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7f6c/046e/be77ca80a285c75a72e3a5c04e4e9678"
          }}
          style={styles.ImageBackground_I30_1188_19_1180}
        />
        <View style={styles.View_I30_1188_19_1181}>
          <View style={styles.View_I30_1188_19_1182}>
            <Text style={styles.Text_I30_1188_19_1182}>10AM</Text>
          </View>
          <View style={styles.View_I30_1188_19_1183}>
            <Text style={styles.Text_I30_1188_19_1183}>9AM</Text>
          </View>
          <View style={styles.View_I30_1188_19_1184}>
            <Text style={styles.Text_I30_1188_19_1184}>8AM</Text>
          </View>
          <View style={styles.View_I30_1188_19_1185}>
            <Text style={styles.Text_I30_1188_19_1185}>11AM</Text>
          </View>
          <View style={styles.View_I30_1188_19_1186}>
            <Text style={styles.Text_I30_1188_19_1186}>12AM</Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8690/f8c9/6ed0726b0b2d7b2c382a12c65fe7197f"
          }}
          style={styles.ImageBackground_I30_1188_19_1187}
        />
        <View style={styles.View_I30_1188_19_1188}>
          <View style={styles.View_I30_1188_19_1189}>
            <Text style={styles.Text_I30_1188_19_1189}>0h0m</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e4a3/878a/8b23af74452f582454b8de05222bfbdc"
            }}
            style={styles.ImageBackground_I30_1188_19_1190}
          />
        </View>
        <View style={styles.View_I30_1188_19_1191}>
          <View style={styles.View_I30_1188_19_1192}>
            <Text style={styles.Text_I30_1188_19_1192}>0h30m</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e4a3/878a/8b23af74452f582454b8de05222bfbdc"
            }}
            style={styles.ImageBackground_I30_1188_19_1193}
          />
        </View>
        <View style={styles.View_I30_1188_19_1194}>
          <View style={styles.View_I30_1188_19_1195}>
            <Text style={styles.Text_I30_1188_19_1195}>1h0m</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e4a3/878a/8b23af74452f582454b8de05222bfbdc"
            }}
            style={styles.ImageBackground_I30_1188_19_1196}
          />
        </View>
        <View style={styles.View_I30_1188_19_1197}>
          <View style={styles.View_I30_1188_19_1198}>
            <Text style={styles.Text_I30_1188_19_1198}>1h30m</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e4a3/878a/8b23af74452f582454b8de05222bfbdc"
            }}
            style={styles.ImageBackground_I30_1188_19_1199}
          />
        </View>
        <View style={styles.View_I30_1188_19_1200}>
          <View style={styles.View_I30_1188_19_1201}>
            <Text style={styles.Text_I30_1188_19_1201}>2h0m</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e4a3/878a/8b23af74452f582454b8de05222bfbdc"
            }}
            style={styles.ImageBackground_I30_1188_19_1202}
          />
        </View>
        <View style={styles.View_I30_1188_19_1203}>
          <View style={styles.View_I30_1188_19_1204}>
            <Text style={styles.Text_I30_1188_19_1204}>2h30m</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e4a3/878a/8b23af74452f582454b8de05222bfbdc"
            }}
            style={styles.ImageBackground_I30_1188_19_1205}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ed42/04e4/b34dd4044bdf4e21b902b5b2914e4d3a"
          }}
          style={styles.ImageBackground_I30_1188_19_1206}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/967d/12b6/73edd7bb11f842981eaab5c4bde2a160"
          }}
          style={styles.ImageBackground_I30_1188_19_1207}
        />
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_13_306: {
    width: 295,
    minWidth: 295,
    height: 74,
    minHeight: 74,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 40,
    top: 730,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_13_307: {
    width: 28,
    height: 28,
    top: 8,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 267
  },
  View_13_308: {
    width: 44,
    minWidth: 44,
    height: 44,
    minHeight: 44,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 126,
    top: 0
  },
  ImageBackground_13_309: {
    width: 44,
    minWidth: 44,
    height: 44,
    minHeight: 44,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  ImageBackground_13_310: {
    width: 24,
    height: 24,
    top: 10,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 10
  },
  ImageBackground_13_311: {
    width: 28,
    height: 28,
    top: 8,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_13_312: {
    width: 135,
    minWidth: 135,
    height: 5,
    minHeight: 5,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 80,
    top: 71,
    backgroundColor: "rgba(58, 58, 58, 1)"
  },
  View_13_301: {
    width: 279,
    minWidth: 279,
    height: 44,
    minHeight: 44,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 48,
    top: 304
  },
  View_13_302: {
    width: 279,
    minWidth: 279,
    height: 44,
    minHeight: 44,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(41, 38, 57, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_13_303: {
    width: 132,
    minWidth: 132,
    height: 36,
    minHeight: 36,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 4,
    top: 4,
    backgroundColor: "rgba(130, 130, 130, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_13_304: {
    width: 29,
    minWidth: 29,
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 55,
    top: 12
  },
  Text_13_304: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_13_305: {
    width: 39,
    minWidth: 39,
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 188,
    top: 12
  },
  Text_13_305: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_13_299: {
    width: 164,
    minWidth: 164,
    height: 132,
    minHeight: 132,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 195,
    top: 132
  },
  View_8_383: {
    width: 164,
    minWidth: 164,
    height: 132,
    minHeight: 132,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(41, 38, 57, 1)",
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16
  },
  View_8_399: {
    width: 97,
    minWidth: 97,
    minHeight: 32,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16,
    top: 76
  },
  Text_8_399: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 32,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_8_385: {
    width: 88,
    minWidth: 88,
    minHeight: 36,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 60,
    top: 16
  },
  Text_8_385: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_8_386: {
    width: 32,
    minWidth: 32,
    height: 32,
    minHeight: 32,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16,
    top: 16
  },
  View_8_387: {
    width: 32,
    minWidth: 32,
    height: 32,
    minHeight: 32,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(61, 74, 186, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  ImageBackground_8_388: {
    width: 20,
    height: 20,
    top: 6,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 6
  },
  View_13_300: {
    width: 164,
    minWidth: 164,
    height: 132,
    minHeight: 132,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16,
    top: 132
  },
  View_8_382: {
    width: 164,
    minWidth: 164,
    height: 132,
    minHeight: 132,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(41, 38, 57, 1)",
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16
  },
  View_8_398: {
    width: 35,
    minWidth: 35,
    minHeight: 32,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16,
    top: 76
  },
  Text_8_398: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 26,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_8_384: {
    width: 88,
    minWidth: 88,
    minHeight: 36,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 60,
    top: 16
  },
  Text_8_384: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_8_394: {
    width: 32,
    minWidth: 32,
    height: 32,
    minHeight: 32,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16,
    top: 16
  },
  View_8_395: {
    width: 32,
    minWidth: 32,
    height: 32,
    minHeight: 32,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(7, 224, 146, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  ImageBackground_8_396: {
    width: 20,
    height: 20,
    top: 6,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 6
  },
  View_8_377: {
    width: 183,
    minWidth: 183,
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 96,
    top: 70
  },
  Text_8_377: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_13_296: {
    width: 24.000001907348633,
    height: 24.000001907348633,
    top: 68,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16
  },
  View_8_378: {
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
  View_I8_378_5_732: {
    flexGrow: 1,
    width: 375,
    height: 44,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I8_378_5_733: {
    flexGrow: 1,
    width: 27,
    height: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 334,
    top: 13
  },
  View_I8_378_5_734: {
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
  View_I8_378_5_735: {
    width: 24.25,
    height: 11.5,
    top: 4.5,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 2
  },
  ImageBackground_I8_378_5_736: {
    width: 22,
    height: 11.5,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  ImageBackground_I8_378_5_739: {
    width: 1.25,
    height: 4.331089019775391,
    top: 3.33447265625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 23
  },
  ImageBackground_I8_378_5_740: {
    width: 18,
    height: 7.5,
    top: 6.5,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 4
  },
  View_I8_378_5_741: {
    flexGrow: 1,
    width: 41,
    height: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 292,
    top: 13
  },
  View_I8_378_5_742: {
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
  View_I8_378_5_743: {
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
  ImageBackground_I8_378_5_744: {
    width: 15,
    height: 10.5,
    top: 4.60498046875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 23.87237548828125
  },
  View_I8_378_5_748: {
    flexGrow: 1,
    width: 17.25,
    height: 10.5,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 293.5,
    top: 17.75
  },
  View_I8_378_5_749: {
    width: 17.25,
    height: 10.5,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_I8_378_5_750: {
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
  View_I8_378_5_751: {
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
  View_I8_378_5_752: {
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
  View_I8_378_5_753: {
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
  View_I8_378_5_754: {
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
  View_I8_378_5_755: {
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
  View_I8_378_5_756: {
    width: 16,
    height: 16,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  ImageBackground_I8_378_5_757: {
    width: 10.5,
    height: 10.5,
    top: 4,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 2.5
  },
  View_I8_378_5_758: {
    width: 36,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 2.5,
    top: 0
  },
  Text_I8_378_5_758: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_30_1188: {
    width: 343,
    minWidth: 343,
    height: 312,
    minHeight: 312,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16,
    top: 372,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I30_1188_19_1178: {
    flexGrow: 1,
    width: 343,
    height: 312,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(41, 38, 57, 1)",
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16
  },
  View_I30_1188_19_1179: {
    flexGrow: 1,
    width: 44,
    height: 210,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 174,
    top: 33,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  ImageBackground_I30_1188_19_1180: {
    flexGrow: 1,
    width: 268,
    height: 104,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 75,
    top: 102
  },
  View_I30_1188_19_1181: {
    flexGrow: 1,
    width: 252,
    height: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 75,
    top: 268
  },
  View_I30_1188_19_1182: {
    width: 35,
    minWidth: 35,
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 103,
    top: 0
  },
  Text_I30_1188_19_1182: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I30_1188_19_1183: {
    width: 27,
    minWidth: 27,
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 52,
    top: 0
  },
  Text_I30_1188_19_1183: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I30_1188_19_1184: {
    width: 28,
    minWidth: 28,
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  Text_I30_1188_19_1184: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I30_1188_19_1185: {
    width: 32,
    minWidth: 32,
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 162,
    top: 0
  },
  Text_I30_1188_19_1185: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I30_1188_19_1186: {
    width: 34,
    minWidth: 34,
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 218,
    top: 0
  },
  Text_I30_1188_19_1186: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I30_1188_19_1187: {
    flexGrow: 1,
    width: 0.000009048258107213769,
    height: 207,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 196,
    top: 34
  },
  View_I30_1188_19_1188: {
    flexGrow: 1,
    width: 311,
    height: 18,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16,
    top: 234
  },
  View_I30_1188_19_1189: {
    width: 39,
    minWidth: 39,
    minHeight: 18,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  Text_I30_1188_19_1189: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I30_1188_19_1190: {
    width: 249,
    minWidth: 249,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 62,
    top: 9
  },
  View_I30_1188_19_1191: {
    flexGrow: 1,
    width: 311,
    height: 18,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16,
    top: 192
  },
  View_I30_1188_19_1192: {
    width: 48,
    minWidth: 48,
    minHeight: 18,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  Text_I30_1188_19_1192: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I30_1188_19_1193: {
    width: 249,
    minWidth: 249,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 62,
    top: 9
  },
  View_I30_1188_19_1194: {
    flexGrow: 1,
    width: 311,
    height: 18,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16,
    top: 150
  },
  View_I30_1188_19_1195: {
    width: 36,
    minWidth: 36,
    minHeight: 18,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  Text_I30_1188_19_1195: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I30_1188_19_1196: {
    width: 249,
    minWidth: 249,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 62,
    top: 9
  },
  View_I30_1188_19_1197: {
    flexGrow: 1,
    width: 311,
    height: 18,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16,
    top: 108
  },
  View_I30_1188_19_1198: {
    width: 45,
    minWidth: 45,
    minHeight: 18,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  Text_I30_1188_19_1198: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I30_1188_19_1199: {
    width: 249,
    minWidth: 249,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 62,
    top: 9
  },
  View_I30_1188_19_1200: {
    flexGrow: 1,
    width: 311,
    height: 18,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16,
    top: 66
  },
  View_I30_1188_19_1201: {
    width: 38,
    minWidth: 38,
    minHeight: 18,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  Text_I30_1188_19_1201: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I30_1188_19_1202: {
    width: 249,
    minWidth: 249,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 62,
    top: 9
  },
  View_I30_1188_19_1203: {
    flexGrow: 1,
    width: 311,
    height: 18,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16,
    top: 24
  },
  View_I30_1188_19_1204: {
    width: 47,
    minWidth: 47,
    minHeight: 18,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  Text_I30_1188_19_1204: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I30_1188_19_1205: {
    width: 249,
    minWidth: 249,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 62,
    top: 9
  },
  ImageBackground_I30_1188_19_1206: {
    flexGrow: 1,
    width: 24,
    height: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 184,
    top: 90
  },
  ImageBackground_I30_1188_19_1207: {
    flexGrow: 1,
    width: 10,
    height: 10,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 191,
    top: 97
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
