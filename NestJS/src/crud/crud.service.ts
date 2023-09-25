import { Injectable } from '@nestjs/common';
import { CreateCrudDto } from './dto/create-crud.dto';
import { UpdateCrudDto } from './dto/update-crud.dto';
import { Product } from 'src/models/product.model';

@Injectable()
export class CrudService {
  // private products: Product[]=[
  //   {id: 1, categoryId: 2, price: 100000, productName: "Shirt"},
  //   {id: 2, categoryId: 8, price: 900000, productName: "Pens"},
  //   {id: 3, categoryId: 5, price: 600000, productName: "Pan"},
  //   {id: 4, categoryId: 8, price: 200000, productName: "Pee"},
  // ]

  create(createCrudDto: CreateCrudDto) {
    return 'This action adds a new crud';
  }

  findAll() {
    return `This action returns all crud`;
  }

  findOne(id: number) {
    return `This action returns a #${id} crud`;
  }

  update(id: number, updateCrudDto: UpdateCrudDto) {
    return `This action updates a #${id} crud`;
  }

  remove(id: number) {
    return `This action removes a #${id} crud`;
  }
}
