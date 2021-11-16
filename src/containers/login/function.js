import { useNavigate } from "react-router";
import { Login } from ".";

export default function (props) {
    const navigation = useNavigate();
  
    return <Login navigation={navigation} />;
}