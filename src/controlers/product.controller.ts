import { Request, Response } from 'express';
import productModel from '../models/product.model';



export function getProducts(req: Request, res: Response): void {
    productModel.find().then((products) => {
            return res.json({
                type: "success",
                message: "",
                data: products,
            });
        })
        .catch((err) => {
            console.log(err);
            return res.json({
                type: "error",
                message: "",
                data: {},
            });
        });
}



export function postProduct(req: Request, res: Response) {
    // add product code...
}
export function deleteProduct(req: Request, res: Response) {
    // delete product code...
}