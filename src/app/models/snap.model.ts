import { SnapType } from './snap-type-type';

export class FaceSnap {
  location?: string;
  id: string;
  constructor(
    public title: string,
    public description: string,
    public imageUrl: string,
    public createAt: Date,
    public snaps: number,
  ) {
    this.id = crypto.randomUUID().substring(0, 8); //UUID= universally unique id
  }
  addSnap(): void {
    this.snaps++;
  }

  snap(snapType: SnapType) {
    if (snapType === 'snap') {
      this.addSnap();
    } else {
      this.removeSnap();
    }
  }
  removeSnap(): void {
    this.snaps--;
  }
  setLocation(location: string): void {
    this.location = location;
  }
}
