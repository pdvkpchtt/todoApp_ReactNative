import { Pressable, StyleSheet, Text, View } from "react-native";
import Modal from "react-native-modal";
import { useSelector } from "react-redux";

import ChangeTheme from "../../configs/ChangeTheme";

import CrossIcon from "../../shared/Icons/CrossIcon";
import TextMain from "../../shared/Text/TextMain";
import CustomButton from "../../shared/ui/CustomButton";

const DeleteModal = ({ visible, setVisible, head, id }) => {
  const theme = useSelector((state) => state.theme.theme);

  return (
    <Modal
      isVisible={visible}
      backdropOpacity={0.8}
      backdropTransitionOutTiming={10}
      animationIn="slideInUp"
      animationOut="slideOutDown"
      onBackdropPress={() => setVisible(false)}
      style={{
        justifyContent: "flex-end",
        marginHorizontal: 16,
        marginBottom: 16,
      }}
    >
      <View
        style={{
          backgroundColor: ChangeTheme(theme).bgColor,
          borderRadius: 35,
        }}
      >
        {/* header */}
        <View
          style={{
            backgroundColor: ChangeTheme(theme).accent,
            height: 55,
            borderTopLeftRadius: 35,
            borderTopRightRadius: 35,
            elevation: 3,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingHorizontal: 17.5,
          }}
        >
          <CrossIcon fill={ChangeTheme(theme).accent} />
          <Text
            style={{
              fontSize: 20,
              lineHeight: 30,
              fontFamily: "SF-Pro-Display-Medium",
              color: "#fff",
              flex: 1,
              textAlign: "center",
              marginHorizontal: 16,
            }}
            numberOfLines={1}
          >
            {head}
          </Text>
          <Pressable onPress={() => setVisible(false)}>
            {({ pressed }) => {
              return (
                <CrossIcon
                  fill={pressed ? ChangeTheme(theme).whitePressed : "#fff"}
                />
              );
            }}
          </Pressable>
        </View>
        {/* header */}

        {/* body */}
        <View
          style={{
            padding: 16,
          }}
        >
          <CustomButton text="Delete" onPress={() => setVisible(false)} />
        </View>
        {/* body */}
      </View>
    </Modal>
  );
};

export default DeleteModal;
