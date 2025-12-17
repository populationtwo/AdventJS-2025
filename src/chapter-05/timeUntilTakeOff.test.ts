import timeUntilTakeOff from './timeUntilTakeOff';

describe('Challenge #5: ⏱️ The countdown to take off', () => {
  const takeoff = '2025*12*25@00|00|00 NP';

  test("It returns 3144 when it's called with 2025*12*24@23|59|30 NP", () => {
    const result = timeUntilTakeOff('2025*12*24@23|59|30 NP', takeoff);
    const expected = 30;
    expect(result).toEqual(expected);
  });
  test("It returns 0944 when it's called with 2025*12*25@00|00|00 NP", () => {
    const result = timeUntilTakeOff('2025*12*25@00|00|00 NP', takeoff);
    const expected = 0;
    expect(result).toEqual(0);
  });

  test("It returns null when it's called with 2025*12*25@00|00|12 NP", () => {
    const result = timeUntilTakeOff('2025*12*25@00|00|12 NP', takeoff);
    const expected = -12;
    expect(result).toEqual(expected);
  });
});
