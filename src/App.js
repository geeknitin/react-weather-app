import React from 'react';
import Titles from './components/Titles';
import Form from './components/Form';
import Weather from './components/Weather';

const API_KEY = '36bdd0f88dfbe511176dc729eaac9731';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      temperature: undefined,
      city: undefined,
      description: undefined,
      country: undefined,
      humidity: undefined,
      error: undefined,
    };
    this.getWeather = this.getWeather.bind(this);
  }

  async getWeather(e) {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    if(city && country) {
      const weatherResponse = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
      const data = await weatherResponse.json();
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        description: data.weather[0].description,
        country: data.sys.country,
        humidity: data.main.humidity,
        error: undefined,
      });
    } else {
      this.setState({
        temperature: undefined,
        city: undefined,
        description: undefined,
        country: undefined,
        humidity: undefined,
        error: 'Please enter value again.',
      });
    }
  }

  render() {
    const {temperature, city, description, country, humidity, error} = this.state;
    return (
      <div>
        <div className='wrapper'>
          <div className='main'>
            <div className='container'>
              <div className='row'>
                <div className='col-xs-5 title-container'>
                  <Titles/>
                </div>
                <div className='col-xs-7 form-container'>
                  <Form onSubmit={this.getWeather}/>
                  <Weather humidity={humidity}
                    country={country}
                    description={description}
                    city={city}
                    temperature={temperature}
                    error={error}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  };
}

export default App;
