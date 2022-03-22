const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');
const { update } = require('../../models/Product');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags
    Tag.findAll({
    attributes: ['id', 'tag_name'],
    //include its associated Product data
    include: [
      {
        model: Product,
        attributes: ['product_name']
      }],
    })
    .then(data => res.json(data))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  Tag.findOne({
    where: {
      id: req.params.id
    },
    // associated Products
    attributes:['id', 'tag_name'],
     include: [
      {
        model: Product,
        attributes: ['product_name']
      }]
    })
    .then(data => {
      if (data) {
        res.status(404).json({ message: 'No tag found with this id' });
        return;
      }
      res.json(data);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

//create new tag
router.post('/', (req, res) => {
   Tag.create({ 
     tag_name: req.body.tag_name
    }).then(data => res.json(data))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
  });

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  Tag.update(req.body, {
    where: {
      id: req.params.id,
    }
  }) .then(data => {
    if (!data) {
      res.status(404).json({ message: 'No tag found with this id' });
      return;
    }
    res.json(data);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  Tag.destroy({
    where: {
      id: req.params.id
    }
  }).then(data => {
      if (!data) {
        res.status(404).json({ message: 'No tag found with this id' });
        return;
      }
      res.json(data);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
