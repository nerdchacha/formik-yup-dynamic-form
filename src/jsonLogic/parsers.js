import moment from 'moment';

export const number = value => {
  if (value.trim() === '') {
    return NaN;
  }
  return Number(value);
};

export const string = value => value.toString();

export const boolean = value => {
  if (typeof value === 'string') {
    const map = { true: true, false: false };
    return map[value];
  }
  return !!value;
};

export const date = value => moment(value, 'DD-MM-YYYY', true);
