import multer from "multer";
import { extname } from "path";

const storage = multer.diskStorage({
    destination: "uploads/",
    filename(req, file, callback) {
        const user = req.session.user!;
        const ext = extname(file.originalname);

        callback(null, `${user.id}_profile${ext}`);
    },
});

export const upload = multer({ storage: storage });
