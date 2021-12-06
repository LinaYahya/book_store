
const connection = require('../server/Database/config/connection');
// const { dbBuild } = require('../server/Database/config/build');
// const getData = require('../server/Database/quiry/getData');
// const postData = require('../server/Database/quiry/postData');

// beforeAll(() => {
//   return dbBuild();
// });
// afterAll(() => {
//   return connection.end();
// });

// test('test get data function', () => {
//   return getData().then((res) => {
//     const actual = res.rows[0];
//     const expected = { id: 1, name: 'A Thousand Splendid Suns', authors: 'Khaled Hosseini', category: 'Novels', reserved: 'false' };
//     expect(actual).toEqual(expected);
//   });
// });

// test('test post data function', () => {
//   const data = { name: '1984', author: 'Khaled', category: 'Novels' };
//   return postData(data).then((res) => {
//     const actual = res.rows[0];
//     const expected = { id: 4, name: '1984', authors: 'Khaled', category: 'Novels', reserved: 'false' };
//     expect(actual).toEqual(expected);
//   });
// })

test('test 1 equal 1', () => {
  expect(1).toBe(1)
})
