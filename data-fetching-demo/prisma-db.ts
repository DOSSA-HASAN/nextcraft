import { PrismaClient } from "./src/generated/prisma";
import { resolve } from "path";
const prisma = new PrismaClient()

const seedProducts = async () => {
    const count = await prisma.product.count()
    if (count == 0) {
        await prisma.product.createMany({
            data: [
                { title: "Product 1", price: 500, description: "Description 1" },
                { title: "Product 2", price: 600, description: "Description 2" },
                { title: "Product 3", price: 700, description: "Description 3" }
            ]
        })
    }
}

seedProducts()

// Get all products
export async function getProducts() {
    await new Promise((resolve) => setTimeout(resolve, 1500))
    return prisma.product.findMany()
}

// Get product by id
export async function getProduct(id: number) {
    await new Promise((resolve) => setTimeout(resolve, 1500))
    return prisma.product.findUnique({ where: { id } })
}

// Add product
export async function addProduct(title: string, price: number, description: string) {
    await new Promise((resolve) => setTimeout(resolve, 1500))
    return prisma.product.create({
        data: { title, price, description }
    })
}

// Delete product 
export async function deleteProduct(id: number) {
    await new Promise((resolve) => setTimeout(resolve, 1500))
    return prisma.product.delete({ where: { id } })
}

// Update product
export async function updateProduct(
    id: number,
    title: string,
    price: number,
    description: string
) {
    return prisma.product.update({
        where: { id },
        data: {
            title,
            price,
            description,
        },
    })
}
