// /* global app, expect, describe, it */
//
// describe('GET /', () => {
//
//
//   it('should return a 304 response', done => {
//     app.get('http://localhost:4000')
//       .end((err, res) => {
//         expect(res.status).to.eq(304);
//         done();
//       });
//   });
//
//   it('should return the correct data', done => {
//     app.get('http://localhost:4000')
//       .params({ column: 'education,age' })
//       .end((err, res) => {
//         res.body.forEach(results => {
//           expect(results).to.have.any.keys('age', 'education');
//         });
//         done();
//       });
//   });
//
//
//
// });
