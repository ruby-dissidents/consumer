export const eventsMd = [
  {
    link: "/event-page/0",
    title: "Марафон \n по star wars",
    data: "июнь: 21, 6-6, 6; июнь: 22, 23, 24",
    color: "#FF6F42",
  },
  {
    link: "/event-page/1",
    title: "Согласование отчетности ЭЕС-715",
    data: "июнь: 1, 1-6, 7; июнь: 5, 6",
    color: "#2B2B2B",
  },
  {
    link: "/event-page/2",
    title: "Летний выезд на природу",
    data: "июнь: 6, 1-6, 7; июнь: 10, 12",
    color: "#836AC6",
  },
]

export const users = [
  {
    name: "Зимин Кирилл",
    timeLine: {
      start: 18,
      end: 26,
    },
  },
  {
    name: "Шубин Роман",
    timeLine: {
      start: 11,
      end: 28,
    },
  },
  {
    name: "Кравцова Малика",
    timeLine: {
      start: 14,
      end: 26,
    },
  },
  {
    name: "Соколов Марк",
    timeLine: {
      start: 19,
      end: 30,
    },
  },
  {
    name: "Смирнов Михаил",
    timeLine: {
      start: 20,
      end: 35,
    },
  },
  {
    name: "Макаров Фёдор",
    timeLine: {
      start: 20,
      end: 26,
    },
  },
]

const usersSlice = [...users]

export const eventMdSW = [
  {
    title: "Марафон по star wars",
    events: [
      {
        title: "Все могут \n 22 июн, ср 19:00-22:00",
        active: true,
        number: 6,
      },
      {
        title: "Можно \n 23 июн, чт 19:00-22:00",
        users: usersSlice.splice(0, 1),
        number: 1,
      },
      {
        title: "Можно \n 24 июн, пт 20:00-21:00",
        users: usersSlice.splice(0, 2),
        number: 2,
      },
    ],
    statisticsEvent: [
      {
        fullDate: "22 июня, понедельник",
        users: users,
      },
      {
        fullDate: "23 июня, понедельник",
        users: users,
      },
      {
        fullDate: "24 июня, понедельник",
        users: users,
      },
    ],
    statistics: [
      {
        date: "22 июн, ср",
        users: 6,
        level: "100%",
      },
      {
        date: "23 июн, чт",
        users: 5,
        level: "90%",
      },
      {
        date: "24 июн, пт",
        users: 4,
        level: "80%",
      },
    ],
    participants: users,
  },
]
