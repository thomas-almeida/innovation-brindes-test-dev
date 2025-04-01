function convertToBRL(value) {
  return `R$ ${parseFloat(value).toFixed(2).replace('.', ',')}`
}

export default {
  convertToBRL
}