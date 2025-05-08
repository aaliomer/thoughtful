type PackageCategory = "STANDARD" | "SPECIAL" | "REJECTED"


function sort(width: number, height: number, length: number, mass: number): PackageCategory {
    const maxDimension = Math.max(width, height, length)
    const volume = width * height * length
    
    const isOverweight = mass >=20
    const isBulky = maxDimension >= 150 || volume >= 1_000_000

    if (isOverweight && isBulky) {
        return "REJECTED"
    }
    
    //isOverweight || isBulky is works but it is dependent on the previous statment
    if (isOverweight != isBulky) { // one is true, one is false (XOR)
        return "SPECIAL"
    }
    
    return "STANDARD"
}