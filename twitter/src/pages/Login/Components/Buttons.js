import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BackGroundContext } from "../../../Context/BackGroundContext";
import { Button } from "./index";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";

function Buttons({ setLayOut, clicked, setClicked }) {
  const [register, setRegister] = useState(false);
  const [login, setLogin] = useState(false);
  const { bird } = useContext(BackGroundContext);

  const onRegisterHandler = () => {
    setRegister(true);
    setLayOut(true);
  };
  const onLoginHandler = () => {
    setLogin(true);
    setLayOut(true);
  };

  return (
    <>
      {register && clicked === false ? (
        <SignUpForm setLayOut={setLayOut} setRegister={setRegister} />
      ) : null}
      {login ? <LoginForm setLayOut={setLayOut} setLogin={setLogin} /> : null}

      <div className="login-right">
        <div className="login-right-container">
          <img className="login-right-bird" src={bird} alt=""></img>
          <span className="login-right-span1">
            Şu anda olup <br /> bitenler
          </span>
          <span className="login-right-span2">
            {clicked ? "Twitter'a giriş yap" : "Twitter'a bugün katıl."}
          </span>
          <div className="buttons">
            {clicked ? (
              <>
                <Button
                  as="login-button-with-google"
                  text={"Google ile oturum açın"}
                />
                <Button
                  as="login-button-with-apple"
                  text={"Apple ile giriş yap"}
                />
                <Link to="/login">
                  {" "}
                  <Button
                    as="login-button"
                    onClick={onLoginHandler}
                    text={"Telefon numarası, e-posta veya kullanıcı adı"}
                  />
                </Link>
              </>
            ) : (
              <>
                <Button
                  as="login-button-with-google"
                  text={"Google ile kaydolun"}
                />
                <Button
                  as="login-button-with-apple"
                  text={"Apple ile kaydol"}
                />
                <Link to="/signup">
                  {" "}
                  <Button
                    as="login-button"
                    onClick={onRegisterHandler}
                    text={"Telefon numarası veya e-posta adresiyle kaydol"}
                  />
                </Link>
              </>
            )}
            {clicked ? (
              <div className="span-with-links2">
                <span className="login-right-span4">
                  Henüz bir hesabın yok mu ?{" "}
                  <a
                    onClick={(e) => {
                      e.preventDefault();
                      setClicked(false);
                    }}
                    href=""
                  >
                    Hemen kaydol
                  </a>
                </span>
              </div>
            ) : (
              <>
                <div className="span-with-links1">
                  <span className="login-right-span3">
                    By signing up, you agree to the{" "}
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://twitter.com/en/tos"
                    >
                      Terms of Service
                    </a>{" "}
                    and{" "}
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://twitter.com/en/privacy"
                    >
                      Privacy <br /> Policy
                    </a>
                    , including{" "}
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://help.twitter.com/tr/rules-and-policies/twitter-cookies"
                    >
                      Cookie Use
                    </a>
                  </span>
                </div>
                <div className="span-with-links2">
                  <span className="login-right-span4">
                    Zaten hesabın var mı?{" "}
                    <a
                      onClick={(e) => {
                        e.preventDefault();
                        setClicked(true);
                      }}
                      href=""
                    >
                      Giriş yap
                    </a>
                  </span>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Buttons;
