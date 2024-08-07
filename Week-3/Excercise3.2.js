//call

const newEntity = (obj) => console.log(obj);

function mountEntity(){

	this.entity = newEntity;

	console.log(`Entity ${this.entity} is mounted on ${this}`);

}

mountEntity.call();
//apply

function addUp(){

		//Using arguments to capture the arbitrary number of inputs

    const args = Array.from(arguments); 

    this.x = args.reduce((prev, curr) => prev + curr, 0);

    console.log("this.x = ", this.x);

}

function driverFunc(){

    const obj = {

        inps: [1,2,3,4,5,6]

    }

    addUp.apply(obj, obj.inps);

}

driverFunc();

//bind
class App extends React.Component {

  constructor(props) {

    super(props);

    this.state = {

      counter: 1

    };

   this.handleCode = this.handleCode.bind(this); //bind this function

  }

  handleCode() {

    console.log("HANDLE CODE THIS = ", this.state);

  }

  render() {

    return <button onClick={this.handleCode}>Click Me</button>;

  }

}
