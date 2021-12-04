import { useState } from 'react';
import data from '../../data';
import TopDestination from './TopDestination';
import './Homepage.css';
import Features from './Features';

const Homepage = () => {
  const [state, setState] = useState('');
  const [filteredData, setFilteredData] = useState([...data]);
  return (
    <div
      style={{
        background: '#0F1624',
      }}
    >
      <img
        src="https://images.unsplash.com/photo-1543055131-ac87bf2f6ac1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        alt="background"
        width="100%"
        height="650"
        style={{ opacity: '0.5' }}
      />
      <div
        style={{
          marginLeft: '6rem',
          position: 'absolute',
          top: '10rem',
          background: 'hsla(0,0%,100%,.85)',
          boxShadow: '0 0 2rem 0 rgb(0 0 0 / 29%)',
          borderRadius: '1rem',
          padding: '1rem',
          color: '#000',
          width: '32rem',
          height: '15rem',
        }}
      >
        <div
          style={{
            fontSize: '2rem',
            marginBottom: '1rem',
            fontWeight: '500',
            color: '#0F1624',
            fontFamily: 'cursive',
          }}
        >
          <b> Find amazing things of INDIA! Anytime and everywhere </b>
        </div>
        <div>
          <div style={{ marginBottom: '1rem' }} id="box">
            <input
              id="boxx"
              type="text"
              placeholder="Where are you going?"
              value={state}
              onChange={(e) => {
                setState(e.target.value);
                setFilteredData(
                  data.filter((item) =>
                    item.name
                      .toLowerCase()
                      .includes(e.target.value.toLowerCase())
                  )
                );
              }}
            />
          </div>
        </div>
      </div>

      {/* states */}
      <div
        style={{
          position: 'absolute',
          top: '30rem',
          marginLeft: '6rem',
          display: 'flex',
        }}
      >
        {filteredData.map((item, index) => {
          return (
            <div
              key={index}
              style={{
                background: '#fff',
                color: 'black',
                width: '150px',
                height: '150px',
                padding: '0.5rem',
                textAlign: 'center',
                borderRadius: '50%',
                margin: '1rem 3rem 1rem 1rem',
              }}
            >
              <div>
                <img
                  src={item.iconImg}
                  alt=""
                  width="100"
                  height="100"
                  style={{ marginBottom: '0.5rem' }}
                />
                <div>{item.name}</div>
              </div>
            </div>
          );
        })}
      </div>

      {/* features */}
      <Features />

      {/* top destinations */}
      <div
        style={{
          marginBottom: '2rem',
          textAlign: 'center',
          fontSize: '2.5rem',
          fontWeight: '700',
        }}
      >
        Explore our top destinations
      </div>

      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        {data.map((item, index) => {
          return <TopDestination item={item} key={index} />;
        })}
      </div>
    </div>
  );
};

export default Homepage;
