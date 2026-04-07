export class FaceSnap {
  constructor(
    public title: string,
    public description: string,
    public imageUrl: string,
    public createAt: Date,
    public snaps: number,
  ) {}
  addSnap(): void {
    this.snaps++;
  }
  removeSnap(): void {
    this.snaps--;
  }
}
