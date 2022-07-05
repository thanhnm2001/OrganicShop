import axios from "axios";

export default function callApiProduct() {
    return axios.get("http://localhost:8080/product")


}