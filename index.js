function theBeatlesPlay(musicians, instruments) {
  var beatlesInstruments = [];
  for (let i = 0; i < musicians.length; i++) {
    beatlesInstruments.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return beatlesInstruments
}