import { useContext } from "react";
import "./ui/Alert.css";
import AppContext from "../_context/AppContext";
import type IAlertData from "./model/IAlertData";

export default function Alert({ data }: { data: IAlertData }) {
  const { showAlert } = useContext(AppContext);

  return (
    <div className="alert-bg">
      <div className="alert-fg">
        <h4 className="alert-title">{data.title ?? "Повідомлення"}</h4>

        <p className="alert-message">{data.message}</p>

        <button className="btn btn-primary" onClick={() => showAlert(null)}>
          OK
        </button>
      </div>
    </div>
  );
}
/*
Д.З. Реалізувати відображення на модальному вікні Alert
заголовку повідомлення та його тексту
Впровадити стилізацію модального вікна
*/
