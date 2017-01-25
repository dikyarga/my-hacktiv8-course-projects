class Student {
  constructor(name, age, gender, date, studentId, hobbies) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.date = date;
    this.studentId = studentId;
    this.hobbies = hobbies;
  }

  setName(name){
    this.name = name;
  }

  setAge(age){
    this.age = age;
  }

  setDateOfBirth(date){
    this.date = date;
  }

  setGender(gender){
    if(gender == 'Male'){
      this.gender = gender;
    } else if(gender == 'Female') {
      this.gender = gender;
    }
  }

  addHobby(hobby){
    this.hobbies.push(hobby);
  }

  removeHobby(hobby){
    for (var i = 0; i < this.hobbies.length; i++) {
      if (this.hobbies[i] == hobby) {
        this.hobbies.splice(i, 1);
      }
    }
  }

  getName(){
    return this.name;
  }

  getData(){
    return  'Name : ' + this.name +
            ' Age : ' + this.age +
            ' Date of birth ' + this.date +
            ' Student ID : ' + this.studentId +
            ' Hobbies : ' + this.hobbies;
  }
}

let saya = new Student('Diky Arga', 21, 'Male', '17-10-1995', 'A11.2013.07386', ['Coding', 'Cycling']);
// saya.setName("Anggara");
console.log(saya.name);
// saya.addHobby('Videography')
// saya.removeHobby('Coding');
console.log(saya.getData());
