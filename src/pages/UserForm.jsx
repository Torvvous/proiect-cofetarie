import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import { Eye, EyeOff } from "lucide-react";

import login_banner from "../assets/userform-cover.png";
import email_icon from "../assets/icons8-email.png";
import password_icon from "../assets/icons8-password.png";

function UserForm() {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState("");

  const [remember, setRemember] = useState(false);

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const validatePassword = (pwd) => {
    const minLength = pwd.length >= 12;
    const hasUpper = /[A-Z]/.test(pwd);
    const hasLower = /[a-z]/.test(pwd);
    const hasNumber = /[0-9]/.test(pwd);
    const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(pwd);
    return {
      valid: minLength && hasUpper && hasLower && hasNumber && hasSpecial,
      strength:
        pwd.length < 12
          ? "Slabă"
          : hasUpper && hasLower && hasNumber && hasSpecial
          ? "Puternică"
          : "Mediocră",
    };
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let valid = true;

    if (!validateEmail(email)) {
      setEmailError("Introduceți un email valid.");
      valid = false;
    } else {
      setEmailError("");
    }

    const { valid: pwdValid, strength } = validatePassword(password);
    if (!pwdValid) {
      setPasswordError(
        "Parola trebuie să aibă minim 12 caractere și să conțină o literă mare, o literă mică, un număr și un caracter special."
      );
      valid = false;
    } else {
      setPasswordError("");
    }

    setPasswordStrength(strength);

    if (!valid) return;

    console.log({ email, password, remember });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-yellow-100 py-12 px-4">
      <div className="flex flex-col md:flex-row w-full max-w-[900px] rounded-2xl overflow-hidden shadow-xl bg-white">
        {/* Left Side */}
        <div className="w-full md:w-1/2 bg-orange-100 flex flex-col items-center justify-center">
          <img
            src={login_banner}
            alt="Sign up visual"
            className="w-full h-64 md:h-full object-cover md:rounded-l-xl mb-4 md:mb-0"
          />
          <Link to="/signup" className="block md:hidden mb-4">
            <h2 className="text-lg underline font-semibold text-center text-orange-600">
              Creează un cont
            </h2>
          </Link>
        </div>

        {/* Right Side */}
        <div className="w-full md:w-1/2 p-6 md:p-8 my-4 md:my-8">
          <h2 className="text-2xl font-bold text-center">INTRAȚI ÎN CONT</h2>
          <form onSubmit={handleSubmit} className="space-y-4 mb-2 mt-8">
            {/* Email */}
            <div>
              <div className="flex items-center gap-1 mb-1">
                <label className="text-sm font-medium">Email</label>
                <img
                  src={email_icon}
                  alt="email icon"
                  className="w-5 h-5 mb-1"
                />
              </div>
              <input
                type="email"
                className={`w-full border rounded-md p-2 focus:outline-orange-400 ${
                  emailError ? "border-red-500" : ""
                }`}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Introduceți email-ul"
                required
              />
              {emailError && (
                <p className="text-sm text-red-600 mt-1">{emailError}</p>
              )}
            </div>

            {/* Password */}
            <div>
              <div className="flex items-center gap-1 mb-1">
                <label className="text-sm font-medium">Parolă</label>
                <img
                  src={password_icon}
                  alt="password icon"
                  className="w-5 h-5"
                />
              </div>
              <div className="relative">
                <input
                  type={passwordVisible ? "text" : "password"}
                  className={`w-full border rounded-md p-2 pr-10 focus:outline-orange-400 ${
                    passwordError ? "border-red-500" : ""
                  }`}
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    const { strength } = validatePassword(e.target.value);
                    setPasswordStrength(strength);
                  }}
                  placeholder="Ex: ParolaMea@2024"
                  required
                />
                <button
                  type="button"
                  className="absolute right-2 top-2 text-gray-600"
                  onClick={() => setPasswordVisible((prev) => !prev)}
                >
                  {passwordVisible ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
              {passwordError && (
                <p className="text-sm text-red-600 mt-1">{passwordError}</p>
              )}
              {password && !passwordError && (
                <p
                  className={`text-sm mt-1 ${
                    passwordStrength === "Puternică"
                      ? "text-green-600"
                      : passwordStrength === "Mediocră"
                      ? "text-yellow-600"
                      : "text-red-600"
                  }`}
                >
                  Forță parolă: {passwordStrength}
                </p>
              )}
            </div>

            {/* Remember Me */}
            <div className="flex items-center">
              <input
                type="checkbox"
                checked={remember}
                onChange={(e) => setRemember(e.target.checked)}
                className="mr-2"
              />
              <label className="text-sm">Ține-mă minte</label>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-orange-600 text-white py-2 rounded-md hover:bg-orange-700 transition"
            >
              Autentificare
            </button>

            {/* Social */}
            <div className="flex flex-col items-center space-y-2 mt-4 pt-8">
              <p className="text-sm text-gray-500">sau autentifică-te cu</p>
              <div className="flex space-x-4">
                <button
                  type="button"
                  className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100"
                >
                  <FcGoogle size={20} /> Google
                </button>
                <button
                  type="button"
                  className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100 text-blue-600"
                >
                  <FaFacebookF size={20} /> Facebook
                </button>
              </div>
            </div>
          </form>
          {/* Show "Creează un cont" only on larger screens */}
          <Link to="/signup" className="hidden md:block mt-6 text-center">
            <h2 className="text-base underline font-semibold text-orange-600">
              Creează un cont
            </h2>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default UserForm;
