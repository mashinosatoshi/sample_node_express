import Rectangle from "./Rectangle";

export default function () { 
    const rect = new Rectangle(10, 20);

    console.log(String(rect.area()));
}