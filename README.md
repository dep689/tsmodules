# tsmodules

自作のTypeScriptモジュール．便利関数とか．

## random
```ts
import * from 'https://raw.githubusercontent.com/dep689/tsmodules/main/random.ts'
```

- `rand(n: number)` : 0 以上 n 以下のランダムな整数
- `randPerm(n: number)` : [0,1,...,n-1] をランダムに並び替えた配列
- `shuffle<T>(a: T[])` : a の要素をランダムに並び替える
- `shuffled<T>(a: T[])` : a の要素をランダムに並び替えた配列．元の a は変わらない．

## iteration
```ts
import * from 'https://raw.githubusercontent.com/dep689/tsmodules/main/iteration/mod.ts'
```

- `range([start: number, ]stop: number[, step=1])`
- `zeroTo(stop: number)`

```ts
[...range(4)]       // [ 0, 1, 2, 3 ]
[...range(1,4)]     // [ 1, 2, 3 ]
[...range(0,10,2)]  // [ 0, 2, 4, 6, 8 ]
```
