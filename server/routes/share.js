const express = require("express");
const router = express.Router();

const { viewListSharedFile, viewDetail, addComment, addRating, deletePost } = require("../BusinessLayer/ShareFile/shareList");

router.get('/', viewListSharedFile);

router.get("/detail/:id", viewDetail);
router.post("/detail/:id/comment", addComment);
router.post("/detail/:id/rating", addRating);
router.post("/detail/:id/delete", deletePost);

module.exports = router;
