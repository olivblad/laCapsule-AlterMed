var express = require("express");
var router = express.Router();

let medecines = [
  {
    name: "Acupuncture",
    img:
      "https://resize.prod.docfr.doc-media.fr/rcrop/480,363,center-middle/img/var/doctissimo/storage/images/fr/www/medecines-douces/medecine-chinoise/acupuncture/acupuncture-et-fertilite/7907741-1-fre-FR/acupuncture-et-fertilite.jpg",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non ducimus, tempore ipsa vitae ad dicta eum...",
  },
  {
    name: "Luminothérapie",
    img:
      "https://toppng.com/uploads/preview/man-forest-sun-light-loneliness-11569993918wewk3buinm.jpg",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non ducimus, tempore ipsa vitae ad dicta eum...",
  },
  {
    name: "Méditation",
    img:
      "https://yogamedicine.com/wp-content/uploads/2019/11/Internal-Landscape.jpeg",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non ducimus, tempore ipsa vitae ad dicta eum...",
  },
  {
    name: "Naturopathie",
    img:
      "https://www.lavieclaire.com/wp-content/uploads/2020/04/naturopathie-et-alimentation1-560x280.jpg",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non ducimus, tempore ipsa vitae ad dicta eum...",
  },
  {
    name: "Phytothérapie",
    img:
      "https://i.pinimg.com/originals/80/b7/16/80b716dd509b24cb3f6d8322a38f0d27.jpg",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non ducimus, tempore ipsa vitae ad dicta eum...",
  },
  {
    name: "Reiki",
    img:
      "https://images.unsplash.com/photo-1492571350019-22de08371fd3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2149&q=80",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non ducimus, tempore ipsa vitae ad dicta eum...",
  },
  {
    name: "Shiatsu",
    img:
      "https://images.unsplash.com/photo-1532009877282-3340270e0529?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non ducimus, tempore ipsa vitae ad dicta eum...",
  },
];

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "AlterMed" });
});
/* GET Medecines pages. */
router.get("/medecines", function (req, res, next) {
  console.log(medecines);
  res.render("medecines", { title: "AlterMed", medecines });
});

module.exports = router;
