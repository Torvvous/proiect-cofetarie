import { Link, useLocation } from "react-router-dom";

import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import { Eye, EyeOff } from "lucide-react";

function Signup() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const [agree, setAgree] = useState(false);
  const [formError, setFormError] = useState("");

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
    setPasswordStrength(strength);

    if (!pwdValid) {
      setPasswordError(
        "Parola trebuie să aibă minim 12 caractere și să conțină o literă mare, o literă mică, un număr și un caracter special."
      );
      valid = false;
    } else {
      setPasswordError("");
    }

    if (!agree) {
      setFormError("Trebuie să acceptați termenii și condițiile.");
      valid = false;
    } else {
      setFormError("");
    }

    if (!valid) return;

    console.log({ firstName, lastName, email, password });
    // submit logic here
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-yellow-100 py-16 px-4">
      <div className="flex flex-col md:flex-row max-w-[900px] w-full rounded-2xl overflow-hidden shadow-xl bg-white">
        {/* Left Side */}
        <div className="w-full md:w-1/2 bg-orange-100 flex flex-col items-center justify-center">
          <img
            src="/src/assets/signup-cover.png"
            alt="Sign up visual"
            className="w-full h-full object-cover rounded-t-xl md:rounded-t-none md:rounded-l-xl mb-4"
          />
          <Link to="/login">
            <h2 className="text-xl underline mb-6 font-semibold text-center text-orange-600">
              Intrați în cont
            </h2>
          </Link>
        </div>

        {/* Right Side */}
        <div className="w-full md:w-1/2 p-4 sm:p-8 my-4 sm:my-8">
          <h2 className="text-2xl font-bold text-center">CREEAZĂ UN CONT</h2>
          <form onSubmit={handleSubmit} className="space-y-4 mb-2 mt-8">
            {/* Name Inputs */}
            <div className="flex flex-col sm:flex-row sm:space-x-2 space-y-2 sm:space-y-0">
              <input
                type="text"
                className="w-full sm:w-1/2 border rounded-md p-2 focus:outline-orange-400"
                placeholder="Prenume"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
              <input
                type="text"
                className="w-full sm:w-1/2 border rounded-md p-2 focus:outline-orange-400"
                placeholder="Nume"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </div>

            {/* Email */}
            <div>
              <input
                type="email"
                className={`w-full border rounded-md p-2 focus:outline-orange-400 ${
                  emailError ? "border-red-500" : ""
                }`}
                placeholder="Introduceți email-ul"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            {/* Password */}
            <div className="-mt-2">
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
              <p className="text-sm text-red-600 mt-1 h-12 overflow-hidden">
                {passwordError || "\u00A0"}
              </p>

              <p
                className={`text-sm mt-1 h-5 overflow-hidden ${
                  passwordStrength === "Puternică"
                    ? "text-green-600"
                    : passwordStrength === "Mediocră"
                    ? "text-yellow-600"
                    : "text-red-600"
                }`}
              >
                {password ? `Forță parolă: ${passwordStrength}` : "\u00A0"}
              </p>
            </div>

            {/* Terms & Conditions */}
            <div className="flex flex-col gap-1 -mt-1">
              <label className="flex items-center text-sm">
                <input
                  type="checkbox"
                  checked={agree}
                  onChange={(e) => setAgree(e.target.checked)}
                  className="mr-2"
                />
                Sunt de acord cu termenii și condițiile
              </label>
              <p className="text-sm text-red-600 min-h-[1.25rem]">
                {formError || "\u00A0"}
              </p>
            </div>

            {/* Signup Button */}
            <button
              type="submit"
              className="w-full bg-orange-600 text-white py-2 rounded-md hover:bg-orange-700 transition"
            >
              Creează cont
            </button>

            {/* Social Signup */}
            <div className="flex flex-col items-center space-y-2 mt-4 pt-8">
              <p className="text-sm text-gray-500">sau continuă cu</p>
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
        </div>
      </div>
    </div>
  );
}

export default Signup;
