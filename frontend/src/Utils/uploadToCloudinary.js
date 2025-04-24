export const uploadToCloudinary = async(pics) => {

    if(pics){
        const data = new FormData();
        data.append("file", pics)
        data.append("upload_preset", "");
        data.append("cloud_name", "");

        const res = await fetch("",{
            method: "post",
            body: data
        })

        const fileData = await res.json();
        return fileData.url.toString();

    }
    else console.log("error al subir contenido")
}