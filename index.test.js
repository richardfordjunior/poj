const find = require('./index').findFirstDuplicate;

describe('#Some common javascript functions', () => {
  test('should return the first duplicate element in the array.', (done) => {
  let mockArray1 = [1,3,2,3,1];
  let mockArray2 = [3,5,2,4,1];
  let mockArray3 = [4,3,2,4,1];

  let test1 = find(mockArray1);
  let test2 = find(mockArray2);
  let test3 = find(mockArray3);
  
  expect(test1).toEqual(1);
  expect(test2).toEqual(undefined);
  expect(test3).toEqual(4);
  done();
  })
  
})
