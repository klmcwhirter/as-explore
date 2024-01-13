// The entry file of your WebAssembly module.

const MAX_AXIS: i32 = 32;
export const NUM_POINTS: i32 = MAX_AXIS * MAX_AXIS;  // 1024

class Point {

  constructor(
    public x: i32 = 0,
    public y: i32 = 0
  ) { }
}

export enum CalcStatus {
  Error = 0,
  Empty,
  Pending,
  Ok
}

class CalcResponse {
  num_points: i32 = 0;
  points: Point[] = [];
  status: CalcStatus = CalcStatus.Empty;
}

// @ts-ignore
@inline
function randomI32(): i32 {
  return i32(Math.random() * MAX_AXIS);
}

export function randomPoints(num: i32 = NUM_POINTS): CalcResponse {
  const rc = new CalcResponse();

  rc.status = CalcStatus.Pending;

  rc.num_points = num;

  rc.points = new Array(rc.num_points);

  for (let i = 0; i < rc.num_points; i++) {
    const x: i32 = randomI32();
    const y: i32 = randomI32();
    const p = new Point(x, y);
    rc.points[i] = p;
  }

  rc.status = CalcStatus.Ok;

  return rc;
}
