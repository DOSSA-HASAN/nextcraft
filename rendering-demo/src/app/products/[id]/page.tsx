export const dynamicParams = false;

export async function generateStaticParams() {
    return [{ id: "1" }, { id: "2" }, { id: "3" }]
}
async function ProductPage({ params }: { params: Promise<{ id: string }> }) {

    const { id } = await params

    return (
        <div>
            <p>Product {id} details rendered at {new Date().toLocaleTimeString()}</p>
        </div>
    )
}

export default ProductPage
