import React from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';
import { getPlanets } from '../api/planetsAPI';

class StarWarsProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
    this.fetchPlanets = this.fetchPlanets.bind(this);
  }

  componentDidMount() {
    this.fetchPlanets();
  }

  fetchPlanets() {
    this.setState({ data: [] }, async () => {
      const planets = await getPlanets();
      this.setState({
        data: planets,
      });
    });
  }

  render() {
    const { children } = this.props;
    return (
      <StarWarsContext.Provider
        value={ { ...this.state } }
      >
        {children}
      </StarWarsContext.Provider>
    );
  }
}

StarWarsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default StarWarsProvider;
