import faker from "faker";

export const userUUIDs = [
  faker.random.uuid(),
  faker.random.uuid(),
  faker.random.uuid(),
  faker.random.uuid(),
  faker.random.uuid(),
  faker.random.uuid(),
  faker.random.uuid(),
  faker.random.uuid()
];

export const UserNames = [
  `${faker.name.firstName()}`,
  `${faker.name.firstName()}`,
  `${faker.name.firstName()}`,
  `${faker.name.firstName()}`,
  `${faker.name.firstName()}`,
  `${faker.name.firstName()}`,
  `${faker.name.firstName()}`,
  `${faker.name.firstName()}`
];

export const UserSurnames = [
  `${faker.name.lastName()}`,
  `${faker.name.lastName()}`,
  `${faker.name.lastName()}`,
  `${faker.name.lastName()}`,
  `${faker.name.lastName()}`,
  `${faker.name.lastName()}`,
  `${faker.name.lastName()}`,
  `${faker.name.lastName()}`
];

export const UserAvatars = [
  faker.image.avatar(),
  faker.image.avatar(),
  faker.image.avatar(),
  faker.image.avatar(),
  faker.image.avatar(),
  faker.image.avatar(),
  faker.image.avatar(),
  faker.image.avatar()
];

export const UserColors = [
  faker.internet.color().replace('#','').toUpperCase(),
  faker.internet.color().replace('#','').toUpperCase(),
  faker.internet.color().replace('#','').toUpperCase(),
  faker.internet.color().replace('#','').toUpperCase(),
  faker.internet.color().replace('#','').toUpperCase(),
  faker.internet.color().replace('#','').toUpperCase(),
  faker.internet.color().replace('#','').toUpperCase(),
  faker.internet.color().replace('#','').toUpperCase(),
];

export class WebsocketMockAdapter {
  constructor(subscriber, deelay = 1000) {
    this.subscriber = subscriber;
    this.deelay = deelay;
  }

  init() {
    let count = 0;
  
    const initSub = setInterval(() => {
      this.subscriber(this.createData());
      count += 1;

      if (count >= 15) {
        clearInterval(initSub);
      }
    }, this.deelay);
  }

  createData() {
    const index = faker.random.number({ min: 0, max: 7 });

    return {
      id: faker.random.uuid(),
      //date: +faker.date.future(),
      date: new Date(),
      user_id: userUUIDs[index],
      text: faker.lorem.words(7)
    };
  }

  getUsers() {
    const users = {};

    for (let index = 0; index < 8; index++) {
      users[userUUIDs[index]] = {
        name: UserNames[index],
        secname: UserSurnames[index],
        color: UserColors[index],
        avatar: `https://eu.ui-avatars.com/api/?name=${UserNames[index]}+${UserSurnames[index]}&background=${UserColors[index]}&&color=fff`,
        id: userUUIDs[index]
      }
    }

    // условно
    users['12345'] = {
      name: 'Test',
      secname: 'Testovich',
      color: 'FF8D00',
      avatar: `https://eu.ui-avatars.com/api/?name=Test+Testovich&background=FF8D00&&color=fff`,
      id: '12345'
    }

    return users;
  }
}
