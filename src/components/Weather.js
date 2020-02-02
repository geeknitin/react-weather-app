import React from 'react';

class Weather extends React.Component {
    render() {
        const {temperature, city, description, country, humidity, error} = this.props;
        return (
            <div className='weather__info'>
                { city && country && <p className='weather__key'>Location: {city}, {country}</p> }
                { temperature && <p className='weather__key'>Temperature: {temperature}</p> }
                { humidity && <p className='weather__key'>Humidity: {humidity}</p> }
                { description && <p className='weather__key'>Conditions: {description}</p> }
                { error && <p className='weather__error'>{error}</p>}
            </div>
        )
    }
}

export default Weather;
