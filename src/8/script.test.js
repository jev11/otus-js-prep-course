import { dayOfWeek, minutesSinceToday, youngerUser } from "./script";

describe("dayOfWeek", () => {
  let log;
  beforeEach(() => {
    log = console.log;
    console.log = jest.fn();
  });
  afterEach(() => {
    console.log = log;
  });

  it("is a function", () => {
    expect(dayOfWeek).toBeInstanceOf(Function);
  });

  [
    ["04.05.2021", "Tuesday"],
    ["01.07.2005", "Friday"],
    ["11.01.2100", "Monday"],
  ].forEach(([date, day]) => {
    it(`returns ${day} for ${date}`, () => {
      window.prompt = jest.fn().mockImplementation(() => date);
      dayOfWeek(date);
      expect(console.log).toHaveBeenCalledWith(day);
    });
  });
});

describe("minutesSinceToday", () => {
  let log;
  beforeEach(() => {
    log = console.log;
    console.log = jest.fn();
  });
  afterEach(() => {
    console.log = log;
  });

  it("is a function", () => {
    expect(minutesSinceToday).toBeInstanceOf(Function);
  });
  [
    ["5:00", 300],
    ["20:15", 1215],
    ["0:01", 1],
  ].forEach(([time, result]) => {
    it(`calls console.log with number of minutes 
    (${result}) from day start at ${time}`, () => {
      const [hours, minutes] = time.split(":").map(Number);
      jest.spyOn(Date.prototype, "getHours").mockImplementation(() => hours);
      jest
        .spyOn(Date.prototype, "getMinutes")
        .mockImplementation(() => minutes);
      minutesSinceToday();
      expect(console.log).toHaveBeenCalledWith(result);
    });
  });
});

describe("youngerUser", () => {
  it("is a function", () => {
    expect(youngerUser).toBeInstanceOf(Function);
  });
  [
    ["01.01.1955", "02.01.1955", "02.01.1955"],
    ["05.05.1976", "03.06.1961", "05.05.1976"],
    ["01.01.1986", "31.12.1985", "01.01.1986"],
  ].forEach(([user1, user2, result]) => {
    it(`compares birthdates ${user1} and ${user2} and
    determines that user with birthdate ${result} is younger`, () => {
      expect(youngerUser(user1, user2)).toBe(result);
    });
  });
});
