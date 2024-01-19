import assert from "assert";
import { NUM_POINTS, CalcStatus, randomPoints } from "../build/as-types.debug.js";

function test_constant() {
    assert.strictEqual(32 * 32, NUM_POINTS.value);
    assert.throws(() => { NUM_POINTS = 10 }, TypeError);
    // NUM_POINTS = 10; // TypeError: Assignment to constant variable.
    assert.strictEqual(1024, NUM_POINTS.value);
}

function test_response(num_points) {
    const rc = randomPoints(num_points);
    // console.debug('rc=', rc);
    assert.strictEqual(rc.num_points, num_points);
    assert.strictEqual(rc.points.length, num_points);
    assert.strictEqual(rc.status, CalcStatus.Ok);
}

function test_status() {
    assert.strictEqual(CalcStatus.Error, 0);
    assert.strictEqual(CalcStatus.Empty, 1);
    assert.strictEqual(CalcStatus.Pending, 2);
    assert.strictEqual(CalcStatus.Ok, 3);
}

test_constant();
test_status();

test_response(10);
test_response(NUM_POINTS.value);

console.log("ok");
