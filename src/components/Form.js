import React from 'react';

class Form extends React.Component {

    constructor(props) {
        super(props);
        this.cityField = React.createRef();
        this.countryField = React.createRef();
    }

    render() {
        const { onSubmit } = this.props;
        return (
            <form onSubmit={onSubmit}>
                <input type="text"
                       name="city"
                       ref={this.cityField}
                       placeholder="City..."/>
                <input type="text"
                       name="country"
                       ref={this.countryField}
                       placeholder="Country..." />
                <button type="submit">Get Weather</button>
            </form>
        )
    }
}

export default Form;
