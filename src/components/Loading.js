import LoadImg from "../assets/img/cute.gif";
import style from "../assets/css/Loading.module.css";

function Loading() {
    return(
        <div>
            <div className = {style.wrap}>
                    <h2>Loading...</h2>
                    <img src = {LoadImg} />
            </div>
        </div>
    );
}

export default Loading;