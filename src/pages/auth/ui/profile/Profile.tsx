import { useContext, useState } from "react";
import "./Profile.css";
import AppContext from "../../../../features/_context/AppContext";

export default function Profile() {
  const { user } = useContext(AppContext);
  const [deleteConfirm, setDeleteConfirm] = useState(false);
  const { setUser } = useContext(AppContext);
  const deleteProfile = () => {
    if (!deleteConfirm) return;
  };
  return (
    <div className="container mt-4">
      <div className="card shadow-sm">
        <div className="card-body">
          <div className="text-center">
            <i
              className="bi bi-person-circle"
              style={{
                fontSize: "90px",
                color: "#0d6efd",
              }}
            />

            <h3 className="mt-3">{user.login}</h3>

            <p className="text-muted">{user.email}</p>
          </div>

          <hr />

          <button
            className="btn btn-outline-danger w-100 mb-4"
            onClick={() => {
              localStorage.removeItem("user");
              setUser(undefined);
            }}
          >
            <i className="bi bi-box-arrow-right me-2"></i>
            Вийти з акаунта
          </button>

          <div className="card bg-light">
            <div className="card-body">
              <h5 className="text-danger">Видалення профілю</h5>

              <p className="small text-muted">
                Після видалення профіль неможливо буде відновити.
              </p>

              <div className="form-check mb-3">
                <input
                  className="form-check-input"
                  type="checkbox"
                  checked={deleteConfirm}
                  onChange={(e) => setDeleteConfirm(e.target.checked)}
                />

                <label className="form-check-label">
                  Я підтверджую видалення профілю
                </label>
              </div>

              <button className="btn btn-danger" disabled={!deleteConfirm}>
                Видалити профіль
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
/*
Д.З. Створити (наповнити) сторінку "Кабінет користувача" (профіль)
Додати кнопку виходу з облікового запису
Включити елементи (чекбокс + кнопка) для видалення профілю
https://gdpr-info.eu/art-17-gdpr/
*/
