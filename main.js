const Home = {
  template: `
  <div>
    <!-- Main div tag start -->
    <div class="main">
      <!-- title -->
      <div class="title">National Flag Quiz</div>
      <!-- buttons -->
        <div class="buttons">
          <router-link to="/level" >Start</router-link>
          <router-link to="/option" class="btn">Option</router-link>
        </div>
    </div>
  </div>`
}

const Level = {
  template: `<div class="level">

  <!-- title -->
  <div class="title">Select your level</div>

  <!-- Level and quantity inputs -->
  <div class="inputs">
    <div>
      <label for="input2">QUANTITY</label>  <input type="text" placeholder="1/100" id="input2" v-model="quantity"> 
    </div>
  </div>

  <!-- Enter buttons -->
  <div class="buttons">
   <router-link to="/quiz">START</router-link>
   <router-link to="/">BACK TO MENU</router-link>
  </div>
</div>`,
  data: function(){
    return {
      quantity: 50
    }
  },
  props: ['settings.quantity']
}

const Option = {
  template: `<div class="options-section">

  <!-- title -->
  <div class="title">Options</div>

  <!-- Options, toggles, labels -->
  <!-- sound option -->
  <div class="options">
    <div class="sound">
      SOUND
      <label class="switch">
        <input type="checkbox">
        <span class="slider"></span>
      </label>
    </div>
    
    <!-- effect option -->
    <div class="effect">
      EFFECT
      <label class="switch">
        <input type="checkbox">
        <span class="slider"></span>
      </label>
    </div>
  </div>
  <button><router-link to="/">BACK TO MENU</router-link></button>
</div>`,

}

