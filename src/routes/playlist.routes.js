import { Router } from "express";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import {
  createPlaylist,
  addVideoToPlaylist,
  removeVideoFromPlaylist,
  updatePlaylist,
  deletePlaylist,
  getPlaylistById
} from "../controllers/playlist.controller.js";

const router = Router();

//middleware
router.use(verifyJWT);

//routes
router.route("/").post(createPlaylist);

router.route("/:playlistId")
.patch(updatePlaylist)
.delete(deletePlaylist)
.get(getPlaylistById)

router.route("/add/:videoId/:playlistId").patch(addVideoToPlaylist);
router.route("/remove/:videoId/:playlistId").patch(removeVideoFromPlaylist);

export default router;
