import { nanoid } from 'nanoid';

const DataGenerator = data => {
  return data.map(contacts => {
    contacts.id = nanoid();
    contacts.number =
      Math.floor(Math.random() * (999 - 100) + 100) +
      '-' +
      Math.floor(Math.random() * (99 - 10) + 10) +
      '-' +
      Math.floor(Math.random() * (99 - 10) + 10);
    return contacts;
  });
};

export default DataGenerator;
