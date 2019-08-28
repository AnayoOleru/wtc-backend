/* eslint-disable no-undef */
const db = require('../database/dbConfig');
const User = require('./userModel');

describe('Model for users', () => {
  beforeEach(async () => {
    await db.migrate.rollback();
    await db.migrate.latest();
    await db.seed.run();
  });

  afterEach(() => db.migrate.rollback());
});

describe('Model for user', () => {
  const user = {
    firstname: 'Ken',
    lastname: 'Doe',
    email: 'kenny@me.com',
    password: '12345678j',
  };
  it('should return an object if user exists', async () => {
    const value = await User.getAUser('1');
    expect(value).not.toBeUndefined();
    expect(value).not.toBeNull();
    expect(value.firstname).toEqual('John');
    expect(value.lastname).toEqual('Doe');
    expect(value.email).toEqual('jh@john.com');
  });
  it('should fail if user id does not exist', async () => {
    const value = await User.getAUser('10');
    expect(value).toBeUndefined();
  });
  it('should return an object if user  with email exists', async () => {
    const value = await User.getUserByEmail('jh@john.com');
    expect(value).not.toBeUndefined();
    expect(value).not.toBeNull();
  });
  it('should fail if user email does not exist', async () => {
    const value = await User.getUserByEmail('johndoe@m.com');
    expect(value).toBeUndefined();
  });
});
