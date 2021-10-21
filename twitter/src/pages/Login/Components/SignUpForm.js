import React from 'react';
import { Input } from '.';

function SignUpForm() {
    return (
        <div className="signup-form" >
            <div className="signup-top-flex"> Selam  </div>
            <div><span>Hesabını oluştur</span></div>
            <div><Input as="signup-input" type="text" name="İsim"/></div>
            <div><Input as="signup-input" type="email" name="E-posta"/></div>
            <div><span>Doğum Tarihi</span></div>
            <div><span>Bu, herkese açık olarak gösterilmeyecek. Bu hesap bir işletme, evcil hayvan veya başka bir şey için olsa bile kendi yaşını doğrulaman gerekir.</span></div>
            <div className="select-box-group">
                <Input as="group" name="Ay"/>
                <Input as="group" name="Gün"/>
                <Input as="group" name="Yıl"/>
            </div>
            
        </div>
    );
}

export default SignUpForm;