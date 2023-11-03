describe('Testing amanda endpoint', () => {
    test('Check if the response matches the expected name', async () => {
      const response = await fetch('http://localhost:3000/amanda');
      const name = await response.text();
      expect(name).toBe("Hello Amanda");
    });
  });

