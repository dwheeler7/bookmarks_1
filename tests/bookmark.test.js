const request = require('supertest');
const app = require('../app-server.js')

const exampleBookmarkData = {
  title: 'Example Bookmark',
  url: 'https://example.com'
};

const updatedBookmarkData = {
  title: 'Updated Bookmark',
  url: 'https://updated.com'
};

const arbitraryBookmarkId = 'arbitrary_bookmark_id';

describe('Bookmark Routes', () => {
  it('GET /api/bookmarks - should return list of bookmarks', async () => {
    const response = await request(app).get('/api/bookmarks');
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });

test('POST /api/bookmarks - should successfully create a new bookmark with valid data', async () => {
    const response = await request(app)
      .post('/api/bookmarks')
      .send(exampleBookmarkData);
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('_id');
    expect(response.body.title).toBe(exampleBookmarkData.title);
    expect(response.body.url).toBe(exampleBookmarkData.url);
  });

test('PUT /api/bookmarks/:id - should successfully update an existing bookmark with valid data', async () => {
    const response = await request(app)
      .put(`/api/bookmarks/${arbitraryBookmarkId}`)
      .send(updatedBookmarkData);
    expect(response.status).toBe(200);
    expect(response.body.title).toBe(updatedBookmarkData.title);
    expect(response.body.url).toBe(updatedBookmarkData.url);
  });

test('DELETE /api/bookmarks/:id - should successfully delete an existing bookmark', async () => {
    const response = await request(app).delete(`/api/bookmarks/${arbitraryBookmarkId}`);
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('_id');
  });

});