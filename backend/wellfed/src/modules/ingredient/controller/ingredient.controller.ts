import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { IngredientService } from '../service/ingredient.service';
import { Ingredient } from '../entity/ingredient.entity';

@Controller('ingredient')
export class IngredientController {
  constructor(private readonly ingredientService: IngredientService) {}

  @Get()
  findAll(): Promise<Ingredient[]> {
    return this.ingredientService.findAll();
  }

  @Get(':_id')
  findOne(@Param('_id') id: string): Promise<Ingredient> {
    return this.ingredientService.findOne(id);
  }

  @Post()
  create(@Body() ingredientData: Partial<Ingredient>): Promise<Ingredient> {
    return this.ingredientService.create(ingredientData);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() ingredientData: Partial<Ingredient>): Promise<Ingredient> {
    return this.ingredientService.update(id, ingredientData);
  }

  @Delete(':id')
  delete(@Param('id') id: string): Promise<void> {
    return this.ingredientService.delete(id);
  }
}