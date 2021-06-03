import Vue from 'vue'
Vue.filter('upperCase', function (text) {
    return text.toUpperCase();
  })
  
  Vue.filter('truncate', function (text, clamp) {
    return text.slice(0, 60) + (60 < text.length ? clamp || '...' : '')
  })

  Vue.filter('snackToTitle', function (text) {
    text = text.trim().toLowerCase()
    let indexes = []
    let underscores = []
    let resultList = []
    let mark = "_"
    text.split('').forEach((v,i)=>{
        if(v && v.toString() == mark) indexes.push(i+1), underscores.push(i);
    });
    
    text.split('').forEach((v,i)=>{
      if(indexes.includes(i) || i == 0){
        resultList.push(v.toUpperCase())
      }else if(underscores.includes(i)){
        resultList.push(' ')
      }else{
        resultList.push(v)
      }
    });

    return resultList.join('')
  })
  
  Vue.filter('title', function(value) {
    const capitalize = (s) => {
        if (typeof s !== 'string') return ''
        return s.charAt(0).toUpperCase() + s.slice(1)
      }

    if (value) {
      let lowerTexts = value.toLowerCase().split(' ')
      let titleTexts = lowerTexts.map((item)=>{
          return capitalize(item)
      })
      return titleTexts.join(" ")
    }
  })