## Customizable material switch for react-native
<p align="center">
    <img src ="http://oi57.tinypic.com/2rysl94.jpg" />
</p>

### Content
- [Installation](#installation)
- [Usage example](#usage-example)
- [Properties](#properties)
- [Events](#events)
- [Live example](#live-example)
- [Questions?](#questions)

### Installation
```bash
npm install react-native-material-switch
```

### Usage example
```javascript
var Switch = require('react-native-side-menu');

var Application = React.createClass({
  render: function() {
    return (
      <View>
        <Switch onChangeState={(state)=>{alert(state)}}/>
      </View>
    );
  }
});
```

### Properties
## in progress

### Events
* `onActivate`: This function is called when the switch is activated.
* `onDeactivate`: This function is called when the switch is deactivated.
* `onChangeState`: Sends the current state of switch.

### Live example
Try the included `RCTYouTubeExample`:

```sh
git clone git@github.com:Recr0ns/react-native-material-switch.git
cd react-native-material-switc/examples
npm install
open ios/switchExample.xcodeproj
```
Then `Cmd+R` to start the React Packager, build and run the project in the simulator.

### License
MIT License

### Questions?
Feel free to [create an issue](https://github.com/Recr0ns/react-native-material-switch/issues)
