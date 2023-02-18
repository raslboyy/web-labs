
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

async function getRandomPost() {
  url = `https://jsonplaceholder.typicode.com/posts/${getRandomInt(100)}`;
  const response = await fetch(url, {
    method: 'GET',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    redirect: 'follow',
    referrerPolicy: 'no-referrer'
  });
  return await response.json(); // parses JSON response into native JavaScript objects
}
