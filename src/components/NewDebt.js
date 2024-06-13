import React, { useState } from 'react';
import "../styles/componentStyles/NewDebt.css";
import { createDebt } from "../services/apiServices";

function NewDebt({ onSubmit }) {
  const [form, setForm] = useState({
    debtName: '',
    lenderName: '',
    debtAmount: '',
    interestRate: '',
    amount: '',
    paymentStart: '',
    installment: '',
    description: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async () => {
    try {
      const newDebt = {
        ...form,
        paymentPlan: [
          {
            paymentDate: form.paymentStart,
            paymentAmount: form.debtAmount
          }
        ]
      };
      const response = await createDebt(newDebt);
      console.log('Borç başarıyla oluşturuldu:', response);
      if (onSubmit) onSubmit(newDebt); // newDebt ile gönder
    } catch (error) {
      console.error('Borç oluşturulurken hata oluştu:', error);
    }
  };

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Kutu 3</h5>
        <p className="card-text">Yeni Borç Ekleme</p>
        <form>
          <div className="row">
            <div className="col-md-6 form-group">
              <label htmlFor="debtName">Borç Adı</label>
              <input type="text" className="form-control" id="debtName" name="debtName" value={form.debtName} onChange={handleChange} />
            </div>
            <div className="col-md-6 form-group">
              <label htmlFor="lenderName">Borç Veren Adı</label>
              <input type="text" className="form-control" id="lenderName" name="lenderName" value={form.lenderName} onChange={handleChange} />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 form-group">
              <label htmlFor="debtAmount">Miktar</label>
              <input type="number" className="form-control" id="debtAmount" name="debtAmount" value={form.debtAmount} onChange={handleChange} />
            </div>
            <div className="col-md-6 form-group">
              <label htmlFor="interestRate">Faiz Oranı</label>
              <input type="number" className="form-control" id="interestRate" name="interestRate" value={form.interestRate} onChange={handleChange} />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 form-group">
              <label htmlFor="amount">Toplam</label>
              <input type="number" className="form-control" id="amount" name="amount" value={form.amount} onChange={handleChange} />
            </div>
            <div className="col-md-6 form-group">
              <label htmlFor="paymentStart">Başlangıç Tarihi</label>
              <input type="date" className="form-control" id="paymentStart" name="paymentStart" value={form.paymentStart} onChange={handleChange} />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 form-group">
              <label htmlFor="installment">Taksit Sayısı</label>
              <input type="number" className="form-control" id="installment" name="installment" value={form.installment} onChange={handleChange} />
            </div>
            <div className="col-md-6 form-group">
              <label htmlFor="description">Açıklama</label>
              <textarea className="form-control" id="description" name="description" value={form.description} onChange={handleChange}></textarea>
            </div>
          </div>
          <button type="button" className="btn btn-primary mt-3" onClick={handleSubmit}>Ödeme Planı Oluştur</button>
        </form>
      </div>
    </div>
  );
}

export default NewDebt;
