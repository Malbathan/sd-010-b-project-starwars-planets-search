const useOrderFilter = (data, order) => {
  const { column, sort } = order;
  const asc = sort === 'ASC';

  const sortData = () => {
    const sortedData = data.sort((elA, elB) => {
      if (Number.isNaN(Number(elA[column]))) {
        return elA[column].localeCompare(elB[column]);
      }
      return parseFloat(elA[column]) - parseFloat(elB[column]);
    });
    if (!asc) sortedData.reverse();
    return (sortedData);
  };

  return {
    sorted: sortData(),
  };
};

export default useOrderFilter;
