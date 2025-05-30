import multer from "multer";
import { extname, resolve } from "path";
import crypto from "crypto";

export default {
    upload(folder: string) {
        return{
            storage: multer.diskStorage({
            destination: resolve(__dirname, "..", "..", folder),
            filename: (request, file, callback) => {
                const fileHash = crypto.randomBytes(16).toString("hex");
                const sanitizedOriginalName = file.originalname.replace(/\s+/g, "");
                const fileName = `${fileHash}-${sanitizedOriginalName}`;
                
                return callback(null, fileName);
            }
            }),
        }
    }
};
