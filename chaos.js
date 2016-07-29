function chaos() {
  setInterval(_ => {
    if (Math.random() > 0.5) {
      throw new Error(`${Date.now()} 🎷🎷🎷🎷🎷`);
    }
  }, 500);
}
