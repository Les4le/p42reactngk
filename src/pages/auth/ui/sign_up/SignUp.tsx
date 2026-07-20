import { useEffect, useState } from "react";
import { Link } from "react-router";
import "./SignUp.css";

interface IFormData {
  login: string;
  email: string;
  password: string;
  repeat: string;
  isAgree: boolean;
}

const initialFormData: IFormData = {
  login: "",
  email: "",
  password: "",
  repeat: "",
  isAgree: false,
};

function isEmailValid(email: string): boolean {
  return /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(email);
}

const emailFeedback = "Адреса е-пошти повинна містити символи '@' та '.'";

export default function SignUp() {
  const [formData, setFormData] = useState<IFormData>(initialFormData);

  const [errors, setErrors] = useState({
    login: "",
    email: "",
    password: "",
    repeat: "",
  });

  const validate = () => {
    const newErrors = {
      login: "",
      email: "",
      password: "",
      repeat: "",
    };

    if (formData.login.trim().length < 2) {
      newErrors.login = "Логін повинен містити мінімум 2 символи";
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Некоректна пошта";
    }

    if (formData.password.length < 8) {
      newErrors.password = "Пароль повинен містити мінімум 8 символів";
    } else {
      if (!/[A-Za-z]/.test(formData.password)) {
        newErrors.password = "Пароль повинен містити літери";
      }

      if (!/\d/.test(formData.password)) {
        newErrors.password = "Пароль повинен містити цифри";
      }
    }

    if (formData.password !== formData.repeat) {
      newErrors.repeat = "Паролі не співпадають";
    }

    setErrors(newErrors);

    return Object.values(newErrors).every((v) => v === "");
  };

  const valids = {
    email: isEmailValid(formData.email),
  };

  const isFormValid: boolean =
    formData.login.length > 2 &&
    formData.password.length > 2 &&
    valids.email &&
    formData.password == formData.repeat &&
    formData.isAgree;

  const registerClick = () => {
    if (!validate()) return;

    console.log(formData);

    // регистрация
  };

  useEffect(() => {
    validate();
  }, [formData.login, formData.email, formData.password, formData.repeat]);

  return (
    <div className="reg-form-content mx-3 my-4">
      <div className="input-group mb-3">
        <span className="input-group-text" id="email-addon">
          <i className="bi bi-envelope-at"></i>
        </span>
        <input
          className={
            "form-control " +
            (formData.email.length == 0
              ? ""
              : valids.email
                ? "is-valid"
                : "is-invalid")
          }
          type="email"
          placeholder="E-mail"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          aria-label="User E-mail"
          aria-describedby="email-addon"
        />
        {errors.email && (
          <div className="text-danger small mt-1">{errors.email}</div>
        )}

        <div className="invalid-feedback">{emailFeedback}</div>
      </div>
      <div className="input-group mb-3">
        <span className="input-group-text" id="login-addon">
          <i className="bi bi-lock"></i>
        </span>
        <input
          className="form-control"
          type="text"
          placeholder="Логін"
          value={formData.login}
          onChange={(e) => setFormData({ ...formData, login: e.target.value })}
          aria-label="Username"
          aria-describedby="login-addon"
        />
        {errors.login && (
          <div className="text-danger small mt-1">{errors.login}</div>
        )}
      </div>
      <div className="input-group mb-3">
        <span className="input-group-text" id="password-addon">
          <i className="bi bi-key"></i>
        </span>
        <input
          className="form-control"
          type="password"
          placeholder="********"
          value={formData.password}
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
          aria-label="Password"
          aria-describedby="password-addon"
        />
        {errors.password && (
          <div className="text-danger small mt-1">{errors.password}</div>
        )}
      </div>
      <div className="input-group mb-3">
        <span className="input-group-text" id="repeat-addon">
          <i className="bi bi-key-fill"></i>
        </span>
        <input
          className="form-control"
          type="password"
          placeholder="********"
          value={formData.repeat}
          onChange={(e) => setFormData({ ...formData, repeat: e.target.value })}
          aria-label="Repeat Password"
          aria-describedby="repeat-addon"
        />
        {errors.repeat && (
          <div className="text-danger small mt-1">{errors.repeat}</div>
        )}
      </div>
      <div className="input-group mb-3">
        <div className="input-group-text">
          <input
            className="form-check-input mt-0"
            type="checkbox"
            onChange={(e) =>
              setFormData({ ...formData, isAgree: e.target.checked })
            }
            aria-label="Погодження з правилами сайту"
          />
        </div>
        <input
          type="text"
          className="form-control"
          aria-label="Погодження з правилами сайту"
          value="Я погоджуюсь з правилами сайту"
          readOnly
        />
      </div>
      <div className="policyLink">
        <Link to="/privacy" className="policyTextLink">
          Політика конфіденціальності
        </Link>
      </div>
      <button
        onClick={registerClick}
        disabled={!isFormValid || !Object.values(errors).every((v) => v === "")}
        className={`btn ${isFormValid ? "btn-primary" : "btn-secondary"}`}
      >
        Реєстрація
      </button>
    </div>
  );
}
