class Model {
    constructor() {
      this.cities = JSON.parse(localStorage.getItem('cities')) || [];
      this.witgets = JSON.parse(localStorage.getItem('witgets')) || [];
    }

    addCity(name, country, icon, temp, description, speed, humidity) {
      const city = {
        id: Date.now().toString(),
        name,
        country,
        icon,
        temp,
        description,
        speed,
        humidity,
      }
      this.cities.push(city);
      
      localStorage.setItem('cities', JSON.stringify(this.cities));
     
    }
        // WIDGET

    viewWidget(name, icon, temp, description, latitude, longitude) {
      const mycity = {
        id: Date.now().toString(),
        name,
        icon,
        temp,
        description,
        latitude, 
        longitude
      }
      this.witgets.push(mycity);
      localStorage.setItem('witgets', JSON.stringify(this.witgets));
    }

    deleteCity(id) {
      this.cities = this.cities.filter(city => city.id !== id);
      
      localStorage.setItem('cities', JSON.stringify(this.cities));
    }

    // WEATHER EDITING

  //   updateTodo(id, value) {
  //     const matched_index = this.cities.findIndex(v => v.id == id);
  //     this.cities[matched_index].name = value;
 
  //     console.log(matched_index)
      
  //     localStorage.setItem('list', JSON.stringify(this.cities));
  // }
}


class View {
    constructor() {
      this.wrapper = document.getElementById('wrapper');
      this.header = document.createElement('header');
      this.form = document.createElement('form');
      this.input = document.createElement('input');
      this.addButton = document.createElement('button');
      this.section = document.createElement ('section');
    
      this.renderSearch();
  }
  
    renderSearch() {
  
    this.form.setAttribute ('action', '/');
    this.input.setAttribute ("type", 'text');
    this.input.setAttribute ("placeholder", 'Enter the city...');
    this.addButton.setAttribute ('type', 'submit');
  
    this.header.className = ('header');
    this.form.className = ('form');
    this.input.className = ('input');
    this.addButton.className = ('add-btn');
    this.wrapper.innerHTML = "";
    this.addButton.innerHTML = "Add!";
    this.section.className = ('section-weather');
    
    this.form.append (
      this.input,
      this.addButton
    )
  
    this.header.append (
      this.form,
    )
  
    this.wrapper.append (
      this.header,
      this.section
    )
    
    }
  
    renderCities(cities) {
      this.section.innerHTML = "";
      if(cities.length){
        cities.forEach(city => {
  
    // CREATEELEMENT
    const article = document.createElement ('article');
    const h2 = document.createElement ('h2');
    const blockList = document.createElement ('div');
    const divIcon = document.createElement ('div');
    const divWind = document.createElement ('div');
    const itemIcon = document.createElement ('span');
    const itemTemp = document.createElement ('span');
    const climateСhange = document.createElement ('div');
    const itemSky = document.createElement ('span');
    const itemWind = document.createElement ('span');
    const itemHumidily = document.createElement ('span');
    const deleteBtn = document.createElement ('button');
    const deleteSpan = document.createElement ('span');
  
    // INNERHTML
    article.dataset.id = city.id;
    deleteSpan.innerHTML = 'Delete'; 
    h2.innerHTML = (city.name) + " " + ',' + " " + (city.country);
    itemIcon.innerHTML = city.icon;
    itemTemp.innerHTML = city.temp;
    itemSky.innerHTML= city.description;
    itemWind.innerHTML = "wind:" + " " + (city.speed) + " " + "mph";
    itemHumidily.innerHTML = "humindily:" + " " + (city.humidity) + "%";
    
    // CLASSNAME
    article.className = ('article')
    h2.className = ('subtitle');
    blockList.className = ('block-list');
    divIcon.className = ('icon-weather');
    divWind.className = ('wind-weather');
    itemIcon.className = ('item item-icon');
    itemTemp.className = ('item itemTemp');
    itemSky.className = ('item item-sky');
    itemWind.className = ('item item-wind');
    itemHumidily.className = ('item item-humidily');
    climateСhange.className = ('climate-change');
    deleteBtn.className = ('btn-delete');
    deleteSpan.className = ('deleteSpan');
  
    // APPEND
    deleteBtn.append (
      deleteSpan
    )
  
    climateСhange.append (
      itemSky,
      itemWind,
      itemHumidily
    )
  
    divWind.append (
      itemTemp
    )
  
    divIcon.append (
      itemIcon
    )
  
    blockList.append (
      divIcon,
      divWind,
      climateСhange
    )
  
    article.append (
      h2,
      blockList,
      deleteBtn
    )
  
    this.section.appendChild (
      article
    )
      })
      }
      
    }
  
  
    // WIDGET
  
    // renderWidget(witgets) {
    //   if(witgets.length){
    //     witgets.forEach(mycity => {
  
    //   //  CREATEELEMENT
      
  
    //    // CLASSNAME
    //   section.className = ('section-widget');
    //   span.className = ('span-city');
    //   widget.className = ('elements-widget');
    //   widgetIcon.className = ('widget-icon');
    //   itemIcon.className = ('item item-icon');
    //   widgetTemp.className = ('widget-temp');
    //   itemTemp.className = ('item item-temp'); 
    //   townSpan.className = ('widget-sky');
    //   i.className = ('weather');
  
