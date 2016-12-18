

function findAdmin(list, lang) {
  return list.filter(function(x) {
    return x.language == lang && x.githubAdmin =='yes'
  })
}