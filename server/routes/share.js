const express = require("express");
const router = express.Router();

const { viewListSharedFile, viewDetail, addComment } = require("../BusinessLayer/ShareFile/shareList");

router.get('/', viewListSharedFile);

router.get("/detail/:id", viewDetail);
router.post("/detail/:id/comment", addComment);

module.exports = router;
