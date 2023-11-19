<div align="center">
  <h1><a href="https://hieudoanm.github.io">HIEU DOAN</a></h1>
</div>

<div align="center">
  <h2>🧠 Computational Neuroscience</h2>
</div>

<div align="center">
  <img src="https://raw.githubusercontent.com/hieudoanm/hieudoanm/master/assets/svg/icons/languages/typescript.svg" alt="TypeScript" width="32px" height="32px" />
  <img src="https://raw.githubusercontent.com/hieudoanm/hieudoanm/master/assets/svg/icons/tech/python.svg" alt="Python" width="32px" height="32px" />
  <img src="https://raw.githubusercontent.com/hieudoanm/hieudoanm/master/assets/svg/icons/google/go.svg" alt="Go" width="32px" height="32px" />
  <img src="https://raw.githubusercontent.com/hieudoanm/hieudoanm/master/assets/svg/icons/tech/react.svg" alt="React" width="32px" height="32px" />
  <img src="https://raw.githubusercontent.com/hieudoanm/hieudoanm/master/assets/svg/icons/tech/nodejs.svg" alt="Node.js" width="32px" height="32px" />
  <img src="https://raw.githubusercontent.com/hieudoanm/hieudoanm/master/assets/svg/icons/meta/graphql.svg" alt="GraphQL" width="32px" height="32px" />
  <img src="https://raw.githubusercontent.com/hieudoanm/hieudoanm/master/assets/svg/icons/tech/spring.svg" alt="Spring" width="32px" height="32px" />
  <img src="https://raw.githubusercontent.com/hieudoanm/hieudoanm/master/assets/svg/icons/tech/postgresql.svg" alt="PostgreSQL" width="32px" height="32px" />
  <img src="https://raw.githubusercontent.com/hieudoanm/hieudoanm/master/assets/svg/icons/tech/redis.svg" alt="Redis" width="32px" height="32px" />
  <img src="https://raw.githubusercontent.com/hieudoanm/hieudoanm/master/assets/svg/icons/tech/pandas.svg" alt="Pandas" width="32px" height="32px" />
  <img src="https://raw.githubusercontent.com/hieudoanm/hieudoanm/master/assets/svg/icons/tech/tensorflow.svg" alt="TensorFlow" width="32px" height="32px" />
  <img src="https://raw.githubusercontent.com/hieudoanm/hieudoanm/master/assets/svg/icons/aws/aws.svg" alt="AWS" width="32px" height="32px" />
</div>

---

<div align="center">
  <blockquote>Your Brain Works Just Like A Computer So Make Sure You Are The Only One Programming It.</blockquote>
</div>

---

- 👨‍🎓 **Bachelor of Psychology** at `Royal University of Melbourne (RMIT)`
- 🇦🇺 **Senior Software Engineer** at `National Australia Bank`
- 🇩🇪 Ich arbeite seit zwei Jahren in `Deutschland`
- 🇫🇮 **Bachelor of Business Administration, Business Information Technology** in `Finland`
- 🎖️ Achieved the [AWS Certified Solutions Architect – Associate](https://www.credly.com/badges/a427ccdc-fc44-4874-a422-21d772e0e4b3?source=linked_in_profile) in **2021-09-11**.

<div align="center">
  <h2>💻 Chess (Programming) Enthusiast</h2>
</div>

```typescript
type Result = 0 | 0.5 | 1;
type DevelopmentCoefficient = 10 | 20 | 40;
type TimeControl = 'classical' | 'rapid' | 'blitz';

// K is the development coefficient.
// K = 40 for a player new to the rating list until he has completed events with at least 30 games
// K = 20 as long as a player's rating remains under 2400.
// K = 10 once a player's published rating has reached 2400 and remains at that level subsequently, even if the rating drops below 2400.
// K = 40 for all players until their 18th birthday, as long as their rating remains under 2300.
// K = 20 for RAPID and BLITZ ratings all players.

class Chess {
  constructor() {}

  private getDevelopmentCoefficient(
    rating: number,
    {
      age = 18,
      games = 31,
      timeControl = 'classical',
    }: { age: number; games: number; timeControl: TimeControl }
  ): DevelopmentCoefficient {
    if (timeControl === 'rapid' || timeControl === 'blitz') return 20;
    if (games > 30) return 40;
    if (age < 18 && rating < 2300) return 40;
    if (rating >= 2400) return 10;
    return 20;
  }

  private getRatingDelta(
    rating: number,
    opponentRating: number,
    result: Result
  ): number {
    if ([0, 0.5, 1].indexOf(result) === -1) return 0;
    const gap: number = opponentRating - rating;
    const chanceToWin: number = 1 / (1 + Math.pow(10, gap / 400));
    const K: DevelopmentCoefficient = this.getDevelopmentCoefficient(rating);
    return Math.round(K * (result - chanceToWin));
  }

  public getNewRating(rating: number, opponentRating: number, result: Result) {
    return rating + this.getRatingDelta(rating, opponentRating, result);
  }
}
```
