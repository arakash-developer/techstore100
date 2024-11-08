const getAllData = async () => {
    const result = await fetch("https://techstorevercelapp.vercel.app/akash/api/products")
    return result.json()
    // returning promise
}
export default getAllData