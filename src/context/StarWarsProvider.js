import React from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';
import { getPlanets } from '../api/planetsAPI';

class StarWarsProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isFetching: false,
    };
    this.fetchPlanets = this.fetchPlanets.bind(this);
  }

  fetchPlanets() {
    this.setState({ isFetching: true }, async () => {
      const planets = await getPlanets();
      this.setState({
        data: planets,
        isFetching: false,
      });
    });
  }

  render() {
    const { children } = this.props;
    return (
      <StarWarsContext.Provider
        value={ { ...this.state, fetchPlanets: this.fetchPlanets } }
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
