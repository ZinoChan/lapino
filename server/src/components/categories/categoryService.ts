import Category, { ICategory } from './category';
import slugify from 'slugify';
import { ErrorHandler } from '@/middlewares/error.middleware';

class CategoryService {
  async addCategory(category: ICategory): Promise<ICategory> {
    try {
      const categoryParentId = category.parent ? category.parent : null;
      const categoryExists = await Category.findOne({ slug: slugify(category.name) });
      if (categoryExists) {
        throw new ErrorHandler(400, 'Category with this name already exists');
      }

      const createdCategory = await Category.create(category);

      if (categoryParentId) {
        const parentCategory = await Category.findById(categoryParentId);
        const { _id, name, slug, image } = createdCategory;
        const descendents = [...parentCategory.descendents];
        descendents.unshift({ _id, name, slug, image });

        await Category.findByIdAndUpdate(categoryParentId, { $set: { descendents } });
      }

      return createdCategory;
    } catch (err) {
      throw new Error(err.message);
    }
  }

  async getAllCategories(select?: string): Promise<ICategory[]> {
    try {
      const categories = await Category.find({}).select(select);

      if (!categories) {
        throw new ErrorHandler(404, 'no category was found');
      }

      return categories;
    } catch (err) {
      throw new Error(err.message);
    }
  }

  async getParentCategories(): Promise<ICategory[]> {
    try {
      const categories = await Category.find({ parent: null }).select('name image');

      if (!categories) {
        throw new ErrorHandler(404, 'no category was found');
      }

      return categories;
    } catch (err) {
      throw new Error(err.message);
    }
  }

  async deleteCategory(id: ICategory['_id']): Promise<ICategory['_id']> {
    try {
      const category = await Category.findById(id);

      if (!category) {
        throw new ErrorHandler(404, 'Category not found');
      }

      const deletedCategory = await Category.findByIdAndDelete(id);

      const parentCategoryId = deletedCategory.parent;

      if (parentCategoryId) {
        const parentCategory = await Category.findById(parentCategoryId);
        if (parentCategory) {
          const descendents = parentCategory.descendents.filter(
            (item: ICategory) => item._id.toString() !== deletedCategory._id.toString(),
          );
          await Category.findByIdAndUpdate(parentCategoryId, { $set: { descendents } });
        }
      }

      // Delete All The Products in this category
      // await Product.deleteMany({category: deletedCategory._id})

      return deletedCategory._id;
    } catch (err) {
      if (err.statusCode) {
        throw new ErrorHandler(err.statusCode, err.message);
      } else {
        throw new Error(err.message);
      }
    }
  }
}

export default new CategoryService();
