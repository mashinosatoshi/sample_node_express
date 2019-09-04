import Rectangle from "./Rectangle";

export default function () { 
    const rect = new Rectangle(10, 20);

    console.log(String(rect.area()));

    rect.add_height(5);
    rect.add_width(5);
    console.log(String(rect.area()));
}