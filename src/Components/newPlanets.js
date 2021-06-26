const newPlanets = (verify, array, tableHead) => {
  // remove a specific key of object: https://stackoverflow.com/questions/38750705/filter-object-properties-by-key-in-es6
  if (verify) {
    const response = array.map(
      (planet) => {
        const filtered = Object.keys(planet)
          .filter((key) => tableHead.includes(key))
          .reduce((obj, key) => {
            obj[key] = planet[key];
            return obj;
          }, {});
        return filtered;
      },
    );
    return response;
  }
};

export default newPlanets;
