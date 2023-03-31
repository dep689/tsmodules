import { assertEquals } from 'https://deno.land/std@0.181.0/testing/asserts.ts'

import { zeroTo, range } from './iteration.ts'


Deno.test('Test zeroTo()', () => {
    assertEquals(Array.from(zeroTo(4)), [0, 1, 2, 3])
    assertEquals(Array.from(zeroTo(0)), [])
    assertEquals(Array.from(zeroTo(-4)), [0, -1, -2, -3])
})

Deno.test('Test range()', () => {
    assertEquals(Array.from(range(4)) , [0, 1, 2, 3])
    assertEquals(Array.from(range(-4)), [0, -1, -2, -3])
    assertEquals(Array.from(range(1, 4)), [1, 2, 3])
    assertEquals(Array.from(range(0, 5, 2)), [0, 2, 4])
    assertEquals(Array.from(range(0, -5, -2)), [0, -2, -4])
    assertEquals(Array.from(range(4, 0, -1)), [4, 3, 2, 1])
})