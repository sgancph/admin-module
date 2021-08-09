export const supervisors = [
  "Harry",
  "Lily",
  "James",
  "Ron",
  "Sirius",
  "Albus",
  "Hermione",
  "Seamus",
];

export const FETCH_ADVISORS = "ADVISORS/FETCH_ADVISORS";
export const ADD_ADVISOR = "ADVISORS/ADD_ADVISOR";
export const UPDATE_ADVISOR = "ADVISORS/UPDATE_ADVISOR";
export const REMOVE_ADVISOR = "ADVISORS/REMOVE_ADVISOR";
export const ADD_TEMPORARY_LEAVE =
  "ADVISORS/TEMPORARY_LEAVE/ADD_TEMPORARY_LEAVE";
export const REMOVE_TEMPORARY_LEAVE =
  "ADVISORS/TEMPORARY_LEAVE/REMOVE_TEMPORARY_LEAVE";
export const UPDATE_OPENING_HOURS =
  "ADVISORS/OPENING_HOURS/UPDATE_OPENING_HOURS";

export const initialStateAdvisor = {
  isLoading: false,
  advisorsById: {
    1: {
      id: 1,
      firstName: "Amy",
      lastName: "Liu",
      agentCode: "xxxx",
      gender: "Female",
      yearJoinedIncome: "2018",
      phoneCountryCode: "+49",
      supervisor: supervisors[0],
      numLeads: 3,
      createdAt: new Date(),
      temporaryLeave: [
        { date: "xx", reason: "yy" },
        { date: "zz", reason: "aa" },
      ],
      openingHours: [
        { start: "1.15 am", end: "2.00 am" },
        { start: "2.15 am", end: "3.15 am" },
      ],
    },
    2: {
      id: 2,
      firstName: "Brian",
      lastName: "XX",
      agentCode: "xxxx",
      gender: "Male",
      yearJoinedIncome: "2018",
      phoneCountryCode: "+46",
      supervisor: supervisors[3],
      numLeads: 7,
      createdAt: new Date(),
      temporaryLeave: [],
      openingHours: [],
    },
  },
  leads: [],
};

export const fetchAdvisors = (advisors) => ({
  type: FETCH_ADVISORS,
  advisors,
});

export const addAdvisor = (advisor) => ({
  type: ADD_ADVISOR,
  advisor,
});

export const updateAdvisor = (advisor) => ({
  type: UPDATE_ADVISOR,
  advisor,
});

export const removeAdvisor = (advisor) => ({
  type: REMOVE_ADVISOR,
  advisor,
});

export const addTemporaryLeave = (advisorId, date, reason) => ({
  type: ADD_TEMPORARY_LEAVE,
  advisorId,
  date,
  reason,
});

export const removeTemporaryLeave = (advisorId, i) => ({
  type: REMOVE_TEMPORARY_LEAVE,
  advisorId,
  i,
});

export const updateOpeningHours = (advisorId, openingHours) => ({
  type: UPDATE_OPENING_HOURS,
  advisorId,
  openingHours,
});

export const advisorReducer = (state = initialStateAdvisor, action) => {
  switch (action.type) {
    case ADD_ADVISOR:
      return {
        ...state,
        advisorsById: {
          ...state.advisorsById,
          [action.advisor.id]: action.advisor,
        },
      };
    case UPDATE_ADVISOR:
      return {
        ...state,
        advisorsById: {
          ...state.advisorsById,
          [action.advisor.id]: action.advisor,
        },
      };
    // case REMOVE_ADVISOR:
    //   return { ...state, advisorsById: action.advisors };
    // case FETCH_ADVISORS:
    //   return { ...state, advisorsById: action.advisors };
    case ADD_TEMPORARY_LEAVE:
      return {
        ...state,
        advisorsById: {
          ...state.advisorsById,
          [action.advisorId]: {
            ...action.advisor,
            temporaryLeave: [
              ...state.advisorsById[action.advisorId].temporaryLeave,
              { date: action.date, reason: action.reason },
            ],
          },
        },
      };
    case REMOVE_TEMPORARY_LEAVE:
      return { ...state, advisorsById: action.advisors };
    // case UPDATE_OPENING_HOURS:
    //   return { ...state, advisorsById: action.advisors };
    // default:
    //   throw new Error();
  }
};

export const userReducer = () => {};
export const leadReducer = () => {};
