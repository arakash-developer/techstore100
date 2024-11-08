const getAllData = async () => {
    const result = await fetch("https://techstorevercelapp.vercel.app/akash/api/products")
    if(!result.ok){
        throw new Error("There Was An Error Fething Data")
    }else{
        return result.json()
    }

    // returning promise
}
export default getAllData