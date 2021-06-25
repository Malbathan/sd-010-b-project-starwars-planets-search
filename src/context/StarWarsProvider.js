import React from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';
import { getPlanets } from '../api/planetsAPI';

class StarWarsProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      dataOriginal: [],
      filterByName: {
        name: '',
      },
    };
    this.fetchPlanets = this.fetchPlanets.bind(this);
    this.saveFilter = this.saveFilter.bind(this);
  }

  componentDidMount() {
    this.fetchPlanets();
  }

  saveFilter(value) {
    this.setState({ filterByName: { name: value } },
      () => {
        const { dataOriginal, filterByName: { name } } = this.state;
        if (name !== '') {
          const dataTemp = dataOriginal.filter((planet) => planet.name.includes(name));
          this.setState({ data: dataTemp });
        } else {
          this.setState({ data: dataOriginal });
        }
      });
  }

  fetchPlanets() {
    this.setState({ data: [] }, async () => {
      const planets = await getPlanets();
      this.setState({
        data: planets,
        dataOriginal: planets,
      });
    });
  }

  render() {
    const { children } = this.props;
    return (
      <StarWarsContext.Provider
        value={ { ...this.state, saveFilter: this.saveFilter } }
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
