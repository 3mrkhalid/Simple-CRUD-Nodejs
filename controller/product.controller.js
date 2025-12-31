import Product from "../models/product.model.js"

const CreateProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).json(product);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const GetProducts = async (req, res)=> {

    try {
      const product = await Product.find({});
      res.status(200).json(product);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
}

const GetProductById = async (req, res)=> {
    try {

        const {id} = req.params;
        const product = await Product.findById(id)

        res.status(200).json(product)
        
    }catch(err) {
        res.status(500).json({message: err.message})
    }
}

const UpdatedProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body);

    if (!product) {
      return res.status(404).json({ message: "product not found" });
    }

    const UpdatedProduct = await Product.findById(id);
    res.status(200).json(UpdatedProduct);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const DeleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndDelete(id);

    if (!product) {
      return res.status(404).json({ message: "Not Found Item" });
    }
    res.status(204).json({ message: "deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export {
  CreateProduct,
  GetProducts,
  GetProductById,
  UpdatedProduct,
  DeleteProduct,
};
