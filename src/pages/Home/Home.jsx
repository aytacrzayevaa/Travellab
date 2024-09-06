import React from "react";
import "./Home.scss";
import User from "../../assets/dashboard/UserCircle.svg";
import Calendar from "../../assets/dashboard/Calendar.svg";
import Site from "../../assets/dashboard/İcon_Category.svg";
import Company from "../../assets/dashboard/İcon_Category (1).svg";
import Plane from "../../assets/dashboard/plane.svg";
import Car from "../../assets/dashboard/car.svg";
import Person from "../../assets/dashboard/İcon_Category (4).svg";
import Bonus from "../../assets/dashboard/bonus.svg";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

const Home = () => {
  const [age, setAge] = React.useState("");
  const handleChange = (event, SelectChangeEvent) => {
    setAge((event.target.value = String));
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
    <div className="dashboard">
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
                <p>KPİ</p>
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
            <div className="dashboard__middle__right__top__left"></div>
            <div className="dashboard__middle__right__top__right">
              <div className="dashboard__middle__right__top__right__item"></div>
              <div className="dashboard__middle__right__top__right__item"></div>
            </div>
          </div>
          <div className="dashboard__middle__right__bottom">
            <div className="dashboard__middle__right__bottom__top">
            <img src={Calendar} alt="" />
            <p>01.08.2024 - 31.08.2024</p>
            </div>
            <div className="dashboard__middle__right__bottom__bottom">
              {/* left and right */}
              <div className="dashboard__middle__right__bottom__bottom__item"></div>
              <div className="dashboard__middle__right__bottom__bottom__item"></div>
            </div>
          </div>
          <div className="dashboard__middle__right__bottom">
            <div className="dashboard__middle__right__bottom__top">
            <img src={Calendar} alt="" />
            <p>01.08.2024 - 31.08.2024</p>
            </div>
            <div className="dashboard__middle__right__bottom__bottom">
              {/* left and right */}
              <div className="dashboard__middle__right__bottom__bottom__item"></div>
              <div className="dashboard__middle__right__bottom__bottom__item"></div>
            </div>
          </div>
          
        </div>
      </div>
      <div className="dashboard__bottom">
        <div className="dashboard__bottom__item"></div>
      </div>
    </div>
  );
};

export default Home;
