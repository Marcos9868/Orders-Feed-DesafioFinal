const express = require('express')
let router = express.Router()
const tls = require('tls')
const Newsletter = require('../Models/Newsletter')

tls.DEFAULT_MIN_VERSION = 'TLSv1'

router.post('/newsletter', async (req, res, next) => {
  console.log(req.body)
  const { emailLeadNewsletter } = req.body

  if (!emailLeadNewsletter) {
    return res.status(400).json({ message: 'Preencha o campo de email corretamente' })
  }
  const regex = new RegExp("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
  try {
    const { data } = await axios.get('api aws dos leads', { emailLeadNewsletter })
    console.log(data)
    if (emailLeadExistente) {
      return res.json({ message: 'Já existe um usuário cadastrado com esse email!' })
    }
    if (!regex.test(emailLeadNewsletter)) {
      return res.json({ message: 'O e-mail informado é inválido!' })
    }
    console.log(emailLeadNewsletter)

    return res.json({ emailLeadNewsletter, id: LeadNewsletterCreated.id })
  } catch (err) {
    console.log(err)
    return res.status(500).json({ message: 'Não foi possível realizar o cadastro do usuário!' })
  }
})

module.exports = router
