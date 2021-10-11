/**
 * @author Ysn4Irix
 * @email ysn4irix@gmail.com
 * @create date 10-10-2021
 * @modify date 11-10-2021
 * @desc [Documents routes]
 */

const router = require("express").Router();
const docs = require("../controllers/docsController");

router.get("/", docs.indexRouter);
router.get("/code/:id", docs.getDoc);
router.get("/code/:id/duplicate", docs.duplicateDoc);
router.get("/new", docs.newRouter);
router.post("/save", docs.saveRouter);

module.exports = router;
