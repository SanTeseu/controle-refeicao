// util.js

export function exportarCSV(dados, nomeArquivo = 'relatorio.csv') {
  if (!dados || dados.length === 0) {
    alert('Nenhum dado para exportar')
    return
  }

  const cabecalho = Object.keys(dados[0]).join(',')
  const linhas = dados.map(row => Object.values(row).join(','))
  const csv = [cabecalho, ...linhas].join('\n')
  const blob = new Blob([csv], { type: 'text/csv' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = nomeArquivo
  a.click()
}
