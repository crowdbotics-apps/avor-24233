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
      <View style={styles.View_12_292}>
        <View style={styles.View_12_25} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fbca/7f20/13b9ae4d3939323c24c12d5d516e7393"
          }}
          style={styles.ImageBackground_12_275}
        />
        <View style={styles.View_12_274}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7c54/5c89/dc6e0a10861fc5cd909f1c34b3257506"
            }}
            style={styles.ImageBackground_8_3}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8e10/17f4/0af5ab4e40ab3f3a5501c3ffa39c4a9d"
            }}
            style={styles.ImageBackground_12_272}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/22ca/f24f/b8337202823c716d873a7e1b19878340"
          }}
          style={styles.ImageBackground_12_279}
        />
        <View style={styles.View_12_24} />
      </View>
      <View style={styles.View_12_192}>
        <View style={styles.View_29_871}>
          <View style={styles.View_I29_871_19_1065} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9ab7/ceba/fdf645d9d9365c0a8a034a2b6c102f6b"
            }}
            style={styles.ImageBackground_I29_871_19_1066}
          />
          <View style={styles.View_I29_871_19_1068}>
            <View style={styles.View_I29_871_19_1069}>
              <Text style={styles.Text_I29_871_19_1069}>Coding</Text>
            </View>
          </View>
          <View style={styles.View_I29_871_19_1070}>
            <View style={styles.View_I29_871_19_1071}>
              <Text style={styles.Text_I29_871_19_1071}>Personal</Text>
            </View>
          </View>
          <View style={styles.View_I29_871_19_1072}>
            <Text style={styles.Text_I29_871_19_1072}>00:24:52</Text>
          </View>
          <View style={styles.View_I29_871_19_1073}>
            <Text style={styles.Text_I29_871_19_1073}>
              Learn HTML &amp; CSS
            </Text>
          </View>
          <View style={styles.View_I29_871_19_1074}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/42a2/768f/d92f62c5a1c17d510ae77614ec299d06"
              }}
              style={styles.ImageBackground_I29_871_19_1075}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4686/f545/2940f7cb433a84741017e2c47417f202"
              }}
              style={styles.ImageBackground_I29_871_19_1076}
            />
          </View>
        </View>
        <View style={styles.View_29_827}>
          <View style={styles.View_I29_827_19_1081} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9ab7/ceba/fdf645d9d9365c0a8a034a2b6c102f6b"
            }}
            style={styles.ImageBackground_I29_827_19_1082}
          />
          <View style={styles.View_I29_827_19_1084}>
            <View style={styles.View_I29_827_19_1085}>
              <Text style={styles.Text_I29_827_19_1085}>Workout</Text>
            </View>
          </View>
          <View style={styles.View_I29_827_19_1086}>
            <View style={styles.View_I29_827_19_1087}>
              <Text style={styles.Text_I29_827_19_1087}>Personal</Text>
            </View>
          </View>
          <View style={styles.View_I29_827_19_1088}>
            <Text style={styles.Text_I29_827_19_1088}>00:14:06</Text>
          </View>
          <View style={styles.View_I29_827_19_1089}>
            <Text style={styles.Text_I29_827_19_1089}>100x Sit-Up</Text>
          </View>
          <View style={styles.View_I29_827_19_1090}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ab6e/c56a/6cb77948e391885b0d49141d7882b718"
              }}
              style={styles.ImageBackground_I29_827_19_1091}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/565e/2364/2fe4895e56474c29cb42a1d6417ccbdb"
              }}
              style={styles.ImageBackground_I29_827_19_1092}
            />
          </View>
        </View>
        <View style={styles.View_29_720}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e8ea/7b9d/0a5df0efc93552dd02e9125043eab955"
            }}
            style={styles.ImageBackground_I29_720_19_1110}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9ab7/ceba/fdf645d9d9365c0a8a034a2b6c102f6b"
            }}
            style={styles.ImageBackground_I29_720_19_1111}
          />
          <View style={styles.View_I29_720_19_1113}>
            <View style={styles.View_I29_720_19_1114}>
              <Text style={styles.Text_I29_720_19_1114}>Rasion Project</Text>
            </View>
          </View>
          <View style={styles.View_I29_720_19_1115}>
            <View style={styles.View_I29_720_19_1116}>
              <Text style={styles.Text_I29_720_19_1116}>Work</Text>
            </View>
          </View>
          <View style={styles.View_I29_720_19_1117}>
            <Text style={styles.Text_I29_720_19_1117}>00:42:21</Text>
          </View>
          <View style={styles.View_I29_720_19_1118}>
            <Text style={styles.Text_I29_720_19_1118}>UI Design</Text>
          </View>
          <View style={styles.View_I29_720_19_1119}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4b71/730e/3a0c81712fe215dd1600bad80cefb9b1"
              }}
              style={styles.ImageBackground_I29_720_19_1120}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5d73/3f16/0f29d2752fc33de1a929412c2ec5a935"
              }}
              style={styles.ImageBackground_I29_720_19_1121}
            />
          </View>
        </View>
        <View style={styles.View_12_255}>
          <Text style={styles.Text_12_255}>See All</Text>
        </View>
        <View style={styles.View_12_256}>
          <Text style={styles.Text_12_256}>Today</Text>
        </View>
        <View style={styles.View_29_769}>
          <View style={styles.View_I29_769_19_1095} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9ab7/ceba/fdf645d9d9365c0a8a034a2b6c102f6b"
            }}
            style={styles.ImageBackground_I29_769_19_1096}
          />
          <View style={styles.View_I29_769_19_1098}>
            <View style={styles.View_I29_769_19_1099}>
              <Text style={styles.Text_I29_769_19_1099}>Reading</Text>
            </View>
          </View>
          <View style={styles.View_I29_769_19_1100}>
            <View style={styles.View_I29_769_19_1101}>
              <Text style={styles.Text_I29_769_19_1101}>Personal</Text>
            </View>
          </View>
          <View style={styles.View_I29_769_19_1102}>
            <Text style={styles.Text_I29_769_19_1102}>00:21:09</Text>
          </View>
          <View style={styles.View_I29_769_19_1103}>
            <Text style={styles.Text_I29_769_19_1103}>
              Read 10 pages of book
            </Text>
          </View>
          <View style={styles.View_I29_769_19_1104}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bcc6/5930/d6156f3545cfed420406a6a64d2d5a59"
              }}
              style={styles.ImageBackground_I29_769_19_1105}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4262/56f2/cac059109091998b8015293a5b3f3704"
              }}
              style={styles.ImageBackground_I29_769_19_1106}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_12_191}>
        <View style={styles.View_7_2430}>
          <View style={styles.View_7_2431} />
          <View style={styles.View_12_190}>
            <View style={styles.View_7_2433}>
              <Text style={styles.Text_7_2433}>Rasion Project</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/aeb1/d6c9/9a985489fd255578fa34f81f1e16101f"
              }}
              style={styles.ImageBackground_7_2432}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0cbb/d1a7/34440fea17b989bc44098ad20038ffd6"
            }}
            style={styles.ImageBackground_12_187}
          />
          <View style={styles.View_7_2434}>
            <Text style={styles.Text_7_2434}>00:32:10</Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b227/dcdd/46ec9614cdb94b5022efa947444d2691"
          }}
          style={styles.ImageBackground_7_2429}
        />
        <View style={styles.View_7_2406}>
          <Text style={styles.Text_7_2406}>Task</Text>
        </View>
      </View>
      <View style={styles.View_7_2437}>
        <View style={styles.View_I7_2437_5_732} />
        <View style={styles.View_I7_2437_5_733}>
          <View style={styles.View_I7_2437_5_734} />
          <View style={styles.View_I7_2437_5_735}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2a47/9e1a/29a578065fd0802d1eb80bd0c6f6a2c1"
              }}
              style={styles.ImageBackground_I7_2437_5_736}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2efc/5d27/f4dc546f7d01bd97889c6b76b814ca41"
              }}
              style={styles.ImageBackground_I7_2437_5_739}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5403/467c/5afbbc19bd2a11ab7331d78c50100dc8"
            }}
            style={styles.ImageBackground_I7_2437_5_740}
          />
        </View>
        <View style={styles.View_I7_2437_5_741}>
          <View style={styles.View_I7_2437_5_742} />
          <View style={styles.View_I7_2437_5_743} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2c82/44cf/f2fc1b194c59ede34fa0e0eec75f28d6"
            }}
            style={styles.ImageBackground_I7_2437_5_744}
          />
        </View>
        <View style={styles.View_I7_2437_5_748}>
          <View style={styles.View_I7_2437_5_749}>
            <View style={styles.View_I7_2437_5_750} />
            <View style={styles.View_I7_2437_5_751} />
            <View style={styles.View_I7_2437_5_752} />
            <View style={styles.View_I7_2437_5_753} />
          </View>
        </View>
        <View style={styles.View_I7_2437_5_754}>
          <View style={styles.View_I7_2437_5_755}>
            <View style={styles.View_I7_2437_5_756} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5a1a/2aa1/af5a0f1cad64804a927cee340e0a050e"
              }}
              style={styles.ImageBackground_I7_2437_5_757}
            />
          </View>
          <View style={styles.View_I7_2437_5_758}>
            <Text style={styles.Text_I7_2437_5_758}>12:22</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_12_292: {
    width: 295,
    minWidth: 295,
    height: 76,
    minHeight: 76,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 40,
    top: 728,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_12_25: {
    flexGrow: 1,
    width: 135,
    height: 5,
    minHeight: 5,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 80,
    top: 71,
    backgroundColor: "rgba(60, 60, 60, 1)"
  },
  ImageBackground_12_275: {
    width: 28,
    height: 28,
    top: 8,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 267
  },
  View_12_274: {
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
  ImageBackground_8_3: {
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
  ImageBackground_12_272: {
    width: 24,
    height: 24,
    top: 10,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 10
  },
  ImageBackground_12_279: {
    width: 28,
    height: 28,
    top: 8,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_12_24: {
    width: 135,
    minWidth: 135,
    height: 5,
    minHeight: 5,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 80,
    top: 69,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_12_192: {
    width: 343,
    minWidth: 343,
    height: 427,
    minHeight: 427,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16,
    top: 270,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_29_871: {
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
  View_I29_871_19_1065: {
    flexGrow: 1,
    width: 343,
    height: 84,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12
  },
  ImageBackground_I29_871_19_1066: {
    flexGrow: 1,
    width: 24,
    height: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 303,
    top: 44
  },
  View_I29_871_19_1068: {
    flexGrow: 1,
    width: 56,
    height: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 149,
    top: 44,
    backgroundColor: "rgba(255, 239, 241, 1)",
    overflow: "hidden"
  },
  View_I29_871_19_1069: {
    width: 40,
    minWidth: 40,
    minHeight: 14,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 8,
    top: 5
  },
  Text_I29_871_19_1069: {
    color: "rgba(253, 91, 113, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I29_871_19_1070: {
    flexGrow: 1,
    width: 65,
    height: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 76,
    top: 44,
    backgroundColor: "rgba(242, 242, 242, 1)",
    overflow: "hidden"
  },
  View_I29_871_19_1071: {
    width: 49,
    minWidth: 49,
    minHeight: 14,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 8,
    top: 5
  },
  Text_I29_871_19_1071: {
    color: "rgba(130, 130, 130, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I29_871_19_1072: {
    flexGrow: 1,
    width: 50,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 277,
    top: 16
  },
  Text_I29_871_19_1072: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I29_871_19_1073: {
    flexGrow: 1,
    width: 124,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 76,
    top: 16
  },
  Text_I29_871_19_1073: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I29_871_19_1074: {
    flexGrow: 1,
    width: 44,
    height: 44,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16,
    top: 16
  },
  ImageBackground_I29_871_19_1075: {
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
  ImageBackground_I29_871_19_1076: {
    width: 24,
    height: 24,
    top: 10,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 10
  },
  View_29_827: {
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
  View_I29_827_19_1081: {
    flexGrow: 1,
    width: 343,
    height: 84,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12
  },
  ImageBackground_I29_827_19_1082: {
    flexGrow: 1,
    width: 24,
    height: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 303,
    top: 44
  },
  View_I29_827_19_1084: {
    flexGrow: 1,
    width: 62,
    height: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 149,
    top: 44,
    backgroundColor: "rgba(254, 245, 237, 1)",
    overflow: "hidden"
  },
  View_I29_827_19_1085: {
    width: 46,
    minWidth: 46,
    minHeight: 14,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 8,
    top: 5
  },
  Text_I29_827_19_1085: {
    color: "rgba(255, 166, 86, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I29_827_19_1086: {
    flexGrow: 1,
    width: 65,
    height: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 76,
    top: 44,
    backgroundColor: "rgba(242, 242, 242, 1)",
    overflow: "hidden"
  },
  View_I29_827_19_1087: {
    width: 49,
    minWidth: 49,
    minHeight: 14,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 8,
    top: 5
  },
  Text_I29_827_19_1087: {
    color: "rgba(130, 130, 130, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I29_827_19_1088: {
    flexGrow: 1,
    width: 49,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 278,
    top: 16
  },
  Text_I29_827_19_1088: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I29_827_19_1089: {
    flexGrow: 1,
    width: 80,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 76,
    top: 16
  },
  Text_I29_827_19_1089: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I29_827_19_1090: {
    flexGrow: 1,
    width: 44,
    height: 44,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16,
    top: 16
  },
  ImageBackground_I29_827_19_1091: {
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
  ImageBackground_I29_827_19_1092: {
    width: 24,
    height: 24,
    top: 10,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 10
  },
  View_29_720: {
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
  ImageBackground_I29_720_19_1110: {
    flexGrow: 1,
    width: 343,
    height: 84,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  ImageBackground_I29_720_19_1111: {
    flexGrow: 1,
    width: 24,
    height: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 303,
    top: 44
  },
  View_I29_720_19_1113: {
    flexGrow: 1,
    width: 97,
    height: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 127,
    top: 44,
    backgroundColor: "rgba(245, 238, 252, 1)",
    overflow: "hidden"
  },
  View_I29_720_19_1114: {
    width: 81,
    minWidth: 81,
    minHeight: 14,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 8,
    top: 5
  },
  Text_I29_720_19_1114: {
    color: "rgba(155, 81, 224, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I29_720_19_1115: {
    flexGrow: 1,
    width: 43,
    height: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 76,
    top: 44,
    backgroundColor: "rgba(255, 239, 241, 1)",
    overflow: "hidden"
  },
  View_I29_720_19_1116: {
    width: 27,
    minWidth: 27,
    minHeight: 14,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 8,
    top: 5
  },
  Text_I29_720_19_1116: {
    color: "rgba(253, 91, 113, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I29_720_19_1117: {
    flexGrow: 1,
    width: 48,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 279,
    top: 16
  },
  Text_I29_720_19_1117: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I29_720_19_1118: {
    flexGrow: 1,
    width: 64,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 76,
    top: 16
  },
  Text_I29_720_19_1118: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I29_720_19_1119: {
    flexGrow: 1,
    width: 44,
    height: 44,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16,
    top: 16
  },
  ImageBackground_I29_720_19_1120: {
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
  ImageBackground_I29_720_19_1121: {
    width: 24,
    height: 24,
    top: 10,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 10
  },
  View_12_255: {
    width: 50,
    minWidth: 50,
    minHeight: 22,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 293,
    top: 1
  },
  Text_12_255: {
    color: "rgba(7, 4, 23, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_12_256: {
    width: 58,
    minWidth: 58,
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  Text_12_256: {
    color: "rgba(7, 4, 23, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_29_769: {
    width: 343,
    minWidth: 343,
    height: 87,
    minHeight: 87,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 340,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I29_769_19_1095: {
    flexGrow: 1,
    width: 343,
    height: 87,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12
  },
  ImageBackground_I29_769_19_1096: {
    flexGrow: 1,
    width: 24,
    height: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 303,
    top: 47
  },
  View_I29_769_19_1098: {
    flexGrow: 1,
    width: 62,
    height: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 149,
    top: 47,
    backgroundColor: "rgba(230, 252, 244, 1)",
    overflow: "hidden"
  },
  View_I29_769_19_1099: {
    width: 46,
    minWidth: 46,
    minHeight: 14,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 8,
    top: 5
  },
  Text_I29_769_19_1099: {
    color: "rgba(7, 224, 146, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I29_769_19_1100: {
    flexGrow: 1,
    width: 65,
    height: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 76,
    top: 47,
    backgroundColor: "rgba(242, 242, 242, 1)",
    overflow: "hidden"
  },
  View_I29_769_19_1101: {
    width: 49,
    minWidth: 49,
    minHeight: 14,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 8,
    top: 5
  },
  Text_I29_769_19_1101: {
    color: "rgba(130, 130, 130, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I29_769_19_1102: {
    flexGrow: 1,
    width: 49,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 278,
    top: 19
  },
  Text_I29_769_19_1102: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I29_769_19_1103: {
    flexGrow: 1,
    width: 150,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 76,
    top: 19
  },
  Text_I29_769_19_1103: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I29_769_19_1104: {
    flexGrow: 1,
    width: 44,
    height: 44,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16,
    top: 16
  },
  ImageBackground_I29_769_19_1105: {
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
  ImageBackground_I29_769_19_1106: {
    width: 24,
    height: 24,
    top: 10,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 10
  },
  View_12_191: {
    width: 343,
    minWidth: 343,
    height: 162,
    minHeight: 162,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16,
    top: 76,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_7_2430: {
    width: 343,
    minWidth: 343,
    height: 114,
    minHeight: 114,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 48,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_7_2431: {
    width: 343,
    minWidth: 343,
    height: 114,
    minHeight: 114,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12
  },
  View_12_190: {
    width: 132,
    minWidth: 132,
    height: 20,
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16,
    top: 70
  },
  View_7_2433: {
    width: 108,
    minWidth: 108,
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 24,
    top: 0
  },
  Text_7_2433: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_7_2432: {
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
  ImageBackground_12_187: {
    width: 24,
    height: 24,
    top: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 303
  },
  View_7_2434: {
    width: 136,
    minWidth: 136,
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16,
    top: 26
  },
  Text_7_2434: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 26,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_7_2429: {
    width: 24,
    height: 24,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 319
  },
  View_7_2406: {
    width: 53,
    minWidth: 53,
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  Text_7_2406: {
    color: "rgba(7, 4, 23, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_2437: {
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
  View_I7_2437_5_732: {
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
  View_I7_2437_5_733: {
    flexGrow: 1,
    width: 27,
    height: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 334,
    top: 13
  },
  View_I7_2437_5_734: {
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
  View_I7_2437_5_735: {
    width: 24.25,
    height: 11.5,
    top: 4.5,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 2
  },
  ImageBackground_I7_2437_5_736: {
    width: 22,
    height: 11.5,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  ImageBackground_I7_2437_5_739: {
    width: 1.25,
    height: 4.331089019775391,
    top: 3.33447265625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 23
  },
  ImageBackground_I7_2437_5_740: {
    width: 18,
    height: 7.5,
    top: 6.5,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 4
  },
  View_I7_2437_5_741: {
    flexGrow: 1,
    width: 41,
    height: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 292,
    top: 13
  },
  View_I7_2437_5_742: {
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
  View_I7_2437_5_743: {
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
  ImageBackground_I7_2437_5_744: {
    width: 15,
    height: 10.5,
    top: 4.60498046875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 23.8724365234375
  },
  View_I7_2437_5_748: {
    flexGrow: 1,
    width: 17.25,
    height: 10.5,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 293.5,
    top: 17.75
  },
  View_I7_2437_5_749: {
    width: 17.25,
    height: 10.5,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_I7_2437_5_750: {
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
  View_I7_2437_5_751: {
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
  View_I7_2437_5_752: {
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
  View_I7_2437_5_753: {
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
  View_I7_2437_5_754: {
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
  View_I7_2437_5_755: {
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
  View_I7_2437_5_756: {
    width: 16,
    height: 16,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  ImageBackground_I7_2437_5_757: {
    width: 10.5,
    height: 10.5,
    top: 4,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 2.5
  },
  View_I7_2437_5_758: {
    width: 36,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 2.5,
    top: 0
  },
  Text_I7_2437_5_758: {
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
