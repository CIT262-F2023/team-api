    test('Checks to see if the name matches', async () => {
      const response = await fetch('http://localhost:3000/mckenna');
      const name = await response.text();
      expect(name).toBe("Hello McKenna");
    });

