function checkHealthStatus(character) {
    const character = { name: 'Маг', health: 90 };
    const health = character.health;

    if (health > 50) {
        console.log("healthy");
    } else if (health <= 50 && health >= 15) {
        console.log("wounded");
    } else {
        console.log("critical");
    }
    expect(health).toBe(healthy);
  }
  
  
  