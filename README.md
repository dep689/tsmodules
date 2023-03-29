# tsmodules

自作のTypeScriptモジュール．便利関数とか．

## random.ts
```ts
import * from 'https://raw.githubusercontent.com/dep689/tsmodules/main/random.ts'
```

- `rand(n: number)` : 0 以上 n 以下のランダムな整数
- `randPerm(n: number)` : [0,1,...,n-1] をランダムに並び替えた配列
- `shuffle<T>(a: T[])` : a の要素をランダムに並び替える
- `shuffled<T>(a: T[])` : a の要素をランダムに並び替えた配列．元の a は変わらない．
