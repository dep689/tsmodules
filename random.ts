export function rand(n: number) {
    return Math.floor(Math.random() * n)
}

export function randPerm(n: number) {
    return shuffle(Array.from(Array(n).keys()))
}

export function shuffle<T>(a: T[]) {
    // フィッシャー–イェーツのシャッフル
    const n = a.length
    for (let i = n - 1; i >= 1; i--) {
        const j = rand(i + 1)
        // [] の前に自動でセミコロンが挿入されないので
        // 次の行頭のセミコロンは必須です
        ;[a[i], a[j]] = [a[j], a[i]]
    }
    return a
}

// 元の配列を変えないバージョン
export function shuffled<T>(a: T[]) {
    return shuffle(a.slice())
}