const Quiz = {
  template: `
  <div>
  <div class="quantity">{{settings.curQuestionNum}}/{{settings.quantity}}</div> <!-- Displaying quantity -->
  <div class="pause"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11 22h-4v-20h4v20zm6-20h-4v20h4v-20z"/></svg></div> <!-- Pause button -->

  <div class="quiz">
    <!-- Quiz box -->
    <div class="box">
      <h6>CHOOSE PROPER FLAG!</h6>
      <h2>{{questions[settings.curQuestionNum].question}}</h2>

      <!-- Answers -->
      <div class="flags">
        <img id="img101" :src="questions[settings.curQuestionNum].img1" alt="" v-on:click="checkAnswer">
        <img id="img102" :src="questions[settings.curQuestionNum].img2" alt="" v-on:click="checkAnswer">
        <img id="img103" :src="questions[settings.curQuestionNum].img3" alt="" v-on:click="checkAnswer">
        <img id="img104" :src="questions[settings.curQuestionNum].img4" alt="" v-on:click="checkAnswer">
      </div>
    </div>

    <!-- Buttons -->
    <div class="buttons">
      <button @click="displayPreviousQuestion">PREVIOUS</button>
      <button v-on:click="displayNextQuestion">NEXT</button>
    </div>
  </div>
  </div>
  `,
  props: ['Quantitiy'],
  data: function(){
    return{
      settings: {
        curQuestionNum: 0,
        level: 1,
        quantity: 41 
      },
      questions: [
      ],
      flags: [{
        index: 0,
        name: 'Australia',
        img: 'flags/australia.png',
        isDone: false
      },
      {
        index: 1,
        name: 'Brazil',
        img: 'flags/brazil.png',
        isDone: false
      },
      {
        index: 2,
        name: 'Canada',
        img: 'flags/canada.png',
        isDone: false
      },
      {
        index: 3,
        name: 'China',
        img: 'flags/china.png',
        isDone: false
      },
      {
        index: 4,
        name: 'France',
        img: 'flags/france.png',
        isDone: false
      },
      {
        index: 5,
        name: 'Germany',
        img: 'flags/germany.png',
        isDone: false
      },
      {
        index: 6,
        name: 'India',
        img: 'flags/india.png',
        isDone: false
      },
      {
        index: 7,
        name: 'Italy',
        img: 'flags/italy.png',
        isDone: false
      },
      {
        index: 8,
        name: 'Japan',
        img: 'flags/japan.png',
        isDone: false
      },
      {
        index: 9,
        name: 'Libya',
        img: 'flags/libya.png',
        isDone: false
      },
      {
        index: 10,
        name: 'Mexico',
        img: 'flags/mexico.png',
        isDone: false
      },
      {
        index: 11,
        name: 'Mongolia',
        img: 'flags/mongolia.png',
        isDone: false
      },
      {
        index: 12,
        name: 'Russia',
        img: 'flags/russia.png',
        isDone: false
      },
      {
        index: 13,
        name: 'South Korea',
        img: 'flags/south_korea.png',
        isDone: false
      },
      {
        index: 14,
        name: 'Spain',
        img: 'flags/spain.png',
        isDone: false
      },
      {
        index: 15,
        name: 'Turkey',
        img: 'flags/turkey.png',
        isDone: false
      },
      {
        index: 16,
        name: 'United Kingdom',
        img: 'flags/united_kingdom.png',
        isDone: false
      },
      {
        index: 17,
        name: 'United States',
        img: 'flags/united_states.png',
        isDone: false
      },
      {
        index: 18,
        name: 'Bangladesh',
        img: 'flags/bangladesh.png',
        isDone: false
      },
      {
        index: 19,
        name: 'Vietnam',
        img: 'flags/vietnam.png',
        isDone: false
      },
      {
        index: 20,
        name: 'Saudi Arabia',
        img: 'flags/saudi_arabia.png',
        isDone: false
      },
      {
        index: 21,
        name: 'Peru',
        img: 'flags/peru.png',
        isDone: false
      },
      {
        index: 22,
        name: 'Iraq',
        img: 'flags/iraq.png',
        isDone: false
      },
      {
        index: 23,
        name: 'Philipinnes',
        img: 'flags/philipinnes.png',
        isDone: false
      },
      {
        index: 24,
        name: 'Israel',
        img: 'flags/israel.png',
        isDone: false
      },
      {
        index: 25,
        name: 'Argentina',
        img: 'flags/argentina.png',
        isDone: false
      },
      {
        index: 26,
        name: 'New Zealand',
        img: 'flags/new_zealand.png',
        isDone: false
      },
      {
        index: 27,
        name: 'Portugal',
        img: 'flags/portugal.png',
        isDone: false
      },
      {
        index: 28,
        name: 'Denmark',
        img: 'flags/denmark.png',
        isDone: false
      },
      {
        index: 29,
        name: 'Belgium',
        img: 'flags/belgium.png',
        isDone: false
      },
      {
        index: 30,
        name: 'Egypt',
        img: 'flags/egypt.png',
        isDone: false
      },
      {
        index: 31,
        name: 'Thailand',
        img: 'flags/thailand.png',
        isDone: false
      },
      {
        index: 32,
        name: 'Chile',
        img: 'flags/chile.png',
        isDone: false
      },
      {
        index: 33,
        name: 'Sweden',
        img: 'flags/sweden.png',
        isDone: false
      },
      {
        index: 34,
        name: 'Cuba',
        img: 'flags/cuba.png',
        isDone: false
      },
      {
        index: 35,
        name: 'Norway',
        img: 'flags/norway.png',
        isDone: false
      },
      {
        index: 36,
        name: 'Switzerland',
        img: 'flags/switzerland.png',
        isDone: false
      },
      {
        index: 37,
        name: 'Netherlands',
        img: 'flags/netherlands.png',
        isDone: false
      },
      {
        index: 38,
        name: 'Iran',
        img: 'flags/iran.png',
        isDone: false
      },
      {
        index: 39,
        name: 'Greece',
        img: 'flags/greece.png',
        isDone: false
      },
      {
        index: 40,
        name: 'Colombia',
        img: 'flags/colombia.png',
        isDone: false
      },
      {
        index: 41,
        name: 'Poland',
        img: 'flags/poland.png',
        isDone: false
      },
    ]
    }
  },
  created() {
    for(var i = 0; i <= this.settings.quantity; i++) {
      this.newQuiz();
    }
  },
  methods:{
    checkAnswer: function(event){
      var testVar1 = event.srcElement.id;
      console.log(testVar1);
      if(testVar1  === this.questions[this.settings.curQuestionNum].answer){
        console.log("Congratulations!! you have selected the correct answer");
        if(this.settings.curQuestionNum < this.settings.quantity) {
        this.settings.curQuestionNum++
        } else {
          alert("Congratulations! You have completed all quizes!")
        }
      }else{
        alert("Sorry, incorrect answer");
      }
    },
    displayNextQuestion: function(){
      this.settings.curQuestionNum++
    },
    displayPreviousQuestion: function(){
      this.settings.curQuestionNum--
    },

    newQuiz: function() {
      let chosenIndex = Math.floor(Math.random() * this.flags.length);
      let chosenArray = this.flags[chosenIndex];
      while(this.flags[chosenIndex].isDone == true) {
        chosenIndex = Math.floor(Math.random() * this.flags.length);
        chosenArray = this.flags[chosenIndex];
      } 
      this.flags[chosenIndex].isDone = true;

      //copy the flag array 
      var cloneArray = this.flags.slice();

      //choose the number of answer
      let answerNum = Math.floor(Math.random() * 3 + 1);
      
      pos = cloneArray.map(function(e) { return e.name; }).indexOf(chosenArray.name);
      cloneArray.splice(pos, 1);
      console.log(cloneArray)

      let img1 = cloneArray[Math.floor(Math.random() * cloneArray.length)];
      pos = cloneArray.map(function(e) { return e.name; }).indexOf(img1.name);
      cloneArray.splice(pos, 1);
      console.log(cloneArray)

      let img2 = cloneArray[Math.floor(Math.random() * cloneArray.length)];
      pos = cloneArray.map(function(e) { return e.name; }).indexOf(img2.name);
      cloneArray.splice(pos, 1);
      console.log(cloneArray)

      let img3 = cloneArray[Math.floor(Math.random() * cloneArray.length)];
      pos = cloneArray.map(function(e) { return e.name; }).indexOf(img3.name);
      cloneArray.splice(pos, 1);
      console.log(cloneArray)

      let img4 = cloneArray[Math.floor(Math.random() * cloneArray.length)];
      pos = cloneArray.map(function(e) { return e.name; }).indexOf(img4.name);
      cloneArray.splice(pos, 1);
      console.log(cloneArray)
      


      switch(answerNum) {
        case 1:
          this.questions.push({
            question: `Choose ${chosenArray.name}`,
            answer: `img10${answerNum}`,
            img1: chosenArray.img,
            img2: img2.img,
            img3: img3.img,
            img4: img4.img,
          });
          break;
        case 2:
          this.questions.push({
            question: `Choose ${chosenArray.name}`,
            answer: `img10${answerNum}`,
            img1: img1.img,
            img2: chosenArray.img,
            img3: img3.img,
            img4: img4.img,
          });
          break;
        case 3:
          this.questions.push({
            question: `Choose ${chosenArray.name}`,
            answer: `img10${answerNum}`,
            img1: img1.img,
            img2: img2.img,
            img3: chosenArray.img,
            img4: img4.img,
          });
          break;
        case 4:
          this.questions.push({
            question: `Choose ${chosenArray.name}`,
            answer: `img10${answerNum}`,
            img1: img1.img,
            img2: img2.img,
            img3: img3.img,
            img4: chosenArray.img,
          });
          break;
      }
    },

    randomArr: function() {
      let result = this.flags[Math.floor(Math.random() * this.flags.length )];
      return result
    }
  }

}

const routes = [
  { path: "", component: Home },
  { path: "/level", component: Level },
  { path: "/option", component: Option},
  { path: "/quiz", component: Quiz},
];

const router = new VueRouter({
  routes
});

new Vue({
  el: "#app",
  router
})