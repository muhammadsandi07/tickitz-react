import { useEffect, useState } from "react"

function useLocalStorage(key, init) {
  /**
   * fitur
   * 1. Nilai Awal akan diambil melalui localStorage
   * 2. jika ada perubahan, maka perbaharui localStorage
   *
   * kesimpulan
   * 1. gunakan state untuk penyimpanan variable
   * 2. gunakan effect untuk menjalankan reaksi terhadap perubahan
   *
   */
  const [data, setData] = useState(() => {
    // kasih nilai default jika tidak ditemukan nilai dari localstorage
    const localValue = localStorage.getItem(key) || ""
    // jika nilai localvalue adalah default
    if (localValue.length === 0) {
      if (init instanceof Function) return init()
      return init
    }
    return JSON.parse(localValue)
  })

  useEffect(() => {
    const newValue = JSON.stringify(data)
    localStorage.setItem(key, newValue)
  }, [data])

  return [data, setData]
}

export default useLocalStorage
