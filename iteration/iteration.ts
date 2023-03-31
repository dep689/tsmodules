export function* range(startOrStop: number, maybeStop?: number, step=1) {
    if (maybeStop == undefined) {
        const stop = startOrStop
        yield* zeroTo(stop)
        return
    }

    const start = startOrStop
    const stop  = maybeStop
    for (let num = start; (stop - num)*step > 0; num += step) {
        yield num
    }
}

/** 0 以上 stop 未満の数を返すジェネレーター
 * zeroTo(4) は配列で言うと [0, 1, 2, 3]
 */
export function* zeroTo(stop: number) {
    if (stop > 0) {
        for (let num = 0; num < stop; num++) {
            yield num
        }
    } else {
        for (let num = 0; num > stop; num--) {
            yield num
        }
    }
}