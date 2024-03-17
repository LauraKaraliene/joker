import { dadJoke } from './joker.js';

console.log('Intentional Formatting Error');

export async function testDadJoke() {
  const joke = await dadJoke();
  const testPasses = Boolean(joke);
  console.log(joke);
  console.log('Dad Joke Test:', testPasses ? 'PASSED' : 'FAILED');
  return testPasses;
}

testDadJoke();