    //   // INNERHTML/TEXT
    //   span.innerHTML = mycity.name;
    //   itemTemp.innerHTML = mycity.temp;
    //   itemIcon.innerHTML = mycity.icon;
    //   townSpan.innerHTML = 'Dnipropetrovsk';
    //   i.innerHTML = mycity.description;
  
    //   // APPEND
    //   townSpan.append (
    //     i
    //   )
  
    //   widgetTemp.append (
    //     itemTemp
    //   )
  
    //   widgetIcon.append (
    //     itemIcon
    //   )
  
    //   widget.append (
    //     widgetIcon,
    //     widgetTemp
    //   )
      
    //   section.append (
    //     span,
    //     widget,
    //     townSpan
    //   )
  
    //   this.wrapper.append (
    //     section
    //   )
  
    //     })
    //   }
    // }
  
}

// class View2 {
//   constructor() {
//     this.wrapper = document.getElementById('wrapper')
//     this.section = document.createElement('section');
    
//     this.renderWidget()

//   }

//   renderButton(){
    
//   }

//      renderWidget() {

//           const button = document.createElement('button');
//           const span = document.createElement('span');
//           const widget = document.createElement('div');
//           const widgetIcon = document.createElement('div');
//           const itemIcon = document.createElement('span');
//           const widgetTemp = document.createElement('div')
//           const itemTemp = document.createElement('span');
//           const townSpan = document.createElement('span')
//           const i = document.createElement('i');  
  
//       //  CREATEELEMENT
      
  
//        // CLASSNAME
//       this.section.className = ('section-widget');
//       button.className = (button)
//       span.className = ('span-city');
//       widget.className = ('elements-widget');
//       widgetIcon.className = ('widget-icon');
//       itemIcon.className = ('item item-icon');
//       widgetTemp.className = ('widget-temp');
//       itemTemp.className = ('item item-temp'); 
//       townSpan.className = ('widget-sky');
//       i.className = ('weather');
  
//       // INNERHTML/TEXT
//       button.innerHTML = 'LOL'
//       span.innerHTML = "mycity.name";
//       itemTemp.innerHTML =" mycity.temp";
//       itemIcon.innerHTML = "mycity.icon";
//       townSpan.innerHTML = 'Dnipropetrovsk';
//       i.innerHTML = "mycity.description";
  
//       // APPEND
//       townSpan.append (
//         i
//       )
  
//       widgetTemp.append (
//         itemTemp
//       )
  
//       widgetIcon.append (
//         itemIcon
//       )
  
//       widget.append (
//         widgetIcon,
//         widgetTemp
//       )
      
//       section.append (
//         span,
//         widget,
//         townSpan,
//         button
//       )

//       this.wrapper.appendChild(
//         this.section
//       )
  
//     }
  
// }

  class Controller {
    constructor(model, view, view2) {
      this.model = model;
      this.view = view;
      this.view2 = view2;
      this.view.form.addEventListener("submit", this.handleSubmit.bind(this));
      this.view.section.addEventListener("click", this.handleDelete.bind(this));
      // this.view2.section.addEventListener("click", this.geoFindMe.bind(this))
    }

    handleSubmit(event) {
      event.preventDefault();
      const value = this.view.input.value;
    if(value.trim()){
      fetch(`http://api.openweathermap.org/data/2.5/weather?q=${value}&appid=20233a4d650b378125309bd01c2c8c51`)
      .then(function(resp){return resp.json()})
      .then(data => {
        if(data.cod === 200){
          console.log(data);
          const name = data.name,
                country = data.sys.country,
                icon = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`,
                temp = Math.round(data.main.temp - 273) + '&#8451',
                description = data.weather[0]['description'],
                speed = data.wind.speed,
                humidity = data.main.humidity;
          this.model.addCity(name, country, icon, temp, description, speed, humidity);
          this.view.renderCities(this.model.cities);
          this.view.input.value = "";
        }else{
          alert(data.message)
        }
      })
      .catch(function(error){
        console.log(error);
      })
    }else{
      alert("Поле пустое")
    }
    }

    handleDelete(event){
      const deleteBtn = event.target.closest('.btn-delete');
      if(deleteBtn) {
        const id = deleteBtn.parentElement.dataset.id;
        this.model.deleteCity(id);
        this.view.renderCities(this.model.cities);
      }
    }

    geoFindMe(event) {
      event.preventDefault();
      fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=20233a4d650b378125309bd01c2c8c51`)
      .then(function(resp){return resp.json()})
      .then(data => {
        if(data.cod === 200){
          const name = data.name,
                icon = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`,
                temp = Math.round(data.main.temp - 273) + '&#8451',
                description = data.weather[0]['description'],
                latitude  = Math.round(data.coord.latitude),
                longitude = Math.round(data.coord.longitude)
          this.model.viewWidget(name, icon, temp, description, latitude, longitude);
          this.view2.renderWidget(this.model.witgets);
          console.log(position)
        }else{
          alert(data.message)
        }
      })
      .catch(function(error){
        console.log(error);
      })
    }

    

    
   
// weather editing


  //   handleEdit(event) {
  //     if (!event.target.classList.contains('EditBtn'))
  //         return false;
  //     const parent = event.target.parentElement;
  //     const id = parent.dataset.id;
  //     const value = parent.getElementsByTagName('input')[0].value;

  //     console.log(id, value)
      
  //     this.model.updateTodo(id, value); 
  // }
    
}

const view = new View();
// const view2 = new View2();
const model = new Model();
const controller = new Controller(model, view);