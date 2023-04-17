/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    container:{
      center:true
    },
    // Ekranın maksimum büyüklükleri
    screens:{
      lg: '1024px',
      xl:'1024px',
      '2xl': '1024px',
      'md': '720px',
    },
    extend: {
      //html içinde kullanabilmek için kendi fontumuzu tanımlıyoruz
      // index.html --> class = "font-open" 
      fontFamily:{
        gemunu: ['Gemunu Libre', 'sans-serif'],
        open: ['Open Sans', 'sans-serif']
      },
      colors: {
        'sh-red': '#BC1A45',
        'sh-melon': '#FFD369',
        'sh-grey': '#DDDDDD',
        'sh-white': '#F7F7F7',
      },
      spacing:{
        128: '32rem'
      }
    },
  },
  plugins: [],
}
