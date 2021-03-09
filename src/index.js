
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (!matrix) {
    return [];
  }
  return matrix.reduce((acc, item, index) => {
    if (index % 2 === 0) {
      return [...acc, ...item];
    } else {
        const arr = item.reduce((string, elem) => {
        return [elem, ...string];
      }, []);
      return [...acc, ...arr]
    }

  },[]);
};
