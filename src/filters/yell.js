const yellFilter = function (value) {
  if (typeof value !== 'string') { return '' }

  return `${value.toUpperCase()}! 😤`
}

export default yellFilter
