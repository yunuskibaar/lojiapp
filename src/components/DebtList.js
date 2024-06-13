import React from 'react';

const DebtList = ({ debts, onShowNewDebt, onShowUpdateDebt, onShowPayment }) => {
  return (
    <div>
      <div className="card" style={{ width: '18rem' }}>
        <div className="card-body">
          <h5 className="card-title">Kutu 2</h5>
          <p className="card-text">Borç Listesi</p>
          {debts.map((debt, index) => (
            <div key={index} className="d-flex justify-content-between align-items-center mb-2">
              <span>{debt.lenderName} - {debt.debtAmount} TL</span>
              <div>
                <button className='btn btn-sm btn-secondary mx-1' onClick={onShowUpdateDebt}>Düzenle</button>
                <button className='btn btn-sm btn-info' onClick={onShowPayment}>Ödeme Planı Gör</button>
              </div>
            </div>
          ))}
          <button className='btn btn-primary mt-3' style={{ position: 'absolute', bottom: '10px', left: '10px' }} onClick={onShowNewDebt}>Yeni Borç Ekle</button>
        </div>
      </div>
    </div>
  );
};

export default DebtList;
