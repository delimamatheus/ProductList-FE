import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../../contexts/Auth/AuthContext"
import { useApi } from "../../hooks/useApi"
import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs"
import axios from "axios"

export const Product = () => {
    const auth = useContext(AuthContext)
    const api = useApi()

    const [list, setList] = useState([])
    const [inputNameValue, setInputNameValue] = useState("")
    const [inputCatNameValue, setInputCatNameValue] = useState("")
    const [inputCatIDValue, setInputCatIDValue] = useState("")
    const [inputPriceValue, setInputPriceValue] = useState("")
    const [selectedItem, setSelectedItem] = useState("")

    async function getList(){
        const response = await api.listProducts()
        setList(response.products)
    }

    async function deleteItem(id: number){
        const response = await api.deleteProducts(id)
        getList()
    }

    async function createItem(){
        const response = await axios.post("http://localhost:3001/products", {name: inputNameValue, categoryID: inputCatIDValue, categoryName: inputCatNameValue, price: inputPriceValue})
        getList()
    }

    useEffect(() => {
        getList();
    }, [])
    
    return (
        <div className="flex flex-col">
            <div className="flex place-content-center">
                <h1 className="font-bold text-3xl">Product List</h1>
            </div>
            <div className="mt-10 mx-2 bg-gray-200 h-80 overflow-auto">
                {list.map((product:any) => {
                    return (
                        <>
                            <div className="table w-full p-1">
                                <div className="table-header-group font-bold">
                                    <div className="table-row">
                                        <div className="table-cell text-left">Name</div>
                                        <div className="table-cell text-left">Category ID</div>
                                        <div className="table-cell text-left">Category Name</div>
                                        <div className="table-cell text-left">Unit Price</div>
                                        <div className="table-cell text-left">Status</div>
                                        <div className="table-cell text-left">Available Since</div>
                                    </div>
                                </div>                                
                                <div className="table-row-group">
                                    <div className="table-row">                                        
                                        <div className="table-cell">{product.name}</div>
                                        <div className="table-cell">{product.categoryID}</div>
                                        <div className="table-cell">{product.categoryName}</div>
                                        <div className="table-cell">{product.price}</div>
                                        <div className="table-cell">{product.status}</div>
                                        <div className="table-cell">{product.createdAt}</div>
                                        {auth.user && <div className="table-cell"><button><BsFillPencilFill /></button></div>}
                                        {auth.user && <div className="table-cell"><button onClick={() => deleteItem(product.id)}><BsFillTrashFill /></button></div>}
                                    </div>
                                </div>                                
                            </div>
                        </>
                    )
                })}
            </div> 
            {auth.user &&
            <div className="flex place-content-center">
                <div className="flex flex-col">
                <input value={inputNameValue} onChange={(e) => {setInputNameValue(e.target.value)}} className="mr-2" type="text" placeholder="Name"/>
                <input value={inputCatIDValue} onChange={(e) => {setInputCatIDValue(e.target.value)}} className="mr-2" type="text" placeholder="Category ID"/>
                <input value={inputCatNameValue} onChange={(e) => {setInputCatNameValue(e.target.value)}} className="mr-2" type="text" placeholder="Category Name"/>
                <input value={inputPriceValue} onChange={(e) => {setInputPriceValue(e.target.value)}} className="mr-2"type="text" placeholder="Price"/>
                <button onClick={createItem} className="mt-2 bg-green-700">Add new product</button>
                </div>
            </div>       
            }    
        </div>
    )
}