import React, { useState, useEffect } from "react";

//Service
import { aboutMe } from "../../service/data";
import { whoami } from "../../service/auth";
import { Header } from "../../layout/Header";

import { useParams } from "react-router-dom";
import { oneCity } from "../../service/city";

export const ToFollow = () => {
  const { id } = useParams();
  console.log(id);

  const [city, setCity] = useState([]);

  const fetchCity = () => oneCity(id).then(res => setCity(res.data));

console.log(city)
  

  useEffect(() => {
    whoami().then((res) => {
        console.log(res.data)
    });
    
    fetchCity()
  }, []);

  return (
    <>
    <Header />
        {city &&
          <div className="profile-header">
              <div className="profile-header__bg">
                  <img src={city.image} alt={city.name} />
              </div>
              <div className="profile-header__info">
                  <div className="profile-header__info__data">
                      <div className="value"></div>
                      <div className="key">Restaurants</div>
                  </div>
                  <div className="profile-header__info__data">
                      <div className="value"></div>
                      <div className="key">Landmarks</div>
                  </div>
                  <div className="profile-header__info__data profile-header__info__data--user">
                      <div className="value">{city.name}</div>
                      
                          <div className="key">
                              {city.description}
                          </div>
                      
                  </div>
                  <div className="profile-header__info__data">
                      <div className="value"></div>
                      <div className="key">Museums</div>
                  </div>
                  <div className="profile-header__info__data">
                        <div className="value"></div>
                        <div className="key"></div>
                    </div>
              </div>
          </div>
        }
                {/* <div className="row">
          {city.museum &&
            city.museum.map((museum, i) => (
              <div key={i} className="col-3">
                <article className="entity-card">
                  <header className="entity-card__header">
                    <div className="entity-card__header__bg">
                      <img
                        src={museum.images}
                        alt={museum.name}
                      />
                    </div>
                  </header>
                  <div className="entity-card__body">
                    <h2 className="entity-card__body__title">{museum.name}</h2>
                    <p className="entity-card__body__tagline">
                      {museum.category.name}
                    </p>
                    <div className="entity-card__body__data">
                      <div className="entity-card__data">
                        <div className="value">{museum.formattAddress[0]}</div>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            ))}
        </div> */}
    </>
  );
};