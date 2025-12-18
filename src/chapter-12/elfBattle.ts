function elfBattle(elf1: string, elf2: string): number {
  const moves1 = elf1.split('');
  const moves2 = elf2.split('');

  // If move lengths differ, battle ends immediately
  if (moves1.length !== moves2.length) return 0;

  let elf1Hp = 3;
  let elf2Hp = 3;

  const applyDamage = (d1: number, d2: number) => {
    elf1Hp -= d1;
    elf2Hp -= d2;
  };

  for (let i = 0; i < moves1.length; i++) {
    const m1 = moves1[i];
    const m2 = moves2[i];

    // Attack vs Attack
    if (m1 === 'A' && m2 === 'A') {
      applyDamage(1, 1);
    }

    // Attack vs Fire
    else if (m1 === 'A' && m2 === 'F') {
      applyDamage(2, 1);
    }

    // Fire vs Attack
    else if (m1 === 'F' && m2 === 'A') {
      applyDamage(0, 2);
    }

    // Fire vs Fire
    else if (m1 === 'F' && m2 === 'F') {
      applyDamage(2, 2);
    }

    // Fire vs Block
    else if (m1 === 'F' && m2 === 'B') {
      applyDamage(0, 2);
    }

    // Attack vs Block → no damage

    // Stop immediately if someone hits 0 or below
    if (elf1Hp <= 0 || elf2Hp <= 0) break;
  }

  if (elf1Hp > elf2Hp) return 1;
  if (elf2Hp > elf1Hp) return 2;
  return 0;
}

export default elfBattle;
