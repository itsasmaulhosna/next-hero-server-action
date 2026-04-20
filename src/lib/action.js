export const creatATask = async () => {
  'use server';
  const name = FormData.get('name');
  console.log(name);
};
