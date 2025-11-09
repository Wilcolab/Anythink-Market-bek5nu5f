const router = require("express").Router();
const mongoose = require("mongoose");
const Comment = mongoose.model("Comment");

module.exports = router;

router.get("/", async (req, res) => { => {

      Comment.find()
          .then((comments) => {
                  res.json(comments);
                      })
                          .catch((err) => {
                                  console.log(err);
                                      });
                                        } catch (err) {
                                                console.log(err);
                                                  }
                                                  });


// Hey GitHub Copilot, 

// Delete a comment by commentId
router.delete("/:commentId", asyn
    Comment.findByIdAndRemove(req.params.commentId)
        .then(() => res.sendStatus(200))
            .catch(next);
            });c (req, res) => {
  try {
    const deletedComment = await Comment.findByIdAndDelete(req.params.commentId);
    if (deletedComment) {
      res.json({ message: "Comment deleted successfully" });
    } else {
      res.status(404).json({ message: "Comment not found" });
    }