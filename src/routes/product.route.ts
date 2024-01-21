import { Router } from 'express';
const router = Router();
import { getProducts, postProduct, deleteProduct } from '../controlers/product.controller';


router.get('/', getProducts);

router.post('/', postProduct);

router.delete('/:_id', deleteProduct);

export default router;
