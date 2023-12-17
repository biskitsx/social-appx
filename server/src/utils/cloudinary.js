import { v2 as cloudinary } from 'cloudinary'
import dotenv from 'dotenv'

dotenv.config()
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET
});

console.log(process.env.CLOUD_NAME)
console.log(process.env.CLOUD_API_KEY)
console.log(process.env.CLOUD_API_SECRET)
export const cloudinaryUploadImg = async (file) => {
    try {
        // return new Promise((resolve) => {
        //     cloudinary.uploader.upload(file, (result) => {
        //         resolve({
        //             url: result.secure_url,
        //             asset_id: result.asset_id,
        //             public_id: result.public_id
        //         },
        //             {
        //                 resource_type: "auto"
        //             })
        //     })
        // })
        const result = await cloudinary.uploader.upload(file, {
            resource_type: "auto"
        })
        return {
            url: result.secure_url,
            asset_id: result.asset_id,
            public_id: result.public_id
        }

    } catch (error) {
        console.log("kyt")
        console.error(error)
    }
}

export const cloudinaryDeleteImg = async (file) => {
    try {
        return new Promise((resolve) => {
            cloudinary.uploader.destroy(file, (result) => {
                resolve({
                    url: result.secure_url,
                    asset_id: result.asset_id,
                    public_id: result.public_id
                },
                    {
                        resource_type: "auto"
                    })
            })
        })

    } catch (error) {
        console.error(error)

    }
}

