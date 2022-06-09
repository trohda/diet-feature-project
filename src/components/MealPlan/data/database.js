import activeBodeShake from "../img/bodeShakeColor.png";
import inActiveBodeShake from "../img/bodeShakeLight.png";
export const weeks = [
  {
    weekNumber: 7,
    hours: [
      { time: "6:00", partOfDay: "AM" },
      { time: "9:00", partOfDay: "AM" },
      { time: "12:00", partOfDay: "PM" },
      { time: "3:00", partOfDay: "PM" },
      { time: "6:00", partOfDay: "PM" },
    ],

    days: [64, 65, 66, 67, 68, 69, 70],
    meals: {
      bodeShake: {
        name: "Bod•ē Shake",
        activePic: activeBodeShake,
        inActivePic: inActiveBodeShake,
      },
      hamAndSwissRollsUp: "Ham and Swiss Roll Ups",
      grilledSteak: "Grilled Steak (HC)",
      turkeyMelt: "Turkey Melt",
      GarlicLimeChicken: "Garlic Lime Chicken (HC)",
      bodeBurnEnglishMuffin:
        "Bod•ē Burn and Whole-Wheat English Muffin with Butter Spray",
      bodeBurnTomatoMozzarella: "Bod•ē Burn with Mozzarella and Tomato Slices",
    },
  },
];
