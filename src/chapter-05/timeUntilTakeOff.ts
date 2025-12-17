type ElfDateTime = `${number}*${number}*${number}@${number}|${number}|${number} NP`;

function timeUntilTakeOff(fromTime: ElfDateTime, takeOffTime: ElfDateTime): number | null {
  // All your code here

  function parseTime(time: string): Date {
    let newTime = '';
    newTime = time
      .replace(' NP', '')
      .replace('*', '-')
      .replace('*', '-')
      .replace('@', ' ')
      .replace(/\|/g, ':');
    return new Date(newTime + ' UTC');
  }

  const fromDate: Date = parseTime(fromTime);
  const takeOffDate: Date = parseTime(takeOffTime);

  return Math.floor((takeOffDate.getTime() - fromDate.getTime()) / 1000);
}

export default timeUntilTakeOff;
