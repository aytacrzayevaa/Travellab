import React, { useState } from 'react';
import { useNavbar } from '../../contexts/NavbarContext'; // useNavbar'ı import ettim
import './Home.scss';
import Chart from '../../assets/dashboard/Elipse.svg';
import User from '../../assets/dashboard/UserCircle.svg';
import Calendar from '../../assets/dashboard/Calendar.svg';
import Calendar2 from '../../assets/dashboard/Calendar kopyası.svg';
import Site from '../../assets/dashboard/İcon_Category (1).svg'; // Türkçe karakterlerden kaçının
import Company from '../../assets/dashboard/İcon_Category (1).svg'; // Türkçe karakterlerden kaçının
import Plane from '../../assets/dashboard/plane.svg';
import Car from '../../assets/dashboard/car.svg';
import Person from '../../assets/dashboard/İcon_Category (4).svg'; // Türkçe karakterlerden kaçının
import Bonus from '../../assets/dashboard/bonus.svg';
import UpArrow from '../../assets/dashboard/Up.svg';
import DownArrow from '../../assets/dashboard/Down.svg';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

const Home = () => {
  const [age, setAge] = useState('');
  const { isNavbarCollapsed } = useNavbar(); // useNavbar kullanarak navbar durumunu alıyorum

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  // Random data for the cards (replace with actual values if needed)
  const data = [
    { icon: Site, value: 40 },
    { icon: Company, value: 67 },
    { icon: Plane, value: 220 },
    { icon: Car, value: 86 },
    { icon: Person, value: 96 },
    {
      icon: Bonus,
      value: (
        <div className="dashboard__card__value__currency">
          <span className="value">680</span>
          <span className="currency">AZN</span>
        </div>
      ),
    },
  ];

  return (
    <div className={`dashboard ${isNavbarCollapsed ? 'dashboard--navbar-closed' : "" }`}>  
      <div className="dashboard__top">
        <div className="dashboard__top__left">
          <FormControl className="customform" fullWidth>
            <InputLabel id="demo-select-label">
              <img src={User} alt="" />
              Qumral
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              label="Age"
              onChange={handleChange}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="dashboard__top__right">
          <img src={Calendar} alt="" />
          <p>01.08.2024 - 31.08.2024</p>
        </div>
      </div>
      <div className="dashboard__middle">
        <div className="dashboard__middle__left">
          <div className="dashboard__middle__left__up">
            <div className="dashboard__middle__left__up__top">
              <div className="dashboard__middle__left__up__top__left">
                <p>Cari ay satış</p>
                <h1>9 800 AZN</h1>
              </div>
              <div className="dashboard__middle__left__up__top__right">
                <p>KPI</p>
                <h1>15 000</h1>
              </div>
            </div>
            <div className="dashboard__middle__left__up__bottom">
              <div className="dashboard__middle__left__up__bottom__item">
                <p>Aylıq plan üzrə</p>
                <span>70%</span>
              </div>
              <div className="dashboard__middle__left__up__bottom__item">
                <p>Gəlir</p>
                <span>4 242 AZN</span>
              </div>
              <div className="dashboard__middle__left__up__bottom__item">
                <p>Cari ayda satış sayı</p>
                <span>13</span>
              </div>
            </div>
          </div>
          <div className="dashboard__middle__left__down">
            <div className="dashboard__middle__left__down__title">
              <p>Cari ay satılan məhsulların sayı və Qazanılan bonus</p>
            </div>
            <div className="dashboard__middle__left__down__items">
              {data.map((item, index) => (
                <div key={index} className="dashboard__card">
                  <div className="dashboard__card__icon">
                    <img src={item.icon} alt={`icon-${index}`} />
                  </div>
                  <div className="dashboard__card__value">{item.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="dashboard__middle__right">
          <div className="dashboard__middle__right__top">
            <div className="dashboard__middle__right__top__left">
              <img src={Chart} alt="" />
            </div>
            <div className="dashboard__middle__right__top__right">
              <div className="dashboard__middle__right__top__right__item">
                <p>Tarixlər üzrə ümumi satış məbləği</p>
                <div className="pricevalue">
                  <span className="price">22 000</span>
                  <span className="money">AZN</span>
                </div>
              </div>
              <div className="dashboard__middle__right__top__right__item">
                <p>Ümumi gəlir</p>
                <div className="pricevalue">
                  <span className="price">9 000</span>
                  <span className="money">AZN</span>
                </div>
              </div>
            </div>
          </div>
          <div className="dashboard__middle__right__bottom">
            <div className="dashboard__middle__right__bottom__top">
              <img src={Calendar2} alt="" />
              <p>01.08.2024 - 31.08.2024</p>
            </div>
            <div className="dashboard__middle__right__bottom__bottom">
              <div className="dashboard__middle__right__bottom__bottom__item">
                <p>Satış sayı</p>
                <span>20</span>
              </div>
              <div className="dashboard__middle__right__bottom__bottom__item">
                <p>Gəlir</p>
                <div className="pricevalues">
                  <span>13 000</span>
                  <span>AZN</span>
                </div>
              </div>
            </div>
          </div>
          <div className="dashboard__middle__right__bottom">
            <div className="dashboard__middle__right__bottom__top">
              <img src={Calendar2} alt="" />
              <p>01.08.2024 - 31.08.2024</p>
            </div>
            <div className="dashboard__middle__right__bottom__bottom">
              <div className="dashboard__middle__right__bottom__bottom__item">
                <p>Satış sayı</p>
                <span>20</span>
              </div>
              <div className="dashboard__middle__right__bottom__bottom__item">
                <p>Gəlir</p>
                <div className="pricevalues">
                  <span>13 000</span>
                  <span>AZN</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="dashboard__bottom">
        <div className="dashboard__bottom__left">
          <div className="dashboard__bottom__left__green">
            <div className="dashboard__bottom__left__green__left">
              <img src={UpArrow} alt="" />
            </div>
            <div className="dashboard__bottom__left__green__right">
              <p>Şirkətin ümumi gəliri</p>
              <div className="pricevaluess">
                <span>28 000</span>
                <span>AZN</span>
              </div>
            </div>
          </div>
          <div className="dashboard__bottom__left__red">
            <div className="dashboard__bottom__left__red__right">
              <img src={DownArrow} alt="" />
            </div>
            <div className="dashboard__bottom__left__red__right">
              <p>Şirkətin ümumi xərci</p>
              <div className="pricevaluess">
                <span>5 000</span>
                <span>AZN</span>
              </div>
            </div>
          </div>
        </div>
        <div className="dashboard__bottom__right">
          {/* Repeatable structure for each person */}
          {['Kamil', 'Qumral', 'Əsəd', 'Ülkər'].map((person, index) => (
            <div key={index} className="dashboard__bottom__right__item">
              <div className="dashboard__bottom__right__item__1">
                <h4>{person}</h4>
                <p>Satış məbləği</p>
                <span>13 000 AZN</span>
              </div>
              <div className="dashboard__bottom__right__item__2">
                <p>Gəlir</p>
                <span>4 000 AZN</span>
              </div>
              <div className="dashboard__bottom__right__item__3">
                <p>Satış sayı</p>
                <span>16</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
