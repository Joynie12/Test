/* eslint-disable no-console */
// eslint-disable-next-line consistent-return
function checkHealthStatus(character) {
  // eslint-disable-next-line prefer-destructuring
  const health = character.health;

  if (health > 50) { return ('healthy'); }
  if (health <= 50 && health >= 15) { return ('wounded'); }
  if (health <= 14 && health >= 0) { return ('critical'); }
}
module.exports = { checkHealthStatus };
