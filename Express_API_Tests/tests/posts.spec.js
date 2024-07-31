// @ts-check
const { test, expect } = require('@playwright/test');
// @ts-check
// @ts-ignore
const { faker, fa } = require('@faker-js/faker');



test(`Get all user posts`,async ({ request }) => {
    
    const response = await request.get(`/posts`);

    expect(response.status()).toBe(200);
   
});

test(`Filter posts for users post`,async ({ request }) => {
    
    const response = await request.get(`/posts`);

    expect(response.status()).toBe(200);

    let data = await response.json()
   
    let userPosts = data.filter(post => post.userId === 2);
    expect(userPosts.length).toBe(10);
});

test(`Validate post contents`,async ({ request }) => {
    
    const postId = 14;
    const response = await request.get(`/posts/${postId}`);

    expect(response.status()).toBe(200);

    let data = await response.json()
    expect.soft(data.userId).toBe(2);
    expect.soft(data.title).toBe(`voluptatem eligendi optio`);
    const body = `fuga et accusamus dolorum perferendis illo voluptas\nnon doloremque neque facere\nad qui dolorum molestiae beatae\nsed aut voluptas totam sit illum`;
    expect.soft(data.body).toBe(body);
   
});