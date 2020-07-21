export const Mobile = (value) => value.replace(/[^\d]/g, '').slice(0, 10);

export const Captialize = (value) =>
  value && value.charAt(0).toUpperCase() + value.slice(1);

