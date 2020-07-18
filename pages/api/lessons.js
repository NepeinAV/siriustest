// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  res.statusCode = 200;
  res.json([
    {
      id: 1,
      title: 'Курс',
      isPaid: true,
      period: [new Date(2020, 6, 18, 13, 0, 0, 0), new Date(2020, 6, 18, 13, 45, 0, 0)],
      teacher: {
        name: 'Ольга Титова',
        subject: 'Ментальная арифметика',
      },
      homework: ['Решить примеры 22-27 в рабочей тетради', 'Счет на время на онлайн-тренажере'],
    },
    {
      id: 2,
      title: 'Курс Ментальная арифметика',
      isPaid: true,
      period: [new Date(2020, 6, 31, 12, 0, 0, 0), new Date(2020, 6, 31, 12, 45, 0, 0)],
      teacher: {
        name: 'Ольга Титова',
        subject: 'Ментальная арифметика',
      },
      homework: ['Решить примеры 22-27 в рабочей тетради', 'Счет на время на онлайн-тренажере'],
    },
    {
      id: 3,
      title: 'Курс Ментальная арифметика',
      isPaid: true,
      period: [new Date(2020, 6, 21, 9, 0, 0, 0), new Date(2020, 6, 21, 9, 45, 0, 0)],
      teacher: {
        name: 'Ольга Титова',
        subject: 'Ментальная арифметика',
      },
      homework: ['Решить примеры 22-27 в рабочей тетради', 'Счет на время на онлайн-тренажере'],
    },
  ]);
};
