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
var Switch = require('react-native-material-switch');

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
* `active` (Boolean) - Initial switch state (default: false),
* `style` (Object) - Styles for outer container (margins, ...),
* `inactiveButtonColor` (String) - Button color  (default: '#2196F3'),
* `inactiveButtonPressedColor` (String) (default: '#42A5F5'),
* `activeButtonColor` (String) (default: '#FAFAFA'),
* `activeButtonPressedColor` (String) (default: '#F5F5F5'),
* `buttonShadow` (Object) - Shadow style for button (default: { shadowColor: '#000', shadowOpacity: 0.5, shadowRadius: 1, shadowOffset: { height: 1, width: 0 }},
* `activeBackgroundColor` (String) - (default: 'rgba(255,255,255,.5)'),
* `inactiveBackgroundColor` (String) - (default: 'rgba(0,0,0,.5)'),
* `buttonRadius` (Number) - (default: 15),
* `switchWidth` (Number) - (default: 40),
* `switchHeight` (Number) - (default: 20),
* `buttonContent` (React.Component) - Custom inline content for switch button (default: null),
* `enableSlide` (Boolean) - (default: true),
* `enableSlideDragging` - (default: true) - Allows to change the position of the toggle by sliding. Does not work in react-native-web. If disabled, you can only toggle by pressing,
* `switchAnimationTime` (Number) - Switch animation duration (default: 200),

### Events
* `onActivate`: This function is called when the switch is activated.
* `onDeactivate`: This function is called when the switch is deactivated.
* `onChangeState`: Sends the current state of switch.

### Live example
```sh
git clone git@github.com:Recr0ns/react-native-material-switch.git
cd react-native-material-switch/examples
npm install
open ios/switchExample.xcodeproj
```
Then `Cmd+R` to start the React Packager, build and run the project in the simulator.

### License
MIT License

### Questions?
Feel free to [create an issue](https://github.com/Recr0ns/react-native-material-switch/issues)
