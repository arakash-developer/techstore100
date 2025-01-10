const getSingleData = async (id) => {
    const blops = await fetch(`https://techstoreserver.vercel.app/products/${id}`,
        {
            // cache:"force-cache",
            cache:"no-store",
            // next: {
            //     revalidate : 10,
            // }    
        }
    )
    if (!blops.ok) {
        throw new Error("There Was An Error Fething Data")
    } else {
        return blops.json()
    }

    // returning promise
}
export default getSingleData