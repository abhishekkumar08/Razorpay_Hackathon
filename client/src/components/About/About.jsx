import './About.css';
const About = () => {
  return (
    <>
      <div id="About" style={{ height: '90vh' }}>
        <div
          className="container"
          style={{
            color: 'white',
          }}
        >
          <div className="col-md-8">
            <div className="row">
              <div
                className="section-title"
                style={{
                  padding: '2rem',
                }}
              >
                <h2>About Us</h2>
                <p>
                  This App provides assistance, information on cultural,
                  historical and contemporary heritage to people on organized
                  sightseeing and individual clients at educational
                  establishments, religious and historical sites such as;
                  museums, and at various venues of tourist attraction resorts.
                  We have tried to tackle this problem by making a tourism and
                  local handicrafts centric e-commerce website that would enable
                  local craftsmen and small businesses to sell their goods
                  online to the customers anywhere on the globe.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
