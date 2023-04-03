{/**https://refactored-chainsaw-teeti.onrender.com */}
const url = 'http://localhost:5050/api/v1/';
export const fetch2 = async(api, body)=>{
    const res = await fetch(url+api,{
        method: "POST",
        headers:{
            "Content-Type":'application/json',
            "Authorization":"Bearer "+ await localStorage.getItem('token')
        },
        body:JSON.stringify(body)
    })
    
    return await res.json()
}

export const fetch3 = async(api)=>{
    const res = await fetch(url+api,{
        method: "GET",
        headers:{
            "Content-Type":'application/json',
            "Authorization":"Bearer "+await localStorage.getItem('token')
        }
    })
    
    return await res.json()
}
export const fetch4 = async(api, body)=>{
    const res = await fetch(url+api,{
        method: "POST",
        headers:{
            "Content-Type":'application/json',
            "Authorization":"Bearer "+await localStorage.getItem('token')
        },
        body:JSON.stringify(body)
    })
    
    return await res.json()
}
export const fetch5 = async(api, body)=>{
    const res = await fetch(url+api,{
        method: "PUT",
        headers:{
            "Content-Type":"application/json",
            "Authorization":"Bearer "+await localStorage.getItem('token')
        },
        body:JSON.stringify(body)
    })
    
    return await res.json()
}