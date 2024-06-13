import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Link, useNavigate } from 'react-router-dom';
import '../styles/componentStyles/AuthForm.css';
import { loginUser, registerUser } from '../services/apiServices';

const AuthForm = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [message, setMessage] = useState('');

  const navigate = useNavigate();

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
    setMessage(''); // Clear any previous messages
  };
  
  const handleSubmitLogin = async (event) => {
    event.preventDefault();

    try {
      const response = await loginUser(email, password); // ApiService'de tanımlanan loginUser fonksiyonunu kullanıyoruz

      if (response.success) {
        console.log('Giriş başarılı!');
        localStorage.setItem('token', response.token); // Save the token
        navigate('/dashboard'); // Redirect to dashboard
      } else {
        setMessage('Hatalı e-posta veya şifre.');
      }
    } catch (error) {
      console.error(error);
      setMessage('Giriş sırasında bir hata oluştu.');
    }
  };

  const handleSubmitSignup = async (event) => {
    event.preventDefault();

    if (password !== passwordConfirm) {
      setMessage('Şifreler eşleşmiyor.');
      return;
    }

    try {
      const response = await registerUser(name, email, password); // ApiService'de tanımlanan registerUser fonksiyonunu kullanıyoruz

      if (response.success) {
        console.log('Kayıt başarılı!');
        setIsFlipped(true); // Flip to login form after successful registration
        setMessage('');
      } else {
        setMessage('Kayıt sırasında bir hata oluştu.');
      }
    } catch (error) {
      console.error(error);
      setMessage('Kayıt sırasında bir hata oluştu.');
    }
  };

  return (
    <div className="App">
      <div className="container mt-5">
        <div className={`flip-card ${isFlipped ? 'flipped' : ''}`}>
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title text-center">Giriş</h5>
                  <form onSubmit={handleSubmitLogin}>
                     <div className="form-group">
                      <label htmlFor="email">E-posta Adresi</label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="E-posta giriniz"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="password">Şifre</label>
                      <input
                        type="password"
                        className="form-control"
                        id="password"
                        placeholder="Şifrenizi giriniz"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                    </div> 
                    <button type="submit" className="btn btn-primary btn-block">Giriş Yap</button>
                  </form>
                  <div className="mt-3 text-center">
                    <p>Üye değil misiniz? <button className="btn btn-link" onClick={handleFlip}>Üye Ol</button></p>
                  </div>
                  {message && <p className="mt-3 text-center">{message}</p>}
                </div>
              </div>
            </div> 
            <div className="flip-card-back">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title text-center">Üye Ol</h5>
                  <form onSubmit={handleSubmitSignup}>
                    <div className="form-group">
                      <label htmlFor="name">Ad Soy</label>
                      <input 
                        type="text" 
                        className="form-control" 
                        id="name" 
                        placeholder="Ad soyad giriniz" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                        required 
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">E-posta Adresi</label>
                      <input
                        type="email"
                        className="form-control"
                        
                        placeholder="E-posta giriniz"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="password">Şifre</label>
                      <input
                        type="password"
                        className="form-control"
                        
                        placeholder="Şifrenizi giriniz"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="passwordConfirm">Şifreyi Tekrar Giriniz</label>
                      <input
                        type="password"
                        className="form-control"
                        id="passwordConfirm"
                        placeholder="Şifrenizi tekrar giriniz"
                        value={passwordConfirm}
                        onChange={(e) => setPasswordConfirm(e.target.value)}
                        required
                      />
                    </div>
                    <button type="submit" className="btn btn-primary btn-block">Üye Ol</button>
                  </form>
                  <div className="mt-3 text-center">
                    <p>Hesabınız var mı? <button className="btn btn-link" onClick={handleFlip}>Giriş Yap</button></p>
                  </div>
                  {message && <p className="mt-3 text-center">{message}</p>}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
