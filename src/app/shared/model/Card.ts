export class Card {
  id: number;
  title: string;
  selected: boolean;

  constructor(id: number, title: string) {
    this.id = id;
    this.title = title;
    this.selected = false;
  }
}
