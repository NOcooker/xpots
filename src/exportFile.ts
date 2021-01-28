import { DownType } from './types/exportFile.d';

function exportFile(data: BlobPart, name: string, type: DownType) {
  if (!data) return // 没有数据直接返回
  const exportType = {
    excel: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=utf-8',
    zip: 'application/zip'
  }
  const blob = new Blob([data], { type: exportType[type] })
  if (window.navigator.msSaveBlob) {
    // IE浏览器
    try {
      window.navigator.msSaveBlob(blob, name)
    } catch (e) {
      console.log(e)
    }
  } else {
    const url = window.URL.createObjectURL(blob)
    const aLink = document.createElement('a')
    aLink.style.display = 'none'
    aLink.href = url
    aLink.download = name
    document.body.appendChild(aLink)
    aLink.click()
    document.body.removeChild(aLink) // 下载完成移除元素
    window.URL.revokeObjectURL(url) // 释放掉blob对象
  }
}

export default exportFile;