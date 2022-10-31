const raw_data = [
  '貞愛雲林物產館,雲林縣西螺鎮延平路104號,05-5864343,蔡濰揚',
  '桂竹林咖啡莊園,雲林縣古坑鄉桂林村桃源1-12號,05-5901938,李契螢'
  //'祥美餅舖,雲林縣水林鄉水林路 283 巷 3 號,0905389288,王雅玲',
  //'憨吉食堂,雲林縣水林鄉 26 之 1 號,0919804333,吳世明',
  //'松西陶影建形,雲林縣水林鄉松西村後厝路 21 號,0975196591,郭建佑',
  //'青草茶小舖,雲林縣水林鄉文化路,057852478,王健二',
  //'水賊林友善土地組合,雲林縣水林鄉埔尾路, 0933570937,蔡得黃',
  //'鮮禾屋,雲林縣水林鄉水林外環路148號,057856566,鄭清任',
  //'地瓜校長,雲林縣水林鄉大溝村,0919054026,李高章',
  //'黃金蝙蝠館,雲林縣水林鄉蘇秦路1號,057921097,張恒嘉',
]

const about_data = [
  {
    shop_name: '',
    shop_address: '',
    phone_number: '',
    contact_person: '',
  },
]

const extracted_data = []

for (let d of raw_data) {
  let temp = d.split(',')
  extracted_data.push({
    shop_name: temp[0],
    shop_address: temp[1],
    phone_number: temp[2],
    contact_person: temp[3],
  })
}

export default extracted_data
export { about_data, extracted_data }
