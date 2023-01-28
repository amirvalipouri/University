const landing = [
  {
    label: "دروس مهمان",
    path: "/guest-lesson"
  },

]

const students = [
  {
    title: "داشبورد",
    path: "/student/dashboard",
    icon : "grid"
  },
  {
    title: "انتخاب واحد",
    children: [

      {
        title: " انتخاب واحد",
        path: "/student/select-unit",
      },
      {
        title: "دروس دانشجو در نیمسال",
        path: "/student/students-unit",
      },
      {
        title: "دروس ارائه شده در نیمسال",
        path: "/student/available-courses",
      },
    ],
  },
  {
    title: "گزارش",
    children: [

      {
        title: "کارنامه کامل",
        path: "/student/full-report",
      },
      {
        title: "کارنامه وقت",
        path: "/student/students-unit",
      },
      {
        title: "وضعیت آموزشی",
        path: "/student/available-courses",
      },
    ],
  },
]




export { landing, students }