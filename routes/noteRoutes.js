const { getAllNotes, postNotes, updateNotes, deleteNotes } = require('../controlllers/notesControllers');
const validateMiddlewareNotes = require('../middlewares/notesMiddleware');
const validationNotes = require('../validators/notesValidators');

const validateNotes = validateMiddlewareNotes(validationNotes);

const router = require('express').Router();

router.get("/read", getAllNotes)
router.post("/new",validateNotes, postNotes )
router.put("/edit/:id", updateNotes)
router.delete("/remove/:id", deleteNotes)


module.exports = router;