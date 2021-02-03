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
      <View style={styles.View_29_1068}>
        <View style={styles.View_29_1069} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7448/5346/9410589bd239d17ed982169aa335a8e0"
          }}
          style={styles.ImageBackground_29_1070}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/045f/45df/9eac11cfbc1140d4d9ceb6cea6d74df9"
          }}
          style={styles.ImageBackground_29_1071}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/777b/89cc/7f0b8096dd35764883866d1a702c5619"
          }}
          style={styles.ImageBackground_29_1072}
        />
        <View style={styles.View_29_1073}>
          <View style={styles.View_29_1074} />
        </View>
      </View>
      <View style={styles.View_29_1075}>
        <View style={styles.View_29_1076}>
          <Text style={styles.Text_29_1076}>See All</Text>
        </View>
        <View style={styles.View_29_1077}>
          <Text style={styles.Text_29_1077}>Today</Text>
        </View>
        <View style={styles.View_30_1030}>
          <View style={styles.View_I30_1030_19_995} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9ab7/ceba/fdf645d9d9365c0a8a034a2b6c102f6b"
            }}
            style={styles.ImageBackground_I30_1030_19_996}
          />
          <View style={styles.View_I30_1030_19_998}>
            <View style={styles.View_I30_1030_19_999}>
              <Text style={styles.Text_I30_1030_19_999}>Rasion Project</Text>
            </View>
          </View>
          <View style={styles.View_I30_1030_19_1000}>
            <View style={styles.View_I30_1030_19_1001}>
              <Text style={styles.Text_I30_1030_19_1001}>Work</Text>
            </View>
          </View>
          <View style={styles.View_I30_1030_19_1002}>
            <Text style={styles.Text_I30_1030_19_1002}>00:32:10</Text>
          </View>
          <View style={styles.View_I30_1030_19_1003}>
            <Text style={styles.Text_I30_1030_19_1003}>UI Design</Text>
          </View>
          <View style={styles.View_I30_1030_19_1004}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2f67/fe24/ff33a2524f613a21b80f433a43941de2"
              }}
              style={styles.ImageBackground_I30_1030_19_1005}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5d73/3f16/0f29d2752fc33de1a929412c2ec5a935"
              }}
              style={styles.ImageBackground_I30_1030_19_1006}
            />
          </View>
        </View>
        <View style={styles.View_30_1015}>
          <View style={styles.View_I30_1015_19_1012} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9ab7/ceba/fdf645d9d9365c0a8a034a2b6c102f6b"
            }}
            style={styles.ImageBackground_I30_1015_19_1013}
          />
          <View style={styles.View_I30_1015_19_1015}>
            <View style={styles.View_I30_1015_19_1016}>
              <Text style={styles.Text_I30_1015_19_1016}>Reading</Text>
            </View>
          </View>
          <View style={styles.View_I30_1015_19_1017}>
            <View style={styles.View_I30_1015_19_1018}>
              <Text style={styles.Text_I30_1015_19_1018}>Personal</Text>
            </View>
          </View>
          <View style={styles.View_I30_1015_19_1019}>
            <Text style={styles.Text_I30_1015_19_1019}>00:21:09</Text>
          </View>
          <View style={styles.View_I30_1015_19_1020}>
            <Text style={styles.Text_I30_1015_19_1020}>
              Read 10 pages of book
            </Text>
          </View>
          <View style={styles.View_I30_1015_19_1021}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d1d2/ebbf/81fe2e7a9f6b4bf5474079c8e17c9e0e"
              }}
              style={styles.ImageBackground_I30_1015_19_1022}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4262/56f2/cac059109091998b8015293a5b3f3704"
              }}
              style={styles.ImageBackground_I30_1015_19_1023}
            />
          </View>
        </View>
        <View style={styles.View_30_987}>
          <View style={styles.View_I30_987_19_1027} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9ab7/ceba/fdf645d9d9365c0a8a034a2b6c102f6b"
            }}
            style={styles.ImageBackground_I30_987_19_1028}
          />
          <View style={styles.View_I30_987_19_1030}>
            <View style={styles.View_I30_987_19_1031}>
              <Text style={styles.Text_I30_987_19_1031}>Workout</Text>
            </View>
          </View>
          <View style={styles.View_I30_987_19_1032}>
            <View style={styles.View_I30_987_19_1033}>
              <Text style={styles.Text_I30_987_19_1033}>Personal</Text>
            </View>
          </View>
          <View style={styles.View_I30_987_19_1034}>
            <Text style={styles.Text_I30_987_19_1034}>00:14:06</Text>
          </View>
          <View style={styles.View_I30_987_19_1035}>
            <Text style={styles.Text_I30_987_19_1035}>100x Sit-Up</Text>
          </View>
          <View style={styles.View_I30_987_19_1036}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c1f7/f8ab/9fcf33479b4b3be7536e96333f517c20"
              }}
              style={styles.ImageBackground_I30_987_19_1037}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/565e/2364/2fe4895e56474c29cb42a1d6417ccbdb"
              }}
              style={styles.ImageBackground_I30_987_19_1038}
            />
          </View>
        </View>
        <View style={styles.View_30_971}>
          <View style={styles.View_I30_971_19_1041} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9ab7/ceba/fdf645d9d9365c0a8a034a2b6c102f6b"
            }}
            style={styles.ImageBackground_I30_971_19_1042}
          />
          <View style={styles.View_I30_971_19_1044}>
            <View style={styles.View_I30_971_19_1045}>
              <Text style={styles.Text_I30_971_19_1045}>Coding</Text>
            </View>
          </View>
          <View style={styles.View_I30_971_19_1046}>
            <View style={styles.View_I30_971_19_1047}>
              <Text style={styles.Text_I30_971_19_1047}>Personal</Text>
            </View>
          </View>
          <View style={styles.View_I30_971_19_1048}>
            <Text style={styles.Text_I30_971_19_1048}>00:24:52</Text>
          </View>
          <View style={styles.View_I30_971_19_1049}>
            <Text style={styles.Text_I30_971_19_1049}>
              Learn HTML &amp; CSS
            </Text>
          </View>
          <View style={styles.View_I30_971_19_1050}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/060a/3f3c/5701d0d11651c649033d71673e1066de"
              }}
              style={styles.ImageBackground_I30_971_19_1051}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4686/f545/2940f7cb433a84741017e2c47417f202"
              }}
              style={styles.ImageBackground_I30_971_19_1052}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_29_1140}>
        <View style={styles.View_29_1141}>
          <View style={styles.View_29_1142} />
          <View style={styles.View_29_1143}>
            <View style={styles.View_29_1144}>
              <Text style={styles.Text_29_1144}>Rasion Project</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/aeb1/d6c9/9a985489fd255578fa34f81f1e16101f"
              }}
              style={styles.ImageBackground_29_1145}
            />
          </View>
          <View style={styles.View_29_1146}>
            <View style={styles.View_29_1147}>
              <Text style={styles.Text_29_1147}>Work</Text>
            </View>
          </View>
          <View style={styles.View_29_1148}>
            <Text style={styles.Text_29_1148}>00:32:10</Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b227/dcdd/46ec9614cdb94b5022efa947444d2691"
          }}
          style={styles.ImageBackground_29_1149}
        />
        <View style={styles.View_29_1150}>
          <Text style={styles.Text_29_1150}>Task</Text>
        </View>
      </View>
      <View style={styles.View_29_1151}>
        <View style={styles.View_I29_1151_5_732} />
        <View style={styles.View_I29_1151_5_733}>
          <View style={styles.View_I29_1151_5_734} />
          <View style={styles.View_I29_1151_5_735}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2a47/9e1a/29a578065fd0802d1eb80bd0c6f6a2c1"
              }}
              style={styles.ImageBackground_I29_1151_5_736}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2efc/5d27/f4dc546f7d01bd97889c6b76b814ca41"
              }}
              style={styles.ImageBackground_I29_1151_5_739}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/afac/8264/2f5e3550661b0dec29fd0017691d6849"
            }}
            style={styles.ImageBackground_I29_1151_5_740}
          />
        </View>
        <View style={styles.View_I29_1151_5_741}>
          <View style={styles.View_I29_1151_5_742} />
          <View style={styles.View_I29_1151_5_743} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6f92/878a/4baccbbfdb87282fb06c80cd80697493"
            }}
            style={styles.ImageBackground_I29_1151_5_744}
          />
        </View>
        <View style={styles.View_I29_1151_5_748}>
          <View style={styles.View_I29_1151_5_749}>
            <View style={styles.View_I29_1151_5_750} />
            <View style={styles.View_I29_1151_5_751} />
            <View style={styles.View_I29_1151_5_752} />
            <View style={styles.View_I29_1151_5_753} />
          </View>
        </View>
        <View style={styles.View_I29_1151_5_754}>
          <View style={styles.View_I29_1151_5_755}>
            <View style={styles.View_I29_1151_5_756} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8ac8/c62e/181eded961543eaaf1039a3aa05f2927"
              }}
              style={styles.ImageBackground_I29_1151_5_757}
            />
          </View>
          <View style={styles.View_I29_1151_5_758}>
            <Text style={styles.Text_I29_1151_5_758}>12:22</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_29_1068: {
    width: 375,
    minWidth: 375,
    height: 90,
    minHeight: 90,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 722,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_29_1069: {
    width: 375,
    minWidth: 375,
    height: 90,
    minHeight: 90,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(7, 4, 23, 1)",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  ImageBackground_29_1070: {
    width: 24,
    height: 24,
    top: 18,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 287
  },
  ImageBackground_29_1071: {
    width: 32,
    height: 32,
    top: 14,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 171
  },
  ImageBackground_29_1072: {
    width: 24,
    height: 24,
    top: 18,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 63
  },
  View_29_1073: {
    width: 135,
    minWidth: 135,
    height: 5,
    minHeight: 5,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 120,
    top: 77,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_29_1074: {
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
  View_29_1075: {
    width: 343,
    minWidth: 343,
    height: 424,
    minHeight: 424,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16,
    top: 276,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_29_1076: {
    width: 50,
    minWidth: 50,
    minHeight: 22,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 293,
    top: 1
  },
  Text_29_1076: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_29_1077: {
    width: 58,
    minWidth: 58,
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  Text_29_1077: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_30_1030: {
    width: 343,
    minWidth: 343,
    height: 84,
    minHeight: 84,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 40,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I30_1030_19_995: {
    flexGrow: 1,
    width: 343,
    height: 84,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(41, 38, 57, 1)",
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12
  },
  ImageBackground_I30_1030_19_996: {
    flexGrow: 1,
    width: 24,
    height: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 303,
    top: 44
  },
  View_I30_1030_19_998: {
    flexGrow: 1,
    width: 97,
    height: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 127,
    top: 44,
    backgroundColor: "rgba(52, 42, 73, 1)",
    overflow: "hidden"
  },
  View_I30_1030_19_999: {
    width: 81,
    minWidth: 81,
    minHeight: 14,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 8,
    top: 5
  },
  Text_I30_1030_19_999: {
    color: "rgba(155, 81, 224, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I30_1030_19_1000: {
    flexGrow: 1,
    width: 43,
    height: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 76,
    top: 44,
    backgroundColor: "rgba(62, 43, 62, 1)",
    overflow: "hidden"
  },
  View_I30_1030_19_1001: {
    width: 27,
    minWidth: 27,
    minHeight: 14,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 8,
    top: 5
  },
  Text_I30_1030_19_1001: {
    color: "rgba(253, 91, 113, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I30_1030_19_1002: {
    flexGrow: 1,
    width: 49,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 278,
    top: 16
  },
  Text_I30_1030_19_1002: {
    color: "rgba(189, 189, 189, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I30_1030_19_1003: {
    flexGrow: 1,
    width: 64,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 76,
    top: 16
  },
  Text_I30_1030_19_1003: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I30_1030_19_1004: {
    flexGrow: 1,
    width: 44,
    height: 44,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16,
    top: 16
  },
  ImageBackground_I30_1030_19_1005: {
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
  ImageBackground_I30_1030_19_1006: {
    width: 24,
    height: 24,
    top: 10,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 10
  },
  View_30_1015: {
    width: 343,
    minWidth: 343,
    height: 84,
    minHeight: 84,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 340,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I30_1015_19_1012: {
    flexGrow: 1,
    width: 343,
    height: 84,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(41, 38, 57, 1)",
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12
  },
  ImageBackground_I30_1015_19_1013: {
    flexGrow: 1,
    width: 24,
    height: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 303,
    top: 44
  },
  View_I30_1015_19_1015: {
    flexGrow: 1,
    width: 62,
    height: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 149,
    top: 44,
    backgroundColor: "rgba(41, 51, 61, 1)",
    overflow: "hidden"
  },
  View_I30_1015_19_1016: {
    width: 46,
    minWidth: 46,
    minHeight: 14,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 8,
    top: 5
  },
  Text_I30_1015_19_1016: {
    color: "rgba(7, 224, 146, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I30_1015_19_1017: {
    flexGrow: 1,
    width: 65,
    height: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 76,
    top: 44,
    backgroundColor: "rgba(63, 60, 78, 1)",
    overflow: "hidden"
  },
  View_I30_1015_19_1018: {
    width: 49,
    minWidth: 49,
    minHeight: 14,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 8,
    top: 5
  },
  Text_I30_1015_19_1018: {
    color: "rgba(189, 189, 189, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I30_1015_19_1019: {
    flexGrow: 1,
    width: 49,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 278,
    top: 16
  },
  Text_I30_1015_19_1019: {
    color: "rgba(189, 189, 189, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I30_1015_19_1020: {
    flexGrow: 1,
    width: 150,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 76,
    top: 16
  },
  Text_I30_1015_19_1020: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I30_1015_19_1021: {
    flexGrow: 1,
    width: 44,
    height: 44,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16,
    top: 16
  },
  ImageBackground_I30_1015_19_1022: {
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
  ImageBackground_I30_1015_19_1023: {
    width: 24,
    height: 24,
    top: 10,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 10
  },
  View_30_987: {
    width: 343,
    minWidth: 343,
    height: 84,
    minHeight: 84,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 140,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I30_987_19_1027: {
    flexGrow: 1,
    width: 343,
    height: 84,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(41, 38, 57, 1)",
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12
  },
  ImageBackground_I30_987_19_1028: {
    flexGrow: 1,
    width: 24,
    height: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 303,
    top: 44
  },
  View_I30_987_19_1030: {
    flexGrow: 1,
    width: 62,
    height: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 149,
    top: 44,
    backgroundColor: "rgba(61, 49, 58, 1)",
    overflow: "hidden"
  },
  View_I30_987_19_1031: {
    width: 46,
    minWidth: 46,
    minHeight: 14,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 8,
    top: 5
  },
  Text_I30_987_19_1031: {
    color: "rgba(255, 166, 86, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I30_987_19_1032: {
    flexGrow: 1,
    width: 65,
    height: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 76,
    top: 44,
    backgroundColor: "rgba(63, 60, 78, 1)",
    overflow: "hidden"
  },
  View_I30_987_19_1033: {
    width: 49,
    minWidth: 49,
    minHeight: 14,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 8,
    top: 5
  },
  Text_I30_987_19_1033: {
    color: "rgba(189, 189, 189, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I30_987_19_1034: {
    flexGrow: 1,
    width: 49,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 278,
    top: 16
  },
  Text_I30_987_19_1034: {
    color: "rgba(189, 189, 189, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I30_987_19_1035: {
    flexGrow: 1,
    width: 80,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 76,
    top: 16
  },
  Text_I30_987_19_1035: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I30_987_19_1036: {
    flexGrow: 1,
    width: 44,
    height: 44,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16,
    top: 16
  },
  ImageBackground_I30_987_19_1037: {
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
  ImageBackground_I30_987_19_1038: {
    width: 24,
    height: 24,
    top: 10,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 10
  },
  View_30_971: {
    width: 343,
    minWidth: 343,
    height: 84,
    minHeight: 84,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 240,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I30_971_19_1041: {
    flexGrow: 1,
    width: 343,
    height: 84,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(41, 38, 57, 1)",
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12
  },
  ImageBackground_I30_971_19_1042: {
    flexGrow: 1,
    width: 24,
    height: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 303,
    top: 44
  },
  View_I30_971_19_1044: {
    flexGrow: 1,
    width: 56,
    height: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 149,
    top: 44,
    backgroundColor: "rgba(253, 91, 113, 0.10000000149011612)",
    overflow: "hidden"
  },
  View_I30_971_19_1045: {
    width: 40,
    minWidth: 40,
    minHeight: 14,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 8,
    top: 5
  },
  Text_I30_971_19_1045: {
    color: "rgba(253, 91, 113, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I30_971_19_1046: {
    flexGrow: 1,
    width: 65,
    height: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 76,
    top: 44,
    backgroundColor: "rgba(63, 60, 78, 1)",
    overflow: "hidden"
  },
  View_I30_971_19_1047: {
    width: 49,
    minWidth: 49,
    minHeight: 14,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 8,
    top: 5
  },
  Text_I30_971_19_1047: {
    color: "rgba(189, 189, 189, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I30_971_19_1048: {
    flexGrow: 1,
    width: 50,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 277,
    top: 16
  },
  Text_I30_971_19_1048: {
    color: "rgba(189, 189, 189, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I30_971_19_1049: {
    flexGrow: 1,
    width: 124,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 76,
    top: 16
  },
  Text_I30_971_19_1049: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I30_971_19_1050: {
    flexGrow: 1,
    width: 44,
    height: 44,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16,
    top: 16
  },
  ImageBackground_I30_971_19_1051: {
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
  ImageBackground_I30_971_19_1052: {
    width: 24,
    height: 24,
    top: 10,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 10
  },
  View_29_1140: {
    width: 343,
    minWidth: 343,
    height: 160,
    minHeight: 160,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16,
    top: 84,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_29_1141: {
    width: 343,
    minWidth: 343,
    height: 112,
    minHeight: 112,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 48,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_29_1142: {
    width: 343,
    minWidth: 343,
    height: 112,
    minHeight: 112,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(41, 38, 57, 1)",
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12
  },
  View_29_1143: {
    width: 132,
    minWidth: 132,
    height: 20,
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16,
    top: 68
  },
  View_29_1144: {
    width: 108,
    minWidth: 108,
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 24,
    top: 0
  },
  Text_29_1144: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_29_1145: {
    width: 12,
    minWidth: 12,
    height: 12,
    minHeight: 12,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 4
  },
  View_29_1146: {
    width: 43,
    minWidth: 43,
    height: 24,
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 284,
    top: 16,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_29_1147: {
    width: 27,
    minWidth: 27,
    minHeight: 14,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 8,
    top: 5
  },
  Text_29_1147: {
    color: "rgba(253, 91, 113, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_29_1148: {
    width: 136,
    minWidth: 136,
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16,
    top: 24
  },
  Text_29_1148: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 26,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_29_1149: {
    width: 24,
    height: 24,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 319
  },
  View_29_1150: {
    width: 53,
    minWidth: 53,
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  Text_29_1150: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_29_1151: {
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
  View_I29_1151_5_732: {
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
  View_I29_1151_5_733: {
    flexGrow: 1,
    width: 27,
    height: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 334,
    top: 13
  },
  View_I29_1151_5_734: {
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
  View_I29_1151_5_735: {
    width: 24.25,
    height: 11.5,
    top: 4.5,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 2
  },
  ImageBackground_I29_1151_5_736: {
    width: 22,
    height: 11.5,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  ImageBackground_I29_1151_5_739: {
    width: 1.25,
    height: 4.331089019775391,
    top: 3.33447265625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 23
  },
  ImageBackground_I29_1151_5_740: {
    width: 18,
    height: 7.5,
    top: 6.5,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 4
  },
  View_I29_1151_5_741: {
    flexGrow: 1,
    width: 41,
    height: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 292,
    top: 13
  },
  View_I29_1151_5_742: {
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
  View_I29_1151_5_743: {
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
  ImageBackground_I29_1151_5_744: {
    width: 15,
    height: 10.5,
    top: 4.60498046875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 23.872398376464844
  },
  View_I29_1151_5_748: {
    flexGrow: 1,
    width: 17.25,
    height: 10.5,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 293.5,
    top: 17.75
  },
  View_I29_1151_5_749: {
    width: 17.25,
    height: 10.5,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_I29_1151_5_750: {
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
  View_I29_1151_5_751: {
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
  View_I29_1151_5_752: {
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
  View_I29_1151_5_753: {
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
  View_I29_1151_5_754: {
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
  View_I29_1151_5_755: {
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
  View_I29_1151_5_756: {
    width: 16,
    height: 16,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  ImageBackground_I29_1151_5_757: {
    width: 10.5,
    height: 10.5,
    top: 4,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 2.5
  },
  View_I29_1151_5_758: {
    width: 36,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 2.5,
    top: 0
  },
  Text_I29_1151_5_758: {
    color: "rgba(255, 255, 255, 1)",
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
