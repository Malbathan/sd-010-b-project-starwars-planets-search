const useLogicalFilter = (incomingPlanets, filterList) => {
  const filterPlanets = (manipulatedData, index = 0) => {
    if (index >= filterList.length) {
      return manipulatedData;
    }
    const newManipulatedDate = manipulatedData
      .filter((planet) => {
        const { column, comparison, amount } = filterList[index];
        const planetValue = parseFloat(planet[column]);
        const amountToCompare = parseFloat(amount);
        let makesSenseToReturn = false;
        switch (comparison) {
        case 'maior que':
          makesSenseToReturn = planetValue > amountToCompare;
          break;
        case 'menor que':
          makesSenseToReturn = planetValue < amountToCompare;
          break;
        case 'igual a':
          makesSenseToReturn = planetValue === amountToCompare;
          break;
        default:
          break;
        }
        return makesSenseToReturn;
      });
    const newIndex = index + 1;
    return filterPlanets(newManipulatedDate, newIndex);
  };

  const data = filterPlanets(incomingPlanets);
  return {
    planets: data,
  };
};

export default useLogicalFilter;
