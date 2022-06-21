import { usersEvent0, usersEvent1, usersEvent2 } from "./_users"

export const eventsMd = [
  {
    link: "/event-page/0",
    title: "Марафон \n по star wars",
    data: "июнь: 22, 23, 24",
    color: "#FF6F42",
  },
  {
    link: "/event-page/1",
    title: "Согласование отчетности ЭЕС-715",
    data: "июнь: 5, 6",
    color: "#2B2B2B",
  },
  {
    link: "/event-page/2",
    title: "Летний выезд на природу",
    data: "июнь: 10, 12",
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

const statistics = [
  {
    date: "22 июн, ср",
    fullDat: "22, среда",
    users: 6,
    level: "100%",
  },
  {
    date: "23 июн, чт",
    fullDat: "23, четверг",
    users: 5,
    level: "90%",
  },
  {
    date: "24 июн, пт",
    fullDat: "24, четверг",
    users: 4,
    level: "80%",
  },
]

export const eventMdSW = [
  {
    title: "Марафон по star wars",
    events: [
      {
        title: "Все могут \n 22 июн, ср 19:00-23:00",
        active: true,
        number: 6,
      },
      {
        title: "Можно \n 23 июн, чт 19:00-23:00",
        users: usersSlice.splice(0, 1),
        number: 1,
      },
      {
        title: "Можно \n 24 июн, пт 20:00-23:00",
        users: usersSlice.splice(0, 2),
        number: 2,
      },
    ],
    statisticsEvent: [
      {
        fullDate: "22 июня, среда",
        users: usersEvent0,
        result: {
          start: "19:00",
          stop: "23:00",
        },
      },
      {
        fullDate: "23 июня, четверг",
        users: usersEvent1,
        result: {
          start: "19:00",
          stop: "23:00",
        },
      },
      {
        fullDate: "24 июня, пятница",
        users: usersEvent2,
        result: {
          start: "20:00",
          stop: "23:00",
        },
      },
    ],
    statistics: [...statistics],
  },
]

export const marking = {
  eventName: "Марафон по star wars",
  org: "Макаров Фёдор",
  users: users,
  statistics: [...statistics],
  timeSlots: [
    {
      title: "Ср",
      date: "22",
      // timeSlotsList: ["09:00 – 15:00", "17:30 – 18:30", "20:00 – 00:00"],
    },
    {
      title: "Чт",
      date: "23",
    },
    {
      title: "Пт",
      date: "24",
    },
  ],
}
