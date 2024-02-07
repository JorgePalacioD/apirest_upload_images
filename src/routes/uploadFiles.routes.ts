import { Router } from "express";
import { uploadPost} from "../controllers/uploadFiles.controllers";
import { upload } from "../middlewares/uploadFiles.middlewares";

const router = Router();

router.post("/", upload, uploadPost);

export default router;