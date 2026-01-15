export const saveSealWeb = (sealId: string) => {
  const data = JSON.parse(
    localStorage.getItem('passport') || '{"seals":[]}'
  )

  if (!data.seals.includes(sealId)) {
    data.seals.push(sealId)
    localStorage.setItem('passport', JSON.stringify(data))
  }
}
