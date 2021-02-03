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
      <View style={styles.View_13_284}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/02e6/7a38/7c5a4871e6116e9edf65231f9e60a0b9"
          }}
          style={styles.ImageBackground_13_285}
        />
        <View style={styles.View_13_286}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7c54/5c89/dc6e0a10861fc5cd909f1c34b3257506"
            }}
            style={styles.ImageBackground_13_287}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8e10/17f4/0af5ab4e40ab3f3a5501c3ffa39c4a9d"
            }}
            style={styles.ImageBackground_13_288}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/22ca/f24f/b8337202823c716d873a7e1b19878340"
          }}
          style={styles.ImageBackground_13_289}
        />
        <View style={styles.View_13_290} />
      </View>
      <View style={styles.View_13_224}>
        <View style={styles.View_13_225} />
        <View style={styles.View_13_226} />
        <View style={styles.View_13_227}>
          <Text style={styles.Text_13_227}>Day</Text>
        </View>
        <View style={styles.View_13_228}>
          <Text style={styles.Text_13_228}>Week</Text>
        </View>
      </View>
      <View style={styles.View_8_217}>
        <Text style={styles.Text_8_217}>My Productivity</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a969/d22e/e7e6dff547139d7222bca94331705dcd"
        }}
        style={styles.ImageBackground_13_281}
      />
      <View style={styles.View_8_218}>
        <View style={styles.View_I8_218_5_732} />
        <View style={styles.View_I8_218_5_733}>
          <View style={styles.View_I8_218_5_734} />
          <View style={styles.View_I8_218_5_735}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2a47/9e1a/29a578065fd0802d1eb80bd0c6f6a2c1"
              }}
              style={styles.ImageBackground_I8_218_5_736}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2efc/5d27/f4dc546f7d01bd97889c6b76b814ca41"
              }}
              style={styles.ImageBackground_I8_218_5_739}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2832/6be4/75a9432fcf27bee93583047cf6cbdeff"
            }}
            style={styles.ImageBackground_I8_218_5_740}
          />
        </View>
        <View style={styles.View_I8_218_5_741}>
          <View style={styles.View_I8_218_5_742} />
          <View style={styles.View_I8_218_5_743} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b021/42e2/c5c0a582c90431e7595b4fc96edfa875"
            }}
            style={styles.ImageBackground_I8_218_5_744}
          />
        </View>
        <View style={styles.View_I8_218_5_748}>
          <View style={styles.View_I8_218_5_749}>
            <View style={styles.View_I8_218_5_750} />
            <View style={styles.View_I8_218_5_751} />
            <View style={styles.View_I8_218_5_752} />
            <View style={styles.View_I8_218_5_753} />
          </View>
        </View>
        <View style={styles.View_I8_218_5_754}>
          <View style={styles.View_I8_218_5_755}>
            <View style={styles.View_I8_218_5_756} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5a7b/d60e/3184d920bc762a3fc1382216c680cc0a"
              }}
              style={styles.ImageBackground_I8_218_5_757}
            />
          </View>
          <View style={styles.View_I8_218_5_758}>
            <Text style={styles.Text_I8_218_5_758}>12:22</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_30_1126}>
        <View style={styles.View_I30_1126_19_1147} />
        <View style={styles.View_I30_1126_19_1148} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/142f/c89c/3ef28c8ed392da12b482f1d93974bee5"
          }}
          style={styles.ImageBackground_I30_1126_19_1149}
        />
        <View style={styles.View_I30_1126_19_1150}>
          <View style={styles.View_I30_1126_19_1151}>
            <Text style={styles.Text_I30_1126_19_1151}>10AM</Text>
          </View>
          <View style={styles.View_I30_1126_19_1152}>
            <Text style={styles.Text_I30_1126_19_1152}>9AM</Text>
          </View>
          <View style={styles.View_I30_1126_19_1153}>
            <Text style={styles.Text_I30_1126_19_1153}>8AM</Text>
          </View>
          <View style={styles.View_I30_1126_19_1154}>
            <Text style={styles.Text_I30_1126_19_1154}>11AM</Text>
          </View>
          <View style={styles.View_I30_1126_19_1155}>
            <Text style={styles.Text_I30_1126_19_1155}>12AM</Text>
          </View>
        </View>
        <View style={styles.View_I30_1126_19_1156}>
          <View style={styles.View_I30_1126_19_1157}>
            <Text style={styles.Text_I30_1126_19_1157}>0h0m</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f978/9bc3/4b76b5c0e4369dae38b488760e57d9c8"
            }}
            style={styles.ImageBackground_I30_1126_19_1158}
          />
        </View>
        <View style={styles.View_I30_1126_19_1159}>
          <View style={styles.View_I30_1126_19_1160}>
            <Text style={styles.Text_I30_1126_19_1160}>0h30m</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f978/9bc3/4b76b5c0e4369dae38b488760e57d9c8"
            }}
            style={styles.ImageBackground_I30_1126_19_1161}
          />
        </View>
        <View style={styles.View_I30_1126_19_1162}>
          <View style={styles.View_I30_1126_19_1163}>
            <Text style={styles.Text_I30_1126_19_1163}>1h0m</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f978/9bc3/4b76b5c0e4369dae38b488760e57d9c8"
            }}
            style={styles.ImageBackground_I30_1126_19_1164}
          />
        </View>
        <View style={styles.View_I30_1126_19_1165}>
          <View style={styles.View_I30_1126_19_1166}>
            <Text style={styles.Text_I30_1126_19_1166}>1h30m</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f978/9bc3/4b76b5c0e4369dae38b488760e57d9c8"
            }}
            style={styles.ImageBackground_I30_1126_19_1167}
          />
        </View>
        <View style={styles.View_I30_1126_19_1168}>
          <View style={styles.View_I30_1126_19_1169}>
            <Text style={styles.Text_I30_1126_19_1169}>2h0m</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f978/9bc3/4b76b5c0e4369dae38b488760e57d9c8"
            }}
            style={styles.ImageBackground_I30_1126_19_1170}
          />
        </View>
        <View style={styles.View_I30_1126_19_1171}>
          <View style={styles.View_I30_1126_19_1172}>
            <Text style={styles.Text_I30_1126_19_1172}>2h30m</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f978/9bc3/4b76b5c0e4369dae38b488760e57d9c8"
            }}
            style={styles.ImageBackground_I30_1126_19_1173}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8690/f8c9/6ed0726b0b2d7b2c382a12c65fe7197f"
          }}
          style={styles.ImageBackground_I30_1126_19_1174}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ed42/04e4/b34dd4044bdf4e21b902b5b2914e4d3a"
          }}
          style={styles.ImageBackground_I30_1126_19_1175}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/967d/12b6/73edd7bb11f842981eaab5c4bde2a160"
          }}
          style={styles.ImageBackground_I30_1126_19_1176}
        />
      </View>
      <View style={styles.View_30_1243}>
        <View style={styles.View_I30_1243_19_1139} />
        <View style={styles.View_I30_1243_19_1140}>
          <Text style={styles.Text_I30_1243_19_1140}>12</Text>
        </View>
        <View style={styles.View_I30_1243_19_1141}>
          <Text style={styles.Text_I30_1243_19_1141}>Task Completed</Text>
        </View>
        <View style={styles.View_I30_1243_19_1142}>
          <View style={styles.View_I30_1243_19_1143} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7bf1/b134/4de4fb132dce58b637b06f5a922597c8"
            }}
            style={styles.ImageBackground_I30_1243_19_1144}
          />
        </View>
      </View>
      <View style={styles.View_30_1244}>
        <View style={styles.View_I30_1244_19_1127} />
        <View style={styles.View_I30_1244_19_1128}>
          <Text style={styles.Text_I30_1244_19_1128}>1h 46m</Text>
        </View>
        <View style={styles.View_I30_1244_19_1129}>
          <Text style={styles.Text_I30_1244_19_1129}>Time Duration</Text>
        </View>
        <View style={styles.View_I30_1244_19_1130}>
          <View style={styles.View_I30_1244_19_1131} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dfd6/9808/5262981b581df15b54d410dd9b78de2b"
            }}
            style={styles.ImageBackground_I30_1244_19_1132}
          />
        </View>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_13_284: {
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
  ImageBackground_13_285: {
    width: 28,
    height: 28,
    top: 8,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 267
  },
  View_13_286: {
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
  ImageBackground_13_287: {
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
  ImageBackground_13_288: {
    width: 24,
    height: 24,
    top: 10,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 10
  },
  ImageBackground_13_289: {
    width: 28,
    height: 28,
    top: 8,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_13_290: {
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
  View_13_224: {
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
  View_13_225: {
    width: 279,
    minWidth: 279,
    height: 44,
    minHeight: 44,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(233, 233, 255, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_13_226: {
    width: 132,
    minWidth: 132,
    height: 36,
    minHeight: 36,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 4,
    top: 4,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_13_227: {
    width: 29,
    minWidth: 29,
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 55,
    top: 12
  },
  Text_13_227: {
    color: "rgba(7, 4, 23, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_13_228: {
    width: 39,
    minWidth: 39,
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 188,
    top: 12
  },
  Text_13_228: {
    color: "rgba(7, 4, 23, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_8_217: {
    width: 183,
    minWidth: 183,
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 96,
    top: 70
  },
  Text_8_217: {
    color: "rgba(7, 4, 23, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_13_281: {
    width: 24.000001907348633,
    height: 24.000001907348633,
    top: 68,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16
  },
  View_8_218: {
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
  View_I8_218_5_732: {
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
  View_I8_218_5_733: {
    flexGrow: 1,
    width: 27,
    height: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 334,
    top: 13
  },
  View_I8_218_5_734: {
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
  View_I8_218_5_735: {
    width: 24.25,
    height: 11.5,
    top: 4.5,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 2
  },
  ImageBackground_I8_218_5_736: {
    width: 22,
    height: 11.5,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  ImageBackground_I8_218_5_739: {
    width: 1.25,
    height: 4.331089019775391,
    top: 3.33447265625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 23
  },
  ImageBackground_I8_218_5_740: {
    width: 18,
    height: 7.5,
    top: 6.5,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 4
  },
  View_I8_218_5_741: {
    flexGrow: 1,
    width: 41,
    height: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 292,
    top: 13
  },
  View_I8_218_5_742: {
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
  View_I8_218_5_743: {
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
  ImageBackground_I8_218_5_744: {
    width: 15,
    height: 10.5,
    top: 4.60498046875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 23.8724365234375
  },
  View_I8_218_5_748: {
    flexGrow: 1,
    width: 17.25,
    height: 10.5,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 293.5,
    top: 17.75
  },
  View_I8_218_5_749: {
    width: 17.25,
    height: 10.5,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_I8_218_5_750: {
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
  View_I8_218_5_751: {
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
  View_I8_218_5_752: {
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
  View_I8_218_5_753: {
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
  View_I8_218_5_754: {
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
  View_I8_218_5_755: {
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
  View_I8_218_5_756: {
    width: 16,
    height: 16,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  ImageBackground_I8_218_5_757: {
    width: 10.5,
    height: 10.5,
    top: 4,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 2.5
  },
  View_I8_218_5_758: {
    width: 36,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 2.5,
    top: 0
  },
  Text_I8_218_5_758: {
    color: "rgba(7, 4, 23, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_30_1126: {
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
  View_I30_1126_19_1147: {
    flexGrow: 1,
    width: 343,
    height: 312,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(250, 250, 255, 1)",
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16
  },
  View_I30_1126_19_1148: {
    flexGrow: 1,
    width: 44,
    height: 210,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 182,
    top: 33,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  ImageBackground_I30_1126_19_1149: {
    flexGrow: 1,
    width: 265,
    height: 102.34345245361328,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 78,
    top: 101.5
  },
  View_I30_1126_19_1150: {
    flexGrow: 1,
    width: 252,
    height: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 75,
    top: 268
  },
  View_I30_1126_19_1151: {
    width: 35,
    minWidth: 35,
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 103,
    top: 0
  },
  Text_I30_1126_19_1151: {
    color: "rgba(7, 4, 23, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I30_1126_19_1152: {
    width: 27,
    minWidth: 27,
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 52,
    top: 0
  },
  Text_I30_1126_19_1152: {
    color: "rgba(7, 4, 23, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I30_1126_19_1153: {
    width: 28,
    minWidth: 28,
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  Text_I30_1126_19_1153: {
    color: "rgba(7, 4, 23, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I30_1126_19_1154: {
    width: 32,
    minWidth: 32,
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 162,
    top: 0
  },
  Text_I30_1126_19_1154: {
    color: "rgba(7, 4, 23, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I30_1126_19_1155: {
    width: 34,
    minWidth: 34,
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 218,
    top: 0
  },
  Text_I30_1126_19_1155: {
    color: "rgba(7, 4, 23, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I30_1126_19_1156: {
    flexGrow: 1,
    width: 311,
    height: 18,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16,
    top: 234
  },
  View_I30_1126_19_1157: {
    width: 39,
    minWidth: 39,
    minHeight: 18,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  Text_I30_1126_19_1157: {
    color: "rgba(7, 4, 23, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I30_1126_19_1158: {
    width: 249,
    minWidth: 249,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 62,
    top: 9
  },
  View_I30_1126_19_1159: {
    flexGrow: 1,
    width: 311,
    height: 18,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16,
    top: 192
  },
  View_I30_1126_19_1160: {
    width: 48,
    minWidth: 48,
    minHeight: 18,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  Text_I30_1126_19_1160: {
    color: "rgba(7, 4, 23, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I30_1126_19_1161: {
    width: 249,
    minWidth: 249,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 62,
    top: 9
  },
  View_I30_1126_19_1162: {
    flexGrow: 1,
    width: 311,
    height: 18,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16,
    top: 150
  },
  View_I30_1126_19_1163: {
    width: 36,
    minWidth: 36,
    minHeight: 18,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  Text_I30_1126_19_1163: {
    color: "rgba(7, 4, 23, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I30_1126_19_1164: {
    width: 249,
    minWidth: 249,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 62,
    top: 9
  },
  View_I30_1126_19_1165: {
    flexGrow: 1,
    width: 311,
    height: 18,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16,
    top: 108
  },
  View_I30_1126_19_1166: {
    width: 45,
    minWidth: 45,
    minHeight: 18,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  Text_I30_1126_19_1166: {
    color: "rgba(7, 4, 23, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I30_1126_19_1167: {
    width: 249,
    minWidth: 249,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 62,
    top: 9
  },
  View_I30_1126_19_1168: {
    flexGrow: 1,
    width: 311,
    height: 18,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16,
    top: 66
  },
  View_I30_1126_19_1169: {
    width: 38,
    minWidth: 38,
    minHeight: 18,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  Text_I30_1126_19_1169: {
    color: "rgba(7, 4, 23, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I30_1126_19_1170: {
    width: 249,
    minWidth: 249,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 62,
    top: 9
  },
  View_I30_1126_19_1171: {
    flexGrow: 1,
    width: 311,
    height: 18,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16,
    top: 24
  },
  View_I30_1126_19_1172: {
    width: 47,
    minWidth: 47,
    minHeight: 18,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  Text_I30_1126_19_1172: {
    color: "rgba(7, 4, 23, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I30_1126_19_1173: {
    width: 249,
    minWidth: 249,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 62,
    top: 9
  },
  ImageBackground_I30_1126_19_1174: {
    flexGrow: 1,
    width: 0.000009048258107213769,
    height: 207,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 202,
    top: 44
  },
  ImageBackground_I30_1126_19_1175: {
    flexGrow: 1,
    width: 24,
    height: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 192,
    top: 90
  },
  ImageBackground_I30_1126_19_1176: {
    flexGrow: 1,
    width: 10,
    height: 10,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 199,
    top: 97
  },
  View_30_1243: {
    width: 164,
    minWidth: 164,
    height: 132,
    minHeight: 132,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16,
    top: 132,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I30_1243_19_1139: {
    flexGrow: 1,
    width: 164,
    height: 132,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(250, 250, 255, 1)",
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16
  },
  View_I30_1243_19_1140: {
    flexGrow: 1,
    width: 35,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16,
    top: 76
  },
  Text_I30_1243_19_1140: {
    color: "rgba(7, 4, 23, 1)",
    fontSize: 26,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I30_1243_19_1141: {
    flexGrow: 1,
    width: 88,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 60,
    top: 16
  },
  Text_I30_1243_19_1141: {
    color: "rgba(7, 4, 23, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I30_1243_19_1142: {
    flexGrow: 1,
    width: 32,
    height: 32,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16,
    top: 16
  },
  View_I30_1243_19_1143: {
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
  ImageBackground_I30_1243_19_1144: {
    width: 20,
    height: 20,
    top: 6,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 6
  },
  View_30_1244: {
    width: 164,
    minWidth: 164,
    height: 132,
    minHeight: 132,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 195,
    top: 132,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I30_1244_19_1127: {
    flexGrow: 1,
    width: 164,
    height: 132,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(250, 250, 255, 1)",
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16
  },
  View_I30_1244_19_1128: {
    flexGrow: 1,
    width: 92,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16,
    top: 76
  },
  Text_I30_1244_19_1128: {
    color: "rgba(7, 4, 23, 1)",
    fontSize: 32,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I30_1244_19_1129: {
    flexGrow: 1,
    width: 88,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 60,
    top: 16
  },
  Text_I30_1244_19_1129: {
    color: "rgba(7, 4, 23, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I30_1244_19_1130: {
    flexGrow: 1,
    width: 32,
    height: 32,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16,
    top: 16
  },
  View_I30_1244_19_1131: {
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
  ImageBackground_I30_1244_19_1132: {
    width: 20,
    height: 20,
    top: 6,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 6
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
