import { Grid2 } from "@mui/material"
import Product from "./Product/Product"

const product = [
  {
    id: 1,
    name: "Shoes",
    description: "Running shoes",
  },
  {
    id: 2,
    name: "mackbook",
    description: "Apple macbook",
  },
]

const Products = () => {
  return (
    <main>
      <Grid2 container justify="center" spacing={4}>
        {product.map((pro) => {
          return (
            <Grid2 item key={pro.id} xs={12} sm={6} md={4} lg={3}>
              <Product product={pro} />
            </Grid2>
          )
        })}
      </Grid2>
    </main>
  )
}

export default Products
