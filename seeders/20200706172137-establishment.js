const faker = require('faker');

const date = new Date();

const randomValues = () => {
  const array = [];
  for (let i = 0; i < 100; i++) {
    array.push({
      name: faker.name.firstName(),
      address: faker.address.streetAddress(),
      city: faker.address.city(),
      uf: faker.address.stateAbbr(),
      telephone: faker.phone.phoneNumber(),
      whatsapp: faker.phone.phoneNumber(),
      created_at: date,
      updated_at: date,
    });
  }
  return array;
};

module.exports = {
  up: async (queryInterface) => queryInterface.bulkInsert('establishments', randomValues()),

  down: async (queryInterface) => queryInterface.bulkDelete('establishments', null, {}),
};
