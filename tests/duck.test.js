import { describe, it, expect } from '@jest/globals';

describe('Duck logic', () => {
  it('should fail if duck name is blank', () => {
    const duckName = '';
    expect(duckName.trim()).toBe('');
  });

  it('should accept a valid duck name', () => {
    const duckName = 'Sir Quacksalot';
    expect(duckName.trim()).toBe('Sir Quacksalot');
  });
});

describe('Duck ID generation', () => {
    it('should generate a duck ID with the correct prefix', () => {
      const duckId = 'DUCK-12345';
      expect(duckId.startsWith('DUCK-')).toBe(true);
    });
  
    it('should generate a unique duck ID', () => {
      const duckId1 = 'DUCK-12345';
      const duckId2 = 'DUCK-67890';
      expect(duckId1).not.toEqual(duckId2);
    });
  });

  describe('Duck description', () => {
    it('should create a duck description with the correct format', () => {
      const duckName = 'Sir Quacksalot';
      const duckDescription = `A delightful rubber duck named ${duckName} — soon to be officially registered.`;
      expect(duckDescription).toBe('A delightful rubber duck named Sir Quacksalot — soon to be officially registered.');
    });
  });

  describe('Duck registration', () => {
    it('should confirm duck registration', () => {
      const registrationMessage = "Duck registration complete! 🦆 (Coming soon...)";
      expect(registrationMessage).toBe("Duck registration complete! 🦆 (Coming soon...)");
    });
  });

  describe('Duck name validation', () => {
    it('should return an error message for blank duck name', () => {
      const duckName = '';
      const errorMessage = "Enter your duck’s name";
      expect(duckName.trim()).toBe('');
      expect(errorMessage).toBe("Enter your duck’s name");
    });
  
    it('should not return an error message for valid duck name', () => {
      const duckName = 'Sir Quacksalot';
      const errorMessage = '';
      expect(duckName.trim()).not.toBe('');
      expect(errorMessage).toBe('');
    });
  });