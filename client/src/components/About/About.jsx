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
            <div className="col-md-8">
              <div className="row">
                <div
                  className="section-title"
                  style={{
                    padding: "2rem",
                  }}
                >
                  <h2>Get In Touch</h2>
                  <p>
                    Please fill out the form below to send us an email and we
                    will get back to you as soon as possible.
                  </p>
                </div>
                <form name="sentMessage">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          id="name"
                          name="name"
                          className="form-control"
                          placeholder="Name"
                          required
                        />
                        <p className="help-block text-danger"></p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="email"
                          id="email"
                          name="email"
                          className="form-control"
                          placeholder="Email"
                          required
                        />
                        <p className="help-block text-danger"></p>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <textarea
                      name="message"
                      id="message"
                      className="form-control"
                      rows="4"
                      placeholder="Message"
                      required
                    ></textarea>
                    <p className="help-block text-danger"></p>
                  </div>
                  <div id="success"></div>
                  
                  <button type="submit" className="btns">
                    Send Message
                  </button>
                 
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
