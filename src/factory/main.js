import Factory from "./Factory";
export default function () {
    const fulltime = new Factory('fulltime');
    const parttime = new Factory('parttime');
    const temporary = new Factory('temporary');
    const contractor = new Factory('contractor');
    console.log(fulltime.say());
    console.log(parttime.say());
    console.log(temporary.say());
    console.log(contractor.say());
}