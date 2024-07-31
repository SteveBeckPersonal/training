// @ts-check
const { test, expect } = require('@playwright/test');
// @ts-check
// @ts-ignore
const { faker, fa } = require('@faker-js/faker');



test(`Add photo to album`,async ({ request }) => {
    
    const photo = {
        "albumId": 42,
        "title": "Really cool photo",
        "url": "https://via.placeholder.com/600/92c952",
        "thumbnailUrl": "https://via.placeholder.com/150/92c952"
    };

    const response = await request.post(`/photos`,{
        data:photo
    });

    expect(response.status()).toBe(201);
    
});

test(`Edit photo in album`,async ({ request }) => {
    
    const photo = {
        "albumId": 42,
        "title": "Really cool photo",
        "url": "https://via.placeholder.com/600/92c952",
        "thumbnailUrl": "https://via.placeholder.com/150/92c952"
    };

    const photoId = 1;
    const response = await request.put(`/photos/${photoId}`,{
        data:photo
    });

    expect(response.status()).toBe(200);
    
});
