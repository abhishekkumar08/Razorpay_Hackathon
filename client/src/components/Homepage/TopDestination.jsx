import './Homepage.css';
import './TopDestination.css';

function loadScript(src) {
  return new Promise((resolve) => {
    const script = document.createElement('script');
    script.src = src;
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
}

const TopDestination = ({ item }) => {
  async function displayRazorpay() {
    const res = await loadScript(
      'https://checkout.razorpay.com/v1/checkout.js'
    );

    if (!res) {
      alert('Razorpay SDK failed to load. Are you online?');
      return;
    }

    const data = await fetch('http://localhost:4000/razorpay', {
      method: 'POST',
    }).then((t) => t.json());

    console.log('dataaa', data);

    const options = {
      key: 'rzp_test_7NFjEzrn3WQR0c',
      currency: data.currency,
      amount: data.amount.toString(),
      order_id: data.id,
      name: 'Order now',
      description: 'Thank you for time. Your order is on its way.',
      image: 'https://i.imgur.com/3g7nmJC.png',
      handler: function (response) {
        alert('Payment Successful');
        // alert(response.razorpay_payment_id);
        // alert(response.razorpay_order_id);
        // alert(response.razorpay_signature);
      },
      prefill: {
        name: '',
        email: '',
        phone_number: '',
      },
    };
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  }
  console.log(item.places);
  return (
    <div
      style={{
        borderRadius: '50px',
        boxShadow: '30px 30px 60px #080c14,-30px -30px 60px #162034',
        maxWidth: '1200px',
        margin: '2rem',
        padding: '2rem',
      }}
    >
      <div
        style={{
          padding: '1rem',
        }}
      >
        <div
          style={{
            textAlign: 'center',
            display: 'flex',
            justifyContent: 'flex-start',
          }}
        >
          <div style={{ width: '60rem', display: 'flex' }}>
            <div style={{ marginRight: '2rem' }}>
              <img
                src={item.mainImg}
                alt="state-logo"
                width="300"
                height="300"
                style={{ borderRadius: '20%' }}
              />
            </div>
            <div style={{ padding: '0rem 1rem 1rem 1rem' }}>
              <div
                style={{
                  marginBottom: '0.5rem',
                  fontSize: '3rem',
                  fontWeight: '500',
                }}
              >
                {item.name}
              </div>
              <div>{item.description}</div>
              {/* badges */}
              <div
                style={{
                  marginTop: '1rem',
                  display: 'flex',
                  flexWrap: 'wrap',
                  justifyContent: 'space-evenly',
                }}
              >
                {item.badges.map((badge, index) => {
                  return (
                    <div className="destination-badge" key={index}>
                      {badge}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* destinations */}
      <div style={{ padding: '1rem' }}>
        <div
          style={{
            marginBottom: '2rem',
            textAlign: 'center',
            fontSize: '1.5rem',
            fontWeight: '700',
          }}
        >
          Iconic Places
        </div>
        <div
          style={{
            background: '#0F1624',
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          {item.places.map((place, index) => {
            return (
              <div
                key={index}
                className="card"
                style={{
                  color: '#63687A',
                  fontSize: '1rem',
                  textAlign: 'center',
                  paddingTop: '0.5rem',
                  height: '400px',
                  width: '300px',
                  borderRadius: '3rem !important',
                  alignItems: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  padding: '0.5rem',
                }}
              >
                <div>
                  <img
                    className="card-style-img"
                    src={place.subImg}
                    alt="item"
                  />
                </div>

                <div className="card-text">
                  <h4>{place.area}</h4>
                  <p> {place.description}</p>
                </div>

                <div>
                  <button
                    type="submit"
                    className="card-stats"
                    onClick={displayRazorpay}
                  >
                    Order Your Tour!
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* antique things */}
      <div style={{ padding: '1rem' }}>
        <div
          style={{
            marginBottom: '2rem',
            textAlign: 'center',
            fontSize: '1.5rem',
            fontWeight: '700',
          }}
        >
          Top Antique Things Indigenous Here
        </div>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          {item.items.map((thing, index) => {
            return (
              <div className="card" key={index}>
                <div
                  style={{
                    color: '#63687A',
                    fontSize: '1rem',
                    textAlign: 'center',
                    paddingTop: '0.5rem',
                    height: '400px',
                    width: '300px',
                    borderRadius: '3rem !important',
                    alignItems: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    padding: '0.5rem',
                  }}
                >
                  <div>
                    <img
                      className="card-style-img"
                      src={thing.itemImg}
                      alt="item"
                    />
                  </div>
                  <div className=" card-text">
                    <h4>{thing.itemName}</h4>
                    <p>{thing.description}</p>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="card-stats"
                      onClick={displayRazorpay}
                    >
                      Order Now!
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TopDestination;
