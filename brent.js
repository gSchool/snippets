class Beta {
  constructor(l=1) {
    if(typeof(l)!=='number' || l>=Infinity) throw 'boo boo'
    this.limit = l
    this.items = ["train"]
  }
  add(item){
    this.items.push(item)
    let strings = 0
    let numbers = 0
    let objects = 0
    let bools = 0
    for(let i =0;i<this.items.length;i++){
      if(typeof(this.items[i])=='string') strings++
      if(typeof(this.items[i])=='number') numbers++
      if(typeof(this.items[i])=='object') objects++
      if(typeof(this.items[i])=='boolean') bools++
    }
    if(strings>this.limit) throw 'boo boo'
    if(numbers>this.limit) throw 'boo boo'
    if(objects>this.limit) throw 'boo boo'
    if(bools>this.limit) throw 'boo boo'
    return this
  }
  get items(){
    return this.Smoodle;
  }
  set items(items){
    this.Smoodle = items
  }

}

let myThing = new Beta();
console.log(myThing)
