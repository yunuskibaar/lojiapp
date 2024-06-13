import React from 'react';

const DebtList = ({ onShowNewDebt , onShowUpdateDebt, onShowPayment }) => {
  return (
    <div>
      <div className="card" style={{ width: '18rem' }}>
        <div className="card-body">
          <h5 className="card-title">Kutu 2</h5>
          <p className="card-text">Borç Listesi</p>
          <button className='btn new-dept-btn' onClick={onShowNewDebt}>yeni borç ekle</button>
          <button className='btn update-debt-btn'onClick={onShowUpdateDebt}>düzenle</button>
          <button className='btn payment-btn' onClick={onShowPayment}>ödeme planı gör</button>
        </div>
      </div>
    </div>
  );
};

export default DebtList;
