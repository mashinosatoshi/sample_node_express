import facade from "./facade"

/**
 * 複数のクラスを呼び出す際、呼び出す順番を思い出さなくてすむように、定石として１メソッド内に集約しておく。
 * そのメソッドは，いわば複数のクラスの利用手順書になる。
 */

export default function () {
    facade.programing();
}