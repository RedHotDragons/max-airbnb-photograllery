import axios from 'axios';

class Component extends React.Component {
  constructor (props) {
    super(props);
  }

  componentDidMount () {
    axios.get('/req')
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    })
  }


  render () {
    return (
      <div>HELLLO WORLD</div>
    );
  }
}


ReactDOM.render(<Component/>, document.getElementById('app'));