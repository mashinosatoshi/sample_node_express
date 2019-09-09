import Rectangle from "./Rectangle";
/**
 * extendすると、勝手に値を書き換える
 * そういうやり方もあるという事なのだろうけど、なんだかすごく怖い
 */
export default function () { 
    const rect = new Rectangle(10, 20);

    console.log(String(rect.area()));

    rect.add_height(5);
    rect.add_width(5);
    console.log(String(rect.area()));
}