import Svg, { Path } from "react-native-svg";
import { useSelector } from "react-redux";
import ChangeTheme from "../../configs/ChangeTheme";

const EditIcon = ({ fill = "#fff", size = 24, ...props }) => {
  const theme = useSelector((state) => state.theme.theme);

  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      {...props}
    >
      <Path
        fill={fill}
        d="m19.3 8.925l-4.25-4.2l1.4-1.4q.575-.575 1.413-.575t1.412.575l1.4 1.4q.575.575.6 1.388t-.55 1.387L19.3 8.925ZM17.85 10.4L7.25 21H3v-4.25l10.6-10.6l4.25 4.25Z"
      />
    </Svg>
  );
};

const styles = StyleSheet.create({});

export default EditIcon;
