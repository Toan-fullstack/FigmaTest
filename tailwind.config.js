module.exports = {

  // mode: "jit",
  // purge: ["./**/*.html", "./**/*.{js,jsx,ts,tsx,vue}"],
  content: [
    // Example content paths...
    "./public/**/*.html",
    "./src/**/*.{js,jsx,ts,tsx,vue}",
  ],
  theme: {
    extend: {
      colors: {
        blue177: "#1777EE ",
        red11: "#467CBF ",
        blue1:"#1777EE",
        stext:"#666D8F",
        iconb:"#E6E8EC",
        blue56:"#1D3D66",
        blue23:"#232637",
        pinke6e:"#E6E8EC",
        green45:"#45B26B",
        bgcolor:"#F4F5F6",
        gray77:"#777E90",
        blue55:"#588DCA",
        blue37:"#3772FF",
        whiteb1b:"#B1B5C3",
      },
      fontSize:{
        'xsmax':'.5rem',
        'xxs':'10px',
        'promax':'56px',
      },
      height: {
        '365':'360px',
        '422':'422px',
        '455': '455px',
        '447':'452px',
        '570':'570px',
        '800':'800px',
        '1000':'1000px',
        '1200':'1200px',
        '104':'104px',
        '165':'165px',
        '325':'325px',

      },
      width:{
        '285':'285px',
        '1920':'1920px',
        '584':'584px',
        '520':'620px',
        '826':'826px',
        '1230':'1230px',
        '395':'395px',
        '442':'442px',
        '481':'481px',
      },
      backgroundImage: {
        'carousel': "url('./images/Billy.png')",
      },
      borderRadius: {
        'promax':"31.72px",
      },
      borderWidth:{
        '100':"100px",
        '50':"50px",

      },
    },
    
  },
  plugins: [],
};
