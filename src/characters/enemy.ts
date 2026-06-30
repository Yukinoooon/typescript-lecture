import { Character } from "./character";

export class Enemy extends Character {
  //maxHp プロパティを追加する
  readonly maxHp: number;

  //maxHp プロパティの初期化
  constructor(name: string, hp: number) {
    super(name, hp);
    this.maxHp = hp;
  }

  // maxHp に対する現在の hp の割合を返すgetHpRatio メソッドを追加する
  getHpRatio(): number {
    return this.hp / this.maxHp;
  }

  // ダメージを受ける takeDamage メソッドを追加する
  takeDamage(damage: number): void {
    this.hp -= damage;
  }

  // 通常時: name + "は攻撃してきた！"
  // 残HPが30%以下: name + "は必死に抵抗している！"
  attack(): void {
    if (this.getHpRatio() > 0.3) {
      console.log(`${this.name}は攻撃してきた！`);
    } else {
      console.log(`${this.name}は必死に抵抗している！`);
    }

  }
}
