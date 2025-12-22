function elfBattle(elf1: string, elf2: string): number {
  type Move = 'A' | 'F' | 'B' | 'N'; // Attack, Fire, Block, None

  const DAMAGE_MATRIX: Record<Move, Record<Move, [number, number]>> = {
    // Format: [Damage to Elf 1, Damage to Elf 2]
    A: { A: [1, 1], F: [2, 1], B: [0, 0], N: [0, 1] },
    F: { A: [0, 2], F: [2, 2], B: [0, 2], N: [0, 2] },
    B: { A: [0, 0], F: [2, 0], B: [0, 0], N: [0, 0] },
    N: { A: [1, 0], F: [2, 0], B: [0, 0], N: [0, 0] },
  };
  let elf1Hp = 3;
  let elf2Hp = 3;

  const maxMoves = Math.max(elf1.length, elf2.length);

  for (let i = 0; i < maxMoves; i++) {
    // Fallback to 'N' (None) if one elf runs out of moves
    const m1 = (elf1[i] || 'N') as Move;
    const m2 = (elf2[i] || 'N') as Move;

    const [d1, d2] = DAMAGE_MATRIX[m1][m2];

    elf1Hp -= d1;
    elf2Hp -= d2;

    // Termination logic: stop as soon as someone is defeated
    if (elf1Hp <= 0 || elf2Hp <= 0) break;
  }

  // Final outcome calculation
  if (elf1Hp > elf2Hp) return 1;
  if (elf2Hp > elf1Hp) return 2;
  return 0; // Covers draws and simultaneous KOs
}
export default elfBattle;
