import './App.css';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from '@fortawesome/free-solid-svg-icons';
function App() {
  return (
    <div className='container'>
      <div className='form-group' style={{ height: '50px', backgroundColor: '#ffe6cc' }}>
      </div>
      <div className='form-group'>
        <h1>Form đặt vé máy bay</h1>
      </div>

      <div className='form-group'>
        <label>Họ tên</label>
        <div className='row'>
          <div className='col-1' style={{ backgroundColor: '#e9ecef', textAlign: 'center', paddingTop: '3px' }}>
            <FontAwesomeIcon icon={faUser} />
          </div>
          <div className='col-10'><input type='text' placeholder='Họ tên' style={{ width: '100%' }} /></div>
          <div className='col-1' style={{ backgroundColor: '#e9ecef', textAlign: 'center', paddingTop: '3px' }}>vnđ</div>
        </div>
        <p>Phải nhập 5 ký tự, in hoa...</p>
      </div>
      <div className='form-group'>
        <label>Địa chỉ</label>
        <input type='text' style={{ width: '100%' }} />
        <p>Phải nhập 5 ký tự in hoa</p>
        <div className='form-group'>
          <div className='row'>
            <div className='col'>
              <div className='form-group'>
                <h4>Đi từ</h4>
                <select name='position' id='Đi từ' style={{ width: '100%' }}>
                  <option value={'Hà Nội'}>Hà Nội</option>
                  <option value={'Đà Nẵng'}>Đà Nẵng</option>
                  <option value={'Hồ Chí Minh'}>Hồ Chí Minh</option>
                  <option value={'Hải Phòng'}>Hải Phòng</option>
                </select>
              </div>
            </div>
            <div className='col'>
              <div className='form-group'>
                <h4>Đến</h4>
                <select name='position' style={{ width: '100%' }}>
                  <option value={'Hà Nội'}>Hà Nội</option>
                  <option value={'Đà Nẵng'}>Đà Nẵng</option>
                  <option value={'Hồ Chí Minh'}>Hồ Chí Minh</option>
                  <option value={'Hải Phòng'}>Hải Phòng</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className='form-group'>
          <p>Chọn chiều đi (Khứ hồi)</p>
          <div style={{ display: 'block' }}>
            <input type='checkbox' style={{ marginRight: '8px' }} />
            <label>Đi</label>
          </div>
          <div>
            <input type='checkbox' style={{ marginRight: '8px' }} />
            <label>Về</label>
          </div>
        </div>

        <div className='form-group'>
          <button style={{backgroundColor: '#007bff', 
          color: 'white', 
          borderRadius: '10px', 
          border: 'white',
          height: '50px',
          width: '100%'}}>Đặt vé</button>
        </div>
      </div>
    </div>
  );
}

export default App;
