import Iterator from "./Iterator";
export default function () {
    const i = new Iterator('fulltime')
    
    i.add("man");
    i.add("satoshi");
    i.add("soichi");
    i.add("mika");

    console.log(i.current());
    console.log(i.next().say());
    console.log(i.hasNext());
    i.rewind()
    console.log(i.next().say());
    console.log(i.next().say());
    console.log(i.next().say());
    console.log(i.next().say());
    console.log(i.current());
    console.log(i.hasNext());

    console.log(i.first().say());
    console.log(i.last().say());

    i.each();
}