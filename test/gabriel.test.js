describe('Testing Gabriel endpoint', () => {
    test('Check if the response matches the expected name', async () => {
      const response = await fetch('http://localhost:3000/gabriel');
      const name = await response.text();
      expect(name).toBe("Hello Gabriel");
    });
  });
