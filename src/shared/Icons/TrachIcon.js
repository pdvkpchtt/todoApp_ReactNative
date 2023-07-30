import Svg, { Path } from "react-native-svg";
import { useSelector } from "react-redux";
import ChangeTheme from "../../configs/ChangeTheme";

const TrachIcon = ({ fill = "#fff", active, ...props }) => {
  const theme = useSelector((state) => state.theme.theme);

  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <Path
        fill={ChangeTheme(theme).accent}
        d="M7 21q-.825 0-1.413-.588T5 19V6H4V4h5V3h6v1h5v2h-1v13q0 .825-.588 1.413T17 21H7ZM17 6H7v13h10V6ZM9 17h2V8H9v9Zm4 0h2V8h-2v9ZM7 6v13V6Z"
      />
    </Svg>
  );
};
export default TrachIcon;
