export class Product {
    id: number;
    name: string;
    description: string;
    price: number;
    imageUrl: string;

    constructor(id : any, name : any, description = '', price = 0, imageUrl = 'https://st-troy.mncdn.com/mnresize/1500/1500/Content/media/ProductImg/original/mlvc3tua-apple-iphone-13-pro-128gb-altin-637678394638401462.jpg'){
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.imageUrl = imageUrl;
    }
}
